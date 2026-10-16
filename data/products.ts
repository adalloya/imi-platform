/**
 * Catálogo de equipos y tienda (venta y renta), migrado de https://www.imindustrial.mx/
 */
import type { L10n } from "@/lib/i18n";
import { images } from "./company";

export type ProductCategory = "test-calibration" | "electrical" | "other" | "any";

export const productCategories: { id: ProductCategory; name: L10n }[] = [
  { id: "test-calibration", name: { es: "Equipo de prueba de instrumentación y calibración", en: "Instrumentation test & calibration equipment", ko: "계측 시험 및 교정 장비", ja: "計装試験・校正機器", zh: "仪表测试与校准设备" } },
  { id: "electrical", name: { es: "Equipo de pruebas eléctricas", en: "Electrical test equipment", ko: "전기 시험 장비", ja: "電気試験機器", zh: "电气测试设备" } },
  { id: "other", name: { es: "Otros instrumentos", en: "Other instruments", ko: "기타 계측기", ja: "その他の計器", zh: "其他仪器" } },
  { id: "any", name: { es: "Venta y Renta de cualquier instrumento de medición y control", en: "Sale & rental of any measurement and control instrument", ko: "모든 측정·제어 계측기 판매 및 렌탈", ja: "あらゆる計測・制御機器の販売・レンタル", zh: "任何测量与控制仪器的销售与租赁" } },
];

export type Product = {
  id: string;
  category: ProductCategory;
  name: string;
  desc: L10n;
  image: string;
  sale: boolean;
  rent: boolean;
};

export const products: Product[] = [
  { id: "manometro-imi", category: "other", name: "Manómetro Industrial Marca IMI", image: images.gauge, sale: true, rent: false,
    desc: { es: "Fabricados en acero inoxidable 316, conexiones 1/4\" y 1/2\" NPT, rangos desde vacío hasta 15,000 psi.", en: "316 stainless steel, 1/4\" and 1/2\" NPT connections, ranges from vacuum to 15,000 psi." } },
  { id: "calibrador-presion", category: "test-calibration", name: "Calibrador de presión multifunción", image: images.instruments, sale: true, rent: true,
    desc: { es: "Calibrador documentador de presión con módulos intercambiables y HART.", en: "Documenting pressure calibrator with interchangeable modules and HART." } },
  { id: "calibrador-lazo", category: "test-calibration", name: "Calibrador de lazo 4-20 mA", image: images.equipmentSale, sale: true, rent: true,
    desc: { es: "Fuente y medición de corriente con alimentación de lazo 24 V.", en: "Current source/measure with 24 V loop power." } },
  { id: "bloque-seco", category: "test-calibration", name: "Calibrador de temperatura de bloque seco", image: images.labCalibration, sale: true, rent: true,
    desc: { es: "Bloque seco para termopares y RTD, rango -25 a 660 °C.", en: "Dry-well for thermocouples and RTDs, -25 to 660 °C range." } },
  { id: "balanza-peso-muerto", category: "test-calibration", name: "Balanza de peso muerto", image: images.workshop, sale: true, rent: true,
    desc: { es: "Patrón primario de presión hidráulica/neumática.", en: "Primary hydraulic/pneumatic pressure standard." } },
  { id: "comunicador-hart", category: "test-calibration", name: "Comunicador HART / Fieldbus", image: images.fieldCalibration, sale: true, rent: true,
    desc: { es: "Configuración y diagnóstico de instrumentos inteligentes.", en: "Configuration and diagnostics of smart instruments." } },
  { id: "megohmetro", category: "electrical", name: "Megóhmetro de aislamiento", image: images.equipmentSale, sale: true, rent: true,
    desc: { es: "Prueba de resistencia de aislamiento hasta 5 kV.", en: "Insulation resistance testing up to 5 kV." } },
  { id: "multimetro", category: "electrical", name: "Multímetro de procesos", image: images.instruments, sale: true, rent: true,
    desc: { es: "Multímetro True-RMS con medición de mA y alimentación de lazo.", en: "True-RMS multimeter with mA measurement and loop power." } },
  { id: "pinza-amperimetrica", category: "electrical", name: "Pinza amperimétrica", image: images.equipmentSale, sale: true, rent: true,
    desc: { es: "Medición de corriente AC/DC sin interrumpir el circuito.", en: "AC/DC current measurement without breaking the circuit." } },
  { id: "telurometro", category: "electrical", name: "Telurómetro (resistencia de tierra)", image: images.fieldCalibration, sale: true, rent: true,
    desc: { es: "Medición de sistemas de puesta a tierra.", en: "Grounding system measurement." } },
  { id: "transmisor-presion", category: "other", name: "Transmisor de presión", image: images.instruments, sale: true, rent: false,
    desc: { es: "Transmisor 4-20 mA HART, presión manométrica, absoluta o diferencial.", en: "4-20 mA HART transmitter, gauge, absolute or differential pressure." } },
  { id: "valvula-psv", category: "other", name: "Válvula de seguridad PSV", image: images.calibration, sale: true, rent: false,
    desc: { es: "Válvulas de seguridad y alivio, con calibración NOM-093.", en: "Safety and relief valves, NOM-093 calibrated." } },
  { id: "cualquier-instrumento", category: "any", name: "Cualquier instrumento de medición y control", image: images.sale, sale: true, rent: true,
    desc: { es: "Suministro bajo especificación técnica para cualquier marca, rango y protocolo. Gestionamos venta y renta inmediata con certificado de calibración incluido.", en: "Custom procurement per technical datasheet for any brand, range and protocol. Sale and rental with calibration certificate included." } },
];
