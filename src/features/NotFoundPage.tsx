import Link from "next/link"
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="mb-6 text-9xl font-bold text-primary">404</h1>
      <h2 className="mb-8 text-3xl font-semibold">Page Not Found</h2>
      <p className="mx-auto mb-8 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Don&apos;t worry, you can find plenty of other things on our homepage.
      </p>
      <div className="space-x-4">
        <Link href="/">
          <Button size="lg">Back to Home</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg">Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}