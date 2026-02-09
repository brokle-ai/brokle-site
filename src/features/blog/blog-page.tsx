'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroBackground, DisplayHeading } from '@/components/shared';
import { useSearchParams, useRouter } from 'next/navigation';

export interface BlogPostData {
  title: string;
  description?: string;
  authors: string[];
  date: string;
  tags: string[];
  url: string;
  image?: string;
}

interface BlogPageProps {
  posts: BlogPostData[];
  tags: string[];
}

export default function BlogPage({ posts, tags }: BlogPageProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTag = searchParams.get('tag');

  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const allTags = ['All', ...tags];

  function handleTagClick(tag: string) {
    if (tag === 'All') {
      router.push('/blog', { scroll: false });
    } else {
      router.push(`/blog?tag=${encodeURIComponent(tag)}`, { scroll: false });
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <HeroBackground />
        <div className="container px-4 md:px-8 mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <DisplayHeading as="h1">Blog</DisplayHeading>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Technical guides and updates from the Brokle team.
              {' '}See <Link href="/changelog" className="underline hover:text-foreground transition-colors">Changelog</Link> for more product updates.
            </p>
          </div>
        </div>
      </section>

      {/* Tags */}
      {tags.length > 0 && (
        <section className="py-8">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={
                      (tag === 'All' && !activeTag) || tag === activeTag
                        ? 'default'
                        : 'outline'
                    }
                    size="sm"
                    onClick={() => handleTagClick(tag)}
                  >
                    {capitalize(tag)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 && (
        <section className="py-12">
          <div className="container px-4 md:px-8 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.url}
                    href={post.url}
                    className="group block"
                  >
                    <article className="rounded-lg overflow-hidden bg-muted/30 transition-colors hover:bg-muted/50">
                      {post.image && (
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {capitalize(tag)}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                          <span>
                            by {post.authors.join(', ')}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest posts delivered straight to your inbox. No spam,
              unsubscribe anytime.
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
    </>
  );
}
