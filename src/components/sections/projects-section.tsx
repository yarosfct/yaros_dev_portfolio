import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import { Locale, PortfolioContent } from "@/data/portfolio-data";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { SectionShell } from "./section-shell";

type ProjectsSectionProps = {
  content: PortfolioContent;
  locale: Locale;
};

export function ProjectsSection({ content, locale }: ProjectsSectionProps) {
  const heading = content.sectionHeadings.projects;
  const labels =
    locale === "pt"
      ? { contribution: "Minha contribuição", demo: "Demo" }
      : { contribution: "My contribution", demo: "Demo" };

  return (
    <SectionShell id="projects" {...heading}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        {content.projects.map((project, index) => (
          <Card
            key={project.id}
            className={`group overflow-hidden rounded-2xl bg-card/75 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 ${
              index === 0 ? "md:col-span-2 xl:col-span-4" : "xl:col-span-2"
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border/80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1280px) 66vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <CardHeader className="space-y-3 p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="font-[var(--font-display)] text-xl">{project.title}</CardTitle>
                <p className="rounded-md border border-border/70 px-2 py-1 text-xs text-muted-foreground">{project.role}</p>
              </div>
              <CardDescription className="text-sm leading-relaxed">{project.summary}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-5 pt-0 md:p-6 md:pt-0">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="outline" className="border-border/70 bg-background/25">
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{labels.contribution}:</span> {project.impact}
              </p>
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" /> {labels.demo}
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
