"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";

type NavItem = { href: string; label: string };

const fs = (size: number, lh: number): CSSProperties => ({ "--fs": size, "--lh": lh }) as CSSProperties;

/**
 * Compact section navigation for narrow screens. A "Menu" button reveals a panel with the section links and
 * the primary CTA. The panel is kept out of the tab order and the accessibility tree while closed (`inert`),
 * closes on Escape, on an outside click, and after a link is chosen, and returns focus to the button when
 * dismissed. Shown only below the header's mobile breakpoint (see .menu in globals.css).
 */
export default function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      btnRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!(e.target instanceof Node)) return;
      if (btnRef.current?.contains(e.target) || panelRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div className="menu">
      <button
        ref={btnRef}
        type="button"
        className="menu-toggle f"
        style={fs(17, 24)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <div id="mobile-menu" ref={panelRef} className="menu-panel" data-open={open || undefined} inert={!open}>
        <nav aria-label="Sections">
          {items.map((n) => (
            <Link key={n.label} href={n.href} className="menu-link f" style={fs(20, 26)} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn menu-cta" onClick={() => setOpen(false)}>
            Talk to us
          </Link>
        </nav>
      </div>
    </div>
  );
}
