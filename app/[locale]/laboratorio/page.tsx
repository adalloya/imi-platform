import type { Metadata } from "next";
import Image from "next/image";
import { AccreditationGrid, CtaBand, ServiceGroupSection } from "@/components/sections";
import { PageHero } from "@/components/ui";
import { images } from "@/data/company";
import { getDictionary, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale);
  return { title: t.lab.title, description: t.lab.subtitle };
}

export default async function Page({ params }: P) {
  const locale = (await params).locale as Locale;
  const t = getDictionary(locale);
  const steps = [t.lab.s1, t.lab.s2, t.lab.s3, t.lab.s4];
  return (
    <>
      <PageHero
        eyebrow="Laboratorio Acreditado · NMX-EC-17025-IMNC-2018 (ISO/IEC 17025)"
        title={t.lab.title}
        subtitle={t.lab.subtitle}
        image={images.unitMaintenance}
        badgeLogo={images.logoMaintenance}
        badgeAlt="IMI Metrology & Maintenance"
        unitTag="División de Metrología e Inspección"
      />
      <div className="container-x py-14 lg:py-20">
        <ServiceGroupSection group="lab" locale={locale} t={t} />

        <section className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ink-100">
            <Image src={images.workshop} alt={t.lab.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="h-section">{t.lab.process}</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-brand-600 font-mono font-bold text-white">{i + 1}</span>
                  <span className="font-medium text-ink-800">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="h-section mb-6">{t.accred.title}</h2>
          <AccreditationGrid locale={locale} />
        </section>
      </div>
      <CtaBand t={t} locale={locale} />
    </>
  );
}
