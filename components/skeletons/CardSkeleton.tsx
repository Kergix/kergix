import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export interface CardSkeletonProps {
  /** If provided, generates a grid of CardSkeletons */
  count?: number
}

/**
 * Standard card skeleton matching the dark-card / glass-panel aesthetic.
 */
export function CardSkeleton({ count = 1 }: CardSkeletonProps) {
  const renderCard = (key: number) => (
    <div key={key} className="dark-card p-6 flex flex-col gap-4">
      <Skeleton className="w-12 h-12 rounded-lg" />
      <Skeleton className="h-6 w-3/4 mt-2" />
      <div className="space-y-2 mt-2 flex-grow">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      <Skeleton className="h-10 w-full mt-4" />
    </div>
  )

  if (count > 1) {
    return (
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        aria-hidden="true"
      >
        {Array.from({ length: count }).map((_, i) => renderCard(i))}
      </div>
    )
  }

  return (
    <div aria-hidden="true" className="contents">
      {renderCard(0)}
    </div>
  )
}
