import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageTransition } from "@/components/ui/PageTransition";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lục San",
    template: "%s — Lục San",
  },
  description:
    "Geological patience made tangible. Objects from natural materials designed to last generations.",
  metadataBase: new URL("https://lucsan.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lục San",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        {/*
          Shell: Header (fixed left rail on desktop, fixed top bar on mobile)
          + a spacer div that reserves 200px in normal flow for the rail on desktop
          + the offset content column (main + footer)
        */}
        <div style={{ display: "flex" }}>
          <Header />
          {/* Spacer mirrors the 200px fixed rail — invisible, layout-only */}
          <div
            className="hidden md:block"
            style={{ width: "200px", flexShrink: 0 }}
            aria-hidden="true"
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <main>
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
