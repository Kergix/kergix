import Hero from "@/components/home/Hero";
import ServiceQuickNav from "@/components/home/ServiceQuickNav";
import ServiceDetailsPaginated from "@/components/home/ServiceDetailsPaginated";
import DotField from "@/components/home/DotField";
import IndustryRankedList from "@/components/industries/IndustryRankedList";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";


import BuildingWithBestTools from "@/components/shared/BuildingWithBestTools";
import OurApproachSection from "@/components/shared/OurApproachSection";
import ServiceCapabilityList from "@/components/shared/ServiceCapabilityList";
import CTAFormSection from "@/components/shared/CTAFormSection";
import SplashCursor from "@/components/shared/SplashCursor";
import { Suspense } from "react";
import { ListSkeleton } from "@/components/skeletons/ListSkeleton";
import { ContactFormSkeleton } from "@/components/skeletons/ContactFormSkeleton";
import { CardSkeleton } from "@/components/skeletons/CardSkeleton";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Service quick-nav pill row */}
      <ServiceQuickNav />

      {/* 3. Paginated module deep-dive viewer */}
      <ServiceDetailsPaginated variant="light" />

      {/* 4. Industries strip */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary border-y border-white/10 relative overflow-hidden isolate">
        {/* Interactive dot-field background */}
        <div className="pointer-events-none absolute inset-0 -z-20">
          <DotField
            dotRadius={2.0}
            dotSpacing={16}
            bulgeStrength={60}
            glowRadius={200}
            cursorRadius={340}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(255, 255, 255, 0.35)"
            gradientTo="rgba(255, 255, 255, 0.1)"
            glowColor="rgba(255, 255, 255, 0.15)"
          />
        </div>
        {/* Legibility wash */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(5,7,10,0.15)_0%,rgba(5,7,10,0.5)_60%,rgba(5,7,10,0.9)_100%)]" />

        <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-silver-mid font-heading text-xs font-extrabold uppercase tracking-widest">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight max-w-3xl leading-tight">
              Driving Innovation in Every Industry
            </h2>
          </div>
          <Suspense fallback={<ListSkeleton count={6} />}>
            <IndustryRankedList limit={6} />
          </Suspense>
        </div>
      </section>

      {/* 5. Why choose us */}
      <WhyChooseUsSection variant="light" />



      {/* 8. Tech stack showcase */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-white/10 isolate">
        {/* Interactive dot-field background */}
        <div className="pointer-events-none absolute inset-0 -z-20">
          <DotField
            dotRadius={2.0}
            dotSpacing={16}
            bulgeStrength={60}
            glowRadius={200}
            cursorRadius={340}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(255, 255, 255, 0.35)"
            gradientTo="rgba(255, 255, 255, 0.1)"
            glowColor="rgba(255, 255, 255, 0.15)"
          />
        </div>
        {/* Legibility wash */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(5,7,10,0.15)_0%,rgba(5,7,10,0.5)_60%,rgba(5,7,10,0.9)_100%)]" />

        <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-silver-mid font-heading text-xs font-extrabold uppercase tracking-widest">
              Building With The Best Tools
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight max-w-3xl leading-tight">
              Languages &amp; Technologies We Deploy
            </h2>
          </div>
          <BuildingWithBestTools />
        </div>
      </section>

      {/* 9. Our approach */}
      <OurApproachSection variant="light" />

      {/* 10. Service capability list (all 8) */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-white/10 group">
        <SplashCursor COLOR="#8A8F94" RAINBOW_MODE={false} />
        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10 pointer-events-none">
          <div className="flex flex-col gap-4 text-center items-center pointer-events-auto">
            <span className="text-silver-mid font-heading text-xs font-extrabold uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight max-w-3xl leading-tight">
              Our 8 Software Divisions
            </h2>
          </div>
          <div className="pointer-events-auto">
            <Suspense fallback={<CardSkeleton count={8} />}>
              <ServiceCapabilityList />
            </Suspense>
          </div>
        </div>
      </section>

      {/* 12. CTA form */}
      <Suspense fallback={<div className="py-24"><ContactFormSkeleton /></div>}>
        <CTAFormSection />
      </Suspense>
    </div>
  );
}
