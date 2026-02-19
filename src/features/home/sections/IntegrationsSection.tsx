import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { DisplayHeading } from "@/components/shared"
import { Marquee } from "@/components/ui/marquee"
import { BLUR_PLACEHOLDER_ICON } from "@/lib/image-constants"

const integrations = [
  // AI Providers
  { name: "OpenAI", icon: "/images/integrations/openai_icon.svg", href: "/docs/integrations/openai" },
  { name: "Anthropic", icon: "/images/integrations/anthropic_icon.png", href: "/docs/integrations/anthropic" },
  { name: "Google Gemini", icon: "/images/integrations/google_gemini_icon.svg", href: "/docs/integrations/google" },
  { name: "Azure OpenAI", icon: "/images/integrations/microsoft_icon.svg", href: "/docs/integrations/azure" },
  { name: "AWS Bedrock", icon: "/images/integrations/bedrock_icon.png", href: "/docs/integrations/bedrock" },
  { name: "Mistral", icon: "/images/integrations/mistral_icon.svg", darkInvert: true, href: "/docs/integrations/mistral" },
  { name: "Cohere", icon: "/images/integrations/cohere_icon.svg", href: "/docs/integrations/cohere" },
  { name: "Groq", icon: "/images/integrations/groq_icon.png", darkInvert: true, href: "/docs/integrations/groq" },
  { name: "Together AI", icon: "/images/integrations/togetherai_icon.svg", href: "/docs/integrations/together" },
  { name: "Fireworks", icon: "/images/integrations/fireworks_ai_icon.svg", href: "/docs/integrations/fireworks" },
  { name: "Ollama", icon: "/images/integrations/ollama_icon.png", darkInvert: true, href: "/docs/integrations/ollama" },
  // Frameworks & Tools
  { name: "LangChain", icon: "/images/integrations/langchain_icon.png", darkInvert: true, href: "/docs/integrations/langchain" },
  { name: "LlamaIndex", icon: "/images/integrations/llamaindex_icon.png", href: "/docs/integrations/llamaindex" },
  { name: "OpenTelemetry", icon: "/images/integrations/opentelemetry_icon.svg", href: "/docs/integrations/opentelemetry" },
  { name: "Instructor", icon: "/images/integrations/instructor_icon.svg", darkInvert: true, href: "/docs/integrations/instructor" },
]

// Split integrations into 3 rows with different arrangements
const row1 = [...integrations]
const row2 = [...integrations].reverse()
const row3 = [...integrations.slice(7), ...integrations.slice(0, 7)]

function IntegrationIcon({
  name,
  icon,
  darkInvert,
  href,
}: {
  name: string
  icon: string
  darkInvert?: boolean
  href: string
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-16 h-16 mx-2 rounded-xl border bg-card hover:bg-muted/50 hover:scale-110 transition-all"
      title={name}
    >
      <Image
        src={icon}
        alt={`${name} icon`}
        width={36}
        height={36}
        className={darkInvert ? "dark:invert" : ""}
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER_ICON}
      />
    </Link>
  )
}

export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <DisplayHeading as="h2" className="mb-4">
            Works with your entire stack
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Native integrations with popular AI providers and frameworks. Drop-in compatibility with your existing code.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built on OpenTelemetry — compatible with any instrumented tool or framework.
          </p>
        </div>
      </div>

      {/* 3-Row Marquee - Full width */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-4">
          {/* Row 1 - Normal direction */}
          <Marquee pauseOnHover className="[--duration:50s]">
            {row1.map((integration) => (
              <IntegrationIcon key={`r1-${integration.name}`} {...integration} />
            ))}
          </Marquee>

          {/* Row 2 - Reverse direction */}
          <Marquee pauseOnHover reverse className="[--duration:55s]">
            {row2.map((integration) => (
              <IntegrationIcon key={`r2-${integration.name}`} {...integration} />
            ))}
          </Marquee>

          {/* Row 3 - Normal direction */}
          <Marquee pauseOnHover className="[--duration:45s]">
            {row3.map((integration) => (
              <IntegrationIcon key={`r3-${integration.name}`} {...integration} />
            ))}
          </Marquee>
        </div>
      </div>

      {/* CTA */}
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mt-10">
          <Link
            href="/docs/integrations"
            className="inline-flex items-center gap-1 text-sm font-medium hover:text-foreground/70 transition-colors"
          >
            View all integrations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
