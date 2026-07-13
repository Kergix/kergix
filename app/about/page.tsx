
import React from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import WhyChooseUsSection from "@/components/shared/WhyChooseUsSection";
import OurApproachSection from "@/components/shared/OurApproachSection";
import ServiceCapabilityList from "@/components/shared/ServiceCapabilityList";
import TeamGrid from "@/components/shared/TeamGrid";
import CTAFormSection from "@/components/shared/CTAFormSection";
import Avatar from "@/components/shared/Avatar";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      {/* Page Header (Breadcrumbs + H1) */}
      <section className="relative pt-36 pb-16 px-4 md:px-8 bg-bg-secondary border-b border-border-subtle">
        <div className="absolute right-[10%] top-0 w-[250px] h-[250px] bg-accent-cyan/10 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto flex flex-col gap-4 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-text-muted select-none">
            <Link href="/" className="hover:text-accent-cyan transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-text-secondary font-semibold">About Us</span>
          </div>
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
            About Us
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            We are a team of systems engineers, technical architects, and designers dedicated to building high-performance, secure software applications.
          </p>
        </div>
      </section>

      {/* 2. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 3. Our Approach Section */}
      <OurApproachSection />

      {/* 4. Service Capabilities Section */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/20 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight">
              Our Development Capabilities
            </h2>
          </div>
          <ServiceCapabilityList limit={4} />
        </div>
      </section>

      {/* 5. Values & Vision section */}
      <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Values copy */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
                Kergix Philosophy
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary tracking-tight leading-tight">
                Our Values & Vision
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                We believe software is the core of modern business operations. Our vision is to elevate engineering standards by delivering codebases that are fast, accessible, and easily maintainable.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { title: "Technical Rigor", desc: "No placeholders. No template shortcuts. Only production-grade TypeScript engineering." },
                { title: "Transparency First", desc: "Weekly client demo deployments and clear, version-controlled repository updates." },
                { title: "Absolute Uptime", desc: "Server architectures designed with Terraform to scale automatically under spike loads." }
              ].map((val, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-heading font-bold text-text-primary text-sm md:text-base leading-tight">
                      {val.title}
                    </span>
                    <span className="text-text-secondary text-xs md:text-sm leading-relaxed">
                      {val.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Graphic cluster */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Visual glow bg */}
            <div className="absolute w-[200px] h-[200px] bg-accent-cyan/10 rounded-full blur-[60px] pointer-events-none" />

            {/* Hexagonal avatar group mockup */}
            <div className="relative p-8 border border-border-subtle bg-bg-secondary rounded-2xl flex items-center justify-center gap-4 max-w-sm w-full shadow-2xl glass-panel">
              <div className="flex -space-x-3 overflow-hidden">
                <Avatar name="Sarah Chen" size={56} className="border-4 border-bg-secondary" />
                <Avatar name="Marcus Vance" size={56} className="border-4 border-bg-secondary" />
                <Avatar name="Vikram Malhotra" size={56} className="border-4 border-bg-secondary" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-heading font-bold text-text-primary text-sm">Vision Driven</span>
                <span className="text-text-muted text-[10px] uppercase font-bold tracking-wider">Engineering Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Team Grid */}
      <section className="py-24 px-4 md:px-8 bg-bg-secondary/20 relative overflow-hidden border-b border-border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
              Specialized Engineers
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight">
              Our Complete Engineering Team
            </h2>
          </div>
          <TeamGrid />
        </div>
      </section>

      {/* 7. CTA Contact form */}
      <CTAFormSection />
    </div>
  );
}
