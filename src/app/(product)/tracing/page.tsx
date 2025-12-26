import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Layers, Clock, Zap, Bug, LineChart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tracing & Debugging - Brokle",
  description: "Debug your LLM applications with detailed traces. See every LLM call, chain execution, and agent step. OpenTelemetry-native tracing for AI applications.",
  openGraph: {
    title: "Tracing & Debugging - Brokle",
    description: "Debug your LLM applications with detailed traces. OpenTelemetry-native tracing for AI.",
    url: "https://brokle.ai/tracing",
    siteName: "Brokle",
    type: "website",
  },
};

const features = [
  {
    icon: Search,
    title: "Deep Visibility",
    description: "See every LLM call with inputs, outputs, model parameters, and metadata in a single view.",
  },
  {
    icon: Layers,
    title: "Nested Spans",
    description: "Visualize complex chains and agents with hierarchical span views showing the full execution flow.",
  },
  {
    icon: Clock,
    title: "Latency Breakdown",
    description: "Identify bottlenecks with detailed timing for each operation in your LLM pipeline.",
  },
  {
    icon: Zap,
    title: "Real-time Streaming",
    description: "Watch traces appear as they happen with live streaming support for async operations.",
  },
  {
    icon: Bug,
    title: "Error Tracking",
    description: "Catch failures with detailed error messages, stack traces, and retry information.",
  },
  {
    icon: LineChart,
    title: "Token Counting",
    description: "Track token usage per call with automatic cost calculation across providers.",
  },
];

export default function TracingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Tracing & Debugging
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              See inside every{" "}
              <span className="text-primary">LLM call</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Debug complex chains and agents with detailed traces. Understand exactly
              what your LLM applications are doing, one span at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Start Tracing Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/tracing">
                  View Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to debug LLMs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on OpenTelemetry standards, designed for AI applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-none bg-background">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to debug your LLM apps?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Add tracing to your application in under 5 minutes. No code changes required.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link href="https://app.brokle.ai/signup">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
