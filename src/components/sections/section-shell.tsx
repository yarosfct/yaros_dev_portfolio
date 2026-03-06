"use client";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section id={id} ref={ref} className={cn("scroll-mt-24 py-16 md:py-24", isVisible && "animate-fade-in-up") }>
      <div className="container space-y-10">
        {(title || description) && (
          <header className="max-w-2xl space-y-3">
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
            {title && <h2 className="section-title text-balance">{title}</h2>}
            {description && <p className="section-copy text-balance">{description}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
