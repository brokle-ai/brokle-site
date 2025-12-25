import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DisplayHeading } from "@/components/shared"

// Provider data with placeholder icons (initials-based)
const providers = [
  { name: "OpenAI", initials: "OA", color: "bg-emerald-500/10 text-emerald-600" },
  { name: "Anthropic", initials: "AN", color: "bg-orange-500/10 text-orange-600" },
  { name: "Google AI", initials: "GA", color: "bg-blue-500/10 text-blue-600" },
  { name: "Azure OpenAI", initials: "AZ", color: "bg-sky-500/10 text-sky-600" },
  { name: "AWS Bedrock", initials: "BR", color: "bg-amber-500/10 text-amber-600" },
  { name: "Cohere", initials: "CO", color: "bg-purple-500/10 text-purple-600" },
  { name: "Mistral", initials: "MI", color: "bg-indigo-500/10 text-indigo-600" },
  { name: "Groq", initials: "GQ", color: "bg-rose-500/10 text-rose-600" },
  { name: "Together AI", initials: "TA", color: "bg-teal-500/10 text-teal-600" },
  { name: "Fireworks", initials: "FW", color: "bg-red-500/10 text-red-600" },
  { name: "Replicate", initials: "RP", color: "bg-violet-500/10 text-violet-600" },
  { name: "Ollama", initials: "OL", color: "bg-slate-500/10 text-slate-600" },
]

const frameworks = [
  { name: "LangChain", initials: "LC", color: "bg-green-500/10 text-green-600" },
  { name: "LlamaIndex", initials: "LI", color: "bg-purple-500/10 text-purple-600" },
  { name: "Vercel AI", initials: "VA", color: "bg-zinc-500/10 text-zinc-600" },
  { name: "OpenTelemetry", initials: "OT", color: "bg-blue-500/10 text-blue-600" },
  { name: "Instructor", initials: "IN", color: "bg-cyan-500/10 text-cyan-600" },
  { name: "DSPy", initials: "DS", color: "bg-pink-500/10 text-pink-600" },
]

const sdks = [
  { name: "Python", command: "pip install brokle", icon: "PY", color: "bg-yellow-500/10 text-yellow-600" },
  { name: "TypeScript", command: "npm i @brokle/sdk", icon: "TS", color: "bg-blue-500/10 text-blue-600" },
  { name: "REST API", command: "OpenAPI 3.0", icon: "API", color: "bg-green-500/10 text-green-600" },
]

function ProviderBadge({ name, initials, color }: { name: string; initials: string; color: string }) {
  return (
    <div
      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-lg border bg-card hover:border-foreground/20 hover:shadow-sm transition-all cursor-default"
    >
      <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${color}`}>
        {initials}
      </div>
      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  )
}

export function IntegrationsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <DisplayHeading as="h2" className="mb-4">
            Works with your entire stack
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Native integrations with every major AI provider and framework.
            Drop-in compatibility with your existing code.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 text-center">
            AI Providers
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {providers.map((provider) => (
              <ProviderBadge key={provider.name} {...provider} />
            ))}
          </div>
        </div>

        {/* Frameworks Grid */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 text-center">
            Frameworks & Standards
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {frameworks.map((framework) => (
              <ProviderBadge key={framework.name} {...framework} />
            ))}
          </div>
        </div>

        {/* SDKs */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 text-center">
            Official SDKs
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {sdks.map((sdk) => (
              <div
                key={sdk.name}
                className="flex flex-col items-center p-4 rounded-xl border bg-card hover:border-foreground/20 hover:shadow-sm transition-all min-w-[140px]"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold mb-2 ${sdk.color}`}>
                  {sdk.icon}
                </div>
                <span className="text-sm font-semibold mb-1">{sdk.name}</span>
                <code className="text-xs text-muted-foreground font-mono">
                  {sdk.command}
                </code>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
          >
            View all integrations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
