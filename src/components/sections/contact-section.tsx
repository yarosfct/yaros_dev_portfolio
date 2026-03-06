import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { PortfolioContent } from "@/data/portfolio-data";

import { Card, CardContent } from "../ui/card";
import { SectionShell } from "./section-shell";

type ContactSectionProps = {
  content: PortfolioContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  const heading = content.sectionHeadings.contact;

  return (
    <SectionShell id="contact" {...heading}>
      <Card className="bg-card/70">
        <CardContent className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
          <a href={`mailto:${content.contact.email}`} className="flex items-center gap-3 rounded-lg border border-border p-4 hover:bg-accent/60">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm">{content.contact.email}</span>
          </a>
          <a href={content.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-border p-4 hover:bg-accent/60">
            <Linkedin className="h-4 w-4 text-primary" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href={content.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-border p-4 hover:bg-accent/60">
            <Github className="h-4 w-4 text-primary" />
            <span className="text-sm">GitHub</span>
          </a>
          <div className="flex items-center gap-3 rounded-lg border border-border p-4">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">{content.contact.location}</span>
          </div>
        </CardContent>
      </Card>
    </SectionShell>
  );
}
