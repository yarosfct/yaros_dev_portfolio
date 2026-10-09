"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Point = { x: number; y: number };

const LERP = 0.14;
const TILE_PX = 380;

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

export function CursorSpotlight() {
  const { resolvedTheme } = useTheme();
  const rootRef = useRef<HTMLDivElement>(null);
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

    const root = rootRef.current;
    if (!root) return undefined;

    let ambientT = 0;
    let running = true;

    const apply = (point: Point) => {
      root.style.setProperty("--spotlight-x", `${point.x}px`);
      root.style.setProperty("--spotlight-y", `${point.y}px`);
    };

    const tick = () => {
      if (!running) return;

      if (!canHover) {
        ambientT += reducedMotion ? 0 : 0.004;
        const w = window.innerWidth;
        const h = window.innerHeight;
        target.current = {
          x: w * (0.5 + Math.sin(ambientT) * 0.22),
          y: h * (0.42 + Math.cos(ambientT * 0.8) * 0.16)
        };
      }

      const ease = reducedMotion ? 1 : LERP;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;
      apply(current.current);

      frame.current = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!canHover) return;
      target.current = { x: event.clientX, y: event.clientY };
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        if (frame.current) window.cancelAnimationFrame(frame.current);
        frame.current = 0;
        return;
      }
      if (!running) {
        running = true;
        frame.current = window.requestAnimationFrame(tick);
      }
    };

    apply(current.current);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    frame.current = window.requestAnimationFrame(tick);

    return () => {
      running = false;
      if (frame.current) window.cancelAnimationFrame(frame.current);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mounted, isDark, canHover, reducedMotion]);

  if (!mounted || !isDark) return null;

  return (
    <div
      ref={rootRef}
      className="cursor-spotlight"
      aria-hidden
      style={
        {
          "--spotlight-x": "55%",
          "--spotlight-y": "35%",
          "--folk-tile": `${TILE_PX}px`
        } as CSSProperties
      }
    >
      <div className="cursor-spotlight__glow" />
      <div className="cursor-spotlight__reveal">
        <div className="cursor-spotlight__pattern" />
      </div>
    </div>
  );
}
