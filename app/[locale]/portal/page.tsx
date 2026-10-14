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
        eyebrow="Confiabilidad & Trazabilidad Metrológica"
        title="Portal de Clientes & Centro de Servicios"
        subtitle="Descarga de certificados trazables ISO/IEC 17025, seguimiento de órdenes de trabajo en laboratorio y constancias STPS DC-3."
        image={images.plant}
      />
      <div className="container-x py-10 lg:py-14">
        <PortalMock />
      </div>
    </>
  );
}
