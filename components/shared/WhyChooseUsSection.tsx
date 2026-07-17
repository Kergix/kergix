"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, BarChart3, Hexagon, GitPullRequest, Box } from "lucide-react";
import DotField from "@/components/home/DotField";

const cardsData = [
  {
    id: 0,
    title: "Personalized Support",
    description: "Work with dedicated consultants who understand your business goals.",
    gridClass: "md:col-span-1",
    Graphic: () => {
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
                borderColor: "rgba(255,255,255,0.9)",
                boxShadow: "0 0 20px rgba(255,255,255,0.2)"
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
              className="w-12 h-12 rounded-full border-2 bg-bg-secondary flex items-center justify-center relative overflow-hidden"
              style={{ zIndex: 10 - i }}
            >
              <Image src={url} alt={`Consultant ${i + 1}`} fill sizes="48px" className="object-cover grayscale-[20%]" />
            </motion.div>
          ))}
        </div>
      );
    },
  },
  {
    id: 1,
    title: "Constant Communication",
    description: "We stay with you from the first consultation to post-launch.",
    gridClass: "md:col-span-1",
    Graphic: () => (
      <div className="flex flex-col gap-3 items-center justify-center mb-4 mt-1 w-full px-2">
        <motion.div
          animate={{ x: [0, -3, 0], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-bg-secondary/80 rounded-2xl rounded-tl-sm p-2.5 border border-white/10 w-fit self-start shadow-md backdrop-blur-sm flex items-center gap-2"
        >
          <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/20 relative">
            <Image src="https://i.pravatar.cc/150?img=68" alt="Client" fill sizes="20px" className="object-cover" />
          </div>
          <span className="text-[10px] text-white/80 leading-tight">
            Hi David! Your design draft is ready.
          </span>
        </motion.div>
        <motion.div
          animate={{ x: [0, 3, 0], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2, ease: "easeInOut" }}
          className="rounded-2xl rounded-tr-sm p-3 border w-fit self-end shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/10 border-white/40"
        >
          <span className="text-[10px] text-white font-medium leading-tight block">
            Want feedback before next step?
          </span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Measurable Impact",
    description: "We track progress and show ROI at every stage to ensure lasting success.",
    gridClass: "md:col-span-1",
    Graphic: () => (
      <div className="relative flex flex-col justify-end w-full mb-6 mt-4 h-20 px-4 border-b border-white/10">
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
                  backgroundColor: isHighlighted ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.15)",
                  boxShadow: isHighlighted ? "0 0 15px rgba(255,255,255,0.5)" : "none"
                }}
              >
                {i === 8 && (
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-bg-primary text-[8px] font-bold px-1.5 py-0.5 rounded shadow-[0_0_10px_rgba(255,255,255,0.5)] whitespace-nowrap z-10"
                  >
                    +342%
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Future-Ready Solutions",
    description: "We design scalable systems that keep you competitive tomorrow.",
    gridClass: "md:col-span-2 lg:col-span-1",
    Graphic: () => (
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
              <div className="w-[45%] h-[1px] bg-gradient-to-r from-transparent to-white/40" />
              {/* Outer nodes */}
              <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2.5 h-2.5 rounded-full flex items-center justify-center bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
                />
              </div>
            </div>
          ))}
        </motion.div>
        {/* Central Core */}
        <div className="w-16 h-16 rounded-2xl border z-10 flex items-center justify-center bg-white/10 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-md">
          <Box className="w-7 h-7 text-white" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Transparent Process",
    description: "You'll always know what's happening with clear timelines and regular updates.",
    gridClass: "md:col-span-2 lg:col-span-2",
    Graphic: () => {
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
                    y: isHighlighted ? -2 : 0
                  }}
                  className={`text-[8px] md:text-[10px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-500 ${isHighlighted ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-white/50'}`}
                >
                  {step.label}
                </motion.span>
                
                <motion.div
                  animate={{
                    opacity: isHighlighted ? 1 : 0.2,
                    boxShadow: isHighlighted ? "0 0 15px rgba(255,255,255,0.6)" : "none",
                  }}
                  transition={{ duration: 0.4 }}
                  className={`h-2 rounded-full relative w-full ${isHighlighted ? 'bg-white' : 'bg-white/20'}`}
                >
                  {isHighlighted && (
                    <motion.div 
                      layoutId="timeline-indicator"
                      className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white] flex items-center justify-center border-2 border-bg-primary" 
                    />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      );
    },
  },
];

export default function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    if (isHovered !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const displayIndex = isHovered !== null ? isHovered : activeIndex;

  return (
    <section className="relative w-full min-h-[90vh] py-32 px-4 md:px-8 border-y border-white/10 bg-bg-primary overflow-hidden isolate">
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
          gradientFrom="rgba(255, 255, 255, 0.35)"
          gradientTo="rgba(255, 255, 255, 0.1)"
          glowColor="rgba(255, 255, 255, 0.15)"
        />
      </div>
      {/* Legibility wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(5,7,10,0.15)_0%,rgba(5,7,10,0.5)_60%,rgba(5,7,10,0.9)_100%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Title Exactly Matching Reference */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-white/50 leading-tight">
            Why Companies <br />
            Choose <span className="text-white font-bold drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">Kergix</span>
          </h2>
        </div>

        {/* CSS Grid for the 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {cardsData.map((card, idx) => {
            const isActive = displayIndex === card.id;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setIsHovered(card.id)}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  backgroundColor: isActive ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.02)",
                  borderColor: isActive ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: isActive ? "0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.05)" : "0 0 0 0 rgba(0,0,0,0)",
                  y: isActive ? -5 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`rounded-[2rem] p-8 flex flex-col items-center text-center backdrop-blur-md border relative overflow-hidden cursor-default group ${card.gridClass}`}
              >
                {/* Active Sheer Gradient Sweep */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={{ opacity: 1, x: "100%" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Animated Graphic Component */}
                <div className="w-full flex-1 flex flex-col justify-end">
                  <card.Graphic />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3 mt-auto">
                  <motion.h3
                    animate={{
                      color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
                    }}
                    className="text-lg md:text-xl font-heading font-bold"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    animate={{
                      color: isActive ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.3)",
                    }}
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
