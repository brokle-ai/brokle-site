import type { Metadata } from "next"
import {
  ProductHero,
  ProductScreenshot,
  ProductFeatureSection,
  ProductCTA,
} from "@/features/product"
import {
  FileInput,
  Settings2,
  Tags,
  Waves,
  Gauge,
  AlertTriangle,
  FileStack,
  RotateCcw,
  ShieldAlert,
  PieChart,
  Bell,
  TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tracing & Debugging - Brokle",
  description:
    "Debug your LLM applications with detailed traces. See every LLM call, chain execution, and agent step. OpenTelemetry-native tracing for AI applications.",
  openGraph: {
    title: "Tracing & Debugging - Brokle",
    description:
      "Debug your LLM applications with detailed traces. OpenTelemetry-native tracing for AI.",
    url: "https://brokle.ai/tracing",
    siteName: "Brokle",
    type: "website",
  },
}

export default function TracingPage() {
  return (
    <>
      <ProductHero
        title="See inside every"
        highlight="LLM call"
        description="Debug complex chains and agents with detailed traces. Understand exactly what your LLM applications are doing, one span at a time."
        primaryCta={{
          text: "Start Tracing Free",
          href: "https://app.brokle.ai/signup",
        }}
        secondaryCta={{
          text: "View Documentation",
          href: "/docs/tracing",
        }}
      />

      <ProductScreenshot
        src="/images/product/tracing/hero.png"
        alt="Brokle tracing dashboard showing LLM call hierarchy with timing and token usage"
      />

      <ProductFeatureSection
        title="See every call in detail"
        description="View every LLM call with inputs, outputs, model parameters, and metadata in a single view. No more guessing what went wrong—trace the exact path through your application."
        image={{
          src: "/images/product/tracing/spans.png",
          alt: "Nested span view showing full execution flow",
        }}
        features={[
          { icon: FileInput, text: "Capture complete request and response data for every LLM call" },
          { icon: Settings2, text: "View temperature, max tokens, and all model configuration" },
          { icon: Tags, text: "Add custom metadata to traces for filtering and analysis" },
        ]}
      />

      <ProductFeatureSection
        title="Identify bottlenecks instantly"
        description="Understand where time is spent with detailed latency breakdowns. See p50, p95, and p99 latencies across your entire LLM pipeline to catch performance regressions early."
        image={{
          src: "/images/product/tracing/timeline.png",
          alt: "Latency timeline showing performance breakdown",
        }}
        features={[
          { icon: Waves, text: "Visualize timing of every operation in your pipeline" },
          { icon: Gauge, text: "Monitor p50, p95, and p99 to understand real user experience" },
          { icon: AlertTriangle, text: "Get alerted when performance degrades across deployments" },
        ]}
        reverse
      />

      <ProductFeatureSection
        title="Catch errors before users do"
        description="Track failures with detailed error messages, stack traces, and retry information. See exactly where and why things went wrong, from rate limits to malformed responses."
        image={{
          src: "/images/product/tracing/errors.png",
          alt: "Error tracking view with stack traces and retry information",
        }}
        features={[
          { icon: FileStack, text: "See full error context including line numbers and call stacks" },
          { icon: RotateCcw, text: "Understand how retry logic behaves under real conditions" },
          { icon: ShieldAlert, text: "Monitor API rate limits and quotas across all providers" },
        ]}
      />

      <ProductFeatureSection
        title="Track every dollar spent"
        description="See costs across providers, models, and use cases. Set budget alerts, forecast spending, and identify optimization opportunities before they impact your bottom line."
        image={{
          src: "/images/product/tracing/costs.png",
          alt: "Cost breakdown showing spend by provider and model",
        }}
        features={[
          { icon: PieChart, text: "See costs across OpenAI, Anthropic, and other providers" },
          { icon: Bell, text: "Get notified before you exceed spending limits" },
          { icon: TrendingUp, text: "Project future spending based on current usage patterns" },
        ]}
        reverse
      />

      <ProductCTA
        title="Ready to debug your LLM apps?"
        description="Add tracing to your application in under 5 minutes. No code changes required."
        cta={{
          text: "Get Started Free",
          href: "https://app.brokle.ai/signup",
        }}
      />
    </>
  )
}
