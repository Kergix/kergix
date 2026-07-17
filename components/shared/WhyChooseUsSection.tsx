"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "lucide-react";
import DotField from "@/components/home/DotField";

type Variant = "dark" | "light";

/** Theme palette — dark uses white light-glows, light uses ink + soft shadows. */
const themes = {
  dark: {
    section: "bg-bg-primary border-y border-white/10",
    dotFrom: "rgba(255, 255, 255, 0.35)",
    dotTo: "rgba(255, 255, 255, 0.1)",
    dotGlow: "rgba(255, 255, 255, 0.15)",
    wash: "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(5,7,10,0.15)_0%,rgba(5,7,10,0.5)_60%,rgba(5,7,10,0.9)_100%)]",
    titleDim: "text-white/50",
    titleStrong: "text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]",
    cardBg: (active: boolean) =>
      active ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.02)",
    cardBorder: (active: boolean) =>
      active ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.05)",
    cardShadow: (active: boolean) =>
      active
        ? "0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.05)"
        : "0 0 0 0 rgba(0,0,0,0)",
    cardTitle: (active: boolean) => (active ? "#ffffff" : "rgba(255, 255, 255, 0.6)"),
    cardDesc: (active: boolean) =>
      active ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.3)",
    sweep: "via-white/5",
    inkGlow: (a: number) => `0 0 15px rgba(255,255,255,${a})`,
    bubbleA: "bg-bg-secondary/80 border-white/10",
    bubbleAText: "text-white/80",
    bubbleAvatarRing: "border-white/20",
    bubbleB: "bg-white/10 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    bubbleBText: "text-white",
    avatarRing: "rgba(255,255,255,0.9)",
    avatarShadow: "0 0 20px rgba(255,255,255,0.2)",
    avatarBg: "bg-bg-secondary",
    chartBase: "rgba(255,255,255,0.15)",
    chartTop: "rgba(255,255,255,1)",
    badge: "bg-white text-bg-primary shadow-[0_0_10px_rgba(255,255,255,0.5)]",
    spoke: "to-white/40",
    node: "bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]",
    core: "bg-white/10 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.3)]",
    coreIcon: "text-white",
    stepOn: "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]",
    stepOff: "text-white/50",
    railOn: "bg-white",
    railOff: "bg-white/20",
    knob: "bg-white shadow-[0_0_15px_white] border-bg-primary",
    chartAxis: "border-white/10",
  },
  light: {
    section: "bg-[#F4F6F8] border-y border-black/10",
    dotFrom: "rgba(10, 14, 18, 0.22)",
    dotTo: "rgba(10, 14, 18, 0.07)",
    dotGlow: "rgba(10, 14, 18, 0.1)",
    wash: "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(244,246,248,0.2)_0%,rgba(244,246,248,0.6)_60%,rgba(244,246,248,0.95)_100%)]",
    titleDim: "text-black/40",
    titleStrong: "text-[#0B0D10]",
    cardBg: (active: boolean) =>
      active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.55)",
    cardBorder: (active: boolean) =>
      active ? "rgba(11, 13, 16, 0.14)" : "rgba(11, 13, 16, 0.06)",
    cardShadow: (active: boolean) =>
      active
        ? "0 24px 48px -16px rgba(15,18,22,0.18), 0 2px 8px rgba(15,18,22,0.06)"
        : "0 0 0 0 rgba(0,0,0,0)",
    cardTitle: (active: boolean) => (active ? "#0B0D10" : "rgba(11, 13, 16, 0.55)"),
    cardDesc: (active: boolean) =>
      active ? "rgba(11, 13, 16, 0.65)" : "rgba(11, 13, 16, 0.35)",
    sweep: "via-black/[0.04]",
    inkGlow: (a: number) => `0 6px 16px rgba(11,13,16,${a})`,
    bubbleA: "bg-white border-black/10",
    bubbleAText: "text-black/70",
    bubbleAvatarRing: "border-black/10",
    bubbleB: "bg-[#15181B] border-black/20 shadow-[0_10px_24px_rgba(11,13,16,0.25)]",
    bubbleBText: "text-white",
    avatarRing: "rgba(255,255,255,1)",
    avatarShadow: "0 8px 20px rgba(11,13,16,0.25)",
    avatarBg: "bg-gray-200",
    chartBase: "rgba(11,13,16,0.12)",
    chartTop: "#15181B",
    badge: "bg-[#15181B] text-white shadow-[0_6px_14px_rgba(11,13,16,0.3)]",
    spoke: "to-black/30",
    node: "bg-[#15181B] shadow-[0_4px_10px_rgba(11,13,16,0.35)]",
    core: "bg-white border-black/15 shadow-[0_16px_32px_rgba(11,13,16,0.15)]",
    coreIcon: "text-[#15181B]",
    stepOn: "text-[#0B0D10]",
    stepOff: "text-black/35",
    railOn: "bg-[#15181B]",
    railOff: "bg-black/15",
    knob: "bg-[#15181B] shadow-[0_4px_10px_rgba(11,13,16,0.4)] border-white",
    chartAxis: "border-black/10",
  },
} as const;

type Theme = (typeof themes)[Variant];

function SupportGraphic({ t }: { t: Theme }) {
  const avatars = [
    "https://i.pravatar.cc/150?img=32",
    "https://i.pravatar.cc/150?img=47",
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=60",
  ];
  return (
    <div className="flex -space-x-3 justify-center mb-6 mt-4">
      {avatars.map((url, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -8, 0],
            borderColor: t.avatarRing,
            boxShadow: t.avatarShadow,
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          className={`w-12 h-12 rounded-full border-2 ${t.avatarBg} flex items-center justify-center relative overflow-hidden`}
          style={{ zIndex: 10 - i }}
        >
          <Image src={url} alt={`Consultant ${i + 1}`} fill sizes="48px" className="object-cover grayscale-[20%]" />
        </motion.div>
      ))}
    </div>
  );
}

function ChatGraphic({ t }: { t: Theme }) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center mb-4 mt-1 w-full px-2">
      <motion.div
        animate={{ x: [0, -3, 0], opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className={`${t.bubbleA} rounded-2xl rounded-tl-sm p-2.5 border w-fit self-start shadow-md backdrop-blur-sm flex items-center gap-2`}
      >
        <div className={`w-5 h-5 rounded-full overflow-hidden shrink-0 border ${t.bubbleAvatarRing} relative`}>
          <Image src="https://i.pravatar.cc/150?img=68" alt="Client" fill sizes="20px" className="object-cover" />
        </div>
        <span className={`text-[10px] ${t.bubbleAText} leading-tight`}>
          Hi David! Your design draft is ready.
        </span>
      </motion.div>
      <motion.div
        animate={{ x: [0, 3, 0], opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2, ease: "easeInOut" }}
        className={`rounded-2xl rounded-tr-sm p-3 border w-fit self-end ${t.bubbleB}`}
      >
        <span className={`text-[10px] ${t.bubbleBText} font-medium leading-tight block`}>
          Want feedback before next step?
        </span>
      </motion.div>
    </div>
  );
}

function ImpactGraphic({ t }: { t: Theme }) {
  return (
    <div className={`relative flex flex-col justify-end w-full mb-6 mt-4 h-20 px-4 border-b ${t.chartAxis}`}>
      <div className="flex items-end justify-between w-full h-full gap-1">
        {[40, 25, 60, 45, 80, 55, 90, 70, 100, 65, 85].map((h, i) => {
          const isHighlighted = i >= 7;
          return (
            <motion.div
              key={i}
              animate={{
                height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
              className="w-full max-w-[8px] rounded-t-sm relative group"
              style={{
                backgroundColor: isHighlighted ? t.chartTop : t.chartBase,
                boxShadow: isHighlighted ? t.inkGlow(0.3) : "none",
              }}
            >
              {i === 8 && (
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 ${t.badge} text-[8px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap z-10`}
                >
                  +342%
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function FutureGraphic({ t }: { t: Theme }) {
  return (
    <div className="relative flex items-center justify-center mb-6 mt-4 h-24 w-full">
      <motion.div
        animate={{ rotate: 90, scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <div
            key={deg}
            className="absolute w-full flex justify-end items-center"
            style={{ transform: `rotate(${deg}deg)` }}
          >
            <div className={`w-[45%] h-[1px] bg-gradient-to-r from-transparent ${t.spoke}`} />
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className={`w-2.5 h-2.5 rounded-full flex items-center justify-center ${t.node}`}
              />
            </div>
          </div>
        ))}
      </motion.div>
      {/* Central core */}
      <div className={`w-16 h-16 rounded-2xl border z-10 flex items-center justify-center ${t.core} backdrop-blur-md`}>
        <Box className={`w-7 h-7 ${t.coreIcon}`} />
      </div>
    </div>
  );
}

function ProcessGraphic({ t }: { t: Theme }) {
  const [internalStep, setInternalStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setInternalStep((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-3.5 justify-center mb-6 mt-4 w-full px-4 md:px-8">
      {[
        { label: "Confirm plan", w: "35%", ml: "0%" },
        { label: "Internal review", w: "40%", ml: "15%" },
        { label: "Client feedback", w: "45%", ml: "35%" },
        { label: "Final export", w: "25%", ml: "75%" },
      ].map((step, i) => {
        const isHighlighted = i === internalStep;

        return (
          <div key={i} className="flex flex-col gap-1.5 relative" style={{ marginLeft: step.ml, width: step.w }}>
            <motion.span
              animate={{
                opacity: isHighlighted ? 1 : 0.3,
                y: isHighlighted ? -2 : 0,
              }}
              className={`text-[8px] md:text-[10px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-500 ${
                isHighlighted ? t.stepOn : t.stepOff
              }`}
            >
              {step.label}
            </motion.span>

            <motion.div
              animate={{
                opacity: isHighlighted ? 1 : 0.2,
                boxShadow: isHighlighted ? t.inkGlow(0.35) : "none",
              }}
              transition={{ duration: 0.4 }}
              className={`h-2 rounded-full relative w-full ${isHighlighted ? t.railOn : t.railOff}`}
            >
              {isHighlighted && (
                <motion.div
                  layoutId="timeline-indicator"
                  className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center border-2 ${t.knob}`}
                />
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

const cardsData = [
  {
    id: 0,
    title: "Personalized Support",
    description: "Work with dedicated consultants who understand your business goals.",
    gridClass: "md:col-span-1",
    Graphic: SupportGraphic,
  },
  {
    id: 1,
    title: "Constant Communication",
    description: "We stay with you from the first consultation to post-launch.",
    gridClass: "md:col-span-1",
    Graphic: ChatGraphic,
  },
  {
    id: 2,
    title: "Measurable Impact",
    description: "We track progress and show ROI at every stage to ensure lasting success.",
    gridClass: "md:col-span-1",
    Graphic: ImpactGraphic,
  },
  {
    id: 3,
    title: "Future-Ready Solutions",
    description: "We design scalable systems that keep you competitive tomorrow.",
    gridClass: "md:col-span-2 lg:col-span-1",
    Graphic: FutureGraphic,
  },
  {
    id: 4,
    title: "Transparent Process",
    description: "You'll always know what's happening with clear timelines and regular updates.",
    gridClass: "md:col-span-2 lg:col-span-2",
    Graphic: ProcessGraphic,
  },
];

export default function WhyChooseUsSection({ variant = "dark" }: { variant?: Variant }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const t = themes[variant];

  useEffect(() => {
    if (isHovered !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const displayIndex = isHovered !== null ? isHovered : activeIndex;

  return (
    <section className={`relative w-full min-h-[90vh] py-32 px-4 md:px-8 ${t.section} overflow-hidden isolate`}>
      {/* Interactive dot-field background */}
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
      {/* Legibility wash */}
      <div className={`pointer-events-none absolute inset-0 -z-10 ${t.wash}`} />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-16">

        {/* Title */}
        <div className="flex flex-col items-center text-center">
          <h2 className={`text-4xl md:text-5xl font-heading font-medium tracking-tight ${t.titleDim} leading-tight`}>
            Why Companies <br />
            Choose <span className={`${t.titleStrong} font-bold`}>Kergix</span>
          </h2>
        </div>

        {/* CSS Grid for the 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {cardsData.map((card) => {
            const isActive = displayIndex === card.id;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setIsHovered(card.id)}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  backgroundColor: t.cardBg(isActive),
                  borderColor: t.cardBorder(isActive),
                  boxShadow: t.cardShadow(isActive),
                  y: isActive ? -5 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`rounded-[2rem] p-8 flex flex-col items-center text-center backdrop-blur-md border relative overflow-hidden cursor-default group ${card.gridClass}`}
              >
                {/* Active sheen sweep */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={{ opacity: 1, x: "100%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className={`absolute inset-0 w-[200%] bg-gradient-to-r from-transparent ${t.sweep} to-transparent skew-x-12 pointer-events-none`}
                    />
                  )}
                </AnimatePresence>

                {/* Animated graphic */}
                <div className="w-full flex-1 flex flex-col justify-end">
                  <card.Graphic t={t} />
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-3 mt-auto">
                  <motion.h3
                    animate={{ color: t.cardTitle(isActive) }}
                    className="text-lg md:text-xl font-heading font-bold"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    animate={{ color: t.cardDesc(isActive) }}
                    className="text-sm leading-relaxed"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
