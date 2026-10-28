"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/** Footage colours (0-255 per channel, R/G/B): its paper background and its darkest linework. */
export type Tone = { bg: [number, number, number]; dark: [number, number, number] };

const CREAM = [250, 249, 243]; // --cream
const FOREST = [18, 61, 50]; // --forest
const KNEE = 10; // footage within this many levels of its background becomes exactly cream (removes paper grain)

/** 256-step lookup for one channel: darkest linework -> forest, background (minus knee) -> cream, clamped above. */
function table(bg: number, dark: number, ch: number) {
  const top = bg - KNEE;
  return Array.from({ length: 256 }, (_, i) => {
    const t = Math.min(Math.max((i - dark) / (top - dark), 0), 1);
    return (((FOREST[ch] + t * (CREAM[ch] - FOREST[ch])) / 255)).toFixed(4);
  }).join(" ");
}

type Props = {
  id: string; // unique SVG filter id
  src: string;
  poster: string;
  still: string; // approved still shown for reduced motion / load failure
  stillSize: [number, number];
  label: string;
  tone: Tone;
  className?: string; // sizing/aspect of the frame
  videoClassName?: string;
};

/**
 * Silent looping illustration. The frame has a fixed aspect ratio (no layout shift while loading).
 * The SVG filter maps the footage's off-white background to the page cream and its linework to the
 * forest green; the footage itself is never altered or re-timed. Falls back to the approved still
 * under reduced motion or if the video fails to load.
 */
export default function LoopVideo({ id, src, poster, still, stillSize, label, tone, className = "", videoClassName = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Detect load failure. <source> errors don't reach React's onError reliably, and may fire before hydration,
  // so listen natively, check the current state, and give up if nothing has loaded after a few seconds.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const fail = () => setFailed(true);
    const sources = Array.from(v.querySelectorAll("source"));
    v.addEventListener("error", fail);
    sources.forEach((s) => s.addEventListener("error", fail));
    if (v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) fail();
    const timer = window.setTimeout(() => {
      if (v.readyState === 0) fail();
    }, 8000);
    return () => {
      v.removeEventListener("error", fail);
      sources.forEach((s) => s.removeEventListener("error", fail));
      window.clearTimeout(timer);
    };
  }, [reduced]);

  // Pause while off-screen so the decorative loop doesn't spend CPU.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, [reduced, failed]);

  return (
    <div className={`media-frame ${className}`} role="img" aria-label={label}>
      {reduced || failed ? (
        <Image src={still} alt="" width={stillSize[0]} height={stillSize[1]} priority={id === "pluck-tone-hero"} />
      ) : (
        <>
          <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
            <filter id={id} colorInterpolationFilters="sRGB">
              <feComponentTransfer>
                <feFuncR type="table" tableValues={table(tone.bg[0], tone.dark[0], 0)} />
                <feFuncG type="table" tableValues={table(tone.bg[1], tone.dark[1], 1)} />
                <feFuncB type="table" tableValues={table(tone.bg[2], tone.dark[2], 2)} />
              </feComponentTransfer>
            </filter>
          </svg>
          <video
            ref={ref}
            className={`media-video ${videoClassName}`}
            style={{ filter: `url(#${id})` }}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={src} type="video/mp4" />
          </video>
        </>
      )}
    </div>
  );
}
