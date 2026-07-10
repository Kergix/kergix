"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/shared/FAQAccordion";
import OurApproachSection from "@/components/shared/OurApproachSection";
import ServiceCapabilityList from "@/components/shared/ServiceCapabilityList";
import CTAFormSection from "@/components/shared/CTAFormSection";
import { faqs } from "@/lib/data/faqs";

export default function FAQPage() {
  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Page Header (Breadcrumbs + H1) */}
      <section className="relative pt-36 pb-16 px-4 md:px-8 bg-bg-secondary border-b border-border-subtle">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-accent-cyan/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
            FAQ
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Have questions about our technology choices, timelines, or security standards? We have answers.
          </p>
        </div>
      </section>

      {/* 2. Full FAQ Accordion list */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <OurApproachSection />

      {/* 4. Service Capabilities Section */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/20 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight text-center">
              Our Development Divisions
            </h2>
          </div>
          <ServiceCapabilityList limit={4} />
        </div>
      </section>

      {/* 5. CTA Contact Form */}
      <CTAFormSection />
    </div>
  );
}
