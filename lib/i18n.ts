import es from "@/locales/es.json";
import en from "@/locales/en.json";
import ko from "@/locales/ko.json";
import ja from "@/locales/ja.json";
import zh from "@/locales/zh.json";

export const locales = ["es", "en", "ko", "ja", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English (US)",
  ko: "한국어",
  ja: "日本語",
  zh: "简体中文",
};

export const htmlLang: Record<Locale, string> = {
  es: "es-MX",
  en: "en-US",
  ko: "ko-KR",
  ja: "ja-JP",
  zh: "zh-CN",
};

/** Texto localizado. `es` y `en` son obligatorios; el resto cae a `en`. */
export type L10n = { es: string; en: string; ko?: string; ja?: string; zh?: string };

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en, ko, ja, zh };

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export function getDictionary(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}

export function tr(text: L10n, locale: string): string {
  return (text as Record<string, string | undefined>)[locale] ?? text.en ?? text.es;
}
