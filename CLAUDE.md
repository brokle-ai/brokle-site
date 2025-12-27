# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

```bash
pnpm dev          # Start development server on http://localhost:3000
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm types:check  # Run fumadocs-mdx, next typegen, and TypeScript check
pnpm start        # Start production server
```

## Project Overview

**brokle-site** is the marketing and documentation website for Brokle, an open-source AI observability platform. Built with Next.js 16, Fumadocs (documentation framework), and Tailwind CSS 4.

## Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (home)/            # Landing page route group
│   ├── (legal)/           # Legal pages (terms, privacy)
│   ├── (marketing)/       # Marketing pages
│   ├── (product)/         # Product pages
│   ├── docs/              # Documentation (Fumadocs)
│   ├── actions/           # Server Actions
│   └── api/               # API Routes
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Navbar, Footer
│   ├── docs/              # Documentation-specific components
│   └── shared/            # Reusable components (gradients, 3D, etc.)
├── features/              # Feature-based modules
│   ├── home/              # Homepage feature
│   │   ├── sections/      # Hero, Stats, Features, CTA sections
│   │   └── components/    # Home-specific components
│   ├── pricing/           # Pricing feature
│   ├── contact/           # Contact feature
│   └── ...
├── data/                  # Static data (features, pricing, testimonials)
├── types/                 # TypeScript type definitions
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and services
├── providers/             # React context providers
└── contexts/              # React contexts
```

### Key Patterns

**Feature-Based Organization**: Each major site feature (home, pricing, contact) is self-contained in `src/features/` with its own sections, components, and data.

**Route Groups**: Next.js route groups organize pages by purpose:
- `(home)` - Landing page
- `(legal)` - Terms/privacy
- `(marketing)` - Blog, about, careers
- `(product)` - Product-focused pages

**Path Aliases**: Use `@/` prefix for imports (maps to `src/`):
```typescript
import { Button } from '@/components/ui/button';
import { features } from '@/data/features';
```

### Documentation System

Uses Fumadocs MDX for documentation:
- **Content**: `content/docs/` - MDX files for documentation
- **Config**: `source.config.ts` - Frontmatter schema and MDX options
- **Source**: `src/lib/source.ts` - Content loader configuration
- **Generated**: `.source/` - Auto-generated from fumadocs-mdx (gitignored)

### UI Components

- **shadcn/ui**: Pre-built components in `src/components/ui/` (new-york style)
- **Radix UI**: Underlying primitives for accessible components
- **Lucide React**: Icon library
- **CVA (class-variance-authority)**: Component variant management

## Environment Variables

```bash
NEXT_PUBLIC_API_URL=http://localhost:8080      # Brokle backend API
NEXT_PUBLIC_APP_URL=http://localhost:3001      # Brokle dashboard app
NEXT_PUBLIC_GA_MEASUREMENT_ID=                 # Google Analytics (optional)
```

## Important Files

| File | Purpose |
|------|---------|
| `source.config.ts` | Fumadocs MDX configuration |
| `src/lib/source.ts` | Documentation source loader |
| `components.json` | shadcn/ui configuration |
| `src/app/global.css` | Global styles and Tailwind |

## Development Notes

- **React 19**: Project uses React 19 with RSC (React Server Components)
- **Tailwind CSS 4**: Uses modern Tailwind with PostCSS
- **TypeScript Strict Mode**: Enabled in tsconfig.json
- **Fumadocs MDX**: Run `pnpm types:check` after adding/modifying docs to regenerate types
