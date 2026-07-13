import { HeroSkeleton } from "@/components/skeletons/HeroSkeleton"
import { ContactFormSkeleton } from "@/components/skeletons/ContactFormSkeleton"

/**
 * Loading state for the contact page.
 */
export default function Loading() {
  return (
    <div className="w-full flex flex-col relative overflow-hidden pt-32 pb-24">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <HeroSkeleton />
        <div className="mt-12">
          <ContactFormSkeleton />
        </div>
      </div>
    </div>
  )
}
