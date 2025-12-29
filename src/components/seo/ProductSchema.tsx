interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
  features: string[];
}

export function ProductSchema({ name, description, url, features }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Brokle ${name}`,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "AI Observability",
    operatingSystem: "Linux, macOS, Windows, Docker, Kubernetes",
    description,
    url,
    downloadUrl: "https://github.com/brokle-ai/brokle",
    author: {
      "@type": "Organization",
      name: "Brokle",
      url: "https://brokle.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free and open source with optional cloud hosting",
    },
    featureList: features,
    isPartOf: {
      "@type": "SoftwareApplication",
      name: "Brokle",
      url: "https://brokle.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
