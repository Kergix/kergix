"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedHeadline({
  children,
  className,
  delay,
  yOffset,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  yOffset: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.span
      className={className}
      style={style}
      initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.span>
  );
}

export function AnimatedMobileHeadline({
  children,
  className,
  delay,
  yOffset,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  yOffset: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedLaptop({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({
  children,
  className,
  delay,
  xOffset = 0,
  yOffset = 0,
  duration = 0.9,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  xOffset?: number;
  yOffset?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: xOffset, y: yOffset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
