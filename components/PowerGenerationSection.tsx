import Image from "next/image";
import Link from "next/link";
import { Zap, ShieldCheck, Cpu, ArrowRight, Building, CheckCircle2 } from "lucide-react";
import { images, powerGenerationData } from "@/data/company";
import { tr, type Locale } from "@/lib/i18n";

export function PowerGenerationSection({ locale }: { locale: Locale }) {
  const h = (p: string) => `/${locale}${p}`;

  return (
    <section className="bg-ink-950 text-white py-16 lg:py-24 relative overflow-hidden border-t border-brand-900">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 size-96 rounded-full bg-brand-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 size-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Section Eyebrow & Title */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 border border-brand-400/30 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-200">
            <Zap className="size-3.5 text-yellow-400" />
            Liderazgo en Generación Eléctrica & Paros de Planta
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {tr(powerGenerationData.headline, locale)}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-300 leading-relaxed">
            Especialistas en instrumentación de turbinas de gas, vapor y calderas de recuperación (HRSG). Contamos con cuadrillas certificadas 24/7 y patrones trazables con acreditación oficial EMA FL-55.
          </p>
        </div>

        {/* Turbines Supported */}
        <div className="mt-10 rounded-2xl border border-ink-800 bg-ink-900/70 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-brand-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Cpu className="size-4" />
              <span>Turbomáquinas & Equipos Mayores Atendidos</span>
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-white">
              Solvencia Técnica en Turbinas de Gas, Vapor y Motores Wärtsilä
            </h3>
            <p className="mt-2 text-sm text-ink-400">
              Experiencia en campo y taller con las plataformas tecnológicas más exigentes del sector energético:
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {powerGenerationData.turbinesSupported.map((t, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-3.5 flex items-start gap-3">
                  <CheckCircle2 className="size-4 text-brand-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-white font-mono">{t.model}</p>
                    <p className="text-xs text-ink-300 mt-0.5">{t.specs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-ink-400 font-mono">
              Soporte en paros programados, calibración fiscal y pruebas en línea EVT Accutest
            </span>
            <Link href={h("/contacto")} className="btn btn-primary text-xs font-bold py-2 px-4 shrink-0 flex items-center gap-2">
              <span>Solicitar Cuadrilla para Paro</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Enterprise Clients Grid */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                  Respaldo Institucional
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Empresas y Operadores que Confían en IMI
              </h3>
            </div>
            <span className="text-xs font-mono text-ink-400">
              Contratos plurianuales de calibración, mantenimiento a válvulas PSV y paros de planta
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {powerGenerationData.clients.map((c, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl border border-white/10 bg-ink-900/60 p-4 flex flex-col items-center justify-between text-center transition-all duration-300 hover:border-brand-400/50 hover:bg-brand-950/40 hover:shadow-lg hover:shadow-brand-500/10"
              >
                <div className="w-full h-14 flex items-center justify-center px-2 py-1">
                  {c.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-11 max-w-[130px] w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 filter drop-shadow"
                    />
                  ) : (
                    <div className="flex items-center justify-center size-8 rounded-lg bg-brand-500/10 text-brand-400">
                      <Building className="size-4" />
                    </div>
                  )}
                </div>
                <div className="mt-2 w-full pt-2 border-t border-white/5">
                  <p className="text-xs font-bold text-white/95 leading-tight group-hover:text-brand-300 transition-colors">
                    {c.name}
                  </p>
                  <p className="text-[10px] text-ink-400 mt-1 font-mono leading-tight line-clamp-2">
                    {c.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
