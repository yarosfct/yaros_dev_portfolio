import Image from "next/image";
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
            <CardContent className="space-y-4 p-6">
              {achievement.image && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/70 bg-muted/30">
                  <Image
                    src={achievement.image}
                    alt={achievement.imageAlt ?? achievement.title}
                    fill
                    className="object-contain p-2"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </div>
              )}
              <div className="flex items-start gap-3">
                <Trophy className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-[var(--font-display)] text-lg leading-snug">{achievement.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{achievement.detail}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
