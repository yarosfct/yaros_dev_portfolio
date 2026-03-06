"use client";

import { Locale } from "@/data/portfolio-data";

import { Button } from "@/components/ui/button";

type LanguageToggleProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export function LanguageToggle({ locale, setLocale }: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-border p-1">
      {(["en", "pt"] as const).map((lang) => (
        <Button
          key={lang}
          size="sm"
          variant={locale === lang ? "default" : "ghost"}
          className="h-7 rounded-full px-2.5 text-xs uppercase"
          onClick={() => setLocale(lang)}
        >
          {lang}
        </Button>
      ))}
    </div>
  );
}
