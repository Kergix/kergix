"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import OurApproachSection from "@/components/shared/OurApproachSection";
import ServiceCapabilityList from "@/components/shared/ServiceCapabilityList";
import BuildingWithBestTools from "@/components/shared/BuildingWithBestTools";
import CaseStudiesGrid from "@/components/shared/CaseStudiesGrid";
import CTAFormSection from "@/components/shared/CTAFormSection";

export default function ServicesPage() {
  const phases = [
    {
      num: "01",
      title: "Discovery & Blueprinting",
      desc: "We analyze your internal operations, define data parameters, outline API contracts, and construct a detailed engineering project scope mapping. This ensures alignment on target variables before lines of code are written.",
      fullWidth: true,
      highlighted: false,
    },
    {
      num: "02",
      title: "UI/UX High-Fidelity Design",
      desc: "Our design team crafts visual design systems, component libraries, and interactive wireframes in brand colors. We optimize navigation hierarchies for standard screens.",
      fullWidth: false,
      highlighted: false,
    },
    {
      num: "03",
      title: "Production-Grade Engineering",
      desc: "Our senior developers build clean, modular components in TypeScript. We set up Next.js App Router folders, implement strict state machines, write unit tests, and hook up relational PostgreSQL database models.",
      fullWidth: false,
      highlighted: true, // This card is highlighted in cyan!
    },
    {
      num: "04",
      title: "Performance Tuning & Launch",
      desc: "We optimize Core Web Vitals (LCP, CLS, INP) to ensure page speed. We set up edge caching on Vercel networks, configure backups, and deploy the system with zero downtime.",
      fullWidth: false,
      highlighted: false,
    },
  ];

  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Page Header (Breadcrumbs + H1) */}
      <section className="relative pt-36 pb-16 px-4 md:px-8 bg-bg-secondary border-b border-border-subtle">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-accent-cyan/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold">Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
            Our Services
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            From custom Next.js web applications to containerized cloud architectures, we deliver robust technology assets to scale your B2B operations.
          </p>
        </div>
      </section>

      {/* 2. Process Highlight Grid (1 full-width + 3-across grid) */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Development Lifecycle
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight">
              Our 4 Process Phases
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className={`p-6 md:p-8 rounded-2xl transition-all duration-300 relative flex flex-col gap-6 select-none ${
                  phase.fullWidth ? "md:col-span-3 border border-border-subtle bg-bg-glass" : ""
                } ${
                  phase.highlighted
                    ? "border border-accent-cyan bg-bg-elevated/70 shadow-[0_0_25px_rgba(0,210,240,0.12)] md:scale-105"
                    : !phase.fullWidth
                    ? "border border-border-subtle bg-bg-glass hover:border-border-strong"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between border-b border-border-subtle/50 pb-4">
                  <span
                    className={`font-heading font-extrabold text-3xl md:text-4xl ${
                      phase.highlighted ? "text-accent-cyan-bright" : "text-text-muted"
                    }`}
                  >
                    {phase.num}
                  </span>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-text-muted">
                    {phase.fullWidth ? "Initial Blueprint" : "Iteration Phase"}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-text-primary">
                    {phase.title}
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <OurApproachSection />

      {/* 4. Service Capability List */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/20 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight">
              Our 8 Software Divisions
            </h2>
          </div>
          <ServiceCapabilityList />
        </div>
      </section>

      {/* 5. Building With Best Tools */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Framework Selections
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl">
              Languages & Technologies We Deploy
            </h2>
          </div>
          <BuildingWithBestTools />
        </div>
      </section>

      {/* 6. Case Studies Grid */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/10 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl">
              Real-World Engineering Deployments
            </h2>
          </div>
          <CaseStudiesGrid limit={3} />
        </div>
      </section>

      {/* 7. CTA Form section */}
      <CTAFormSection />
    </div>
  );
}
