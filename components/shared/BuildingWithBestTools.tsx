"use client";

import React, { useState, useMemo } from "react";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiWordpress,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiInfluxdb,
  SiMysql,
  SiExpo,
  SiSwift,
  SiKotlin,
  SiFlutter,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Database } from "lucide-react";

const techData = {
  "Web Platform": [
    { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-white" /> },
    { name: "React.js", icon: <SiReact className="w-10 h-10 text-[#61DAFB]" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-[#06B6D4]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10 text-[#339933]" /> },
    { name: "WordPress", icon: <SiWordpress className="w-10 h-10 text-[#21759B]" /> },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <FaAws className="w-10 h-10 text-[#FF9900]" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="w-10 h-10 text-[#4285F4]" /> },
    { name: "Docker", icon: <SiDocker className="w-10 h-10 text-[#2496ED]" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="w-10 h-10 text-[#326CE5]" /> },
    { name: "Terraform", icon: <SiTerraform className="w-10 h-10 text-[#844FBA]" /> },
    { name: "GitHub Actions", icon: <SiGithubactions className="w-10 h-10 text-[#2088FF]" /> },
  ],
  "Database": [
    { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-[#4169E1]" /> },
    { name: "Redis", icon: <SiRedis className="w-10 h-10 text-[#DC382D]" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-[#47A248]" /> },
    { name: "Vector DBs", icon: <Database className="w-10 h-10 text-gray-400" /> },
    { name: "InfluxDB", icon: <SiInfluxdb className="w-10 h-10 text-[#22ADF6]" /> },
    { name: "MySQL", icon: <SiMysql className="w-10 h-10 text-[#4479A1]" /> },
  ],
  "Mobile Apps": [
    { name: "React Native", icon: <SiReact className="w-10 h-10 text-[#61DAFB]" /> },
    { name: "Expo", icon: <SiExpo className="w-10 h-10 text-white" /> },
    { name: "Swift", icon: <SiSwift className="w-10 h-10 text-[#F05138]" /> },
    { name: "Kotlin", icon: <SiKotlin className="w-10 h-10 text-[#7F52FF]" /> },
    { name: "Flutter", icon: <SiFlutter className="w-10 h-10 text-[#02569B]" /> },
  ],
} as const;

export default function BuildingWithBestTools() {
  const categories = ["Web Platform", "Cloud & DevOps", "Database", "Mobile Apps"] as const;
  const [activeTab, setActiveTab] = useState<typeof categories[number]>("Web Platform");

  const currentTools = techData[activeTab];

  const logoItems = useMemo<LogoItem[]>(() => {
    return currentTools.map((tool) => ({
      title: tool.name,
      node: (
        <div className="w-48 h-[160px] rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center text-center gap-5 flex-none mx-3 transition-colors hover:bg-[#111] hover:border-white/20">
          {/* Tech icon wrap without neon borders, just clean layout */}
          <div className="flex items-center justify-center">
            {tool.icon}
          </div>
          <span className="font-heading font-semibold text-white/80 text-sm tracking-wide">
            {tool.name}
          </span>
        </div>
      )
    }));
  }, [currentTools]);

  return (
    <div className="w-full flex flex-col gap-10 md:gap-14 relative z-10">
      {/* Tabs list selector - Centered with minimal grayscale theme */}
      <div className="flex flex-row overflow-x-auto gap-2 md:gap-4 pb-0 border-b border-white/10 select-none scrollbar-none justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-4 rounded-t-xl font-heading font-medium text-xs md:text-sm whitespace-nowrap transition-all border-b-2 focus:outline-none ${
              activeTab === cat
                ? "border-silver-bright text-white bg-white/5"
                : "border-transparent text-white/40 hover:text-white/70 hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated Logo Loop section */}
      <div className="relative w-full min-h-[260px] flex items-center justify-center overflow-hidden pb-8 pt-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
          >
            <LogoLoop
              logos={logoItems}
              speed={45}
              direction="left"
              logoHeight={200}
              gap={24}
              hoverSpeed={15}
              scaleOnHover={false}
              fadeOut={true}
              fadeOutColor="rgba(5, 7, 10, 1)" /* matching bg-primary #05070A */
              ariaLabel="Technologies we use"
              className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-visible min-h-[260px] flex items-center pb-4"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
