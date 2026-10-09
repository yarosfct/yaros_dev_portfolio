"use client";

import { useEffect, useRef, useState } from "react";

/** ssr = visible default; pending = hidden off-screen; in = animate in; shown = visible, no anim */
export type RevealState = "ssr" | "pending" | "in" | "shown";

/**
 * One-shot viewport reveal.
 * - SSR / no-JS: visible ("ssr")
 * - Already in view or reduced-motion at mount: "shown" (never hide, no animation flash)
 * - Off-screen: "pending" until first intersection → "in" (animate once), never re-hide
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

    const rootMargin = options?.rootMargin ?? "0px 0px -8% 0px";
    const threshold = options?.threshold ?? 0.12;

    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    const alreadyIn = rect.top < vh * 0.92 && rect.bottom > 0;
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
