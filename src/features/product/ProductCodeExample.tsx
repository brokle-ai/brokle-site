"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface ProductCodeExampleProps {
  title: string
  description: string
  typescript: string
  python: string
}

export function ProductCodeExample({
  title,
  description,
  typescript,
  python,
}: ProductCodeExampleProps) {
  const [language, setLanguage] = useState<"typescript" | "python">("typescript")
  const [copied, setCopied] = useState(false)

  const code = language === "typescript" ? typescript : python

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border bg-card overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
                <div className="flex gap-1">
                  <button
                    onClick={() => setLanguage("typescript")}
                    className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                      language === "typescript"
                        ? "bg-background text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    TypeScript
                  </button>
                  <button
                    onClick={() => setLanguage("python")}
                    className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                      language === "python"
                        ? "bg-background text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Python
                  </button>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  title="Copy code"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Code */}
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="text-foreground/90 font-mono">{code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
