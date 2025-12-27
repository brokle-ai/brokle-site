"use client"

import { useState, useRef, useEffect } from "react"
import { codeToHtml } from "shiki/bundle/web"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: {
    python: string
    javascript?: string
  }
  className?: string
}

type Language = "python" | "javascript"

export function CodeBlock({ code, className }: CodeBlockProps) {
  const [activeLanguage, setActiveLanguage] = useState<Language>("python")
  const [copied, setCopied] = useState(false)
  const [highlightedHtml, setHighlightedHtml] = useState<string>("")
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const hasJavaScript = !!code.javascript
  const activeCode = activeLanguage === "python" ? code.python : (code.javascript || code.python)

  // Highlight code with Shiki
  useEffect(() => {
    const lang = activeLanguage === "python" ? "python" : "typescript"

    codeToHtml(activeCode, {
      lang,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false, // Output CSS variables only, no inline styles
    }).then(setHighlightedHtml)
  }, [activeCode, activeLanguage])

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
      }
    }
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeCode)
    setCopied(true)
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current)
    }
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("rounded-lg border bg-muted/50 text-foreground overflow-hidden flex flex-col", className)}>
      {/* Header with language tabs */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-1">
          {/* Window controls */}
          <div className="flex gap-1.5 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          {/* Language tabs */}
          <button
            onClick={() => setActiveLanguage("python")}
            className={cn(
              "px-3 py-1 text-xs rounded-md transition-colors",
              activeLanguage === "python"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Python SDK
          </button>
          {hasJavaScript && (
            <button
              onClick={() => setActiveLanguage("javascript")}
              className={cn(
                "px-3 py-1 text-xs rounded-md transition-colors",
                activeLanguage === "javascript"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              JS/TS SDK
            </button>
          )}
        </div>

        {/* Copy button */}
        <Button
          variant="ghost"
          size="sm"
          className="h-7 text-xs text-muted-foreground hover:text-foreground hover:bg-accent"
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Code content */}
      <div className="relative flex-1 overflow-hidden">
        <div
          className="p-4 text-sm overflow-auto h-full scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent font-mono text-[0.8125rem] leading-relaxed [&>pre]:p-0 [&>pre]:m-0"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </div>
    </div>
  )
}
