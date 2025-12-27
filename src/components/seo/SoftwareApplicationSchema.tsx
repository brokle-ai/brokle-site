export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Brokle",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, macOS, Windows, Docker, Kubernetes",
    description:
      "Open source LLM observability platform. Trace, evaluate, and optimize AI applications with complete visibility.",
    url: "https://brokle.ai",
    downloadUrl: "https://github.com/brokle-ai/brokle",
    softwareVersion: "1.0",
    author: {
      "@type": "Organization",
      name: "Brokle",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free and open source",
    },
    featureList: [
      "LLM Tracing",
      "Prompt Management",
      "Evaluation Framework",
      "Cost Analytics",
      "OpenTelemetry Native",
      "Self-Hosting",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
