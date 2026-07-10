"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import IconRenderer from "@/components/shared/IconRenderer";
import { services } from "@/lib/data/services";
import { motion } from "framer-motion";

export default function ServiceQuickNav() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // 4 copies to ensure smooth infinite looping
  const duplicatedServices = [...services, ...services, ...services, ...services];

  return (
    <div className="w-full bg-bg-primary py-4 md:py-6 border-b border-border-subtle relative overflow-hidden select-none z-15">
      
      {/* Marquee Track Container */}
      <div 
        className="w-full overflow-hidden flex items-center relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Animated Marquee */}
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={reducedMotion ? {} : { x: ["0%", "-50%"] }}
          transition={
            reducedMotion
              ? {}
              : {
                  repeat: Infinity,
                  ease: "linear",
                  duration: 60,
                }
          }
          style={{ width: "max-content" }}
        >
          {duplicatedServices.map((service, idx) => (
            <Link
              key={`${service.slug}-${idx}`}
              href={`/services/${service.slug}`}
              className="group flex items-center gap-4 mx-6 md:mx-10 cursor-pointer"
            >
              {/* Subtle glass icon wrapper */}
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                <IconRenderer 
                  name={service.iconName} 
                  className="w-3.5 h-3.5 text-text-muted group-hover:text-white transition-colors duration-300" 
                />
              </div>
              
              {/* Elegant, understated typography */}
              <span 
                className={`text-sm md:text-[15px] font-semibold tracking-[0.15em] uppercase transition-all duration-300
                  ${isHovered ? "opacity-40" : "opacity-70"} 
                  text-text-muted
                  group-hover:!opacity-100 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
                `}
              >
                {service.name}
              </span>
            </Link>
          ))}
        </motion.div>
        
        {/* Smooth gradients on the edges so it fades gracefully */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg-primary to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg-primary to-transparent z-20 pointer-events-none" />
      </div>
    </div>
  );
}
