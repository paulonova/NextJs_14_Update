'use client';
import React from 'react';
import { Container, Navbar } from '@/components/bootstrap';
import { Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname} from 'next/navigation';

function NavBar() {

  const pathName = usePathname();
  
  return (
    <Navbar
      bg="primary"
      expand="sm"
      variant="dark"
      sticky="top"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href='/' as={Link}>NextJs 13.4 Image Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" >
          <Nav>
            <Nav.Link as={Link} href='/about' active={pathName === "/about"}>About us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} href='/static' active={pathName === "/static"}>Static Image</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} href='/dynamic' active={pathName === "/dynamic"}>Dynamic Image</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} href='/isr' active={pathName === "/isr"}>ISR</Nav.Link>
          </Nav>
          <NavDropdown className='text-white-50' title='Topics' id='topics-dropdown'>
            <NavDropdown.Item as={Link} href='/topics/music'>Music</NavDropdown.Item>
            <NavDropdown.Item as={Link} href='/topics/coding'>Coding</NavDropdown.Item>
            <NavDropdown.Item as={Link} href='/topics/instruments'>Instruments</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
function setTarget(target: any) {
  throw new Error('Function not implemented.');
}

