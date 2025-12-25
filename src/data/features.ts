import { Search, MessageSquare, CheckSquare, BarChart3, Activity, Shield, type LucideIcon } from "lucide-react"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Search,
    title: "Tracing & Debugging",
    description: "Detailed traces of every LLM call. Debug complex chains, identify failures, and understand model behavior.",
  },
  {
    icon: MessageSquare,
    title: "Prompt Management",
    description: "Version, test, and deploy prompts. Track changes, compare performance, and roll back instantly.",
  },
  {
    icon: CheckSquare,
    title: "Evaluation Framework",
    description: "Automated evals with LLM-as-judge. Build custom evaluators, run A/B tests, and score outputs at scale.",
  },
  {
    icon: BarChart3,
    title: "Cost & Latency Analytics",
    description: "Track spend across providers. Monitor latency, identify expensive calls, and optimize costs.",
  },
  {
    icon: Activity,
    title: "Production Monitoring",
    description: "Real-time dashboards and alerts. Know when things break before your users do.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2, GDPR, HIPAA ready. Self-host option, SSO, and role-based access control.",
  },
]

export const integrations = [
  { name: "OpenAI", category: "Provider" },
  { name: "Anthropic", category: "Provider" },
  { name: "Google AI", category: "Provider" },
  { name: "Azure OpenAI", category: "Provider" },
  { name: "LangChain", category: "Framework" },
  { name: "LangGraph", category: "Framework" },
  { name: "LlamaIndex", category: "Framework" },
  { name: "Vercel AI SDK", category: "Framework" },
  { name: "OpenTelemetry", category: "Standard" },
  { name: "Python SDK", category: "SDK" },
  { name: "TypeScript SDK", category: "SDK" },
  { name: "REST API", category: "SDK" },
]

export const stats = [
  { label: "GitHub Stars", value: "1.2k+" },
  { label: "Traces Processed", value: "10M+" },
  { label: "Active Teams", value: "500+" },
  { label: "Uptime", value: "99.9%" },
]
