import { PortfolioDictionary } from "@/data/i18n";

import { SectionShell } from "./section-shell";

type TimelineSectionProps = {
  id: "experience";
  content: PortfolioDictionary;
  items: PortfolioDictionary["experience"];
};

export function TimelineSection({ id, content, items }: TimelineSectionProps) {
  const heading = content.sectionHeadings[id];

  return (
    <SectionShell id={id} {...heading}>
      <ol className="relative space-y-0 border-l border-border/70 pl-6 md:pl-8">
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`} className="relative pb-8 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[1.55rem] top-1.5 h-2.5 w-2.5 rounded-full border border-primary/40 bg-primary md:-left-[2.05rem]"
            />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
              <div className="min-w-0 space-y-1.5">
                <h3 className="font-[var(--font-display)] text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                  {item.subtitle}
                </h3>
                <p className="text-base text-muted-foreground md:text-lg">{item.title}</p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex pt-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {item.link.label}
                  </a>
                )}
              </div>
              <p className="shrink-0 text-sm font-medium text-muted-foreground sm:pt-1 sm:text-right md:text-base">
                {item.period}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
