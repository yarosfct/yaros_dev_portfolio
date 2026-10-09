"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

/** Visual spotlight radius (soft falloff reaches 0 here). */
const FADE_RADIUS = 270;
/** Clear/draw pad — larger than fade so the gradient isn't clipped. */
const DRAW_PAD = FADE_RADIUS + 48;
const TILE = 800;
const LERP = 0.2;
const SETTLE_PX = 0.5;

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
 * Dark-theme cursor spotlight.
 * Pattern is document-anchored (scrolls with the page); the spotlight stays
 * under the cursor in viewport space. Only the spotlight region is redrawn.
 */
export function CursorSpotlight() {
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tileRef = useRef<HTMLCanvasElement | null>(null);
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

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return undefined;

    let running = false;
    /** Keep the rAF loop alive for one more frame (scroll while settled). */
    let keepAlive = false;
    let tileReady = false;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let prev: Point | null = null;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      prev = null;
      schedulePaint();
    };

    const ensureTile = () =>
      new Promise<void>((resolve) => {
        if (tileRef.current) {
          tileReady = true;
          resolve();
          return;
        }
        const img = new Image();
        img.decoding = "async";
        img.src = "/patterns/folk-outline.webp";
        img.onload = () => {
          const tile = document.createElement("canvas");
          tile.width = TILE;
          tile.height = TILE;
          const tctx = tile.getContext("2d");
          if (tctx) {
            tctx.clearRect(0, 0, TILE, TILE);
            tctx.drawImage(img, 0, 0, TILE, TILE);
            tileRef.current = tile;
            tileReady = true;
          }
          resolve();
        };
        img.onerror = () => resolve();
      });

    const clearSpot = (point: Point) => {
      ctx.clearRect(point.x - DRAW_PAD, point.y - DRAW_PAD, DRAW_PAD * 2, DRAW_PAD * 2);
    };

    const paint = (point: Point) => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      if (prev) clearSpot(prev);
      if (!prev) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }

      const tile = tileRef.current;
      if (!tileReady || !tile) {
        prev = { ...point };
        return;
      }

      const x = point.x;
      const y = point.y;

      // Draw glow + pattern into the pad, then mask both with one soft falloff
      // so their edges match (avoids a glow/pattern double-ring).
      ctx.save();
      ctx.beginPath();
      ctx.rect(x - DRAW_PAD, y - DRAW_PAD, DRAW_PAD * 2, DRAW_PAD * 2);
      ctx.clip();

      const glow = ctx.createRadialGradient(x, y, 0, x, y, FADE_RADIUS);
      glow.addColorStop(0, "rgba(59, 130, 246, 0.05)");
      glow.addColorStop(0.45, "rgba(59, 130, 246, 0.02)");
      glow.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(x - DRAW_PAD, y - DRAW_PAD, DRAW_PAD * 2, DRAW_PAD * 2);

      // Document-anchored pattern: origin = (-scrollX, -scrollY).
      const docLeft = x - FADE_RADIUS + scrollX;
      const docTop = y - FADE_RADIUS + scrollY;
      const docRight = x + FADE_RADIUS + scrollX;
      const docBottom = y + FADE_RADIUS + scrollY;
      const startCol = Math.floor(docLeft / TILE);
      const endCol = Math.floor(docRight / TILE);
      const startRow = Math.floor(docTop / TILE);
      const endRow = Math.floor(docBottom / TILE);

      ctx.globalAlpha = 0.68;
      for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
          ctx.drawImage(tile, col * TILE - scrollX, row * TILE - scrollY, TILE, TILE);
        }
      }
      ctx.globalAlpha = 1;

      // Smooth falloff to 0 — softer at dead center for text readability.
      // Draw pad > fade radius so the gradient is never clipped.
      ctx.globalCompositeOperation = "destination-in";
      const falloff = ctx.createRadialGradient(x, y, 0, x, y, FADE_RADIUS);
      falloff.addColorStop(0, "rgba(0,0,0,0.28)");
      falloff.addColorStop(0.2, "rgba(0,0,0,0.62)");
      falloff.addColorStop(0.42, "rgba(0,0,0,0.48)");
      falloff.addColorStop(0.62, "rgba(0,0,0,0.28)");
      falloff.addColorStop(0.8, "rgba(0,0,0,0.12)");
      falloff.addColorStop(0.92, "rgba(0,0,0,0.035)");
      falloff.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = falloff;
      ctx.fillRect(x - DRAW_PAD, y - DRAW_PAD, DRAW_PAD * 2, DRAW_PAD * 2);

      ctx.restore();
      ctx.globalCompositeOperation = "source-over";

      prev = { x, y };
    };

    const stop = () => {
      running = false;
      keepAlive = false;
      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
        frame.current = 0;
      }
    };

    const tick = () => {
      if (!running) return;

      if (!canHover) {
        paint(current.current);
        stop();
        return;
      }

      const ease = reducedMotion ? 1 : LERP;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;
      paint(current.current);

      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      const settled = dx * dx + dy * dy < SETTLE_PX * SETTLE_PX;

      if (settled) {
        current.current.x = target.current.x;
        current.current.y = target.current.y;
        paint(current.current);
      }

      // Scroll (or another move) arrived while this frame was in flight — keep going.
      if (!settled || keepAlive) {
        keepAlive = false;
        frame.current = window.requestAnimationFrame(tick);
        return;
      }

      stop();
    };

    const schedulePaint = () => {
      if (document.hidden) return;

      if (!canHover) {
        paint(current.current);
        return;
      }

      if (running) {
        keepAlive = true;
        return;
      }

      running = true;
      frame.current = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!canHover) return;
      target.current = { x: event.clientX, y: event.clientY };
      schedulePaint();
    };

    const onScroll = () => {
      schedulePaint();
    };

    const onVisibility = () => {
      if (document.hidden) stop();
    };

    let cancelled = false;
    ensureTile().then(() => {
      if (cancelled) return;
      resize();
      if (!canHover) paint(current.current);
    });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      stop();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mounted, isDark, canHover, reducedMotion]);

  if (!mounted || !isDark) return null;

  return <canvas ref={canvasRef} className="cursor-spotlight" aria-hidden />;
}
