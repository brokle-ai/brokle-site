import { HeroSection } from "./sections/HeroSection"
import { LogoBarSection } from "./sections/LogoBarSection"
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

      {/* 3. Logo Bar - Trusted companies */}
      <LogoBarSection />

      {/* 4. How It Works */}
      <HowItWorksSection />

      {/* 5. Stats - Traction metrics */}
      <StatsSection />

      {/* 6. Research - Key innovations */}
      <ResearchSection />

      {/* 7. Platform Overview - Cloud vs Self-hosted */}
      <PlatformOverviewSection />

      {/* 8. Use Cases Grid */}
      <UseCasesSection />

      {/* 9. Integrations */}
      <IntegrationsSection />

      {/* 10. Open Source */}
      <OpenSourceSection />

      {/* 11. Testimonials */}
      <TestimonialsSection />

      {/* 12. Final CTA */}
      <FinalCTASection />
    </>
  )
}
