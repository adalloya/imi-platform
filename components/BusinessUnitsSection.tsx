import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { businessUnits, type BusinessUnit } from "@/data/company";
import { type Locale } from "@/lib/i18n";

export function BusinessUnitsSection({ locale }: { locale: Locale }) {
  const h = (p: string) => `/${locale}${p}`;

  return (
    <section id="unidades-de-negocio" className="scroll-mt-24 bg-ink-50/70 py-16 lg:py-24 border-y border-ink-200">
      <div className="container-x">
        {/* Encabezado de sección con alta jerarquía UX */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">
            Estructura Corporativa IMI
          </p>
          <h2 className="h-section mt-2 text-3xl sm:text-4xl font-extrabold text-ink-950">
            Nuestras 3 Unidades de Negocio
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-600 leading-relaxed">
            Tres divisiones especializadas con acreditaciones oficiales, infraestructura propia y personal técnico altamente calificado para respaldar la continuidad operativa de su planta.
          </p>
        </div>

        {/* Grid de las 3 Unidades Estratégicas */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {businessUnits.map((unit: BusinessUnit) => (
            <article
              key={unit.id}
              className="group relative flex flex-col rounded-3xl border border-ink-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-2xl"
            >
              {/* Fotografía de Campo / Laboratorio / Aula */}
              <div className="relative h-60 w-full overflow-hidden bg-ink-950">
                <Image
                  src={unit.image}
                  alt={unit.fullName}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
                
                {/* Badge flotante de alcance */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-ink-950/80 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold tracking-wide text-brand-200 border border-white/10 shadow-sm">
                    {unit.badge}
                  </span>
                </div>
              </div>

              {/* Insignia Oficial / Logotipo de la Unidad */}
              <div className="relative -mt-12 ml-6 z-20 flex size-20 sm:size-24 items-center justify-center rounded-2xl bg-white p-2.5 shadow-xl border border-ink-100 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={unit.logo}
                  alt={`Logotipo ${unit.fullName}`}
                  width={80}
                  height={80}
                  className="size-full object-contain"
                />
              </div>

              {/* Contenido Técnico & UX */}
              <div className="flex flex-1 flex-col p-6 pt-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-700">
                    Unidad {unit.id === "instruments" ? "01" : unit.id === "maintenance" ? "02" : "03"}
                  </span>
                  <span className="text-ink-300">·</span>
                  <span className="text-xs text-ink-500 font-medium">División Oficial</span>
                </div>

                <h3 className="mt-1 text-xl font-extrabold text-ink-950 group-hover:text-brand-700 transition-colors">
                  {unit.fullName}
                </h3>

                <p className="mt-1 text-xs font-semibold text-brand-700 font-mono">
                  {unit.tagline}
                </p>

                <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                  {unit.description}
                </p>

                {/* Capacidades Clave */}
                <div className="mt-5 border-t border-ink-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-400 font-mono">
                    Alcance Operativo:
                  </p>
                  <ul className="mt-3 space-y-2">
                    {unit.highlights.map((hightlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-700 leading-snug">
                        <CheckCircle2 className="size-4 shrink-0 text-brand-600 mt-0.5" />
                        <span>{hightlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acciones de Conversión */}
                <div className="mt-auto pt-6">
                  <Link
                    href={h(unit.primaryHref)}
                    className="btn btn-primary w-full text-center text-sm font-bold shadow-sm"
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
