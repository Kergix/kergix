"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import IconRenderer from "@/components/shared/IconRenderer";
import { industries, Industry } from "@/lib/data/industries";

interface IndustryRankedListProps {
  limit?: number;
}

const getImageForSlug = (slug: string) => {
  switch (slug) {
    case "real-estate": return "/images/industries/real_estate.png";
    case "logistics": return "/images/industries/logistics.png";
    case "e-commerce": return "/images/industries/ecommerce.png";
    case "government": return "/images/industries/government.png";
    case "healthcare": return "/images/industries/healthcare.png";
    case "oil-and-gas": return "/images/industries/oil_gas.png";
    default: return "/images/industries/real_estate.png";
  }
};

export default function IndustryRankedList({ limit }: IndustryRankedListProps) {
  const displayIndustries = limit ? industries.slice(0, limit) : industries;

  const renderMiniIcon = (iconName: string) => {
    return <IconRenderer name={iconName} className="w-5 h-5" />;
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {displayIndustries.map((ind, idx) => {
        const imgSrc = getImageForSlug(ind.slug);

        return (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="group flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-accent-cyan/40 transition-all cursor-pointer relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(0,230,250,0.12)] backdrop-blur-sm"
          >
            {/* Top Image Banner */}
            <div className="w-full h-48 relative overflow-hidden">
              <Image 
                src={imgSrc} 
                alt={ind.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay for seamless blend */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="flex flex-col gap-4 p-6 pt-0 relative z-10 -mt-6">
              {/* Icon wrap */}
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white group-hover:bg-accent-cyan-bright group-hover:text-bg-primary transition-colors duration-500 w-fit shadow-xl">
                {renderMiniIcon(ind.iconName)}
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <h3 className="font-heading font-bold text-lg md:text-xl text-white group-hover:text-white/90 transition-colors">
                  {ind.name}
                </h3>
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                  {ind.tagline}
                </span>
              </div>

              <p className="text-text-secondary text-xs md:text-sm leading-relaxed mt-1 line-clamp-3">
                {ind.shortDescription}
              </p>

              {/* View detail indicator */}
              <div className="mt-4 flex items-center gap-1.5 text-white/50 group-hover:text-accent-cyan-bright transition-colors text-xs font-bold font-heading">
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
