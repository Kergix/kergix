"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TestimonialCards from "@/components/shared/TestimonialCards";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTAFormSection from "@/components/shared/CTAFormSection";
import { faqs } from "@/lib/data/faqs";

export default function TestimonialsPage() {
  const testimonialsFaqs = faqs.filter(f => f.category === "Support" || f.category === "General");

  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Page Header (Breadcrumbs + H1) */}
      <section className="relative pt-36 pb-16 px-4 md:px-8 bg-bg-secondary border-b border-border-subtle">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-accent-cyan/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold">Testimonials</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
            Testimonials
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Read detailed reviews and operations results from our B2B partners across global markets.
          </p>
        </div>
      </section>

      {/* 2. Stats Bar + Quotes Grid (renders all quotes) */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <TestimonialCards />
        </div>
      </section>

      {/* 3. Support FAQs */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/20 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              General Support
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight text-center">
              Methodology FAQs
            </h2>
          </div>
          <FAQAccordion items={testimonialsFaqs} />
        </div>
      </section>

      {/* 4. CTA Contact Form */}
      <CTAFormSection />
    </div>
  );
}
