import { PortfolioDictionary } from "@/data/i18n";
import { cn } from "@/lib/utils";

import { SectionShell } from "./section-shell";

type TimelineSectionProps = {
  id: "experience";
  content: PortfolioDictionary;
  items: PortfolioDictionary["experience"];
};

function EntryCard({
  item,
  align
}: {
  item: PortfolioDictionary["experience"][number];
  align: "left" | "right";
}) {
  return (
    <article
      className={cn(
        "card-surface rounded-xl border border-border/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 md:p-6 dark:bg-card/70 dark:shadow-sm",
        align === "right" && "md:text-right"
      )}
    >
      <h3 className="font-[var(--font-display)] text-xl font-semibold leading-tight tracking-tight md:text-2xl">
        {item.subtitle}
      </h3>
      <p className="mt-1 text-base text-muted-foreground md:text-lg">{item.title}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
      {item.link && (
        <a
          href={item.link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {item.link.label}
        </a>
      )}
      <p className="mt-4 border-t border-border/50 pt-3 text-sm font-medium text-muted-foreground/80 md:text-base max-md:mt-3">
        {item.period}
      </p>
    </article>
  );
}

export function TimelineSection({ id, content, items }: TimelineSectionProps) {
  const heading = content.sectionHeadings[id];

  return (
    <SectionShell id={id} {...heading}>
      <div className="relative mx-auto max-w-5xl">
        {/* Mobile left rail */}
        <div aria-hidden className="absolute bottom-0 left-3 top-0 w-px bg-border/70 md:hidden" />
        {/* Desktop center rail */}
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent md:block"
        />

        <ol className="relative flex flex-col gap-10 md:gap-14">
          {items.map((item, index) => {
            const cardOnLeft = index % 2 === 0;

            return (
              <li key={`${item.title}-${item.period}`} className="relative">
                {/* Center / left dot */}
                <span
                  aria-hidden
                  className="absolute left-3 top-6 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-primary/40 bg-primary ring-4 ring-background md:left-1/2"
                />

                {/* Mobile — date once inside the card; left rail + dot only */}
                <div className="pl-8 md:hidden">
                  <EntryCard item={item} align="left" />
                </div>

                {/* Desktop alternating */}
                <div
                  className={cn(
                    "hidden w-full items-start gap-8 md:flex",
                    cardOnLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div className="w-[calc(50%-2rem)] shrink-0">
                    <EntryCard item={item} align={cardOnLeft ? "left" : "right"} />
                  </div>

                  <div className="w-16 shrink-0" aria-hidden />

                  <div
                    className={cn(
                      "flex w-[calc(50%-2rem)] shrink-0 items-start pt-7",
                      cardOnLeft ? "justify-start" : "justify-end"
                    )}
                  >
                    <div
                      className={cn(
                        "card-surface-soft rounded-lg border border-border/50 px-3 py-2 dark:bg-muted/40",
                        cardOnLeft ? "text-left" : "text-right"
                      )}
                    >
                      <p className="text-sm font-semibold leading-tight text-foreground/75 md:text-base">{item.period}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </SectionShell>
  );
}
