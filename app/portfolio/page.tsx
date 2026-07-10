"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CaseStudiesGrid from "@/components/shared/CaseStudiesGrid";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import CTAFormSection from "@/components/shared/CTAFormSection";

export default function PortfolioPage() {
  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Page Header (Breadcrumbs + H1) */}
      <section className="relative pt-36 pb-16 px-4 md:px-8 bg-bg-secondary border-b border-border-subtle">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-accent-cyan/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold">Case Studies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
            Case Studies
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Discover how we collaborate with B2B partners across industries to design, construct, and scale digital operations.
          </p>
        </div>
      </section>

      {/* 2. Full paginated & filterable Case Studies Grid */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <CaseStudiesGrid />
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 4. CTA Form section */}
      <CTAFormSection />
    </div>
  );
}
