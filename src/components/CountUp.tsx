"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  comma?: boolean; // group the integer part with thousands separators
  duration?: number; // ms
};

/** Format a value exactly the way the final figure is written, so every frame — and the no-JS value — matches. */
function fmt(n: number, { prefix = "", suffix = "", decimals = 0, comma = false }: Props): string {
  let s = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
  if (comma) {
    const [int, dec] = s.split(".");
    s = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (dec ? "." + dec : "");
  }
  return prefix + s + suffix;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts a single statistic up to its final value the first time it scrolls into view. The final value is
 * rendered on the server and without JavaScript, so the figure is always correct; counting only layers on
 * when motion is allowed. Digits are tabular so the figure never reflows while it climbs.
 */
export default function CountUp(props: Props) {
  const { to, duration = 1200 } = props;
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => fmt(to, props));

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setDisplay(fmt(0, props)); // before paint, so there is no flash of the final value
    let raf = 0;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / duration, 1);
      setDisplay(fmt(to * easeOut(t), props));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        raf = requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className="count">
      {display}
    </span>
  );
}
