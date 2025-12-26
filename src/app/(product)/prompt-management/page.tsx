import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, GitBranch, History, FlaskConical, Rocket, Users, Lock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prompt Management - Brokle",
  description: "Version, test, and deploy prompts with confidence. Track changes, compare performance, and roll back instantly.",
  openGraph: {
    title: "Prompt Management - Brokle",
    description: "Version, test, and deploy prompts with confidence. Track changes and roll back instantly.",
    url: "https://brokle.ai/prompt-management",
    siteName: "Brokle",
    type: "website",
  },
};

const features = [
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Track every change to your prompts with full version history and diff views.",
  },
  {
    icon: History,
    title: "Instant Rollback",
    description: "Roll back to any previous version with one click. No code deployments needed.",
  },
  {
    icon: FlaskConical,
    title: "A/B Testing",
    description: "Test prompt variations in production with automatic traffic splitting and metrics.",
  },
  {
    icon: Rocket,
    title: "Hot Swapping",
    description: "Update prompts in production without code changes or deployments.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Review prompts with your team. Comment, approve, and track who changed what.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Control who can view, edit, and deploy prompts with role-based permissions.",
  },
];

export default function PromptManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Prompt Management
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ship prompts with{" "}
              <span className="text-primary">confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Version, test, and deploy prompts without touching your codebase.
              A/B test in production, roll back instantly when things go wrong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs/prompts">
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
              Prompts as a first-class citizen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage prompts at scale, from solo developers to enterprise teams.
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
            <h2 className="text-3xl font-bold mb-6">Ready to manage your prompts?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stop hardcoding prompts. Start versioning, testing, and deploying with confidence.
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
