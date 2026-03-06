import { PortfolioContent } from "@/data/portfolio-data";

import { Card, CardContent } from "../ui/card";
import { SectionShell } from "./section-shell";

type TimelineSectionProps = {
  id: "experience" | "education";
  content: PortfolioContent;
  items: PortfolioContent["experience"];
};

export function TimelineSection({ id, content, items }: TimelineSectionProps) {
  const heading = content.sectionHeadings[id];

  return (
    <SectionShell id={id} {...heading}>
      <div className="space-y-4 border-l border-border pl-6">
        {items.map((item) => (
          <Card key={`${item.title}-${item.period}`} className="relative bg-card/70 before:absolute before:-left-[31px] before:top-8 before:h-3 before:w-3 before:rounded-full before:bg-primary">
            <CardContent className="space-y-2 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">{item.period}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              <p className="section-copy">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
