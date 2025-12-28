import Link from "next/link"
import { DisplayHeading } from "@/components/shared"
import { Github, GitFork, Users, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const ossFeatures = [
  {
    icon: Github,
    title: "Open Core",
    description:
      "Core platform is MIT licensed. View, modify, and contribute freely. Enterprise features available for teams that need them.",
  },
  {
    icon: GitFork,
    title: "Self-Host Anywhere",
    description:
      "Deploy on your infrastructure. AWS, GCP, Azure, or bare metal. You control your data.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Built with the community. Regular releases, transparent roadmap, and responsive maintainers.",
  },
]

export function OpenSourceSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t bg-muted/20">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <DisplayHeading as="h2" className="mb-4">
            Open source at heart
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our core platform is MIT licensed. Self-host for free or use our managed cloud with optional enterprise features.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {ossFeatures.map((feature) => (
            <div key={feature.title} className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/[0.05] mb-4">
                <feature.icon className="w-6 h-6 text-foreground/70" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <Link
              href="https://github.com/brokle-ai/brokle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="h-4 w-4" />
              Star on GitHub
            </Link>
          </Button>
          <Button size="lg" variant="ghost" className="gap-2" asChild>
            <Link href="/docs/self-hosting">
              Self-hosting Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
