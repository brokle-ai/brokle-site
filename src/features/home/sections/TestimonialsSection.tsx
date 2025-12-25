import { DisplayHeading } from "@/components/shared"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Brokle transformed how we debug our AI applications. What used to take hours now takes minutes. The trace visualization is incredibly intuitive.",
    author: "Sarah Chen",
    title: "Head of AI Engineering",
    company: "Nexus AI",
    initials: "SC",
  },
  {
    quote:
      "The cost analytics alone paid for itself in the first month. We identified inefficient prompts that were costing us thousands in wasted tokens.",
    author: "Marcus Rodriguez",
    title: "VP of Engineering",
    company: "Cortex Labs",
    initials: "MR",
  },
  {
    quote:
      "Finally, an observability platform that understands LLM applications. The evaluation framework helped us catch hallucinations before they reached production.",
    author: "Emily Nakamura",
    title: "ML Platform Lead",
    company: "Prism AI",
    initials: "EN",
  },
]

function TestimonialCard({
  quote,
  author,
  title,
  company,
  initials,
}: {
  quote: string
  author: string
  title: string
  company: string
  initials: string
}) {
  return (
    <div className="flex flex-col p-6 rounded-xl bg-card border">
      <Quote className="w-8 h-8 text-foreground/10 mb-4" />
      <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-foreground/[0.08] flex items-center justify-center">
          <span className="text-sm font-semibold text-foreground/60">
            {initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold">{author}</p>
          <p className="text-xs text-muted-foreground">
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <DisplayHeading as="h2" className="mb-4">
            Loved by AI teams
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why engineering teams trust Brokle to power their AI observability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
