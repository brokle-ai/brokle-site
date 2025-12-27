import { DisplayHeading } from "@/components/shared"
import { Code2, Eye, TrendingUp } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: Code2,
    title: "Instrument your app",
    description:
      "Add a few lines of code or use auto-instrumentation. Works with LangChain, LlamaIndex, OpenAI SDK, and more.",
    code: "pip install brokle",
  },
  {
    step: 2,
    icon: Eye,
    title: "See every LLM call",
    description:
      "Traces appear in real-time. Debug failures, track latency, and understand token usage across your entire pipeline.",
    code: null,
  },
  {
    step: 3,
    icon: TrendingUp,
    title: "Improve continuously",
    description:
      "Run evaluations, iterate on prompts, and ship improvements with confidence. All in one platform.",
    code: null,
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t bg-muted/20">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <DisplayHeading as="h2" className="mb-4">
            How it works
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in under 5 minutes. No complex setup required.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                <step.icon className="w-6 h-6" />
              </div>

              {/* Step Number */}
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Step {step.step}
              </p>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Code Snippet */}
              {step.code && (
                <code className="inline-block mt-4 px-3 py-1.5 text-sm font-mono bg-muted rounded">
                  {step.code}
                </code>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
