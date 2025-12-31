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
  CheckSquare,
  Scale,
  BarChart3,
  Columns2,
  DollarSign,
  Activity,
  Code,
  GitPullRequest,
  History,
} from "lucide-react"
import { getSignupUrl } from "@/lib/app-urls"

export const metadata: Metadata = {
  title: "Evaluation Framework - Brokle",
  description:
    "Automated LLM evaluation with LLM-as-judge. Build custom evaluators, run A/B tests, and score outputs at scale.",
  openGraph: {
    title: "Evaluation Framework - Brokle",
    description:
      "Automated LLM evaluation with LLM-as-judge. Build custom evaluators and score outputs at scale.",
    url: "https://brokle.com/evaluation",
    siteName: "Brokle",
    type: "website",
  },
}

export default function EvaluationPage() {
  return (
    <>
      <ProductSchema
        name="Evaluation"
        description="Automated LLM evaluation with LLM-as-judge. Build custom evaluators, run A/B tests, and score outputs at scale."
        url="https://brokle.com/evaluation"
        features={[
          "LLM-as-judge evaluation",
          "Pre-built quality scorers",
          "Custom evaluator framework",
          "A/B testing for models",
          "CI/CD integration",
          "Dataset management",
        ]}
      />
      <ProductHero
        title="Measure what"
        highlight="matters"
        description="Automated evaluations that go beyond vibes. Score outputs with LLM-as-judge, run A/B tests, and ship with confidence."
        primaryCta={{
          text: "Start Evaluating Free",
          href: getSignupUrl(),
        }}
        secondaryCta={{
          text: "View Documentation",
          href: "/docs/evaluation",
        }}
      />

      <ProductScreenshot
        src="/images/product/evaluation/hero.png"
        alt="Brokle evaluation dashboard showing quality scores and benchmark comparisons"
      />

      <ProductFeatureSection
        title="Score outputs at scale"
        description="Evaluate thousands of outputs automatically with built-in scorers for relevance, helpfulness, safety, and custom criteria. Get scores, explanations, and aggregate metrics."
        image={{
          src: "/images/product/evaluation/scores.png",
          alt: "Quality scores dashboard with detailed metrics",
        }}
        features={[
          { icon: CheckSquare, text: "Pre-built evaluators for relevance, helpfulness, and safety" },
          { icon: Scale, text: "Use powerful LLMs to evaluate nuanced quality criteria" },
          { icon: BarChart3, text: "See distributions, averages, and trends across datasets" },
        ]}
      />

      <ProductFeatureSection
        title="Compare models side-by-side"
        description="Test different models with the same evaluation criteria. Find the best model for your specific task by comparing quality, cost, and latency trade-offs."
        image={{
          src: "/images/product/evaluation/comparison.png",
          alt: "Model comparison view showing quality and performance metrics",
        }}
        features={[
          { icon: Columns2, text: "Evaluate multiple models against the same test suite" },
          { icon: DollarSign, text: "Understand the relationship between quality and spending" },
          { icon: Activity, text: "Know when differences are meaningful, not just noise" },
        ]}
        reverse
      />

      <ProductFeatureSection
        title="Build your own evaluators"
        description="Define what quality means for your use case. Create evaluators with code or natural language, and run them on every output or as part of your CI/CD pipeline."
        image={{
          src: "/images/product/evaluation/datasets.png",
          alt: "Dataset management and custom evaluator configuration",
        }}
        features={[
          { icon: Code, text: "Write evaluators in Python, TypeScript, or plain English" },
          { icon: GitPullRequest, text: "Run evaluations automatically on every pull request" },
          { icon: History, text: "Track changes to test sets alongside your prompts" },
        ]}
      />

      <RelatedProducts currentProduct="evaluation" />

      <ProductCTA
        title="Ready to evaluate your LLM outputs?"
        description="Stop guessing about quality. Start measuring with automated evaluations."
        cta={{
          text: "Get Started Free",
          href: getSignupUrl(),
        }}
      />
    </>
  )
}
