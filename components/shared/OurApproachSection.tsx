"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function OurApproachSection() {
  const steps = [
    { title: "Discovery & Strategy", desc: "Understanding your vision and aligning technology with business goals." },
    { title: "Architecture & Design", desc: "Crafting scalable blueprints and intuitive user experiences." },
    { title: "Agile Engineering", desc: "Iterative development with rigorous testing and continuous delivery." },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Dark elevated card */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle internal cyan glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            {/* Left: Text content */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-accent-cyan font-heading text-xs font-extrabold uppercase tracking-widest">
                  Our Methodology
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                  How We Build Excellence
                </h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg">
                  We don't just write code; we engineer solutions. Our battle-tested approach ensures that from the initial whiteboard sketch to the final production deployment, every step is calculated for performance, scalability, and impact.
                </p>
              </div>

              {/* Approach Steps */}
              <div className="flex flex-col gap-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-none">
                      <CheckCircle2 className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-heading font-semibold">{step.title}</h4>
                      <p className="text-white/50 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="w-fit mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan-bright to-accent-cyan-mid text-[#03181E] font-heading font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-3 group shadow-[0_0_20px_rgba(0,230,250,0.2)]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Abstract UI composition */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[400px]">
              <div className="relative w-full max-w-md">
                {/* Main Dashboard Abstract */}
                <div className="w-full rounded-2xl bg-[#0d0d0d] border border-white/10 overflow-hidden shadow-2xl relative flex items-center justify-center">
                  <Image
                    src="/images/approach-dashboard.png"
                    alt="Software Architecture Dashboard"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    priority
                  />
                </div>

                {/* Floating stat badge 1 */}
                <div className="absolute -top-8 -right-4 bg-[#111] border border-white/10 rounded-2xl px-6 py-5 flex flex-col shadow-2xl z-20 backdrop-blur-md">
                  <span className="text-2xl md:text-4xl font-heading font-extrabold text-accent-cyan-bright">
                    99.9%
                  </span>
                  <span className="text-xs text-white/50 mt-1 uppercase tracking-wider font-semibold">Uptime SLA</span>
                </div>

                {/* Floating stat badge 2 */}
                <div className="absolute -bottom-10 -left-6 bg-[#111] border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-4 shadow-2xl z-20 backdrop-blur-md">
                  <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-accent-cyan-bright" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-heading font-extrabold text-white">Zero</span>
                    <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">Tech Debt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
