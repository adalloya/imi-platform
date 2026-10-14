import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { ContactForm } from "@/components/Forms";
import { PageHero } from "@/components/ui";
import { company, images } from "@/data/company";
import { buildWaLink } from "@/lib/whatsapp";
import { getDictionary, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const t = getDictionary((await params).locale);
  return { title: t.contact.title, description: t.contact.subtitle };
}

export default async function Page({ params }: P) {
  const locale = (await params).locale as Locale;
  const t = getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow="Atención Inmediata"
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        image={images.workshop}
      />

      <div className="container-x py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
              {t.common.requestQuote}
            </h2>
            <p className="mt-2 text-sm text-ink-500">
              Complete los datos del requerimiento técnico. El sistema generará una solicitud directa para WhatsApp Business.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-ink-900">Contacto Directo</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a
                    href={buildWaLink("CONTACT", { Origen: "Página de Contacto" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-semibold text-brand-700 hover:text-brand-800"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <MessageCircle className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-ink-500 font-normal">WhatsApp Oficial</span>
                      +52 833 155 0189
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${company.mobileRaw}`}
                    className="flex items-center gap-3 font-semibold text-ink-800 hover:text-brand-700"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Phone className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-ink-500 font-normal">Móvil / Atención 24/7</span>
                      {company.mobile}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="flex items-center gap-3 font-semibold text-ink-800 hover:text-brand-700"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-700">
                      <Phone className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-ink-500 font-normal">Conmutador / Oficina</span>
                      {company.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 font-semibold text-ink-800 hover:text-brand-700"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-700">
                      <Mail className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-ink-500 font-normal">Correo Corporativo</span>
                      {company.email}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-ink-900">Horarios & Soporte</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-600">
                <li className="flex items-start gap-2.5">
                  <Clock className="size-4 shrink-0 text-brand-600 mt-0.5" />
                  <span>
                    <strong>Laboratorio y Oficinas:</strong> Lunes a Viernes de 8:00 a 18:00 hrs (CST).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="size-4 shrink-0 text-safety-500 mt-0.5" />
                  <span>
                    <strong>Guardia de Emergencia (Plant Down):</strong> Soporte técnico y calibración en campo disponible 24/7/365.
                  </span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-ink-900">Matriz y Laboratorio</h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-ink-600">
                <MapPin className="size-4 shrink-0 text-brand-600 mt-0.5" />
                <span>Av. de la Industria KM 14.5 Laguna de la Puerta, 89603 Altamira, Tamaulipas, México.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
