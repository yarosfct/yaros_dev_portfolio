import { PortfolioDictionary } from "@/data/i18n";

import { Card, CardContent } from "../ui/card";
import { SectionShell } from "./section-shell";

type AboutSectionProps = {
  content: PortfolioDictionary;
};

export function AboutSection({ content }: AboutSectionProps) {
  const heading = content.sectionHeadings.about;

  return (
    <SectionShell id="about" {...heading}>
      <Card className="surface rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
        <CardContent className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
          {content.about.map((paragraph) => (
            <p key={paragraph} className="section-copy transition-colors duration-200 hover:text-foreground/90">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </SectionShell>
  );
}
