import { getTechIcon, groupHeaderIcons } from "@/lib/tech-icons";
import { PortfolioDictionary } from "@/data/i18n";
import { cn } from "@/lib/utils";

import { SectionShell } from "./section-shell";

type StackSectionProps = {
  content: PortfolioDictionary;
};

const cardClass =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/75 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 md:p-6";

/** Desktop bento spans (12-col). Bigger groups get wider cards to avoid ragged gaps. */
const groupSpans = [
  "lg:col-span-7", // Languages (10)
  "lg:col-span-5", // Frontend & Graphics (9)
  "lg:col-span-4", // Backend & Data (4)
  "lg:col-span-4", // ML & Data Science (5)
  "lg:col-span-4", // Cloud & DevOps (5)
  "lg:col-span-7", // Tools (6)
  "lg:col-span-5" // Practices (3)
];

export function StackSection({ content }: StackSectionProps) {
  const heading = content.sectionHeadings.stack;
  const dailyDrivers = new Set(content.dailyDrivers);
  const LegendIcon = getTechIcon("Cursor");

  return (
    <SectionShell
      id="stack"
      {...heading}
      headerExtra={
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <span className="tech-chip-daily inline-flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-xs font-semibold md:text-sm">
            <LegendIcon className="relative z-[1] h-3.5 w-3.5 text-primary md:h-4 md:w-4" aria-hidden />
            <span className="relative z-[1]">{content.dailyDriversLabel}</span>
          </span>
        </div>
      }
    >
      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {content.techGroups.map((group, index) => {
          const HeaderIcon = groupHeaderIcons[index % groupHeaderIcons.length];
          const span = groupSpans[index] ?? "lg:col-span-4";
          const isPractices = index === content.techGroups.length - 1;

          return (
            <article key={group.title} className={`${cardClass} ${span}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-[var(--font-display)] text-lg font-semibold tracking-tight md:text-xl">
                    {group.title}
                  </h3>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/15 md:h-10 md:w-10">
                  <HeaderIcon className="h-4 w-4 md:h-5 md:w-5" aria-hidden />
                </span>
              </div>

              <ul
                className={
                  isPractices
                    ? "mt-4 flex flex-1 flex-col gap-1.5 md:mt-5 md:gap-2"
                    : "mt-4 flex flex-wrap content-start gap-1.5 md:mt-5 md:gap-2"
                }
              >
                {group.items.map((item) => {
                  const Icon = getTechIcon(item);
                  const isDaily = dailyDrivers.has(item);

                  return (
                    <li key={item} className={isPractices ? "w-full" : "max-w-full"}>
                      <span
                        className={cn(
                          "group/chip inline-flex max-w-full items-center gap-2 rounded-xl px-2.5 py-2 text-xs transition-all duration-200 md:px-3 md:py-2.5 md:text-sm",
                          isPractices && "w-full",
                          isDaily
                            ? "tech-chip-daily font-semibold hover:-translate-y-0.5"
                            : "border border-border/60 bg-background/30 text-muted-foreground opacity-70 hover:opacity-100 hover:border-border hover:text-foreground"
                        )}
                      >
                        <Icon
                          className={cn(
                            "relative z-[1] h-3.5 w-3.5 shrink-0 md:h-4 md:w-4",
                            isDaily
                              ? "text-primary"
                              : "text-muted-foreground transition-colors group-hover/chip:text-foreground"
                          )}
                          aria-hidden
                        />
                        <span className="relative z-[1] font-medium leading-snug">{item}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
