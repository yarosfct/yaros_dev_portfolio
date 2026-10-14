import { FileDown } from "lucide-react";

import { cvFileOrder, cvFiles } from "@/data/cv";
import { PortfolioDictionary } from "@/data/i18n";
import { publicAsset } from "@/lib/public-asset";
import { cn } from "@/lib/utils";

import { buttonVariants } from "./ui/button";

type CvDownloadsProps = {
  content: PortfolioDictionary;
  layout: "hero" | "contact";
};

const linkClass =
  "card-surface-soft flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-border/80 p-4 text-sm transition-all duration-200 hover:border-primary/30 hover:shadow-sm dark:bg-background/35 dark:hover:bg-accent/60";

export function CvDownloads({ content, layout }: CvDownloadsProps) {
  const links = cvFileOrder.map((id) => {
    const file = cvFiles[id];
    const copy = content.cv.options[id];

    return {
      id,
      href: publicAsset(file.href),
      filename: file.filename,
      label: layout === "hero" ? copy.shortLabel : copy.label,
      ariaLabel: copy.ariaLabel
    };
  });

  return (
    <div className={cn(layout === "contact" && "md:col-span-2", "space-y-2.5")}>
      <p
        id={layout === "hero" ? "cv-downloads-label" : "cv-downloads-contact-label"}
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
          layout === "hero" && "mx-auto w-fit md:mx-0"
        )}
      >
        {content.cv.label}
      </p>
      <div
        role="group"
        aria-labelledby={layout === "hero" ? "cv-downloads-label" : "cv-downloads-contact-label"}
        className={cn(
          "grid gap-2.5 md:gap-3",
          layout === "hero" ? "grid-cols-2 md:flex md:flex-wrap" : "grid-cols-1 sm:grid-cols-2"
        )}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            download={link.filename}
            aria-label={link.ariaLabel}
            data-cv={link.id}
            className={
              layout === "hero"
                ? cn(buttonVariants({ size: "lg", variant: "outline" }), "min-h-11 justify-center gap-2 px-3")
                : linkClass
            }
          >
            <FileDown className={cn("h-4 w-4 shrink-0", layout === "contact" && "text-primary")} />
            <span className={cn(layout === "contact" && "text-left")}>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
