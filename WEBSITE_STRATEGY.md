# Brokle Public Website Strategy & Research Document

## Executive Summary

This document provides a comprehensive strategy for the Brokle public website based on competitive analysis of 5 leading AI observability platforms. It serves as a **research deliverable** with recommendations for messaging, structure, and positioning.

**Scope**: Strategy and research only (no code implementation)
**Comparison Pages Priority**: Langfuse, LangSmith, Arize Phoenix
**Social Proof**: Placeholder structure for future content

---

## Part 1: Competitor Analysis

### 1.1 Navigation Comparison

| Platform | Primary Nav Items | Key CTAs |
|----------|------------------|----------|
| **Langfuse** | Product, Resources, Pricing, Library | Sign Up, Get Demo |
| **HoneyHive** | Platform (4 features), Pricing, Careers, Blog, Docs | Start Free, Get Demo |
| **Braintrust** | Docs, Pricing, Blog | Sign Up, Request Demo |
| **Phoenix** | Docs, Release Notes, Learn, Integrations, Pricing | Get Started, Self Host |
| **Opik** | Products, Docs, Blog, Pricing | Get Started Free |

**Insight**: Most competitors use 4-6 top-level nav items with clear separation between Product features, Docs, and Pricing.

### 1.2 Messaging & Positioning

| Platform | Headline | Positioning |
|----------|----------|-------------|
| **Langfuse** | "Open Source LLM Engineering Platform" | OSS-first, OTel-based |
| **HoneyHive** | "Modern AI Observability and Evaluation" | Enterprise + startup focus |
| **Braintrust** | "Iterate, eval, ship" | Eval-first, team collaboration |
| **Phoenix** | "Open-source LLM tracing and evaluation" | Fully OSS, no feature gates |
| **Opik** | "Open-Source LLM Evaluation Platform" | Speed (7-14x faster claims) |

**Key Themes**:
1. "Open Source" prominently featured (4/5 competitors)
2. Three-pillar value: Traces -> Evals -> Prompts
3. OpenTelemetry mentioned for credibility
4. Developer-first language

### 1.3 Trust Signals Used

| Signal Type | Langfuse | HoneyHive | Braintrust | Phoenix | Opik |
|-------------|----------|-----------|------------|---------|------|
| GitHub Stars | 20K | - | - | 8K | Yes |
| Customer Logos | - | Yes (F500, NVIDIA) | Yes (Notion, Zapier) | Yes (IBM, Booking) | - |
| Testimonials | - | 3 quotes | 4 quotes | 6 quotes | - |
| SOC 2 Badge | Yes | Yes | Yes | - | - |
| Download Stats | - | - | - | 2.5M | - |

### 1.4 Homepage Section Patterns

**Common Order** (synthesized from all competitors):
1. Hero with tagline + dual CTAs
2. Stats/metrics bar (optional)
3. Trusted by logos
4. Core feature overview (3-4 pillars)
5. Detailed feature deep-dives
6. Integration showcase
7. Testimonials/social proof
8. Enterprise/security section
9. Final CTA
10. Footer with comprehensive links

### 1.5 Conversion Flow Analysis

**Best Practices Observed**:
- Dual CTA pattern: "Get Started Free" + "Book Demo"
- Docs accessible from every page
- GitHub link in header (OSS credibility)
- Pricing visible but not dominant
- Self-host option highlighted (Phoenix, Opik)

---

## Part 2: Brokle Website Goals

### 2.1 Primary Audience Segments

1. **Individual Developers** - Building LLM apps, need quick setup
2. **AI/ML Teams** - Need collaboration, evaluation workflows
3. **Enterprise** - Security, compliance, self-hosting requirements

### 2.2 Primary Actions (Priority Order)

1. **Sign Up Free** - Self-serve onboarding
2. **View Docs** - Technical validation
3. **Book Demo** - Enterprise leads
4. **Star on GitHub** - Community growth

### 2.3 Key Differentiators to Highlight

Based on Brokle's features vs competitors:
1. **Open Source & Self-Hostable** - Full feature parity
2. **OpenTelemetry Native** - No vendor lock-in
3. **Unified Platform** - Traces + Evals + Prompts + Analytics
4. **Developer-First** - Simple SDK, minimal config
5. **Cost Analytics** - Built-in cost tracking (unique feature)

### 2.4 Trust Signals to Add

- [ ] GitHub stars counter (currently hidden)
- [ ] Customer logos section
- [ ] Testimonials from real users
- [ ] SOC 2 / compliance badges (if applicable)
- [ ] Download/usage statistics

---

## Part 3: Recommended Sitemap

```
/                           # Homepage
├── /product                # Product Overview (redirect or landing)
│   ├── /tracing           # Tracing & Debugging
│   ├── /evaluation        # Evaluation Framework
│   ├── /prompt-management # Prompt Management
│   └── /analytics         # Cost & Analytics
├── /pricing               # Pricing Plans
├── /docs                  # Documentation (existing)
├── /integrations          # SDK & Framework Integrations
├── /use-cases             # NEW: Use Case Pages
│   ├── /llm-teams         # For AI/ML Teams
│   ├── /production-monitoring # Production Use
│   └── /rag-applications  # RAG-specific
├── /compare               # NEW: Comparison Pages (SEO)
│   ├── /vs-langfuse       # Brokle vs Langfuse
│   ├── /vs-langsmith      # Brokle vs LangSmith
│   └── /vs-phoenix        # Brokle vs Phoenix
├── /blog                  # Blog (existing)
├── /changelog             # Changelog (existing)
├── /about                 # About (existing)
├── /careers               # Careers (existing)
├── /contact               # Contact (existing)
├── /security              # Security & Compliance (existing)
├── /privacy               # Privacy Policy (existing)
└── /terms                 # Terms of Service (existing)
```

**New Pages to Create**:
1. `/use-cases/*` - 3 targeted use case pages
2. `/compare/*` - 3 comparison pages (SEO value)

---

## Part 4: Homepage Redesign Plan

### 4.1 Section Order (Recommended)

| # | Section | Purpose | Current State |
|---|---------|---------|---------------|
| 1 | Hero | Headline + CTAs | Exists |
| 2 | Stats Bar | Credibility metrics | Exists (StatsSection) |
| 3 | Logo Bar | Social proof | Exists (LogoBarSection) |
| 4 | Core Features | 4 pillars overview | Exists (FeatureTabsSection) |
| 5 | How It Works | Visual flow | NEW - Add sequence diagram |
| 6 | Integration Showcase | Framework logos | Exists (IntegrationsSection) |
| 7 | Use Cases | Target audiences | Exists (UseCasesSection) |
| 8 | Testimonials | Social proof | Exists (TestimonialsSection) |
| 9 | Open Source CTA | OSS positioning | NEW - Add GitHub emphasis |
| 10 | Final CTA | Conversion | Exists (FinalCTASection) |

### 4.2 Hero Section Improvements

**Current**: Generic AI observability messaging
**Recommended**:

```
Headline: "Open-Source AI Observability"
Subheadline: "Trace, evaluate, and optimize your LLM applications.
             Self-host or use our cloud. No vendor lock-in."

CTA Primary: "Get Started Free" -> app.brokle.ai/signup
CTA Secondary: "View Documentation" -> /docs
CTA Tertiary: "Star on GitHub" -> github.com/brokle-ai/brokle
```

### 4.3 New Section: "How It Works"

Add visual diagram showing:
```
Your App -> Brokle SDK -> Brokle Platform -> Dashboard
    |           |              |             |
  LLM Calls   Capture      Store/Analyze   Visualize
```

### 4.4 New Section: "Open Source First"

Highlight:
- Full source code on GitHub
- Self-hosting with Docker/Kubernetes
- No feature gates between OSS and cloud
- Community contributions welcome

---

## Part 5: Page-Level Plans

### 5.1 Product Overview (`/product`)

**Purpose**: Central hub linking to all features
**Sections**:
1. Hero with product positioning
2. 4-feature grid (Tracing, Evaluation, Prompts, Analytics)
3. Architecture diagram
4. Quick comparison table
5. CTA to docs/signup

### 5.2 Individual Feature Pages

Each feature page (`/tracing`, `/evaluation`, etc.) should follow:
1. Feature hero with specific value prop
2. Key capabilities (3-4 bullets)
3. Code snippet / SDK example
4. Screenshot of dashboard view
5. Integration callout
6. CTA to try feature

### 5.3 Use Case Pages (NEW)

Template for each use case page:
1. Problem statement for audience
2. How Brokle solves it
3. Feature highlights relevant to use case
4. Code example
5. Customer testimonial (if available)
6. CTA

### 5.4 Comparison Pages (NEW - SEO Priority)

Template for `/compare/vs-{competitor}`:
1. Side-by-side feature table
2. Deployment options comparison
3. Pricing comparison
4. Migration guide preview
5. "Why choose Brokle" summary
6. CTA

---

## Part 6: Design System Guidance

### 6.1 Current State (from exploration)

- **Font**: Geist Sans + Geist Mono
- **Colors**: Neutral design system (recently updated)
- **Components**: shadcn/ui + custom components
- **Theme**: Dark/light mode support

### 6.2 Recommendations

**Keep**:
- Geist font family (modern, developer-friendly)
- Dark/light mode toggle
- shadcn/ui component consistency

**Improve**:
- Add more code snippet styling (syntax highlighting)
- Enhance diagram/illustration quality
- Add product screenshot components
- Create "feature card" with hover animations

### 6.3 Visual Patterns to Adopt

From competitor analysis:
- Gradient hero backgrounds (Langfuse, Phoenix)
- Animated code previews
- Interactive feature tabs with auto-advance
- Metric callouts with icons
- Integration logo grids

---

## Part 7: SEO & Performance Strategy

### 7.1 URL Structure

- Keep clean, descriptive URLs
- Use hyphens, not underscores
- Maintain consistent depth (max 3 levels)

### 7.2 Metadata Templates

**Homepage**:
```
Title: Brokle | Open-Source AI Observability Platform
Description: Trace, evaluate, and optimize your LLM applications.
             Self-host or use cloud. OpenTelemetry-native.
```

**Feature Pages**:
```
Title: {Feature} | Brokle
Description: {Feature-specific description} - Open-source AI observability.
```

### 7.3 Keywords to Target

Primary:
- LLM observability
- AI observability platform
- LLM tracing
- LLM evaluation
- Prompt management

Long-tail (comparison pages):
- Langfuse alternative
- LangSmith alternative open source
- Self-hosted LLM monitoring

### 7.4 Performance Targets

- Lighthouse Performance: >90
- First Contentful Paint: <1.5s
- Cumulative Layout Shift: <0.1
- Core Web Vitals: All green

---

## Part 8: Implementation Roadmap

### Phase 1: Quick Wins

1. **Enable GitHub stars badge** in navbar
2. **Update hero messaging** with OSS focus
3. **Add "How It Works" section** to homepage
4. **Update meta titles/descriptions** for SEO

**Files to modify**:
- `src/components/layout/NavbarContent.tsx`
- `src/features/home/sections/HeroSection.tsx`
- `src/features/home/HomePage.tsx`
- `src/app/(home)/page.tsx`

### Phase 2: Content Enhancement

1. **Add testimonials** (gather from users/Discord)
2. **Create use case pages** (3 pages)
3. **Enhance product pages** with code examples
4. **Add integration logos** to homepage

**Files to create**:
- `src/app/(marketing)/use-cases/[slug]/page.tsx`
- `src/features/use-cases/`

### Phase 3: SEO & Comparison Pages

1. **Create comparison pages** (3 pages)
2. **Add structured data** (JSON-LD)
3. **Submit sitemap** to search engines
4. **Add FAQ schema** to relevant pages

**Files to create**:
- `src/app/(marketing)/compare/[competitor]/page.tsx`
- `src/features/compare/`

### Phase 4: Optimization

1. **A/B test CTAs**
2. **Add analytics tracking** for conversion events
3. **Performance audit** and fixes
4. **Gather feedback** and iterate

---

## Part 9: Files to Modify

### Critical Files

| File | Changes |
|------|---------|
| `src/components/layout/NavbarContent.tsx` | Enable GitHub stars, update nav structure |
| `src/features/home/sections/HeroSection.tsx` | Update messaging, CTAs |
| `src/features/home/HomePage.tsx` | Add new sections |
| `src/data/features.ts` | Update feature descriptions |
| `src/data/testimonials.ts` | Add real testimonials |

### New Files to Create

| File | Purpose |
|------|---------|
| `src/features/home/sections/HowItWorksSection.tsx` | New homepage section |
| `src/features/home/sections/OpenSourceSection.tsx` | OSS positioning section |
| `src/app/(marketing)/use-cases/page.tsx` | Use cases index |
| `src/app/(marketing)/use-cases/[slug]/page.tsx` | Dynamic use case pages |
| `src/app/(marketing)/compare/page.tsx` | Comparison index |
| `src/app/(marketing)/compare/[competitor]/page.tsx` | Dynamic comparison pages |
| `src/features/use-cases/` | Use case feature module |
| `src/features/compare/` | Comparison feature module |
| `src/data/comparisons.ts` | Comparison data |
| `src/data/use-cases-detailed.ts` | Detailed use case content |

---

## Part 10: Success Metrics

### Conversion Metrics
- Sign-up rate from homepage
- Docs engagement rate
- Demo request volume
- GitHub star growth

### Engagement Metrics
- Time on page
- Pages per session
- Bounce rate reduction
- Feature page views

### SEO Metrics
- Organic traffic growth
- Keyword rankings (target: top 10 for "LLM observability")
- Backlink acquisition

---

## Appendix: Competitor Quick Reference

### Langfuse
- **URL**: https://langfuse.com
- **Strength**: 20K GitHub stars, strong OSS community
- **Weakness**: Less enterprise polish

### HoneyHive
- **URL**: https://honeyhive.ai
- **Strength**: Enterprise features, session replays
- **Weakness**: Less OSS focus

### Braintrust
- **URL**: https://www.braintrust.dev
- **Strength**: Eval-first positioning, team collaboration
- **Weakness**: Less observability depth

### Arize Phoenix
- **URL**: https://phoenix.arize.com
- **Strength**: Fully OSS, 2.5M downloads
- **Weakness**: Part of larger Arize ecosystem

### Comet Opik
- **URL**: https://www.comet.com/site/products/opik/
- **Strength**: Speed claims (7-14x faster), prompt optimization
- **Weakness**: Newer, less established
