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
      <Card className="surface rounded-2xl">
        <CardContent className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
          {content.about.map((paragraph) => (
            <p key={paragraph} className="section-copy">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </SectionShell>
  );
}
