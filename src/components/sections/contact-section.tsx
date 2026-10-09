import { FileDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { PortfolioDictionary } from "@/data/i18n";

import { Card, CardContent } from "../ui/card";
import { SectionShell } from "./section-shell";

type ContactSectionProps = {
  content: PortfolioDictionary;
};

export function ContactSection({ content }: ContactSectionProps) {
  const heading = content.sectionHeadings.contact;

  return (
    <SectionShell id="contact" {...heading}>
      <Card className="surface rounded-2xl">
        <CardContent className="grid gap-3 p-4 md:grid-cols-2 md:gap-4 md:p-8">
          <a href={`mailto:${content.contact.email}`} className="card-surface-soft flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-border/80 p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-sm dark:bg-background/35 dark:hover:bg-accent/60">
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            <span className="break-all text-sm">{content.contact.email}</span>
          </a>
          {content.contact.cv && (
            <a href={content.contact.cv.href} download className="card-surface-soft flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-border/80 p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-sm dark:bg-background/35 dark:hover:bg-accent/60">
              <FileDown className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm">{content.contact.cv.label}</span>
            </a>
          )}
          <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="card-surface-soft flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-border/80 p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-sm dark:bg-background/35 dark:hover:bg-accent/60">
            <Linkedin className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href={content.contact.github} target="_blank" rel="noreferrer" className="card-surface-soft flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-border/80 p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-sm dark:bg-background/35 dark:hover:bg-accent/60">
            <Github className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm">GitHub</span>
          </a>
          <div className="card-surface-soft flex min-h-12 items-center gap-3 rounded-xl border border-border/80 p-4 transition-all duration-200 hover:border-primary/20 hover:shadow-sm dark:bg-background/35 dark:hover:bg-accent/40">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-sm">{content.contact.location}</span>
          </div>
        </CardContent>
      </Card>
    </SectionShell>
  );
}
