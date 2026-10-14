import type { Metadata } from "next";
import { PortalMock } from "@/components/PortalMock";
import { PageHero } from "@/components/ui";
import { images } from "@/data/company";
import { getDictionary } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale);
  return { title: t.portal.title, description: t.portal.subtitle };
}

export default async function Page({ params }: P) {
  const t = getDictionary((await params).locale);
  return (
    <>
      <PageHero
        eyebrow="Trazabilidad & Gestión de Activos"
        title={t.portal.title}
        subtitle={t.portal.subtitle}
        image={images.plant}
      />
      <div className="container-x py-12 lg:py-16">
        <PortalMock />
      </div>
    </>
  );
}
