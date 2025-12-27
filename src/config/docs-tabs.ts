import { BookOpen, Puzzle, Code, Server, GraduationCap, type LucideIcon } from 'lucide-react';

export const TAB_SECTIONS = ['integrations', 'sdk', 'self-hosting', 'cookbook'] as const;
export type TabSection = (typeof TAB_SECTIONS)[number];

export interface NavTab {
  title: string;
  href: string;
  icon: LucideIcon;
  isRoot?: boolean;
}

export const DOCS_TABS: NavTab[] = [
  { title: 'Documentation', href: '/docs', icon: BookOpen, isRoot: true },
  { title: 'Integrations', href: '/docs/integrations', icon: Puzzle },
  { title: 'SDK & API', href: '/docs/sdk', icon: Code },
  { title: 'Self Hosting', href: '/docs/self-hosting', icon: Server },
  { title: 'Cookbook', href: '/docs/cookbook', icon: GraduationCap },
];
