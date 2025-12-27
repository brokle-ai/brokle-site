import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MoreHorizontal } from "lucide-react"
import { DisplayHeading } from "@/components/shared"
import { Button } from "@/components/ui/button"

const integrations = [
  // AI Providers
  {
    name: "OpenAI",
    href: "/docs/integrations/openai",
    icon: "/images/integrations/openai_icon.svg",
  },
  {
    name: "Anthropic",
    href: "/docs/integrations/anthropic",
    icon: "/images/integrations/anthropic_icon.png",
  },
  {
    name: "Google Gemini",
    href: "/docs/integrations/google",
    icon: "/images/integrations/google_gemini_icon.svg",
  },
  {
    name: "Azure OpenAI",
    href: "/docs/integrations/azure",
    icon: "/images/integrations/microsoft_icon.svg",
  },
  {
    name: "AWS Bedrock",
    href: "/docs/integrations/bedrock",
    icon: "/images/integrations/bedrock_icon.png",
  },
  {
    name: "Mistral",
    href: "/docs/integrations/mistral",
    icon: "/images/integrations/mistral_icon.svg",
    darkInvert: true,
  },
  {
    name: "Cohere",
    href: "/docs/integrations/cohere",
    icon: "/images/integrations/cohere_icon.svg",
  },
  {
    name: "Groq",
    href: "/docs/integrations/groq",
    icon: "/images/integrations/groq_icon.png",
    darkInvert: true,
  },
  {
    name: "Together AI",
    href: "/docs/integrations/together",
    icon: "/images/integrations/togetherai_icon.svg",
  },
  {
    name: "Fireworks",
    href: "/docs/integrations/fireworks",
    icon: "/images/integrations/fireworks_ai_icon.svg",
  },
  {
    name: "Ollama",
    href: "/docs/integrations/ollama",
    icon: "/images/integrations/ollama_icon.png",
    darkInvert: true,
  },
  // Frameworks
  {
    name: "LangChain",
    href: "/docs/integrations/langchain",
    icon: "/images/integrations/langchain_icon.png",
    darkInvert: true,
  },
  {
    name: "LlamaIndex",
    href: "/docs/integrations/llamaindex",
    icon: "/images/integrations/llamaindex_icon.png",
  },
  {
    name: "OpenTelemetry",
    href: "/docs/integrations/opentelemetry",
    icon: "/images/integrations/opentelemetry_icon.svg",
  },
  {
    name: "Instructor",
    href: "/docs/integrations/instructor",
    icon: "/images/integrations/instructor_icon.svg",
    darkInvert: true,
  },
]

function IntegrationTile({
  name,
  href,
  icon,
  darkInvert,
}: {
  name: string
  href: string
  icon: string
  darkInvert?: boolean
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border/50 bg-card hover:shadow-md hover:border-border transition-all"
    >
      <Image
        src={icon}
        alt={`${name} icon`}
        width={32}
        height={32}
        className={darkInvert ? "dark:invert" : ""}
      />
      <span className="text-[10px] sm:text-xs text-muted-foreground text-center line-clamp-1">
        {name}
      </span>
    </Link>
  )
}

function MoreTile() {
  return (
    <Link
      href="/docs/integrations"
      className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border/50 bg-card hover:shadow-md hover:border-border transition-all"
    >
      <MoreHorizontal className="w-8 h-8 text-primary" />
      <span className="text-[10px] sm:text-xs text-muted-foreground text-center">
        More
      </span>
    </Link>
  )
}

export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left - Text */}
          <div className="lg:max-w-md">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
              Integrations
            </p>
            <DisplayHeading as="h2" className="mb-4">
              Works with your entire stack
            </DisplayHeading>
            <p className="text-lg text-muted-foreground mb-6">
              Native integrations with major AI providers and frameworks. Drop-in compatibility with your existing code.
            </p>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/docs/quickstart">Get Started</Link>
              </Button>
              <Link
                href="/docs/integrations"
                className="inline-flex items-center gap-1 text-sm font-medium hover:text-foreground/70 transition-colors"
              >
                View all integrations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right - Icon Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3">
            {integrations.map((integration) => (
              <IntegrationTile key={integration.name} {...integration} />
            ))}
            <MoreTile />
          </div>
        </div>
      </div>
    </section>
  )
}
