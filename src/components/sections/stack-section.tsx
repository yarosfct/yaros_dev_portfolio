import { Braces, Boxes, Cpu, Wrench } from "lucide-react";

import { PortfolioDictionary } from "@/data/i18n";

import { SectionShell } from "./section-shell";

type StackSectionProps = {
  content: PortfolioDictionary;
};

const cardClass =
  "group flex h-full flex-col rounded-2xl border border-border/80 bg-card/75 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 md:p-6";

const groupIcons = [Braces, Boxes, Cpu, Wrench];

export function StackSection({ content }: StackSectionProps) {
  const heading = content.sectionHeadings.stack;

  return (
    <SectionShell id="stack" {...heading}>
      <div className="grid gap-4 sm:grid-cols-2">
        {content.techGroups.map((group, index) => {
          const Icon = groupIcons[index % groupIcons.length];

          return (
            <article key={group.title} className={cardClass}>
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-[var(--font-display)] text-xl font-semibold tracking-tight">{group.title}</h3>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-sm text-foreground transition-colors duration-200 group-hover:border-primary/25"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
