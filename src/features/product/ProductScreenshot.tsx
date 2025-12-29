import Image from "next/image"

interface ProductScreenshotProps {
  src: string
  alt: string
}

export function ProductScreenshot({ src, alt }: ProductScreenshotProps) {
  return (
    <section className="pb-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1280px) 100vw, 1152px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
