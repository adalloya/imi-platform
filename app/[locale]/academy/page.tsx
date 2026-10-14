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
        <Image src={images.course} alt="" fill priority className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-brand-900/60" />
        <div className="grid-lines absolute inset-0" />
        <div className="container-x relative py-14 sm:py-20">
          <div className="mb-4 inline-block rounded bg-white p-2.5 shadow-sm">
            <Image
              src={images.logoAc}
              alt="Logotipo Oficial IMI Academy"
              width={220}
              height={70}
              priority
              className="h-12 sm:h-14 w-auto object-contain"
            />
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
