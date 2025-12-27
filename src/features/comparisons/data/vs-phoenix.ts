import type { ComparisonPageData } from "@/types/comparison"

export const vsPhoenixData: ComparisonPageData = {
  slug: "vs-phoenix",
  competitorName: "Arize Phoenix",
  title: "Brokle vs Arize Phoenix",
  subtitle:
    "Compare Brokle to Arize Phoenix for LLM observability. Both are open source with different architectural approaches.",
  metaDescription:
    "Detailed comparison of Brokle vs Arize Phoenix. Compare tracing, evaluation, and see which fits your LLM observability needs.",
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
      feature: "Evaluation Framework",
      brokle: true,
      competitor: true,
    },
    {
      category: "Core Features",
      feature: "Prompt Management",
      brokle: true,
      competitor: false,
    },
    {
      category: "Core Features",
      feature: "Cost Analytics",
      brokle: true,
      competitor: "partial",
    },
    // Architecture
    {
      category: "Architecture",
      feature: "OpenTelemetry Native",
      brokle: true,
      competitor: true,
    },
    {
      category: "Architecture",
      feature: "Production-Ready Backend",
      brokle: true,
      competitor: "partial",
    },
    {
      category: "Architecture",
      feature: "ClickHouse Support",
      brokle: true,
      competitor: false,
    },
    {
      category: "Architecture",
      feature: "Horizontal Scaling",
      brokle: true,
      competitor: "partial",
    },
    // Deployment
    {
      category: "Deployment",
      feature: "Local Development",
      brokle: true,
      competitor: true,
    },
    {
      category: "Deployment",
      feature: "Production Self-Host",
      brokle: true,
      competitor: "partial",
    },
    {
      category: "Deployment",
      feature: "Managed Cloud",
      brokle: true,
      competitor: true,
    },
    {
      category: "Deployment",
      feature: "Kubernetes Helm",
      brokle: true,
      competitor: false,
    },
    // Enterprise
    {
      category: "Enterprise",
      feature: "Team Collaboration",
      brokle: true,
      competitor: "partial",
    },
    {
      category: "Enterprise",
      feature: "SSO (SAML/OIDC)",
      brokle: true,
      competitor: "Arize Cloud only",
    },
    {
      category: "Enterprise",
      feature: "RBAC",
      brokle: true,
      competitor: "Arize Cloud only",
    },
    {
      category: "Enterprise",
      feature: "Audit Logs",
      brokle: true,
      competitor: "Arize Cloud only",
    },
  ],
  advantages: [
    "Full-featured prompt management with versioning, A/B testing, and deployment controls",
    "Production-ready architecture with ClickHouse for analytics at any scale",
    "Comprehensive cost analytics with provider-specific pricing data built-in",
    "Enterprise features included in open-source version, not just cloud",
    "Kubernetes-native deployment with official Helm charts for production",
    "Team collaboration features designed for engineering teams from day one",
  ],
  faqs: [
    {
      question: "How does Phoenix compare to Brokle architecturally?",
      answer:
        "Phoenix started as a notebook-first tool for ML practitioners and has evolved into a tracing platform. Brokle was built from the ground up as a production observability platform with ClickHouse, PostgreSQL, and Redis for enterprise-scale deployments.",
    },
    {
      question: "Is Phoenix better for experimentation?",
      answer:
        "Phoenix has strong Jupyter notebook integration which is great for experimentation. Brokle focuses more on production observability and team collaboration, though it also supports local development workflows.",
    },
    {
      question: "Can I use Phoenix's OpenTelemetry instrumentation with Brokle?",
      answer:
        "Yes! Both platforms support OpenTelemetry. If you're using Phoenix's OpenInference instrumentation, you can send traces to Brokle with minimal changes since both are OTEL-compatible.",
    },
    {
      question: "What about the Arize platform vs Phoenix?",
      answer:
        "Phoenix is the open-source project from Arize. For enterprise features like SSO and RBAC, Arize directs users to their commercial cloud platform. Brokle includes these enterprise features in the open-source version.",
    },
  ],
}
