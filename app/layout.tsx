import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { site } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Tatuagem e Piercing em Maringá`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Tatuagem e Piercing em Maringá`,
    description: site.description,
    images: [{ url: "/images/hero/william.jpg", width: 1440, height: 1800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: site.name,
  description: site.description,
  image: `${site.url}/images/brand/logo.jpg`,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Pedro Taques, 2095 — Jardim Alvorada",
    addressLocality: "Maringá",
    addressRegion: "PR",
    postalCode: site.zip,
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: site.googleRating.count,
  },
  sameAs: [site.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <Loader />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
