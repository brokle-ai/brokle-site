"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Play, Monitor } from "lucide-react"
import { CodeBlock } from "./CodeBlock"
import type { FeatureTabData } from "./types"
import { cn } from "@/lib/utils"

interface TabContentProps {
  feature: FeatureTabData
  isActive: boolean
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full bg-muted/50 flex flex-col items-center justify-center gap-3">
      <Monitor className="h-10 w-10 text-muted-foreground/40" />
      <span className="text-xs text-muted-foreground/60 font-medium text-center px-4">
        {label}
      </span>
    </div>
  )
}

function ScreenshotBlock({ feature, isActive }: { feature: FeatureTabData; isActive: boolean }) {
  if (feature.image.src) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={feature.image.src}
          alt={feature.image.alt}
          fill
          className="object-cover object-left-top"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={isActive}
        />
      </div>
    )
  }
  return <ImagePlaceholder label={feature.image.alt} />
}

export function TabContent({ feature, isActive }: TabContentProps) {
  const displayMode = feature.displayMode || 'default'
  const hasCode = !!feature.code

  return (
    <div
      className={cn(
        "transition-opacity duration-300",
        isActive ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
      )}
    >
      {/* Content Block - Langfuse style unified container */}
      {displayMode === 'default' && hasCode && (
        // Split layout: Code (left) + Image (right) - NO GAP
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-xl overflow-hidden border shadow-sm">
          {/* Code - LEFT (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1 aspect-[6/5] border-b lg:border-b-0 lg:border-r">
            <CodeBlock code={feature.code!} className="h-full rounded-none border-0" />
          </div>
          {/* Image - RIGHT (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 aspect-[6/5] bg-muted/30">
            <ScreenshotBlock feature={feature} isActive={isActive} />
          </div>
        </div>
      )}

      {displayMode === 'image-only' && (
        // Full-width image only
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <div className="aspect-[12/5] bg-muted/30">
            <ScreenshotBlock feature={feature} isActive={isActive} />
          </div>
        </div>
      )}

      {displayMode === 'code-only' && hasCode && (
        // Full-width code only
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <CodeBlock code={feature.code!} className="aspect-[12/5]" />
        </div>
      )}

      {/* Fallback: if displayMode is default but no code, show image-only */}
      {displayMode === 'default' && !hasCode && (
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <div className="aspect-[12/5] bg-muted/30">
            <ScreenshotBlock feature={feature} isActive={isActive} />
          </div>
        </div>
      )}

      {/* Description Section - Langfuse style 8/4 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6">
        {/* Title + Description - 8 cols */}
        <div className="lg:col-span-8">
          <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>

        {/* Action links - 4 cols */}
        <div className="lg:col-span-4 space-y-2">
          <Link
            href={feature.docsHref}
            className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium rounded-lg border bg-background hover:bg-muted transition-colors w-full"
          >
            <span>Documentation</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </Link>
          {feature.demoHref && feature.demoHref !== "#" && (
            <Link
              href={feature.demoHref}
              className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-medium rounded-lg border bg-background hover:bg-muted transition-colors w-full"
            >
              <span>Watch Demo</span>
              <Play className="h-4 w-4 text-muted-foreground" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
