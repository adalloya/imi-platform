import type { Metadata } from "next";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { CoverageMap } from "@/components/CoverageMap";
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

      <div className="container-x py-12 lg:py-16 space-y-16">
        {/* MAPA INTERACTIVO NORTEAMÉRICA (MÉXICO Y EE. UU.) */}
        <section id="mapa">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold tracking-wider text-brand-700 uppercase">
              Mapa Interactivo de Infraestructura
            </span>
            <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl mt-1">
              Red Operativa en México, Estados Unidos y Sudamérica
            </h2>
            <p className="text-sm text-ink-600 mt-2 max-w-3xl leading-relaxed">
              Consulte la ubicación geográfica de nuestro Laboratorio Central en Altamira, sucursales en puertos y refinerías, y hubs estratégicos en Houston y Lima para soporte metrológico inmediato.
            </p>
          </div>
          <CoverageMap />
        </section>

        {/* INSTALACIONES PRINCIPALES */}
        <section>
          <div className="border-b border-ink-200 pb-3 mb-6">
            <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
              {t.locations.hq} & {t.locations.branch}
            </h2>
            <p className="text-sm text-ink-500 mt-1">
              Laboratorio de metrología acreditado, talleres de calibración de válvulas y bases operativas fijas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {main.map((loc) => (
              <div key={loc.id} className="card flex flex-col p-6 hover:border-brand-500 transition-colors">
                <div className="flex items-center justify-between">
                  <span
                    className={`chip font-semibold text-xs ${
                      loc.type === "hq" ? "border-amber-300 bg-amber-50 text-amber-900 font-bold" : "border-brand-300 bg-brand-50 text-brand-700"
                    }`}
                  >
                    {loc.type === "hq" ? t.locations.hq : t.locations.branch}
                  </span>
                  <span className="font-mono text-xs text-ink-400">
                    {loc.country === "MX" ? "🇲🇽 México" : loc.country === "US" ? "🇺🇸 EE. UU." : "🇵🇪 Perú"}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink-900">{loc.name}</h3>
                <p className="text-xs text-brand-700 font-medium mt-1">{loc.specialty}</p>

                {loc.address && (
                  <p className="mt-3 flex items-start gap-2 text-sm text-ink-600">
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
                      className="btn btn-outline w-full text-xs font-semibold"
                    >
                      <Navigation className="size-3.5" /> {t.common.directions}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PUNTOS ESTRATÉGICOS DE VENTA Y SERVICIO */}
        <section>
          <div className="border-b border-ink-200 pb-3 mb-6">
            <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
              {t.locations.pos}
            </h2>
            <p className="text-sm text-ink-500 mt-1">
              Atención comercial, recolección de instrumentos, contratos marco y soporte técnico in-situ.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pos.map((loc) => (
              <div key={loc.id} className="card flex flex-col justify-between p-4 hover:border-brand-300">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-ink-400">
                      {loc.country === "MX" ? "🇲🇽 MX" : loc.country === "US" ? "🇺🇸 US" : "🇵🇪 PE"}
                    </span>
                    <span className="text-[10px] font-mono text-ink-400">Punto de Servicio</span>
                  </div>
                  <h3 className="text-sm font-bold text-ink-900">{loc.name}</h3>
                  <p className="text-xs text-ink-500 mt-1 line-clamp-2">{loc.specialty}</p>
                </div>
                {loc.address && (
                  <div className="mt-3 pt-3 border-t border-ink-100">
                    <a
                      href={mapsUrl(loc.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-700 hover:underline flex items-center gap-1"
                    >
                      <Navigation className="size-3" /> Ver ubicación
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BANNER CONTACTO CENTRALIZADO */}
        <section className="rounded-xl border border-ink-200 bg-ink-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold text-ink-900">Contacto Centralizado y Logística IMI</h3>
              <p className="mt-1 text-sm text-ink-600">
                Coordinación de unidades móviles, recolección de equipos en planta y calibración in-situ para cualquier complejo industrial.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${company.mobileRaw}`} className="btn btn-outline font-semibold">
                <Phone className="size-4" /> {company.mobile}
              </a>
              <a href={`mailto:${company.email}`} className="btn btn-outline font-semibold">
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
