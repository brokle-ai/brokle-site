# Brokle-Site SEO Improvement Plan

> **Audit Date**: December 29, 2025
> **Current SEO Maturity**: 8.5/10
> **Target**: Increase organic traffic, AI search visibility, and search rankings

---

## Executive Summary

The brokle-site has solid SEO fundamentals including comprehensive metadata, structured data schemas, dynamic sitemap, proper robots.txt, image optimization, and clean URL structure. However, significant opportunities exist to improve visibility in both traditional search engines and AI-powered answer engines (ChatGPT, Perplexity, Google AI Overviews).

### Key Opportunities

1. **Answer Engine Optimization (AEO)** - Optimize for AI search platforms
2. **FAQ Schema Expansion** - Only pricing page has FAQ schema currently
3. **Blog Content SEO** - Individual post metadata and pillar content
4. **Internal Linking** - Strengthen topical authority through content clusters
5. **Programmatic SEO** - Integration, use-case, and industry landing pages

---

## Current Implementation Status

### What's Working Well

| Component | Status | Notes |
|-----------|--------|-------|
| Global Metadata | Excellent | Title template, description, keywords, OG, Twitter cards |
| Page-Level Metadata | Good | 18+ pages with unique metadata |
| Structured Data | Good | 6 schema types (Organization, Software, Product, Article, Breadcrumb, FAQ) |
| Sitemap | Complete | Dynamic generation with priorities and changefreq |
| Robots.txt | Configured | Allows crawling, blocks /api/, references sitemap |
| Canonical URLs | Implemented | Root layout + trailingSlash: false |
| Image Optimization | Optimized | next/Image, alt text, priority flags, responsive sizes |
| Core Web Vitals | Good | DNS prefetch, preconnect, system fonts |
| RSS Feed | Implemented | Blog feed with proper XML structure |
| 404 Page | SEO-friendly | noindex, nofollow, user-friendly |

### What Needs Improvement

| Component | Status | Priority |
|-----------|--------|----------|
| AEO Optimization | Missing | HIGH |
| FAQ Schema Coverage | Limited | HIGH |
| Blog Post Metadata | Incomplete | HIGH |
| HowTo Schema | Missing | HIGH |
| Internal Linking | Basic | MEDIUM |
| Programmatic Pages | Missing | MEDIUM |
| Video Schema | Missing | MEDIUM |
| Dynamic OG Images | Limited | MEDIUM |
| AggregateRating | Missing | LOW |

---

## HIGH PRIORITY Improvements

### 1. Answer Engine Optimization (AEO)

**Problem**: The site isn't optimized for AI search engines (ChatGPT, Perplexity, Claude, Google AI Overviews).

**Why It Matters**:
- AI-referred sessions jumped 527% in 2025
- Pages with FAQPage markup are 3.2x more likely to appear in Google AI Overviews
- LLM-driven traffic is up 800% year-over-year

**Implementation**:

#### A. Add 50-Word Summary Paragraphs
Place immediately under each H1 on key pages:

```markdown
# LLM Tracing

Brokle's LLM tracing provides complete visibility into your AI application's
behavior in 2025. Track every LLM call, measure latency, monitor token usage,
and debug issues with distributed tracing built on OpenTelemetry standards.
Self-host for full data control or use our cloud offering.
```

**Pages to Update**:
- `/` (homepage)
- `/tracing`
- `/evaluation`
- `/prompt-management`
- `/pricing`
- `/docs` (index)
- All comparison pages

#### B. Question-Based Headings
Structure content with explicit questions:

```markdown
## What is LLM Observability?

LLM observability is the practice of monitoring, tracing, and analyzing
AI application behavior...

## How Does Brokle Track LLM Costs?

Brokle automatically calculates costs by tracking token usage across
providers...
```

#### C. Current Year References
Add temporal signals throughout content:

- Meta descriptions: "The leading LLM observability platform in 2025"
- Content: "In 2025, AI teams need..."
- Headings: "LLM Tracing Best Practices for 2025"

---

### 2. FAQ Schema Expansion

**Current State**: Only `/pricing` page has FAQ schema.

**Target**: Add FAQPage schema to all major pages.

#### Implementation by Page

**Suggested FAQ Questions by Page**:

| Page | FAQ Topics |
|------|------------|
| `/tracing` | What is LLM tracing, How distributed tracing works, OpenTelemetry integration, Self-hosting benefits |
| `/evaluation` | What is LLM evaluation, Quality scoring methods, Human vs automated evaluation, Evaluation metrics |
| `/prompt-management` | What is prompt management, Version control for prompts, A/B testing prompts, Prompt optimization |
| `/docs` (index) | What is Brokle, Is Brokle open source, How to get started, Pricing model |
| `/compare/vs-langfuse` | Langfuse vs Brokle differences, Migration from Langfuse, Feature comparison |
| `/compare/vs-langsmith` | LangSmith vs Brokle differences, LangChain integration, Self-hosting comparison |

#### Schema Structure

Create a reusable FAQSchema component that generates JSON-LD with:
- `@type: "FAQPage"`
- `mainEntity` array of Question objects
- Each Question has `name` (the question) and `acceptedAnswer` with `text`

Reference existing implementation in `src/components/seo/schemas.tsx` and extend the pattern.

---

### 3. Blog Content & Individual Post SEO

**Current State**: Blog posts are placeholder content without individual metadata.

#### A. Per-Post Metadata Implementation

Each blog post should export metadata with:
- `title` - Post title
- `description` - Post excerpt
- `authors` - Author information
- `openGraph.type: 'article'`
- `openGraph.publishedTime` - ISO date
- `openGraph.modifiedTime` - ISO date
- `openGraph.authors` - Author names
- `openGraph.tags` - Post categories/tags

#### B. Enhanced ArticleSchema

Each blog post should include ArticleSchema with:
- `headline`, `description`, `image`
- `datePublished`, `dateModified`
- `author` (Person with name, url, jobTitle)
- `publisher` (Organization with name, logo)
- `wordCount`, `articleSection`, `keywords`

#### C. Pillar Content Strategy

Create comprehensive guides targeting high-value keywords:

| Pillar Topic | Target Keywords | Word Count |
|--------------|-----------------|------------|
| Complete Guide to LLM Observability 2025 | llm observability, ai observability | 3000+ |
| OpenTelemetry for AI Applications | opentelemetry llm, otel ai | 2500+ |
| LLM Cost Optimization Strategies | llm cost, token optimization | 2000+ |
| AI Evaluation Best Practices | llm evaluation, ai testing | 2500+ |
| Self-Hosting AI Infrastructure | self-host llm, on-premise ai | 2000+ |

---

### 4. HowTo Schema for Documentation

**Current State**: Docs have breadcrumbs but no instructional schema.

#### Implementation

Create a HowToSchema component with:
- `@type: "HowTo"`
- `name`, `description`, `totalTime` (ISO 8601 duration)
- `tool` array (optional - tools needed)
- `step` array with `HowToStep` items (position, name, text, image)

**Pages to Add HowTo Schema**:

| Page | HowTo Title |
|------|-------------|
| `/docs/quickstart` | How to Set Up Brokle in 5 Minutes |
| `/docs/first-trace` | How to Create Your First LLM Trace |
| `/docs/integrations/openai` | How to Integrate Brokle with OpenAI |
| `/docs/integrations/langchain` | How to Add Brokle to LangChain |
| `/docs/self-hosting` | How to Self-Host Brokle |
| `/docs/cookbook/*` | Various how-to guides |

---

## MEDIUM PRIORITY Improvements

### 5. Internal Linking Strategy

**Current State**: Basic navigation linking but limited contextual links within content.

#### A. Related Content Sections

Add a RelatedContent component to the bottom of each doc page showing:
- 3-5 related documentation pages
- Link text + short description
- Based on category/tags

#### B. Topical Clusters

Create hub pages that link to related content:

```
/tracing (Hub)
├── /docs/tracing/concepts
├── /docs/tracing/quickstart
├── /docs/tracing/opentelemetry
├── /blog/distributed-tracing-guide
├── /compare/vs-langfuse (tracing comparison)
└── /docs/cookbook/trace-debugging
```

#### C. Contextual Links in Content

Add inline links within body content connecting related concepts and pages.

---

### 6. Programmatic SEO Pages

#### A. Integration Landing Pages

Create dedicated pages for each integration:

| URL | Title | Target Keyword |
|-----|-------|----------------|
| `/integrations/openai` | Brokle for OpenAI | openai monitoring, gpt tracing |
| `/integrations/anthropic` | Brokle for Claude/Anthropic | claude monitoring, anthropic tracing |
| `/integrations/langchain` | Brokle for LangChain | langchain observability |
| `/integrations/llamaindex` | Brokle for LlamaIndex | llamaindex monitoring |
| `/integrations/vercel-ai` | Brokle for Vercel AI SDK | vercel ai monitoring |

**Page Template**:
- Hero: "Monitor [Provider] with Brokle"
- Key benefits (3-4 bullets)
- Code example
- Features grid
- Testimonial/case study
- CTA to docs

#### B. Use Case Pages

| URL | Title | Target Audience |
|-----|-------|-----------------|
| `/use-cases/rag-applications` | Observability for RAG Applications | RAG developers |
| `/use-cases/chatbots` | Monitor AI Chatbots | Chatbot builders |
| `/use-cases/ai-agents` | Trace AI Agent Workflows | Agent developers |
| `/use-cases/content-generation` | Track Content Generation AI | Marketing teams |

#### C. Industry Pages

| URL | Title |
|-----|-------|
| `/industries/healthcare-ai` | AI Observability for Healthcare |
| `/industries/fintech-ai` | LLM Monitoring for Financial Services |
| `/industries/ecommerce-ai` | AI Observability for E-commerce |

---

### 7. Additional Comparison Pages

**Current**: vs-langfuse, vs-langsmith, vs-phoenix

**Add**:

| URL | Competitor | Keywords |
|-----|------------|----------|
| `/compare/vs-helicone` | Helicone | helicone alternative |
| `/compare/vs-arize` | Arize AI | arize alternative |
| `/compare/vs-datadog-llm` | Datadog LLM | datadog llm monitoring alternative |
| `/compare/vs-weights-biases` | Weights & Biases | wandb llm alternative |
| `/compare/vs-honeyhive` | HoneyHive | honeyhive alternative |

**Listicle Page**:
- `/compare/best-llm-observability-tools-2025`
- Target: "best llm observability tools", "llm monitoring tools comparison"

---

### 8. Video Schema & Content

**Implementation**:

1. Create product demo videos:
   - Platform overview (2-3 min)
   - Tracing walkthrough (3-5 min)
   - Evaluation setup (3-5 min)
   - Quick start tutorial (5-7 min)

2. Add VideoObject schema with:
   - `name`, `description`, `thumbnailUrl`
   - `uploadDate`, `duration` (ISO 8601)
   - `contentUrl`, `embedUrl`
   - `publisher` (Organization)

3. Create video sitemap

---

### 9. Dynamic OG Images

**Current**: Static OG images for most pages.

**Implementation**:

Use `@vercel/og` or `next/og` ImageResponse to generate dynamic OG images for:
- Blog posts (title + author + date)
- Comparison pages (logos side-by-side)
- Documentation pages (category + title)

---

### 10. Core Web Vitals Optimization

**Current**: Good foundations.

**Improvements**:
- Add explicit `width` and `height` to all images (prevent CLS)
- Use `fetchPriority="high"` for hero images
- Add `<link rel="preload">` for critical images
- Enable `optimizeCss: true` in next.config experimental
- Add `<link rel="modulepreload">` for critical JS chunks

---

## LOW PRIORITY Improvements

### 11. AggregateRating Schema

If you have reviews on G2, Capterra, or similar, add AggregateRating to SoftwareApplication schema with:
- `ratingValue`, `reviewCount`, `bestRating`

---

### 12. SpeakableSpecification Schema

Optimize for voice search by adding `speakable` property to WebPage schema:
- `cssSelector` targeting FAQ answers, summary paragraphs, and H1s

---

### 13. Content Freshness Signals

- Add visible "Last updated: January 2025" dates to pages
- Include `dateModified` in metadata
- Update meta descriptions with current year quarterly

---

## Keyword Targeting Strategy

### Primary Keywords

| Keyword | Monthly Volume (Est.) | Difficulty | Priority |
|---------|----------------------|------------|----------|
| llm observability | 2,400 | Medium | HIGH |
| ai observability | 1,900 | Medium | HIGH |
| llm monitoring | 1,600 | Medium | HIGH |
| llm tracing | 880 | Low | HIGH |
| langfuse alternative | 720 | Low | HIGH |
| langsmith alternative | 480 | Low | HIGH |

### Long-Tail Keywords

| Keyword | Intent | Content Type |
|---------|--------|--------------|
| how to trace llm calls | Informational | Tutorial |
| opentelemetry for llm | Informational | Guide |
| llm cost tracking | Commercial | Feature page |
| self-hosted llm monitoring | Commercial | Feature page |
| debug ai applications | Informational | Blog post |
| llm evaluation metrics | Informational | Guide |

### AI Search Optimization

Target prompts users ask AI assistants:

- "What's the best tool for monitoring LLM applications?"
- "How do I trace API calls to OpenAI?"
- "What is LLM observability?"
- "Compare Langfuse and Langsmith"
- "How to reduce LLM costs?"

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

- [ ] Add FAQ sections + FAQPage schema to `/tracing`, `/evaluation`, `/prompt-management`
- [ ] Add 50-word AEO summary paragraphs to all product pages
- [ ] Implement blog post individual metadata structure
- [ ] Add HowTo schema to `/docs/quickstart` and `/docs/first-trace`
- [ ] Create FAQ schema component for reuse

### Phase 2: Content (Week 3-4)

- [ ] Write first pillar blog post: "Complete Guide to LLM Observability 2025"
- [ ] Add comparison pages: vs-helicone, vs-arize
- [ ] Implement "Related Content" sections in documentation
- [ ] Add contextual internal links to existing content
- [ ] Update all meta descriptions with 2025 references

### Phase 3: Technical (Week 5-6)

- [ ] Implement dynamic OG image generation
- [ ] Add VideoObject schema (after creating demo video)
- [ ] Optimize Core Web Vitals (explicit dimensions, preloads)
- [ ] Add dateModified to all page metadata
- [ ] Create video sitemap

### Phase 4: Programmatic (Week 7-8)

- [ ] Create `/integrations/openai` landing page
- [ ] Create `/integrations/anthropic` landing page
- [ ] Create `/integrations/langchain` landing page
- [ ] Create `/use-cases/rag-applications` page
- [ ] Create "Best LLM Observability Tools 2025" listicle

### Phase 5: Polish (Week 9-10)

- [ ] Add AggregateRating schema (if reviews available)
- [ ] Implement SpeakableSpecification
- [ ] Conduct schema validation with Google Rich Results Test
- [ ] Submit updated sitemap to Google Search Console
- [ ] Set up Core Web Vitals monitoring

---

## Measurement & KPIs

### Primary Metrics

| Metric | Current | 3-Month Target | 6-Month Target |
|--------|---------|----------------|----------------|
| Organic Sessions | Baseline | +30% | +100% |
| Organic Impressions | Baseline | +50% | +150% |
| Average Position | Baseline | -2 positions | -5 positions |
| Click-Through Rate | Baseline | +20% | +40% |

### Secondary Metrics

- Rich result appearances (FAQ, HowTo snippets)
- AI Overview inclusions (manual tracking)
- Backlinks acquired
- Page speed scores (Core Web Vitals)

### Tools for Tracking

- Google Search Console
- Google Analytics 4
- Ahrefs / Semrush (keyword tracking)
- PageSpeed Insights (Core Web Vitals)
- Rich Results Test (schema validation)

---

## Resources & References

### Next.js SEO

- [Next.js 15 SEO Checklist for Developers](https://dev.to/vrushikvisavadiya/nextjs-15-seo-checklist-for-developers-in-2025-with-code-examples-57i1)
- [The Complete Guide to SEO Optimization in Next.js 15](https://medium.com/@thomasaugot/the-complete-guide-to-seo-optimization-in-next-js-15-1bdb118cffd7)
- [Next.js Official SEO Documentation](https://nextjs.org/learn/seo)

### SaaS SEO Strategy

- [B2B SaaS SEO Playbook](https://www.poweredbysearch.com/blog/b2b-saas-seo-playbook/)
- [SaaS SEO Guide: From Basics to Driving Revenue](https://skale.so/saas-seo/guide/)
- [The Definitive SaaS SEO Guide for 2025](https://growfusely.com/blog/saas-seo/)

### Answer Engine Optimization

- [Answer Engine Optimization: The Comprehensive Guide](https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide-for-2025/)
- [FAQ Schema for AI Search](https://www.frase.io/blog/faq-schema-ai-search-geo-aeo)
- [Structured Data for AEO & GEO in 2025](https://seotuners.com/blog/seo/schema-for-aeo-geo-faq-how-to-entities-that-win/)

### LLM & AI Search

- [LLM SEO Strategies 2025](https://seoprofy.com/blog/llm-seo/)
- [LLM Tracking Tools](https://nightwatch.io/blog/llm-tracking-tools/)
- [How Vercel's Adapting SEO for LLMs](https://vercel.com/blog/how-were-adapting-seo-for-llms-and-ai-search)

---

## Appendix: Schema Component Guidelines

### FAQSchema Component

Create in `src/components/seo/FAQSchema.tsx`:

**Props**:
- `faqs: Array<{ question: string; answer: string }>`

**Output**: JSON-LD script tag with FAQPage schema

### HowToSchema Component

Create in `src/components/seo/HowToSchema.tsx`:

**Props**:
- `name: string`
- `description: string`
- `totalTime?: string` (ISO 8601 duration, e.g., "PT15M")
- `steps: Array<{ name: string; text: string; image?: string }>`
- `tools?: string[]`

**Output**: JSON-LD script tag with HowTo schema

### VideoSchema Component

Create in `src/components/seo/VideoSchema.tsx`:

**Props**:
- `name: string`
- `description: string`
- `thumbnailUrl: string`
- `uploadDate: string`
- `duration: string` (ISO 8601 duration)
- `contentUrl?: string`
- `embedUrl?: string`

**Output**: JSON-LD script tag with VideoObject schema

---

*Document generated: December 29, 2025*
