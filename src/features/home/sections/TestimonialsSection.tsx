import { DisplayHeading } from "@/components/shared"
import { Marquee } from "@/components/ui/marquee"

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
  {
    quote:
      "Self-hosting Brokle was a breeze. We had full observability running in our private cloud within an hour.",
    author: "Alex Thompson",
    title: "DevOps Lead",
    company: "SecureAI Corp",
    initials: "AT",
  },
  {
    quote:
      "The prompt versioning feature is a game-changer. We can A/B test prompts and see exactly which performs better.",
    author: "Lisa Park",
    title: "Senior AI Engineer",
    company: "DataFlow AI",
    initials: "LP",
  },
  {
    quote:
      "OpenTelemetry-native means we integrated Brokle with our existing observability stack in minutes, not days.",
    author: "James Wilson",
    title: "Platform Architect",
    company: "CloudScale",
    initials: "JW",
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
    <div className="w-[400px] flex-shrink-0 flex flex-col p-5 rounded-xl bg-accent border border-border/50">
      <p className="text-foreground/80 text-sm leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          <span className="text-xs font-semibold">
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
    <section className="py-20 md:py-28 lg:py-32 border-t overflow-hidden">
      {/* Header */}
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <DisplayHeading as="h2" className="mb-4">
            Loved by AI teams
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why engineering teams trust Brokle to power their AI observability.
          </p>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 inset-y-0 w-[10%] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-[10%] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 - scrolling left */}
        <Marquee pauseOnHover className="[--duration:40s]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </Marquee>

        {/* Row 2 - scrolling right */}
        <Marquee pauseOnHover reverse className="mt-4 [--duration:40s]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
