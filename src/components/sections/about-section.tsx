import { Lightbulb, MapPin, Quote, Sparkles } from "lucide-react";

import { PortfolioDictionary } from "@/data/i18n";
import { cn } from "@/lib/utils";

import { SectionShell } from "./section-shell";

type AboutSectionProps = {
  content: PortfolioDictionary;
};

const cardClass =
  "card-surface rounded-2xl border border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 dark:bg-card/75 dark:shadow-sm";

function LinkedIntro({
  text,
  companyName,
  companyHref
}: {
  text: string;
  companyName: string;
  companyHref: string;
}) {
  const parts = text.split(companyName);

  if (parts.length === 1) {
    return <>{text}</>;
  }

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 && (
            <a
              href={companyHref}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {companyName}
            </a>
          )}
        </span>
      ))}
    </>
  );
}

export function AboutSection({ content }: AboutSectionProps) {
  const heading = content.sectionHeadings.about;
  const about = content.about;
  const highlightIcons = [Sparkles, Lightbulb, MapPin];

  return (
    <SectionShell id="about" {...heading}>
      <div className="grid gap-4 lg:grid-cols-12">
        <article className={cn(cardClass, "flex flex-col justify-center p-5 md:p-7 lg:col-span-5")}>
          <div className="space-y-4">
            {about.intro.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                <LinkedIntro text={paragraph} companyName={about.companyName} companyHref={about.companyHref} />
              </p>
            ))}
          </div>
        </article>

        <blockquote className={cn(cardClass, "relative overflow-hidden p-5 md:p-7 lg:col-span-7")}>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent"
          />
          <div className="relative space-y-4">
            <Quote className="h-5 w-5 text-primary" aria-hidden />
            <p className="font-[var(--font-display)] text-xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl">
              “{about.quote.text}”
            </p>
            {about.quote.latin && (
              <p className="text-sm italic text-muted-foreground">{about.quote.latin}</p>
            )}
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{about.quote.note}</p>
          </div>
        </blockquote>

        <article className={cn(cardClass, "p-5 md:p-7 lg:col-span-4")}>
          <h3 className="font-[var(--font-display)] text-lg font-semibold tracking-tight">{about.languagesLabel}</h3>
          <ul className="mt-4 grid gap-3">
            {about.languages.map((language) => (
              <li
                key={language.name}
                className="card-surface-soft flex items-baseline justify-between gap-3 rounded-xl border border-border/60 px-3.5 py-2.5 dark:bg-background/35"
              >
                <span className="text-sm font-medium text-foreground">{language.name}</span>
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{language.level}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="grid gap-4 md:grid-cols-3 lg:col-span-8">
          {about.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];

            return (
              <article key={highlight.title} className={cn(cardClass, "flex h-full flex-col p-5 md:p-6")}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <h3 className="mt-4 font-[var(--font-display)] text-lg font-semibold leading-tight tracking-tight">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{highlight.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
