'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Intentional: We need this re-render after hydration to show correct theme state.
  // This is the recommended pattern from next-themes to avoid hydration mismatch.
  // See: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Render neutral state during SSR and initial client render
  // This ensures server and client HTML match exactly
  const getButtonClass = (buttonTheme: string) => {
    const baseClass =
      'inline-flex items-center justify-center rounded-full p-1.5 transition-colors';

    if (!mounted) {
      // During SSR/hydration: neutral inactive state for all buttons
      return `${baseClass} text-muted-foreground`;
    }

    // After mount: apply active state based on current theme
    return theme === buttonTheme
      ? `${baseClass} bg-background text-foreground shadow-sm`
      : `${baseClass} text-muted-foreground hover:text-foreground`;
  };

  return (
    <div className="inline-flex items-center rounded-full border bg-muted/50 p-0.5">
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={getButtonClass('light')}
        aria-label="Light mode"
      >
        <Sun className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('system')}
        className={getButtonClass('system')}
        aria-label="System preference"
      >
        <Monitor className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={getButtonClass('dark')}
        aria-label="Dark mode"
      >
        <Moon className="size-4" />
      </button>
    </div>
  );
}
