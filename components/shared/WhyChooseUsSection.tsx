"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import Avatar from "./Avatar";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const formattedCount = count.toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function WhyChooseUsSection() {
  const stats = [
    { value: 12, suffix: "+", label: "Years of\nExperience", highlighted: false },
    { value: 2554, suffix: "+", label: "Success\nProjects", highlighted: true },
    { value: 154, suffix: "+", label: "Professional\nTeams", highlighted: false },
    { value: 25, suffix: "+", label: "Modern\nDesign", highlighted: false },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 items-center">
        {/* Heading */}
        <div className="flex flex-col gap-4 text-center items-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi blandit ligula ut vestibulum commodo.
          </p>
        </div>

        {/* Avatar cluster — illustrative, no real people */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex -space-x-5">
            <Avatar name="Alex Kerg" size={80} className="border-4 border-bg-primary rounded-2xl" />
            <Avatar name="Sarah Chen" size={90} className="border-4 border-bg-primary rounded-2xl z-10 scale-105" />
            <Avatar name="Marcus Vance" size={80} className="border-4 border-bg-primary rounded-2xl" />
          </div>
        </div>

        {/* Stats counter row — matches reference: 4 bordered cards in a row */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 md:p-6 rounded-2xl text-center transition-all duration-300 ${
                stat.highlighted
                  ? "border-2 border-accent-cyan bg-bg-elevated/50 shadow-[0_0_30px_rgba(0,210,240,0.12)]"
                  : "border border-border-subtle bg-bg-glass hover:border-border-strong"
              }`}
            >
              <span
                className={`text-3xl md:text-4xl font-heading font-extrabold tracking-tight block ${
                  stat.highlighted ? "text-accent-cyan-bright" : "text-text-primary"
                }`}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-text-secondary text-xs md:text-sm mt-2 block whitespace-pre-line leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
