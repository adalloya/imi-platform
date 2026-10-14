"use client";

import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { productCategories, products, type ProductCategory } from "@/data/products";
import { tr } from "@/lib/i18n";
import { useCart, useI18n, type CartMode } from "./Providers";

export function StoreCatalog() {
  const { locale, t } = useI18n();
  const { add, setOpen } = useCart();
  const [cat, setCat] = useState<"all" | ProductCategory>("all");
  const [flash, setFlash] = useState<string | null>(null);

  const list = cat === "all" ? products : products.filter((p) => p.category === cat);

  function onAdd(id: string, name: string, mode: CartMode) {
    add({ id, name, mode });
    setFlash(id + mode);
    setTimeout(() => setFlash(null), 1200);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:px-0">
          {[{ id: "all" as const, name: { es: t.store.all, en: t.store.all } }, ...productCategories].map((c) => (
            <button
              key={c.id}
              id={`store-cat-${c.id}`}
              onClick={() => setCat(c.id)}
              className={`min-h-11 shrink-0 rounded-md border px-4 py-2 text-left text-sm font-medium transition-colors lg:w-full ${cat === c.id ? "border-brand-600 bg-brand-50 text-brand-700" : "border-ink-200 text-ink-600 hover:border-ink-300"}`}
            >
              {c.id === "all" ? t.store.all : tr(c.name, locale)}
            </button>
          ))}
        </div>
      </aside>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((p) => (
          <article key={p.id} className="card flex flex-col overflow-hidden">
            <div className="aspect-[4/3] bg-ink-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} loading="lazy" className="size-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-medium text-brand-600">{tr(productCategories.find((c) => c.id === p.category)!.name, locale)}</p>
              <h3 className="mt-1 font-bold text-ink-900">{p.name}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{tr(p.desc, locale)}</p>
              <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                {(["sale", "rent"] as const).map((m) =>
                  p[m] ? (
                    <button
                      key={m}
                      id={`add-${p.id}-${m}`}
                      onClick={() => onAdd(p.id, p.name, m)}
                      className={`btn px-2 text-xs ${m === "sale" ? "btn-primary" : "btn-outline"} ${p.sale && p.rent ? "" : "col-span-2"}`}
                    >
                      {flash === p.id + m ? <Check className="size-4" /> : <Plus className="size-4" />}
                      {flash === p.id + m ? t.common.added : `${t.common.addToCart} · ${t.common[m]}`}
                    </button>
                  ) : null,
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <button onClick={() => setOpen(true)} className="btn btn-primary fixed bottom-4 left-4 z-30 shadow-lg lg:hidden">
        {t.store.cart}
      </button>
    </div>
  );
}
