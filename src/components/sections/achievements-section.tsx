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
      <div className="grid gap-4 md:grid-cols-2">
        {content.achievements.map((achievement) => (
          <Card key={achievement.title} className="surface rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
            <CardContent className="flex items-start gap-3 p-6">
              <Trophy className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <div className="space-y-2">
                <h3 className="font-[var(--font-display)] text-lg leading-snug">{achievement.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{achievement.detail}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
