import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export interface ListSkeletonProps {
  count?: number
}

/**
 * Skeleton for row-based or ranked lists.
 */
export function ListSkeleton({ count = 5 }: ListSkeletonProps) {
  return (
    <div className="flex flex-col gap-4 w-full" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-6 p-4 border-b border-white/5 last:border-0">
          <Skeleton className="w-10 h-10 rounded-full shrink-0" />
          
          <div className="flex-1 flex flex-col gap-2">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          
          <Skeleton className="w-8 h-8 rounded-full shrink-0 hidden sm:block" />
        </div>
      ))}
    </div>
  )
}
