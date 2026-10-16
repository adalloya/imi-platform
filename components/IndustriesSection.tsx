import {
  Zap,
  Flame,
  Fuel,
  Mountain,
  Boxes,
  Wind,
  Pill,
  Utensils,
  Sprout,
  FileText,
  Building2,
  Sparkles,
  Ship,
  Truck,
  Activity,
  Cpu,
  Layers,
} from "lucide-react";
import { industriesData } from "@/data/company";
import { type Locale } from "@/lib/i18n";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  Flame,
  Fuel,
  Mountain,
  Boxes,
  Wind,
  Pill,
  Utensils,
  Sprout,
  FileText,
  Building2,
  Sparkles,
  Ship,
  Truck,
  Activity,
  Cpu,
};

export function IndustriesSection({ locale }: { locale: Locale }) {
  return (
    <section className="bg-ink-50 py-16 lg:py-24 border-t border-ink-200">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-800">
            <Layers className="size-3.5 text-brand-600" />
            Cobertura Multisectorial
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-950">
            16 Industrias Estratégicas Atendidas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-600 leading-relaxed">
            Nuestros especialistas cuentan con homologaciones y certificaciones de seguridad específicas para operar en los entornos industriales más exigentes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {industriesData.map((ind) => {
            const IconComp = ICON_MAP[ind.icon] || Cpu;
            return (
              <div
                key={ind.id}
                className="group flex items-center gap-3.5 rounded-xl border border-ink-200 bg-white p-4 shadow-xs transition-all duration-200 hover:border-brand-500 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <IconComp className="size-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-ink-800 group-hover:text-brand-700 transition-colors leading-snug">
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
