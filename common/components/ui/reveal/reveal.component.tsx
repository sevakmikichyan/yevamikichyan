"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Props } from "./types";

const Reveal: React.FC<Props> = ({ children, delay = 0, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!ref.current) return;
      if (entry.isIntersecting) {
        controls.start("visible");
      }
    },
    { threshold: 0.05 }
  );

  if (ref.current) observer.observe(ref.current);

  return () => {
    if (ref.current) observer.unobserve(ref.current);
  };
}, [controls]);


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className={className}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;