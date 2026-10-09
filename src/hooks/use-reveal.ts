"use client";

import { useEffect, useRef, useState } from "react";

type RevealState = "ssr" | "pending" | "in";

/**
 * One-shot viewport reveal.
 * - SSR / no-JS: visible (state "ssr")
 * - After mount: if already in view or reduced-motion → "in" immediately (no hide flash)
 * - Otherwise: "pending" (opacity 0) until first intersection → "in" forever
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
      setState("in");
      return undefined;
    }

    const rootMargin = options?.rootMargin ?? "0px 0px -8% 0px";
    const threshold = options?.threshold ?? 0.12;

    // If already on screen at mount, reveal immediately — never hide first.
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    const alreadyIn = rect.top < vh * 0.92 && rect.bottom > 0;
    if (alreadyIn) {
      setState("in");
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

  return { ref, state, isVisible: state === "in" || state === "ssr" };
}
