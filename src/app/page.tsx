"use client";

import { useMemo, useState } from "react";

import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackSection } from "@/components/sections/stack-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { Locale, portfolioContent } from "@/data/portfolio-data";

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const content = useMemo(() => portfolioContent[locale], [locale]);

  return (
    <div className="relative">
      <Navbar content={content} locale={locale} setLocale={setLocale} />
      <main>
        <HeroSection content={content} />
        <ProjectsSection content={content} />
        <StackSection content={content} />
        <AboutSection content={content} />
        <TimelineSection id="experience" content={content} items={content.experience} />
        <TimelineSection id="education" content={content} items={content.education} />
        <AchievementsSection content={content} />
        <ContactSection content={content} />
      </main>
      <footer className="container pb-10 pt-4 text-sm text-muted-foreground">{content.footer}</footer>
    </div>
  );
}
