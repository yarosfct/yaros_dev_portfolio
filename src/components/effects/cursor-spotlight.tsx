"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type Point = { x: number; y: number };
type Mode = "pending" | "hover" | "touch";

const LERP = 0.22;
const SETTLE_PX = 0.4;
const TOUCH_DIAMETER_VW = 0.6;
const TOUCH_RADIUS_VW = TOUCH_DIAMETER_VW / 2;
const TOUCH_MIN_JUMP = 0.28;
const TOUCH_GLIDE_MS = 750;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function touchRadiusPx() {
  return window.innerWidth * TOUCH_RADIUS_VW;
}

function clampTouchCenter(point: Point): Point {
  const pad = touchRadiusPx() * 0.85;
  return {
    x: Math.min(window.innerWidth - pad, Math.max(pad, point.x)),
    y: Math.min(window.innerHeight - pad, Math.max(pad, point.y))
  };
}

function randomTouchCenter(previous: Point): Point {
  const minDist = Math.min(window.innerWidth, window.innerHeight) * TOUCH_MIN_JUMP;
  const minDistSq = minDist * minDist;
  let next = previous;

  for (let attempt = 0; attempt < 16; attempt += 1) {
    next = clampTouchCenter({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    });
    const dx = next.x - previous.x;
    const dy = next.y - previous.y;
    if (dx * dx + dy * dy >= minDistSq) break;
  }

  return next;
}

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest("a, button, input, textarea, select, label, summary, [role='button']"));
}

/**
 * Folk spotlight mask.
 * - SSR / first paint: solid sealed cover (no hole), pattern opacity 0 in CSS.
 * - Desktop: hole opens on first pointermove, then tracks the cursor.
 * - Touch: fixed floating hole; tap inside the light to glide it elsewhere.
 */
export function CursorSpotlight() {
  const maskRef = useRef<HTMLDivElement>(null);
  const target = useRef<Point>({ x: 0, y: 0 });
  const current = useRef<Point>({ x: 0, y: 0 });
  const frame = useRef(0);
  const touchCenter = useRef<Point>({ x: 0, y: 0 });
  const [mode, setMode] = useState<Mode>("pending");
  const [hoverOpened, setHoverOpened] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;

    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setMode(hoverQuery.matches ? "hover" : "touch");
    update();
    hoverQuery.addEventListener("change", update);
    return () => hoverQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (mode === "pending") return undefined;

    document.documentElement.setAttribute("data-spotlight-ready", "");
    return () => {
      document.documentElement.removeAttribute("data-spotlight-ready");
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== "hover") return undefined;

    const mask = maskRef.current;
    if (!mask) return undefined;

    let running = false;
    let opened = false;

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
      if (document.hidden) return;
      if (running) return;
      running = true;
      frame.current = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      if (!opened) {
        opened = true;
        current.current = { ...target.current };
        apply(current.current);
        setHoverOpened(true);
      }
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
  }, [mode, reducedMotion]);

  useEffect(() => {
    if (mode !== "touch") return undefined;

    const mask = maskRef.current;
    if (!mask) return undefined;

    const initial = clampTouchCenter({
      x: window.innerWidth * 0.72,
      y: window.innerHeight * 0.28
    });
    touchCenter.current = initial;
    mask.style.transform = `translate3d(${initial.x}px, ${initial.y}px, 0)`;

    const onPointerDown = (event: PointerEvent) => {
      if (isInteractiveTarget(event.target)) return;

      const radius = touchRadiusPx();
      const dx = event.clientX - touchCenter.current.x;
      const dy = event.clientY - touchCenter.current.y;
      if (dx * dx + dy * dy > radius * radius) return;

      const next = randomTouchCenter(touchCenter.current);
      touchCenter.current = next;

      if (reducedMotion) {
        mask.style.transition = "none";
      } else {
        mask.style.transition = `transform ${TOUCH_GLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      }
      mask.style.transform = `translate3d(${next.x}px, ${next.y}px, 0)`;
    };

    const onResize = () => {
      const next = clampTouchCenter(touchCenter.current);
      touchCenter.current = next;
      mask.style.transition = "none";
      mask.style.transform = `translate3d(${next.x}px, ${next.y}px, 0)`;
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [mode, reducedMotion]);

  const sealed = mode === "pending" || (mode === "hover" && !hoverOpened);

  return (
    <div
      ref={maskRef}
      className={cn(
        "spotlight-mask",
        sealed && "spotlight-mask--sealed",
        mode === "touch" && "spotlight-mask--touch",
        mode === "touch" && reducedMotion && "spotlight-mask--touch-instant"
      )}
      aria-hidden
    />
  );
}
