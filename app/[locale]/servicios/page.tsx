import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, CheckCircle2, Cpu, Flame, Layers, ShieldCheck, Wrench } from "lucide-react";
import { CtaBand, ServiceGroupSection } from "@/components/sections";
import { PageHero } from "@/components/ui";
import { images, technologyData } from "@/data/company";
import { getDictionary, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale as Locale);
  return { title: t.services.title, description: t.services.subtitle };
}

export default async function Page({ params }: P) {
  const locale = (await params).locale as Locale;
  const t = getDictionary(locale);
  const h = (p: string) => `/${locale}${p}`;

  return (
    <>
      <PageHero
        eyebrow={t.eyebrows.services}
        title={t.services.title}
        subtitle={t.services.subtitle}
        image={images.psvValvesBench}
        badgeLogo={images.logoMaintenance}
        badgeAlt="IMI Metrology & Maintenance"
        unitTag={t.unitTags.maintenanceField}
      />

      <div className="container-x space-y-16 py-14 lg:py-20">
        {/* DESTACADO TECNOLÓGICO: PRUEBA ELECTRÓNICA EN LÍNEA EVT ACCUTEST */}
        <section className="rounded-3xl border-2 border-brand-500/40 bg-gradient-to-br from-ink-950 via-brand-950 to-ink-900 text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 size-80 rounded-full bg-brand-500/10 blur-3xl" />
          
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 border border-brand-400/30 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-300">
                <Cpu className="size-3.5 text-yellow-400" />
                Tecnología Exclusiva de Campo
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                {technologyData.evtAccutest.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-brand-300 font-semibold">
                {technologyData.evtAccutest.subtitle}
              </p>
              <p className="mt-4 text-xs sm:text-sm text-ink-300 leading-relaxed">
                {technologyData.evtAccutest.description}
              </p>

              {/* Normativa y homologaciones */}
              <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-400 block mb-2">
                  Aprobación Normativa Internacional:
                </span>
                <ul className="space-y-1.5 text-xs text-ink-200 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                    <span>ASME Sección I (PG-72.2 1-83-31)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                    <span>ASME Sección VIII (UG-134 1-83-350)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" />
                    <span>API Recommended Practice 576 (Sección 6.2.18.3)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={h("/contacto")} className="btn btn-primary text-xs font-bold py-2.5 px-5">
                  Cotizar Prueba EVT en Línea
                </Link>
                <a
                  href="https://wa.me/528331550189?text=Hola%20IMI,%20requiero%20información%20técnica%20sobre%20la%20prueba%20EVT%20Accutest%20en%20caliente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-dark text-xs py-2.5 px-5"
                >
                  Consultar con Ingeniero de Guardia
                </a>
              </div>
            </div>

            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-ink-950">
              <Image
                src={images.accutestElectronic}
                alt="Prueba electrónica de válvulas con EVT Accutest en campo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 z-10 rounded-full bg-brand-700/90 backdrop-blur-md px-3.5 py-1 text-xs font-mono font-bold text-white shadow">
                Dispositivo Auxiliar EVT Accutest en Sitio
              </span>
            </div>
          </div>
        </section>

        {/* MANTENIMIENTO INTEGRAL Y BANCO PSV NOM-093 */}
        <section className="grid gap-8 lg:grid-cols-2 lg:items-center bg-white rounded-3xl p-6 sm:p-10 border border-ink-200 shadow-md">
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-ink-200 bg-ink-950">
            <Image
              src={images.psvValvesBench}
              alt="Banco de pruebas y calibración de válvulas de seguridad NOM-093-SCFI-2020"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 z-10 rounded-full bg-ink-900/90 backdrop-blur-md px-3.5 py-1 text-xs font-mono font-bold text-brand-200 border border-white/20">
              Banco de Pruebas de Válvulas PSV
            </span>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
              <ShieldCheck className="size-3.5 text-brand-600" />
              Acreditación Oficial NOM-093-SCFI-2020
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink-950">
              Ciclo Integral para Válvulas de Seguridad y Alivio (PSV)
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-600 leading-relaxed">
              Realizamos la inspección inicial (pre-pop), desarme completo, lapeado plano con placas ópticas monocromáticas, ajuste de presión de seteo y emisión de dictamen técnico con etiqueta metálica remachada y precinto oficial.
            </p>

            <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-ink-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-brand-600 shrink-0 mt-0.5" />
                <span><strong>The National Board (NBIC 2023):</strong> Personal certificado en Pressure Relief Valve Repair (VR).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-brand-600 shrink-0 mt-0.5" />
                <span><strong>Lapeado óptico:</strong> Verificación de planicidad absoluta de toberas y discos con bandas de helio.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-brand-600 shrink-0 mt-0.5" />
                <span><strong>Trazabilidad en campo:</strong> Placas metálicas de identificación y precinto numerado para auditorías.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE GRUPOS DE SERVICIOS */}
        <ServiceGroupSection group="lab" locale={locale} t={t} />
        <ServiceGroupSection group="calibration" locale={locale} t={t} />
        <ServiceGroupSection group="staffing" locale={locale} t={t} />
      </div>

      <CtaBand t={t} locale={locale} />
    </>
  );
}
