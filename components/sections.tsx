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
        <div key={a.id} className="flex flex-col bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider text-ink-500 uppercase">{a.authority}</span>
            <BadgeCheck className="size-5 text-brand-600" />
          </div>
          <p className="mt-3 font-mono text-base font-bold break-words text-ink-900">{a.code}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">{tr(a.label, locale)}</p>
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
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="relative overflow-hidden rounded-lg bg-ink-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={g.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 to-transparent" />
          <h2 className="relative flex min-h-40 items-end p-5 text-xl font-bold text-white lg:min-h-full">{tr(g.name, locale)}</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {list.map((s) => (
            <article key={s.id} className="card flex flex-col p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold leading-snug text-ink-900">{tr(s.name, locale)}</h3>
                  <p className="mt-1 text-sm text-ink-500">{tr(s.desc, locale)}</p>
                </div>
              </div>
              <div className="mt-auto pt-3 pl-13">
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
    <section className="bg-brand-700">
      <div className="container-x flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.cta.title}</h2>
          <p className="mt-2 text-brand-100">{t.cta.subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={buildWaLink("CONTACT", { Origen: "Banner CTA" })} target="_blank" rel="noopener noreferrer" className="btn btn-safety">
            <MessageCircle className="size-5" /> WhatsApp +52 833 155 0189
          </a>
          <Link href={`/${locale}/contacto`} className="btn btn-ghost-dark">{t.common.requestQuote}</Link>
        </div>
      </div>
    </section>
  );
}
