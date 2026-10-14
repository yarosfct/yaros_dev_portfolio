/**
 * CV files in `public/cv`. The href is fixed: the UI language never selects
 * which PDF opens. Visitors choose by clicking the Portuguese or English link.
 */
export const cvFiles = {
  pt: {
    href: "/cv/Yaroslav_Hayduk_CV_PT.pdf",
    filename: "Yaroslav_Hayduk_CV_PT.pdf"
  },
  en: {
    href: "/cv/Yaroslav_Hayduk_CV_EN.pdf",
    filename: "Yaroslav_Hayduk_CV_EN.pdf"
  }
} as const;

export type CvFileId = keyof typeof cvFiles;

/** English first, then Portuguese, matching the language toggle order. */
export const cvFileOrder: CvFileId[] = ["en", "pt"];
