import { PortfolioContent } from "@/data/portfolio-data";

import { Card, CardContent } from "../ui/card";
import { SectionShell } from "./section-shell";

type AboutSectionProps = {
  content: PortfolioContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  const heading = content.sectionHeadings.about;

  return (
    <SectionShell id="about" {...heading}>
      <Card className="bg-card/70">
        <CardContent className="space-y-4 p-6 md:p-8">
          {content.about.map((paragraph) => (
            <p key={paragraph} className="section-copy max-w-3xl">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </SectionShell>
  );
}
