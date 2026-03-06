"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Maximize2, Minus, Plus, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { PortfolioDictionary } from "@/data/i18n";
import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { SectionShell } from "./section-shell";

type ProjectsSectionProps = {
  content: PortfolioDictionary;
};

type LightboxState = {
  media: string[];
  title: string;
  index: number;
};

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const heading = content.sectionHeadings.projects;
  const totalProjects = content.projects.length;
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState(1);
  const [lightboxFitWidth, setLightboxFitWidth] = useState(true);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setLightboxZoom(1);
    setLightboxFitWidth(true);
  }, []);

  const openLightbox = useCallback((media: string[], title: string, index = 0) => {
    setLightbox({ media, title, index });
    setLightboxZoom(1);
    setLightboxFitWidth(true);
  }, []);

  const showPrev = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const nextIndex = (prev.index - 1 + prev.media.length) % prev.media.length;
      return { ...prev, index: nextIndex };
    });
  }, []);

  const showNext = useCallback(() => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const nextIndex = (prev.index + 1) % prev.media.length;
      return { ...prev, index: nextIndex };
    });
  }, []);

  const zoomOut = useCallback(() => {
    setLightboxZoom((prev) => Math.max(1, Number((prev - 0.25).toFixed(2))));
  }, []);

  const zoomIn = useCallback(() => {
    setLightboxZoom((prev) => Math.min(3, Number((prev + 0.25).toFixed(2))));
  }, []);

  useEffect(() => {
    if (!lightbox) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      } else if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        zoomIn();
      } else if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        zoomOut();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeLightbox, lightbox, showNext, showPrev, zoomIn, zoomOut]);

  const lightboxImage = useMemo(() => {
    if (!lightbox) return null;
    return lightbox.media[lightbox.index];
  }, [lightbox]);

  return (
    <>
      <SectionShell id="projects" {...heading}>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {content.projects.map((project, index) => {
            const cardSpanClass =
              totalProjects === 1
                ? "md:col-span-2 xl:col-span-6"
                : totalProjects === 2
                  ? "xl:col-span-3"
                  : index === 0
                    ? "md:col-span-2 xl:col-span-4"
                    : "xl:col-span-2";

            const media = (project.gallery && project.gallery.length > 0 ? project.gallery : [project.image]).slice(0, 3);
            const mediaCount = media.length;
            const mainImage = media[0];

            return (
              <Card
                key={project.id}
                className={`group overflow-hidden rounded-2xl border border-border/80 bg-card/75 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 ${cardSpanClass}`}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(media, project.title)}
                  className="relative block w-full cursor-pointer overflow-hidden border-b border-border/80 bg-muted/20 text-left"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={mainImage}
                      alt={`${project.title} preview`}
                      fill
                      quality={96}
                      sizes="(min-width: 1280px) 66vw, (min-width: 768px) 50vw, 100vw"
                      className={cn(
                        "transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none",
                        project.imageFit === "contain" ? "object-contain p-3" : "object-cover object-top"
                      )}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground">
                      <Maximize2 className="h-3.5 w-3.5" />
                      {mediaCount > 1 ? `${mediaCount} screenshots` : "Expand"}
                    </div>
                  </div>
                </button>

                <CardHeader className="space-y-3 p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="font-[var(--font-display)] text-xl">{project.title}</CardTitle>
                    <p className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">{project.role}</p>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{project.summary}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 p-5 pt-0 md:p-6 md:pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="outline" className="border-border/70 bg-background/25">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{content.ui.projectContributionLabel}:</span> {project.impact}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border/70 px-2.5 py-1.5 text-sm text-primary transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
                      >
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border/70 px-2.5 py-1.5 text-sm text-primary transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
                      >
                        <ExternalLink className="h-4 w-4" /> {content.ui.demoLabel}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionShell>

      {lightbox && lightboxImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm" onClick={closeLightbox}>
          <div className="w-full max-w-7xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="truncate text-sm font-medium text-foreground">{lightbox.title}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLightboxFitWidth((prev) => !prev)}
                  className="inline-flex h-9 items-center justify-center rounded-md border border-border/70 bg-background/80 px-3 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  {lightboxFitWidth ? "Fit screen" : "Fit width"}
                </button>
                <button
                  type="button"
                  onClick={zoomOut}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background/80 text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                  aria-label="Zoom out"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-14 text-center text-xs font-medium text-foreground">{Math.round(lightboxZoom * 100)}%</span>
                <button
                  type="button"
                  onClick={zoomIn}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background/80 text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                  aria-label="Zoom in"
                >
                  <Plus className="h-4 w-4" />
                </button>
                {lightbox.media.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background/80 text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background/80 text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-background/80 text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                  aria-label="Close image viewer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="h-[78vh] overflow-auto rounded-xl border border-border/80 bg-black/70">
              <div className={cn("mx-auto px-2", lightboxFitWidth ? "w-full py-2" : "flex min-h-full w-full items-center justify-center py-2")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightboxImage}
                  alt={`${lightbox.title} enlarged screenshot`}
                  className={cn(
                    "select-none transition-transform duration-150",
                    lightboxFitWidth ? "h-auto w-full max-w-none" : "h-auto w-auto max-h-[75vh] max-w-full"
                  )}
                  style={{ transform: `scale(${lightboxZoom})`, transformOrigin: lightboxFitWidth ? "top center" : "center center" }}
                />
              </div>
            </div>

            <div className="mt-3 text-right text-xs text-muted-foreground">
              {lightbox.index + 1} / {lightbox.media.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
