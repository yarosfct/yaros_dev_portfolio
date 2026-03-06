import { Trophy } from "lucide-react";

import { PortfolioDictionary } from "@/data/i18n";

import { Card, CardContent } from "../ui/card";
import { SectionShell } from "./section-shell";

type AchievementsSectionProps = {
  content: PortfolioDictionary;
};

export function AchievementsSection({ content }: AchievementsSectionProps) {
  const heading = content.sectionHeadings.achievements;

  return (
    <SectionShell id="achievements" {...heading}>
      <div className="grid gap-4 md:grid-cols-3">
        {content.achievements.map((achievement) => (
          <Card key={achievement} className="surface rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
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
