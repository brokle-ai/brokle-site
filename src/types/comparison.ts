export interface ComparisonFeature {
  category: string
  feature: string
  brokle: boolean | string
  competitor: boolean | string
  tooltip?: string
}

export interface ComparisonFAQ {
  question: string
  answer: string
}

export interface ComparisonPageData {
  slug: string
  competitorName: string
  competitorLogo?: string
  title: string
  subtitle: string
  metaDescription: string
  features: ComparisonFeature[]
  advantages: string[]
  faqs: ComparisonFAQ[]
}
