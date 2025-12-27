import { Activity, Users, Clock, Zap, Star, Puzzle } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: Star,
    value: "2.5K+",
    label: "GitHub Stars",
    description: "Open source community",
    featured: true,
  },
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
    icon: Puzzle,
    value: "20+",
    label: "Integrations",
    description: "SDKs & frameworks",
    featured: true,
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                "text-center p-6 rounded-xl border border-border/50 transition-all duration-200 hover:shadow-md",
                stat.featured
                  ? "bg-gradient-to-br from-muted/50 to-muted/20 relative overflow-hidden"
                  : "bg-muted/30"
              )}
            >
              {/* Decorative glow for featured cards */}
              {stat.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
              )}

              <div className={cn(
                "inline-flex items-center justify-center rounded-lg bg-foreground/[0.05] mb-4",
                stat.featured ? "w-12 h-12" : "w-10 h-10"
              )}>
                <stat.icon className={cn(
                  "text-foreground/60",
                  stat.featured ? "w-6 h-6" : "w-5 h-5"
                )} />
              </div>
              <div className={cn(
                "font-bold tracking-tight mb-1",
                stat.featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
              )}>
                {stat.value}
              </div>
              <div className={cn(
                "font-medium text-foreground/80 mb-0.5",
                stat.featured ? "text-base" : "text-sm"
              )}>
                {stat.label}
              </div>
              <div className={cn(
                "text-muted-foreground",
                stat.featured ? "text-sm" : "text-xs"
              )}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
