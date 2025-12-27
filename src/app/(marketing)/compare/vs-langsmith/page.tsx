import type { Metadata } from "next"
import { ComparisonPage } from "@/features/comparisons/ComparisonPage"
import { vsLangsmithData } from "@/features/comparisons/data/vs-langsmith"

export const metadata: Metadata = {
  title: "Brokle vs LangSmith - Open Source LLM Observability",
  description: vsLangsmithData.metaDescription,
  keywords: [
    "LangSmith alternative",
    "LangSmith vs Brokle",
    "open source LangSmith",
    "LLM observability comparison",
    "self-hosted LLM tracing",
  ],
}

export default function VsLangsmithPage() {
  return <ComparisonPage data={vsLangsmithData} />
}
