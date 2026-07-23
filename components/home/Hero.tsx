import React from "react";
import Link from "next/link";
import Image from "next/image";
import DotField from "./DotField";
import HeroScreenLive from "./HeroScreenLive";
import HeroCallouts from "./HeroCallouts";
import ParallaxTilt from "./ParallaxTilt";
import {
  AnimatedHeadline,
  AnimatedMobileHeadline,
  AnimatedLaptop,
  AnimatedCard
} from "./HeroAnimations";

function LaptopRender({ className = "", callouts = false }: { className?: string; callouts?: boolean }) {
  return (
    <AnimatedLaptop className={`relative ${className}`}>
      <div className="absolute inset-4 rounded-[48px] bg-gradient-to-b from-[#17191C]/80 via-[#141619]/45 to-transparent blur-[56px] z-0" />
      <div className="absolute inset-8 rounded-[48px] bg-[#17191C]/55 blur-[72px] z-0" />
      <div className="relative z-10">
        <Image
          src="/hero-laptop-platinum.png"
          alt="Kergix dashboard on a laptop showing performance and analytics"
          width={798}
          height={822}
          priority
          sizes="(max-width: 1024px) 88vw, 620px"
          className="w-full h-auto select-none [filter:contrast(1.08)_brightness(1.05)] drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
        />
        {/* Live dashboard projected onto the screen glass */}
        <HeroScreenLive />
      </div>
      {/* Glossy stage-floor reflection */}
      <div
        aria-hidden
        className="absolute top-[88%] left-0 right-0 h-[45%] z-0 pointer-events-none overflow-hidden opacity-[0.11] blur-[3px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_62%)]"
      >
        <Image
          src="/hero-laptop-platinum.png"
          alt=""
          width={798}
          height={822}
          className="w-full h-auto select-none [transform:scaleY(-1)]"
        />
      </div>
      {callouts && <HeroCallouts />}
    </AnimatedLaptop>
  );
}

const capabilities = ["Evaluation & Design", "Custom software", "Web Development"];

function CapabilityList() {
  return (
    <div className="flex flex-col gap-3 select-none">
      {capabilities.map((c) => (
        <span
          key={c}
          className="text-text-secondary text-sm md:text-base transition-colors duration-200 hover:text-white cursor-default"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function InfoCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-bg-secondary/40 backdrop-blur-sm p-5 w-full">
      <p className="text-text-secondary text-sm leading-relaxed">
        Ready to build something exceptional? Let&apos;s bring your idea to life.
      </p>
    </div>
  );
}

function ExperienceCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-bg-secondary/40 backdrop-blur-sm px-5 py-4 flex items-center gap-3 w-full">
      <span className="font-heading font-bold gradient-text text-4xl leading-none">
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
    <div className="rounded-2xl border border-white/10 bg-bg-secondary/40 backdrop-blur-sm p-5 w-full">
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        Partner with our expert engineers to create scalable, secure digital solutions.
      </p>
      <Link
        href="/contact"
        className="inline-flex px-6 py-2.5 rounded-full btn-metal font-heading font-bold text-sm"
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
      <div className="absolute right-[-8%] top-[-12%] w-[680px] h-[680px] rounded-full bg-[#15171A] blur-[150px] z-0 pointer-events-none" />
      <div className="absolute left-[-10%] top-[-14%] w-[560px] h-[560px] rounded-full bg-[#15171A] blur-[150px] z-0 pointer-events-none" />
      <div className="absolute right-[6%] top-[20%] w-[420px] h-[420px] rounded-full bg-[#121417] blur-[120px] z-0 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[45%] rounded-full bg-[#15171A] blur-[100px] z-0 pointer-events-none" />

      {/* Stage floor — horizon line + light pool under the laptop */}
      <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 w-[72%] max-w-4xl h-px bg-gradient-to-r from-transparent via-white/35 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[56%] max-w-3xl h-16 bg-white/6 blur-3xl rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[1%] left-1/2 -translate-x-1/2 w-[44%] max-w-2xl h-24 bg-white/5 blur-2xl rounded-[100%] z-0 pointer-events-none" />

      {/* House lights down — vignette pulls the eye to center stage */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(115%_95%_at_50%_42%,transparent_42%,rgba(0,0,0,0.38)_78%,rgba(0,0,0,0.62)_100%)]" />

      {/* Stage rig — spotlight cones from both top corners, ABOVE the vignette
          so the house-lights can't swallow them. Right lamp leads, left follows. */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none [filter:blur(18px)]"
        style={{
          background:
            "conic-gradient(from 214deg at 88% -8%, transparent 0deg, rgba(255,255,255,0.06) 8deg, rgba(255,255,255,0.16) 14deg, rgba(255,255,255,0.06) 21deg, transparent 28deg)",
          animation: "beam-breathe 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none [filter:blur(18px)]"
        style={{
          background:
            "conic-gradient(from 119deg at 12% -8%, transparent 0deg, rgba(255,255,255,0.05) 8deg, rgba(255,255,255,0.13) 14deg, rgba(255,255,255,0.05) 21deg, transparent 28deg)",
          animation: "beam-breathe 11s ease-in-out 2.5s infinite",
        }}
      />

      {/* Lamp hotspots at each cone origin */}
      <div className="absolute -top-12 right-[7%] w-48 h-48 rounded-full bg-white/14 blur-3xl z-[2] pointer-events-none" />
      <div className="absolute -top-12 left-[7%] w-40 h-40 rounded-full bg-white/11 blur-3xl z-[2] pointer-events-none" />

      {/* Film grain to keep the black from feeling flat */}
      <div className="grain-overlay z-[1]" />

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
          <AnimatedHeadline
            className="absolute top-[12%] left-0 w-full text-center text-[clamp(4rem,10.5vw,10rem)] text-sheen"
            delay={0.05}
            yOffset={-50}
          >
            Your Vision
          </AnimatedHeadline>
          <AnimatedHeadline
            className="absolute bottom-[12%] right-[2%] z-0 text-[clamp(4rem,10.5vw,10rem)] text-sheen"
            delay={0.15}
            yOffset={50}
          >
            Our Code
          </AnimatedHeadline>
        </h1>

        {/* Laptop — centered, tilts toward the cursor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[47%] max-w-[620px] z-20">
          <ParallaxTilt tilt={2.2}>
            <LaptopRender callouts />
          </ParallaxTilt>
        </div>

        {/* Capability list — mid left */}
        <AnimatedCard
          className="absolute left-[1%] top-[43%] z-30"
          delay={0.45}
          xOffset={-40}
        >
          <ParallaxTilt shift={8}>
            <CapabilityList />
          </ParallaxTilt>
        </AnimatedCard>

        {/* Get Started card — bottom left */}
        <AnimatedCard
          className="absolute left-[1%] bottom-[3%] w-[280px] z-40"
          delay={0.6}
          yOffset={40}
        >
          <ParallaxTilt shift={-12}>
            <GetStartedCard />
          </ParallaxTilt>
        </AnimatedCard>

        {/* Info card — mid right */}
        <AnimatedCard
          className="absolute right-[1%] top-[27%] w-[240px] z-40"
          delay={0.45}
          xOffset={40}
        >
          <ParallaxTilt shift={-10}>
            <InfoCard />
          </ParallaxTilt>
        </AnimatedCard>

        {/* Experience card — lower right */}
        <AnimatedCard
          className="absolute right-[5%] top-[50%] w-[240px] z-40"
          delay={0.6}
          yOffset={40}
        >
          <ParallaxTilt shift={14}>
            <ExperienceCard />
          </ParallaxTilt>
        </AnimatedCard>
      </div>

      {/* ═══════════ Mobile / tablet ═══════════ */}
      <div className="lg:hidden relative w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-8 z-10">
        <h1 className="sr-only">Your Vision Our Code</h1>

        <AnimatedMobileHeadline
          className="font-heading font-bold tracking-[-0.03em] leading-[0.92] text-[clamp(3rem,15vw,5.5rem)]"
          delay={0.05}
          yOffset={-30}
        >
          <span className="block text-sheen">
            Your Vision
          </span>
        </AnimatedMobileHeadline>

        <LaptopRender className="w-full max-w-[440px]" />

        <AnimatedMobileHeadline
          className="font-heading font-bold tracking-[-0.03em] leading-[0.92] text-[clamp(3rem,15vw,5.5rem)]"
          delay={0.2}
          yOffset={30}
        >
          <span className="block text-sheen">
            Our Code
          </span>
        </AnimatedMobileHeadline>

        <AnimatedCard delay={0.4} yOffset={20} duration={0.8}>
          <CapabilityList />
        </AnimatedCard>

        <AnimatedCard
          className="w-full flex flex-col gap-4 max-w-sm"
          delay={0.55}
          yOffset={30}
          duration={0.8}
        >
          <GetStartedCard />
          <InfoCard />
          <ExperienceCard />
        </AnimatedCard>
      </div>
    </section>
  );
}
