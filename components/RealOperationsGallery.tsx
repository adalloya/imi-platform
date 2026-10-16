import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, ShieldCheck } from "lucide-react";
import { images } from "@/data/company";
import { type Locale } from "@/lib/i18n";

export function RealOperationsGallery({ locale }: { locale: Locale }) {
  const h = (p: string) => `/${locale}${p}`;

  const galleryItems = [
    {
      title: "Laboratorio de Flujo Acreditado EMA FL-55",
      badge: "EMA FL-55 · ISO/IEC 17025",
      description: "Banco de calibración cerrado para flujómetros Coriolis másicos, electromagnéticos y turbinas con trazabilidad CENAM/NIST.",
      image: images.flowCalibrationFl55,
      href: "/laboratorio",
    },
    {
      title: "Inspección y Banco de Pruebas de Válvulas PSV",
      badge: "NOM-093-SCFI-2020",
      description: "Pruebas de disparo (pop test), lapeado plano con placas ópticas monocromáticas y dictamen para STPS y aseguradoras.",
      image: images.psvValvesBench,
      href: "/servicios",
    },
    {
      title: "Prueba Electrónica en Línea EVT Accutest",
      badge: "ASME I & VIII · API 576",
      description: "Prueba y ajuste en caliente de válvulas de seguridad operadas por resorte directo SIN detener la operación de la planta.",
      image: images.accutestElectronic,
      href: "/servicios",
    },
    {
      title: "Laboratorio de Metrología de Presión",
      badge: "Hasta 15,000 psi",
      description: "Comparadores hidráulicos y balanzas de pesos muertos para calibración de manómetros y transmisores SMART.",
      image: images.pressureMetrologyLab,
      href: "/laboratorio",
    },
    {
      title: "Metrología de Temperatura & Bloques Secos",
      badge: "-25 °C a 660 °C",
      description: "Pozos térmicos y calibradores documentadores para caracterización de termopares y sondas RTD Pt100.",
      image: images.temperatureMetrologyLab,
      href: "/laboratorio",
    },
    {
      title: "Sede Central Altamira & Unidades Móviles 24/7",
      badge: "Altamira · Hermosillo · Carmen",
      description: "Camionetas y remolques de calibración totalmente equipados para respuesta inmediata en paros de planta nacionales.",
      image: images.facilitiesMobileUnits,
      href: "/sucursales",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 border-t border-ink-200">
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-brand-700">
            <Camera className="size-3.5 text-brand-600" />
            Infraestructura & Operaciones Reales IMI
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-950">
            Nuestros Laboratorios, Talleres y Campo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-600 leading-relaxed">
            Conozca las instalaciones, bancos certificados y tecnología de vanguardia con los que respaldamos la integridad operativa de la industria.
          </p>
        </div>

        {/* Grid de 6 fotos de operaciones reales */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <article
              key={idx}
              className="group flex flex-col rounded-2xl border border-ink-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand-500 hover:-translate-y-1"
            >
              <div className="relative h-60 w-full overflow-hidden bg-ink-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 z-10 rounded-full bg-ink-900/90 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold text-brand-200 border border-white/20">
                  {item.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-ink-950 group-hover:text-brand-700 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-ink-600 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-5 pt-4 border-t border-ink-100 flex items-center justify-between text-xs font-bold text-brand-700">
                  <Link href={h(item.href)} className="inline-flex items-center gap-1.5 hover:underline">
                    <span>Ver Capacidades Técnicas</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
