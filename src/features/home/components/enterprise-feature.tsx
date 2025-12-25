import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface EnterpriseFeatureProps {
  icon: ReactNode
  title: string
  description: string
}

export default function EnterpriseFeature({ icon, title, description }: EnterpriseFeatureProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">{icon}</div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

