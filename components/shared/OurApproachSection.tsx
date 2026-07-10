"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OurApproachSection() {
  return (
    <section className="py-20 md:py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Dark elevated card — matches reference */}
        <div className="dark-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle internal glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-cyan/4 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left: Text content */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight leading-tight">
                Our Approach
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula ut vestibulum commodo.
              </p>
              <Link
                href="/contact"
                className="w-fit px-7 py-3 rounded-full bg-gradient-to-r from-accent-cyan via-accent-cyan-mid to-accent-teal-deep text-bg-primary font-heading font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(0,210,240,0.2)]"
              >
                <span>Discover Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Floating stat badge + abstract device illustration */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[250px]">
              {/* Abstract device mockup */}
              <motion.div
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Abstract device shapes */}
                <div className="flex gap-3 items-end">
                  {/* Phone 1 */}
                  <div className="w-20 h-36 rounded-xl bg-gradient-to-b from-bg-elevated to-bg-secondary border border-border-subtle overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent" />
                    <div className="p-2 flex flex-col gap-1 mt-6">
                      <div className="w-full h-1.5 bg-accent-cyan/20 rounded-full" />
                      <div className="w-3/4 h-1.5 bg-accent-cyan/15 rounded-full" />
                      <div className="w-1/2 h-1.5 bg-accent-cyan/10 rounded-full" />
                    </div>
                  </div>

                  {/* Phone 2 (larger, foreground) */}
                  <div className="w-28 h-48 rounded-2xl bg-gradient-to-b from-bg-elevated to-bg-secondary border border-accent-cyan/20 overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/8 to-transparent" />
                    <div className="p-3 flex flex-col gap-2 mt-8">
                      <div className="w-full h-2 bg-accent-cyan/25 rounded-full" />
                      <div className="w-5/6 h-2 bg-accent-cyan/18 rounded-full" />
                      <div className="w-3/4 h-2 bg-accent-cyan/12 rounded-full" />
                      <div className="w-2/3 h-2 bg-accent-cyan/8 rounded-full" />
                    </div>
                  </div>

                  {/* Phone 3 */}
                  <div className="w-20 h-36 rounded-xl bg-gradient-to-b from-bg-elevated to-bg-secondary border border-border-subtle overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-teal-deep/10 to-transparent" />
                    <div className="p-2 flex flex-col gap-1 mt-6">
                      <div className="w-full h-1.5 bg-accent-cyan/15 rounded-full" />
                      <div className="w-2/3 h-1.5 bg-accent-cyan/10 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating stat badge — matches reference "2,554+" */}
                <motion.div
                  className="absolute -top-4 -right-4 md:right-0 bg-bg-elevated border border-accent-cyan/30 rounded-2xl px-5 py-4 flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl md:text-3xl font-heading font-extrabold gradient-text">
                    2,554+
                  </span>
                  <span className="text-xs text-text-secondary mt-0.5">Success Projects</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
