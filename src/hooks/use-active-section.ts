"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveId(visibleSection.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.2, 0.5, 0.8] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
