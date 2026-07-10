"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function MiniChartBars() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <defs>
        <linearGradient id="hero-bar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E6FA" />
          <stop offset="55%" stopColor="#00D2F0" />
          <stop offset="100%" stopColor="#0082AA" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="320" height="180" rx="18" fill="#0B0F14" />
      <g opacity="0.2" stroke="#A7B4B8" strokeWidth="1">
        <path d="M 24 140 H 296" />
        <path d="M 24 110 H 296" />
        <path d="M 24 80 H 296" />
      </g>
      <g fill="url(#hero-bar-gradient)">
        <rect x="34" y="98" width="18" height="42" rx="6" />
        <rect x="64" y="76" width="18" height="64" rx="6" />
        <rect x="94" y="54" width="18" height="86" rx="6" />
        <rect x="124" y="84" width="18" height="56" rx="6" />
        <rect x="154" y="42" width="18" height="98" rx="6" />
        <rect x="184" y="68" width="18" height="72" rx="6" />
        <rect x="214" y="34" width="18" height="106" rx="6" />
        <rect x="244" y="62" width="18" height="78" rx="6" />
        <rect x="274" y="52" width="18" height="88" rx="6" />
      </g>
    </svg>
  );
}

function MiniChartLine() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <rect x="0" y="0" width="320" height="180" rx="18" fill="#0B0F14" />
      <g opacity="0.18" stroke="#A7B4B8" strokeWidth="1">
        <path d="M 24 136 H 296" />
        <path d="M 24 104 H 296" />
        <path d="M 24 72 H 296" />
      </g>
      <defs>
        <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E6FA" />
          <stop offset="100%" stopColor="#0082AA" />
        </linearGradient>
      </defs>
      <path
        d="M 24 118 C 50 110, 64 92, 90 96 C 116 100, 122 66, 145 62 C 168 58, 181 80, 204 76 C 227 72, 236 42, 260 50 C 276 55, 286 40, 296 34"
        fill="none"
        stroke="url(#hero-line-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="145" cy="62" r="6" fill="#00E6FA" />
      <circle cx="260" cy="50" r="6" fill="#00D2F0" />
    </svg>
  );
}

function MiniChartRings() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <rect x="0" y="0" width="320" height="180" rx="18" fill="#0B0F14" />
      <circle cx="92" cy="92" r="48" fill="none" stroke="#10151C" strokeWidth="18" />
      <circle cx="92" cy="92" r="48" fill="none" stroke="#00D2F0" strokeWidth="18" strokeDasharray="210 100" strokeLinecap="round" transform="rotate(-90 92 92)" />
      <circle cx="236" cy="92" r="38" fill="none" stroke="#10151C" strokeWidth="14" />
      <circle cx="236" cy="92" r="38" fill="none" stroke="#00E6FA" strokeWidth="14" strokeDasharray="160 90" strokeLinecap="round" transform="rotate(-110 236 92)" />
      <text x="92" y="98" textAnchor="middle" fill="#F5F9FA" fontSize="20" fontWeight="700" fontFamily="var(--font-space-grotesk), sans-serif">84%</text>
      <text x="236" y="98" textAnchor="middle" fill="#F5F9FA" fontSize="20" fontWeight="700" fontFamily="var(--font-space-grotesk), sans-serif">67%</text>
    </svg>
  );
}

export default function HeroDashboardAnimation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-full max-w-[720px] mx-auto select-none"
      style={{ perspective: 1400 }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute -inset-8 rounded-[44px] bg-accent-cyan/10 blur-[64px]" />

      <motion.div
        className="relative z-10"
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotateY: [-4, -2, -4], rotateX: [2, 0, 2] }}
        transition={shouldReduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="mx-auto w-[92%] max-w-[620px] rounded-[32px] bg-gradient-to-b from-[#2A2A2A] via-[#191919] to-[#0E0E0E] p-[8px] shadow-[0_30px_60px_rgba(0,0,0,0.65)] border border-white/10">
          <div className="rounded-[24px] bg-[#0A0D11] border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-[#10151C]">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="rounded-full border border-accent-cyan/25 bg-accent-cyan/8 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-accent-cyan">
                Dashboard Preview
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 bg-[#0B0F14] p-4 md:p-5">
              <aside className="col-span-12 md:col-span-3 rounded-[20px] border border-white/10 bg-[#070A0E] p-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent-cyan-bright via-accent-cyan to-accent-teal-deep" />
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Kergix OS</div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-text-muted">Live Systems</div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 text-[11px] uppercase tracking-[0.24em] text-text-muted">
                  <div className="rounded-full bg-accent-cyan/15 px-3 py-2 text-accent-cyan">Overview</div>
                  <div className="rounded-full px-3 py-2">Security</div>
                  <div className="rounded-full px-3 py-2">Cloud Usage</div>
                  <div className="rounded-full px-3 py-2">Performance</div>
                </div>

                <div className="mt-5 rounded-[18px] border border-accent-cyan/15 bg-bg-secondary/70 p-3">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-text-muted">Status</div>
                  <div className="mt-1 text-lg font-heading font-bold text-text-primary">99.98% Uptime</div>
                  <div className="mt-2 h-2 rounded-full bg-white/6">
                    <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-accent-cyan-bright to-accent-teal-deep" />
                  </div>
                </div>
              </aside>

              <div className="col-span-12 md:col-span-9 grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-[22px] border border-white/10 bg-[#10151C] p-4 md:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-text-primary">Dashboard Performances</div>
                      <div className="text-xs text-text-muted">Chart Value</div>
                    </div>
                    <div className="flex gap-2 text-[10px] uppercase tracking-[0.24em] text-text-muted">
                      <span className="rounded-full border border-white/10 px-3 py-1">Download</span>
                      <span className="rounded-full border border-white/10 px-3 py-1">Message</span>
                      <span className="rounded-full border border-white/10 px-3 py-1">Notification</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {[
                      ["2,100", "Client Value"],
                      ["890", "Chart Value"],
                      ["3,804", "Chart Value"],
                      ["1,048", "Chart Value"],
                    ].map(([value, label]) => (
                      <div key={value} className="rounded-[18px] border border-white/10 bg-[#070A0E] p-3">
                        <div className="text-xl font-heading font-bold text-text-primary">{value}</div>
                        <div className="text-[10px] uppercase tracking-[0.24em] text-text-muted">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1 rounded-[22px] border border-white/10 bg-[#10151C] p-3">
                  <div className="mb-2 text-xs uppercase tracking-[0.22em] text-text-muted">Analytics</div>
                  <MiniChartLine />
                </div>

                <div className="col-span-2 md:col-span-1 rounded-[22px] border border-white/10 bg-[#10151C] p-3">
                  <div className="mb-2 text-xs uppercase tracking-[0.22em] text-text-muted">System Load</div>
                  <MiniChartBars />
                </div>

                <div className="col-span-2 md:col-span-1 rounded-[22px] border border-white/10 bg-[#10151C] p-3">
                  <div className="mb-2 text-xs uppercase tracking-[0.22em] text-text-muted">Security</div>
                  <MiniChartRings />
                </div>

                <div className="col-span-2 md:col-span-1 rounded-[22px] border border-white/10 bg-[#10151C] p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-text-muted">Workflow</div>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Discovery", 90],
                      ["Design", 78],
                      ["Build", 66],
                    ].map(([label, pct]) => (
                      <div key={label as string}>
                        <div className="mb-1 flex items-center justify-between text-[11px] text-text-secondary">
                          <span>{label}</span>
                          <span>{pct}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/6">
                          <div className="h-full rounded-full bg-gradient-to-r from-accent-cyan-bright to-accent-teal-deep" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-4 left-[8%] right-[8%] h-10 rounded-full bg-accent-cyan/10 blur-2xl" />
      </motion.div>
    </motion.div>
  );
}