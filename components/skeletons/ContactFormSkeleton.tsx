import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * Skeleton for contact and lead generation forms.
 */
export function ContactFormSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto dark-card p-8 flex flex-col gap-6" aria-hidden="true">
      <div className="flex flex-col gap-2 mb-4">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-12 w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-32 w-full" />
      </div>

      <Skeleton className="h-14 w-full mt-4" />
    </div>
  )
}
