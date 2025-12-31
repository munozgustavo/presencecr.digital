import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

import { getDictionary } from "@/app/lib/getDictionary";
import { siteConfig } from "@/config/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary(siteConfig.lang as any);

  return {
    title: {
      template: `%s | ${siteConfig.name}`,
      default: t.metadata.title,
    },
    description: t.metadata.description,
    keywords: ["diseño web costa rica", "páginas web profesionales costa rica", "diseño web pymes costa rica", "crear página web costa rica", "diseño web san josé", "páginas web baratas costa rica", "agencia digital costa rica"],
    openGraph: {
      type: "website",
      locale: siteConfig.lang === "en" ? "en_US" : "es_CR",
      siteName: siteConfig.name,
      title: t.metadata.ogTitle,
      description: t.metadata.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.metadata.ogTitle} | ${siteConfig.name}`,
      description: t.metadata.twitterDescription,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased flex flex-col min-h-screen`}
        style={{ fontFamily: 'var(--font-open-sans)' }}
      >
        {children}
      </body>
    </html>
  );
}
