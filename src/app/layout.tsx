import type { Metadata, Viewport } from "next";
import { Mona_Sans, Onest } from "next/font/google";
import { Header, Footer, MobilZavolat } from "@/components/Chrome";
import { JsonLd, firmaSchema } from "@/components/Seo";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Instalatér a topenář Plzeň | Jaro TopInstal, Zbůch",
    template: "%s | Jaro TopInstal, Plzeň",
  },
  description:
    "Rozvody vody, topení a odpadů, podlahové topení, radiátory a kanalizace v Plzni a okolí. Jaro TopInstal ze Zbůchu, přes 15 let praxe. Tel. 722 909 605.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Jaro TopInstal",
    images: [{ url: "/foto/rozvody-stena.jpg", width: 1600, height: 1200 }],
  },
  icons: { icon: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#141414",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${mona.variable} ${onest.variable} antialiased`}>
      <body>
        <JsonLd data={firmaSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobilZavolat />
      </body>
    </html>
  );
}
