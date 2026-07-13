"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation, useMotionValue, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ServiceModule } from "@/lib/data/services";
import ServiceSliderCard from "./ServiceSliderCard";

interface ServicesModuleSliderProps {
  modules: ServiceModule[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
}

export default function ServicesModuleSlider({
  modules,
  autoplay = true,
  autoplayInterval = 5000,
  className = "",
}: ServicesModuleSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(24);
  const [containerWidth, setContainerWidth] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Resize Observer for responsive calculation
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setContainerWidth(width);

        let newGap = 24;
        let newCardWidth = 0;

        if (width < 768) {
          newGap = 16;
          newCardWidth = width;
        } else if (width < 1024) {
          newGap = 24;
          newCardWidth = width * 0.46;
        } else if (width < 1536) {
          newGap = 24;
          newCardWidth = width * 0.30;
        } else {
          newGap = 24;
          newCardWidth = Math.min(width * 0.30, 420);
        }

        setGap(newGap);
        setCardWidth(newCardWidth);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const itemWidth = cardWidth + gap;

  // Sync index to x position when not dragging
  useEffect(() => {
    if (itemWidth === 0) return;

    // Calculate max visible index based on visible items
    let visibleItems = 1;
    if (containerWidth >= 1024) visibleItems = 3;
    else if (containerWidth >= 768) visibleItems = 2;

    const maxIndex = Math.max(0, modules.length - visibleItems);
    const clampedIndex = Math.min(currentIndex, maxIndex);

    const targetX = -clampedIndex * itemWidth;

    if (reducedMotion) {
      controls.set({ x: targetX });
    } else {
      controls.start({
        x: targetX,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
      });
    }
  }, [currentIndex, itemWidth, controls, modules.length, containerWidth, reducedMotion]);

  // Handle Autoplay and Page Visibility
  useEffect(() => {
    if (!autoplay || isPaused || reducedMotion) return;

    let timer: NodeJS.Timeout;

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        setIsPaused(true);
      } else {
        // Resume after 3s when returning
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modules.length);
    }, autoplayInterval);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [autoplay, isPaused, autoplayInterval, modules.length, reducedMotion]);

  // Interaction handlers
  const handleInteractionStart = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  };

  const handleInteractionEnd = () => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Drag logic
  const handleDragEnd = (e: any, info: PanInfo) => {
    handleInteractionEnd();
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    let visibleItems = 1;
    if (containerWidth >= 1024) visibleItems = 3;
    else if (containerWidth >= 768) visibleItems = 2;

    const maxIndex = Math.max(0, modules.length - visibleItems);

    // Direction: negative offset = moving left (next slide)
    let indexChange = 0;

    if (Math.abs(offset) > itemWidth * 0.3 || Math.abs(velocity) > 400) {
      if (offset < 0) {
        indexChange = Math.ceil(Math.abs(offset) / itemWidth);
      } else {
        indexChange = -Math.ceil(Math.abs(offset) / itemWidth);
      }
    }

    let newIndex = currentIndex + indexChange;
    newIndex = Math.max(0, Math.min(newIndex, maxIndex));

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    } else {
      // Snap back
      controls.start({
        x: -currentIndex * itemWidth,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
      });
    }
  };

  // Navigation handlers
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % modules.length);
  }, [modules.length]);

  const goToPrev = useCallback(() => {
    let visibleItems = 1;
    if (containerWidth >= 1024) visibleItems = 3;
    else if (containerWidth >= 768) visibleItems = 2;
    const maxIndex = Math.max(0, modules.length - visibleItems);

    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [modules.length, containerWidth]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "ArrowRight") goToNext();
  };

  // Progress Bar for dots
  const ProgressBar = ({ isActive }: { isActive: boolean }) => {
    return (
      <div className="absolute top-full mt-2 left-0 w-full h-[2px] bg-border-subtle rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent-cyan"
          initial={{ width: "0%" }}
          animate={{ width: isActive && !isPaused && !reducedMotion ? "100%" : isActive && isPaused ? "100%" : "0%" }}
          transition={{
            duration: isActive && !isPaused && !reducedMotion ? autoplayInterval / 1000 : 0,
            ease: "linear"
          }}
          style={{ width: isActive && isPaused ? undefined : "0%" }}
        />
      </div>
    );
  };

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onFocus={handleInteractionStart}
      onBlur={handleInteractionEnd}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Our services"
    >
      {/* SVG Defs for Gradient Stroke */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent-cyan-bright, #00E6FA)" />
            <stop offset="45%" stopColor="var(--color-accent-cyan, #00D2F0)" />
            <stop offset="100%" stopColor="var(--color-accent-teal-deep, #0082AA)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative">

        {/* Track Container */}
        <div
          ref={containerRef}
          className="w-full relative touch-pan-y"
          style={{ touchAction: "pan-y" }}
        >
          <motion.div
            className="flex"
            style={{ gap: `${gap}px`, x }}
            animate={controls}
            drag="x"
            dragElastic={0.15}
            onDragStart={handleInteractionStart}
            onDragEnd={handleDragEnd}
            dragConstraints={containerRef}
            aria-roledescription="carousel"
          >
            {modules.map((module, idx) => (
              <motion.div
                key={module.id}
                style={{ width: cardWidth > 0 ? `${cardWidth}px` : "100%" }}
                className="shrink-0"
              >
                <ServiceSliderCard module={module} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none px-2">
          <div className="flex justify-between items-center w-full">
            <button
              onClick={goToPrev}
              aria-label="Previous service"
              className="w-11 h-11 rounded-full border border-border-subtle bg-bg-primary/50 backdrop-blur-md flex items-center justify-center text-text-primary hover:border-border-strong hover:text-accent-cyan transition-colors pointer-events-auto shadow-lg -translate-x-1/2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next service"
              className="w-11 h-11 rounded-full border border-border-subtle bg-bg-primary/50 backdrop-blur-md flex items-center justify-center text-text-primary hover:border-border-strong hover:text-accent-cyan transition-colors pointer-events-auto shadow-lg translate-x-1/2"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex lg:hidden justify-center items-center gap-4 mt-8">
          <button
            onClick={goToPrev}
            aria-label="Previous service"
            className="w-11 h-11 rounded-full border border-border-subtle bg-bg-primary flex items-center justify-center text-text-primary hover:border-border-strong hover:text-accent-cyan transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next service"
            className="w-11 h-11 rounded-full border border-border-subtle bg-bg-primary flex items-center justify-center text-text-primary hover:border-border-strong hover:text-accent-cyan transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8 lg:mt-12">
          {modules.map((module, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div key={`dot-${module.id}`} className="relative flex flex-col items-center">
                <button
                  aria-label={`Go to ${module.title} slide`}
                  aria-current={isActive ? "true" : "false"}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${isActive ? "bg-accent-cyan opacity-100 scale-110" : "bg-metal-mid opacity-40 hover:opacity-70"
                    }`}
                />
                {/* Autoplay Progress Bar */}
                <ProgressBar isActive={isActive} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
