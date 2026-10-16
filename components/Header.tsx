"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Globe, Mail, Menu, Phone, ShoppingCart, X, Bot, Sparkles } from "lucide-react";
import { company, images } from "@/data/company";
import { localeNames, locales } from "@/lib/i18n";
import { useCart, useI18n } from "./Providers";

export function Header() {
  const { locale, t } = useI18n();
  const { count, setOpen } = useCart();
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [lang, setLang] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- cerrar menús al navegar
  useEffect(() => { setMenu(false); setLang(false); }, [pathname]);

  const rest = pathname.split("/").slice(2).join("/");
  const href = (p: string) => `/${locale}${p}`;

  const nav = [
    { p: "/servicios", l: t.nav.services },
    { p: "/laboratorio", l: t.nav.lab },
    { p: "/academy", l: t.nav.academy },
    { p: "/tienda", l: t.nav.store },
    { p: "/toolbox", l: t.nav.toolbox },
    { p: "/portal", l: t.nav.portal },
    { p: "/descargas", l: "Descargas" },
    { p: "/sucursales", l: t.nav.locations },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200 bg-white/95 backdrop-blur">
      {/* Top bar */}
      <div className="hidden bg-ink-900 text-xs text-ink-300 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={`tel:${company.mobileRaw}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3.5" /> {company.mobile}
            </a>
            <a href={`tel:${company.phoneRaw}`} className="hover:text-white">{company.phone}</a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" /> {company.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/consultant/imi"
              className="hover:text-white flex items-center gap-1.5 text-[11px] bg-brand-700/80 hover:bg-brand-600 px-2.5 py-0.5 rounded-full font-bold text-white transition-colors"
            >
              <Bot className="size-3 text-brand-200" />
              <span>Consultor IA</span>
              <Sparkles className="size-2.5 text-yellow-300" />
            </Link>
            <span className="font-mono tracking-wide hidden lg:inline">STPS IMI150311QL2-0013 · CONOCER EC0217</span>
            <Link href={href("/admin")} className="hover:text-white flex items-center gap-1 text-[11px] bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded font-semibold text-white">
              Super Admin
            </Link>
          </div>
        </div>
      </div>

      <div className="container-x flex h-16 sm:h-20 items-center justify-between gap-3 lg:gap-6">
        <Link href={href("")} className="flex shrink-0 items-center py-1" aria-label="IMI Inicio">
          <Image
            src={images.logo}
            alt={company.legalName}
            width={329}
            height={47}
            priority
            className="h-7 w-auto max-w-[160px] xs:max-w-[190px] sm:h-8 sm:max-w-[220px] lg:h-9 lg:max-w-[250px] object-contain transition-all"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex 2xl:gap-1.5" aria-label="Principal">
          {nav.map((n) => {
            const active = pathname.startsWith(href(n.p));
            return (
              <Link
                key={n.p}
                href={href(n.p)}
                className={`rounded-md px-2 py-1.5 text-xs 2xl:px-3 2xl:text-sm font-semibold whitespace-nowrap transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-700 font-bold"
                    : "text-ink-700 hover:bg-ink-50 hover:text-brand-700"
                }`}
              >
                {n.l}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="relative">
            <button
              id="lang-switcher"
              onClick={() => setLang((v) => !v)}
              className="flex h-9 sm:h-10 items-center gap-1 sm:gap-1.5 rounded-md px-2 sm:px-2.5 text-xs sm:text-sm font-medium text-ink-700 hover:bg-ink-100"
              aria-label={t.nav.language}
              aria-expanded={lang}
            >
              <Globe className="size-3.5 sm:size-4" />
              <span className="uppercase">{locale}</span>
            </button>
            {lang && (
              <ul className="absolute right-0 mt-1 w-44 overflow-hidden rounded-md border border-ink-200 bg-white py-1 shadow-lg z-50">
                {locales.map((l) => (
                  <li key={l}>
                    <Link
                      href={`/${l}/${rest}`}
                      hrefLang={l}
                      className={`flex items-center justify-between px-3 py-2.5 text-sm hover:bg-ink-50 ${l === locale ? "font-semibold text-brand-700" : "text-ink-700"}`}
                    >
                      {localeNames[l]} <span className="text-xs uppercase text-ink-400">{l}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            id="cart-open"
            onClick={() => setOpen(true)}
            className="relative flex size-9 sm:size-10 items-center justify-center rounded-md text-ink-700 hover:bg-ink-100"
            aria-label={t.store.cart}
          >
            <ShoppingCart className="size-4.5 sm:size-5" />
            {count > 0 && (
              <span className="absolute top-0.5 right-0.5 flex size-4 sm:size-5 items-center justify-center rounded-full bg-brand-700 text-[10px] sm:text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <Link href={href("/contacto")} className="btn btn-primary hidden md:inline-flex h-9 sm:h-10 px-4 text-xs sm:text-sm font-bold">
            {t.nav.quote}
          </Link>

          <button
            id="menu-toggle"
            onClick={() => setMenu((v) => !v)}
            className="flex size-9 sm:size-10 items-center justify-center rounded-md text-ink-800 hover:bg-ink-100 xl:hidden"
            aria-label={menu ? t.nav.close : t.nav.menu}
            aria-expanded={menu}
          >
            {menu ? <X className="size-5 sm:size-6" /> : <Menu className="size-5 sm:size-6" />}
          </button>
        </div>
      </div>

      {menu && (
        <nav className="border-t border-ink-200 bg-white xl:hidden shadow-lg" aria-label="Móvil">
          {/* Banner móvil destacado para el Chatbot IA */}
          <div className="p-3 bg-gradient-to-r from-brand-900 to-brand-800 text-white">
            <Link
              href="/consultant/imi"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-white/20 text-white">
                  <Bot className="size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm text-white">Consultor IA IMI</span>
                    <span className="text-[9px] bg-emerald-500 text-white font-mono px-1.5 py-0.2 rounded-full font-bold">EN LÍNEA</span>
                  </div>
                  <span className="text-xs text-brand-200 block">Asesor Técnico & Comercial 24/7</span>
                </div>
              </div>
              <span className="text-xs font-bold text-white bg-white/20 px-2.5 py-1 rounded-md">Abrir →</span>
            </Link>
          </div>

          <ul className="container-x divide-y divide-ink-100 py-2">
            {[...nav, { p: "/contacto", l: t.nav.contact }].map((n) => (
              <li key={n.p}>
                <Link href={href(n.p)} className="flex min-h-12 items-center text-sm font-medium text-ink-800 hover:text-brand-700">
                  {n.l}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-x grid grid-cols-2 gap-2 pb-4 pt-2">
            <a href={`tel:${company.mobileRaw}`} className="btn btn-outline text-xs"><Phone className="size-3.5" />{t.common.call}</a>
            <a href={`mailto:${company.email}`} className="btn btn-outline text-xs"><Mail className="size-3.5" />{t.common.email}</a>
          </div>
        </nav>
      )}
    </header>
  );
}
