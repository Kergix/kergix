"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { FAQItem } from "@/lib/data/faqs";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split into 2 columns for desktop
  const leftColItems = items.filter((_, i) => i % 2 === 0);
  const rightColItems = items.filter((_, i) => i % 2 !== 0);

  const renderFaqItem = (item: FAQItem, globalIndex: number) => {
    const isOpen = openIndex === globalIndex;

    return (
      <div
        key={globalIndex}
        className="border-b border-border-subtle/40 last:border-b-0"
      >
        <button
          onClick={() => toggleAccordion(globalIndex)}
          className="w-full text-left py-5 flex items-center justify-between gap-4 focus:outline-none group"
        >
          <span className="font-heading font-semibold text-text-primary text-sm md:text-base leading-snug group-hover:text-accent-cyan transition-colors">
            {item.question}
          </span>
          <ChevronUp
            className={`w-5 h-5 text-text-muted shrink-0 transition-all duration-300 ${
              isOpen ? "rotate-0 text-accent-cyan" : "rotate-180"
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-5 text-sm text-text-secondary leading-relaxed">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Desktop: 2 columns */}
      <div className="hidden md:grid grid-cols-2 gap-x-12 items-start">
        <div className="flex flex-col">
          {leftColItems.map((item) => {
            const originalIndex = items.indexOf(item);
            return renderFaqItem(item, originalIndex);
          })}
        </div>
        <div className="flex flex-col">
          {rightColItems.map((item) => {
            const originalIndex = items.indexOf(item);
            return renderFaqItem(item, originalIndex);
          })}
        </div>
      </div>

      {/* Mobile: 1 column */}
      <div className="grid md:hidden grid-cols-1">
        {items.map((item, index) => renderFaqItem(item, index))}
      </div>
    </div>
  );
}
