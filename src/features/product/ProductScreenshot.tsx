import Image from "next/image"
import { BLUR_PLACEHOLDER } from "@/lib/image-constants"

interface ProductScreenshotProps {
  src: string
  alt: string
}

export function ProductScreenshot({ src, alt }: ProductScreenshotProps) {
  return (
    <section className="pb-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1280px) 100vw, 1152px"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
