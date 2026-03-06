import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Github, Mail } from "lucide-react";

import { PortfolioDictionary } from "@/data/i18n";

import { Button } from "../ui/button";

type HeroSectionProps = {
  content: PortfolioDictionary;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" className="scroll-mt-28 pb-20 pt-40 md:pb-24 md:pt-44">
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
            <div className="flex-1 space-y-10">
              <div className="inline-flex items-center rounded-full border border-border/80 bg-card/70 px-4 py-1 text-xs text-muted-foreground">
                {content.ui.availability}
              </div>

              <div className="space-y-6">
                <p className="font-[var(--font-display)] text-sm font-medium uppercase tracking-[0.2em] text-primary">{content.hero.name}</p>
                <h1 className="font-[var(--font-display)] text-balance text-4xl leading-tight md:text-6xl md:leading-[1.08]">
                  {content.hero.title}
                </h1>
                <p className="max-w-2xl text-balance text-base text-muted-foreground md:text-lg">{content.hero.pitch}</p>
              </div>

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
                  <Button size="lg" variant="outline" className="gap-2 border-border/70 bg-background/40">
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

              <div className="grid gap-3 sm:grid-cols-3">
                {content.hero.highlights.map((item) => (
                  <div key={item.label} className="surface rounded-xl p-4">
                    <p className="font-[var(--font-display)] text-2xl text-foreground">{item.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full shadow-xl ring-1 ring-border/50 sm:h-80 sm:w-80 md:mx-0 md:h-[22rem] md:w-[22rem]">
                <Image
                  src="/images/yaros1.jpg"
                  alt="Yaroslav Hayduk"
                  fill
                  sizes="(min-width: 768px) 352px, (min-width: 640px) 320px, 288px"
                  quality={95}
                  className="object-cover [object-position:50%_18%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
