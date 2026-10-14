import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { accreditations, company, images } from "@/data/company";
import { locations } from "@/data/locations";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const href = (p: string) => `/${locale}${p}`;
  const main = locations.filter((l) => l.type !== "pos");
  const pos = locations.filter((l) => l.type === "pos");

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded bg-white p-2">
            <Image src={images.logo} alt={company.legalName} width={160} height={50} className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed">{t.footer.tagline}</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li><a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="size-4 text-brand-200" />{company.email}</a></li>
            <li><a href={`tel:${company.mobileRaw}`} className="flex items-center gap-2 hover:text-white"><Phone className="size-4 text-brand-200" />Cel. {company.mobile}</a></li>
            <li><a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 hover:text-white"><Phone className="size-4 text-brand-200" />Tel. {company.phone}</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">{t.nav.locations}</h2>
          <ul className="mt-4 space-y-4 text-sm">
            {main.map((l) => (
              <li key={l.id} className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-200" />
                <span><span className="block font-medium text-white">{l.name}</span>{l.address}{l.phone && <> · Tel. {l.phone}</>}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">{t.locations.pos}</h2>
          <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm">
            {pos.map((l) => <li key={l.id}>{l.name}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">{t.accred.title}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {accreditations.map((a) => (
              <li key={a.id}>
                <span className="block text-xs text-ink-400">{a.authority}</span>
                <span className="font-mono text-white">{a.code}</span>
              </li>
            ))}
          </ul>
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Footer">
            <Link href={href("/servicios")} className="hover:text-white">{t.nav.services}</Link>
            <Link href={href("/academy")} className="hover:text-white">{t.nav.academy}</Link>
            <Link href={href("/tienda")} className="hover:text-white">{t.nav.store}</Link>
            <Link href={href("/descargas")} className="hover:text-white font-semibold text-brand-200">Recursos PDF</Link>
            <Link href={href("/contacto")} className="hover:text-white">{t.nav.contact}</Link>
            <Link href={href("/admin")} className="hover:text-white text-xs opacity-70">Super Admin</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 pb-24 text-xs text-ink-400 sm:flex-row sm:justify-between md:pb-5">
          <span>© {new Date().getFullYear()} {company.legalName}. {t.footer.rights}</span>
          <span>imindustrial.mx</span>
        </div>
      </div>
    </footer>
  );
}
