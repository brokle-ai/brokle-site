import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface IntegrationCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function IntegrationCard({ icon, title, description }: IntegrationCardProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="text-center pb-2">
        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

