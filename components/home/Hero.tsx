"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import DotField from "./DotField";
const HEADLINE_GRADIENT =
  "linear-gradient(105deg, #FFFFFF 0%, #EEF2F4 30%, #C5CED3 65%, #9AA8AF 100%)";

function LaptopRender({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
    >
      <div className="absolute inset-4 rounded-[48px] bg-gradient-to-b from-[#131516]/80 via-[#131516]/50 to-transparent blur-[56px] z-0" />
      <div className="absolute inset-8 rounded-[48px] bg-[#131516]/60 blur-[72px] z-0" />
      <div className="relative z-10">
        <Image
          src="/hero-laptop-gray-tinted.png"
          alt="Kergix dashboard on a laptop showing performance and analytics"
          width={800}
          height={820}
          priority
          sizes="(max-width: 1024px) 88vw, 620px"
          className="w-full h-auto select-none [filter:contrast(1.1)_brightness(1.06)_saturate(0.92)] drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
        />
      </div>
    </motion.div>
  );
}

const capabilities = ["Evaluation & Design", "Custom software", "Web Development"];

function CapabilityList() {
  return (
    <div className="flex flex-col gap-3 select-none">
      {capabilities.map((c) => (
        <span
          key={c}
          className="text-text-secondary text-sm md:text-base transition-colors duration-200 hover:text-text-primary cursor-default"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function InfoCard() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-secondary/40 backdrop-blur-sm p-5 w-full">
      <p className="text-text-secondary text-sm leading-relaxed">
        Ready to build something exceptional? Let&apos;s bring your idea to life.
      </p>
    </div>
  );
}

function ExperienceCard() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-secondary/40 backdrop-blur-sm px-5 py-4 flex items-center gap-3 w-full">
      <span className="font-heading font-bold text-text-primary text-4xl leading-none">
        5+
      </span>
      <span className="text-text-secondary text-sm leading-tight">
        Years Of
        <br />
        Experience
      </span>
    </div>
  );
}

function GetStartedCard() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-secondary/40 backdrop-blur-sm p-5 w-full">
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        Partner with our expert engineers to create scalable, secure digital solutions.
      </p>
      <Link
        href="/contact"
        className="inline-flex px-6 py-2.5 rounded-full bg-text-primary text-bg-primary font-heading font-bold text-sm hover:brightness-90 active:scale-[0.98] transition-all shadow-lg shadow-black/20"
      >
        Get Started
      </Link>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 md:pt-24 pb-16 px-4 md:px-8 bg-bg-primary overflow-hidden z-10 flex items-center">
      {/* Ambient glow */}
      <div className="absolute right-[-8%] top-[-12%] w-[680px] h-[680px] rounded-full bg-[#131516] blur-[150px] z-0 pointer-events-none" />
      <div className="absolute right-[6%] top-[20%] w-[420px] h-[420px] rounded-full bg-[#131516] blur-[120px] z-0 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[45%] rounded-full bg-[#131516] blur-[100px] z-0 pointer-events-none" />

      {/* Interactive dot-field background */}
      <div className="pointer-events-none absolute inset-0 z-0">
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

      {/* ═══════════ Desktop ═══════════ */}
      <div className="hidden lg:block relative w-full max-w-7xl mx-auto min-h-[720px] xl:min-h-[780px] z-10">

        {/* Headlines */}
        <h1 className="absolute inset-0 z-10 font-heading font-bold tracking-[-0.03em] leading-[0.9] pointer-events-none">
          <motion.span
            className="absolute top-[12%] left-0 w-full text-center text-[clamp(4rem,10.5vw,10rem)] bg-clip-text text-transparent"
            style={{ backgroundImage: HEADLINE_GRADIENT }}
            initial={{ opacity: 0, y: -50, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          >
            Your Vision
          </motion.span>
          <motion.span
            className="absolute bottom-[12%] right-[2%] z-0 text-[clamp(4rem,10.5vw,10rem)] bg-clip-text text-transparent"
            style={{ backgroundImage: HEADLINE_GRADIENT }}
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            Our Code
          </motion.span>
        </h1>

        {/* Laptop — centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[47%] max-w-[620px] z-20">
          <LaptopRender />
        </div>

        {/* Capability list — mid left */}
        <motion.div
          className="absolute left-[1%] top-[43%] z-30"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <CapabilityList />
        </motion.div>

        {/* Get Started card — bottom left */}
        <motion.div
          className="absolute left-[1%] bottom-[3%] w-[280px] z-40"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <GetStartedCard />
        </motion.div>

        {/* Info card — mid right */}
        <motion.div
          className="absolute right-[1%] top-[27%] w-[240px] z-40"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <InfoCard />
        </motion.div>

        {/* Experience card — lower right */}
        <motion.div
          className="absolute right-[5%] top-[50%] w-[240px] z-40"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <ExperienceCard />
        </motion.div>
      </div>

      {/* ═══════════ Mobile / tablet ═══════════ */}
      <div className="lg:hidden relative w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-8 z-10">
        <h1 className="sr-only">Your Vision Our Code</h1>

        <motion.div
          className="font-heading font-bold tracking-[-0.03em] leading-[0.92] text-[clamp(3rem,15vw,5.5rem)]"
          initial={{ opacity: 0, y: -30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block bg-clip-text text-transparent" style={{ backgroundImage: HEADLINE_GRADIENT }}>
            Your Vision
          </span>
        </motion.div>

        <LaptopRender className="w-full max-w-[440px]" />

        <motion.div
          className="font-heading font-bold tracking-[-0.03em] leading-[0.92] text-[clamp(3rem,15vw,5.5rem)]"
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block bg-clip-text text-transparent" style={{ backgroundImage: HEADLINE_GRADIENT }}>
            Our Code
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CapabilityList />
        </motion.div>

        <motion.div
          className="w-full flex flex-col gap-4 max-w-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <GetStartedCard />
          <InfoCard />
          <ExperienceCard />
        </motion.div>
      </div>
    </section>
  );
}
