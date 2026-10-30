"use client";

import { useId, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";

const f = (fs: number, lh: number, extra: CSSProperties = {}): CSSProperties =>
  ({ "--fs": fs, "--lh": lh, ...extra }) as CSSProperties;

/**
 * One process stage. The opening line is always visible; the rest sits in a collapsible panel controlled by
 * a single Read more / Read less button (aria-expanded + aria-controls). The panel animates its height with a
 * grid-rows transition and is not focusable or announced while collapsed.
 */
export default function StepCard({ delay, title, img, lead, children }: { delay: number; title: string; img: string; lead: string; children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="step sr sr--up" style={{ "--d": `${delay}s` } as CSSProperties} data-open={open || undefined}>
      <h3 className="f" style={f(34, 52)}>{title}</h3>
      <Image className="step__img" src={img} alt="" width={1254} height={1254} />
      <p className="step__lead f" style={f(20, 29.4)}>{lead}</p>
      {children ? (
        <>
          <button type="button" className="step__more f" style={f(16, 20)} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
            {open ? "Read less" : "Read more"}
          </button>
          <div id={panelId} className="step__panel" data-open={open || undefined}>
            <div className="step__panel-inner">
              <div className="step__body f" style={f(20, 29.4)}>{children}</div>
            </div>
          </div>
        </>
      ) : null}
    </article>
  );
}
