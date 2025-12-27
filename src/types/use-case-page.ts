import type { LucideIcon } from "lucide-react"

export interface UseCaseFeature {
  icon: LucideIcon
  title: string
  description: string
}

export interface UseCaseCodeExample {
  title: string
  language: "python" | "typescript" | "bash"
  code: string
}

export interface UseCasePageData {
  slug: string
  title: string
  subtitle: string
  metaDescription: string
  heroDescription: string
  features: UseCaseFeature[]
  codeExamples: UseCaseCodeExample[]
  testimonial?: {
    quote: string
    author: string
    title: string
    company: string
  }
}
