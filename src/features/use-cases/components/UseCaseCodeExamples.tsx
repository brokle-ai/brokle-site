"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DisplayHeading } from "@/components/shared"
import { Check, Copy } from "lucide-react"
import type { UseCaseCodeExample } from "@/types/use-case-page"

interface UseCaseCodeExamplesProps {
  examples: UseCaseCodeExample[]
}

function CodeBlock({
  title,
  code,
  language,
}: {
  title: string
  code: string
  language: string
}) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg border bg-zinc-950 text-zinc-50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
        <span className="text-xs text-zinc-400">{title}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">{language}</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      </div>
      <pre className="p-4 text-sm overflow-x-auto">
        <code className="font-mono text-zinc-300">{code}</code>
      </pre>
    </div>
  )
}

export function UseCaseCodeExamples({ examples }: UseCaseCodeExamplesProps) {
  if (examples.length === 0) return null

  return (
    <section className="py-20 md:py-28 lg:py-32 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <DisplayHeading as="h2" className="mb-4">
            Quick start
          </DisplayHeading>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get up and running in minutes with these code examples.
          </p>
        </div>

        {/* Code Examples */}
        <div className="max-w-3xl mx-auto space-y-6">
          {examples.map((example, index) => (
            <CodeBlock
              key={index}
              title={example.title}
              code={example.code}
              language={example.language}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
