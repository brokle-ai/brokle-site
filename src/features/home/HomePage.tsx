import dynamic from "next/dynamic"
import { HeroSection } from "./sections/HeroSection"
import { FeatureTabsSection } from "./sections/FeatureTabsSection"

// Lazy load below-the-fold sections to reduce TBT (Total Blocking Time)
// These sections are not visible on initial viewport, so we can defer their loading
const IntegrationsSection = dynamic(
  () => import("./sections/IntegrationsSection").then(mod => ({ default: mod.IntegrationsSection })),
  { ssr: true }
)

const OpenSourceSection = dynamic(
  () => import("./sections/OpenSourceSection").then(mod => ({ default: mod.OpenSourceSection })),
  { ssr: true }
)

const TestimonialsSection = dynamic(
  () => import("./sections/TestimonialsSection").then(mod => ({ default: mod.TestimonialsSection })),
  { ssr: true }
)

const FinalCTASection = dynamic(
  () => import("./sections/FinalCTASection").then(mod => ({ default: mod.FinalCTASection })),
  { ssr: true }
)

export default function HomePage() {
  return (
    <>
      {/* 1. Hero - Critical, load immediately */}
      <HeroSection />

      {/* 2. Features with Interactive Tabs - Critical, load immediately */}
      <FeatureTabsSection />

      {/* 3. Integrations - Below fold, lazy loaded */}
      <IntegrationsSection />

      {/* 4. Open Source - Below fold, lazy loaded */}
      <OpenSourceSection />

      {/* 5. Testimonials - Below fold, lazy loaded */}
      <TestimonialsSection />

      {/* 6. Final CTA - Below fold, lazy loaded */}
      <FinalCTASection />
    </>
  )
}
