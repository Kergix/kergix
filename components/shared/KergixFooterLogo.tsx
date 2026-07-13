import React from "react";
import Image from "next/image";

export function KergixFooterLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/kergix-logo-transparent.png"
      alt="Kergix Logo"
      width={600}
      height={200}
      className={`object-contain select-none w-[220px] h-auto ${className}`}
      priority
    />
  );
}
