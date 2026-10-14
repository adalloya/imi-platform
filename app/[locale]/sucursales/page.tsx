import type { Metadata } from "next";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/sections";
import { company, images } from "@/data/company";
import { locations, mapsUrl } from "@/data/locations";
import { getDictionary, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale);
  return { title: t.locations.title, description: t.locations.subtitle };
}

export default async function Page({ params }: P) {
  const locale = (await params).locale as Locale;
  const t = getDictionary(locale);

  const main = locations.filter((l) => l.type !== "pos");
  const pos = locations.filter((l) => l.type === "pos");

  return (
    <>
      <PageHero
        eyebrow="Presencia & Cobertura Industrial"
        title={t.locations.title}
        subtitle={t.locations.subtitle}
        image={images.refinery}
      />

      <div className="container-x py-12 lg:py-16">
        <section>
          <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
            {t.locations.hq} & {t.locations.branch}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {main.map((loc) => (
              <div key={loc.id} className="card flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className={`chip font-semibold ${loc.type === "hq" ? "border-brand-300 bg-brand-50 text-brand-700" : ""}`}>
                    {loc.type === "hq" ? t.locations.hq : t.locations.branch}
                  </span>
                  <span className="font-mono text-xs text-ink-400">{loc.country}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink-900">{loc.name}</h3>
                {loc.address && (
                  <p className="mt-2 flex items-start gap-2 text-sm text-ink-600">
                    <MapPin className="size-4 shrink-0 text-brand-600 mt-0.5" />
                    <span>{loc.address}</span>
                  </p>
                )}
                {loc.phone && (
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink-800">
                    <Phone className="size-4 text-brand-600" />
                    <a href={`tel:${loc.phone}`} className="hover:underline">{loc.phone}</a>
                  </p>
                )}
                {loc.address && (
                  <div className="mt-auto pt-6">
                    <a
                      href={mapsUrl(loc.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline w-full text-xs"
                    >
                      <Navigation className="size-3.5" /> {t.common.directions}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
            {t.locations.pos}
          </h2>
          <p className="mt-2 text-sm text-ink-500">
            Puntos estratégicos de atención comercial, recepción de equipos y soporte técnico.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pos.map((loc) => (
              <div key={loc.id} className="card flex items-center justify-between p-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-ink-50 text-ink-600">
                    <MapPin className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-ink-800">{loc.name}</span>
                </div>
                <span className="font-mono text-xs font-semibold text-ink-400">{loc.country}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-xl border border-ink-200 bg-ink-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold text-ink-900">Contacto centralizado IMI</h3>
              <p className="mt-1 text-sm text-ink-600">
                Atención comercial e ingeniería de soporte para cualquier ubicación nacional o internacional.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${company.mobileRaw}`} className="btn btn-outline">
                <Phone className="size-4" /> {company.mobile}
              </a>
              <a href={`mailto:${company.email}`} className="btn btn-outline">
                <Mail className="size-4" /> {company.email}
              </a>
            </div>
          </div>
        </section>
      </div>

      <CtaBand t={t} locale={locale} />
    </>
  );
}
