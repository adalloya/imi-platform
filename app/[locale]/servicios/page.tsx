import type { Metadata } from "next";
import { CtaBand, ServiceGroupSection } from "@/components/sections";
import { PageHero } from "@/components/ui";
import { images } from "@/data/company";
import { getDictionary, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale as Locale);
  return { title: t.services.title, description: t.services.subtitle };
}

export default async function Page({ params }: P) {
  const locale = (await params).locale as Locale;
  const t = getDictionary(locale);
  return (
    <>
      <PageHero
        eyebrow={t.eyebrows.services}
        title={t.services.title}
        subtitle={t.services.subtitle}
        image={images.unitMaintenance}
        badgeLogo={images.logoMaintenance}
        badgeAlt="IMI Metrology & Maintenance"
        unitTag={t.unitTags.maintenanceField}
      />
      <div className="container-x space-y-14 py-14 lg:py-20">
        <ServiceGroupSection group="lab" locale={locale} t={t} />
        <ServiceGroupSection group="calibration" locale={locale} t={t} />
        <ServiceGroupSection group="staffing" locale={locale} t={t} />
      </div>
      <CtaBand t={t} locale={locale} />
    </>
  );
}
