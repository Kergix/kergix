import React from "react";
import Image from "next/image";

export function KergixFooterLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/kergix-logo-mark.png"
      alt="Kergix Logo"
      width={239}
      height={229}
      className={`object-contain select-none w-[88px] h-auto ${className}`}
      priority
    />
  );
}
