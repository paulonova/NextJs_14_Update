"use client"
import React, { ReactNode } from 'react'
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

interface AnimatedPageProps {
  children: ReactNode;
}

function AnimatedPage({children}: AnimatedPageProps) {
  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
  )
}

export default AnimatedPage;
