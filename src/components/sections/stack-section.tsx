import { Code2, Database, Layers3, Wrench } from "lucide-react";

import { PortfolioDictionary } from "@/data/i18n";
import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SectionShell } from "./section-shell";

type StackSectionProps = {
  content: PortfolioDictionary;
};

export function StackSection({ content }: StackSectionProps) {
  const heading = content.sectionHeadings.stack;
  const featuredGroups = content.techGroups.slice(0, 2);
  const secondaryGroups = content.techGroups.slice(2);
  const featuredIcons = [Layers3, Code2];
  const secondaryIcons = [Database, Wrench];

  return (
    <SectionShell id="stack" {...heading}>
      <div className="grid gap-4 lg:grid-cols-12">
        {featuredGroups.map((group, index) => {
          const Icon = featuredIcons[index % featuredIcons.length];

          return (
            <Card
              key={group.title}
              className={cn(
                "group surface relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15 lg:col-span-6",
                index === 0 && "border-primary/30 shadow-lg shadow-primary/10"
              )}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              />
              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary/80">{`0${index + 1}`}</p>
                    <CardTitle className="font-[var(--font-display)] text-xl">{group.title}</CardTitle>
                  </div>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/60 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
              </CardHeader>
              <CardContent className="relative flex flex-wrap gap-2 pb-6">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline" className="bg-background/45 transition-all duration-200 hover:border-primary/35 hover:bg-primary/12">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          );
        })}

        {secondaryGroups.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-12">
            {secondaryGroups.map((group, index) => {
              const Icon = secondaryIcons[index % secondaryIcons.length];

              return (
                <Card
                  key={group.title}
                  className="group surface rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle className="font-[var(--font-display)] text-lg">{group.title}</CardTitle>
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/60 text-primary/85">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline" className="bg-background/40 transition-colors duration-200 hover:bg-primary/10">
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </SectionShell>
  );
}
