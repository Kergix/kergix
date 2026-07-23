"use client";

import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * Cursor-driven depth. `tilt` rotates the child toward the cursor (deg),
 * `shift` translates it (px). Negative shift moves against the cursor,
 * which reads as a nearer layer.
 */
export default function ParallaxTilt({
  children,
  className = "",
  tilt = 0,
  shift = 0,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: number;
  shift?: number;
}) {
  const prefersReduced = useReducedMotion();
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(ny, { stiffness: 55, damping: 18, mass: 0.6 });

  const rotateY = useTransform(sx, [-1, 1], [-tilt, tilt]);
  const rotateX = useTransform(sy, [-1, 1], [tilt, -tilt]);
  const x = useTransform(sx, [-1, 1], [-shift, shift]);
  const y = useTransform(sy, [-1, 1], [-shift, shift]);

  useEffect(() => {
    if (prefersReduced) return;
    const onMove = (e: MouseEvent) => {
      nx.set((e.clientX / window.innerWidth) * 2 - 1);
      ny.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [nx, ny, prefersReduced]);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{
        rotateX: tilt ? rotateX : undefined,
        rotateY: tilt ? rotateY : undefined,
        x: shift ? x : undefined,
        y: shift ? y : undefined,
        transformPerspective: tilt ? 1200 : undefined,
      }}
    >
      {children}
    </motion.div>
  );
}
