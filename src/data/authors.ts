export interface Author {
  name: string;
  title: string;
  avatar?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
}

export const authors: Record<string, Author> = {
  hashir: {
    name: 'Hashir',
    title: 'Founder',
  },
  sarah: {
    name: 'Sarah Chen',
    title: 'Engineering',
  },
};

export function getAuthor(id: string): Author {
  return authors[id] ?? { name: id, title: '' };
}

export function getAuthors(ids: string[]): Author[] {
  return ids.map((id) => getAuthor(id));
}

export function getAuthorNames(ids: string[]): string {
  return getAuthors(ids)
    .map((a) => a.name)
    .join(', ');
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
