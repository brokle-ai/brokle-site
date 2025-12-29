import type { Metadata } from "next"
import { ProductSchema } from "@/components/seo"
import {
  ProductHero,
  ProductScreenshot,
  ProductFeatureSection,
  ProductCTA,
  RelatedProducts,
} from "@/features/product"
import {
  FileEdit,
  Variable,
  Eye,
  Clock,
  GitCompare,
  FileCheck,
  Tag,
  Undo2,
  FlaskConical,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Prompt Management - Brokle",
  description:
    "Version, test, and deploy prompts with confidence. Track changes, compare performance, and roll back instantly.",
  openGraph: {
    title: "Prompt Management - Brokle",
    description:
      "Version, test, and deploy prompts with confidence. Track changes and roll back instantly.",
    url: "https://brokle.com/prompt-management",
    siteName: "Brokle",
    type: "website",
  },
}

export default function PromptManagementPage() {
  return (
    <>
      <ProductSchema
        name="Prompt Management"
        description="Version, test, and deploy prompts with confidence. Track changes, compare performance, and roll back instantly."
        url="https://brokle.com/prompt-management"
        features={[
          "Visual prompt editor",
          "Version control for prompts",
          "Deployment labels",
          "A/B testing in production",
          "Instant rollbacks",
          "Template variables",
        ]}
      />
      <ProductHero
        title="Ship prompts with"
        highlight="confidence"
        description="Version, test, and deploy prompts without touching your codebase. A/B test in production, roll back instantly when things go wrong."
        primaryCta={{
          text: "Get Started Free",
          href: "https://app.brokle.com/signup",
        }}
        secondaryCta={{
          text: "View Documentation",
          href: "/docs/prompts",
        }}
      />

      <ProductScreenshot
        src="/images/product/prompts/hero.png"
        alt="Brokle prompt management interface with version history and deployment labels"
      />

      <ProductFeatureSection
        title="Edit prompts visually"
        description="Write and refine prompts in a rich editor with syntax highlighting, variable support, and real-time validation. Preview outputs before deploying."
        image={{
          src: "/images/product/prompts/editor.png",
          alt: "Prompt editor with syntax highlighting and preview",
        }}
        features={[
          { icon: FileEdit, text: "Syntax highlighting, autocomplete, and inline validation" },
          { icon: Variable, text: "Use templates with dynamic placeholders for flexible prompts" },
          { icon: Eye, text: "Test your prompts against sample inputs before saving" },
        ]}
      />

      <ProductFeatureSection
        title="Track every change"
        description="Full version history with diff views for every prompt. See who changed what and when. Compare versions side-by-side to understand the evolution of your prompts."
        image={{
          src: "/images/product/prompts/versions.png",
          alt: "Version history with diff comparison",
        }}
        features={[
          { icon: Clock, text: "Every change tracked with timestamps and author info" },
          { icon: GitCompare, text: "Compare any two versions to see exactly what changed" },
          { icon: FileCheck, text: "Full compliance-ready logs of all prompt modifications" },
        ]}
        reverse
      />

      <ProductFeatureSection
        title="Deploy without code changes"
        description="Use labels like 'production', 'staging', or 'canary' to control which prompt version is served. Hot-swap prompts in production with zero downtime."
        image={{
          src: "/images/product/prompts/deploy.png",
          alt: "Deployment labels and environment configuration",
        }}
        features={[
          { icon: Tag, text: "Separate production, staging, and development versions" },
          { icon: Undo2, text: "Instantly revert to any previous version when issues arise" },
          { icon: FlaskConical, text: "Split traffic between versions to test improvements safely" },
        ]}
      />

      <RelatedProducts currentProduct="prompt-management" />

      <ProductCTA
        title="Ready to manage your prompts?"
        description="Stop hardcoding prompts. Start versioning, testing, and deploying with confidence."
        cta={{
          text: "Get Started Free",
          href: "https://app.brokle.com/signup",
        }}
      />
    </>
  )
}
