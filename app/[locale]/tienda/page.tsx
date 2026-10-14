import type { Metadata } from "next";
import { StoreCatalog } from "@/components/StoreCatalog";
import { PageHero } from "@/components/ui";
import { images } from "@/data/company";
import { getDictionary } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale);
  return { title: t.store.title, description: t.store.subtitle };
}

export default async function Page({ params }: P) {
  const t = getDictionary((await params).locale);
  return (
    <>
      <PageHero
        eyebrow="Equipos de Medición, Calibración y Control"
        title={t.store.title}
        subtitle={t.store.subtitle}
        image={images.unitInstruments}
        badgeLogo={images.logoInstruments}
        badgeAlt="IMI Instruments & Equipment"
        unitTag="Suministro, Venta y Renta"
      />
      <div className="container-x py-12 lg:py-16">
        <StoreCatalog />
      </div>
    </>
  );
}
