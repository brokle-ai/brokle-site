import { HeroSection } from "./sections/HeroSection"
import { LogoBarSection } from "./sections/LogoBarSection"
import { StatsSection } from "./sections/StatsSection"
import { ResearchSection } from "./sections/ResearchSection"
import { PlatformOverviewSection } from "./sections/PlatformOverviewSection"
import { FeatureTabsSection } from "./sections/FeatureTabsSection"
import { UseCasesSection } from "./sections/UseCasesSection"
import { IntegrationsSection } from "./sections/IntegrationsSection"
import { TestimonialsSection } from "./sections/TestimonialsSection"
import { FinalCTASection } from "./sections/FinalCTASection"

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Logo Bar - Trusted companies */}
      <LogoBarSection />

      {/* 3. Stats - Traction metrics */}
      <StatsSection />

      {/* 4. Research - Key innovations */}
      <ResearchSection />

      {/* 5. Platform Overview - Cloud vs Self-hosted */}
      <PlatformOverviewSection />

      {/* 6. Features with Interactive Tabs */}
      <FeatureTabsSection />

      {/* 7. Use Cases Grid */}
      <UseCasesSection />

      {/* 8. Integrations */}
      <IntegrationsSection />

      {/* 9. Testimonials */}
      <TestimonialsSection />

      {/* 10. Final CTA */}
      <FinalCTASection />
    </>
  )
}
