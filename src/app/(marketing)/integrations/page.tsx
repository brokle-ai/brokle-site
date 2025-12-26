import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrations - Brokle",
  description: "Native integrations with every major LLM provider and framework. OpenAI, Anthropic, LangChain, LlamaIndex, and more.",
  openGraph: {
    title: "Integrations - Brokle",
    description: "Native integrations with every major LLM provider and framework.",
    url: "https://brokle.ai/integrations",
    siteName: "Brokle",
    type: "website",
  },
};

const providers = [
  {
    name: "OpenAI",
    description: "Full support for GPT-4, GPT-3.5, embeddings, and function calling.",
    docs: "/docs/integrations/openai",
  },
  {
    name: "Anthropic",
    description: "Complete integration with Claude 3, Claude 2, and all Anthropic models.",
    docs: "/docs/integrations/anthropic",
  },
  {
    name: "Google AI",
    description: "Support for Gemini Pro, PaLM 2, and Google's AI platform.",
    docs: "/docs/integrations/google",
  },
  {
    name: "Azure OpenAI",
    description: "Enterprise-ready integration with Azure OpenAI Service.",
    docs: "/docs/integrations/azure",
  },
  {
    name: "Cohere",
    description: "Native support for Command, Embed, and Rerank models.",
    docs: "/docs/integrations/cohere",
  },
  {
    name: "Mistral AI",
    description: "Integration with Mistral models including Mixtral.",
    docs: "/docs/integrations/mistral",
  },
];

const frameworks = [
  {
    name: "LangChain",
    description: "First-class support for chains, agents, and tools. Automatic span creation for complex workflows.",
    docs: "/docs/integrations/langchain",
  },
  {
    name: "LangGraph",
    description: "Visualize and debug LangGraph state machines with full execution traces.",
    docs: "/docs/integrations/langgraph",
  },
  {
    name: "LlamaIndex",
    description: "Trace RAG pipelines, index queries, and retrieval operations.",
    docs: "/docs/integrations/llamaindex",
  },
  {
    name: "Vercel AI SDK",
    description: "Stream-aware tracing for Next.js and React applications.",
    docs: "/docs/integrations/vercel",
  },
  {
    name: "Haystack",
    description: "Integration with Haystack pipelines and components.",
    docs: "/docs/integrations/haystack",
  },
  {
    name: "OpenTelemetry",
    description: "Native OTLP support for custom instrumentation and existing telemetry.",
    docs: "/docs/integrations/opentelemetry",
  },
];

const sdks = [
  {
    name: "Python SDK",
    install: "pip install brokle",
    description: "Full-featured Python SDK with async support, decorators, and automatic instrumentation.",
    docs: "/docs/sdk/python",
  },
  {
    name: "TypeScript SDK",
    install: "npm install @brokle/sdk",
    description: "Modern TypeScript SDK with full type safety and framework integrations.",
    docs: "/docs/sdk/typescript",
  },
  {
    name: "REST API",
    install: "OpenAPI 3.0",
    description: "RESTful API for custom integrations and any programming language.",
    docs: "/docs/api",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Integrations
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Works with your{" "}
              <span className="text-primary">entire stack</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Native integrations with every major LLM provider and framework.
              Add observability in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/integrations">
                  View All Integrations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">LLM Providers</h2>
            <p className="text-lg text-muted-foreground">
              Automatic tracing for all major AI providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {providers.map((provider) => (
              <Card key={provider.name} className="border-0 shadow-none bg-background">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {provider.name}
                    <Link
                      href={provider.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{provider.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frameworks & Standards</h2>
            <p className="text-lg text-muted-foreground">
              First-class support for popular AI frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {frameworks.map((framework) => (
              <Card key={framework.name} className="border-0 shadow-none bg-muted/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {framework.name}
                    <Link
                      href={framework.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{framework.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Official SDKs</h2>
            <p className="text-lg text-muted-foreground">
              Full-featured SDKs for your favorite languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sdks.map((sdk) => (
              <Card key={sdk.name} className="bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">{sdk.name}</CardTitle>
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                    {sdk.install}
                  </code>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{sdk.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={sdk.docs} target="_blank" rel="noopener noreferrer">
                      View Docs <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don&apos;t see your stack?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We support OpenTelemetry, so you can integrate with any language or framework.
              Or reach out and let us know what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/docs/integrations/opentelemetry">
                  OpenTelemetry Guide <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Request Integration
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
