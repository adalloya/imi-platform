import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, GraduationCap, MapPin, ShoppingCart, Wrench, Calculator, Cloud } from "lucide-react";
import { AccreditationGrid, CtaBand } from "@/components/sections";
import { RoleSelector } from "@/components/RoleSelector";
import { SectionHeader } from "@/components/ui";
import { courses } from "@/data/academy";
import { company, images } from "@/data/company";
import { locations } from "@/data/locations";
import { serviceGroups } from "@/data/services";
import { getDictionary, tr, type Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const t = getDictionary(locale);
  const h = (p: string) => `/${locale}${p}`;

  const pillars = [
    { icon: FlaskConical, title: t.nav.lab, img: images.calibration, href: h("/laboratorio") },
    { icon: GraduationCap, title: t.nav.academy, img: images.certification, href: h("/academy") },
    { icon: Wrench, title: t.common.rent, img: images.rent, href: h("/tienda") },
    { icon: ShoppingCart, title: t.common.sale, img: images.sale, href: h("/tienda") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <Image src={images.hero1} alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-brand-900/50" />
        <div className="grid-lines absolute inset-0" />
        <div className="container-x relative pt-14 pb-36 sm:pt-20 lg:pt-28 lg:pb-44">
          <p className="inline-flex items-center gap-2 rounded border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs text-brand-100">
            <span className="size-1.5 rounded-full bg-safety-500" /> {t.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mt-5 max-w-2xl text-base text-ink-300 sm:text-lg">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={h("/contacto")} className="btn btn-safety px-7 text-base">{t.hero.ctaPrimary} <ArrowRight className="size-4" /></Link>
            <Link href={h("/servicios")} className="btn btn-ghost-dark px-7 text-base">{t.hero.ctaSecondary}</Link>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              { v: locations.length, l: t.hero.stat1 },
              { v: courses.length, l: t.hero.stat2 },
              { v: 3, l: t.hero.stat3 },
            ].map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-mono text-3xl font-bold text-white">{s.v}</dd>
                <dd className="mt-1 text-xs text-ink-400 sm:text-sm">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ROLE SELECTOR */}
      <section className="container-x relative -mt-24 lg:-mt-28">
        <div className="mb-4 text-white">
          <h2 className="text-lg font-bold sm:text-xl">{t.roles.title}</h2>
          <p className="text-sm text-ink-300">{t.roles.subtitle}</p>
        </div>
        <RoleSelector />
      </section>

      {/* ACCREDITATIONS */}
      <section id="acreditaciones" className="container-x scroll-mt-28 py-16 lg:py-24">
        <SectionHeader eyebrow="Compliance" title={t.accred.title} subtitle={t.accred.subtitle} />
        <div className="mt-8"><AccreditationGrid locale={locale} /></div>
        <div className="mt-6 overflow-hidden rounded-lg border border-ink-200 bg-white p-4">
          <Image src={images.certStrip} alt={t.accred.title} width={1200} height={160} className="mx-auto h-auto w-full max-w-4xl" />
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-ink-50 py-16 lg:py-24">
        <div className="container-x">
          <SectionHeader eyebrow="IMI" title={t.services.title} subtitle={t.services.subtitle} />
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {pillars.map((p) => (
              <Link key={p.title} href={p.href} className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-ink-900">
                <Image src={p.img} alt={p.title} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p.icon className="size-6 text-white" />
                  <p className="mt-2 flex items-center justify-between text-base font-bold text-white sm:text-lg">
                    {p.title} <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {serviceGroups.map((g) => (
              <Link key={g.id} href={h(`/servicios#${g.id}`)} className="card group flex items-center justify-between p-5">
                <span className="font-semibold text-ink-900">{tr(g.name, locale)}</span>
                <ArrowRight className="size-4 text-ink-400 group-hover:text-brand-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KILLER TOOLS */}
      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          <Link href={h("/toolbox")} className="card group flex gap-5 p-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white"><Calculator className="size-6" /></span>
            <div>
              <h2 className="text-lg font-bold text-ink-900">{t.toolbox.title}</h2>
              <p className="mt-1 text-sm text-ink-500">{t.toolbox.subtitle}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">{t.common.viewAll} <ArrowRight className="size-4" /></span>
            </div>
          </Link>
          <Link href={h("/portal")} className="card group flex gap-5 p-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-white"><Cloud className="size-6" /></span>
            <div>
              <h2 className="text-lg font-bold text-ink-900">{t.portal.title}</h2>
              <p className="mt-1 text-sm text-ink-500">{t.portal.subtitle}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">{t.common.viewAll} <ArrowRight className="size-4" /></span>
            </div>
          </Link>
        </div>
      </section>

      {/* ACADEMY */}
      <section className="bg-ink-900 py-16 text-white lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-brand-200 uppercase">STPS · CONOCER</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight lg:text-4xl">{t.academy.title}</h2>
            <p className="mt-3 text-ink-300">{t.academy.subtitle}</p>
            <ul className="mt-6 space-y-2">
              {courses.filter((c) => c.category === "certification").map((c) => (
                <li key={c.id} className="flex items-start gap-3 border-b border-white/10 pb-2 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-safety-500" />{tr(c.name, locale)}
                </li>
              ))}
            </ul>
            <Link href={h("/academy")} className="btn btn-primary mt-8">{t.common.viewAll} <ArrowRight className="size-4" /></Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src={images.course} alt={t.academy.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="container-x py-16 lg:py-24">
        <SectionHeader eyebrow={t.nav.locations} title={t.locations.title} subtitle={t.locations.subtitle} />
        <div className="mt-8 flex flex-wrap gap-2">
          {locations.map((loc) => (
            <span key={loc.id} className={`inline-flex min-h-10 items-center gap-1.5 rounded-md border px-3 text-sm ${loc.type === "hq" ? "border-brand-600 bg-brand-50 font-semibold text-brand-700" : "border-ink-200 text-ink-700"}`}>
              <MapPin className="size-3.5" /> {loc.name}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-500">
          {company.email} · Cel. {company.mobile} · Tel. {company.phone}
        </p>
      </section>

      <CtaBand t={t} locale={locale} />
    </>
  );
}
