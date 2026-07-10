"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { team, TeamMember } from "@/lib/data/team";
import Avatar from "./Avatar";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface TeamGridProps {
  limit?: number;
}

export default function TeamGrid({ limit }: TeamGridProps) {
  const displayTeam = limit ? team.slice(0, limit) : team;
  // State to track which card is active/hovered for interactive feedback
  // Sarah Chen (index 1) will be default highlighted to match specs ("one card in the active/highlighted state")
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(1);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {displayTeam.map((member, index) => {
        const isHighlighted = highlightedIndex === index;

        return (
          <div
            key={member.name}
            className={`rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300 relative overflow-hidden group cursor-pointer ${
              isHighlighted
                ? "border border-accent-cyan bg-bg-elevated/70 shadow-[0_0_25px_rgba(0,210,240,0.12)] scale-[1.02]"
                : "border border-border-subtle bg-bg-glass hover:border-border-strong hover:scale-[1.01]"
            }`}
            onMouseEnter={() => setHighlightedIndex(index)}
          >
            {/* Background glowing line details for highlighted card */}
            {isHighlighted && (
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-cyan-bright via-accent-cyan to-transparent animate-pulse" />
            )}

            {/* Avatar & Hover Link */}
            <div className="flex justify-between items-start">
              <Avatar
                name={member.name}
                image={member.image}
                size={72}
                className={isHighlighted ? "ring-2 ring-accent-cyan ring-offset-2 ring-offset-bg-secondary" : ""}
              />
              {member.linkedinUrl && (
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full border transition-all ${
                    isHighlighted
                      ? "border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan"
                      : "border-border-subtle text-text-muted hover:text-text-primary hover:border-border-strong"
                  }`}
                  aria-label={`Visit ${member.name}'s LinkedIn profile`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Title / Meta */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5">
                <h3 className="font-heading font-bold text-lg md:text-xl text-text-primary">
                  {member.name}
                </h3>
                {isHighlighted && <ArrowUpRight className="w-4 h-4 text-accent-cyan-bright" />}
              </div>
              <span
                className={`font-semibold text-xs md:text-sm tracking-wider uppercase ${
                  isHighlighted ? "text-accent-cyan-bright" : "text-accent-cyan"
                }`}
              >
                {member.role}
              </span>
            </div>

            {/* Brief Bio */}
            <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        );
      })}
    </div>
  );
}
