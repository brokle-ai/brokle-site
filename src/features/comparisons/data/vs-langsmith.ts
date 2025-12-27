import type { ComparisonPageData } from "@/types/comparison"

export const vsLangsmithData: ComparisonPageData = {
  slug: "vs-langsmith",
  competitorName: "LangSmith",
  title: "Brokle vs LangSmith",
  subtitle:
    "Compare Brokle to LangSmith for LLM observability. Open source vs proprietary, with no vendor lock-in.",
  metaDescription:
    "Detailed comparison of Brokle vs LangSmith. See why teams choose open-source Brokle over LangSmith for LLM tracing and evaluation.",
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
    {
      category: "Core Features",
      feature: "Playground",
      brokle: true,
      competitor: true,
    },
    // Open Source
    {
      category: "Open Source",
      feature: "Fully Open Source",
      brokle: true,
      competitor: false,
    },
    {
      category: "Open Source",
      feature: "Self-Hosting Available",
      brokle: true,
      competitor: false,
    },
    {
      category: "Open Source",
      feature: "No Vendor Lock-in",
      brokle: true,
      competitor: false,
    },
    {
      category: "Open Source",
      feature: "Community Contributions",
      brokle: true,
      competitor: false,
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
      feature: "Framework Agnostic",
      brokle: true,
      competitor: "LangChain focused",
    },
    {
      category: "Architecture",
      feature: "Multi-Framework Support",
      brokle: true,
      competitor: "partial",
    },
    // Integrations
    {
      category: "Integrations",
      feature: "LangChain",
      brokle: true,
      competitor: true,
    },
    {
      category: "Integrations",
      feature: "LlamaIndex",
      brokle: true,
      competitor: true,
    },
    {
      category: "Integrations",
      feature: "OpenAI SDK",
      brokle: true,
      competitor: true,
    },
    {
      category: "Integrations",
      feature: "Anthropic SDK",
      brokle: true,
      competitor: true,
    },
    // Enterprise
    {
      category: "Enterprise",
      feature: "SSO (SAML/OIDC)",
      brokle: true,
      competitor: true,
    },
    {
      category: "Enterprise",
      feature: "Data Residency Control",
      brokle: true,
      competitor: "Limited",
    },
    {
      category: "Enterprise",
      feature: "On-Premise Deployment",
      brokle: true,
      competitor: false,
    },
  ],
  advantages: [
    "100% open source with MIT license - no proprietary lock-in or forced cloud dependency",
    "Self-host anywhere for complete data control and compliance requirements",
    "Framework agnostic - works with LangChain, LlamaIndex, OpenAI SDK, and any other framework",
    "OpenTelemetry-native architecture integrates with your existing observability stack",
    "No per-seat pricing - pay only for usage, not team size",
    "Full feature parity between open-source and cloud versions",
  ],
  faqs: [
    {
      question: "Why choose Brokle over LangSmith?",
      answer:
        "Brokle is fully open source and can be self-hosted, giving you complete control over your data. LangSmith is a proprietary SaaS with no self-hosting option, which may not meet compliance requirements for many organizations.",
    },
    {
      question: "Does Brokle work with LangChain?",
      answer:
        "Absolutely! Brokle has first-class LangChain integration, just like LangSmith. But Brokle also works seamlessly with LlamaIndex, bare OpenAI/Anthropic SDKs, and any OpenTelemetry-compatible framework.",
    },
    {
      question: "Can I migrate from LangSmith to Brokle?",
      answer:
        "Yes, we provide migration guides and data import tools. Since both platforms trace similar data, the transition is straightforward. Your existing instrumentation code will need minimal changes.",
    },
    {
      question: "How does Brokle's pricing compare?",
      answer:
        "Brokle offers a generous free tier and usage-based pricing without per-seat costs. Self-hosting is completely free. This typically results in significant savings compared to LangSmith, especially for larger teams.",
    },
  ],
}
