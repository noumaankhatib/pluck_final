"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

/**
 * Section wrapper that reveals its `.sr` children (staggered via --d) the first time it scrolls into
 * view. Content is fully visible without JavaScript and under reduced motion; hiding is only "armed"
 * once this component has mounted and motion is allowed.
 */
export default function ScrollReveal({ children, className, as: Tag = "section", ...rest }: { children: ReactNode; className?: string; as?: "section" | "footer" } & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.sr = "armed";
    const io = new IntersectionObserver(
      ([entry]) => {
        // Wait until a good share of the section is on screen (or, for sections taller than the screen, half the viewport).
        const vh = entry.rootBounds?.height ?? window.innerHeight;
        if (!entry.isIntersecting || (entry.intersectionRatio < 0.4 && entry.intersectionRect.height < vh * 0.5)) return;
        el.dataset.sr = "shown";
        io.disconnect();
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
