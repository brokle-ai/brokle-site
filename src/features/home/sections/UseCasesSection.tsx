import Link from "next/link"
import { DisplayHeading } from "@/components/shared"
import { cn } from "@/lib/utils"
import {
  MessageSquare,
  FileSearch,
  Code2,
  PenTool,
  Headphones,
  Wrench,
  ArrowRight,
} from "lucide-react"

const useCases = [
  {
    icon: MessageSquare,
    title: "Chatbots & Agents",
    description:
      "Debug multi-turn conversations, track agent tool calls, and identify failure patterns in autonomous systems.",
    href: "/use-cases/chatbots",
  },
  {
    icon: FileSearch,
    title: "RAG Applications",
    description:
      "Monitor retrieval quality, measure context relevance, and optimize your retrieval pipeline end-to-end.",
    href: "/use-cases/rag-applications",
  },
  {
    icon: Code2,
    title: "Code Assistants",
    description:
      "Track code generation quality, evaluate syntax correctness, and monitor developer acceptance rates.",
    href: "/use-cases/code-assistants",
  },
  {
    icon: PenTool,
    title: "Content Generation",
    description:
      "Ensure brand voice consistency, catch hallucinations early, and A/B test prompt variations.",
    href: "/use-cases/content-generation",
  },
  {
    icon: Headphones,
    title: "Customer Support AI",
    description:
      "Measure resolution rates, track escalations, and ensure quality responses at scale.",
    href: "/use-cases/customer-support",
  },
  {
    icon: Wrench,
    title: "Internal Tools",
    description:
      "Build reliable AI-powered internal applications with full visibility into every request.",
    href: "/use-cases/internal-tools",
  },
]

// Helper function for bento grid card sizing
const getBentoClasses = (index: number): string => {
  switch (index) {
    case 0:
      // Featured card - spans 2 columns on md+, 2 rows on lg
      return "md:col-span-2 lg:row-span-2"
    default:
      return ""
  }
}

export function UseCasesSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 border-t bg-muted/20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <DisplayHeading as="h2" className="mb-4">
            Built for every AI use case
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From chatbots to RAG applications, Brokle provides the visibility you
            need to build reliable AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Link
              key={useCase.title}
              href={useCase.href}
              className={cn(
                "group flex flex-col p-6 rounded-xl bg-card border hover:border-foreground/20 hover:shadow-lg transition-all duration-200",
                getBentoClasses(index),
                // Featured card gets gradient background
                index === 0 && "bg-gradient-to-br from-muted/40 to-transparent relative overflow-hidden"
              )}
            >
              {/* Decorative glow for featured card */}
              {index === 0 && (
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
              )}

              {/* Icon - larger for featured */}
              <div className={cn(
                "rounded-lg bg-foreground/[0.05] flex items-center justify-center mb-4 group-hover:bg-foreground/[0.08] transition-colors",
                index === 0 ? "w-14 h-14" : "w-12 h-12"
              )}>
                <useCase.icon className={cn(
                  "text-foreground/70",
                  index === 0 ? "w-7 h-7" : "w-6 h-6"
                )} />
              </div>

              {/* Title - larger for featured */}
              <h3 className={cn(
                "font-semibold mb-2",
                index === 0 ? "text-xl" : "text-lg"
              )}>
                {useCase.title}
              </h3>

              {/* Description */}
              <p className={cn(
                "text-muted-foreground leading-relaxed mb-4 flex-1",
                index === 0 ? "text-base" : "text-sm"
              )}>
                {useCase.description}
              </p>

              {/* Learn more link */}
              <div className="flex items-center gap-1 text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
