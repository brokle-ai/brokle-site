'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center rounded-full border bg-muted/50 p-0.5">
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`inline-flex items-center justify-center rounded-full p-1.5 transition-colors ${
          theme === 'light'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Light mode"
      >
        <Sun className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('system')}
        className={`inline-flex items-center justify-center rounded-full p-1.5 transition-colors ${
          theme === 'system'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="System preference"
      >
        <Monitor className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`inline-flex items-center justify-center rounded-full p-1.5 transition-colors ${
          theme === 'dark'
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Dark mode"
      >
        <Moon className="size-4" />
      </button>
    </div>
  );
}
