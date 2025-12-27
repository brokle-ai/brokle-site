import { HeroSection } from "./sections/HeroSection"
import { HowItWorksSection } from "./sections/HowItWorksSection"
import { StatsSection } from "./sections/StatsSection"
import { ResearchSection } from "./sections/ResearchSection"
import { PlatformOverviewSection } from "./sections/PlatformOverviewSection"
import { FeatureTabsSection } from "./sections/FeatureTabsSection"
import { UseCasesSection } from "./sections/UseCasesSection"
import { IntegrationsSection } from "./sections/IntegrationsSection"
import { OpenSourceSection } from "./sections/OpenSourceSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { FinalCTASection } from "./sections/FinalCTASection"

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Features with Interactive Tabs - Right after hero like Langfuse */}
      <FeatureTabsSection />

      {/* 3. How It Works */}
      <HowItWorksSection />

      {/* 4. Stats - Traction metrics */}
      <StatsSection />

      {/* 5. Research - Key innovations */}
      <ResearchSection />

      {/* 6. Platform Overview - Cloud vs Self-hosted */}
      <PlatformOverviewSection />

      {/* 7. Use Cases Grid */}
      <UseCasesSection />

      {/* 8. Integrations */}
      <IntegrationsSection />

      {/* 9. Open Source */}
      <OpenSourceSection />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. Final CTA */}
      <FinalCTASection />
    </>
  )
}
