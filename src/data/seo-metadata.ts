/**
 * Centralized SEO metadata for all static pages.
 *
 * Titles are stored WITHOUT the brand suffix — the root layout template
 * appends " | Brokle" automatically via `template: '%s | Brokle'`.
 *
 * The home page is the exception: it uses an `absolute` title to bypass
 * the template (handled by resolvePageMetadata).
 */

export interface PageSEO {
  /** Page title (root template adds " | Brokle") */
  title: string;
  /** Default meta description */
  description: string;
  /** Override <title> tag (keep under 50 chars, template adds suffix) */
  metaTitle?: string;
  /** Override <meta name="description"> (keep under 160 chars) */
  metaDescription?: string;
  /** Override og:title and twitter:title (keep under 60 chars) */
  ogTitle?: string;
  /** Override og:description and twitter:description */
  ogDescription?: string;
  /** Override canonical URL (absolute URL) */
  canonicalUrl?: string;
  /** Additional keywords for the page */
  keywords?: string[];
}

export const seoMetadata = {
  home: {
    title: 'Brokle - The open source platform for AI teams',
    description:
      'Debug, evaluate, and optimize your LLM applications with complete visibility. Open source. OpenTelemetry-native. Self-host anywhere.',
  },
  about: {
    title: 'About',
    description:
      'Learn about Brokle, the open-source AI observability platform built for developers.',
  },
  pricing: {
    title: 'Pricing',
    description:
      'Simple, usage-based pricing for LLM observability. Start free, scale as you grow. No hidden fees, no per-seat pricing.',
    ogDescription:
      'Simple, usage-based pricing for LLM observability. Start free, scale as you grow.',
  },
  contact: {
    title: 'Contact',
    description:
      'Get in touch with the Brokle team. We are here to help with your AI observability needs.',
  },
  careers: {
    title: 'Careers',
    description:
      'Join the Brokle team. We are building the future of AI observability.',
  },
  changelog: {
    title: 'Changelog',
    description: 'Latest updates and improvements to the Brokle platform.',
  },
  blog: {
    title: 'Blog',
    description:
      'Technical guides and updates from the Brokle team.',
    keywords: [
      'AI observability',
      'LLM tracing',
      'AI evaluation',
      'prompt management',
    ],
  },
  vsLangfuse: {
    title: 'Brokle vs Langfuse',
    description:
      'Detailed comparison of Brokle vs Langfuse for LLM observability. Compare features, architecture, and see why teams choose Brokle.',
    keywords: [
      'Langfuse alternative',
      'Langfuse vs Brokle',
      'LLM observability comparison',
      'open source LLM tracing',
    ],
  },
  vsLangsmith: {
    title: 'Brokle vs LangSmith',
    description:
      'Detailed comparison of Brokle vs LangSmith. See why teams choose open-source Brokle over LangSmith for LLM tracing and evaluation.',
    keywords: [
      'LangSmith alternative',
      'LangSmith vs Brokle',
      'open source LangSmith',
      'LLM observability comparison',
      'self-hosted LLM tracing',
    ],
  },
  vsPhoenix: {
    title: 'Brokle vs Arize Phoenix',
    description:
      'Detailed comparison of Brokle vs Arize Phoenix. Compare tracing, evaluation, and see which fits your LLM observability needs.',
    keywords: [
      'Arize Phoenix alternative',
      'Phoenix vs Brokle',
      'LLM observability comparison',
      'open source LLM tracing',
    ],
  },
  tracing: {
    title: 'Tracing & Debugging',
    description:
      'Debug your AI applications with detailed traces. See every AI call, chain execution, and agent step. OpenTelemetry-native tracing for AI applications.',
    ogDescription:
      'Debug your AI applications with detailed traces. OpenTelemetry-native tracing for AI.',
  },
  evaluation: {
    title: 'Evaluation Framework',
    description:
      'Automated AI evaluation with LLM-as-judge. Build custom evaluators, run A/B tests, and score outputs at scale.',
    ogDescription:
      'Automated AI evaluation with LLM-as-judge. Build custom evaluators and score outputs at scale.',
  },
  promptManagement: {
    title: 'Prompt Management',
    description:
      'Version, test, and deploy prompts with confidence. Track changes, compare performance, and roll back instantly.',
    ogDescription:
      'Version, test, and deploy prompts with confidence. Track changes and roll back instantly.',
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'Brokle privacy policy. How we handle and protect your data.',
  },
  terms: {
    title: 'Terms of Service',
    description:
      'Brokle terms of service. Terms and conditions for using Brokle.',
  },
} as const satisfies Record<string, PageSEO>;
