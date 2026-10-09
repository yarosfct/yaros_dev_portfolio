import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { Providers } from "@/components/layout/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Yaroslav Hayduk | Computer Engineering, NOVA FCT",
  description:
    "Yaroslav Hayduk is finishing an Integrated Master's in Computer Engineering at NOVA FCT and is co-founder of CrestPoint Tech. Based in Aveiro, Portugal, and open to roles, remote preferred.",
  keywords: [
    "Yaroslav Hayduk",
    "NOVA FCT",
    "Aveiro",
    "Computer Engineering",
    "Engenharia Informática",
    "CrestPoint Tech",
    "Portfolio"
  ],
  openGraph: {
    title: "Yaroslav Hayduk | Computer Engineering, NOVA FCT",
    description:
      "Integrated Master's in Computer Engineering at NOVA FCT. Co-founder of CrestPoint Tech, based in Aveiro, Portugal.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${grotesk.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
