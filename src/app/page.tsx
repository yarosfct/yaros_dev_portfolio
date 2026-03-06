"use client";

import { useMemo } from "react";

import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { getDictionary } from "@/data/i18n";
import { useLocale } from "@/hooks/use-locale";

export default function HomePage() {
  const { locale, setLocale } = useLocale();
  const content = useMemo(() => getDictionary(locale), [locale]);

  return (
    <div className="relative">
      <Navbar content={content} locale={locale} setLocale={setLocale} />
      <main>
        <HeroSection content={content} />
        <ProjectsSection content={content} />
        <StackSection content={content} />
        <AboutSection content={content} />
        <ContactSection content={content} />
      </main>
      <footer className="container pb-10 pt-4 text-sm text-muted-foreground">{content.footer}</footer>
    </div>
  );
}
