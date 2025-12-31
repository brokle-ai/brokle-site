import type { ComparisonPageData } from "@/types/comparison"

export const vsLangfuseData: ComparisonPageData = {
  slug: "vs-langfuse",
  competitorName: "Langfuse",
  title: "Brokle vs Langfuse",
  subtitle:
    "See how Brokle compares to Langfuse for LLM observability. Both are open source, but Brokle offers more out of the box.",
  metaDescription:
    "Detailed comparison of Brokle vs Langfuse for LLM observability. Compare features, architecture, and see why teams choose Brokle.",
  features: [
    // Core Features
    {
      category: "Core Features",
      feature: "Trace Visualization",
      brokle: true,
      competitor: true,
    },
    {
      category: "Core Features",
      feature: "Span-level Details",
      brokle: true,
      competitor: true,
    },
    {
      category: "Core Features",
      feature: "Prompt Management",
      brokle: true,
      competitor: true,
    },
    {
      category: "Core Features",
      feature: "Evaluation Framework",
      brokle: true,
      competitor: true,
    },
    {
      category: "Core Features",
      feature: "Cost Analytics",
      brokle: true,
      competitor: true,
    },
    // Architecture
    {
      category: "Architecture",
      feature: "OpenTelemetry Native",
      brokle: true,
      competitor: false,
    },
    {
      category: "Architecture",
      feature: "ClickHouse Backend",
      brokle: true,
      competitor: false,
    },
    {
      category: "Architecture",
      feature: "PostgreSQL Support",
      brokle: true,
      competitor: true,
    },
    {
      category: "Architecture",
      feature: "Redis Caching",
      brokle: true,
      competitor: false,
    },
    // Deployment
    {
      category: "Deployment",
      feature: "Self-Hosting",
      brokle: true,
      competitor: true,
    },
    {
      category: "Deployment",
      feature: "Docker Compose",
      brokle: true,
      competitor: true,
    },
    {
      category: "Deployment",
      feature: "Kubernetes Helm",
      brokle: true,
      competitor: true,
    },
    {
      category: "Deployment",
      feature: "Managed Cloud",
      brokle: true,
      competitor: true,
    },
    // Enterprise
    {
      category: "Enterprise",
      feature: "SSO (SAML/OIDC)",
      brokle: true,
      competitor: "Cloud only",
    },
    {
      category: "Enterprise",
      feature: "RBAC",
      brokle: true,
      competitor: true,
    },
    {
      category: "Enterprise",
      feature: "Audit Logs",
      brokle: true,
      competitor: true,
    },
    {
      category: "Enterprise",
      feature: "SOC 2 Compliance",
      brokle: false,
      competitor: true,
    },
  ],
  advantages: [
    "OpenTelemetry-native architecture for vendor-neutral observability and easier integration with existing infrastructure",
    "ClickHouse backend for 10x faster analytics at scale compared to PostgreSQL-only architectures",
    "Built-in cost analytics with provider-level pricing data updated automatically",
    "Enterprise features like SSO and RBAC included in the open-source version",
    "Unified platform for traces, evaluations, prompts, and analytics in a single dashboard",
  ],
  faqs: [
    {
      question: "Can I migrate from Langfuse to Brokle?",
      answer:
        "Yes! Brokle supports importing historical data from Langfuse. We provide migration guides and tools to help you transition smoothly. Your existing SDK integrations will continue to work with minimal changes.",
    },
    {
      question: "Is Brokle compatible with the Langfuse SDK?",
      answer:
        "Brokle provides its own SDK with similar APIs, making migration straightforward. We also support OpenTelemetry, which means you can use any OTEL-compatible SDK.",
    },
    {
      question: "How does pricing compare?",
      answer:
        "Both Brokle and Langfuse offer generous free tiers and open-source self-hosting options. Brokle's cloud pricing is competitive and includes all enterprise features without additional costs.",
    },
    {
      question: "What about GitHub stars and community size?",
      answer:
        "While Langfuse has a larger community today with 20K+ stars, Brokle is growing rapidly and offers a more modern architecture with ClickHouse and OpenTelemetry support built-in.",
    },
  ],
}
