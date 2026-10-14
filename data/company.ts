/**
 * Datos institucionales migrados íntegramente de https://www.imindustrial.mx/
 * Todas las imágenes se referencian por URL externa (no se almacenan binarios en el repo).
 */
import type { L10n } from "@/lib/i18n";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "528331550189";

export const company = {
  legalName: "Instrumentación y Metrología Industrial S.R.L. de C.V.",
  shortName: "IMI",
  website: "https://www.imindustrial.mx/",
  email: "contacto@imindustrial.mx",
  mobile: "(833) 155.0189",
  mobileRaw: "+528331550189",
  phone: "(833) 126.9795",
  phoneRaw: "+528331269795",
  hqPhone: "8331550189",
};

const WP = "https://www.imindustrial.mx/wp-content/uploads";

export const images = {
  logo: `${WP}/2021/02/Logotipo-IMI-horizontal.jpeg`,
  logoLocal: "/images/logo-header.jpg",
  favicon: `${WP}/2018/07/favicon.png`,
  hero1: `${WP}/1-marco-homepage.jpg`,
  hero2: `${WP}/2-marco-homepage.jpg`,
  certStrip: `${WP}/2019/08/certificaciones-imi.jpg`,
  calibration: `${WP}/2020/01/Calibracion_back.jpg`,
  calibrationHover: `${WP}/2020/01/Calibracion_hover.jpg`,
  certification: `${WP}/2020/01/Certificacion_back.jpg`,
  certificationHover: `${WP}/2020/01/Certificacion_hover.jpg`,
  rent: `${WP}/2020/01/Renta_back.jpg`,
  rentHover: `${WP}/2020/01/Renta_hover.jpg`,
  sale: `${WP}/2020/01/Venta_back.jpg`,
  saleHover: `${WP}/2020/01/Venta_hover.jpg`,
  gauge: `${WP}/2020/02/Manometro-marca-IMI.jpg`,
  labCalibration: `${WP}/2020/02/calibracion.jpg`,
  course: `${WP}/2020/02/curso-de-instrumentacion.jpg`,
  fieldCalibration: `${WP}/2020/02/servicio-de-calibracion-en-campo.jpg`,
  workshop: `${WP}/2020/02/taller-de-instrumentacion.jpg`,
  equipmentSale: `${WP}/2020/02/venta-de-equipo-de-instrumentacion.jpg`,
  instruments: `${WP}/2018/05/instruments.png`,
  logoAc: `${WP}/2021/02/LogoAc.png`,
  logoMM: `${WP}/2021/02/LogoMM.png`,
  // Activos locales oficiales de Unidades de Negocio
  logoAcademy: "/images/logo-academy.png",
  unitAcademy: "/images/unit-academy.jpg",
  logoMaintenance: "/images/logo-maintenance.png",
  unitMaintenance: "/images/unit-maintenance.jpg",
  logoInstruments: "/images/logo-instruments.png",
  unitInstruments: "/images/unit-instruments.jpg",
  // Placeholders corporativos externos (Unsplash, alta calidad industrial)
  plant:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
  refinery:
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80",
  engineer:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
};

export type BusinessUnit = {
  id: "instruments" | "maintenance" | "academy";
  shortName: string;
  fullName: string;
  badge: string;
  tagline: string;
  description: string;
  logo: string;
  image: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  highlights: string[];
};

export const businessUnits: BusinessUnit[] = [
  {
    id: "instruments",
    shortName: "Instruments & Equipment",
    fullName: "IMI Instruments & Equipment",
    badge: "Venta · Renta · Equipamiento",
    tagline: "Suministro y Renta de Instrumentación de Proceso",
    description: "Venta y renta de calibradores de procesos multifunción, bombas de presión neumáticas e hidráulicas, manómetros de proceso con sellos químicos y refaccionamiento crítico con entrega inmediata.",
    logo: "/images/logo-instruments.png",
    image: "/images/unit-instruments.jpg",
    primaryHref: "/tienda",
    primaryLabel: "Explorar Catálogo y Renta",
    secondaryHref: "/descargas",
    secondaryLabel: "Fichas Técnicas & Catálogos",
    highlights: [
      "Venta de instrumentación y equipo de medición industrial",
      "Renta de calibradores y patrones trazables inmediatos",
      "Manómetros y sellos de diafragma marca IMI",
      "Asesoría técnica para especificación y reemplazo",
    ],
  },
  {
    id: "maintenance",
    shortName: "Metrology & Maintenance",
    fullName: "IMI Metrology & Maintenance",
    badge: "Laboratorio Acreditado · ISO/IEC 17025",
    tagline: "Laboratorio Acreditado y Mantenimiento a Válvulas PSV",
    description: "Laboratorio acreditado ante la EMA en presión y flujo, mantenimiento integral a válvulas de seguridad (PSV) bajo NOM-093-SCFI, calibración in-situ con unidades móviles y soporte en paros de planta.",
    logo: "/images/logo-maintenance.png",
    image: "/images/unit-maintenance.jpg",
    primaryHref: "/laboratorio",
    primaryLabel: "Servicios de Laboratorio y Campo",
    secondaryHref: "/servicios",
    secondaryLabel: "Mantenimiento a Válvulas PSV",
    highlights: [
      "Calibración acreditada EMA (NMX-EC-17025-IMNC-2018)",
      "Mantenimiento, ajuste y prueba de Válvulas PSV",
      "Calibración in-situ con patrones trazables CENAM/NIST",
      "Soporte 24/7 y cuadrillas técnicas para paros de planta",
    ],
  },
  {
    id: "academy",
    shortName: "IMI Academy",
    fullName: "IMI Academy México",
    badge: "Capacitación Técnica · Desde 2010",
    tagline: "Capacitación y Certificación Técnica Especializada",
    description: "Centro de formación y especialización técnica desde 2010 con bancos de pruebas y equipo industrial real. Registro oficial ante la STPS con emisión de constancias DC-3 y alineación CONOCER EC0217.",
    logo: "/images/logo-academy.png",
    image: "/images/unit-academy.jpg",
    primaryHref: "/academy",
    primaryLabel: "Ver Catálogo de Cursos",
    secondaryHref: "/contacto",
    secondaryLabel: "Solicitar Plan In-Company",
    highlights: [
      "Cursos teórico-prácticos con equipo industrial real",
      "Constancia de habilidades DC-3 oficial ante la STPS",
      "Alineación a estándares de competencia CONOCER",
      "Modalidades en aulas IMI, In-Company o en línea",
    ],
  },
];

export type Accreditation = {
  id: string;
  code: string;
  authority: string;
  label: L10n;
};

export const accreditations: Accreditation[] = [
  {
    id: "stps",
    code: "IMI150311QL2-0013",
    authority: "STPS",
    label: {
      es: "Registro oficial como Agente Capacitador Externo ante la STPS",
      en: "Official External Training Agent registration with STPS (Mexican Ministry of Labor)",
      ko: "STPS(멕시코 노동부) 공인 외부 교육기관 등록",
      ja: "STPS（メキシコ労働省）公認外部研修機関登録",
      zh: "墨西哥劳工部 (STPS) 官方外部培训机构注册",
    },
  },
  {
    id: "conocer",
    code: "EC0217",
    authority: "CONOCER · SEP",
    label: {
      es: "Estándar de competencia CONOCER (SEP): Impartición de cursos de formación del capital humano",
      en: "CONOCER (SEP) Competency Standard: Delivery of human capital training courses",
      ko: "CONOCER(SEP) 역량 표준: 인적자원 교육과정 운영",
      ja: "CONOCER（SEP）能力基準：人材育成講座の実施",
      zh: "CONOCER (SEP) 能力标准：人力资本培训课程授课",
    },
  },
  {
    id: "iso17025",
    code: "NMX-EC-17025-IMNC-2018",
    authority: "ISO/IEC 17025",
    label: {
      es: "Laboratorio de calibración conforme a la norma NMX-EC-17025-IMNC-2018",
      en: "Calibration laboratory compliant with NMX-EC-17025-IMNC-2018 (ISO/IEC 17025)",
      ko: "NMX-EC-17025-IMNC-2018(ISO/IEC 17025) 준거 교정 시험소",
      ja: "NMX-EC-17025-IMNC-2018（ISO/IEC 17025）準拠校正試験所",
      zh: "符合 NMX-EC-17025-IMNC-2018 (ISO/IEC 17025) 的校准实验室",
    },
  },
  {
    id: "nom093",
    code: "NOM-093-SCFI-1994 / 2020",
    authority: "SCFI",
    label: {
      es: "Calibración de Válvulas de Seguridad PSV conforme a NOM-093-SCFI-1994 y su actualización NOM-093-SCFI-2020",
      en: "Pressure Safety Valve (PSV) calibration per NOM-093-SCFI-1994 and its NOM-093-SCFI-2020 update",
      ko: "NOM-093-SCFI-1994 및 개정판 NOM-093-SCFI-2020에 따른 안전밸브(PSV) 교정",
      ja: "NOM-093-SCFI-1994 および改訂版 NOM-093-SCFI-2020 に基づく安全弁（PSV）校正",
      zh: "依据 NOM-093-SCFI-1994 及其更新版 NOM-093-SCFI-2020 进行安全阀 (PSV) 校准",
    },
  },
];
