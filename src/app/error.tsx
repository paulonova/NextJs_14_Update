"use client";  // Error components must be Client Components
import React, { useEffect } from "react";
import { MdError } from "react-icons/md";
import styles from "./error.module.scss";
import { Button } from "react-bootstrap";

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void;
}

function Error({ error, reset }: ErrorPageProps) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  
  return (
    <div className={styles["error-block"]}>
      <h1>
        Error <MdError />
      </h1>
      <p>Something went wrong..</p>
      <Button className="" onClick={() => reset()}>
        Reset
      </Button>
    </div>
  );
}

export default Error;

