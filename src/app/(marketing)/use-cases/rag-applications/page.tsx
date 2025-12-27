import type { Metadata } from "next"
import { UseCasePage } from "@/features/use-cases/UseCasePage"
import { ragApplicationsData } from "@/features/use-cases/data/rag-applications"

export const metadata: Metadata = {
  title: "RAG Application Observability - Debug & Optimize RAG Pipelines",
  description: ragApplicationsData.metaDescription,
}

export default function RAGApplicationsPage() {
  return <UseCasePage data={ragApplicationsData} />
}
