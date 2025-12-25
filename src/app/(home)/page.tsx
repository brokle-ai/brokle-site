import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Brokle</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Open-source AI observability platform for tracing, evaluation, and cost
        analytics.
      </p>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
        >
          Get Started
        </Link>
        <Link
          href="https://github.com/brokle-ai/brokle"
          className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition"
        >
          GitHub
        </Link>
      </div>
    </main>
  );
}
