import { Activity, AlertTriangle, Clock, Database, LineChart, Shield } from "lucide-react"
import type { UseCasePageData } from "@/types/use-case-page"

export const productionMonitoringData: UseCasePageData = {
  slug: "production-monitoring",
  title: "Production LLM Monitoring",
  subtitle: "Never be surprised by production issues again",
  metaDescription:
    "Monitor your LLM applications in production with real-time alerts, performance tracking, and cost analytics. Brokle keeps your AI running smoothly.",
  heroDescription:
    "Get complete visibility into your production LLM workloads. Track performance, catch errors before users do, and optimize costs with real-time monitoring.",
  features: [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description:
        "Watch every LLM call in real-time. See latency, token usage, and errors as they happen across your entire system.",
    },
    {
      icon: AlertTriangle,
      title: "Smart Alerting",
      description:
        "Get notified when things go wrong. Set up alerts for error spikes, latency degradation, or unusual patterns.",
    },
    {
      icon: Clock,
      title: "Latency Tracking",
      description:
        "Track P50, P95, and P99 latencies. Identify slow calls and optimize your pipeline for speed.",
    },
    {
      icon: Database,
      title: "Historical Analysis",
      description:
        "Query and analyze historical data. Compare performance across deployments and track trends over time.",
    },
    {
      icon: LineChart,
      title: "Usage Analytics",
      description:
        "Understand how your LLM applications are being used. Track usage patterns, peak hours, and user behavior.",
    },
    {
      icon: Shield,
      title: "Reliability Metrics",
      description:
        "Monitor uptime, error rates, and success metrics. Build SLOs around your LLM performance.",
    },
  ],
  codeExamples: [
    {
      title: "Production setup",
      language: "python",
      code: `from brokle import Brokle

# Initialize with your production API key
brokle = Brokle(
    api_key="bk_prod_...",
    environment="production"
)

# All traces are automatically sent to Brokle
@brokle.trace()
def handle_request(request):
    # Your production code
    pass`,
    },
    {
      title: "Custom metrics",
      language: "python",
      code: `# Add custom metrics to your traces
with brokle.span("llm_call") as span:
    response = call_llm(prompt)

    span.set_attributes({
        "tokens.input": response.usage.prompt_tokens,
        "tokens.output": response.usage.completion_tokens,
        "model": "gpt-4",
        "cost": calculate_cost(response.usage)
    })`,
    },
  ],
}
