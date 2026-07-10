"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolio, Project } from "@/lib/data/portfolio";

interface CaseStudiesGridProps {
  limit?: number;
}

export default function CaseStudiesGrid({ limit }: CaseStudiesGridProps) {
  const isTeaser = !!limit;

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const categories = ["All", ...Array.from(new Set(portfolio.map((p) => p.category)))];

  const filteredProjects = isTeaser
    ? portfolio.slice(0, limit)
    : selectedFilter === "All"
    ? portfolio
    : portfolio.filter((p) => p.category === selectedFilter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = isTeaser
    ? filteredProjects
    : filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleFilterChange = (category: string) => {
    setSelectedFilter(category);
    setCurrentPage(1);
  };

  // Abstract gradient cover — matches reference's orange swirl with cyan replacement
  const renderProjectCover = (project: Project, index: number) => {
    // Different gradient patterns for variety
    const patterns = [
      "from-accent-cyan/30 via-accent-teal-deep/20 to-bg-elevated",
      "from-accent-teal-deep/25 via-accent-cyan-mid/15 to-bg-elevated",
      "from-accent-cyan-bright/20 via-accent-cyan/25 to-bg-secondary",
    ];
    const pattern = patterns[index % patterns.length];

    return (
      <div className="w-full aspect-[4/3] relative overflow-hidden bg-bg-elevated flex items-center justify-center">
        {/* Gradient wave background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${pattern}`} />

        {/* Abstract flowing shapes */}
        <svg viewBox="0 0 300 200" className="w-full h-full opacity-60 select-none" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id={`wave-${project.slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E6FA" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00D2F0" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0082AA" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Flowing wave shapes */}
          <path
            d="M0,120 C50,60 100,160 150,100 C200,40 250,140 300,80 V200 H0 Z"
            fill={`url(#wave-${project.slug})`}
          />
          <path
            d="M0,150 C60,90 120,170 180,110 C240,50 280,130 300,100 V200 H0 Z"
            fill="rgba(0,210,240,0.08)"
          />
        </svg>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,210,240,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,240,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Category filter bar */}
      {!isTeaser && (
        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start items-center border-b border-border-subtle pb-6">
          <div className="flex items-center gap-2 text-text-secondary mr-2 text-sm">
            <Filter className="w-4 h-4 text-accent-cyan" />
            <span className="font-semibold">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-4 py-2 rounded-full font-heading font-semibold text-xs md:text-sm transition-all focus:outline-none ${
                selectedFilter === cat
                  ? "bg-accent-cyan text-bg-primary font-bold shadow-[0_0_15px_rgba(0,210,240,0.2)]"
                  : "bg-bg-secondary border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group flex flex-col bg-bg-secondary border border-border-subtle rounded-2xl overflow-hidden hover:border-accent-cyan/30 transition-all"
          >
            {/* Cover */}
            {renderProjectCover(project, index)}

            {/* Info */}
            <div className="p-5 flex flex-col gap-3">
              {/* Category tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-bg-elevated border border-border-subtle text-text-secondary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-base md:text-lg text-text-primary group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* 'All Cases' button (teaser mode) */}
      {isTeaser && (
        <div className="flex justify-center">
          <Link
            href="/portfolio"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-accent-cyan via-accent-cyan-mid to-accent-teal-deep text-bg-primary font-heading font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(0,210,240,0.2)]"
          >
            <span>All Cases</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}

      {/* Pagination */}
      {!isTeaser && totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 border-t border-border-subtle pt-8 mt-4 select-none">
          <button
            onClick={() => setCurrentPage((c) => Math.max(c - 1, 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-lg border border-border-subtle bg-bg-secondary text-text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:border-border-strong hover:text-text-primary transition-all focus:outline-none"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="font-heading font-semibold text-sm text-text-secondary">
            Page <span className="text-text-primary font-bold">{currentPage}</span> of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((c) => Math.min(c + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-lg border border-border-subtle bg-bg-secondary text-text-secondary disabled:opacity-30 disabled:cursor-not-allowed hover:border-border-strong hover:text-text-primary transition-all focus:outline-none"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
