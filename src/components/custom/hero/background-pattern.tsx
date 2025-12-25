'use client';

import DotPattern from "@/components/ui/dot-pattern";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const BackgroundPattern = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to dark particles for SSR (most users expect dark mode)
  // This matches the system default and prevents flicker
  const particleColor = mounted && resolvedTheme === "light" ? "#000" : "#fff";

  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(ellipse,rgba(0,0,0,0.3)_30%,black_50%)]",
          "dark:fill-slate-700"
        )}
      />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={particleColor}
        refresh
      />
    </>
  );
};
