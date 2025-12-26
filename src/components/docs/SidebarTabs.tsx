'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Code, Server, FileJson } from 'lucide-react';

const tabs = [
  {
    title: 'Docs',
    href: '/docs',
    icon: BookOpen,
    pattern: /^\/docs($|\/(?!(sdk|self-hosting|api-reference)))/,
  },
  {
    title: 'SDK',
    href: '/docs/sdk',
    icon: Code,
    pattern: /^\/docs\/sdk/,
  },
  {
    title: 'Self Hosting',
    href: '/docs/self-hosting',
    icon: Server,
    pattern: /^\/docs\/self-hosting/,
  },
  {
    title: 'API Reference',
    href: '/docs/api-reference',
    icon: FileJson,
    pattern: /^\/docs\/api-reference/,
  },
];

export function SidebarTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1 p-2">
      {tabs.map((tab) => {
        const isActive = tab.pattern.test(pathname);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <div
              className={`flex items-center justify-center rounded-md p-1.5 ${
                isActive ? 'bg-primary/10' : 'bg-muted'
              }`}
            >
              <tab.icon className="size-4" />
            </div>
            {tab.title}
          </Link>
        );
      })}
    </div>
  );
}
