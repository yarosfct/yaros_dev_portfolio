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
  const { ref, state } = useReveal<HTMLElement>();
  const centered = align === "center";

  return (
    <section
      id={id}
      ref={ref}
      data-reveal={state}
      className={cn(
        "section-reveal scroll-mt-24 py-12 md:scroll-mt-28 md:py-20",
        state === "pending" && "section-reveal--pending",
        state === "in" && "section-reveal--in",
        state === "shown" && "section-reveal--shown"
      )}
    >
      <div className="container space-y-8 md:space-y-12">
        {(title || description || headerExtra) && (
          <div
            className={cn(
              "section-reveal__header space-y-2 md:space-y-3",
              centered && "text-center"
            )}
          >
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
                      "spotlight-copy section-title w-fit max-w-full font-[var(--font-display)] text-balance text-foreground",
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
        <div className="section-reveal__body">{children}</div>
      </div>
    </section>
  );
}
