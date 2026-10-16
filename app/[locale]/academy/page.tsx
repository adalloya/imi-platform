import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, CheckCircle2, Cpu, GraduationCap, ShieldCheck, Users } from "lucide-react";
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

          {/* Badges oficiales del MediaKit */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl border-t border-white/10 pt-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <span className="text-xl sm:text-2xl font-black font-mono text-brand-400">16 Años</span>
              <p className="text-xs text-ink-300 mt-0.5">Trayectoria (2010 - 2026)</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <span className="text-xl sm:text-2xl font-black font-mono text-white">21 Cursos</span>
              <p className="text-xs text-ink-300 mt-0.5">Registro Oficial STPS</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400">Formato DC-3</span>
              <p className="text-xs text-ink-300 mt-0.5">Validez Curricular</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <span className="text-xl sm:text-2xl font-black font-mono text-yellow-400">EC0217</span>
              <p className="text-xs text-ink-300 mt-0.5">Estándar CONOCER · SEP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Institucional: Equipo de Instructores y Automatización MediaKit */}
      <section className="bg-ink-50 py-12 lg:py-16 border-b border-ink-200">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-ink-200 bg-ink-950">
              <Image
                src={images.academyInstructors}
                alt="Cuerpo de Instructores e Ingenieros de IMI Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 z-10 rounded-full bg-brand-700/90 backdrop-blur-md px-3.5 py-1 text-xs font-mono font-bold text-white shadow">
                Cuerpo Docente & Especialistas Certificados
              </span>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-0.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-800">
                <Users className="size-3.5 text-brand-600" />
                Formadores con Experiencia Real en Planta
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink-950">
                Aprenda con Ingenieros de Campo Activos en la Industria
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-600 leading-relaxed">
                Nuestros instructores son ingenieros en activo con amplia trayectoria en centrales eléctricas, refinerías y complejos petroquímicos. No enseñamos únicamente teoría: transmitimos prácticas reales de calibración, diagnóstico y comisionamiento.
              </p>

              {/* Tecnologías de Control en Cursos */}
              <div className="mt-6 space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-ink-500">
                  Plataformas y Tecnologías Integradas en el Temario:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-ink-700 font-medium">
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-ink-200 shadow-2xs">
                    <CheckCircle2 className="size-4 text-brand-600 shrink-0" />
                    <span>Rockwell Automation (Studio 5000 / PowerFlex)</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-ink-200 shadow-2xs">
                    <CheckCircle2 className="size-4 text-brand-600 shrink-0" />
                    <span>SIEMENS (SIMATIC S7-300 / S7-1200 / S7-1500)</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-ink-200 shadow-2xs">
                    <CheckCircle2 className="size-4 text-brand-600 shrink-0" />
                    <span>Preparación para Examen ISA CCST Nivel 1</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-ink-200 shadow-2xs">
                    <CheckCircle2 className="size-4 text-brand-600 shrink-0" />
                    <span>Válvulas de Seguridad NOM-093 (40 hrs en Banco)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x py-12 lg:py-16">
        <AcademyCatalog />
      </div>
    </>
  );
}
