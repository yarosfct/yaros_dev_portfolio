import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { Providers } from "@/components/layout/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Yaroslav Hayduk | Full stack Developer",
  description:
    "Personal portfolio of Yaroslav Hayduk — full stack developer focused on polished frontend experiences, performant web apps, and accessible product interfaces.",
  keywords: ["Full stack developer", "Frontend developer", "Next.js", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Yaroslav Hayduk | Full stack Developer",
    description: "Portfolio website showcasing projects, experience, stack, and contact information.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${grotesk.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
