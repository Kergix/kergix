"use client";

import React from "react";
import { motion } from "framer-motion";

interface CTADecorativeProps {
  className?: string;
}

export default function CTADecorative({ className = "" }: CTADecorativeProps) {
  return (
    <div className={`relative flex items-center justify-center select-none overflow-visible w-full min-h-[350px] lg:min-h-[420px] ${className}`}>
      {/* Intense background glow */}
      <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-white/5 blur-[80px] animate-pulse-glow" />
      <div className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full bg-white/5 blur-[50px] translate-x-10 translate-y-10" />

      <motion.div
        className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ perspective: 1200 }}
      >
        {/* Layer 1: Bottom metallic shard */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{
            y: [8, -12, 8],
            rotateY: [12, 18, 12],
            rotateX: [-4, 6, -4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
            <defs>
              <linearGradient id="metal-grad-d" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A5456" />
                <stop offset="50%" stopColor="#8A959C" />
                <stop offset="100%" stopColor="#10151C" />
              </linearGradient>
              <linearGradient id="edge-glow-d" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M 225,215 L 340,330 L 305,350 L 200,250 Z"
              fill="url(#metal-grad-d)"
              stroke="url(#edge-glow-d)"
              strokeWidth="1.5"
              className="opacity-80"
            />
            <path
              d="M 215,185 L 330,70 L 360,95 L 235,210 Z"
              fill="url(#metal-grad-d)"
              stroke="url(#edge-glow-d)"
              strokeWidth="1.5"
              className="opacity-65"
            />
          </svg>
        </motion.div>

        {/* Layer 2: Main glass blade */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{
            y: [-10, 14, -10],
            rotateY: [8, 3, 8],
            rotateX: [4, -6, 4],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full filter drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            <defs>
              <linearGradient id="silver-blade-d" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CCCCCC" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#8A959C" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2C3539" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="silver-edge-d" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#8A959C" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M 95,50 L 175,50 L 175,155 L 130,200 L 175,245 L 175,350 L 95,350 L 95,245 L 115,200 L 95,155 Z"
              fill="url(#silver-blade-d)"
              stroke="url(#silver-edge-d)"
              strokeWidth="2"
            />
            {/* Glass highlight overlay */}
            <path
              d="M 95,50 L 135,50 L 135,160 L 115,200 L 95,155 Z"
              fill="#FFFFFF"
              className="opacity-[0.12]"
              pointerEvents="none"
            />
          </svg>
        </motion.div>

        {/* Layer 3: Foreground arrow shard */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{
            y: [-4, 10, -4],
            x: [-3, 6, -3],
            rotateY: [3, 14, 3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="fore-silver-d" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#CCCCCC" />
              </linearGradient>
            </defs>
            <path
              d="M 175,200 L 270,110 L 305,110 L 210,200 L 305,290 L 270,290 Z"
              fill="url(#fore-silver-d)"
              className="opacity-90 drop-shadow-[0_4px_15px_rgba(255,255,255,0.15)]"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeOpacity="0.35"
            />
          </svg>
        </motion.div>

        {/* Glow center pulse */}
        <motion.div
          className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ left: "42%", top: "47%" }}
        />
      </motion.div>
    </div>
  );
}
