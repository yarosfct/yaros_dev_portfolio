import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github, Mail } from "lucide-react";

import { PortfolioDictionary } from "@/data/i18n";
import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";

type HeroSectionProps = {
  content: PortfolioDictionary;
};

const highlightCardClass =
  "card-surface rounded-2xl border border-border/80 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 md:p-5 dark:bg-card/75 dark:shadow-sm";

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="hero" className="scroll-mt-24 pb-12 pt-28 md:scroll-mt-28 md:pb-24 md:pt-44">
      <div className="container">
        <div
          className={cn(
            "mx-auto grid max-w-6xl items-center gap-5 md:gap-10 lg:gap-x-14 lg:gap-y-0",
            "grid-cols-1 [grid-template-areas:'name'_'photo'_'copy']",
            "md:[grid-template-areas:'name'_'copy'_'photo']",
            "lg:grid-cols-[minmax(0,1.1fr)_auto] lg:[grid-template-areas:'name_photo'_'copy_photo']"
          )}
        >
          <h1 className="spotlight-copy [grid-area:name] mx-auto w-fit max-w-full text-center font-[var(--font-display)] text-balance text-4xl font-semibold tracking-tight text-foreground md:mx-0 md:text-left md:text-6xl md:leading-[1.05] lg:mb-5">
            {content.hero.name}
          </h1>

          <div className="[grid-area:photo] justify-self-center lg:self-center lg:justify-self-end">
            <div className="group relative mx-auto h-56 w-56 overflow-hidden rounded-full shadow-xl ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:ring-primary/40 hover:shadow-2xl hover:shadow-primary/20 md:h-[22rem] md:w-[22rem]">
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
                sizes="(min-width: 768px) 352px, 224px"
                quality={95}
                className="object-cover object-[50%_28%] scale-[1.28] -translate-x-[8.5%] transition-transform duration-500 ease-out group-hover:scale-[1.34] group-hover:-translate-y-1"
                priority
              />
            </div>
          </div>

          <div className="[grid-area:copy] space-y-6 text-center md:space-y-10 md:text-left">
            <div className="space-y-3 md:space-y-5">
              <p className="spotlight-copy mx-auto w-fit max-w-full font-[var(--font-display)] text-balance text-xl font-medium tracking-tight text-primary md:mx-0 md:text-left md:text-3xl">
                {content.hero.title}
              </p>
              <p className="spotlight-copy mx-auto w-fit max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:mx-0 md:text-left md:text-lg">
                {content.hero.pitch}
              </p>
            </div>

            <div className="grid grid-cols-[1fr_1fr_auto] gap-2.5 md:flex md:flex-wrap md:gap-3">
              <a
                href="#projects"
                className={cn(buttonVariants({ size: "lg" }), "min-h-11 justify-center gap-2 px-3 md:px-6")}
              >
                {content.hero.ctas.projects}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "min-h-11 justify-center gap-2 px-3 md:px-6"
                )}
              >
                <Mail className="h-4 w-4 shrink-0" />
                {content.hero.ctas.contact}
              </a>
              <a
                href={content.contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label={content.hero.ctas.github}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "min-h-11 w-11 justify-center gap-2 px-0 md:w-auto md:px-6"
                )}
              >
                <Github className="h-4 w-4 shrink-0" />
                <span className="hidden md:inline">{content.hero.ctas.github}</span>
              </a>
            </div>

            <div className="mx-auto grid gap-3 sm:grid-cols-2 sm:max-w-lg md:mx-0">
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
        </div>
      </div>
    </section>
  );
}
