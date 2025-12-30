"use client"

import dynamic from "next/dynamic"

// Lazy load IsometricIllustration on client only
// - 240+ lines of SVG with animations
// - Hidden on mobile (`hidden lg:block`)
// - Not critical for LCP
const IsometricIllustration = dynamic(
  () => import("@/components/shared/IsometricIllustration").then(mod => ({ default: mod.IsometricIllustration })),
  {
    ssr: false,
    loading: () => <div className="w-full max-w-lg mx-auto aspect-square" />
  }
)

interface LazyIllustrationProps {
  className?: string
}

export function LazyIllustration({ className }: LazyIllustrationProps) {
  return <IsometricIllustration className={className} />
}
