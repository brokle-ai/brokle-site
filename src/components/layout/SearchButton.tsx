'use client';

import { useSearchContext } from 'fumadocs-ui/contexts/search';
import { Search } from 'lucide-react';

interface SearchButtonProps {
  iconOnly?: boolean;
}

export function SearchButton({ iconOnly }: SearchButtonProps) {
  const { setOpenSearch, hotKey } = useSearchContext();

  if (iconOnly) {
    return (
      <button
        type="button"
        onClick={() => setOpenSearch(true)}
        className="inline-flex items-center justify-center rounded-lg border bg-secondary/50 p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Search className="size-4" />
        <span className="sr-only">Search</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpenSearch(true)}
      className="inline-flex items-center gap-2 rounded-lg border bg-secondary/50 p-1.5 ps-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <Search className="size-4" />
      Search
      <div className="ms-auto inline-flex gap-0.5">
        {hotKey.map((k, i) => (
          <kbd key={i} className="rounded-md border bg-background px-1.5">
            {k.display}
          </kbd>
        ))}
      </div>
    </button>
  );
}
