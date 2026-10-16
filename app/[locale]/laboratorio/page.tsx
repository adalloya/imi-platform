import type { Metadata } from "next";
import Image from "next/image";
import { Award, CheckCircle2, Droplets, Gauge, ShieldCheck, Thermometer } from "lucide-react";
import { AccreditationGrid, CtaBand, ServiceGroupSection } from "@/components/sections";
import { PageHero } from "@/components/ui";
import { images } from "@/data/company";
import { getDictionary, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale as Locale);
  return { title: t.lab.title, description: t.lab.subtitle };
}

export default async function Page({ params }: P) {
  const locale = (await params).locale as Locale;
  const t = getDictionary(locale);
  const steps = [t.lab.s1, t.lab.s2, t.lab.s3, t.lab.s4];

  return (
    <>
      <PageHero
        eyebrow={t.eyebrows.lab}
        title={t.lab.title}
        subtitle={t.lab.subtitle}
        image={images.flowCalibrationFl55}
        badgeLogo={images.logoMaintenance}
        badgeAlt="IMI Metrology & Maintenance"
        unitTag={t.unitTags.maintenance}
      />

      <div className="container-x py-14 lg:py-20 space-y-16">
        {/* Banner oficial Acreditación EMA FL-55 */}
        <div className="rounded-2xl border-2 border-brand-500/30 bg-gradient-to-r from-brand-900 via-ink-950 to-brand-950 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-3 py-1 text-xs font-mono font-bold text-brand-300 border border-brand-400/30">
              <ShieldCheck className="size-4 text-emerald-400" />
              Acreditación Oficial EMA No. FL-55
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-3">
              Laboratorio Acreditado en Medición de Flujo conforme a ISO/IEC 17025
            </h2>
            <p className="text-sm text-ink-300 mt-2 leading-relaxed">
              Emisión de informes metrológicos oficiales con cálculo de incertidumbre expandida y patrones directamente trazables a CENAM (México) y NIST (Estados Unidos).
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-2 font-mono text-xs">
            <div className="bg-white/10 rounded-xl px-4 py-2 border border-white/10">
              <span className="text-brand-300 font-bold block">Acreditación EMA:</span>
              <span className="text-white font-extrabold text-base">FL-55</span>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2 border border-white/10">
              <span className="text-brand-300 font-bold block">Norma Internacional:</span>
              <span className="text-white font-extrabold text-base">ISO/IEC 17025:2017</span>
            </div>
          </div>
        </div>

        {/* Grupo de Servicios de Laboratorio */}
        <ServiceGroupSection group="lab" locale={locale} t={t} />

        {/* Las 3 Magnitudes Físicas Principales con Fotos Reales del MediaKit */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
              Alcances Físicos en Laboratorio Permanente
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-950 mt-1">
              Capacidades Metrológicas Especializadas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Flujo */}
            <div className="card overflow-hidden flex flex-col">
              <div className="relative h-48 w-full bg-ink-950">
                <Image
                  src={images.flowCalibrationFl55}
                  alt="Banco de Calibración de Flujo Acreditado EMA FL-55"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-ink-900/90 text-brand-300 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                  Acreditación FL-55
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-ink-950 flex items-center gap-2">
                    <Droplets className="size-4 text-brand-600" />
                    Medición de Flujo
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-600 leading-relaxed">
                    Flujómetros Coriolis másicos, electromagnéticos, vórtex y turbinas. Método de pesaje gravimétrico y medidor maestro con trazabilidad CENAM.
                  </p>
                </div>
              </div>
            </div>

            {/* Presión */}
            <div className="card overflow-hidden flex flex-col">
              <div className="relative h-48 w-full bg-ink-950">
                <Image
                  src={images.pressureMetrologyLab}
                  alt="Laboratorio de Metrología de Presión"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-ink-900/90 text-brand-300 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                  Hasta 15,000 psi
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-ink-950 flex items-center gap-2">
                    <Gauge className="size-4 text-brand-600" />
                    Presión & Vacío
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-600 leading-relaxed">
                    Manómetros de proceso, transmisores inteligentes HART y balanzas de pesos muertos hidráulicas y neumáticas de alta precisión.
                  </p>
                </div>
              </div>
            </div>

            {/* Temperatura */}
            <div className="card overflow-hidden flex flex-col">
              <div className="relative h-48 w-full bg-ink-950">
                <Image
                  src={images.temperatureMetrologyLab}
                  alt="Laboratorio de Metrología de Temperatura"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-ink-900/90 text-brand-300 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                  -25 °C a 660 °C
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-ink-950 flex items-center gap-2">
                    <Thermometer className="size-4 text-brand-600" />
                    Temperatura
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-600 leading-relaxed">
                    Calibración de termopares (J, K, T, E, R, S), termorresistencias RTD Pt100 y transmisores de temperatura con bloques secos de alta estabilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Servicio */}
        <section className="grid gap-8 lg:grid-cols-2 lg:items-center bg-ink-50 rounded-2xl p-6 sm:p-10 border border-ink-200">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-950 shadow-md">
            <Image
              src={images.flowCalibrationFl55}
              alt="Proceso de Calibración Acreditada"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink-950">{t.lab.process}</h2>
            <p className="mt-2 text-sm text-ink-600">
              Protocolo riguroso de trazabilidad metrológica desde la recepción física hasta la entrega de dictamen oficial:
            </p>
            <ol className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-ink-200 shadow-2xs">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-600 font-mono font-bold text-white text-sm">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-xs sm:text-sm text-ink-800">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Acreditaciones Oficiales */}
        <section>
          <h2 className="text-2xl font-bold text-ink-950 mb-6">{t.accred.title}</h2>
          <AccreditationGrid locale={locale} />
        </section>
      </div>

      <CtaBand t={t} locale={locale} />
    </>
  );
}
