import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

const featuredPost = {
  title: "Introducing Brokle: Open-Source LLM Observability",
  description: "Today we're excited to announce Brokle, the open-source platform for LLM observability. Learn why we built it and how it can help your team.",
  author: "Brokle Team",
  date: "November 15, 2025",
  readTime: "8 min read",
  category: "Announcement",
  slug: "#",
}

const blogPosts = [
  {
    title: "A Complete Guide to LLM Tracing",
    description: "Learn how to implement comprehensive tracing for your LLM applications, from simple chains to complex agents.",
    author: "Engineering Team",
    date: "November 10, 2025",
    readTime: "12 min read",
    category: "Engineering",
    slug: "#",
  },
  {
    title: "Best Practices for Prompt Management",
    description: "How to version, test, and deploy prompts effectively. Lessons learned from production deployments.",
    author: "Engineering Team",
    date: "November 5, 2025",
    readTime: "10 min read",
    category: "Best Practices",
    slug: "#",
  },
  {
    title: "Evaluating LLM Output Quality at Scale",
    description: "Building automated evaluation pipelines with LLM-as-judge and custom evaluators.",
    author: "Engineering Team",
    date: "October 28, 2025",
    readTime: "15 min read",
    category: "Engineering",
    slug: "#",
  },
  {
    title: "Reducing LLM Costs by 50%: A Case Study",
    description: "How one team used Brokle analytics to identify cost optimization opportunities and cut their AI spend in half.",
    author: "Customer Success",
    date: "October 20, 2025",
    readTime: "7 min read",
    category: "Case Study",
    slug: "#",
  },
  {
    title: "OpenTelemetry for LLM Applications",
    description: "Why we chose OpenTelemetry as our tracing foundation and how you can leverage it.",
    author: "Engineering Team",
    date: "October 15, 2025",
    readTime: "9 min read",
    category: "Engineering",
    slug: "#",
  },
  {
    title: "Self-Hosting Brokle: Complete Setup Guide",
    description: "Step-by-step guide to deploying Brokle on your own infrastructure with Docker and Kubernetes.",
    author: "DevOps Team",
    date: "October 8, 2025",
    readTime: "14 min read",
    category: "Guides",
    slug: "#",
  },
]

const categories = ["All", "Engineering", "Announcement", "Case Study", "Guides", "Best Practices"]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Updates</h1>
            <p className="text-xl text-muted-foreground">
              Engineering insights, product updates, and best practices for building
              production LLM applications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Badge className="mb-4 bg-primary text-primary-foreground">
                      {featuredPost.category}
                    </Badge>
                    <p className="text-sm text-muted-foreground">Featured Post</p>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    <Link href={featuredPost.slug} className="hover:text-primary transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button className="gap-2" asChild>
                    <Link href={featuredPost.slug}>
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.title} className="border-0 shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
                  <CardHeader className="pb-2">
                    <Badge variant="outline" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg">
                      <Link href={post.slug} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-4 line-clamp-2">
                      {post.description}
                    </CardDescription>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline">
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest posts delivered straight to your inbox. No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Try Brokle free and see what&apos;s happening inside your LLM applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://app.brokle.ai/signup">
                  Start Free <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">
                  Read the Docs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
