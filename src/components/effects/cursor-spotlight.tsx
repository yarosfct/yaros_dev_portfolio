"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type Point = { x: number; y: number };
type Mode = "pending" | "hover" | "touch";

const LERP = 0.22;
const SETTLE_PX = 0.4;

/** Touch light ~85vw diameter */
const TOUCH_DIAMETER_VW = 0.85;
const TOUCH_RADIUS_VW = TOUCH_DIAMETER_VW / 2;
/** Keep ≥40% of the circle on-screen */
const TOUCH_VISIBLE_FRACTION = 0.4;
/** Exponential velocity decay λ (1/s) — frame-rate independent */
const TOUCH_DAMPING = 3.8;
const TOUCH_RESTITUTION = 0.52;
const TOUCH_STOP_SPEED = 12;
/** Impulse travel targets as fraction of viewport width */
const TOUCH_TRAVEL_CENTER = 0.2;
const TOUCH_TRAVEL_EDGE = 0.34;
const TOUCH_MAX_SPEED_VW = 2.4;
const TOUCH_IMPACT_SCALE = 0.965;
const TOUCH_IMPACT_MS = 90;
const TOUCH_FADE_MS = 220;

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

function touchBounds() {
  const pad = touchRadiusPx() * TOUCH_VISIBLE_FRACTION;
  return {
    minX: pad,
    maxX: window.innerWidth - pad,
    minY: pad,
    maxY: window.innerHeight - pad
  };
}

function clampTouchCenter(point: Point): Point {
  const { minX, maxX, minY, maxY } = touchBounds();
  return {
    x: Math.min(maxX, Math.max(minX, point.x)),
    y: Math.min(maxY, Math.max(minY, point.y))
  };
}

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest(
      "a, button, input, textarea, select, label, summary, [role='button'], [role='link'], [href]"
    )
  );
}

/**
 * Folk spotlight mask.
 * - SSR / first paint: solid sealed cover (no hole), pattern opacity 0 in CSS.
 * - Desktop: hole opens on first pointermove, then tracks the cursor.
 * - Touch: larger floating hole with push physics (impulse away from tap).
 */
export function CursorSpotlight() {
  const maskRef = useRef<HTMLDivElement>(null);
  const target = useRef<Point>({ x: 0, y: 0 });
  const current = useRef<Point>({ x: 0, y: 0 });
  const frame = useRef(0);
  const [mode, setMode] = useState<Mode>("pending");
  const [hoverOpened, setHoverOpened] = useState(false);
  const [touchIdle, setTouchIdle] = useState(false);
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
    if (mode !== "touch") {
      setTouchIdle(false);
      return undefined;
    }

    const mask = maskRef.current;
    if (!mask) return undefined;

    const pos = clampTouchCenter({
      x: window.innerWidth * 0.7,
      y: window.innerHeight * 0.3
    });
    let vx = 0;
    let vy = 0;
    let scale = 1;
    let impactUntil = 0;
    let running = false;
    let lastTs = 0;
    let fadeTimer = 0;

    const applyTransform = () => {
      mask.style.setProperty("--sx", `${pos.x}px`);
      mask.style.setProperty("--sy", `${pos.y}px`);
      mask.style.setProperty("--ss", String(scale));
      mask.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${scale})`;
    };

    const stopLoop = () => {
      running = false;
      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
        frame.current = 0;
      }
      lastTs = 0;
      scale = 1;
      applyTransform();
      if (!reducedMotion) {
        mask.classList.add("spotlight-mask--touch-idle");
        setTouchIdle(true);
      }
    };

    const startLoop = () => {
      mask.classList.remove("spotlight-mask--touch-idle");
      setTouchIdle(false);
      if (running) return;
      running = true;
      lastTs = 0;
      frame.current = window.requestAnimationFrame(tick);
    };

    const bounce = () => {
      const { minX, maxX, minY, maxY } = touchBounds();
      let hit = false;

      if (pos.x < minX) {
        pos.x = minX;
        vx = Math.abs(vx) * TOUCH_RESTITUTION;
        hit = true;
      } else if (pos.x > maxX) {
        pos.x = maxX;
        vx = -Math.abs(vx) * TOUCH_RESTITUTION;
        hit = true;
      }

      if (pos.y < minY) {
        pos.y = minY;
        vy = Math.abs(vy) * TOUCH_RESTITUTION;
        hit = true;
      } else if (pos.y > maxY) {
        pos.y = maxY;
        vy = -Math.abs(vy) * TOUCH_RESTITUTION;
        hit = true;
      }

      if (hit && !reducedMotion) {
        impactUntil = performance.now() + TOUCH_IMPACT_MS;
        scale = TOUCH_IMPACT_SCALE;
      }
    };

    const tick = (ts: number) => {
      if (!running) return;

      if (!lastTs) lastTs = ts;
      const dt = Math.min(0.032, Math.max(0.001, (ts - lastTs) / 1000));
      lastTs = ts;

      const damp = Math.exp(-TOUCH_DAMPING * dt);
      vx *= damp;
      vy *= damp;

      pos.x += vx * dt;
      pos.y += vy * dt;
      bounce();

      if (performance.now() < impactUntil) {
        const t = 1 - (impactUntil - performance.now()) / TOUCH_IMPACT_MS;
        scale = TOUCH_IMPACT_SCALE + (1 - TOUCH_IMPACT_SCALE) * Math.min(1, Math.max(0, t));
      } else {
        scale = 1;
      }

      applyTransform();

      const speed = Math.hypot(vx, vy);
      if (speed < TOUCH_STOP_SPEED && performance.now() >= impactUntil) {
        vx = 0;
        vy = 0;
        const clamped = clampTouchCenter(pos);
        pos.x = clamped.x;
        pos.y = clamped.y;
        stopLoop();
        return;
      }

      frame.current = window.requestAnimationFrame(tick);
    };

    applyTransform();
    setTouchIdle(!reducedMotion);

    const pushFromTap = (clientX: number, clientY: number) => {
      const radius = touchRadiusPx();
      const dx = clientX - pos.x;
      const dy = clientY - pos.y;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) return false;

      if (reducedMotion) {
        const angle = Math.random() * Math.PI * 2;
        const jump = window.innerWidth * 0.28;
        const next = clampTouchCenter({
          x: pos.x + Math.cos(angle) * jump,
          y: pos.y + Math.sin(angle) * jump
        });
        setTouchIdle(false);
        mask.style.transition = `opacity ${TOUCH_FADE_MS}ms ease`;
        mask.style.opacity = "0.35";
        window.clearTimeout(fadeTimer);
        fadeTimer = window.setTimeout(() => {
          pos.x = next.x;
          pos.y = next.y;
          vx = 0;
          vy = 0;
          applyTransform();
          mask.style.opacity = "1";
          window.setTimeout(() => {
            mask.style.transition = "";
            setTouchIdle(false);
          }, TOUCH_FADE_MS);
        }, TOUCH_FADE_MS);
        return true;
      }

      // Impulse away from tap: direction from tap → center
      let dirX = pos.x - clientX;
      let dirY = pos.y - clientY;
      let dirLen = Math.hypot(dirX, dirY);
      if (dirLen < 1) {
        const angle = Math.random() * Math.PI * 2;
        dirX = Math.cos(angle);
        dirY = Math.sin(angle);
        dirLen = 1;
      } else {
        dirX /= dirLen;
        dirY /= dirLen;
      }

      const edge = Math.min(1, dist / radius);
      const travel =
        window.innerWidth * (TOUCH_TRAVEL_CENTER + (TOUCH_TRAVEL_EDGE - TOUCH_TRAVEL_CENTER) * edge);
      // For v' = -λv, distance ≈ |v0|/λ
      const impulse = travel * TOUCH_DAMPING;
      vx += dirX * impulse;
      vy += dirY * impulse;

      const maxSpeed = window.innerWidth * TOUCH_MAX_SPEED_VW;
      const speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const s = maxSpeed / speed;
        vx *= s;
        vy *= s;
      }

      startLoop();
      return true;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (isInteractiveTarget(event.target)) return;
      pushFromTap(event.clientX, event.clientY);
    };

    const onResize = () => {
      const next = clampTouchCenter(pos);
      pos.x = next.x;
      pos.y = next.y;
      applyTransform();
    };

    const onVisibility = () => {
      if (document.hidden && running) {
        // Freeze in place while hidden
        if (frame.current) window.cancelAnimationFrame(frame.current);
        frame.current = 0;
        running = false;
        lastTs = 0;
      }
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
      window.clearTimeout(fadeTimer);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      setTouchIdle(false);
      mask.style.opacity = "";
      mask.style.transition = "";
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
        mode === "touch" && touchIdle && !reducedMotion && "spotlight-mask--touch-idle",
        mode === "touch" && reducedMotion && "spotlight-mask--touch-instant"
      )}
      aria-hidden
    />
  );
}
