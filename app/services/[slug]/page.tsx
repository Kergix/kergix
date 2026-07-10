import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import OurApproachSection from "@/components/shared/OurApproachSection";
import ServiceDetailsPaginated from "@/components/home/ServiceDetailsPaginated";
import ServiceCapabilityList from "@/components/shared/ServiceCapabilityList";
import BuildingWithBestTools from "@/components/shared/BuildingWithBestTools";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import CTAFormSection from "@/components/shared/CTAFormSection";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Service Hero Banner */}
      <section className="relative pt-36 pb-20 px-4 md:px-8 bg-bg-secondary border-b border-border-subtle">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-white/5 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold">{service.name}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-tight max-w-4xl">
            {service.name}
          </h1>

          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="mt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white text-bg-primary font-heading font-bold text-sm md:text-base hover:brightness-90 active:scale-[0.98] transition-all flex items-center gap-2 group w-fit shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. How We Help Your Business (2x2 checklist grid) */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-white/60 font-heading text-xs font-extrabold uppercase tracking-widest">
              Business Value
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
              How We Help <br />
              <span className="text-white">
                Your Business Grow
              </span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Our engineering divisions work directly on your operations. We translate complex data requirements into scalable code setups that yield measurable growth results.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border-subtle bg-bg-secondary/40 flex flex-col gap-3"
              >
                <div className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span className="font-heading font-bold text-text-primary text-sm md:text-base leading-tight">
                    {feat}
                  </span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed pl-7">
                  Engineered and optimized for maximum throughput.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2b. Paginated module deep-dive viewer (opens on the current service) */}
      <ServiceDetailsPaginated initialSlug={service.slug} />

      {/* 3. Our Approach Section */}
      <OurApproachSection />

      {/* 4. Service Capability List (reordered with current service leading) */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/20 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-white/60 font-heading text-xs font-extrabold uppercase tracking-widest">
              Service Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight text-center">
              Our Extended Services
            </h2>
          </div>
          {/* We display the list of capabilities with a highlighted border around the active slug */}
          <ServiceCapabilityList highlightedSlug={service.slug} />
        </div>
      </section>

      {/* 5. Building With Best Tools */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-white/60 font-heading text-xs font-extrabold uppercase tracking-widest">
              Tech Infrastructure
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl">
              Languages We Integrate
            </h2>
          </div>
          <BuildingWithBestTools />
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 7. CTA Contact form */}
      <CTAFormSection />
    </div>
  );
}
