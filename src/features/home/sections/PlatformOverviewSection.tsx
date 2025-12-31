import Link from "next/link"
import { DisplayHeading } from "@/components/shared"
import { ArrowRight, Cloud, Server } from "lucide-react"
import { getSignupUrl } from "@/lib/app-urls"

const platforms = [
  {
    icon: Cloud,
    label: "Cloud",
    title: "Managed Observability",
    description:
      "Let us handle the infrastructure. Focus on building your AI applications while we manage scaling, security, and uptime.",
    cta: "Explore Cloud",
    href: getSignupUrl(),
  },
  {
    icon: Server,
    label: "Self-Hosted",
    title: "On-Premise Platform",
    description:
      "Full control over your data. Deploy anywhere you want—your cloud, your infrastructure, your compliance requirements met.",
    cta: "Self-host Guide",
    href: "/docs/self-hosting",
  },
]

export function PlatformOverviewSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <DisplayHeading as="h2" className="mb-4">
            The complete LLM operations platform
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the deployment that fits your needs. Same powerful features,
            different hosting options.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {platforms.map((platform) => (
            <div key={platform.title}>
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6">
                <platform.icon className="w-6 h-6 text-foreground/70" />
              </div>

              {/* Label */}
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {platform.label}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">{platform.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {platform.description}
              </p>

              {/* CTA Link */}
              <Link
                href={platform.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
              >
                {platform.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
