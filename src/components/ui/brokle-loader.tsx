"use client";

interface BrokleLoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  forceTheme?: "light" | "dark";
}

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

export function BrokleLoader({
  size = "md",
  className = "",
  forceTheme,
}: BrokleLoaderProps) {
  const dimension = sizeMap[size];

  // If forceTheme is set, render only that theme's loader
  if (forceTheme) {
    const suffix = forceTheme === "dark" ? "-white" : "";
    return (
      <img
        src={`/logo/loading${suffix}.svg`}
        alt="Loading..."
        width={dimension}
        height={dimension}
        className={className}
        aria-label="Loading"
      />
    );
  }

  // CSS-based theme switching: render both images, CSS toggles visibility
  // This prevents hydration mismatch and FOUC (Flash of Unstyled Content)
  return (
    <span className={`inline-flex ${className}`}>
      {/* Light theme loader - visible by default, hidden in dark mode */}
      <img
        src="/logo/loading.svg"
        alt="Loading..."
        width={dimension}
        height={dimension}
        className="block dark:hidden"
        aria-label="Loading"
      />
      {/* Dark theme loader - hidden by default, visible in dark mode */}
      <img
        src="/logo/loading-white.svg"
        alt="Loading..."
        width={dimension}
        height={dimension}
        className="hidden dark:block"
        aria-label="Loading"
      />
    </span>
  );
}

export default BrokleLoader;
