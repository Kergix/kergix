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

type Variant = "dark" | "light";

/** Tone palettes — dark stays on the black canvas, light is the "paper" version. */
const themes = {
  dark: {
    section: "bg-bg-primary focus-visible:ring-border-strong",
    dotFrom: "rgba(255, 255, 255, 0.35)",
    dotTo: "rgba(255, 255, 255, 0.1)",
    dotGlow: "rgba(255, 255, 255, 0.15)",
    wash: "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(5,7,10,0.15)_0%,rgba(5,7,10,0.5)_60%,rgba(5,7,10,0.9)_100%)]",
    eyebrow: "text-silver-mid",
    heading: "text-text-primary",
    body: "text-text-secondary",
    iconBox: "border-white/12 bg-white/6",
    icon: "text-silver-bright",
    cta: "btn-metal",
    panel: "border-white/10 bg-white/5",
    panelDivider: "border-white/10",
    pill: "border-white/20 bg-white/8 text-silver-bright",
    check: "text-silver",
    featureText: "text-text-primary",
    navBtn: "border-white/10 bg-white/5 text-text-secondary hover:border-white/30 hover:text-white",
    counter: "text-metal-light",
    tickOn: "bg-silver-bright",
    tickOff: "bg-white/25 hover:bg-white/50",
  },
  light: {
    section: "bg-[#F4F6F8] border-y border-black/10 focus-visible:ring-black/20",
    dotFrom: "rgba(10, 14, 18, 0.22)",
    dotTo: "rgba(10, 14, 18, 0.07)",
    dotGlow: "rgba(10, 14, 18, 0.1)",
    wash: "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(244,246,248,0.2)_0%,rgba(244,246,248,0.6)_60%,rgba(244,246,248,0.95)_100%)]",
    eyebrow: "text-black/45",
    heading: "text-[#0B0D10]",
    body: "text-black/60",
    iconBox: "border-black/10 bg-white shadow-[0_8px_20px_rgba(15,18,22,0.08)]",
    icon: "text-[#15181B]",
    cta: "bg-[#15181B] text-white shadow-[0_12px_28px_rgba(11,13,16,0.25)] transition-all hover:bg-black active:scale-[0.98]",
    panel: "border-black/10 bg-white shadow-[0_24px_48px_-20px_rgba(15,18,22,0.15)]",
    panelDivider: "border-black/10",
    pill: "border-black/15 bg-[#15181B]/5 text-[#0B0D10]",
    check: "text-[#15181B]",
    featureText: "text-black/75",
    navBtn: "border-black/10 bg-white text-black/50 hover:border-black/30 hover:text-black shadow-sm",
    counter: "text-black/60",
    tickOn: "bg-[#15181B]",
    tickOff: "bg-black/20 hover:bg-black/40",
  },
} as const;

interface ServiceDetailsPaginatedProps {
  modules?: ServiceModule[];
  initialSlug?: string;
  className?: string;
  variant?: Variant;
}

export default function ServiceDetailsPaginated({
  modules = serviceModules,
  initialSlug,
  className = "",
  variant = "dark",
}: ServiceDetailsPaginatedProps) {
  const t = themes[variant];
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
      className={`relative isolate overflow-hidden py-16 md:py-24 outline-none focus-visible:ring-1 ${t.section} ${className}`}
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
            gradientFrom={t.dotFrom}
            gradientTo={t.dotTo}
            glowColor={t.dotGlow}
          />
        </div>
      )}
      
      {/* Legibility wash — reduced opacity to let the dots shine through better */}
      <div className={`pointer-events-none absolute inset-0 -z-10 ${t.wash}`} />

      <div className="mx-auto max-w-[1536px] px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className={`font-heading text-xs font-extrabold uppercase tracking-[0.2em] ${t.eyebrow}`}>
              Service Ecosystem
            </span>
            <h2 className={`font-heading text-2xl font-extrabold tracking-tight md:text-3xl ${t.heading}`}>
              Module Deep Dive
            </h2>
          </div>

          {/* Pagination controls (top on desktop) */}
          <div className="hidden items-center gap-4 sm:flex">
            <PaginationControls
              counter={counter}
              onPrev={() => paginate(-1)}
              onNext={() => paginate(1)}
              t={t}
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
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border backdrop-blur-sm ${t.iconBox}`}>
                    <Icon className={`h-7 w-7 ${t.icon}`} strokeWidth={1.5} />
                  </div>
                  <h3 className={`font-heading text-2xl font-bold leading-tight tracking-tight md:text-3xl ${t.heading}`}>
                    {activeModule.title}
                  </h3>
                </motion.div>

                <motion.div
                  variants={childVariants}
                  className={`mt-6 flex flex-col gap-4 text-sm leading-relaxed md:text-base ${t.body}`}
                >
                  {activeModule.fullDescription && activeModule.fullDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </motion.div>

                <motion.div variants={childVariants} className="mt-8">
                  <Link
                    href={`/services/${activeModule.slug}`}
                    className={`group inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-bold ${t.cta}`}
                  >
                    <span>Start this module</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Right column — Key Deliverables box */}
              <motion.div
                variants={childVariants}
                className={`flex flex-col rounded-2xl border p-6 backdrop-blur-md md:p-8 ${t.panel}`}
              >
                <div className={`flex flex-col gap-4 border-b pb-6 ${t.panelDivider}`}>
                  <span className={`font-heading text-xs font-extrabold uppercase tracking-[0.2em] ${t.eyebrow}`}>
                    Key Deliverables
                  </span>
                  <span className={`w-fit rounded-full border px-4 py-1.5 font-heading text-sm font-bold ${t.pill}`}>
                    {activeModule.deliverable || "Core System Delivery"}
                  </span>
                </div>

                <ul className="mt-6 flex flex-col gap-4">
                  {activeModule.keyFeatures && activeModule.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${t.check}`} strokeWidth={1.75} />
                      <span className={`text-sm font-medium leading-snug md:text-[15px] ${t.featureText}`}>
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
            t={t}
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
                    ? `w-8 ${t.tickOn}`
                    : `w-1.5 ${t.tickOff}`
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
  t,
}: {
  counter: string;
  onPrev: () => void;
  onNext: () => void;
  t: (typeof themes)[Variant];
}) {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        type="button"
        aria-label="Previous module"
        onClick={onPrev}
        whileTap={{ scale: 0.95 }}
        className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-colors ${t.navBtn}`}
      >
        <ChevronLeft className="h-5 w-5" />
      </motion.button>

      <span className={`min-w-[72px] text-center font-heading text-base font-bold tabular-nums tracking-widest ${t.counter}`}>
        {counter}
      </span>

      <motion.button
        type="button"
        aria-label="Next module"
        onClick={onNext}
        whileTap={{ scale: 0.95 }}
        className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-colors ${t.navBtn}`}
      >
        <ChevronRight className="h-5 w-5" />
      </motion.button>
    </div>
  );
}
