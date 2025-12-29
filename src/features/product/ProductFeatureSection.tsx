import Image from "next/image"
import { DisplayHeading } from "@/components/shared/DisplayHeading"
import { BLUR_PLACEHOLDER } from "@/lib/image-constants"
import type { LucideIcon } from "lucide-react"

interface FeatureItem {
  icon: LucideIcon
  text: string
}

interface ProductFeatureSectionProps {
  title: string
  description: string
  image: { src: string; alt: string }
  features: FeatureItem[]
  reverse?: boolean
}

export function ProductFeatureSection({
  title,
  description,
  image,
  features,
  reverse = false,
}: ProductFeatureSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className={reverse ? "lg:order-2" : ""}>
              <DisplayHeading as="h2">{title}</DisplayHeading>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                {description}
              </p>

              <ul className="mt-8 space-y-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 size-8 rounded-lg bg-muted flex items-center justify-center">
                        <Icon className="size-4 text-muted-foreground" />
                      </div>
                      <span className="text-muted-foreground pt-1.5">{feature.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Image */}
            <div className={reverse ? "lg:order-1" : ""}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
