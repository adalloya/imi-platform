import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { businessUnits, type BusinessUnit } from "@/data/company";
import { type Locale } from "@/lib/i18n";

export function BusinessUnitsSection({ locale }: { locale: Locale }) {
  const h = (p: string) => `/${locale}${p}`;

  return (
    <section id="unidades-de-negocio" className="scroll-mt-20 bg-ink-50/70 py-16 lg:py-24 border-y border-ink-200">
      <div className="container-x">
        {/* Encabezado de sección con alta jerarquía UX */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-800">
            <Sparkles className="size-3.5 text-brand-600" />
            Estructura Corporativa IMI
          </div>
          <h2 className="h-section mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-950">
            Nuestras 3 Unidades Estratégicas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-600 leading-relaxed">
            Cada división cuenta con su propia identidad, acreditaciones oficiales, laboratorio y especialistas para dar solución exacta a los retos de su planta.
          </p>
        </div>

        {/* Grid de las 3 Unidades con Logotipos Grandes y Protagonistas */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {businessUnits.map((unit: BusinessUnit, index: number) => (
            <article
              key={unit.id}
              className="group relative flex flex-col rounded-3xl border-2 border-ink-200/90 bg-white overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-600 hover:shadow-2xl"
            >
              {/* Fotografía de Campo / Laboratorio / Aula */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-ink-950">
                <Image
                  src={unit.image}
                  alt={`Instalaciones ${unit.fullName}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/40 to-transparent" />

                {/* Badge flotante de acreditación o alcance */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center rounded-full bg-ink-950/90 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold tracking-wide text-brand-200 border border-white/20 shadow-lg">
                    {unit.badge}
                  </span>
                </div>

                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center rounded-full bg-brand-700 text-white px-2.5 py-0.5 text-[11px] font-mono font-extrabold tracking-wider shadow">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* LOGOTIPO OFICIAL GRANDE Y PROTAGONISTA (CENTRADO Y RESALTADO) */}
              <div className="relative -mt-16 sm:-mt-20 z-20 flex size-32 sm:size-36 mx-auto items-center justify-center rounded-3xl bg-white p-3 shadow-2xl border-2 border-brand-100 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={unit.logo}
                  alt={`Logotipo Oficial ${unit.fullName}`}
                  width={144}
                  height={144}
                  priority
                  className="size-full object-contain filter drop-shadow-sm"
                />
              </div>

              {/* Contenido Técnico & UX */}
              <div className="flex flex-1 flex-col p-6 pt-3 text-center sm:text-left">
                <div className="text-center">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700">
                    División Especializada
                  </span>
                  <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-ink-950 group-hover:text-brand-700 transition-colors leading-tight">
                    {unit.fullName}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-brand-700 font-mono">
                    {unit.tagline}
                  </p>
                </div>

                <p className="mt-4 text-sm text-ink-600 leading-relaxed text-left">
                  {unit.description}
                </p>

                {/* Capacidades Clave */}
                <div className="mt-5 border-t border-ink-100 pt-4 text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-500 font-mono flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-brand-600" />
                    Capacidades Principales:
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {unit.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-700 leading-snug">
                        <CheckCircle2 className="size-4 shrink-0 text-brand-600 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acciones de Conversión */}
                <div className="mt-auto pt-6">
                  <Link
                    href={h(unit.primaryHref)}
                    className="btn btn-primary w-full text-center text-sm font-bold shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{unit.primaryLabel}</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="mt-3 text-center">
                    <Link
                      href={h(unit.secondaryHref)}
                      className="text-xs font-semibold text-ink-500 hover:text-brand-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{unit.secondaryLabel}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
