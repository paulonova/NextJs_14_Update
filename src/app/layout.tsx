import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter, Arizonia } from 'next/font/google';
import AnimatedPage from '@/components/AnimatedPage';
import { Container } from '@/components/bootstrap';
import NavBar from '@/components/NavBar';

// Google fonts
const inter = Inter({ subsets: ['latin'] });
const arizona = Arizonia({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'NextJs 13.4 Image Gallery',
  description: 'Learning Next 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
          <main className="py-4">
            <Container>
              <AnimatedPage>{children}</AnimatedPage>
            </Container>
          </main>
      </body>
    </html>
  );
}

/**
 * I have a Container component as a "Client Component" the wrap the children
 * that is a Server Component. This is happening because I pass {children}
 * as a props, and React doesn´t know in advance.
 */
