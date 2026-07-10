"use client";

import React, { useState } from "react";
import IconRenderer from "@/components/shared/IconRenderer";
import { tools, Tool } from "@/lib/data/tools";
import { motion, AnimatePresence } from "framer-motion";

export default function BuildingWithBestTools() {
  const categories = ["Web Platform", "Cloud & DevOps", "Database", "Mobile Apps"] as const;
  const [activeTab, setActiveTab] = useState<typeof categories[number]>("Web Platform");

  const filteredTools = tools.filter((t) => t.category === activeTab);

  const renderToolIcon = (iconName: string, colorClass: string) => {
    return <IconRenderer name={iconName} className={`w-8 h-8 ${colorClass} group-hover:scale-110 transition-transform`} />;
  };

  return (
    <div className="w-full flex flex-col gap-10 md:gap-12">
      {/* Tabs list selector */}
      <div className="flex flex-row overflow-x-auto gap-3 pb-3 border-b border-border-subtle select-none scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-3 rounded-t-xl font-heading font-semibold text-xs md:text-sm whitespace-nowrap transition-all border-b-2 focus:outline-none ${
              activeTab === cat
                ? "border-accent-cyan text-accent-cyan-bright bg-bg-secondary/40 font-bold"
                : "border-transparent text-text-secondary hover:text-text-primary hover:bg-bg-elevated/35"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools lists cards wrapper */}
      <div className="relative min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6"
          >
            {filteredTools.map((tool) => (
              <div
                key={tool.name}
                className="group p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-border-strong hover:bg-bg-elevated/70 transition-all flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:shadow-[0_0_20px_rgba(0,210,240,0.05)]"
              >
                {/* Tech icon wrap */}
                <div className="p-3 bg-bg-primary rounded-xl border border-border-subtle group-hover:border-accent-cyan/35 group-hover:bg-bg-secondary transition-all">
                  {renderToolIcon(tool.iconName, tool.colorClass)}
                </div>
                <span className="font-heading font-bold text-text-primary text-xs md:text-sm tracking-wide group-hover:text-accent-cyan-bright transition-colors select-none">
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
