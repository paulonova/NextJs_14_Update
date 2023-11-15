"use client"

import React from 'react'
import { MdError } from "react-icons/md";
import styles from './error.module.scss'
import { Button } from 'react-bootstrap';

interface ErrorPageProps{
  error: Error,
  reset: ()=> void,
}

function Error({error, reset}: ErrorPageProps) {
  return (
    <div className={styles['error-block']}>
      <h1>Error <MdError/></h1>
      <p>Something went wrong..</p>
      <Button className='' onClick={reset}>Reset</Button>
    </div>
  )
}

export default Error
