import { DisplayHeading } from "@/components/shared"
import { Zap, BarChart3, GitBranch, Layers } from "lucide-react"

const innovations = [
  {
    icon: Layers,
    title: "OpenTelemetry Native",
    description: "Industry-standard tracing with OTLP ingestion, no vendor lock-in.",
  },
  {
    icon: Zap,
    title: "Real-time Evaluation",
    description: "Score and validate outputs as they stream through your application.",
  },
  {
    icon: BarChart3,
    title: "Cost Intelligence",
    description: "Track spend across all providers automatically with token-level precision.",
  },
  {
    icon: GitBranch,
    title: "Prompt Versioning",
    description: "Git-like version control for prompts with A/B testing built-in.",
  },
]

export function ResearchSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left Column - Title */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Latest from Brokle Engineering
            </p>
            <DisplayHeading as="h2" className="mb-6">
              Built for production AI
            </DisplayHeading>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our engineering team builds cutting-edge observability tools designed for
              the unique challenges of AI applications at scale.
            </p>
          </div>

          {/* Right Column - Innovation List */}
          <div className="space-y-8">
            {innovations.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
