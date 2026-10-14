import Link from "next/link";
import { BadgeCheck, MessageCircle } from "lucide-react";
import { accreditations } from "@/data/company";
import { serviceGroups, services, type ServiceGroup } from "@/data/services";
import { buildWaLink } from "@/lib/whatsapp";
import { tr, type Dictionary, type Locale } from "@/lib/i18n";
import { ServiceRequestButton } from "./Forms";
import { Icon } from "./ui";

export function AccreditationGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
      {accreditations.map((a) => (
        <div key={a.id} className="flex flex-col bg-white p-6">
          <span className="text-xs font-mono font-bold tracking-wider text-brand-700 uppercase">{a.authority}</span>
          <p className="mt-2 font-mono text-base font-extrabold break-words text-ink-900">{a.code}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{tr(a.label, locale)}</p>
        </div>
      ))}
    </div>
  );
}

export function ServiceGroupSection({ group, locale, t }: { group: ServiceGroup; locale: Locale; t: Dictionary }) {
  const g = serviceGroups.find((x) => x.id === group)!;
  const list = services.filter((s) => s.group === group);
  return (
    <section id={group} className="scroll-mt-28">
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="relative overflow-hidden rounded-lg bg-ink-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={g.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
          <h2 className="relative flex min-h-36 items-end p-6 text-xl font-bold text-white lg:min-h-full">{tr(g.name, locale)}</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {list.map((s) => (
            <article key={s.id} className="card flex flex-col justify-between p-5 hover:border-brand-500">
              <div>
                <h3 className="font-bold text-base leading-snug text-ink-900">{tr(s.name, locale)}</h3>
                <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{tr(s.desc, locale)}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-ink-100 flex justify-between items-center">
                <ServiceRequestButton serviceId={s.id} label={t.services.cta} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <section className="bg-brand-800 text-white border-t border-brand-900">
      <div className="container-x flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.cta.title}</h2>
          <p className="mt-2 text-brand-100 text-sm sm:text-base">{t.cta.subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row shrink-0">
          <a
            href={buildWaLink("CONTACT", { Origen: "Banner CTA" })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-brand-800 hover:bg-brand-50 font-bold px-6 shadow-sm"
          >
            WhatsApp +52 833 155 0189
          </a>
          <Link href={`/${locale}/contacto`} className="btn btn-ghost-dark px-6">
            {t.common.requestQuote}
          </Link>
        </div>
      </div>
    </section>
  );
}
