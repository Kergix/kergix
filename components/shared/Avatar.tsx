"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AvatarProps {
  name: string;
  image?: string;
  className?: string;
  size?: number;
}

// Predefined brand-adjacent gradients for variety but visual consistency
const gradients = [
  "linear-gradient(135deg, #00E6FA 0%, #0082AA 100%)",
  "linear-gradient(135deg, #00D2F0 0%, #4A5456 100%)",
  "linear-gradient(135deg, #00C8E6 0%, #8A959C 100%)",
  "linear-gradient(135deg, #0082AA 0%, #05070A 100%)",
  "linear-gradient(135deg, #DCDCDC 0%, #00D2F0 100%)"
];

const getDeterministicGradient = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
};

export default function Avatar({ name, image, className = "", size = 48 }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  // Get initials (up to 2 letters)
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const sizeStyle = {
    width: `${size}px`,
    height: `${size}px`,
    fontSize: `${size * 0.38}px`,
  };

  const hasValidImage = image && !imageError;

  return (
    <div
      className={`relative rounded-full overflow-hidden flex items-center justify-center font-bold tracking-wider border border-border-subtle shrink-0 select-none ${className}`}
      style={sizeStyle}
    >
      {hasValidImage ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes={`${size}px`}
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center text-bg-primary font-heading"
          style={{
            background: getDeterministicGradient(name),
          }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}
