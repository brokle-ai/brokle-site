import Link from "next/link"
import { DisplayHeading } from "@/components/shared"
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
    href: "/use-cases/rag",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              href={useCase.href}
              className="group flex flex-col p-6 rounded-xl bg-card border hover:border-foreground/20 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/[0.05] flex items-center justify-center mb-4 group-hover:bg-foreground/[0.08] transition-colors">
                <useCase.icon className="w-6 h-6 text-foreground/70" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {useCase.description}
              </p>
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
