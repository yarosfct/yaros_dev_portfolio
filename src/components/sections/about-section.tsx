import { PortfolioDictionary } from "@/data/i18n";

import { Card, CardContent } from "../ui/card";
import { SectionShell } from "./section-shell";

type AboutSectionProps = {
  content: PortfolioDictionary;
};

export function AboutSection({ content }: AboutSectionProps) {
  const heading = content.sectionHeadings.about;
  const about = content.about;

  return (
    <SectionShell id="about" {...heading}>
      <div className="space-y-4">
        <Card className="surface rounded-2xl">
          <CardContent className="space-y-5 p-6 md:p-8">
            <p className="section-copy max-w-3xl">
              {about.leadBefore}
              <a
                href={about.companyHref}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {about.companyName}
              </a>
              {about.leadAfter}
            </p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="section-copy max-w-3xl">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4 lg:grid-cols-5">
          <Card className="surface rounded-2xl lg:col-span-2">
            <CardContent className="space-y-4 p-6">
              <h3 className="font-[var(--font-display)] text-lg">{about.languagesLabel}</h3>
              <ul className="space-y-3">
                {about.languages.map((language) => (
                  <li key={language.name} className="flex items-baseline justify-between gap-4 border-b border-border/70 pb-3 last:border-0 last:pb-0">
                    <span className="text-sm font-medium">{language.name}</span>
                    <span className="text-sm text-muted-foreground">{language.level}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4 lg:col-span-3">
            <h3 className="font-[var(--font-display)] text-lg">{about.strengthsLabel}</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {about.strengths.map((strength) => (
                <Card key={strength.title} className="surface rounded-2xl">
                  <CardContent className="space-y-2 p-5">
                    <h4 className="font-[var(--font-display)] text-base">{strength.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{strength.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
