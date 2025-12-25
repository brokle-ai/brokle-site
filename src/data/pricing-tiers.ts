import type { PricingTier, AddOn } from "@/types/pricing"

export const pricingTiers: PricingTier[] = [
  {
    id: "hobby",
    name: "Hobby",
    price: {
      monthly: 0,
      annual: 0,
    },
    priceDisplay: {
      monthly: "Free",
      annual: "Free",
    },
    description: "Perfect for side projects and experimentation.",
    highlighted: false,
    features: [
      "50,000 traces/month",
      "7-day data retention",
      "1 project",
      "Basic analytics",
      "Community support",
      "Public dashboard",
    ],
    cta: {
      text: "Get Started",
      href: "https://app.brokle.ai/signup",
      variant: "outline",
    },
  },
  {
    id: "pro",
    name: "Pro",
    price: {
      monthly: 29,
      annual: 24,
    },
    priceDisplay: {
      monthly: "$29",
      annual: "$24",
    },
    description: "For individual developers and small teams.",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "500,000 traces/month",
      "30-day data retention",
      "5 projects",
      "Advanced analytics & dashboards",
      "Prompt management",
      "Evaluation framework",
      "Email support",
      "API access",
    ],
    cta: {
      text: "Start Free Trial",
      href: "https://app.brokle.ai/signup?plan=pro",
      variant: "default",
    },
  },
  {
    id: "team",
    name: "Team",
    price: {
      monthly: 199,
      annual: 159,
    },
    priceDisplay: {
      monthly: "$199",
      annual: "$159",
    },
    description: "For growing teams with collaboration needs.",
    highlighted: false,
    features: [
      "5M traces/month",
      "90-day data retention",
      "Unlimited projects",
      "Team collaboration",
      "Custom dashboards",
      "SSO (Google, GitHub)",
      "Priority support",
      "Webhooks & integrations",
    ],
    cta: {
      text: "Start Free Trial",
      href: "https://app.brokle.ai/signup?plan=team",
      variant: "outline",
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: null,
      annual: null,
    },
    priceDisplay: {
      monthly: "Custom",
      annual: "Custom",
    },
    description: "For organizations with advanced security needs.",
    highlighted: false,
    features: [
      "Unlimited traces",
      "Custom data retention",
      "Dedicated infrastructure",
      "SAML SSO",
      "SOC 2, HIPAA, GDPR",
      "Self-hosting option",
      "Custom SLA",
      "Dedicated support",
    ],
    cta: {
      text: "Contact Sales",
      href: "/contact",
      variant: "outline",
    },
  },
]

export const addOns: AddOn[] = [
  {
    id: "additional-traces",
    name: "Additional Traces",
    price: 10,
    priceUnit: "/million traces",
    description: "Need more traces? Purchase additional capacity.",
    features: [
      "Pay as you go",
      "No commitment",
      "Same retention policy",
    ],
  },
  {
    id: "extended-retention",
    name: "Extended Retention",
    price: 49,
    priceUnit: "/month",
    description: "Keep your data longer for compliance and analysis.",
    features: [
      "180-day retention",
      "Full query access",
      "Export anytime",
    ],
  },
  {
    id: "premium-support",
    name: "Premium Support",
    price: 199,
    priceUnit: "/month",
    description: "Get priority support and dedicated assistance.",
    features: [
      "24/7 priority support",
      "Dedicated Slack channel",
      "Monthly check-in calls",
      "Custom onboarding",
    ],
  },
]
