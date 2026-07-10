"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconRenderer from "@/components/shared/IconRenderer";
import { industries, Industry } from "@/lib/data/industries";

interface IndustryRankedListProps {
  limit?: number;
}

export default function IndustryRankedList({ limit }: IndustryRankedListProps) {
  const displayIndustries = limit ? industries.slice(0, limit) : industries;

  const renderMiniIcon = (iconName: string) => {
    return <IconRenderer name={iconName} className="w-5 h-5" />;
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {displayIndustries.map((ind, idx) => {
        const rankNumber = String(idx + 1).padStart(2, "0");

        return (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="group block p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-border-strong hover:bg-bg-elevated/50 transition-all cursor-pointer relative overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,210,240,0.06)]"
          >
            {/* Corner Rank Badge */}
            <span className="absolute top-4 right-4 font-heading font-extrabold text-sm text-text-muted group-hover:text-accent-cyan-bright transition-colors select-none">
              RANK {rankNumber}
            </span>

            <div className="flex flex-col gap-4">
              {/* Icon wrap */}
              <div className="p-3 bg-bg-primary rounded-xl border border-border-subtle text-accent-cyan group-hover:border-accent-cyan/35 group-hover:bg-bg-secondary transition-all w-fit">
                {renderMiniIcon(ind.iconName)}
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <h3 className="font-heading font-bold text-lg md:text-xl text-text-primary group-hover:text-accent-cyan-bright transition-colors">
                  {ind.name}
                </h3>
                <span className="text-accent-cyan text-xs font-semibold uppercase tracking-wider">
                  {ind.tagline}
                </span>
              </div>

              <p className="text-text-secondary text-xs md:text-sm leading-relaxed mt-1">
                {ind.shortDescription}
              </p>

              {/* View detail indicator */}
              <div className="mt-4 flex items-center gap-1.5 text-text-muted group-hover:text-accent-cyan transition-colors text-xs font-bold font-heading">
                <span>View Solution Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
