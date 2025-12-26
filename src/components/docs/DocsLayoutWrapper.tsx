'use client';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import type { PageTree } from 'fumadocs-core/server';

interface DocsLayoutWrapperProps {
  children: ReactNode;
  pageTree: PageTree.Root;
}

export function DocsLayoutWrapper({ children, pageTree }: DocsLayoutWrapperProps) {
  const pathname = usePathname();

  // Get the current root section from the path (e.g., /docs/documentation/... -> documentation)
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentRoot = pathSegments[1]; // After 'docs'

  // Find the matching folder in the page tree and use its children
  const filteredTree: PageTree.Root = {
    name: pageTree.name,
    children: [],
  };

  if (currentRoot && pageTree.children) {
    // Find folder that matches the current URL segment
    const matchingFolder = pageTree.children.find((node) => {
      if (node.type !== 'folder') return false;

      // Method 1: Check index URL
      if (node.index?.url?.startsWith(`/docs/${currentRoot}`)) {
        return true;
      }

      // Method 2: Check if any child page URL starts with the current root
      const hasMatchingChild = node.children?.some((child) => {
        if (child.type === 'page' && child.url?.startsWith(`/docs/${currentRoot}`)) {
          return true;
        }
        return false;
      });

      return hasMatchingChild;
    });

    if (matchingFolder && matchingFolder.type === 'folder') {
      // Include the index page if it exists, plus all children
      const children: PageTree.Node[] = [];
      if (matchingFolder.index) {
        children.push({
          type: 'page',
          name: matchingFolder.index.name || matchingFolder.name,
          url: matchingFolder.index.url,
        } as PageTree.Item);
      }
      children.push(...(matchingFolder.children || []));
      filteredTree.children = children;
    } else {
      // Fallback: show all content if no match found
      filteredTree.children = pageTree.children || [];
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
