"use client";

import { Github } from "lucide-react";

import { Locale, PortfolioContent } from "@/data/portfolio-data";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";

type NavbarProps = {
  content: PortfolioContent;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export function Navbar({ content, locale, setLocale }: NavbarProps) {
  const sectionIds = content.nav.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-4">
        <div className="surface rounded-2xl px-4 md:px-5">
          <div className="flex h-14 items-center justify-between gap-4">
            <a href="#hero" className="font-[var(--font-display)] text-sm font-bold tracking-[0.14em] text-primary">
              YH
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {content.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-sm transition-all",
                    activeSection === item.id
                      ? "bg-primary/15 text-foreground"
                      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-1.5 md:gap-2">
              <LanguageToggle locale={locale} setLocale={setLocale} />
              <ThemeToggle />
              <a href="https://github.com/your-profile" target="_blank" rel="noreferrer" className="hidden md:block">
                <Button variant="outline" size="sm" className="gap-2 border-border/70 bg-background/50">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
