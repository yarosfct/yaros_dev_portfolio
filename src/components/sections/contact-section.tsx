import { Github, Linkedin, Mail, MapPin } from "lucide-react";

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
        <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
          <a href={`mailto:${content.contact.email}`} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/80 bg-background/35 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-accent/60 hover:shadow-sm">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm">{content.contact.email}</span>
          </a>
          <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/80 bg-background/35 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-accent/60 hover:shadow-sm">
            <Linkedin className="h-4 w-4 text-primary" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href={content.contact.github} target="_blank" rel="noreferrer" className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/80 bg-background/35 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-accent/60 hover:shadow-sm">
            <Github className="h-4 w-4 text-primary" />
            <span className="text-sm">GitHub</span>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-border/80 bg-background/35 p-4 transition-all duration-200 hover:border-primary/20 hover:bg-accent/40 hover:shadow-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">{content.contact.location}</span>
          </div>
        </CardContent>
      </Card>
    </SectionShell>
  );
}
