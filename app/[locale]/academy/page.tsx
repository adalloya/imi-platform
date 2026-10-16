import type { Metadata } from "next";
import Image from "next/image";
import { AcademyCatalog } from "@/components/AcademyCatalog";
import { images } from "@/data/company";
import { getDictionary, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale as Locale);
  return { title: t.academy.title, description: t.academy.subtitle };
}

export default async function Page({ params }: P) {
  const t = getDictionary((await params).locale as Locale);
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <Image src={images.unitAcademy} alt="Aula de Capacitación IMI Academy" fill priority className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-brand-900/60" />
        <div className="grid-lines absolute inset-0" />
        <div className="container-x relative py-12 sm:py-16 lg:py-20">
          <div className="mb-6 inline-flex items-center gap-4 sm:gap-5 rounded-2xl bg-white p-3.5 sm:p-4 shadow-2xl border border-white/20">
            <Image
              src={images.logoAcademy}
              alt="Logotipo Oficial IMI Academy México 2010"
              width={96}
              height={96}
              priority
              className="size-16 sm:size-20 md:size-24 object-contain"
            />
            <div className="pr-3 text-left">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700">
                {t.eyebrows.academyDivision}
              </span>
              <span className="block text-base sm:text-lg md:text-xl font-extrabold text-ink-950">
                {t.eyebrows.academyFounded}
              </span>
            </div>
          </div>
          <p className="text-xs font-mono font-bold tracking-widest text-brand-200 uppercase">
            {t.eyebrows.academy}
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
