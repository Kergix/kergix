"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Projects a live, animated dashboard onto the laptop photo's screen glass.
 * The screen quad below was measured on the 798x822 hero render; a homography
 * maps the flat dashboard onto that quad so it inherits the photo's perspective.
 */

// Screen glass corners as fractions of the laptop image (TL, TR, BR, BL) —
// the exact bezel-inset quad used when the screen art was baked, expanded a
// hair (0.4% about the centroid) to hide sub-pixel seams.
const QUAD: [number, number][] = [
  [0.2150, 0.1700],
  [0.79000, 0.18407],
  [0.7050, 0.60912],
  [0.1502, 0.6215],
];

// Design size of the flat dashboard before projection.
const SW = 520;
const SH = 340;

/** Solve the 8-dof homography mapping (0,0)-(w,h) rect onto dst quad. */
function computeMatrix3d(w: number, h: number, dst: [number, number][]): string {
  const src: [number, number][] = [
    [0, 0],
    [w, 0],
    [w, h],
    [0, h],
  ];
  // Build the 8x9 augmented system A·p = b for p = [h0..h7]
  const A: number[][] = [];
  for (let i = 0; i < 4; i++) {
    const [x, y] = src[i];
    const [X, Y] = dst[i];
    A.push([x, y, 1, 0, 0, 0, -x * X, -y * X, X]);
    A.push([0, 0, 0, x, y, 1, -x * Y, -y * Y, Y]);
  }
  // Gaussian elimination with partial pivoting
  for (let col = 0; col < 8; col++) {
    let pivot = col;
    for (let r = col + 1; r < 8; r++) {
      if (Math.abs(A[r][col]) > Math.abs(A[pivot][col])) pivot = r;
    }
    [A[col], A[pivot]] = [A[pivot], A[col]];
    const div = A[col][col];
    if (Math.abs(div) < 1e-12) return "";
    for (let c = col; c < 9; c++) A[col][c] /= div;
    for (let r = 0; r < 8; r++) {
      if (r === col) continue;
      const f = A[r][col];
      for (let c = col; c < 9; c++) A[r][c] -= f * A[col][c];
    }
  }
  const p = A.map((row) => row[8]); // h0..h7
  // CSS matrix3d is column-major; embed the 3x3 homography into 4x4.
  const m = [p[0], p[3], 0, p[6], p[1], p[4], 0, p[7], 0, 0, 1, 0, p[2], p[5], 0, 1];
  return `matrix3d(${m.map((v) => v.toFixed(6)).join(",")})`;
}

/** Random-walk ticker: value drifts up AND down, exposing last direction. */
function useTicker(base: number, step: number, intervalMs: number, active: boolean) {
  const [state, setState] = useState({ value: base, dir: 1 });
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setState(({ value }) => {
        const delta = (Math.random() - 0.46) * step;
        return { value: Math.max(0, value + delta), dir: delta >= 0 ? 1 : -1 };
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [active, step, intervalMs]);
  return state;
}

function Arrow({ dir }: { dir: number }) {
  return (
    <span
      className={`text-[6px] leading-none ${dir >= 0 ? "text-[#F2F4F6]" : "text-white/35"}`}
    >
      {dir >= 0 ? "▲" : "▼"}
    </span>
  );
}

function StatTile({
  value,
  dir,
  label,
}: {
  value: string;
  dir: number;
  label: string;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">
      <div className="flex items-baseline gap-1">
        <span className="font-heading text-[12px] font-bold leading-tight text-[#F2F4F6] tabular-nums">
          {value}
        </span>
        <Arrow dir={dir} />
      </div>
      <div className="text-[6px] uppercase tracking-[0.18em] text-white/40">{label}</div>
    </div>
  );
}

function TickerRow({
  name,
  base,
  step,
  interval,
  unit,
  active,
}: {
  name: string;
  base: number;
  step: number;
  interval: number;
  unit: string;
  active: boolean;
}) {
  const { value, dir } = useTicker(base, step, interval, active);
  const pct = ((Math.abs(value - base) / base) * 100).toFixed(2);
  return (
    <div className="flex items-center justify-between border-t border-white/6 py-[3px]">
      <span className="w-[44%] truncate text-[7px] text-white/60">{name}</span>
      <span className="w-[28%] text-right font-heading text-[8px] font-bold tabular-nums text-[#E8EBEE]">
        {value.toLocaleString("en-US", { maximumFractionDigits: 1 })}
        <span className="ml-0.5 text-[5.5px] font-normal text-white/35">{unit}</span>
      </span>
      <span
        className={`flex w-[24%] items-center justify-end gap-0.5 text-right font-heading text-[7px] font-bold tabular-nums ${
          dir >= 0 ? "text-[#F2F4F6]" : "text-white/40"
        }`}
      >
        <Arrow dir={dir} />
        {pct}%
      </span>
    </div>
  );
}

function Dashboard({ animate }: { animate: boolean }) {
  const clients = useTicker(2118, 9, 2400, animate);
  const deploys = useTicker(890, 3, 3100, animate);
  const requests = useTicker(3804, 26, 1700, animate);
  const builds = useTicker(1048, 5, 2800, animate);
  const uptimeBars = [42, 68, 55, 84, 61, 92, 70, 88, 76, 96, 82];

  return (
    <div className="flex h-full w-full overflow-hidden rounded-[14px] bg-[#0B0D10] text-white">
      {/* Sidebar */}
      <div className="flex w-[80px] shrink-0 flex-col gap-1.5 border-r border-white/8 bg-[#0E1013] p-2.5">
        <div className="mb-1 flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-[#EEF1F3] to-[#8A9096]" />
          <div className="font-heading text-[7.5px] font-bold tracking-wide text-white/85">KERGIX</div>
        </div>
        {["Overview", "Analytics", "Systems", "Security", "Billing"].map((item, i) => (
          <div
            key={item}
            className={`rounded px-1.5 py-[3px] text-[6px] uppercase tracking-[0.14em] ${
              i === 0 ? "bg-white/10 text-white" : "text-white/35"
            }`}
          >
            {item}
          </div>
        ))}
        <div className="mt-auto rounded-md border border-white/10 p-1.5">
          <div className="text-[5.5px] uppercase tracking-[0.16em] text-white/40">Uptime</div>
          <div className="font-heading text-[9px] font-bold text-[#F2F4F6]">99.98%</div>
          <div className="mt-1 h-[3px] rounded-full bg-white/10">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-[#EEF1F3] to-[#9AA0A6]" />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5 p-2.5">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-heading text-[10px] font-bold leading-tight text-[#F2F4F6]">
              Platform Performance
            </div>
            <div className="text-[6px] uppercase tracking-[0.18em] text-white/35">
              Production · eu-west-1
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-white/12 px-1.5 py-0.5">
            <span className={`h-1 w-1 rounded-full bg-[#E6E9EC] ${animate ? "animate-shimmer" : ""}`} />
            <span className="text-[6px] uppercase tracking-[0.2em] text-white/60">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5">
          <StatTile
            value={Math.round(clients.value).toLocaleString("en-US")}
            dir={clients.dir}
            label="Clients"
          />
          <StatTile
            value={Math.round(deploys.value).toLocaleString("en-US")}
            dir={deploys.dir}
            label="Deploys"
          />
          <StatTile
            value={Math.round(requests.value).toLocaleString("en-US")}
            dir={requests.dir}
            label="Requests"
          />
          <StatTile
            value={Math.round(builds.value).toLocaleString("en-US")}
            dir={builds.dir}
            label="Builds"
          />
        </div>

        <div className="grid h-[108px] grid-cols-2 gap-1.5">
          {/* Line chart draws itself */}
          <div className="rounded-md border border-white/10 bg-white/[0.03] p-1.5">
            <div className="mb-0.5 text-[6px] uppercase tracking-[0.18em] text-white/40">
              Throughput
            </div>
            <svg viewBox="0 0 200 72" className="h-[calc(100%-10px)] w-full">
              <g stroke="rgba(255,255,255,0.09)" strokeWidth="0.7">
                <path d="M0 18 H200" />
                <path d="M0 40 H200" />
                <path d="M0 62 H200" />
              </g>
              <path
                d="M4 58 C 26 52, 38 36, 58 40 C 78 44, 86 22, 104 20 C 122 18, 132 30, 150 27 C 168 24, 178 10, 196 12"
                fill="none"
                stroke="#E8EBEE"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray={1}
                style={animate ? { animation: "draw-line 8s ease-in-out infinite" } : undefined}
              />
              <path
                d="M4 64 C 30 62, 44 52, 64 54 C 84 56, 96 42, 114 42 C 132 42, 146 48, 164 44 C 180 41, 188 36, 196 34"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="1.4"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray={1}
                style={animate ? { animation: "draw-line 8s ease-in-out 0.6s infinite" } : undefined}
              />
            </svg>
          </div>

          {/* Bars breathe */}
          <div className="rounded-md border border-white/10 bg-white/[0.03] p-1.5">
            <div className="mb-0.5 text-[6px] uppercase tracking-[0.18em] text-white/40">
              System Load
            </div>
            <div className="flex h-[calc(100%-10px)] items-end gap-[3px] px-1 pb-0.5">
              {uptimeBars.map((height, i) => (
                <div
                  key={i}
                  className="w-full origin-bottom rounded-t-[2px]"
                  style={{
                    height: `${height}%`,
                    background:
                      i % 3 === 0
                        ? "linear-gradient(180deg,#F0F2F4,#9AA0A6)"
                        : "rgba(255,255,255,0.22)",
                    animation: animate
                      ? `bar-pulse ${3.6 + (i % 4) * 0.5}s ease-in-out ${i * 0.18}s infinite`
                      : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Market-style service watch */}
        <div className="min-h-0 flex-1 rounded-md border border-white/10 bg-white/[0.03] px-2 pt-1">
          <div className="flex items-center justify-between pb-0.5 text-[6px] uppercase tracking-[0.18em] text-white/40">
            <span>Service Watch</span>
            <span className="flex gap-2">
              <span className="w-[68px] text-right">Load</span>
              <span className="w-[46px] text-right">24h</span>
            </span>
          </div>
          <TickerRow name="API Gateway" base={1284} step={22} interval={1600} unit="rps" active={animate} />
          <TickerRow name="Cloud Compute" base={62.4} step={1.6} interval={2100} unit="%" active={animate} />
          <TickerRow name="Data Pipeline" base={845} step={14} interval={1900} unit="ev/s" active={animate} />
        </div>
      </div>
    </div>
  );
}

export default function HeroScreenLive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [matrix, setMatrix] = useState("");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      // Layout dimensions, NOT getBoundingClientRect: the laptop animates
      // scale/tilt and a transformed bbox would corrupt the projection.
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      if (!width || !height) return;
      const dst = QUAD.map(([fx, fy]) => [fx * width, fy * height] as [number, number]);
      setMatrix(computeMatrix3d(SW, SH, dst));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-20" aria-hidden>
      <div
        className="absolute left-0 top-0 transition-opacity duration-500"
        style={{
          width: SW,
          height: SH,
          transform: matrix,
          transformOrigin: "0 0",
          opacity: matrix ? 1 : 0,
        }}
      >
        <Dashboard animate={!prefersReduced} />
        {/* Glass glare */}
        <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />
      </div>
    </div>
  );
}
