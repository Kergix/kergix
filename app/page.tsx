import React from "react";
import Hero from "@/components/home/Hero";
import ServiceQuickNav from "@/components/home/ServiceQuickNav";
import FeaturedServiceCallout from "@/components/home/FeaturedServiceCallout";
import IndustryRankedList from "@/components/industries/IndustryRankedList";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import CaseStudiesGrid from "@/components/shared/CaseStudiesGrid";
import TeamGrid from "@/components/shared/TeamGrid";
import BuildingWithBestTools from "@/components/shared/BuildingWithBestTools";
import OurApproachSection from "@/components/shared/OurApproachSection";
import ServiceCapabilityList from "@/components/shared/ServiceCapabilityList";
import TestimonialCards from "@/components/shared/TestimonialCards";
import CTAFormSection from "@/components/shared/CTAFormSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Service quick-nav pill row */}
      <ServiceQuickNav />

      {/* 3. Featured / flagship service spotlight */}
      <FeaturedServiceCallout />

      {/* 4. Industries strip */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight">
              Driving Innovation in Every Industry
            </h2>
          </div>
          <IndustryRankedList limit={6} />
        </div>
      </section>

      {/* 5. Why choose us */}
      <WhyChooseUsSection />

      {/* 6. Case studies teaser */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/10 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight">
              Real-World Engineering Deployments
            </h2>
          </div>
          <CaseStudiesGrid limit={3} />
        </div>
      </section>

      {/* 7. Team */}
      <TeamGrid limit={4} />

      {/* 8. Tech stack showcase */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Building With The Best Tools
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight">
              Languages &amp; Technologies We Deploy
            </h2>
          </div>
          <BuildingWithBestTools />
        </div>
      </section>

      {/* 9. Our approach */}
      <OurApproachSection />

      {/* 10. Service capability list (all 8) */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/20 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight">
              Our 8 Software Divisions
            </h2>
          </div>
          <ServiceCapabilityList />
        </div>
      </section>

      {/* 11. Testimonials */}
      <TestimonialCards />

      {/* 12. CTA form */}
      <CTAFormSection />
    </div>
  );
}
