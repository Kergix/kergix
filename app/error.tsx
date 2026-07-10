"use client";

import React, { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an external error service
    console.error("Critical routing error captured:", error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-bg-primary text-center px-6 py-32 relative overflow-hidden select-none">
      {/* Red/Danger background glow spot */}
      <div className="absolute w-[300px] h-[300px] bg-danger/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="flex flex-col items-center gap-6 relative z-10 max-w-md">
        <AlertCircle className="w-16 h-16 text-danger animate-pulse" />

        <div className="flex flex-col gap-2">
          <span className="font-heading font-extrabold text-5xl text-danger/30 tracking-tighter">
            500
          </span>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-text-primary leading-tight">
            Internal Application Error
          </h1>
          <p className="text-text-secondary text-sm leading-relaxed mt-2">
            An unexpected error occurred in our system pipelines. We have recorded this issue and will resolve it. Click the button to try reloading the module.
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-danger to-[#b91c1c] text-text-primary font-heading font-bold text-sm md:text-base hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reload Application Module</span>
        </button>
      </div>
    </div>
  );
}
