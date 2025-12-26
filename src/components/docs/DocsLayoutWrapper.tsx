'use client';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { TAB_SECTIONS, type TabSection } from '@/config/docs-tabs';
import {
  filterPageTreeBySection,
  filterPageTreeExcludeSections,
  PageTree,
} from '@/lib/docs-utils';

interface DocsLayoutWrapperProps {
  children: ReactNode;
  pageTree: PageTree.Root;
}

export function DocsLayoutWrapper({
  children,
  pageTree,
}: DocsLayoutWrapperProps) {
  const pathname = usePathname();

  // Check if we're on a tab section
  const activeTabSection = TAB_SECTIONS.find((section) =>
    pathname.startsWith(`/docs/${section}`)
  ) as TabSection | undefined;

  // Build filtered tree based on current section
  const filteredTree: PageTree.Root = {
    name: pageTree.name,
    children: activeTabSection
      ? filterPageTreeBySection(pageTree, activeTabSection)
      : filterPageTreeExcludeSections(pageTree),
  };

  return (
    <DocsLayout
      tree={filteredTree}
      // Disabled: Using custom Navbar component instead
      nav={{ enabled: false }}
      links={[]}
      sidebar={{
        collapsible: false,
        banner: undefined,
      }}
      // Disabled: Theme toggle is in Footer instead
      themeSwitch={{ enabled: false }}
      // Disabled: Search is in custom Navbar instead
      searchToggle={{ enabled: false }}
    >
      {children}
    </DocsLayout>
  );
}
