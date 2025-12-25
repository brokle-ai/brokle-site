"use client";

import Link from 'next/link'
import { Github, Twitter, Linkedin } from "lucide-react"
import { BrokleLogo } from '@/components/ui/brokle-logo'

const footerLinks = {
  product: [
    { name: "Tracing", href: "/tracing" },
    { name: "Prompt Management", href: "/prompt-management" },
    { name: "Evaluation", href: "/evaluation" },
    { name: "Analytics", href: "/analytics" },
    { name: "Pricing", href: "/pricing" },
  ],
  developers: [
    { name: "Documentation", href: "/docs" },
    { name: "Python SDK", href: "/docs/sdk/python" },
    { name: "JavaScript SDK", href: "/docs/sdk/javascript" },
    { name: "API Reference", href: "/docs/api" },
    { name: "Status", href: "https://status.brokle.ai", external: true },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Changelog", href: "/changelog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/brokle-ai/brokle", icon: Github },
  { name: "Twitter", href: "https://twitter.com/brokle_ai", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/brokle", icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <BrokleLogo variant="full" size="sm" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Open source LLM observability platform. Debug and improve your AI applications.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Developers</h3>
            <ul className="space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Brokle, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/security" className="hover:text-foreground transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
