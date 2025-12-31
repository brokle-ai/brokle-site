"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"
import { TabContent } from "./TabContent"
import type { FeatureTabData } from "./types"

interface FeatureTabsProps {
  features: FeatureTabData[]
  autoAdvanceInterval?: number // ms, default 10000 (10s)
}

export function FeatureTabs({ features, autoAdvanceInterval = 10000 }: FeatureTabsProps) {
  const [activeTab, setActiveTab] = useState(features[0]?.id || "")
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInViewport, setIsInViewport] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const lastTickRef = useRef<number>(0)

  const activeIndex = features.findIndex((f) => f.id === activeTab)

  // Advance to next tab
  const advanceToNextTab = useCallback(() => {
    const currentIndex = features.findIndex((f) => f.id === activeTab)
    const nextIndex = (currentIndex + 1) % features.length
    setActiveTab(features[nextIndex].id)
    setProgress(0)
    lastTickRef.current = Date.now()
  }, [activeTab, features])

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    setProgress(0)
    lastTickRef.current = Date.now()
  }

  // Intersection Observer for viewport detection
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-advance timer
  useEffect(() => {
    if (isPaused || !isInViewport) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
      return
    }

    // Initialize lastTickRef when starting auto-advance
    if (lastTickRef.current === 0) {
      lastTickRef.current = Date.now()
    }

    const tickInterval = 50 // Update progress every 50ms
    progressIntervalRef.current = setInterval(() => {
      const now = Date.now()
      const elapsed = now - lastTickRef.current
      const newProgress = (elapsed / autoAdvanceInterval) * 100

      if (newProgress >= 100) {
        advanceToNextTab()
      } else {
        setProgress(newProgress)
      }
    }, tickInterval)

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [isPaused, isInViewport, autoAdvanceInterval, advanceToNextTab])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInViewport) return

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault()
          const prevIndex = (activeIndex - 1 + features.length) % features.length
          handleTabClick(features[prevIndex].id)
          break
        case "ArrowRight":
          e.preventDefault()
          const nextIndex = (activeIndex + 1) % features.length
          handleTabClick(features[nextIndex].id)
          break
        case "Escape":
          setIsPaused((p) => !p)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex, features, isInViewport])

  return (
    <div
      ref={containerRef}
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        lastTickRef.current = Date.now() - (progress / 100) * autoAdvanceInterval
      }}
    >
      {/* Tab buttons */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-6 border-b">
          {features.map((feature, index) => {
            const isActive = feature.id === activeTab
            const Icon = feature.icon

            return (
              <button
                key={feature.id}
                onClick={() => handleTabClick(feature.id)}
                className={cn(
                  "relative flex items-center gap-2 px-1 py-3 text-sm font-medium transition-colors border-b-2 -mb-px",
                  isActive
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{feature.label}</span>

                {/* Progress indicator for active tab */}
                {isActive && !isPaused && isInViewport && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted-foreground/20 overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab content */}
      <div className="relative">
        {features.map((feature) => (
          <TabContent
            key={feature.id}
            feature={feature}
            isActive={feature.id === activeTab}
          />
        ))}
      </div>
    </div>
  )
}
