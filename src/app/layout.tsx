import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { Providers } from "@/components/layout/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Yaroslav Hayduk | Computer Engineering, NOVA FCT, Lisbon",
  description:
    "Yaroslav Hayduk is finishing an Integrated Master's in Computer Engineering at NOVA FCT in Lisbon and is co-founder of CrestPoint Tech. Portfolio with client work, university projects, and contact details.",
  keywords: [
    "Yaroslav Hayduk",
    "NOVA FCT",
    "Lisbon",
    "Computer Engineering",
    "Engenharia Informática",
    "CrestPoint Tech",
    "Portfolio"
  ],
  openGraph: {
    title: "Yaroslav Hayduk | Computer Engineering, NOVA FCT, Lisbon",
    description:
      "Integrated Master's in Computer Engineering at NOVA FCT, Lisbon, and co-founder of CrestPoint Tech.",
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
