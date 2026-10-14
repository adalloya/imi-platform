import type { Metadata } from "next";
import { Download, FileText, ExternalLink, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui";
import { CtaBand } from "@/components/sections";
import { documents } from "@/data/documents";
import { images } from "@/data/company";
import { getDictionary, tr, type Locale } from "@/lib/i18n";

type P = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Centro de Descargas & Recursos Oficiales PDF · IMI",
    description: "Brochures institucionales, acreditaciones de la Entidad Mexicana de Acreditación (EMA) y formatos oficiales de registro STPS.",
  };
}

export default async function DescargasPage({ params }: P) {
  const { locale: l } = await params;
  const locale = l as Locale;
  const t = getDictionary(locale);

  const categories = [
    { id: "brochure", title: "Brochures y Folletos Corporativos", subtitle: "Información integral de metrología, válvulas PSV y academia" },
    { id: "accreditation", title: "Acreditaciones y Anexos Técnicos EMA", subtitle: "Certificados de cumplimiento bajo NMX-EC-17025-IMNC-2018 (ISO/IEC 17025)" },
    { id: "format", title: "Formatos y Solicitudes STPS", subtitle: "Documentos para el registro oficial de participantes en cursos" },
    { id: "official", title: "Constancias Institucionales", subtitle: "Cédula y registro oficial de Instrumentación y Metrología Industrial" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Recursos & Documentación Oficial"
        title="Centro de Descargas y Folletos PDF"
        subtitle="Consulte y descargue nuestros brochures institucionales, acreditaciones oficiales emitidas por la EMA y formatos de registro STPS."
        image={images.workshop}
      />

      <div className="container-x py-12 lg:py-16 space-y-12">
        {categories.map((cat) => {
          const docs = documents.filter((d) => d.category === cat.id);
          if (!docs.length) return null;

          return (
            <section key={cat.id}>
              <div className="border-b border-ink-200 pb-3 mb-6">
                <h2 className="text-xl font-bold text-ink-900">{cat.title}</h2>
                <p className="text-sm text-ink-500 mt-1">{cat.subtitle}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {docs.map((doc) => (
                  <article key={doc.id} className="card p-5 flex flex-col justify-between hover:border-brand-500">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="flex size-9 items-center justify-center rounded bg-red-50 text-red-600 font-bold text-xs">
                            <FileText className="size-4" />
                          </span>
                          <span className="chip font-mono text-[11px] font-semibold text-brand-700 bg-brand-50">
                            {doc.badge || "PDF Oficial"}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-ink-400">PDF</span>
                      </div>

                      <h3 className="mt-3 font-bold text-base text-ink-900 leading-snug">
                        {tr(doc.title, locale)}
                      </h3>
                      <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                        {tr(doc.description, locale)}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-ink-100 flex items-center justify-between">
                      <span className="text-xs font-mono text-ink-400 truncate max-w-[180px]">
                        {doc.filename}
                      </span>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="btn btn-primary min-h-10 text-xs px-4"
                      >
                        <Download className="size-3.5" /> Descargar PDF
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="size-6 text-brand-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-brand-950">¿Necesita un alcance o certificado de trazabilidad específico?</h3>
              <p className="text-sm text-brand-800 mt-0.5">
                Nuestro laboratorio de metrología emite certificados con cálculo de incertidumbre trazable a patrones nacionales e internacionales.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/528331550189?text=Hola,%20requiero%20solicitar%20un%20alcance%20o%20certificado%20de%20calibración"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-safety shrink-0"
          >
            Consultar con Laboratorio
          </a>
        </div>
      </div>

      <CtaBand t={t} locale={locale} />
    </>
  );
}
