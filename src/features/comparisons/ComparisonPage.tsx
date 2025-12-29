import type { ComparisonPageData } from "@/types/comparison"
import { FAQSchema } from "@/components/seo"
import { ComparisonHero } from "./components/ComparisonHero"
import { ComparisonTable } from "./components/ComparisonTable"
import { ComparisonAdvantages } from "./components/ComparisonAdvantages"
import { ComparisonFAQ } from "./components/ComparisonFAQ"
import { ComparisonCTA } from "./components/ComparisonCTA"

interface ComparisonPageProps {
  data: ComparisonPageData
}

export function ComparisonPage({ data }: ComparisonPageProps) {
  return (
    <>
      <FAQSchema faqs={data.faqs} />
      <ComparisonHero data={data} />
      <ComparisonTable
        competitorName={data.competitorName}
        features={data.features}
      />
      <ComparisonAdvantages advantages={data.advantages} />
      <ComparisonFAQ faqs={data.faqs} competitorName={data.competitorName} />
      <ComparisonCTA competitorName={data.competitorName} />
    </>
  )
}
