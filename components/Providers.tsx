"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { CmsProvider } from "./CmsProvider";

/* ───────── i18n ───────── */
type I18nCtx = { locale: Locale; t: Dictionary };
const I18nContext = createContext<I18nCtx | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <Providers>");
  return ctx;
}

/* ───────── Express Cart ───────── */
export type CartMode = "sale" | "rent";
export type CartItem = { id: string; name: string; qty: number; mode: CartMode };

type CartCtx = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (item: Omit<CartItem, "qty">) => void;
  update: (id: string, mode: CartMode, patch: Partial<CartItem>) => void;
  remove: (id: string, mode: CartMode) => void;
  clear: () => void;
  count: number;
};
const CartContext = createContext<CartCtx | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <Providers>");
  return ctx;
}

const STORAGE_KEY = "imi-express-cart";

export function Providers({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hidratación desde localStorage
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = useCallback((item: Omit<CartItem, "qty">) => {
    setItems((prev) => {
      const i = prev.findIndex((p) => p.id === item.id && p.mode === item.mode);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + 1 };
        return next;
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const update = useCallback((id: string, mode: CartMode, patch: Partial<CartItem>) => {
    setItems((prev) => prev.map((p) => (p.id === id && p.mode === mode ? { ...p, ...patch } : p)));
  }, []);

  const remove = useCallback((id: string, mode: CartMode) => {
    setItems((prev) => prev.filter((p) => !(p.id === id && p.mode === mode)));
  }, []);

  const cart = useMemo<CartCtx>(
    () => ({
      items,
      open,
      setOpen,
      add,
      update,
      remove,
      clear: () => setItems([]),
      count: items.reduce((n, i) => n + i.qty, 0),
    }),
    [items, open, add, update, remove],
  );

  return (
    <CmsProvider>
      <I18nContext.Provider value={{ locale, t: dict }}>
        <CartContext.Provider value={cart}>{children}</CartContext.Provider>
      </I18nContext.Provider>
    </CmsProvider>
  );
}
