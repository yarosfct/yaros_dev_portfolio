import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github, Mail } from "lucide-react";

import { PortfolioDictionary } from "@/data/i18n";
import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";

type HeroSectionProps = {
  content: PortfolioDictionary;
};

const highlightCardClass =
  "rounded-2xl border border-border/80 bg-card/75 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 md:p-5";

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" className="scroll-mt-28 pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="container">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:gap-14">
          <div className="space-y-8 md:space-y-10">
            <div className="inline-flex items-center rounded-full border border-border/80 bg-card/75 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              {content.ui.availability}
            </div>

            <div className="spotlight-copy max-w-xl space-y-4 md:space-y-5">
              <h1 className="font-[var(--font-display)] text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
                {content.hero.name}
              </h1>
              <p className="font-[var(--font-display)] text-balance text-xl font-medium tracking-tight text-primary md:text-3xl">
                {content.hero.title}
              </p>
              <p className="text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
                {content.hero.pitch}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
                {content.hero.ctas.projects}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "gap-2")}>
                <Mail className="h-4 w-4" />
                {content.hero.ctas.contact}
              </a>
              <a
                href={content.contact.github}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2")}
              >
                <Github className="h-4 w-4" />
                {content.hero.ctas.github}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:max-w-lg">
              {content.hero.highlights.map((item) => {
                const body = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-[var(--font-display)] text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {item.value}
                      </p>
                      {item.href && <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(highlightCardClass, "block cursor-pointer")}
                    >
                      {body}
                    </a>
                  );
                }

                return (
                  <div key={item.label} className={highlightCardClass}>
                    {body}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="shrink-0 justify-self-center lg:justify-self-end">
            <div className="group relative mx-auto h-72 w-72 overflow-hidden rounded-full shadow-xl ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:ring-primary/40 hover:shadow-2xl hover:shadow-primary/20 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-primary/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <Image
                src="/images/yaros1.jpg"
                alt="Yaroslav Hayduk"
                fill
                sizes="(min-width: 768px) 352px, (min-width: 640px) 320px, 288px"
                quality={95}
                className="object-cover object-[50%_28%] scale-[1.28] -translate-x-[8.5%] transition-transform duration-500 ease-out group-hover:scale-[1.34] group-hover:-translate-y-1"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
