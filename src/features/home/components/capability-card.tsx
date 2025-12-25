import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CapabilityCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function CapabilityCard({ icon, title, description }: CapabilityCardProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

