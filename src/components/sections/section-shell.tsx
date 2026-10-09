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
          <div className={cn("space-y-2 md:space-y-3", centered && "text-center")}>
            {(eyebrow || title || description) && (
              <header className={cn("space-y-2 md:space-y-3", centered && "text-center")}>
                {eyebrow && (
                  <p
                    className={cn(
                      "spotlight-copy w-fit max-w-full text-xs font-semibold uppercase tracking-[0.2em] text-primary",
                      centered && "spotlight-copy--center"
                    )}
                  >
                    {eyebrow}
                  </p>
                )}
                {title && (
                  <h2
                    className={cn(
                      "spotlight-copy section-title w-fit max-w-full font-[var(--font-display)] text-balance",
                      centered && "spotlight-copy--center"
                    )}
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p
                    className={cn(
                      "spotlight-copy section-subtitle w-fit max-w-3xl text-balance",
                      centered && "spotlight-copy--center"
                    )}
                  >
                    {description}
                  </p>
                )}
              </header>
            )}
            {headerExtra}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
