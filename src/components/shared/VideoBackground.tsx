'use client'

import { cn } from "@/lib/utils"

interface VideoBackgroundProps {
  className?: string
}

// Brokle-themed animated visualization showing LLM observability concepts:
// - Trace flow from request to response
// - Spans representing LLM calls, embeddings, evaluations
// - Quality scores and latency metrics
// - Real-time data streaming
export function VideoBackground({ className }: VideoBackgroundProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-2xl", className)}>
      <svg
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background grid - represents observability dashboard */}
        <pattern id="obsGrid" width="25" height="25" patternUnits="userSpaceOnUse">
          <path
            d="M 25 0 L 0 0 0 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-foreground/5"
          />
        </pattern>
        <rect width="500" height="420" fill="url(#obsGrid)" />

        {/* === TRACE WATERFALL VISUALIZATION === */}

        {/* Root Trace - Request enters */}
        <g transform="translate(30, 60)">
          {/* Root span bar */}
          <rect x="0" y="0" width="420" height="24" rx="4" className="fill-foreground/10">
            <animate attributeName="opacity" values="0.1;0.15;0.1" dur="3s" repeatCount="indefinite" />
          </rect>
          <text x="8" y="16" className="fill-foreground/60" fontSize="10" fontFamily="monospace">
            POST /v1/chat/completions
          </text>
          <text x="360" y="16" className="fill-foreground/40" fontSize="9" fontFamily="monospace">
            1.2s
          </text>

          {/* Animated progress indicator */}
          <rect x="0" y="0" width="0" height="24" rx="4" className="fill-foreground/5">
            <animate attributeName="width" values="0;420;420;0" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Child Span 1 - LLM Call */}
        <g transform="translate(50, 95)">
          <rect x="0" y="0" width="280" height="22" rx="3" className="fill-foreground/15">
            <animate attributeName="opacity" values="0.15;0.25;0.15" dur="2.5s" repeatCount="indefinite" />
          </rect>
          <text x="8" y="15" className="fill-foreground/70" fontSize="9" fontFamily="monospace">
            llm.openai.chat
          </text>
          <text x="220" y="15" className="fill-foreground/40" fontSize="8" fontFamily="monospace">
            850ms
          </text>

          {/* Token flow animation */}
          <g>
            <circle cx="0" cy="11" r="3" className="fill-foreground/30">
              <animate attributeName="cx" values="0;280" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* Child Span 2 - Embedding */}
        <g transform="translate(50, 125)">
          <rect x="0" y="0" width="120" height="20" rx="3" className="fill-foreground/12">
            <animate attributeName="opacity" values="0.12;0.2;0.12" dur="2s" repeatCount="indefinite" />
          </rect>
          <text x="8" y="14" className="fill-foreground/60" fontSize="8" fontFamily="monospace">
            embedding.create
          </text>
          <text x="90" y="14" className="fill-foreground/35" fontSize="7" fontFamily="monospace">
            45ms
          </text>
        </g>

        {/* Child Span 3 - Vector Search */}
        <g transform="translate(180, 125)">
          <rect x="0" y="0" width="100" height="20" rx="3" className="fill-foreground/12">
            <animate attributeName="opacity" values="0.12;0.18;0.12" dur="1.8s" repeatCount="indefinite" />
          </rect>
          <text x="8" y="14" className="fill-foreground/60" fontSize="8" fontFamily="monospace">
            vector.search
          </text>
          <text x="75" y="14" className="fill-foreground/35" fontSize="7" fontFamily="monospace">
            28ms
          </text>
        </g>

        {/* Child Span 4 - Evaluation */}
        <g transform="translate(340, 95)">
          <rect x="0" y="0" width="90" height="22" rx="3" className="fill-foreground/10">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2.2s" repeatCount="indefinite" />
          </rect>
          <text x="8" y="15" className="fill-foreground/60" fontSize="8" fontFamily="monospace">
            eval.score
          </text>
          <text x="60" y="15" className="fill-foreground/35" fontSize="7" fontFamily="monospace">
            120ms
          </text>
        </g>

        {/* === METRICS PANEL === */}
        <g transform="translate(30, 170)">
          {/* Panel background */}
          <rect x="0" y="0" width="200" height="100" rx="6" className="fill-foreground/5 stroke-foreground/10" strokeWidth="1" />

          {/* Quality Score */}
          <text x="12" y="22" className="fill-foreground/50" fontSize="9" fontFamily="monospace">Quality Score</text>
          <text x="12" y="42" className="fill-foreground/80" fontSize="18" fontWeight="600">
            0.94
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </text>

          {/* Score bar */}
          <rect x="12" y="52" width="176" height="6" rx="3" className="fill-foreground/10" />
          <rect x="12" y="52" width="165" height="6" rx="3" className="fill-foreground/25">
            <animate attributeName="width" values="160;170;165" dur="3s" repeatCount="indefinite" />
          </rect>

          {/* Mini metrics */}
          <text x="12" y="78" className="fill-foreground/40" fontSize="8" fontFamily="monospace">Latency: 1.2s</text>
          <text x="100" y="78" className="fill-foreground/40" fontSize="8" fontFamily="monospace">Tokens: 847</text>
          <text x="12" y="92" className="fill-foreground/40" fontSize="8" fontFamily="monospace">Cost: $0.0034</text>
        </g>

        {/* === LIVE TRACES FEED === */}
        <g transform="translate(250, 170)">
          {/* Panel background */}
          <rect x="0" y="0" width="200" height="100" rx="6" className="fill-foreground/5 stroke-foreground/10" strokeWidth="1" />

          <text x="12" y="18" className="fill-foreground/50" fontSize="9" fontFamily="monospace">Live Traces</text>

          {/* Trace entries with staggered animations */}
          <g transform="translate(12, 28)">
            <circle cx="4" cy="6" r="3" className="fill-foreground/30">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <text x="14" y="10" className="fill-foreground/60" fontSize="8" fontFamily="monospace">chat-7f3a • 0.92 • 1.1s</text>
          </g>

          <g transform="translate(12, 44)">
            <circle cx="4" cy="6" r="3" className="fill-foreground/25">
              <animate attributeName="opacity" values="0.25;0.5;0.25" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <text x="14" y="10" className="fill-foreground/50" fontSize="8" fontFamily="monospace">embed-2b1c • 0.88 • 0.3s</text>
          </g>

          <g transform="translate(12, 60)">
            <circle cx="4" cy="6" r="3" className="fill-foreground/20">
              <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="14" y="10" className="fill-foreground/40" fontSize="8" fontFamily="monospace">agent-9d4e • 0.96 • 2.4s</text>
          </g>

          <g transform="translate(12, 76)">
            <circle cx="4" cy="6" r="3" className="fill-foreground/15">
              <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <text x="14" y="10" className="fill-foreground/30" fontSize="8" fontFamily="monospace">rag-5c2f • 0.91 • 0.8s</text>
          </g>
        </g>

        {/* === STREAMING TOKENS VISUALIZATION === */}
        <g transform="translate(30, 290)">
          <rect x="0" y="0" width="420" height="50" rx="6" className="fill-foreground/3 stroke-foreground/8" strokeWidth="1" />

          <text x="12" y="18" className="fill-foreground/40" fontSize="8" fontFamily="monospace">Response Stream</text>

          {/* Animated token blocks */}
          <g transform="translate(12, 26)">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <rect
                key={i}
                x={i * 30}
                y="0"
                width="26"
                height="14"
                rx="2"
                className="fill-foreground/15"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.2;0.15;0.1"
                  dur="0.8s"
                  begin={`${i * 0.15}s`}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </g>
        </g>

        {/* === PROVIDER ICONS === */}
        <g transform="translate(30, 360)">
          {/* OpenAI */}
          <g transform="translate(0, 0)">
            <circle cx="15" cy="15" r="14" className="fill-foreground/8 stroke-foreground/15" strokeWidth="1">
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="15" y="19" textAnchor="middle" className="fill-foreground/50" fontSize="8" fontWeight="500">AI</text>
          </g>

          {/* Anthropic */}
          <g transform="translate(45, 0)">
            <circle cx="15" cy="15" r="14" className="fill-foreground/6 stroke-foreground/12" strokeWidth="1">
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2.3s" repeatCount="indefinite" />
            </circle>
            <text x="15" y="19" textAnchor="middle" className="fill-foreground/45" fontSize="8" fontWeight="500">CL</text>
          </g>

          {/* Google */}
          <g transform="translate(90, 0)">
            <circle cx="15" cy="15" r="14" className="fill-foreground/5 stroke-foreground/10" strokeWidth="1">
              <animate attributeName="opacity" values="0.6;0.8;0.6" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <text x="15" y="19" textAnchor="middle" className="fill-foreground/40" fontSize="8" fontWeight="500">G</text>
          </g>

          {/* Connection lines flowing to Brokle */}
          <g className="text-foreground/10">
            <path d="M 135 15 Q 180 15, 200 25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2">
              <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M 135 15 Q 180 15, 200 15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2">
              <animate attributeName="stroke-dashoffset" values="0;-12" dur="1.2s" repeatCount="indefinite" />
            </path>
            <path d="M 135 15 Q 180 15, 200 5" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2">
              <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.8s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Brokle hub */}
          <g transform="translate(200, 0)">
            <rect x="0" y="2" width="60" height="26" rx="4" className="fill-foreground/10 stroke-foreground/20" strokeWidth="1">
              <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
            </rect>
            <text x="30" y="19" textAnchor="middle" className="fill-foreground/70" fontSize="9" fontWeight="600">brokle</text>
          </g>

          {/* Output to dashboard */}
          <g className="text-foreground/10">
            <path d="M 270 15 L 320 15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2">
              <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.9s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Dashboard icon */}
          <g transform="translate(325, 0)">
            <rect x="0" y="2" width="50" height="26" rx="4" className="fill-foreground/5 stroke-foreground/10" strokeWidth="1" />
            <rect x="6" y="8" width="12" height="8" rx="1" className="fill-foreground/20" />
            <rect x="22" y="8" width="22" height="3" rx="1" className="fill-foreground/15" />
            <rect x="22" y="14" width="16" height="3" rx="1" className="fill-foreground/10" />
          </g>
        </g>

        {/* === FLOATING QUALITY INDICATORS === */}
        <g>
          {/* Score badge 1 */}
          <g transform="translate(420, 50)">
            <rect x="0" y="0" width="45" height="20" rx="10" className="fill-foreground/10">
              <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
            </rect>
            <text x="22" y="14" textAnchor="middle" className="fill-foreground/50" fontSize="9" fontWeight="500">0.96</text>
          </g>

          {/* Score badge 2 */}
          <g transform="translate(380, 145)">
            <rect x="0" y="0" width="45" height="20" rx="10" className="fill-foreground/8">
              <animate attributeName="opacity" values="0.08;0.15;0.08" dur="2.5s" repeatCount="indefinite" />
            </rect>
            <text x="22" y="14" textAnchor="middle" className="fill-foreground/40" fontSize="9" fontWeight="500">0.88</text>
          </g>
        </g>

      </svg>
    </div>
  )
}
