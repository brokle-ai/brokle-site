# PageSpeed Insights Improvement Plan

> **Audit Date**: December 29, 2025
> **URL Analyzed**: https://brokle.com
> **Device**: Desktop
> **Lighthouse Version**: 13.0.1

---

## Executive Summary

The brokle.com homepage has solid Core Web Vitals for LCP and FCP, but significant issues with CLS (Cumulative Layout Shift) and TBT (Total Blocking Time) are dragging down the overall Performance score. Security headers are also missing, impacting the Best Practices score.

### Current Scores

| Metric | Score | Status |
|--------|-------|--------|
| **Performance** | 59 | Needs Improvement |
| **Accessibility** | 91 | Good |
| **Best Practices** | 73 | Needs Improvement |
| **SEO** | 92 | Good |

### Core Web Vitals

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| First Contentful Paint (FCP) | 0.3s | < 1.8s | Good |
| Largest Contentful Paint (LCP) | 0.8s | < 2.5s | Good |
| **Total Blocking Time (TBT)** | 500ms | < 200ms | Needs Improvement |
| **Cumulative Layout Shift (CLS)** | 0.341 | < 0.1 | Poor |
| Speed Index (SI) | 1.6s | < 3.4s | Good |

---

## Detailed Issue Analysis

### Performance Issues

#### 1. Cumulative Layout Shift (CLS): 0.341

**Problem**: Layout elements shift after initial render, causing poor user experience.

**Root Causes Identified**:

| Component | File | Issue |
|-----------|------|-------|
| FeatureTabs | `src/features/home/feature-tabs/TabContent.tsx` | Dynamic content without reserved height |
| Images | `TabContent.tsx` | `fill` prop without container dimensions |
| Navbar | `src/components/layout/NavbarContent.tsx` | Height changes on scroll state |
| Fonts | `src/app/layout.tsx` | Font loading may cause text reflow |

**Evidence from Lighthouse**:
- "Layout shift culprits" flagged as insight
- Multiple elements contributing to shift

#### 2. Total Blocking Time (TBT): 500ms

**Problem**: Main thread blocked by JavaScript execution, delaying interactivity.

**Root Causes Identified**:

| Issue | Details |
|-------|---------|
| Main-thread work | 6.5s total execution time |
| Long tasks | 6 long tasks found (>50ms each) |
| Unused JavaScript | 46 KiB could be deferred |
| Legacy JavaScript | 14 KiB of polyfills |

**Components Contributing**:
- `FeatureTabs` - Auto-advance timer with 50ms interval
- `Interactive3D` - Mouse event handlers and animations
- `ScrollContext` - Scroll event listeners
- Third-party scripts (Google Analytics)

#### 3. Render Blocking Resources

**Estimated Savings**: 150ms

**Resources Identified**:
- CSS files loaded synchronously
- Potential font loading delays

#### 4. DOM Size

**Issue**: "Optimise DOM size" flagged as insight

**Affected Components**:
- `IsometricIllustration.tsx` - Complex SVG with many elements
- `FeatureTabs` - Multiple tab content rendered (hidden but present)

---

### Accessibility Issues (Score: 91)

#### 1. Color Contrast

**Issue**: "Background and foreground colours do not have a sufficient contrast ratio"

**Likely Locations**:
- `text-muted-foreground` class usage
- Subtle UI elements in hero section
- Tab inactive states

#### 2. Links Without Discernible Names

**Issue**: Icon-only links missing accessible names

**Locations to Check**:
- Social media links in Footer (has `aria-label` - verify)
- Any other icon-only interactive elements

#### 3. Heading Hierarchy

**Issue**: "Heading elements are not in a sequentially-descending order"

**Action**: Audit all pages for proper H1 > H2 > H3 sequence

---

### Best Practices Issues (Score: 73)

#### 1. Security Headers Missing

| Header | Status | Risk |
|--------|--------|------|
| HTTPS | 1 insecure request | Medium |
| Content-Security-Policy (CSP) | Missing | High |
| Strict-Transport-Security (HSTS) | Weak/Missing | Medium |
| Cross-Origin-Opener-Policy (COOP) | Missing | Low |
| X-Frame-Options | Missing | Medium |
| Trusted Types | Missing | Low |

#### 2. Console Errors

**Issue**: "Browser errors were logged to the console"

**Action**: Check browser console for JavaScript errors

#### 3. DevTools Issues

**Issue**: "Issues were logged in the Issues panel in Chrome DevTools"

**Action**: Open DevTools Issues panel to identify specific problems

#### 4. Missing Source Maps

**Issue**: "Missing source maps for large first-party JavaScript"

**Impact**: Debugging difficulty, flagged as best practice issue

---

### SEO Issues (Score: 92)

#### 1. Non-Descriptive Link Text

**Issue**: 3 links found without descriptive text

**Common Culprits**:
- "Learn more" links
- "Click here" patterns
- Icon-only links

---

## Prioritized Improvement Plan

### P0: Critical (Performance Score Impact)

#### Fix 1: Reduce CLS to < 0.1

**A. Add explicit dimensions to FeatureTabs container**

```tsx
// src/features/home/feature-tabs/TabContent.tsx
// Line ~58: Add min-height to prevent layout shift

<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-xl overflow-hidden border shadow-sm min-h-[400px] lg:min-h-[500px]">
```

**B. Add skeleton/placeholder for tab content**

```tsx
// Create a skeleton component for loading states
function TabSkeleton() {
  return (
    <div className="min-h-[400px] lg:min-h-[500px] animate-pulse bg-muted/30 rounded-xl" />
  )
}
```

**C. Reserve navbar height**

```tsx
// src/components/layout/NavbarContent.tsx
// Ensure fixed height regardless of scroll state

<header className={cn(
  "fixed top-0 left-0 right-0 z-50 h-16", // Fixed 64px height
  isScrolled ? "bg-background/95 backdrop-blur border-b" : "bg-transparent"
)}>
```

**D. Add blur placeholders for images**

```tsx
// src/features/home/feature-tabs/TabContent.tsx
<Image
  src={feature.image.src}
  alt={feature.image.alt}
  fill
  className="object-cover object-left-top"
  sizes="(min-width: 1024px) 50vw, 100vw"
  priority={isActive}
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4="
/>
```

#### Fix 2: Reduce TBT to < 200ms

**A. Dynamic import non-critical sections**

```tsx
// src/features/home/HomePage.tsx
import dynamic from 'next/dynamic'

// Critical - load immediately
import { HeroSection } from "./sections/HeroSection"
import { FeatureTabsSection } from "./sections/FeatureTabsSection"

// Non-critical - lazy load
const IntegrationsSection = dynamic(
  () => import('./sections/IntegrationsSection').then(mod => ({ default: mod.IntegrationsSection })),
  { ssr: true }
)

const OpenSourceSection = dynamic(
  () => import('./sections/OpenSourceSection').then(mod => ({ default: mod.OpenSourceSection })),
  { ssr: true }
)

const TestimonialsSection = dynamic(
  () => import('./sections/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })),
  { ssr: true }
)

const FinalCTASection = dynamic(
  () => import('./sections/FinalCTASection').then(mod => ({ default: mod.FinalCTASection })),
  { ssr: true }
)
```

**B. Defer FeatureTabs auto-advance initialization**

```tsx
// src/features/home/feature-tabs/FeatureTabs.tsx
// Use requestIdleCallback for non-critical initialization

useEffect(() => {
  if (isPaused || !isInViewport) {
    // ... existing cleanup
    return
  }

  // Defer timer setup to idle time
  const setupTimer = () => {
    if (lastTickRef.current === 0) {
      lastTickRef.current = Date.now()
    }
    // ... existing timer logic
  }

  if (typeof requestIdleCallback !== 'undefined') {
    const idleId = requestIdleCallback(setupTimer)
    return () => cancelIdleCallback(idleId)
  } else {
    setupTimer()
  }
}, [isPaused, isInViewport, autoAdvanceInterval, advanceToNextTab])
```

**C. Optimize ScrollContext**

```tsx
// src/contexts/ScrollContext.tsx
// Add throttling to scroll handler

import { useCallback, useEffect, useState, useRef } from 'react'

function throttle(fn: Function, ms: number) {
  let lastCall = 0
  return (...args: any[]) => {
    const now = Date.now()
    if (now - lastCall >= ms) {
      lastCall = now
      fn(...args)
    }
  }
}

// In provider:
const handleScroll = useCallback(
  throttle(() => {
    setIsScrolled(window.scrollY > 10)
  }, 100),
  []
)
```

---

### P1: Important (Best Practices & Accessibility)

#### Fix 3: Add Security Headers

```js
// next.config.mjs
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://api.github.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default withMDX(config);
```

#### Fix 4: Accessibility Improvements

**A. Fix color contrast**

```css
/* src/app/global.css */
/* Increase muted-foreground contrast */
:root {
  --muted-foreground: 240 3.8% 40%; /* Darker than default */
}

.dark {
  --muted-foreground: 240 5% 70%; /* Lighter for dark mode */
}
```

**B. Add descriptive link text**

```tsx
// Replace generic "Learn more" with specific text
// Before:
<Link href="/tracing">Learn more</Link>

// After:
<Link href="/tracing">Learn more about LLM tracing</Link>

// Or use aria-label:
<Link href="/tracing" aria-label="Learn more about LLM tracing">
  Learn more <ArrowRight />
</Link>
```

**C. Fix heading hierarchy**

Audit all pages and ensure:
- Only one `<h1>` per page
- Headings descend sequentially (H1 > H2 > H3)
- No skipped levels (e.g., H1 > H3)

#### Fix 5: Fix Insecure Request

Search and replace any `http://` URLs:

```bash
# Find insecure URLs
grep -r "http://" src/ --include="*.tsx" --include="*.ts" | grep -v "localhost"
```

Common locations:
- External resource links
- API endpoints
- Image sources

---

### P2: Optimization (Nice to Have)

#### Fix 6: Reduce Unused JavaScript

**A. Analyze bundle**

```bash
# Add to package.json scripts
"analyze": "ANALYZE=true next build"

# Install analyzer
pnpm add -D @next/bundle-analyzer
```

```js
// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(withMDX(config));
```

**B. Tree-shake icon imports**

Ensure all Lucide icons are imported individually:

```tsx
// Good - tree-shakeable
import { ArrowRight, Github, Star } from 'lucide-react'

// Bad - imports entire library
import * as Icons from 'lucide-react'
```

**C. Code-split heavy components**

```tsx
// Lazy load syntax highlighter in CodeBlock
const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then(mod => mod.Prism),
  { ssr: false }
)
```

#### Fix 7: Optimize DOM Size

**A. Virtualize FeatureTabs content**

Only render active tab content in DOM:

```tsx
// src/features/home/feature-tabs/FeatureTabs.tsx
{features.map((feature) => (
  feature.id === activeTab && (
    <TabContent
      key={feature.id}
      feature={feature}
      isActive={true}
    />
  )
))}
```

**B. Simplify IsometricIllustration**

Consider:
- Converting to optimized PNG/WebP for initial load
- Loading SVG only on interaction
- Reducing number of SVG elements

#### Fix 8: Add Source Maps (Production Debugging)

```js
// next.config.mjs
const config = {
  // ... existing config
  productionBrowserSourceMaps: true, // Enable if debugging needed
};
```

---

## Implementation Checklist

> **Last Updated**: December 29, 2025
> **Implementation Status**: Phase 1-3 Complete

### Phase 1: Quick Wins (1-2 hours) ✅ COMPLETE

- [x] Add security headers to `next.config.mjs` ✅
- [x] Add `min-height` to FeatureTabs container ✅
- [x] Fix navbar to use fixed height ✅
- [x] Search and fix any `http://` URLs ✅ (only XML namespaces found - OK)
- [x] Add `aria-label` to icon-only links ✅

### Phase 2: CLS Fixes (2-3 hours) ✅ COMPLETE

- [x] Add blur placeholders to all hero/feature images ✅
- [ ] Create skeleton components for dynamic content (optional - min-height approach used instead)
- [x] Audit and fix any other layout shift sources ✅
- [ ] Test CLS with Chrome DevTools Performance tab (pending deployment)

### Phase 3: TBT Reduction (3-4 hours) ✅ COMPLETE

- [x] Implement dynamic imports for non-critical sections ✅
- [ ] Add `requestIdleCallback` to FeatureTabs timer (optional)
- [x] Throttle scroll event handler ✅
- [ ] Bundle analysis and tree-shaking audit (optional - lower priority)

### Phase 4: Accessibility & SEO (2-3 hours) - PARTIAL

- [ ] Audit and fix color contrast issues (pending)
- [ ] Fix heading hierarchy across all pages (pending)
- [x] Replace generic link text with descriptive text ✅
- [ ] Run Lighthouse accessibility audit (pending deployment)

### Phase 5: Validation (1 hour) - PENDING

- [ ] Run PageSpeed Insights again (after deployment)
- [ ] Verify all Core Web Vitals pass
- [ ] Check Google Search Console for issues
- [ ] Test on mobile device

---

## Changes Made (December 29, 2025)

### Files Modified

| File | Changes |
|------|---------|
| `next.config.mjs` | Added comprehensive security headers (CSP, HSTS, X-Frame-Options, etc.) |
| `src/features/home/feature-tabs/TabContent.tsx` | Added min-height to containers, blur placeholders to images |
| `src/components/layout/NavbarContent.tsx` | Added min-h-14 for consistent height |
| `src/features/home/HomePage.tsx` | Dynamic imports for below-fold sections |
| `src/contexts/ScrollContext.tsx` | Throttled scroll handler (100ms) |
| `src/features/home/sections/HeroSection.tsx` | Added aria-labels and aria-hidden to icons |
| `src/components/layout/Footer.tsx` | Improved aria-labels for social links |
| `src/features/product/ProductScreenshot.tsx` | Added blur placeholder + min-height (affects /tracing, /prompt-management, /evaluation) |
| `src/features/product/ProductFeatureSection.tsx` | Added blur placeholder + min-height (affects all product pages) |
| `src/features/home/sections/IntegrationsSection.tsx` | Added blur placeholder for integration icons |
| `src/features/careers/components/CultureSection.tsx` | Added blur placeholder + min-height for team photos |
| `src/features/careers/components/TestimonialsSection.tsx` | Added blur placeholder + min-height for avatar images |

### Summary of Improvements

1. **Security Headers**: 10 security headers added for Best Practices score improvement
2. **CLS Fixes**: min-height containers + blur placeholders to prevent layout shifts
3. **TBT Reduction**: Dynamic imports + throttled scroll = reduced main thread blocking
4. **Accessibility**: aria-labels on all icon-only links
5. **Site-Wide Image Optimization**: Blur placeholders applied to ALL pages with images (product pages, careers, integrations)

---

## Expected Results

After implementing all fixes:

| Metric | Current | Target | Improvement |
|--------|---------|--------|-------------|
| Performance | 59 | 85+ | +26 points |
| Accessibility | 91 | 100 | +9 points |
| Best Practices | 73 | 95+ | +22 points |
| SEO | 92 | 100 | +8 points |
| CLS | 0.341 | < 0.1 | 70% reduction |
| TBT | 500ms | < 200ms | 60% reduction |

---

## Monitoring

### Tools for Ongoing Monitoring

1. **Google Search Console** - Core Web Vitals report
2. **PageSpeed Insights** - Manual checks after deployments
3. **Lighthouse CI** - Automated testing in CI/CD
4. **Web Vitals library** - Real user monitoring

### Lighthouse CI Setup

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            https://brokle.com
          budgetPath: ./budget.json
          uploadArtifacts: true
```

```json
// budget.json
[
  {
    "path": "/*",
    "timings": [
      { "metric": "first-contentful-paint", "budget": 1800 },
      { "metric": "largest-contentful-paint", "budget": 2500 },
      { "metric": "cumulative-layout-shift", "budget": 0.1 },
      { "metric": "total-blocking-time", "budget": 200 }
    ]
  }
]
```

---

## References

- [PageSpeed Insights Report](https://pagespeed.web.dev/analysis/https-brokle-com/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse Performance Scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/)
- [Next.js Performance Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing)
- [Security Headers](https://securityheaders.com/)

---

*Document generated: December 29, 2025*
