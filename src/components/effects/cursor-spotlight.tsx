"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

const LERP = 0.22;
const SETTLE_PX = 0.4;

function useMedia(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/**
 * Dark-theme cursor spotlight (compositor-native).
 * Pattern lives in document flow and scrolls with the page — no JS on scroll.
 * A fixed radial-mask overlay follows the cursor via transform only.
 */
export function CursorSpotlight() {
  const { resolvedTheme } = useTheme();
  const maskRef = useRef<HTMLDivElement>(null);
  const target = useRef<Point>({ x: 0, y: 0 });
  const current = useRef<Point>({ x: 0, y: 0 });
  const frame = useRef(0);
  const [mounted, setMounted] = useState(false);

  const canHover = useMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = useMedia("(prefers-reduced-motion: reduce)");
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const mid = { x: window.innerWidth * 0.55, y: window.innerHeight * 0.35 };
    target.current = mid;
    current.current = mid;
  }, []);

  useEffect(() => {
    if (!mounted || !isDark) return undefined;

    const mask = maskRef.current;
    if (!mask) return undefined;

    let running = false;

    const apply = (point: Point) => {
      mask.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
    };

    const stop = () => {
      running = false;
      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
        frame.current = 0;
      }
    };

    const tick = () => {
      if (!running) return;

      const ease = reducedMotion ? 1 : LERP;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;
      apply(current.current);

      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      if (dx * dx + dy * dy < SETTLE_PX * SETTLE_PX) {
        current.current.x = target.current.x;
        current.current.y = target.current.y;
        apply(current.current);
        stop();
        return;
      }

      frame.current = window.requestAnimationFrame(tick);
    };

    const schedule = () => {
      if (document.hidden || !canHover) return;
      if (running) return;
      running = true;
      frame.current = window.requestAnimationFrame(tick);
    };

    // Touch / coarse pointer: static faint reveal, no tracking.
    if (!canHover) {
      apply(current.current);
      return undefined;
    }

    apply(current.current);

    const onPointerMove = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      schedule();
    };

    const onVisibility = () => {
      if (document.hidden) stop();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mounted, isDark, canHover, reducedMotion]);

  if (!mounted || !isDark) return null;

  return (
    <div className="spotlight-root" aria-hidden>
      <div className="spotlight-pattern" />
      <div
        ref={maskRef}
        className={canHover ? "spotlight-mask" : "spotlight-mask spotlight-mask--static"}
      />
    </div>
  );
}
