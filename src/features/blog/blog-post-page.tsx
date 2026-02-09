import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getAuthors, getInitials } from '@/data/authors';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface BlogPostPageProps {
  title: string;
  description?: string;
  authorIds: string[];
  date: string;
  readingTime: string;
  tags: string[];
  children: ReactNode;
  relatedPosts?: {
    title: string;
    description?: string;
    url: string;
    date: string;
  }[];
}

export default function BlogPostPage({
  title,
  description,
  authorIds,
  date,
  readingTime,
  tags,
  children,
  relatedPosts,
}: BlogPostPageProps) {
  const authors = getAuthors(authorIds);
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Header */}
      <header className="border-b bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl py-12 md:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                >
                  <Badge
                    variant="secondary"
                    className="hover:bg-secondary/80 transition-colors cursor-pointer"
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-lg text-muted-foreground mb-6">{description}</p>
          )}

          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              {authors.map((author) => (
                <div key={author.name} className="flex items-center gap-2">
                  {author.avatar ? (
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                      {getInitials(author.name)}
                    </span>
                  )}
                  <span className="font-medium text-foreground">
                    {author.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {readingTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="container px-4 md:px-8 mx-auto max-w-3xl py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {children}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="border-t bg-muted/30 py-12">
          <div className="container px-4 md:px-8 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map((post) => (
                <Card
                  key={post.url}
                  className="border-0 shadow-none bg-background hover:bg-accent/50 transition-colors"
                >
                  <CardContent className="p-4">
                    <Link
                      href={post.url}
                      className="font-medium hover:text-primary transition-colors line-clamp-2"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
