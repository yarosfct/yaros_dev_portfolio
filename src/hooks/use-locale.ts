"use client";

import { useEffect, useState } from "react";

import { Locale, defaultLocale, locales } from "@/data/i18n";

const STORAGE_KEY = "portfolio-locale";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && locales.includes(stored)) {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return { locale, setLocale };
}
