import { cn } from "@/lib/utils"

interface GradientSectionProps {
  children: React.ReactNode
  variant?: "warm" | "cool" | "dark"
  className?: string
}

const gradientStyles = {
  warm: "bg-gradient-to-br from-gradient-warm-from to-gradient-warm-to",
  cool: "bg-gradient-to-br from-gradient-cool-from to-gradient-cool-to",
  dark: "bg-gradient-to-br from-gradient-dark-from to-gradient-dark-to text-white",
}

export function GradientSection({
  children,
  variant = "warm",
  className,
}: GradientSectionProps) {
  return (
    <section className={cn(gradientStyles[variant], className)}>
      {children}
    </section>
  )
}
