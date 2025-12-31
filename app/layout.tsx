import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | presencecr.digital",
    default: "Diseño Web Profesional en Costa Rica | presencecr.digital — Páginas Web desde $150",
  },
  description: "Creamos páginas web profesionales para emprendedores y pymes en Costa Rica. Diseño moderno, entrega en 24 horas y precios accesibles desde $150. ¡Cotizá por WhatsApp!",
  keywords: ["diseño web costa rica", "páginas web profesionales costa rica", "diseño web pymes costa rica", "crear página web costa rica", "diseño web san josé", "páginas web baratas costa rica", "agencia digital costa rica"],
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: "presencecr.digital",
    title: "Diseño Web Profesional en Costa Rica | Páginas Web desde $150",
    description: "Ayudamos a emprendedores y pymes de Costa Rica a conseguir más clientes con una página web profesional, moderna y lista para vender. Entrega en 24 horas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web Profesional en Costa Rica | presencecr.digital",
    description: "Páginas web profesionales para emprendedores y pymes. Desde $150, entrega en 24 horas.",
  },
};

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
