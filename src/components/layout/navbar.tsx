"use client";

import { Github, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Locale, PortfolioDictionary } from "@/data/i18n";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";

type NavbarProps = {
  content: PortfolioDictionary;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export function Navbar({ content, locale, setLocale }: NavbarProps) {
  const sectionIds = content.nav.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const linkClass = (id: string) =>
    cn(
      "rounded-lg px-3 py-1.5 text-sm transition-all",
      activeSection === id ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-4">
        <div className="surface rounded-2xl px-4 md:px-5">
          <div className="flex h-14 items-center justify-between gap-3">
            <a href="#hero" className="font-[var(--font-display)] text-sm font-bold tracking-[0.14em] text-primary">
              YH
            </a>

            <nav className="hidden items-center gap-0.5 md:flex" aria-label={content.ui.sectionsLabel}>
              {content.nav.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-1.5 md:gap-2">
              <LanguageToggle locale={locale} setLocale={setLocale} label={content.ui.languageLabel} />
              <ThemeToggle label={content.ui.themeLabel} />
              <a
                href={content.contact.github}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden gap-2 border-border/70 bg-background/50 lg:inline-flex")}
              >
                <Github className="h-4 w-4" />
                {content.ui.navGitHub}
              </a>
              <button
                type="button"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-9 w-9 rounded-full p-0 md:hidden")}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? content.ui.closeMenu : content.ui.openMenu}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav id="mobile-nav" aria-label={content.ui.sectionsLabel} className="flex flex-col gap-1 pb-3 md:hidden">
              {content.nav.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
