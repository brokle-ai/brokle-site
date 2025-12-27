import { Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScreenshotPlaceholderProps {
  label: string
  aspectRatio?: "16/9" | "4/3" | "3/2"
  className?: string
}

const aspectRatioClasses = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
}

export function ScreenshotPlaceholder({
  label,
  aspectRatio = "16/9",
  className,
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className={cn(
        "w-full bg-muted rounded-xl border-2 border-dashed border-muted-foreground/25 flex flex-col items-center justify-center gap-3",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <Monitor className="h-10 w-10 text-muted-foreground/40" />
      <span className="text-sm text-muted-foreground/60 font-medium">
        Screenshot: {label}
      </span>
    </div>
  )
}
