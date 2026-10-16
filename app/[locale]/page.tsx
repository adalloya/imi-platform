import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Clock, ArrowDown } from "lucide-react";
import { AccreditationGrid, CtaBand } from "@/components/sections";
import { BusinessUnitsSection } from "@/components/BusinessUnitsSection";
import { PowerGenerationSection } from "@/components/PowerGenerationSection";
import { RealOperationsGallery } from "@/components/RealOperationsGallery";
import { IndustriesSection } from "@/components/IndustriesSection";
import { RoleSelector } from "@/components/RoleSelector";
import { SectionHeader } from "@/components/ui";
import { company, images } from "@/data/company";
import { locations } from "@/data/locations";
import { getDictionary, type Locale } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const t = getDictionary(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const t = getDictionary(locale);
  const h = (p: string) => `/${locale}${p}`;

  return (
    <>
      {/* HERO PRINCIPAL CON ALTA AUTORIDAD INDUSTRIAL */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <Image
          src={images.hero1}
          alt="Instalaciones y Servicios Industriales IMI"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-brand-900/50" />
        <div className="grid-lines absolute inset-0" />
        
        <div className="container-x relative pt-16 pb-20 sm:pt-24 lg:pt-32 lg:pb-28">
          {/* Eyebrow con credencial oficial */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-400/20 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-200 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-brand-400 animate-pulse" />
            {t.hero.eyebrow}
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.08]">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base text-ink-300 sm:text-lg leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Botones de acción inmediata */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a href="#unidades-de-negocio" className="btn btn-primary px-7 text-base font-bold shadow-lg">
              <span>{t.home.exploreUnits}</span>
              <ArrowDown className="size-4 animate-bounce" />
            </a>
            <Link href={h("/contacto")} className="btn btn-ghost-dark px-7 text-base">
              <span>{t.hero.ctaPrimary}</span>
            </Link>
          </div>

          {/* Badges de Confianza Industrial */}
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 border-t border-white/10 pt-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-6 text-brand-400 shrink-0" />
              <div>
                <p className="text-xs font-bold font-mono text-white">{t.home.trust1Title}</p>
                <p className="text-xs text-ink-400">{t.home.trust1Desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="size-6 text-brand-400 shrink-0" />
              <div>
                <p className="text-xs font-bold font-mono text-white">{t.home.trust2Title}</p>
                <p className="text-xs text-ink-400">{t.home.trust2Desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="size-6 text-brand-400 shrink-0" />
              <div>
                <p className="text-xs font-bold font-mono text-white">{t.home.trust3Title}</p>
                <p className="text-xs text-ink-400">{t.home.trust3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. SECCIÓN ESTELAR: LAS 3 UNIDADES DE NEGOCIO OFICIALES */}
      <BusinessUnitsSection locale={locale} />

      {/* 2. SOLVENCIA EN GENERACIÓN ELÉCTRICA & GRANDES COMPLEJOS (MEDIAKIT) */}
      <PowerGenerationSection locale={locale} />

      {/* 3. GALERÍA DE OPERACIONES REALES & LABORATORIOS (MEDIAKIT) */}
      <RealOperationsGallery locale={locale} />

      {/* 4. 16 INDUSTRIAS ESTRATÉGICAS ATENDIDAS (MEDIAKIT) */}
      <IndustriesSection locale={locale} />

      {/* 5. SOLUCIONES POR PERFIL / ESPECIALIDAD TÉCNICA */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow={t.home.navRoles}
            title={t.roles.title}
            subtitle={t.roles.subtitle}
          />
          <div className="mt-8">
            <RoleSelector />
          </div>
        </div>
      </section>

      {/* 3. HERRAMIENTAS DIGITALES Y AUTOSERVICIO (UX PRODUCTIVIDAD) */}
      <section className="bg-ink-50 py-16 lg:py-24 border-y border-ink-200">
        <div className="container-x">
          <SectionHeader
            eyebrow={t.home.toolsEyebrow}
            title={t.home.toolsTitle}
            subtitle={t.home.toolsSubtitle}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Toolbox */}
            <Link
              href={h("/toolbox")}
              className="card group flex flex-col justify-between p-8 hover:border-brand-600 transition-all duration-300 hover:shadow-xl bg-white rounded-2xl"
            >
              <div>
                <span className="inline-flex items-center rounded-md bg-brand-50 px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
                  {t.home.calcField}
                </span>
                <h3 className="text-2xl font-extrabold text-ink-900 mt-3 group-hover:text-brand-700 transition-colors">
                  {t.toolbox.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {t.toolbox.subtitle}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-ink-500 font-mono">
                  <li>• Conversor de unidades de presión (bar, psi, kPa, kg/cm²)</li>
                  <li>• Escalamiento de señales 4-20 mA NAMUR</li>
                  <li>• Tablas de termopares y RTD Pt100</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-ink-100 flex items-center justify-between text-sm font-bold text-brand-700">
                <span>{t.home.openToolbox}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Portal de Clientes */}
            <Link
              href={h("/portal")}
              className="card group flex flex-col justify-between p-8 hover:border-brand-600 transition-all duration-300 hover:shadow-xl bg-white rounded-2xl"
            >
              <div>
                <span className="inline-flex items-center rounded-md bg-brand-50 px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
                  {t.home.portalSync}
                </span>
                <h3 className="text-2xl font-extrabold text-ink-900 mt-3 group-hover:text-brand-700 transition-colors">
                  {t.portal.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {t.portal.subtitle}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-ink-500 font-mono">
                  <li>• Consulta y descarga de certificados de calibración por TAG</li>
                  <li>• Semáforo y alertas automáticas de vencimiento</li>
                  <li>• Historial y expediente digital trazable para auditorías</li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-ink-100 flex items-center justify-between text-sm font-bold text-brand-700">
                <span>{t.home.openPortal}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ACREDITACIONES Y MARCO NORMATIVO */}
      <section id="acreditaciones" className="container-x scroll-mt-28 py-16 lg:py-24">
        <SectionHeader
          eyebrow={t.eyebrows.accreditations}
          title={t.accred.title}
          subtitle={t.accred.subtitle}
        />
        <div className="mt-8">
          <AccreditationGrid locale={locale} />
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
          <Image
            src={images.certStrip}
            alt={t.accred.title}
            width={1200}
            height={160}
            className="mx-auto h-auto w-full max-w-4xl"
          />
        </div>
      </section>

      {/* 5. COBERTURA INDUSTRIAL Y PRESENCIA */}
      <section className="bg-ink-50 py-16 lg:py-24 border-t border-ink-200">
        <div className="container-x">
          <SectionHeader
            eyebrow={t.nav.locations}
            title={t.locations.title}
            subtitle={t.locations.subtitle}
          />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {locations.map((loc) => (
              <span
                key={loc.id}
                className={`inline-flex min-h-10 items-center rounded-lg border px-3.5 text-sm font-medium transition-colors ${
                  loc.type === "hq"
                    ? "border-brand-600 bg-brand-50 text-brand-800 font-bold shadow-sm"
                    : "border-ink-200 bg-white text-ink-700 hover:border-brand-300"
                }`}
              >
                {loc.name}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-white border border-ink-200 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
                {t.home.tampicoHq}
              </p>
              <p className="text-sm text-ink-700 mt-1">
                {company.email} · Cel. {company.mobile} · Tel. {company.phone}
              </p>
            </div>
            <Link href={h("/sucursales")} className="btn btn-outline text-xs font-bold shrink-0">
              {t.home.viewBranches}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL DE CONVERSIÓN */}
      <CtaBand t={t} locale={locale} />
    </>
  );
}
