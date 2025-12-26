'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Puzzle, Code, Server } from 'lucide-react';

const tabs = [
  {
    title: 'Documentation',
    href: '/docs/documentation',
    icon: BookOpen,
  },
  {
    title: 'Integrations',
    href: '/docs/integrations',
    icon: Puzzle,
  },
  {
    title: 'SDK & API',
    href: '/docs/sdk',
    icon: Code,
  },
  {
    title: 'Self Hosting',
    href: '/docs/self-hosting',
    icon: Server,
  },
];

export function DocsNavTabs() {
  const pathname = usePathname();

  return (
    <div className="border-b bg-background">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto py-2">
          {tabs.map((tab) => {
            const isActive = pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <tab.icon className="size-4" />
                {tab.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
