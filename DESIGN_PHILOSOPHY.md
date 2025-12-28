# Brokle Site Design Philosophy & Patterns

This document captures the design philosophy, patterns, and decisions for the Brokle marketing site.

## Core Philosophy

### 1. Honesty Over Hype
- No false claims or marketing exaggeration
- "Open source at heart" not "100% open source" (we have EE)
- "Open Core" model acknowledged transparently
- No fake stats, testimonials should be real
- Every claim must be defensible

### 2. Every Section Adds Unique Value
- Remove redundant sections
- If two sections say the same thing, merge or remove one
- Ask: "What does this section tell the user that they don't already know?"

### 3. Simplicity Over Complexity
- Fewer sections, more impact
- Clean layouts over cluttered designs
- Let content breathe

---

## Homepage Structure

Current flow (6 sections):
```
1. Hero           → What is it
2. FeatureTabs    → What can you do
3. Integrations   → What it works with
4. Open Source    → Why trust it
5. Testimonials   → Social proof
6. Final CTA      → Get started
```

---

## Layout Patterns

### Centered Layout (Default)
Used by most sections for consistency.

```
┌─────────────────────────────────────────────────────────────┐
│                     Section Heading                         │
│              Subtitle/description text                      │
│                                                             │
│                    [ Content Below ]                        │
│                                                             │
│                      Link/CTA →                             │
└─────────────────────────────────────────────────────────────┘
```

**Used in:** Integrations, Open Source, Testimonials, Final CTA

### Two-Column Layout (Exception)
Only use when there's a clear left/right relationship (e.g., text + visual).

**Used in:** Hero (text + illustration/code)

---

## Component Patterns

### Section Container
```tsx
<section className="py-20 md:py-28 lg:py-32 border-t">
  <div className="container px-4 mx-auto max-w-7xl">
    {/* Content */}
  </div>
</section>
```

- Consistent vertical padding: `py-20 md:py-28 lg:py-32`
- Border top for visual separation: `border-t`
- Max width container: `max-w-7xl`
- Optional background: `bg-muted/20` for alternating sections

### Section Header (Centered)
```tsx
<div className="text-center mb-12">
  <DisplayHeading as="h2" className="mb-4">
    Section Title
  </DisplayHeading>
  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    Description text goes here.
  </p>
</div>
```

### Link with Arrow
```tsx
<Link
  href="/path"
  className="inline-flex items-center gap-1 text-sm font-medium hover:text-foreground/70 transition-colors"
>
  Link text
  <ArrowRight className="h-4 w-4" />
</Link>
```

---

## Integrations Section

### Design Decisions
- **Icon-only** (no text labels) - cleaner for 100+ integrations
- **3 rows** with different speeds/directions for visual interest
- **Larger icons** (w-16, 36px) since no labels to help identify
- **Clickable** - each icon links to its docs page
- **Marquee** - handles large number of integrations gracefully

### Implementation
```tsx
// Row arrangements for visual variety
const row1 = [...integrations]
const row2 = [...integrations].reverse()
const row3 = [...integrations.slice(7), ...integrations.slice(0, 7)]

// Different speeds create depth
<Marquee className="[--duration:50s]">      // Row 1: normal
<Marquee reverse className="[--duration:55s]"> // Row 2: reverse, slower
<Marquee className="[--duration:45s]">      // Row 3: normal, faster
```

### Icon Component
```tsx
<Link
  href={href}
  className="flex items-center justify-center w-16 h-16 mx-2 rounded-xl border bg-card hover:bg-muted/50 hover:scale-110 transition-all"
  title={name}  // Tooltip on hover
>
  <Image src={icon} width={36} height={36} />
</Link>
```

---

## Open Source Section

### Messaging (Open Core Model)
We're honest about our business model:

| Don't Say | Do Say |
|-----------|--------|
| "100% open source" | "Open source at heart" |
| "Fully Open Source" | "Open Core" |
| "MIT licensed...entire codebase" | "Core platform is MIT licensed" |
| "No proprietary lock-in" | "Enterprise features available for teams" |

### Reference Companies
Same model as: GitLab, Grafana, PostHog, Supabase, Elastic

---

## Typography

- **Display Headings:** `DisplayHeading` component
- **Body text:** `text-lg text-muted-foreground`
- **Small text:** `text-sm text-muted-foreground`
- **Links:** `text-sm font-medium`

---

## Colors & Theming

- **Background:** `bg-background` / `bg-muted/20` (alternating)
- **Cards:** `bg-card` with `border`
- **Text:** `text-foreground` / `text-muted-foreground`
- **Hover states:** `hover:bg-muted/50`, `hover:scale-110`
- **Dark mode:** Use `dark:invert` for icons that need it

---

## Decisions Log

| Decision | Rationale |
|----------|-----------|
| Remove UseCasesSection | Redundant with FeatureTabs; "observability for things that need observability" is obvious |
| Icon-only integrations | Cleaner for 100+ items; marquee handles quantity |
| 3-row marquee | More visual impact than single row; different speeds add depth |
| Clickable integration icons | Users can explore specific integrations |
| "Open source at heart" | Honest about EE features; builds trust |
| Centered layouts | Consistency across sections |

---

## Anti-Patterns (Don't Do)

1. **Don't add sections without unique value**
2. **Don't make false claims** (100% open source, fake stats)
3. **Don't break layout consistency** without good reason
4. **Don't use two-column where centered works**
5. **Don't add CTAs/buttons that don't go anywhere**
6. **Don't add links to pages that don't exist**

---

## Future Considerations

- Replace placeholder testimonials with real ones
- Add "Trusted by" logos when available
- Hero illustration/visual could be improved
- Consider adding comparison section (vs alternatives)
