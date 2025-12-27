import type { UseCasePageData } from "@/types/use-case-page"
import { UseCaseHero } from "./components/UseCaseHero"
import { UseCaseFeatures } from "./components/UseCaseFeatures"
import { UseCaseCodeExamples } from "./components/UseCaseCodeExamples"
import { UseCaseCTA } from "./components/UseCaseCTA"

interface UseCasePageProps {
  data: UseCasePageData
}

export function UseCasePage({ data }: UseCasePageProps) {
  return (
    <>
      <UseCaseHero data={data} />
      <UseCaseFeatures features={data.features} />
      <UseCaseCodeExamples examples={data.codeExamples} />
      <UseCaseCTA />
    </>
  )
}
