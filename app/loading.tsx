import { HeroSkeleton } from "@/components/skeletons/HeroSkeleton"

/**
 * Global loading state for the root application layout.
 * Automatically wraps page.tsx in a Suspense boundary.
 * Renders the HeroSkeleton to prevent layout shift before the main page is streamed.
 */
export default function Loading() {
  return <HeroSkeleton />
}
