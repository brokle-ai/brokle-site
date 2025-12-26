'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DOCS_TABS } from '@/config/docs-tabs';

export function DocsNavTabs() {
  const pathname = usePathname();

  // Check if we're on a sub-section (integrations, sdk, self-hosting)
  const isOnSubSection = DOCS_TABS.slice(1).some((tab) =>
    pathname.startsWith(tab.href)
  );

  return (
    <div className="border-b bg-background">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto py-2">
          {DOCS_TABS.map((tab) => {
            // For root tab, it's active when NOT on any sub-section
            const isActive = tab.isRoot
              ? !isOnSubSection
              : pathname.startsWith(tab.href);
            const Icon = tab.icon;
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
                <Icon className="size-4" />
                {tab.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
