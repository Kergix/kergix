import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * Skeleton for the main hero sections.
 * Optimized to prevent Cumulative Layout Shift on initial load.
 */
export function HeroSkeleton() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative" aria-hidden="true">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 w-full z-10">
        <Skeleton className="h-8 w-48 rounded-full" />
        
        <div className="flex flex-col items-center gap-4 w-full">
          <Skeleton className="h-12 md:h-16 w-5/6 md:w-3/4" />
          <Skeleton className="h-12 md:h-16 w-4/6 md:w-2/3" />
        </div>
        
        <div className="flex flex-col items-center gap-2 w-full mt-2">
          <Skeleton className="h-5 w-3/4 md:w-1/2" />
          <Skeleton className="h-5 w-2/3 md:w-2/5" />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center items-center">
          <Skeleton className="h-12 w-full sm:w-40 rounded-full" />
          <Skeleton className="h-12 w-full sm:w-40 rounded-full" />
        </div>
      </div>
    </div>
  )
}
