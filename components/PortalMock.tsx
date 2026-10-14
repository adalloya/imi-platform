"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CalendarClock, Download, Search, ShieldCheck, Boxes } from "lucide-react";
import { buildWaLink } from "@/lib/whatsapp";
import { useI18n } from "./Providers";

/** Datos de ejemplo del mockup IMI Cloud Sync. */
const ASSETS = [
  { tag: "PT-1021", asset: "Transmisor de presión 0-250 psi", serial: "RSM-88412", last: "2025-11-20", due: "2026-11-20" },
  { tag: "TT-3305", asset: "Transmisor de temperatura RTD Pt100", serial: "EH-55219", last: "2025-10-02", due: "2026-10-02" },
  { tag: "PSV-0402", asset: "Válvula de seguridad 2\" x 3\" set 150 psig", serial: "CR-77120", last: "2026-03-15", due: "2027-03-15" },
  { tag: "FT-2210", asset: "Medidor de flujo Coriolis 2\"", serial: "MM-10944", last: "2025-10-28", due: "2026-10-28" },
  { tag: "LT-1107", asset: "Transmisor de nivel radar", serial: "VG-33018", last: "2026-01-10", due: "2027-01-10" },
  { tag: "PI-0015", asset: "Manómetro IMI 0-300 psi", serial: "IMI-20311", last: "2025-08-05", due: "2026-08-05" },
  { tag: "FCV-1300", asset: "Válvula de control 3\" globo", serial: "FS-41007", last: "2026-05-22", due: "2027-05-22" },
  { tag: "PDT-5501", asset: "Transmisor de presión diferencial", serial: "YK-90021", last: "2025-11-01", due: "2026-11-01" },
];

const TODAY = new Date("2026-10-14T00:00:00");
const DAY = 86400000;

export function PortalMock() {
  const { locale, t } = useI18n();
  const [q, setQ] = useState("");

  const rows = useMemo(
    () =>
      ASSETS.map((a) => {
        const days = Math.round((new Date(a.due + "T00:00:00").getTime() - TODAY.getTime()) / DAY);
        const status = days < 0 ? "expired" : days <= 30 ? "dueSoon" : "ok";
        return { ...a, days, status: status as "ok" | "dueSoon" | "expired" };
      }).filter((a) => `${a.tag} ${a.asset} ${a.serial}`.toLowerCase().includes(q.toLowerCase())),
    [q],
  );

  const all = ASSETS.length;
  const soon = rows.filter((r) => r.status === "dueSoon").length;
  const expired = rows.filter((r) => r.status === "expired").length;
  const fmt = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", year: "numeric" });

  const badge = {
    ok: "border-emerald-200 bg-emerald-50 text-emerald-700",
    dueSoon: "border-amber-200 bg-amber-50 text-amber-800",
    expired: "border-red-200 bg-red-50 text-red-700",
  };

  function downloadCert(tag: string) {
    const txt = `IMI - Instrumentación y Metrología Industrial\nCERTIFICADO DE CALIBRACIÓN (DEMO)\nNMX-EC-17025-IMNC-2018\n\nTAG: ${tag}\nEste es un documento de demostración del portal IMI Cloud Sync.`;
    const url = URL.createObjectURL(new Blob([txt], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `IMI-CERT-${tag}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-[0_20px_50px_-24px_rgba(6,39,72,0.35)]">
      <div className="flex flex-col gap-3 border-b border-ink-200 bg-ink-900 px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-ink-400">Cliente demo · Planta Altamira</p>
          <p className="font-semibold">IMI Cloud Sync</p>
        </div>
        <span className="rounded border border-white/20 px-2 py-1 font-mono text-xs text-ink-300">{t.portal.demo}</span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-ink-200 border-b border-ink-200">
        {[
          { i: Boxes, l: t.portal.kpiTotal, v: all, c: "text-ink-900" },
          { i: CalendarClock, l: t.portal.kpiSoon, v: soon, c: "text-amber-700" },
          { i: AlertTriangle, l: t.portal.kpiExpired, v: expired, c: "text-red-700" },
        ].map((k) => (
          <div key={k.l} className="p-4 sm:p-5">
            <k.i className={`size-5 ${k.c}`} />
            <p className={`mt-2 font-mono text-2xl font-bold ${k.c}`}>{k.v}</p>
            <p className="text-xs text-ink-500">{k.l}</p>
          </div>
        ))}
      </div>

      <div className="p-4 sm:p-5">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-400" />
          <input id="portal-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.portal.search} className="field pl-9" />
        </div>

        {/* Mobile cards */}
        <ul className="mt-4 space-y-3 md:hidden">
          {rows.map((r) => (
            <li key={r.tag} className="rounded-lg border border-ink-200 p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-mono font-bold text-brand-700">{r.tag}</p>
                  <p className="text-sm text-ink-700">{r.asset}</p>
                </div>
                <span className={`chip ${badge[r.status]}`}>{t.portal[r.status]}</span>
              </div>
              <p className="mt-2 text-xs text-ink-500">{t.portal.due}: <span className="font-mono">{fmt.format(new Date(r.due + "T12:00:00"))}</span></p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button onClick={() => downloadCert(r.tag)} className="btn btn-outline px-2 text-xs"><Download className="size-4" />{t.portal.download}</button>
                <a href={buildWaLink("SERVICE", { TAG: r.tag, Equipo: r.asset, Serie: r.serial, Solicitud: "Recalibración" })} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-2 text-xs">{t.portal.schedule}</a>
              </div>
            </li>
          ))}
        </ul>

        {/* Desktop table */}
        <div className="mt-4 hidden overflow-x-auto md:block">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-ink-200 text-xs text-ink-500 uppercase">
              <tr>
                <th className="py-3 pr-4 font-semibold">{t.portal.tag}</th>
                <th className="py-3 pr-4 font-semibold">{t.portal.asset}</th>
                <th className="py-3 pr-4 font-semibold">{t.portal.serial}</th>
                <th className="py-3 pr-4 font-semibold">{t.portal.lastCal}</th>
                <th className="py-3 pr-4 font-semibold">{t.portal.due}</th>
                <th className="py-3 pr-4 font-semibold">{t.portal.status}</th>
                <th className="py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {rows.map((r) => (
                <tr key={r.tag} className="hover:bg-ink-50">
                  <td className="py-3 pr-4 font-mono font-bold text-brand-700">{r.tag}</td>
                  <td className="py-3 pr-4 text-ink-800">{r.asset}</td>
                  <td className="py-3 pr-4 font-mono text-ink-500">{r.serial}</td>
                  <td className="py-3 pr-4 font-mono text-ink-500">{fmt.format(new Date(r.last + "T12:00:00"))}</td>
                  <td className="py-3 pr-4 font-mono text-ink-700">{fmt.format(new Date(r.due + "T12:00:00"))}</td>
                  <td className="py-3 pr-4"><span className={`chip ${badge[r.status]}`}>{r.status === "ok" && <ShieldCheck className="mr-1 size-3" />}{t.portal[r.status]}</span></td>
                  <td className="py-3">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => downloadCert(r.tag)} className="flex size-10 items-center justify-center rounded-md border border-ink-200 text-ink-600 hover:border-brand-600 hover:text-brand-700" aria-label={t.portal.download}>
                        <Download className="size-4" />
                      </button>
                      {r.status !== "ok" && (
                        <a href={buildWaLink("SERVICE", { TAG: r.tag, Equipo: r.asset, Serie: r.serial, Solicitud: "Recalibración" })} target="_blank" rel="noopener noreferrer" className="btn btn-primary min-h-10 px-3 text-xs">
                          {t.portal.schedule}
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
