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
    <div className="inline-flex items-center gap-2 rounded-full border border-border p-1" aria-label={label} role="group">
      {locales.map((lang) => (
        <Button
          key={lang}
          type="button"
          size="sm"
          variant={locale === lang ? "default" : "ghost"}
          aria-pressed={locale === lang}
          className="h-7 rounded-full px-2.5 text-xs uppercase"
          onClick={() => setLocale(lang)}
        >
          {lang}
        </Button>
      ))}
    </div>
  );
}
