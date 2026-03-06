import { Trophy } from "lucide-react";

import { PortfolioContent } from "@/data/portfolio-data";

import { Card, CardContent } from "../ui/card";
import { SectionShell } from "./section-shell";

type AchievementsSectionProps = {
  content: PortfolioContent;
};

export function AchievementsSection({ content }: AchievementsSectionProps) {
  const heading = content.sectionHeadings.achievements;

  return (
    <SectionShell id="achievements" {...heading}>
      <div className="grid gap-4 md:grid-cols-3">
        {content.achievements.map((achievement) => (
          <Card key={achievement} className="surface rounded-2xl">
            <CardContent className="flex items-start gap-3 p-6">
              <Trophy className="mt-0.5 h-4 w-4 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">{achievement}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
