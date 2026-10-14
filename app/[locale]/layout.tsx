import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import { SOSButton } from "@/components/SOSButton";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { images } from "@/data/company";
import { getDictionary, htmlLang, isLocale, locales } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { themeColor: "#0256B2", width: "device-width", initialScale: 1 };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.title, template: `%s | IMI` },
    description: t.meta.description,
    icons: { icon: images.favicon },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
    },
    openGraph: { title: t.meta.title, description: t.meta.description, images: [images.hero1], type: "website" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Instrumentación y Metrología Industrial S.R.L. de C.V.",
    alternateName: "IMI",
    url: SITE_URL,
    logo: images.logo,
    email: "contacto@imindustrial.mx",
    telephone: "+52-833-155-0189",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. de la Industria KM 14.5 Laguna de la Puerta",
      postalCode: "89603",
      addressLocality: "Altamira",
      addressRegion: "Tamaulipas",
      addressCountry: "MX",
    },
  };

  return (
    <html lang={htmlLang[locale]} className={inter.variable}>
      <body className="flex min-h-dvh flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers locale={locale} dict={t}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} t={t} />
          <SOSButton />
          <ChatbotWidget />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
