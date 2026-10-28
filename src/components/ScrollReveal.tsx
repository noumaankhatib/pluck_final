"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

/**
 * Section wrapper that reveals its `.sr` children (staggered via --d) the first time it scrolls into
 * view. Content is fully visible without JavaScript and under reduced motion; hiding is only "armed"
 * once this component has mounted and motion is allowed.
 */
export default function ScrollReveal({ children, className, ...rest }: { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.sr = "armed";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.sr = "shown";
        io.disconnect();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={className} {...rest}>
      {children}
    </section>
  );
}
