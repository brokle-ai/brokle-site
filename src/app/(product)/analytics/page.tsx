import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, DollarSign, Clock, TrendingUp, PieChart, Bell, Download } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cost & Latency Analytics - Brokle",
  description: "Track LLM costs across providers. Monitor latency, identify expensive calls, and optimize your AI spend.",
  openGraph: {
    title: "Cost & Latency Analytics - Brokle",
    description: "Track LLM costs across providers. Monitor latency and optimize your AI spend.",
    url: "https://brokle.ai/analytics",
    siteName: "Brokle",
    type: "website",
  },
};

const features = [
  {
    icon: DollarSign,
    title: "Cost Tracking",
    description: "See exactly how much each LLM call costs. Track spend across providers, models, and use cases.",
  },
  {
    icon: Clock,
    title: "Latency Monitoring",
    description: "Monitor response times with p50, p95, and p99 latencies. Catch performance regressions early.",
  },
  {
    icon: TrendingUp,
    title: "Usage Trends",
    description: "Understand how your LLM usage grows over time. Forecast costs and capacity needs.",
  },
  {
    icon: PieChart,
    title: "Breakdown by Model",
    description: "See which models and providers drive your costs. Compare performance across providers.",
  },
  {
    icon: Bell,
    title: "Budget Alerts",
    description: "Set spending limits and get notified before you exceed them. Prevent surprise bills.",
  },
  {
    icon: Download,
    title: "Export & Reports",
    description: "Export detailed reports for billing, compliance, and analysis. Schedule recurring exports.",
  },
];

export default function AnalyticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Cost & Latency Analytics
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Know where every{" "}
              <span className="text-primary">dollar goes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track costs across every LLM provider. Monitor latency, identify expensive calls,
              and optimize your AI spend with actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Start Tracking Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/analytics">
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
              Complete visibility into LLM costs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop guessing. Start optimizing with real data.
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
            <h2 className="text-3xl font-bold mb-6">Ready to optimize your LLM costs?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get complete visibility into your AI spend. Identify optimization opportunities today.
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
