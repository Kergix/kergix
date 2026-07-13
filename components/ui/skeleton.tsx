import * as React from "react"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Base Skeleton primitive.
 * Designed to be highly performant, accessible, and Server Component compatible.
 * Uses Tailwind animate-pulse by default, respecting prefers-reduced-motion.
 */
export function Skeleton({ className = "", ...props }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-white/5 border border-white/5 motion-reduce:animate-none motion-reduce:opacity-50 ${className}`.trim()}
      {...props}
    />
  )
}
