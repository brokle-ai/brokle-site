import { Activity, Users, Clock, Zap } from "lucide-react"

const stats = [
  {
    icon: Activity,
    value: "10M+",
    label: "Traces Captured",
    description: "LLM calls monitored",
  },
  {
    icon: Users,
    value: "500+",
    label: "Teams",
    description: "Building with Brokle",
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime",
    description: "Enterprise reliability",
  },
  {
    icon: Zap,
    value: "<100ms",
    label: "Latency",
    description: "Real-time ingestion",
  },
]

export function StatsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-muted/30 border border-border/50"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-foreground/[0.05] mb-4">
                <stat.icon className="w-5 h-5 text-foreground/60" />
              </div>
              <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground/80 mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
