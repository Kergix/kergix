"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Code2, Layout, BrainCircuit, TrendingUp, Cloud, Users, ShieldCheck } from "lucide-react";
import type { ServiceModule } from "@/lib/data/services";

const iconMap = {
  Globe, Code2, Layout, BrainCircuit, TrendingUp, Cloud, Users, ShieldCheck
};

export default function ServiceSliderCard({ module }: { module: ServiceModule }) {
  const Icon = iconMap[module.icon] || Globe;

  return (
    <Link
      href={`/services/${module.slug}`}
      aria-label={module.title}
      draggable={false}
      className="group block relative w-full h-full min-h-[220px] md:min-h-[280px] rounded-2xl bg-bg-elevated border border-border-subtle p-6 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_0_24px_rgba(0,210,240,0.35)] focus-visible:outline-none focus-visible:-translate-y-1 focus-visible:border-border-strong focus-visible:shadow-[0_0_24px_rgba(0,210,240,0.35)] flex flex-col items-start select-none"
    >
      <div className="w-14 h-14 rounded-2xl bg-bg-primary border border-border-subtle flex items-center justify-center shrink-0 mb-5">
        <Icon 
          className="w-7 h-7 text-accent-cyan transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.08] group-focus-visible:scale-[1.08] stroke-current group-hover:[stroke:url(#accent-gradient)] group-focus-visible:[stroke:url(#accent-gradient)]" 
          strokeWidth={1.5}
        />
      </div>

      <h3 className="text-[20px] font-semibold text-text-primary leading-tight mb-2 font-heading">
        {module.title}
      </h3>

      <p className="text-[14px] text-text-secondary line-clamp-2 leading-relaxed mb-auto">
        {module.shortDescription}
      </p>

      <div className="mt-6 flex items-center gap-1.5 text-accent-cyan text-sm font-bold font-heading group-hover:text-accent-cyan-bright transition-colors">
        <span>Explore Service</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
      </div>
    </Link>
  );
}
