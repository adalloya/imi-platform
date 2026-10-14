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
          const on = k === role;
          return (
            <button
              key={k}
              id={`role-${k}`}
              role="tab"
              aria-selected={on}
              onClick={() => setRole(k)}
              className={`flex min-h-14 items-center justify-center border-b-2 px-3 py-2.5 text-xs font-bold tracking-wide transition-colors sm:text-sm cursor-pointer ${
                on
                  ? "border-brand-600 bg-white text-brand-700 shadow-sm"
                  : "border-transparent text-ink-600 hover:text-ink-900"
              }`}
            >
              <span className="text-center">{t.roles[k].tab}</span>
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600">
            Perfil B2B Seleccionado
          </span>
          <h3 className="mt-1.5 text-xl font-extrabold text-ink-900 sm:text-2xl">{active.title}</h3>
          <p className="mt-2 text-sm text-ink-600 leading-relaxed">{active.desc}</p>
        </div>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {roles[role].links.map((l) => (
            <li key={l.l}>
              {l.sos ? (
                <button
                  onClick={() => document.getElementById("sos-plant-down")?.click()}
                  className="flex min-h-14 w-full items-center justify-between rounded-md border border-brand-300 bg-brand-50/70 px-4 text-left font-bold text-brand-800 hover:bg-brand-100 transition-colors cursor-pointer text-sm"
                >
                  <span>{l.l}</span>
                  <span className="font-mono text-xs font-bold text-brand-700 bg-white px-2 py-0.5 rounded border border-brand-200">
                    24/7
                  </span>
                </button>
              ) : (
                <Link
                  href={l.href}
                  className="flex min-h-14 items-center justify-between rounded-md border border-ink-200 px-4 text-sm font-semibold text-ink-800 hover:border-brand-600 hover:text-brand-700 hover:bg-ink-50 transition-colors"
                >
                  <span>{l.l}</span>
                  <span className="text-ink-400 font-mono text-xs">→</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
