import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import { PortfolioContent } from "@/data/portfolio-data";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { SectionShell } from "./section-shell";

type ProjectsSectionProps = {
  content: PortfolioContent;
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const heading = content.sectionHeadings.projects;

  return (
    <SectionShell id="projects" {...heading}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.projects.map((project) => (
          <Card key={project.id} className="group overflow-hidden bg-card/80 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{project.role}</p>
              </div>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="outline" className="border-border/70 bg-background/30">
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">What I did:</span> {project.impact}
              </p>
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" /> Demo
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
