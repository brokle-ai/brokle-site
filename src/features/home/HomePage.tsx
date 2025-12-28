import { HeroSection } from "./sections/HeroSection"
import { FeatureTabsSection } from "./sections/FeatureTabsSection"
import { IntegrationsSection } from "./sections/IntegrationsSection"
import { OpenSourceSection } from "./sections/OpenSourceSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { FinalCTASection } from "./sections/FinalCTASection"

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Features with Interactive Tabs */}
      <FeatureTabsSection />

      {/* 3. Integrations */}
      <IntegrationsSection />

      {/* 4. Open Source */}
      <OpenSourceSection />

      {/* 5. Testimonials */}
      <TestimonialsSection />

      {/* 6. Final CTA */}
      <FinalCTASection />
    </>
  )
}
