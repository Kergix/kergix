import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight, Star, HelpCircle } from "lucide-react";
import IconRenderer from "@/components/shared/IconRenderer";
import { industries, Industry } from "@/lib/data/industries";
import { faqs } from "@/lib/data/faqs";
import OurApproachSection from "@/components/shared/OurApproachSection";
import ServiceCapabilityList from "@/components/shared/ServiceCapabilityList";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTAFormSection from "@/components/shared/CTAFormSection";

interface IndustryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export default async function IndustryDetailPage({ params }: IndustryDetailPageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const renderIcon = (iconName: string) => {
    return <IconRenderer name={iconName} className="w-8 h-8 text-accent-cyan" />;
  };

  // Select 4 relevant FAQs for this industry
  const industryFaqs = faqs.slice(0, 4);

  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* 1. Page Header (Breadcrumbs + H1) */}
      <section className="relative pt-36 pb-20 px-4 md:px-8 bg-bg-secondary border-b border-border-subtle">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-accent-cyan/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/industries" className="hover:text-accent-cyan transition-colors">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold">{industry.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-bg-primary border border-border-strong text-accent-cyan rounded-xl">
              {renderIcon(industry.iconName)}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
              {industry.name} Solutions
            </h1>
          </div>

          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            {industry.longDescription}
          </p>

          <div className="mt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-teal-deep text-bg-primary font-heading font-bold text-sm md:text-base hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 group w-fit shadow-[0_0_15px_rgba(0,210,240,0.15)]"
            >
              <span>Get Solution Architecture</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Top solutions for [industry] (3-item list, one highlighted) */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Core Deliverables
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight">
              Top Solutions for {industry.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch mt-4">
            {industry.solutions.map((sol, idx) => (
              <div
                key={idx}
                className={`p-6 md:p-8 rounded-2xl flex flex-col gap-5 justify-between transition-all duration-300 ${
                  sol.highlighted
                    ? "border border-accent-cyan bg-bg-elevated/70 shadow-[0_0_25px_rgba(0,210,240,0.12)] md:scale-105"
                    : "border border-border-subtle bg-bg-glass hover:border-border-strong"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <span className={`font-heading font-bold text-sm text-accent-cyan uppercase tracking-wider`}>
                    Solution 0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-text-primary">
                    {sol.title}
                  </h3>
                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How We Help Your Business checklist */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/40 border-b border-border-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Operational Value
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
              How We Help <br />
              <span className="bg-gradient-to-r from-accent-cyan-bright to-accent-teal-deep bg-clip-text text-transparent">
                Your Operations Scale
              </span>
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              We replace standard template methods with secure, custom architectures. We help you digitize database integrations, lock down security compliance, and lower maintenance overhead.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 bg-bg-elevated p-6 md:p-8 rounded-2xl border border-border-subtle shadow-xl">
            {industry.benefitsChecklist.map((benefit, idx) => (
              <div key={idx} className="flex gap-3.5 items-start py-2 border-b border-border-subtle/50 last:border-b-0">
                <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach Section */}
      <OurApproachSection />

      {/* 5. Service Capabilities Section */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/20 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Service Stack
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight text-center">
              Our Extended Solutions Suite
            </h2>
          </div>
          <ServiceCapabilityList limit={4} />
        </div>
      </section>

      {/* 6. Industry Specific FAQs */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              FAQ Accordions
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight text-center">
              Solution FAQs
            </h2>
          </div>
          <FAQAccordion items={industryFaqs} />
        </div>
      </section>

      {/* 7. CTA Contact Form */}
      <CTAFormSection />
    </div>
  );
}
