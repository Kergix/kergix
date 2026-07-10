"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { services } from "@/lib/data/services";
import CTADecorative from "../shared/CTADecorative";

export default function FeaturedServiceCallout() {
  // Flagship spotlight on "Software Development"
  const flagship = services.find((s) => s.slug === "software-development") || services[1];

  return (
    <section className="py-24 px-4 md:px-8 bg-bg-secondary/40 relative overflow-hidden border-b border-border-subtle">
      {/* Background glow dots */}
      <div className="absolute left-[-10%] top-1/4 w-[300px] h-[300px] bg-accent-teal-deep/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text details */}
        <div className="lg:col-span-7 flex flex-col gap-6 relative z-10">
          <div className="flex items-center gap-2 text-accent-cyan-bright font-heading text-xs font-extrabold uppercase tracking-widest">
            <Star className="w-4 h-4 fill-current text-accent-cyan animate-pulse" />
            <span>Flagship Service Spotlight</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
            High-Performance <br />
            <span className="bg-gradient-to-r from-accent-cyan-bright via-accent-cyan to-accent-teal-mid bg-clip-text text-transparent">
              Custom Software Development
            </span>
          </h2>

          <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
            {flagship.longDescription}
          </p>

          {/* Feature highlights checklists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mt-2">
            {flagship.features.slice(0, 4).map((feat, idx) => (
              <div key={idx} className="flex gap-2.5 items-start">
                <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm font-medium">{feat}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href={`/services/${flagship.slug}`}
              className="px-6 py-3 rounded-full bg-bg-elevated border border-border-strong text-accent-cyan font-heading font-bold text-sm md:text-base hover:bg-bg-primary hover:border-accent-cyan-bright transition-all flex items-center gap-2 group hover:shadow-[0_0_15px_rgba(0,210,240,0.1)]"
            >
              <span>Explore Software Capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right column: Blade/Shard decorative graphics */}
        <div className="lg:col-span-5 hidden lg:block overflow-visible relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-cyan/10 rounded-full blur-[60px] pointer-events-none" />
          <CTADecorative />
        </div>
      </div>
    </section>
  );
}
