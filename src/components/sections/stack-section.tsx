import { DailyDriversLegendIcon, getTechIcon, groupHeaderIcons, sortGroupItems } from "@/lib/tech-icons";
import { PortfolioDictionary } from "@/data/i18n";
import { cn } from "@/lib/utils";

import { SectionShell } from "./section-shell";

type StackSectionProps = {
  content: PortfolioDictionary;
};

export function StackSection({ content }: StackSectionProps) {
  const heading = content.sectionHeadings.stack;
  const dailyDrivers = new Set(content.dailyDrivers);

  return (
    <SectionShell
      id="stack"
      {...heading}
      headerExtra={
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <span className="tech-chip-daily inline-flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold md:text-sm">
            <DailyDriversLegendIcon className="relative z-[1] h-3.5 w-3.5 text-primary md:h-4 md:w-4" aria-hidden />
            <span className="relative z-[1]">{content.dailyDriversLabel}</span>
          </span>
        </div>
      }
    >
      <div className="divide-y divide-border/70 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm shadow-black/[0.03] dark:bg-card/75">
        {content.techGroups.map((group, index) => {
          const HeaderIcon = groupHeaderIcons[index % groupHeaderIcons.length];
          const items = sortGroupItems(group.items, dailyDrivers);

          return (
            <section
              key={group.title}
              className="flex flex-col gap-2.5 px-4 py-3 transition-colors duration-200 hover:bg-primary/[0.03] sm:px-5 md:flex-row md:items-center md:gap-5 md:px-6 md:py-3.5"
            >
              <div className="flex min-w-0 items-center gap-2.5 md:w-48 md:shrink-0 lg:w-52">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <HeaderIcon className="h-3.5 w-3.5" aria-hidden />
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-[var(--font-display)] text-sm font-semibold tracking-tight md:text-[0.95rem]">
                    {group.title}
                  </h3>
                </div>
              </div>

              <ul className="flex min-w-0 flex-1 flex-wrap content-center gap-1.5 md:gap-2">
                {items.map((item) => {
                  const Icon = getTechIcon(item);
                  const isDaily = dailyDrivers.has(item);

                  return (
                    <li key={item} className="max-w-full">
                      <span
                        className={cn(
                          "group/chip inline-flex max-w-full items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs transition-all duration-200 md:px-2.5 md:py-1.5 md:text-[0.8125rem]",
                          isDaily
                            ? "tech-chip-daily font-semibold hover:-translate-y-0.5"
                            : "border border-border/80 bg-background/60 text-foreground/85 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-background/85 hover:text-foreground"
                        )}
                      >
                        <Icon
                          className={cn(
                            "relative z-[1] h-4 w-4 shrink-0",
                            isDaily
                              ? "text-primary"
                              : "text-foreground/70 transition-colors group-hover/chip:text-foreground"
                          )}
                          aria-hidden
                        />
                        <span className="relative z-[1] font-medium leading-snug">{item}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </SectionShell>
  );
}
