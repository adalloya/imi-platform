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

        {/* Big Stat Banner */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-900/60 to-ink-900/80 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-brand-300 uppercase">
                Cobertura Nacional Comprobada
              </span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">
                  {powerGenerationData.percentage}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-brand-400 font-mono">
                  ({powerGenerationData.statCcc} CCC)
                </span>
              </div>
              <p className="mt-3 text-sm text-ink-300">
                De las centrales de Ciclo Combinado privadas activas en la República Mexicana confían su instrumentación crítica y válvulas de seguridad a IMI.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-300 font-mono">
              <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
              <span>Acreditación EMA FL-55 · NOM-093-SCFI</span>
            </div>
          </div>

          {/* Turbines Supported */}
          <div className="rounded-2xl border border-ink-800 bg-ink-900/70 p-6 sm:p-8 lg:col-span-2 flex flex-col justify-between">
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

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-ink-400 font-mono">
                Soporte en paros programados, calibración fiscal y pruebas en línea EVT Accutest
              </span>
              <Link href={h("/contacto")} className="btn btn-primary text-xs font-bold py-2 px-4 shrink-0 flex items-center gap-2">
                <span>Solicitar Cuadrilla para Paro</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Enterprise Clients Grid */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                Respaldo Institucional
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Empresas y Operadores que Confían en IMI
              </h3>
            </div>
            <span className="text-xs font-mono text-ink-400">
              Contratos plurianuales de calibración y mantenimiento
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {powerGenerationData.clients.map((c, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-ink-900/60 p-4 flex flex-col justify-center text-center transition-all hover:border-brand-500 hover:bg-brand-950/30"
              >
                <div className="flex items-center justify-center size-8 rounded-lg bg-brand-500/10 mx-auto text-brand-400 mb-2">
                  <Building className="size-4" />
                </div>
                <p className="text-sm font-bold text-white leading-tight">{c.name}</p>
                <p className="text-[11px] text-ink-400 mt-1 font-mono leading-tight">{c.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
