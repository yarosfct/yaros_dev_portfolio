"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

const SPOT_SIZE = 460;
const SPOT_RADIUS = SPOT_SIZE / 2;
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
 * Draws only a small circular region each frame onto a canvas, using a
 * pre-rasterized pattern tile (no full-viewport SVG mask updates).
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
      paint(current.current);
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

    const paint = (point: Point) => {
      const pad = SPOT_RADIUS * 1.15;
      if (prev) {
        ctx.clearRect(prev.x - pad, prev.y - pad, pad * 2, pad * 2);
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }

      const tile = tileRef.current;
      if (!tileReady || !tile) {
        prev = point;
        return;
      }

      const x = point.x;
      const y = point.y;

      // Soft spotlight glow (cheap fill).
      const glow = ctx.createRadialGradient(x, y, 0, x, y, SPOT_RADIUS * 1.05);
      glow.addColorStop(0, "rgba(59, 130, 246, 0.10)");
      glow.addColorStop(0.45, "rgba(59, 130, 246, 0.04)");
      glow.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(x - SPOT_RADIUS * 1.05, y - SPOT_RADIUS * 1.05, SPOT_SIZE * 1.1, SPOT_SIZE * 1.1);

      // Pattern clipped to soft circle.
      ctx.save();
      const clip = ctx.createRadialGradient(x, y, 0, x, y, SPOT_RADIUS);
      clip.addColorStop(0, "rgba(0,0,0,1)");
      clip.addColorStop(0.42, "rgba(0,0,0,1)");
      clip.addColorStop(0.72, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(x, y, SPOT_RADIUS, 0, Math.PI * 2);
      ctx.clip();

      ctx.globalAlpha = 0.95;
      const left = x - SPOT_RADIUS;
      const top = y - SPOT_RADIUS;
      const startCol = Math.floor(left / TILE);
      const endCol = Math.floor((x + SPOT_RADIUS) / TILE);
      const startRow = Math.floor(top / TILE);
      const endRow = Math.floor((y + SPOT_RADIUS) / TILE);

      for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
          ctx.drawImage(tile, col * TILE, row * TILE, TILE, TILE);
        }
      }

      // Soft edge fade using destination-in gradient.
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = clip;
      ctx.fillRect(left, top, SPOT_SIZE, SPOT_SIZE);
      ctx.restore();
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      prev = { x, y };
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

      if (!canHover) {
        // Static center for touch — paint once then stop.
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
      if (dx * dx + dy * dy < SETTLE_PX * SETTLE_PX) {
        current.current.x = target.current.x;
        current.current.y = target.current.y;
        paint(current.current);
        stop();
        return;
      }

      frame.current = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      frame.current = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!canHover) return;
      target.current = { x: event.clientX, y: event.clientY };
      start();
    };

    const onVisibility = () => {
      if (document.hidden) stop();
    };

    let cancelled = false;
    ensureTile().then(() => {
      if (cancelled) return;
      resize();
      if (!canHover) {
        paint(current.current);
      }
    });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      stop();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mounted, isDark, canHover, reducedMotion]);

  if (!mounted || !isDark) return null;

  return <canvas ref={canvasRef} className="cursor-spotlight" aria-hidden />;
}
