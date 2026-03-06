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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#hero" className="text-sm font-semibold tracking-wide">
          YH
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {content.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground",
                activeSection === item.id ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle locale={locale} setLocale={setLocale} />
          <ThemeToggle />
          <a href="https://github.com/your-profile" target="_blank" rel="noreferrer" className="hidden md:block">
            <Button variant="outline" size="sm" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
