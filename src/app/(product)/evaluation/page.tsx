import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckSquare, Brain, Gauge, GitCompare, Workflow, BarChart3 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evaluation Framework - Brokle",
  description: "Automated LLM evaluation with LLM-as-judge. Build custom evaluators, run A/B tests, and score outputs at scale.",
  openGraph: {
    title: "Evaluation Framework - Brokle",
    description: "Automated LLM evaluation with LLM-as-judge. Build custom evaluators and score outputs at scale.",
    url: "https://brokle.ai/evaluation",
    siteName: "Brokle",
    type: "website",
  },
};

const features = [
  {
    icon: Brain,
    title: "LLM-as-Judge",
    description: "Use LLMs to evaluate LLM outputs. Score for relevance, helpfulness, safety, and custom criteria.",
  },
  {
    icon: CheckSquare,
    title: "Custom Evaluators",
    description: "Build your own evaluators with code or natural language. Define what quality means for your use case.",
  },
  {
    icon: Gauge,
    title: "Scoring at Scale",
    description: "Evaluate thousands of outputs automatically. Get scores, explanations, and aggregate metrics.",
  },
  {
    icon: GitCompare,
    title: "Model Comparison",
    description: "Compare models side-by-side with the same evaluation criteria. Find the best model for your task.",
  },
  {
    icon: Workflow,
    title: "CI/CD Integration",
    description: "Run evaluations in your pipeline. Catch quality regressions before they reach production.",
  },
  {
    icon: BarChart3,
    title: "Quality Dashboards",
    description: "Track quality over time with visual dashboards. Set alerts for quality degradation.",
  },
];

export default function EvaluationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Evaluation Framework
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Measure what{" "}
              <span className="text-primary">matters</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Automated evaluations that go beyond vibes. Score outputs with LLM-as-judge,
              run A/B tests, and ship with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Start Evaluating Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/evaluation">
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
              Beyond manual testing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systematic evaluation that scales with your application and team.
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
            <h2 className="text-3xl font-bold mb-6">Ready to evaluate your LLM outputs?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stop guessing about quality. Start measuring with automated evaluations.
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
