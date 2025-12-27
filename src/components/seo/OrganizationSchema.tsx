export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brokle",
    url: "https://brokle.ai",
    logo: "https://brokle.ai/images/logo.png",
    description:
      "Open source AI observability platform for LLM applications. Debug, evaluate, and optimize with traces, evals, and analytics.",
    sameAs: [
      "https://github.com/brokle-ai/brokle",
      "https://twitter.com/brokle_ai",
      "https://discord.gg/brokle",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://brokle.ai/contact",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
