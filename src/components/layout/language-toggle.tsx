"use client";

import { Locale, locales } from "@/data/i18n";

import { Button } from "@/components/ui/button";

type LanguageToggleProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  label: string;
};

export function LanguageToggle({ locale, setLocale, label }: LanguageToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border p-1 md:gap-2" aria-label={label} role="group">
      {locales.map((lang) => (
        <Button
          key={lang}
          type="button"
          size="sm"
          variant={locale === lang ? "default" : "ghost"}
          aria-pressed={locale === lang}
          className="h-8 min-w-9 rounded-full px-2.5 text-xs uppercase md:h-7"
          onClick={() => setLocale(lang)}
        >
          {lang}
        </Button>
      ))}
    </div>
  );
}
