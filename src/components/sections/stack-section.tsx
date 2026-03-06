import { PortfolioContent } from "@/data/portfolio-data";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SectionShell } from "./section-shell";

type StackSectionProps = {
  content: PortfolioContent;
};

export function StackSection({ content }: StackSectionProps) {
  const heading = content.sectionHeadings.stack;

  return (
    <SectionShell id="stack" {...heading}>
      <div className="grid gap-4 md:grid-cols-3">
        {content.techGroups.map((group) => (
          <Card key={group.title} className="bg-card/70">
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="outline" className="bg-background/40">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
