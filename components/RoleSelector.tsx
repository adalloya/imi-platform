"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Briefcase, GraduationCap, HardHat } from "lucide-react";
import { useI18n } from "./Providers";

type RoleKey = "operative" | "corporate" | "hr";

/** Selector de Perfil Rápido: 3 personas B2B. */
export function RoleSelector() {
  const { locale, t } = useI18n();
  const [role, setRole] = useState<RoleKey>("operative");
  const h = (p: string) => `/${locale}${p}`;

  const roles: Record<RoleKey, { icon: typeof HardHat; links: { l: string; href: string; sos?: boolean }[] }> = {
    operative: {
      icon: HardHat,
      links: [
        { l: t.roles.operative.l1, href: h("/toolbox") },
        { l: t.roles.operative.l2, href: h("/portal") },
        { l: t.roles.operative.l3, href: h("/laboratorio") },
        { l: t.roles.operative.l4, href: "#sos", sos: true },
      ],
    },
    corporate: {
      icon: Briefcase,
      links: [
        { l: t.roles.corporate.l1, href: h("/#acreditaciones") },
        { l: t.roles.corporate.l2, href: h("/portal") },
        { l: t.roles.corporate.l3, href: h("/tienda") },
        { l: t.roles.corporate.l4, href: h("/servicios#staffing") },
      ],
    },
    hr: {
      icon: GraduationCap,
      links: [
        { l: t.roles.hr.l1, href: h("/academy") },
        { l: t.roles.hr.l2, href: h("/academy#calendario") },
        { l: t.roles.hr.l3, href: h("/academy?cat=certification") },
        { l: t.roles.hr.l4, href: h("/contacto?tipo=curso") },
      ],
    },
  };

  const active = t.roles[role];
  const Active = roles[role].icon;

  return (
    <div className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-[0_20px_50px_-24px_rgba(6,39,72,0.35)]">
      <div role="tablist" aria-label={t.roles.title} className="grid grid-cols-3 border-b border-ink-200 bg-ink-50">
        {(Object.keys(roles) as RoleKey[]).map((k) => {
          const I = roles[k].icon;
          const on = k === role;
          return (
            <button
              key={k}
              id={`role-${k}`}
              role="tab"
              aria-selected={on}
              onClick={() => setRole(k)}
              className={`flex min-h-16 flex-col items-center justify-center gap-1 border-b-2 px-2 py-3 text-xs font-semibold transition-colors sm:flex-row sm:gap-2 sm:text-sm ${on ? "border-brand-600 bg-white text-brand-700" : "border-transparent text-ink-500 hover:text-ink-800"}`}
            >
              <I className="size-5" />
              <span className="text-center leading-tight">{t.roles[k].tab}</span>
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="grid gap-6 p-5 sm:p-8 md:grid-cols-[1fr_1.3fr] md:items-center">
        <div>
          <div className="flex size-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
            <Active className="size-6" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-ink-900 sm:text-2xl">{active.title}</h3>
          <p className="mt-2 text-ink-500">{active.desc}</p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {roles[role].links.map((l) => (
            <li key={l.l}>
              {l.sos ? (
                <button
                  onClick={() => document.getElementById("sos-plant-down")?.click()}
                  className="group flex min-h-16 w-full items-center justify-between rounded-lg border border-safety-500/40 bg-safety-500/5 px-4 text-left font-semibold text-safety-600 hover:bg-safety-500/10"
                >
                  {l.l} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              ) : (
                <Link
                  href={l.href}
                  className="group flex min-h-16 items-center justify-between rounded-lg border border-ink-200 px-4 font-semibold text-ink-800 hover:border-brand-600 hover:text-brand-700"
                >
                  {l.l} <ArrowRight className="size-4 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
