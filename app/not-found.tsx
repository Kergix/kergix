"use client";

import React from "react";
import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-bg-primary text-center px-6 py-32 relative overflow-hidden select-none">
      {/* Background glow spot */}
      <div className="absolute w-[300px] h-[300px] bg-accent-cyan/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex flex-col items-center gap-6 relative z-10 max-w-md">
        <Compass className="w-16 h-16 text-accent-cyan-bright animate-spin-slow" />
        
        <div className="flex flex-col gap-2">
          <span className="font-heading font-extrabold text-7xl text-border-strong tracking-tighter">
            404
          </span>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-text-primary leading-tight">
            System Route Not Found
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed mt-2">
            The path you are looking for does not exist or has been relocated to another address. Use the button below to return to safety.
          </p>
        </div>

        <Link
          href="/"
          className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-teal-deep text-bg-primary font-heading font-bold text-sm md:text-base hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,210,240,0.15)] cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
