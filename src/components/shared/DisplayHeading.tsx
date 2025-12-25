import { cn } from "@/lib/utils"

type HeadingLevel = "h1" | "h2" | "h3" | "h4"

interface DisplayHeadingProps {
  children: React.ReactNode
  as?: HeadingLevel
  className?: string
  serif?: boolean
}

const sizeStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl lg:text-5xl",
  h3: "text-2xl md:text-3xl lg:text-4xl",
  h4: "text-xl md:text-2xl lg:text-3xl",
}

export function DisplayHeading({
  children,
  as: Component = "h1",
  className,
  serif = true,
}: DisplayHeadingProps) {
  return (
    <Component
      className={cn(
        "font-semibold tracking-tight text-foreground",
        sizeStyles[Component],
        serif && "font-display",
        className
      )}
    >
      {children}
    </Component>
  )
}
