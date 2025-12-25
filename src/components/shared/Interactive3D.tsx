'use client'

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface Interactive3DProps {
  className?: string
}

export function Interactive3D({ className }: Interactive3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cubeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const cube = cubeRef.current
    if (!container || !cube) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      const rotateX = y * 20
      const rotateY = x * 20

      cube.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
      cube.style.transform = `perspective(1000px) rotateX(-10deg) rotateY(10deg)`
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center cursor-pointer",
        className
      )}
    >
      {/* 3D Scene */}
      <div
        ref={cubeRef}
        className="relative w-48 h-48 md:w-64 md:h-64 transition-transform duration-100 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px) rotateX(-10deg) rotateY(10deg)',
        }}
      >
        {/* Main cube faces */}
        <div
          className="absolute inset-0 border border-foreground/20 bg-foreground/5 backdrop-blur-sm"
          style={{ transform: 'translateZ(80px)' }}
        >
          {/* Front face content - Trace visualization */}
          <div className="w-full h-full p-4 flex flex-col justify-center">
            <div className="space-y-2">
              <div className="h-2 w-3/4 bg-foreground/20 rounded" />
              <div className="h-2 w-1/2 bg-foreground/15 rounded ml-4" />
              <div className="h-2 w-2/3 bg-foreground/10 rounded ml-8" />
              <div className="h-2 w-1/3 bg-foreground/15 rounded ml-4" />
              <div className="h-2 w-1/2 bg-foreground/20 rounded" />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 border border-foreground/10 bg-foreground/3"
          style={{ transform: 'translateZ(-80px)' }}
        />

        <div
          className="absolute inset-0 border border-foreground/10 bg-foreground/3"
          style={{ transform: 'rotateY(90deg) translateZ(80px)' }}
        />

        <div
          className="absolute inset-0 border border-foreground/10 bg-foreground/3"
          style={{ transform: 'rotateY(-90deg) translateZ(80px)' }}
        />

        <div
          className="absolute inset-0 border border-foreground/10 bg-foreground/3"
          style={{ transform: 'rotateX(90deg) translateZ(80px)' }}
        />

        <div
          className="absolute inset-0 border border-foreground/10 bg-foreground/3"
          style={{ transform: 'rotateX(-90deg) translateZ(80px)' }}
        />

        {/* Orbiting elements */}
        <div
          className="absolute w-4 h-4 rounded-full bg-foreground/30 animate-spin"
          style={{
            top: '-20px',
            left: '50%',
            marginLeft: '-8px',
            animationDuration: '8s',
            transformOrigin: '8px 120px',
          }}
        />
        <div
          className="absolute w-3 h-3 rounded-full bg-foreground/20 animate-spin"
          style={{
            top: '50%',
            right: '-30px',
            marginTop: '-6px',
            animationDuration: '6s',
            animationDirection: 'reverse',
            transformOrigin: '-100px 6px',
          }}
        />
      </div>

      {/* Floating data points */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-foreground/20 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-foreground/15 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-foreground/25 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-foreground/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        <line x1="100" y1="100" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10" />
        <line x1="300" y1="130" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10" />
        <line x1="130" y1="280" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10" />
        <line x1="280" y1="270" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10" />
      </svg>

      {/* Overlay label */}
      <div className="absolute bottom-4 right-4 px-3 py-1 bg-foreground/10 rounded-full">
        <span className="text-xs font-mono text-foreground/50">3D Interactive (move mouse)</span>
      </div>
    </div>
  )
}
