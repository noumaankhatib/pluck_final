import type { CSSProperties } from "react";

/** Layout unit: exactly 1px at the 1440px reference width, proportional below it (see globals.css). */
export const u = (n: number) => `calc(var(--u) * ${n})`;

/** Max width at the 1440px reference, in px (released when the layout stacks). Applied through `.mw`. */
export const mw = (n: number): CSSProperties => ({ "--mw": n }) as CSSProperties;

/** Type size/line-height at the 1440px reference, in px. Applied through the `.f` class. */
export const f = (fs: number, lh: number, extra: CSSProperties = {}): CSSProperties =>
  ({ "--fs": fs, "--lh": lh, ...extra }) as CSSProperties;

/** Staggered reveal delay, in seconds (read by `.sr` / `.reveal`). */
export const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;
