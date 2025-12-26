'use client';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import type { PageTree } from 'fumadocs-core/server';

interface DocsLayoutWrapperProps {
  children: ReactNode;
  pageTree: PageTree.Root;
}

// These are the separate tab sections
const TAB_SECTIONS = ['integrations', 'sdk', 'self-hosting'];

export function DocsLayoutWrapper({ children, pageTree }: DocsLayoutWrapperProps) {
  const pathname = usePathname();

  // Check if we're on a tab section
  const activeTabSection = TAB_SECTIONS.find((section) =>
    pathname.startsWith(`/docs/${section}`)
  );

  const filteredTree: PageTree.Root = {
    name: pageTree.name,
    children: [],
  };

  if (pageTree.children) {
    if (activeTabSection) {
      // We're on a tab section - find and show that folder's content
      const matchingFolder = pageTree.children.find((node) => {
        if (node.type !== 'folder') return false;
        // Match by index URL
        if (node.index?.url === `/docs/${activeTabSection}`) return true;
        if (node.index?.url?.startsWith(`/docs/${activeTabSection}/`)) return true;
        // Check first child URL (for folders where index IS the first child)
        const firstChild = node.children?.[0];
        if (firstChild?.type === 'page') {
          const url = (firstChild as any).url;
          if (url === `/docs/${activeTabSection}`) return true;
          if (url?.startsWith(`/docs/${activeTabSection}/`)) return true;
        }
        return false;
      });

      if (matchingFolder && matchingFolder.type === 'folder') {
        const items: PageTree.Node[] = [];
        if (matchingFolder.index) {
          items.push({
            type: 'page',
            name: matchingFolder.index.name || matchingFolder.name,
            url: matchingFolder.index.url,
          } as PageTree.Item);
        }
        items.push(...(matchingFolder.children || []));
        filteredTree.children = items;
      }
    } else {
      // We're on main docs - show everything EXCEPT the tab section folders
      filteredTree.children = pageTree.children.filter((node) => {
        if (node.type === 'folder') {
          // Exclude tab section folders from main docs sidebar
          const isTabSection = TAB_SECTIONS.some((section) => {
            if (node.index?.url === `/docs/${section}`) return true;
            if (node.index?.url?.startsWith(`/docs/${section}/`)) return true;
            const firstChild = node.children?.[0];
            if (firstChild?.type === 'page') {
              const url = (firstChild as any).url;
              if (url === `/docs/${section}`) return true;
              if (url?.startsWith(`/docs/${section}/`)) return true;
            }
            return false;
          });
          return !isTabSection;
        }
        return true;
      });
    }
  }

  return (
    <DocsLayout
      tree={filteredTree}
      nav={{ enabled: false }}
      links={[]}
      sidebar={{
        collapsible: false,
        banner: undefined,
      }}
      themeSwitch={{ enabled: false }}
      searchToggle={{ enabled: false }}
    >
      {children}
    </DocsLayout>
  );
}
