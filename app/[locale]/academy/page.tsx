import type { Metadata } from "next";
import { AcademyCatalog } from "@/components/AcademyCatalog";
import { PageHero } from "@/components/ui";
import { images } from "@/data/company";
import { getDictionary } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale);
  return { title: t.academy.title, description: t.academy.subtitle };
}

import Image from "next/image";

export default async function Page({ params }: P) {
  const t = getDictionary((await params).locale);
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <Image src={images.unitAcademy} alt="Aula de Capacitación IMI Academy" fill priority className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-brand-900/60" />
        <div className="grid-lines absolute inset-0" />
        <div className="container-x relative py-12 sm:py-16 lg:py-20">
          <div className="mb-5 inline-flex items-center gap-4 rounded-2xl bg-white p-3 shadow-xl border border-white/20">
            <Image
              src={images.logoAcademy}
              alt="Logotipo Oficial IMI Academy México 2010"
              width={72}
              height={72}
              priority
              className="size-14 sm:size-16 object-contain"
            />
            <div className="pr-3 text-left">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-ink-500">
                División de Educación Técnica
              </span>
              <span className="block text-sm sm:text-base font-extrabold text-brand-900">
                IMI Academy · Fundada en 2010
              </span>
            </div>
          </div>
          <p className="text-xs font-mono font-bold tracking-widest text-brand-200 uppercase">
            Capacitación Técnica y Certificaciones · STPS IMI150311QL2-0013 · CONOCER EC0217
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t.academy.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-ink-300 sm:text-lg leading-relaxed">
            {t.academy.subtitle}
          </p>
        </div>
      </section>

      <div className="container-x py-12 lg:py-16">
        <AcademyCatalog />
      </div>
    </>
  );
}
