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
    <div className="bg-transparent">
      <div className="mx-auto w-full max-w-screen-2xl px-2 lg:px-6">
        <nav className="flex items-center gap-6 overflow-x-auto">
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
                className={`inline-flex items-center gap-2 whitespace-nowrap border-b-2 pb-1.5 pt-2 text-sm transition-colors ${
                  isActive
                    ? 'border-brand text-brand font-semibold'
                    : 'border-transparent text-muted-foreground hover:text-foreground font-medium'
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
