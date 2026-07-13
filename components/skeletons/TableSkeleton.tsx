import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export interface TableSkeletonProps {
  /** Number of rows to generate (excluding header) */
  rows?: number
  /** Number of columns to generate */
  columns?: number
}

/**
 * Skeleton for data tables.
 */
export function TableSkeleton({ rows = 5, columns = 4 }: TableSkeletonProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-white/10" aria-hidden="true">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <th key={colIndex} className="p-4">
                <Skeleton className="h-5 w-24" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-b border-white/5 last:border-0">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="p-4">
                  <Skeleton className={`h-4 ${colIndex === 0 ? "w-32" : "w-20"}`} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
