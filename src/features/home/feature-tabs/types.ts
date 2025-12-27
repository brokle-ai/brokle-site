import type { LucideIcon } from "lucide-react"

export type TabDisplayMode = 'default' | 'code-only' | 'image-only'

export interface FeatureTabData {
  id: string
  icon: LucideIcon
  label: string
  title: string
  description: string
  image: {
    src: string | null  // null = use placeholder
    alt: string
  }
  // Code is optional - some tabs may only show image
  code?: {
    python: string
    javascript?: string
  }
  // Display mode: default (code+image), code-only, image-only
  displayMode?: TabDisplayMode
  docsHref: string
  demoHref?: string
}

export interface TabState {
  activeTab: string
  isAutoAdvancePaused: boolean
  autoAdvanceProgress: number
  isInViewport: boolean
}

export type TabAction =
  | { type: "SET_ACTIVE_TAB"; payload: string }
  | { type: "SET_AUTO_ADVANCE_PAUSED"; payload: boolean }
  | { type: "SET_PROGRESS"; payload: number }
  | { type: "SET_IN_VIEWPORT"; payload: boolean }
  | { type: "RESET_PROGRESS" }
