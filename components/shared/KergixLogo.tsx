import React from "react";

export function KergixLogo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  const height = isSmall ? 32 : isLarge ? 56 : 42;
  const width = isSmall ? 120 : isLarge ? 220 : 160;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      <defs>
        <linearGradient id="logo-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E6FA" />
          <stop offset="100%" stopColor="#0082AA" />
        </linearGradient>
        <linearGradient id="logo-silver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DCDCDC" />
          <stop offset="50%" stopColor="#8A959C" />
          <stop offset="100%" stopColor="#4A5456" />
        </linearGradient>
      </defs>

      {/* Stylized K Mark */}
      <path
        d="M 12,6 L 24,6 L 24,24 L 18,29 L 24,34 L 24,52 L 12,52 L 12,34 L 15.5,29 L 12,24 Z"
        fill="url(#logo-silver)"
      />
      <path
        d="M 28,29 L 41,16 L 46,16 L 33,29 L 46,42 L 41,42 Z"
        fill="url(#logo-silver)"
      />
      <circle cx="28" cy="29" r="2.5" fill="#A7B4B8" />

      {/* Text Wordmark */}
      <text
        x="60"
        y="35"
        fill="#F5F9FA"
        fontSize="24"
        fontWeight="bold"
        fontFamily="var(--font-space-grotesk), sans-serif"
        letterSpacing="3"
      >
        KERG
      </text>
      <text
        x="132"
        y="35"
        fill="#F5F9FA"
        fontSize="24"
        fontWeight="bold"
        fontFamily="var(--font-space-grotesk), sans-serif"
        letterSpacing="3"
      >
        IX
      </text>
      
      {/* Subtitle */}
      <text
        x="60"
        y="49"
        fill="#A7B4B8"
        fontSize="8.5"
        fontFamily="var(--font-inter), sans-serif"
        letterSpacing="2.8"
        fontWeight="semibold"
      >
        IT SERVICES & PRODUCTS
      </text>
    </svg>
  );
}
