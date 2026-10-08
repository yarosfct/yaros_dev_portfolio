"use client";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "start" | "center";
  headerExtra?: React.ReactNode;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  align = "start",
  headerExtra,
  children
}: SectionShellProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const centered = align === "center";

  return (
    <section id={id} ref={ref} className={cn("scroll-mt-28 py-14 md:py-20", isVisible && "animate-fade-in-up")}>
      <div className="container space-y-10 md:space-y-12">
        {(title || description || headerExtra) && (
          <header className={cn("max-w-3xl space-y-2 md:space-y-3", centered && "mx-auto text-center")}>
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
            {title && <h2 className="section-title font-[var(--font-display)] text-balance">{title}</h2>}
            {description && <p className="section-subtitle text-balance">{description}</p>}
            {headerExtra}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
