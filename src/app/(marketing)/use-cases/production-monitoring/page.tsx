import type { Metadata } from "next"
import { UseCasePage } from "@/features/use-cases/UseCasePage"
import { productionMonitoringData } from "@/features/use-cases/data/production-monitoring"

export const metadata: Metadata = {
  title: "Production LLM Monitoring - Real-time AI Observability",
  description: productionMonitoringData.metaDescription,
}

export default function ProductionMonitoringPage() {
  return <UseCasePage data={productionMonitoringData} />
}
