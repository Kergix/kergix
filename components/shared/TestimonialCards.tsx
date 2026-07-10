"use client";

import React, { useState } from "react";
import { Quote } from "lucide-react";
import { testimonials, Testimonial } from "@/lib/data/testimonials";
import Avatar from "./Avatar";

interface TestimonialCardsProps {
  limit?: number;
}

export default function TestimonialCards({ limit }: TestimonialCardsProps) {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(1);

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Stats bar — matches reference (Success Projects 2,554+ | Professional Teams 154+) */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="glass-panel rounded-2xl p-5 flex flex-col gap-1">
          <span className="text-text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <span className="text-xs text-text-muted mt-2">Success Projects</span>
          <span className="text-2xl font-heading font-extrabold text-text-primary">2,554+</span>
        </div>
        <div className="glass-panel rounded-2xl p-5 flex flex-col gap-1 md:col-start-4">
          <span className="text-xs text-text-muted">Professional Teams</span>
          <span className="text-2xl font-heading font-extrabold text-text-primary">154+</span>
          <span className="text-text-secondary text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
      </div>

      {/* Quote cards — matches reference: 3 cards, middle one highlighted/larger */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {displayTestimonials.slice(0, 3).map((test, index) => {
          const isHighlighted = highlightedIndex === index;
          const isCenter = index === 1;

          return (
            <div
              key={test.author}
              className={`rounded-2xl flex flex-col items-center text-center gap-4 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                isCenter
                  ? "p-8 md:p-10 border-2 border-accent-cyan bg-bg-elevated/70 shadow-[0_0_30px_rgba(0,210,240,0.15)] md:scale-105 z-10"
                  : "p-6 md:p-8 border border-border-subtle bg-bg-glass hover:border-border-strong"
              }`}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {/* Quote text */}
              <p className={`font-heading font-bold text-text-primary ${isCenter ? "text-xl md:text-2xl" : "text-lg"}`}>
                &ldquo;{test.quote.split(".")[0]}.&rdquo;
              </p>

              {/* Author name */}
              <span className="text-text-secondary text-sm">
                {test.author}
              </span>

              {/* Avatar */}
              <Avatar
                name={test.author}
                size={isCenter ? 80 : 64}
                className={isCenter ? "ring-2 ring-accent-cyan ring-offset-2 ring-offset-bg-elevated" : ""}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
