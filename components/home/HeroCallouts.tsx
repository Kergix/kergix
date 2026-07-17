import React from "react";

/**
 * Blueprint-style schematic callouts anchored to the hero laptop.
 * Coordinate space: the overlay spans -45%..145% horizontally and
 * -10%..110% vertically around the laptop container, i.e. a point at
 * laptop (x%, y%) sits at SVG (x+45, y+10) in the 190x120 viewBox.
 */

interface Callout {
  /** polyline points in overlay units */
  points: string;
  /** anchor dot (first point) */
  dot: [number, number];
  /** label anchor in overlay % */
  label: { x: number; y: number; align: "left" | "right" };
  text: string;
  delay: number;
}

const CALLOUTS: Callout[] = [
  {
    points: "121,30 138,18 156,18",
    dot: [121, 30],
    label: { x: 82.8, y: 12.2, align: "left" },
    text: "Realtime analytics engine",
    delay: 1.4,
  },
  {
    points: "66,26 50,14 34,14",
    dot: [66, 26],
    label: { x: 17.9, y: 8.6, align: "right" },
    text: "Precision-engineered stack",
    delay: 1.8,
  },
  {
    points: "92,92 92,104 108,104",
    dot: [92, 92],
    label: { x: 57.5, y: 88.5, align: "left" },
    text: "99.9% uptime SLA",
    delay: 2.2,
  },
];

export default function HeroCallouts() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-30 hidden lg:block"
      style={{ left: "-45%", right: "-45%", top: "-10%", bottom: "-10%" }}
    >
      <svg viewBox="0 0 190 120" preserveAspectRatio="none" className="h-full w-full">
        {CALLOUTS.map((c) => (
          <g key={c.text}>
            <polyline
              points={c.points}
              fill="none"
              stroke="rgba(226,230,234,0.4)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1}
              style={{
                animation: `callout-draw 0.9s ease-out ${c.delay}s forwards`,
              }}
            />
            <circle
              cx={c.dot[0]}
              cy={c.dot[1]}
              r="0.7"
              fill="#E6E9EC"
              opacity={0}
              style={{ animation: `fade-in 0.4s ease-out ${c.delay}s forwards` }}
            />
          </g>
        ))}
      </svg>
      {CALLOUTS.map((c) => (
        <div
          key={c.text}
          className="absolute font-heading text-[9px] font-bold uppercase tracking-[0.22em] text-metal-mid opacity-0 whitespace-nowrap"
          style={{
            left: `${c.label.x}%`,
            top: `${c.label.y}%`,
            transform: c.label.align === "right" ? "translateX(-100%)" : undefined,
            animation: `fade-in 0.7s ease-out ${c.delay + 0.6}s forwards`,
          }}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
}
