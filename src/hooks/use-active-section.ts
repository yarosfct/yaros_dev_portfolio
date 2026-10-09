"use client";

import { useEffect, useState } from "react";

const HEADER_OFFSET = 120;

/**
 * Scroll-spy: pick the last section whose top has crossed the sticky-nav line.
 * Forces hero at the very top and contact at the very bottom.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return undefined;

    let frame = 0;

    const resolveActive = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (window.scrollY < 48) {
        return sectionIds[0];
      }

      if (scrollBottom >= docHeight - 8) {
        return sectionIds[sectionIds.length - 1];
      }

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top - HEADER_OFFSET <= 0) {
          current = id;
        }
      }
      return current;
    };

    const update = () => {
      frame = 0;
      const next = resolveActive();
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [sectionIds]);

  return activeId;
}
