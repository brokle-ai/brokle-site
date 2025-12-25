export interface PricingTier {
  id: string
  name: string
  price: {
    monthly: number | null
    annual: number | null
  }
  priceDisplay: {
    monthly: string
    annual: string
  }
  description: string
  highlighted: boolean
  badge?: string
  features: string[]
  cta: {
    text: string
    href: string
    variant: "default" | "outline"
  }
}

export interface AddOn {
  id: string
  name: string
  price: number
  priceUnit: string
  description: string
  features: string[]
}

export type BillingPeriod = "monthly" | "annual"
