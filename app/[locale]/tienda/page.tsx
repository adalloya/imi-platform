import type { Metadata } from "next";
import { StoreCatalog } from "@/components/StoreCatalog";
import { PageHero } from "@/components/ui";
import { images } from "@/data/company";
import { getDictionary, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale as Locale);
  return { title: t.store.title, description: t.store.subtitle };
}

export default async function Page({ params }: P) {
  const t = getDictionary((await params).locale as Locale);
  return (
    <>
      <PageHero
        eyebrow={t.eyebrows.store}
        title={t.store.title}
        subtitle={t.store.subtitle}
        image={images.unitInstruments}
        badgeLogo={images.logoInstruments}
        badgeAlt="IMI Instruments & Equipment"
        unitTag={t.unitTags.instruments}
      />
      <div className="container-x py-12 lg:py-16">
        <StoreCatalog />
      </div>
    </>
  );
}
