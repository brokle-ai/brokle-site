import type { Metadata } from "next"
import { UseCasePage } from "@/features/use-cases/UseCasePage"
import { llmTeamsData } from "@/features/use-cases/data/llm-teams"

export const metadata: Metadata = {
  title: "LLM Teams - AI Observability for Engineering Teams",
  description: llmTeamsData.metaDescription,
}

export default function LLMTeamsPage() {
  return <UseCasePage data={llmTeamsData} />
}
