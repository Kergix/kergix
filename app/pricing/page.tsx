
import React from "react";
import Link from "next/link";
import { ChevronRight, Check, Sparkles } from "lucide-react";
import { pricingTiers } from "@/lib/data/pricing";
import { faqs } from "@/lib/data/faqs";
import OurApproachSection from "@/components/shared/OurApproachSection";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTAFormSection from "@/components/shared/CTAFormSection";

export default function PricingPage() {
  const pricingFaqs = faqs.filter(f => f.category === "Pricing" || f.category === "General");

  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Page Header (Breadcrumbs + H1) */}
      <section className="relative pt-36 pb-16 px-4 md:px-8 bg-bg-secondary border-b border-border-subtle">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-accent-cyan/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold">Pricing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
            Our Pricing
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Transparent, project-based packages designed to build production-grade web systems. No licensing surprises or budget creep.
          </p>
        </div>
      </section>

      {/* 2. 3-Tier Pricing Grid */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-6 md:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative select-none ${
                  tier.popular
                    ? "border border-accent-cyan bg-bg-elevated/70 shadow-[0_0_30px_rgba(0,210,240,0.15)] lg:scale-105 z-10"
                    : "border border-border-subtle bg-bg-glass hover:border-border-strong"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <span className="absolute top-4 right-4 bg-accent-cyan text-bg-primary text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>Highly Recommended</span>
                  </span>
                )}

                <div className="flex flex-col gap-6">
                  {/* Package Meta */}
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-text-primary">
                      {tier.name}
                    </h3>
                    <p className="text-text-muted text-xs leading-normal">
                      {tier.startingPriceLabel}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 py-2 border-b border-border-subtle/50">
                    <span className="text-3xl md:text-4xl font-heading font-extrabold text-accent-cyan-bright">
                      {tier.price}
                    </span>
                    <span className="text-xs text-text-muted">/ Project quote</span>
                  </div>

                  {/* Package Description */}
                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Features list */}
                  <div className="flex flex-col gap-3.5 mt-4">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex gap-2.5 items-start">
                        <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-xs md:text-sm leading-tight">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary CTA button */}
                <Link
                  href="/contact"
                  className={`w-full text-center py-3.5 rounded-xl font-heading font-bold text-xs md:text-sm transition-all block mt-8 ${
                    tier.popular
                      ? "bg-gradient-to-r from-accent-cyan to-accent-teal-deep text-bg-primary hover:brightness-110 shadow-[0_0_15px_rgba(0,210,240,0.15)]"
                      : "bg-bg-primary border border-border-strong text-accent-cyan hover:bg-bg-elevated hover:text-accent-cyan-bright"
                  }`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <OurApproachSection />

      {/* 4. Pricing FAQs */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/20 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Accordions FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight text-center">
              Pricing FAQs
            </h2>
          </div>
          <FAQAccordion items={pricingFaqs} />
        </div>
      </section>

      {/* 5. CTA Form section */}
      <CTAFormSection />
    </div>
  );
}
