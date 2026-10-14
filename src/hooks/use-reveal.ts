"use client";

import { useEffect, useRef, useState } from "react";

/** ssr = visible default; pending = hidden off-screen; in = animate in; shown = visible, no anim */
export type RevealState = "ssr" | "pending" | "in" | "shown";

/**
 * One-shot viewport reveal.
 * - SSR / no-JS: visible ("ssr")
 * - Already in view or reduced-motion at mount: "shown" (never hide, no animation flash)
 * - Off-screen: "pending" until first intersection → "in" (animate once), never re-hide
 *
 * Defaults use threshold 0 (top edge / any pixel in the root) plus a modest bottom
 * rootMargin. Element-fraction thresholds (e.g. 0.12) delay tall sections on mobile
 * until a large share of the block is visible.
 */
export function useReveal<T extends HTMLElement>(options?: { rootMargin?: string; threshold?: number }) {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState<RevealState>("ssr");

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setState("shown");
      return undefined;
    }

    // Shrink the root from the bottom so reveal waits until the top edge has entered
    // a bit of the viewport — not the instant a 1px tip peeks past the fold.
    // Desktop: slightly deeper inset so sections still feel intentional; mobile: lighter
    // so tall sections (Selected Work, etc.) animate as soon as their header arrives.
    const narrow =
      typeof window !== "undefined" &&
      window.matchMedia?.("(max-width: 767px)").matches;
    const rootMargin = options?.rootMargin ?? (narrow ? "0px 0px -6% 0px" : "0px 0px -12% 0px");
    const threshold = options?.threshold ?? 0;

    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    const bottomInset = narrow ? 0.06 : 0.12;
    const alreadyIn = rect.top < vh * (1 - bottomInset) && rect.bottom > 0;
    if (alreadyIn) {
      setState("shown");
      return undefined;
    }

    setState("pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options?.rootMargin, options?.threshold]);

  return { ref, state };
}
