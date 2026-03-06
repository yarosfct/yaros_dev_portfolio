import { ArrowRight, BriefcaseBusiness, Github, Mail } from "lucide-react";

import { PortfolioContent } from "@/data/portfolio-data";

import { Button } from "../ui/button";

type HeroSectionProps = {
  content: PortfolioContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" className="scroll-mt-24 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">{content.hero.name}</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">{content.hero.title}</h1>
          <p className="max-w-2xl text-balance text-base text-muted-foreground md:text-lg">{content.hero.pitch}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects">
              <Button size="lg" className="gap-2">
                {content.hero.ctas.projects}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="secondary" className="gap-2">
                <Mail className="h-4 w-4" />
                {content.hero.ctas.contact}
              </Button>
            </a>
            <a href="#experience">
              <Button size="lg" variant="outline" className="gap-2">
                <BriefcaseBusiness className="h-4 w-4" />
                {content.hero.ctas.experience}
              </Button>
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noreferrer">
              <Button size="lg" variant="ghost" className="gap-2">
                <Github className="h-4 w-4" />
                {content.hero.ctas.github}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
