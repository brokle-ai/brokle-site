'use client';

import Link from 'next/link'
import { Menu, Search, MessageSquare, CheckSquare, Blocks, Github, Star, ExternalLink } from "lucide-react"
import { Button } from '@/components/ui/button'
import { BrokleLogo } from '@/components/ui/brokle-logo'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from '@/components/ui/badge'
import { AuthButtons } from './AuthButtons'
import { SearchButton } from './SearchButton'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from 'react';

interface NavbarContentProps {
  isScrolled: boolean;
  variant?: 'default' | 'docs';
}

const productLinks = [
  {
    title: "Tracing",
    href: "/tracing",
    description: "Detailed traces of every LLM call. Debug complex chains and understand model behavior.",
    icon: Search,
  },
  {
    title: "Prompt Management",
    href: "/prompt-management",
    description: "Version, test, and deploy prompts. Track changes and roll back instantly.",
    icon: MessageSquare,
  },
  {
    title: "Evaluation",
    href: "/evaluation",
    description: "Automated evals with LLM-as-judge. Build custom evaluators and run A/B tests.",
    icon: CheckSquare,
  },
]

const resourceLinks = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Comprehensive guides and API reference",
    external: false,
  },
  {
    title: "Integrations",
    href: "/docs/integrations",
    description: "SDKs and framework integrations",
    external: false,
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest news and engineering insights",
    external: false,
  },
  {
    title: "Changelog",
    href: "/changelog",
    description: "Product updates and new features",
    external: false,
  },
]

function GitHubStarsInline() {
  const [stars, setStars] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/github-stars')
      .then((res) => res.json())
      .then((data) => {
        const count = data.stars;
        if (typeof count === 'number') {
          setStars(count >= 1000 ? `${(count / 1000).toFixed(1)}k` : String(count));
        }
      })
      .catch(() => {
        // Silently fail - just show icon without count
      });
  }, []);

  return (
    <Link
      href="https://github.com/brokle-ai/brokle"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <Github className="h-4 w-4" />
      {stars && (
        <Badge variant="secondary" className="h-5 px-1.5 text-xs">
          <Star className="h-3 w-3 mr-0.5 fill-current" />
          {stars}
        </Badge>
      )}
    </Link>
  );
}

export default function NavbarContent({ isScrolled, variant = 'default' }: NavbarContentProps) {
  // In docs variant, parent handles sticky/scroll styling
  const headerClasses = variant === 'docs'
    ? 'w-full'
    : `sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`;

  return (
    <header className={headerClasses}>
      <div className="mx-auto w-full max-w-screen-2xl px-2 lg:px-6">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center">
              <BrokleLogo variant="full" size="md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Product Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {productLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                <link.icon className="h-4 w-4 text-primary" />
                                {link.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Pricing */}
                <NavigationMenuItem>
                  <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                    Pricing
                  </Link>
                </NavigationMenuItem>

                {/* Docs - Internal (no ExternalLink icon) */}
                <NavigationMenuItem>
                  <Link href="/docs" className={navigationMenuTriggerStyle()}>
                    Docs
                  </Link>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px]">
                      {resourceLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                {link.title}
                                {link.external && <ExternalLink className="h-3 w-3 opacity-50" />}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {link.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <SearchButton />
            <GitHubStarsInline />
            <AuthButtons />
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center lg:hidden space-x-2">
            <SearchButton iconOnly />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="px-2 py-6">
                    <Link href="/" className="flex items-center">
                      <BrokleLogo variant="full" size="md" />
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <Accordion type="single" collapsible className="flex-1 overflow-auto">
                    <AccordionItem value="product">
                      <AccordionTrigger className="px-2 py-3 text-sm font-medium">
                        <span className="flex items-center gap-2">
                          <Blocks className="h-4 w-4" />
                          Product
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-1 px-2 py-1">
                          {productLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-center gap-2 text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors"
                            >
                              <link.icon className="h-4 w-4 text-primary" />
                              {link.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <Link href="/pricing" className="flex items-center px-4 py-3 text-sm font-medium hover:bg-muted rounded-md transition-colors">
                      Pricing
                    </Link>

                    <Link
                      href="/docs"
                      className="flex items-center gap-1 px-4 py-3 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                    >
                      Docs
                    </Link>

                    <AccordionItem value="resources">
                      <AccordionTrigger className="px-2 py-3 text-sm font-medium">
                        <span className="flex items-center gap-2">
                          Resources
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-1 px-2 py-1">
                          {resourceLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              className="flex items-center gap-2 text-sm px-4 py-2 hover:bg-muted rounded-md transition-colors"
                            >
                              {link.title}
                              {link.external && <ExternalLink className="h-3 w-3 opacity-50" />}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* GitHub Link - Mobile */}
                  <div className="px-4 py-3 border-t">
                    <GitHubStarsInline />
                  </div>

                  {/* Mobile CTAs */}
                  <div className="mt-auto px-4 py-4 border-t">
                    <AuthButtons mobile />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
