# SEO Improvements Progress Tracker

**Project**: brokle-site
**Started**: 2025-12-29
**Status**: Planning Complete

---

## Progress Overview

| Priority | Total | Done | In Progress | Pending |
|----------|-------|------|-------------|---------|
| Critical | 4 | 4 | 0 | 0 |
| High | 5 | 4 | 0 | 1 |
| Medium | 6 | 4 | 0 | 2 |
| Lower | 5 | 0 | 0 | 5 |
| **Total** | **20** | **12** | **0** | **8** |

---

## Critical Priority (Blocking Crawlability)

### 1. Create `robots.txt`
- **Status**: [x] Done (2025-12-29)
- **File**: `public/robots.txt`
- **Effort**: 5 min
- **Notes**: Allow all crawlers, reference sitemap

### 2. Create Dynamic Sitemap
- **Status**: [x] Done (2025-12-29)
- **File**: `src/app/sitemap.ts`
- **Effort**: 30 min
- **Notes**: Generate entries for all pages, docs, blog, comparison pages

### 3. Add `metadataBase` to Root Layout
- **Status**: [x] Done (2025-12-29)
- **File**: `src/app/layout.tsx`
- **Effort**: 5 min
- **Notes**: Required for absolute URLs in OG images

### 4. Add Canonical URLs
- **Status**: [x] Done (2025-12-29)
- **Files**: Root layout with alternates.canonical
- **Effort**: 30 min
- **Notes**: Added to root metadata

---

## High Priority (Significant Impact)

### 5. Implement FAQSchema on Key Pages
- **Status**: [x] Done (2025-12-29)
- **Files**:
  - `src/app/(marketing)/pricing/page.tsx`
  - `src/features/comparisons/ComparisonPage.tsx`
- **Effort**: 45 min
- **Notes**: Integrated on pricing + all 3 comparison pages

### 6. Add Blog Article Schema
- **Status**: [x] Done (2025-12-29)
- **Files**:
  - `src/components/seo/ArticleSchema.tsx` (created)
- **Effort**: 1 hr
- **Notes**: Component ready, waiting for actual blog posts to integrate

### 7. Add BreadcrumbList Schema
- **Status**: [x] Done (2025-12-29)
- **Files**:
  - `src/components/seo/BreadcrumbSchema.tsx` (created)
  - `src/app/docs/[[...slug]]/page.tsx`
- **Effort**: 1 hr
- **Notes**: Dynamic breadcrumbs for all doc pages

### 8. Enhance Documentation SEO
- **Status**: [ ] Pending
- **Files**: All MDX files in `content/docs/`
- **Effort**: 2 hr
- **Notes**: Add descriptions to all doc frontmatter

### 9. Add Product Schema to Product Pages
- **Status**: [x] Done (2025-12-29)
- **Files**:
  - `src/app/(product)/tracing/page.tsx`
  - `src/app/(product)/evaluation/page.tsx`
  - `src/app/(product)/prompt-management/page.tsx`
- **Effort**: 30 min
- **Notes**: Created ProductSchema component, integrated on all 3 product pages

---

## Medium Priority (Optimization)

### 10. Twitter Card Enhancements
- **Status**: [x] Done (2025-12-29)
- **File**: `src/app/layout.tsx`
- **Effort**: 5 min
- **Notes**: Added site and creator tags (@brokleai)

### 11. Custom 404 Page SEO
- **Status**: [x] Done (2025-12-29)
- **File**: `src/app/not-found.tsx`
- **Effort**: 15 min
- **Notes**: Added title, description, robots noindex/nofollow

### 12. Internal Linking Audit
- **Status**: [ ] Pending
- **Files**: Various content pages
- **Effort**: 2 hr
- **Notes**: Add contextual links, related content sections

### 13. Performance Optimization (Core Web Vitals)
- **Status**: [x] Done (2025-12-29)
- **Files**: Layout files, head configuration
- **Effort**: 1 hr
- **Notes**: Added dns-prefetch and preconnect for Google Analytics and GitHub

### 14. Image SEO Enhancements
- **Status**: [x] Done (2025-12-29)
- **Files**: All image components
- **Effort**: 1 hr
- **Notes**: Added sizes attributes to fill images for responsive optimization

### 15. URL Consistency Audit
- **Status**: [ ] Pending
- **File**: `next.config.ts`
- **Effort**: 30 min
- **Notes**: Trailing slash handling, lowercase enforcement

---

## Lower Priority (Nice-to-Have)

### 16. LocalBusiness Schema
- **Status**: [ ] Pending
- **Notes**: Only if physical location exists

### 17. Video Schema
- **Status**: [ ] Pending
- **Notes**: For product demos if they exist

### 18. Review/Testimonial Schema
- **Status**: [ ] Pending
- **Notes**: For customer testimonials

### 19. Hreflang Infrastructure
- **Status**: [ ] Pending
- **Notes**: Prepare for future internationalization

### 20. RSS Feed for Blog
- **Status**: [ ] Pending
- **File**: `src/app/blog/feed.xml/route.ts`
- **Notes**: Content syndication and backlinks

---

## Implementation Order (Recommended)

### Sprint 1: Foundation (Quick Wins) - ~1.25 hrs ✅ COMPLETE
1. [x] #3 - Add metadataBase (5 min)
2. [x] #1 - Create robots.txt (5 min)
3. [x] #10 - Twitter card enhancements (5 min)
4. [x] #2 - Create sitemap.ts (30 min)
5. [x] #4 - Add canonical URLs (30 min)

### Sprint 2: Structured Data - ~3.25 hrs ✅ COMPLETE
6. [x] #5 - FAQ Schema integration (45 min)
7. [x] #9 - Product Schema on product pages (30 min)
8. [x] #7 - BreadcrumbList Schema (1 hr)
9. [x] #6 - Article Schema for blog (1 hr)

### Sprint 3: Content & Performance - ~4.25 hrs (3 of 4 COMPLETE)
10. [ ] #8 - Documentation descriptions (2 hr)
11. [x] #11 - Custom 404 SEO (15 min)
12. [x] #13 - Core Web Vitals optimization (1 hr)
13. [x] #14 - Image SEO (1 hr)

### Sprint 4: Polish - ~3.5 hrs
14. [ ] #12 - Internal linking audit (2 hr)
15. [ ] #15 - URL consistency (30 min)
16. [ ] #20 - RSS feed (1 hr)

### Backlog (As Needed)
- [ ] #16 - LocalBusiness Schema
- [ ] #17 - Video Schema
- [ ] #18 - Review Schema
- [ ] #19 - Hreflang tags

---

## Files to Create

| File | Purpose |
|------|---------|
| `public/robots.txt` | Crawler directives |
| `src/app/sitemap.ts` | Dynamic sitemap generation |
| `src/components/seo/ArticleSchema.tsx` | Blog article structured data |
| `src/components/seo/BreadcrumbSchema.tsx` | Breadcrumb structured data |
| `src/app/blog/feed.xml/route.ts` | RSS feed |

## Files to Modify

| File | Changes |
|------|---------|
| `src/app/layout.tsx` | metadataBase, Twitter tags |
| `src/app/not-found.tsx` | SEO metadata |
| `src/app/(marketing)/pricing/page.tsx` | FAQ Schema |
| `src/app/(product)/compare/*/page.tsx` | FAQ Schema |
| `src/app/(product)/tracing/page.tsx` | Product Schema |
| `src/app/(product)/evaluation/page.tsx` | Product Schema |
| `src/app/(product)/prompt-management/page.tsx` | Product Schema |
| `next.config.ts` | URL handling |
| `content/docs/**/*.mdx` | Description frontmatter |

---

## Completion Log

| Date | Task # | Description | Notes |
|------|--------|-------------|-------|
| 2025-12-29 | #3 | Add metadataBase | Added to layout.tsx with https://brokle.com |
| 2025-12-29 | #1 | Create robots.txt | Created public/robots.txt with sitemap reference |
| 2025-12-29 | #10 | Twitter card enhancements | Added site/creator tags to layout.tsx |
| 2025-12-29 | #2 | Create sitemap.ts | Dynamic sitemap with all pages + docs |
| 2025-12-29 | #4 | Add canonical URLs | Added alternates.canonical to root metadata |
| 2025-12-29 | - | Domain fix | Changed all brokle.ai → brokle.com |
| 2025-12-29 | #5 | FAQ Schema | Integrated on pricing + comparison pages |
| 2025-12-29 | #9 | Product Schema | Created component, added to 3 product pages |
| 2025-12-29 | #7 | BreadcrumbList Schema | Dynamic breadcrumbs for all docs pages |
| 2025-12-29 | #6 | Article Schema | Component created, ready for blog posts |
| 2025-12-29 | #11 | Custom 404 SEO | Added metadata with noindex directive |
| 2025-12-29 | #13 | Core Web Vitals | Added dns-prefetch and preconnect to layout |
| 2025-12-29 | #14 | Image SEO | Added sizes attributes to fill images |

---

## Metrics to Track (Post-Implementation)

- [ ] Google Search Console indexing status
- [ ] Rich snippet appearance in search results
- [ ] Core Web Vitals scores (Lighthouse)
- [ ] Organic traffic trends (Google Analytics)
- [ ] Keyword rankings for target terms

---

## Current SEO Audit Summary

### What's Working Well
- Root metadata with title template, description, keywords
- Open Graph configuration (title, description, images)
- Twitter cards with summary_large_image
- Favicon/icon setup with multiple sizes
- Web manifest for PWA
- OrganizationSchema and SoftwareApplicationSchema
- Page-level metadata on all major pages
- Next.js Image optimization
- Semantic HTML structure

### What's Missing
- robots.txt (critical)
- sitemap.xml (critical)
- metadataBase for absolute URLs
- Canonical URL declarations
- FAQ Schema integration (component exists but unused)
- Article metadata for blog posts
- Breadcrumb structured data
- Twitter creator/site tags
- Custom 404 SEO
