import type {
  Root as PageTreeRoot,
  Node as PageTreeNode,
  Folder as PageTreeFolder,
  Item as PageTreeItem,
} from 'fumadocs-core/page-tree';
import { TAB_SECTIONS, type TabSection } from '@/config/docs-tabs';

// Re-export PageTree namespace for use in other components
export namespace PageTree {
  export type Root = PageTreeRoot;
  export type Node = PageTreeNode;
  export type Folder = PageTreeFolder;
  export type Item = PageTreeItem;
}

/**
 * Check if a page tree node belongs to a specific tab section
 */
export function isTabSectionFolder(
  node: PageTree.Node,
  section: TabSection
): boolean {
  if (node.type !== 'folder') return false;

  // Check index URL
  const indexUrl = node.index?.url;
  if (
    indexUrl === `/docs/${section}` ||
    indexUrl?.startsWith(`/docs/${section}/`)
  ) {
    return true;
  }

  // Check first child URL (for folders where index IS the first child)
  const firstChild = node.children?.[0];
  if (firstChild?.type === 'page') {
    const url = firstChild.url;
    if (url === `/docs/${section}` || url?.startsWith(`/docs/${section}/`)) {
      return true;
    }
  }

  return false;
}

/**
 * Filter page tree to show only content from a specific tab section
 */
export function filterPageTreeBySection(
  pageTree: PageTree.Root,
  section: TabSection
): PageTree.Node[] {
  const matchingFolder = pageTree.children?.find((node: PageTreeNode) =>
    isTabSectionFolder(node, section)
  );

  if (matchingFolder?.type === 'folder') {
    const items: PageTree.Node[] = [];
    if (matchingFolder.index) {
      items.push({
        type: 'page',
        name: matchingFolder.index.name || matchingFolder.name,
        url: matchingFolder.index.url,
      } as PageTree.Item);
    }
    items.push(...(matchingFolder.children || []));
    return items;
  }

  return [];
}

/**
 * Filter page tree to exclude tab section folders (for main docs view)
 */
export function filterPageTreeExcludeSections(
  pageTree: PageTree.Root
): PageTree.Node[] {
  return (pageTree.children || []).filter((node: PageTreeNode) => {
    if (node.type !== 'folder') return true;
    return !TAB_SECTIONS.some((section) => isTabSectionFolder(node, section));
  });
}
