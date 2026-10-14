"use client";

import { Minus, Plus, Send, Trash2, X } from "lucide-react";
import { buildWaLink } from "@/lib/whatsapp";
import { useState } from "react";
import { useCart, useI18n } from "./Providers";

/** Express Cart: requerimiento de venta/renta listo para WhatsApp. */
export function CartDrawer() {
  const { t } = useI18n();
  const { items, open, setOpen, update, remove, clear } = useCart();
  const [info, setInfo] = useState({ name: "", company: "", city: "", weeks: "1" });

  if (!open) return null;

  const hasRent = items.some((i) => i.mode === "rent");

  function send() {
    const lines = items.map((i) => `${i.name} | ${i.mode === "rent" ? "RENTA" : "VENTA"} | Cant: ${i.qty}`);
    const link = buildWaLink(
      hasRent ? "RENT" : "QUOTE",
      {
        [t.common.name]: info.name,
        [t.common.company]: info.company,
        [t.common.city]: info.city,
        ...(hasRent ? { [t.store.weeks]: info.weeks } : {}),
      },
      lines,
    );
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={t.store.cart}>
      <button className="absolute inset-0 bg-ink-950/60" onClick={() => setOpen(false)} aria-label={t.nav.close} />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
          <h2 className="text-lg font-bold text-ink-900">{t.store.cart}</h2>
          <button onClick={() => setOpen(false)} className="flex size-10 items-center justify-center rounded-md hover:bg-ink-100" aria-label={t.nav.close}>
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="py-16 text-center text-sm text-ink-500">{t.store.empty}</p>
          ) : (
            <ul className="divide-y divide-ink-100">
              {items.map((i) => (
                <li key={i.id + i.mode} className="py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-ink-900">{i.name}</p>
                      <span className={`chip mt-1 ${i.mode === "rent" ? "border-brand-200 bg-brand-50 text-brand-700" : ""}`}>
                        {i.mode === "rent" ? t.common.rent : t.common.sale}
                      </span>
                    </div>
                    <button onClick={() => remove(i.id, i.mode)} className="flex size-10 items-center justify-center rounded-md text-ink-400 hover:bg-ink-100 hover:text-ink-700" aria-label={t.store.remove}>
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-ink-500">{t.store.qty}</span>
                    <button onClick={() => update(i.id, i.mode, { qty: Math.max(1, i.qty - 1) })} className="flex size-10 items-center justify-center rounded-md border border-ink-200" aria-label="-">
                      <Minus className="size-4" />
                    </button>
                    <span className="w-8 text-center font-mono font-semibold">{i.qty}</span>
                    <button onClick={() => update(i.id, i.mode, { qty: i.qty + 1 })} className="flex size-10 items-center justify-center rounded-md border border-ink-200" aria-label="+">
                      <Plus className="size-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="space-y-3 border-t border-ink-200 bg-ink-50 px-5 py-4">
            <div className="grid grid-cols-2 gap-2">
              <input className="field" placeholder={t.common.name} value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} aria-label={t.common.name} />
              <input className="field" placeholder={t.common.company} value={info.company} onChange={(e) => setInfo({ ...info, company: e.target.value })} aria-label={t.common.company} />
              <input className={`field ${hasRent ? "" : "col-span-2"}`} placeholder={t.common.city} value={info.city} onChange={(e) => setInfo({ ...info, city: e.target.value })} aria-label={t.common.city} />
              {hasRent && (
                <input className="field" type="number" min={1} placeholder={t.store.weeks} value={info.weeks} onChange={(e) => setInfo({ ...info, weeks: e.target.value })} aria-label={t.store.weeks} />
              )}
            </div>
            <button id="cart-send" onClick={send} className="btn btn-primary w-full">
              <Send className="size-4" /> {t.store.send}
            </button>
            <button onClick={clear} className="w-full py-2 text-xs text-ink-500 hover:text-ink-800">{t.store.clear}</button>
          </div>
        )}
      </aside>
    </div>
  );
}
