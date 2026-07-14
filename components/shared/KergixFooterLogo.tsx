import React from "react";
import Image from "next/image";

export function KergixFooterLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/kergix-lockup.png"
      alt="Kergix Logo"
      width={720}
      height={525}
      className={`object-contain select-none w-[180px] h-auto ${className}`}
      priority
    />
  );
}
