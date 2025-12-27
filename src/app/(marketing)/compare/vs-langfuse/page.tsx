import type { Metadata } from "next"
import { ComparisonPage } from "@/features/comparisons/ComparisonPage"
import { vsLangfuseData } from "@/features/comparisons/data/vs-langfuse"

export const metadata: Metadata = {
  title: "Brokle vs Langfuse - LLM Observability Comparison",
  description: vsLangfuseData.metaDescription,
  keywords: [
    "Langfuse alternative",
    "Langfuse vs Brokle",
    "LLM observability comparison",
    "open source LLM tracing",
  ],
}

export default function VsLangfusePage() {
  return <ComparisonPage data={vsLangfuseData} />
}
