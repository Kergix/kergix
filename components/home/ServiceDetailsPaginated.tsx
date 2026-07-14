"use client";

import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Globe,
  Code2,
  Layout,
  BrainCircuit,
  TrendingUp,
  Cloud,
  Users,
  ShieldCheck,
} from "lucide-react";
import { serviceModules, type ServiceModule } from "@/lib/data/services";
import DotField from "./DotField";

const iconMap = {
  Globe,
  Code2,
  Layout,
  BrainCircuit,
  TrendingUp,
  Cloud,
  Users,
  ShieldCheck,
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

interface ServiceDetailsPaginatedProps {
  modules?: ServiceModule[];
  initialSlug?: string;
  className?: string;
}

export default function ServiceDetailsPaginated({
  modules = serviceModules,
  initialSlug,
  className = "",
}: ServiceDetailsPaginatedProps) {
  const total = modules.length;
  const prefersReduced = useReducedMotion();

  const startIndex = useMemo(() => {
    if (!initialSlug) return 0;
    const i = modules.findIndex((m) => m.slug === initialSlug);
    return i < 0 ? 0 : i;
  }, [modules, initialSlug]);

  const [[index, direction], setState] = useState<[number, number]>([startIndex, 0]);
  const rootRef = useRef<HTMLElement>(null);
  
  // To ensure DotField renders correctly after hydration
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [prevStart, setPrevStart] = useState(startIndex);
  if (startIndex !== prevStart) {
    setPrevStart(startIndex);
    setState([startIndex, 0]);
  }

  const paginate = useCallback(
    (dir: number) => {
      setState(([prev]) => [(prev + dir + total) % total, dir]);
    },
    [total]
  );

  const goTo = useCallback(
    (target: number) => {
      setState(([prev]) => [target, target > prev ? 1 : -1]);
    },
    []
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        paginate(1);
      }
    },
    [paginate]
  );

  const activeModule = modules[index];
  const Icon = iconMap[activeModule.icon] ?? Globe;

  const slide = prefersReduced ? 0 : 48;

  const containerVariants: Variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? slide : -slide }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReduced ? 0 : 0.45,
        ease: EASE,
        when: "beforeChildren",
        delayChildren: prefersReduced ? 0 : 0.05,
        staggerChildren: prefersReduced ? 0 : 0.05,
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir >= 0 ? -slide : slide,
      transition: { duration: prefersReduced ? 0 : 0.35, ease: EASE },
    }),
  };

  const childVariants: Variants = {
    enter: { opacity: 0, y: prefersReduced ? 0 : 14 },
    center: { opacity: 1, y: 0, transition: { duration: prefersReduced ? 0 : 0.4, ease: EASE } },
    exit: { opacity: 0 },
  };

  const counter = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <section
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Module deep dive"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={`relative isolate overflow-hidden bg-bg-primary py-16 md:py-24 outline-none focus-visible:ring-1 focus-visible:ring-border-strong ${className}`}
    >
      {/* Interactive dot-field background */}
      {isMounted && (
        <div className="pointer-events-none absolute inset-0 -z-20">
          <DotField
            dotRadius={2.0}
            dotSpacing={16}
            bulgeStrength={60}
            glowRadius={200}
            cursorRadius={340}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(0, 230, 250, 0.35)"
            gradientTo="rgba(0, 130, 170, 0.12)"
            glowColor="rgba(0, 230, 250, 0.22)"
          />
        </div>
      )}
      
      {/* Legibility wash — reduced opacity to let the dots shine through better */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(5,7,10,0.15)_0%,rgba(5,7,10,0.5)_60%,rgba(5,7,10,0.9)_100%)]" />

      <div className="mx-auto max-w-[1536px] px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-accent-cyan">
              Service Ecosystem
            </span>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-text-primary md:text-3xl">
              Module Deep Dive
            </h2>
          </div>

          {/* Pagination controls (top on desktop) */}
          <div className="hidden items-center gap-4 sm:flex">
            <PaginationControls
              counter={counter}
              onPrev={() => paginate(-1)}
              onNext={() => paginate(1)}
            />
          </div>
        </div>

        {/* Animated content */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="relative mt-10 min-h-[620px] md:min-h-[520px] lg:min-h-[440px]"
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={activeModule.id}
              custom={direction}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
            >
              {/* Left column */}
              <div className="flex flex-col">
                <motion.div variants={childVariants} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-cyan/25 bg-accent-cyan/10 backdrop-blur-sm">
                    <Icon className="h-7 w-7 text-accent-cyan-bright" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold leading-tight tracking-tight text-text-primary md:text-3xl">
                    {activeModule.title}
                  </h3>
                </motion.div>

                <motion.div
                  variants={childVariants}
                  className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-text-secondary md:text-base"
                >
                  {activeModule.fullDescription && activeModule.fullDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </motion.div>

                <motion.div variants={childVariants} className="mt-8">
                  <Link
                    href={`/services/${activeModule.slug}`}
                    className="group inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan-bright to-accent-cyan-mid px-6 py-3 font-heading text-sm font-bold text-[#03181E] shadow-[0_0_20px_rgba(0,230,250,0.25)] transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    <span>Start this module</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Right column — Key Deliverables box */}
              <motion.div
                variants={childVariants}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
                  <span className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-accent-cyan">
                    Key Deliverables
                  </span>
                  <span className="w-fit rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-1.5 font-heading text-sm font-bold text-accent-cyan-bright">
                    {activeModule.deliverable || "Core System Delivery"}
                  </span>
                </div>

                <ul className="mt-6 flex flex-col gap-4">
                  {activeModule.keyFeatures && activeModule.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-cyan" strokeWidth={1.75} />
                      <span className="text-sm font-medium leading-snug text-text-primary md:text-[15px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination controls (bottom on mobile) */}
        <div className="mt-10 flex justify-center sm:hidden">
          <PaginationControls
            counter={counter}
            onPrev={() => paginate(-1)}
            onNext={() => paginate(1)}
          />
        </div>

        {/* Progress ticks */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {modules.map((m, i) => {
            const active = i === index;
            return (
              <button
                key={m.id}
                type="button"
                aria-label={`Go to ${m.title}`}
                aria-current={active ? "true" : undefined}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active
                    ? "w-8 bg-accent-cyan"
                    : "w-1.5 bg-white/25 hover:bg-accent-cyan/60"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PaginationControls({
  counter,
  onPrev,
  onNext,
}: {
  counter: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        type="button"
        aria-label="Previous module"
        onClick={onPrev}
        whileTap={{ scale: 0.95 }}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-secondary backdrop-blur-md transition-colors hover:border-white/30 hover:text-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </motion.button>

      <span className="min-w-[72px] text-center font-heading text-base font-bold tabular-nums tracking-widest text-metal-light">
        {counter}
      </span>

      <motion.button
        type="button"
        aria-label="Next module"
        onClick={onNext}
        whileTap={{ scale: 0.95 }}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-secondary backdrop-blur-md transition-colors hover:border-white/30 hover:text-white"
      >
        <ChevronRight className="h-5 w-5" />
      </motion.button>
    </div>
  );
}
