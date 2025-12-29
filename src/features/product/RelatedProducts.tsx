import Link from "next/link"
import { ArrowRight, Search, BarChart3, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

interface RelatedProduct {
  title: string
  description: string
  href: string
  docsHref: string
  icon: React.ElementType
}

const allProducts: RelatedProduct[] = [
  {
    title: "Tracing",
    description: "Debug LLM applications with detailed traces and span-level insights",
    href: "/tracing",
    docsHref: "/docs/tracing",
    icon: Search,
  },
  {
    title: "Evaluation",
    description: "Automated quality scoring with LLM-as-judge and custom evaluators",
    href: "/evaluation",
    docsHref: "/docs/evaluation",
    icon: BarChart3,
  },
  {
    title: "Prompt Management",
    description: "Version, test, and deploy prompts without code changes",
    href: "/prompt-management",
    docsHref: "/docs/prompts",
    icon: FileText,
  },
]

interface RelatedProductsProps {
  currentProduct: "tracing" | "evaluation" | "prompt-management"
  title?: string
  description?: string
}

export function RelatedProducts({
  currentProduct,
  title = "Explore more features",
  description = "Build better AI applications with Brokle's complete observability platform",
}: RelatedProductsProps) {
  const relatedProducts = allProducts.filter((product) => {
    const productSlug = product.href.replace("/", "")
    return productSlug !== currentProduct
  })

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {relatedProducts.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.href}
                className="group rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="flex gap-4 text-sm">
                      <Link
                        href={product.href}
                        className={cn(
                          "inline-flex items-center gap-1 font-medium",
                          "text-primary hover:underline"
                        )}
                      >
                        Learn more <ArrowRight className="h-3 w-3" />
                      </Link>
                      <Link
                        href={product.docsHref}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Documentation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
