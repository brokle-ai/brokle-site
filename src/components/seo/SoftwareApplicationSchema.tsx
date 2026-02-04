export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Brokle",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, macOS, Windows, Docker, Kubernetes",
    description:
      "Brokle is the open source platform for AI teams — debug, evaluate, and optimize your LLM applications with full visibility. Open source. OpenTelemetry-native. Self-host anywhere.",
    url: "https://brokle.com",
    downloadUrl: "https://github.com/brokle-ai/brokle",
    softwareVersion: "1.0",
    applicationSubCategory: "AI Engineering",
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
      "AI Tracing",
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
