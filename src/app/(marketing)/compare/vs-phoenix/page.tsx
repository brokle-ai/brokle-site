import type { Metadata } from "next"
import { ComparisonPage } from "@/features/comparisons/ComparisonPage"
import { vsPhoenixData } from "@/features/comparisons/data/vs-phoenix"

export const metadata: Metadata = {
  title: "Brokle vs Arize Phoenix - LLM Observability Comparison",
  description: vsPhoenixData.metaDescription,
  keywords: [
    "Arize Phoenix alternative",
    "Phoenix vs Brokle",
    "LLM observability comparison",
    "open source LLM tracing",
  ],
}

export default function VsPhoenixPage() {
  return <ComparisonPage data={vsPhoenixData} />
}
