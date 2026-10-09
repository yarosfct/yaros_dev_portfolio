"use client";

import { Github, Menu, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent
} from "react";

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

type Indicator = { left: number; width: number; ready: boolean };

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Navbar({ content, locale, setLocale }: NavbarProps) {
  const sectionIds = useMemo(() => content.nav.map((item) => item.id), [content.nav]);
  const spySection = useActiveSection(sectionIds);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState<Indicator>({ left: 0, width: 0, ready: false });

  const desktopNavRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const unlockTimer = useRef<number | null>(null);

  const activeSection = pendingId ?? spySection;

  useEffect(() => {
    if (pendingId && spySection === pendingId) {
      setPendingId(null);
    }
  }, [pendingId, spySection]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const measureIndicator = useCallback(() => {
    const nav = desktopNavRef.current;
    const link = activeSection ? linkRefs.current[activeSection] : null;
    if (!nav || !link) {
      setIndicator((prev) => ({ ...prev, ready: false }));
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      ready: true
    });
  }, [activeSection]);

  useLayoutEffect(() => {
    measureIndicator();
  }, [measureIndicator, locale, content.nav]);

  useEffect(() => {
    const nav = desktopNavRef.current;
    if (!nav || typeof ResizeObserver === "undefined") return undefined;

    const observer = new ResizeObserver(() => measureIndicator());
    observer.observe(nav);
    window.addEventListener("resize", measureIndicator);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureIndicator);
    };
  }, [measureIndicator]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    if (unlockTimer.current) {
      window.clearTimeout(unlockTimer.current);
      unlockTimer.current = null;
    }

    setPendingId(id);
    element.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start"
    });

    unlockTimer.current = window.setTimeout(() => {
      setPendingId((current) => (current === id ? null : current));
      unlockTimer.current = null;
    }, 1200);
  };

  const onNavClick = (event: ReactMouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    scrollToSection(id);
    if (menuOpen) setMenuOpen(false);
  };

  const linkClass = (id: string) =>
    cn(
      "relative z-[1] whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[13px] transition-colors duration-200 lg:px-3 lg:text-sm",
      activeSection === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    );

  return (
    <header data-site-nav className="fixed inset-x-0 top-0 z-50">
      <div className="container pt-3 md:pt-4">
        <div className="surface rounded-2xl px-3 md:px-5">
          <div className="flex h-12 items-center justify-between gap-2 md:h-14 md:gap-3">
            <a
              href="#hero"
              className="inline-flex min-h-10 min-w-10 items-center font-[var(--font-display)] text-sm font-bold tracking-[0.14em] text-primary"
              onClick={(event) => onNavClick(event, "hero")}
            >
              YH
            </a>

            <nav
              ref={desktopNavRef}
              className="relative hidden items-center gap-0.5 md:flex"
              aria-label={content.ui.sectionsLabel}
            >
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute top-1/2 h-8 -translate-y-1/2 rounded-lg bg-primary/15",
                  "transition-[left,width,opacity] duration-300 ease-out",
                  "motion-reduce:transition-none",
                  indicator.ready ? "opacity-100" : "opacity-0"
                )}
                style={{ left: indicator.left, width: indicator.width }}
              />
              {content.nav.map((item) => (
                <a
                  key={item.id}
                  ref={(node) => {
                    linkRefs.current[item.id] = node;
                  }}
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  onClick={(event) => onNavClick(event, item.id)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-1 md:gap-2">
              <LanguageToggle locale={locale} setLocale={setLocale} label={content.ui.languageLabel} />
              <ThemeToggle label={content.ui.themeLabel} />
              <a
                href={content.contact.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "hidden gap-2 border-border/70 bg-background/50 lg:inline-flex"
                )}
              >
                <Github className="h-4 w-4" />
                {content.ui.navGitHub}
              </a>
              <button
                type="button"
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-10 w-10 rounded-full p-0 md:hidden")}
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
            <nav id="mobile-nav" aria-label={content.ui.sectionsLabel} className="flex flex-col gap-0.5 pb-3 pt-1 md:hidden">
              {content.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "inline-flex min-h-10 items-center rounded-lg px-3 py-2.5 text-sm transition-colors",
                    activeSection === item.id
                      ? "bg-primary/15 font-medium text-foreground"
                      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                  )}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  onClick={(event) => onNavClick(event, item.id)}
                >
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
