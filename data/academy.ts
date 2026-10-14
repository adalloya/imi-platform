/**
 * Catálogo completo IMI Academy, migrado de https://www.imindustrial.mx/
 */
import type { L10n } from "@/lib/i18n";
import { images } from "./company";

export type CourseCategory = "certification" | "basic" | "specialized";

export type Course = {
  id: string;
  category: CourseCategory;
  order?: number;
  name: L10n;
  summary: L10n;
  hours: number;
  modality: ("presencial" | "online" | "in-plant")[];
  endorsement: string[];
  topics: L10n[];
  image: string;
};

const ENDORSE = ["STPS IMI150311QL2-0013", "CONOCER EC0217"];

export const courses: Course[] = [
  // ───────── Certificaciones ─────────
  {
    id: "psv-nom-093",
    category: "certification",
    name: {
      es: "Certificación en Válvulas de Seguridad PSV NOM-093-SCFI-2020",
      en: "Pressure Safety Valve (PSV) Certification NOM-093-SCFI-2020",
      ko: "안전밸브(PSV) 인증 NOM-093-SCFI-2020",
      ja: "安全弁（PSV）認定 NOM-093-SCFI-2020",
      zh: "安全阀 (PSV) 认证 NOM-093-SCFI-2020",
    },
    summary: {
      es: "Formación y certificación del personal técnico en inspección, prueba, calibración y mantenimiento de válvulas de seguridad y alivio conforme a NOM-093-SCFI-2020.",
      en: "Training and certification of technical staff in inspection, testing, calibration and maintenance of safety and relief valves per NOM-093-SCFI-2020.",
    },
    hours: 40,
    modality: ["presencial", "in-plant"],
    endorsement: [...ENDORSE, "NOM-093-SCFI-2020"],
    topics: [
      { es: "Marco normativo NOM-093-SCFI-2020 y ASME Sección VIII", en: "NOM-093-SCFI-2020 and ASME Section VIII regulatory framework" },
      { es: "Tipos de válvulas de seguridad y alivio", en: "Safety and relief valve types" },
      { es: "Prueba de presión de apertura (set pressure) y hermeticidad", en: "Set pressure and seat tightness testing" },
      { es: "Desarmado, inspección, lapeado y ensamble", en: "Disassembly, inspection, lapping and reassembly" },
      { es: "Reporte, etiquetado y trazabilidad", en: "Reporting, tagging and traceability" },
    ],
    image: images.certification,
  },
  {
    id: "nccer",
    category: "certification",
    name: {
      es: "NCCER Certification",
      en: "NCCER Certification",
      ko: "NCCER 인증",
      ja: "NCCER 認定",
      zh: "NCCER 认证",
    },
    summary: {
      es: "Programa con reconocimiento internacional del National Center for Construction Education and Research para instrumentistas.",
      en: "Internationally recognized National Center for Construction Education and Research program for instrumentation technicians.",
    },
    hours: 80,
    modality: ["presencial"],
    endorsement: ["NCCER"],
    topics: [
      { es: "Core Curriculum NCCER", en: "NCCER Core Curriculum" },
      { es: "Instrumentación nivel 1 a 4", en: "Instrumentation levels 1 to 4" },
      { es: "Evaluación de desempeño práctico (Performance Profile)", en: "Hands-on Performance Profile assessment" },
    ],
    image: images.course,
  },
  {
    id: "isa-ccst",
    category: "certification",
    name: {
      es: "Curso para certificación ISA CCST Nivel 1",
      en: "ISA CCST Level 1 Certification Prep Course",
      ko: "ISA CCST 레벨 1 인증 준비 과정",
      ja: "ISA CCST レベル1 認定対策講座",
      zh: "ISA CCST 一级认证培训课程",
    },
    summary: {
      es: "Preparación para el examen Certified Control Systems Technician de la International Society of Automation.",
      en: "Preparation for the International Society of Automation Certified Control Systems Technician exam.",
    },
    hours: 40,
    modality: ["presencial", "online"],
    endorsement: ["ISA", ...ENDORSE],
    topics: [
      { es: "Calibración, mantenimiento y reparación", en: "Calibration, maintenance and repair" },
      { es: "Instalación y verificación de lazos", en: "Loop installation and checking" },
      { es: "Troubleshooting de sistemas de control", en: "Control system troubleshooting" },
      { es: "Seguridad, documentación y P&ID", en: "Safety, documentation and P&IDs" },
    ],
    image: images.workshop,
  },
  {
    id: "diplomado-instrumentacion",
    category: "certification",
    name: {
      es: "Diplomado en Instrumentación Industrial",
      en: "Industrial Instrumentation Diploma Program",
      ko: "산업 계측 디플로마 과정",
      ja: "工業計装ディプロマ課程",
      zh: "工业仪表文凭课程",
    },
    summary: {
      es: "Programa integral que cubre medición de variables de proceso, calibración, válvulas y sistemas de control.",
      en: "Comprehensive program covering process variable measurement, calibration, valves and control systems.",
    },
    hours: 120,
    modality: ["presencial", "online"],
    endorsement: ENDORSE,
    topics: [
      { es: "Medición de presión, nivel, flujo y temperatura", en: "Pressure, level, flow and temperature measurement" },
      { es: "Elementos finales de control", en: "Final control elements" },
      { es: "Lazos de control y sintonía PID", en: "Control loops and PID tuning" },
      { es: "Protocolos HART, Fieldbus y Profibus", en: "HART, Fieldbus and Profibus protocols" },
    ],
    image: images.course,
  },
  {
    id: "diplomado-metrologia",
    category: "certification",
    name: {
      es: "Diplomado en Metrología",
      en: "Metrology Diploma Program",
      ko: "계측학(메트롤로지) 디플로마 과정",
      ja: "計量学ディプロマ課程",
      zh: "计量学文凭课程",
    },
    summary: {
      es: "Fundamentos y práctica de metrología industrial, trazabilidad, incertidumbre y gestión de laboratorios ISO/IEC 17025.",
      en: "Industrial metrology fundamentals and practice, traceability, uncertainty and ISO/IEC 17025 lab management.",
    },
    hours: 120,
    modality: ["presencial", "online"],
    endorsement: ENDORSE,
    topics: [
      { es: "Sistema Internacional de Unidades y trazabilidad", en: "SI units and traceability" },
      { es: "Estimación de incertidumbre (GUM)", en: "Uncertainty estimation (GUM)" },
      { es: "NMX-EC-17025-IMNC-2018", en: "NMX-EC-17025-IMNC-2018" },
      { es: "Intervalos de calibración y confirmación metrológica", en: "Calibration intervals and metrological confirmation" },
    ],
    image: images.labCalibration,
  },
  // ───────── Cursos básicos ─────────
  {
    id: "principios-instrumentacion",
    category: "basic",
    order: 1,
    name: {
      es: "Principios de instrumentación industrial",
      en: "Principles of Industrial Instrumentation",
      ko: "산업 계측의 원리",
      ja: "工業計装の原理",
      zh: "工业仪表原理",
    },
    summary: {
      es: "Conceptos esenciales de medición, simbología ISA y variables de proceso.",
      en: "Essential measurement concepts, ISA symbology and process variables.",
    },
    hours: 24,
    modality: ["presencial", "online", "in-plant"],
    endorsement: ENDORSE,
    topics: [
      { es: "Variables de proceso", en: "Process variables" },
      { es: "Simbología ISA 5.1 y DTIs", en: "ISA 5.1 symbology and P&IDs" },
      { es: "Señales analógicas y digitales", en: "Analog and digital signals" },
    ],
    image: images.course,
  },
  {
    id: "ajuste-calibracion",
    category: "basic",
    order: 2,
    name: {
      es: "Ajuste y calibración de instrumentación industrial",
      en: "Adjustment and Calibration of Industrial Instrumentation",
      ko: "산업 계측기 조정 및 교정",
      ja: "工業計装の調整と校正",
      zh: "工业仪表调整与校准",
    },
    summary: {
      es: "Práctica de calibración de transmisores, manómetros y sensores de temperatura.",
      en: "Hands-on calibration of transmitters, pressure gauges and temperature sensors.",
    },
    hours: 24,
    modality: ["presencial", "in-plant"],
    endorsement: ENDORSE,
    topics: [
      { es: "Error, exactitud y repetibilidad", en: "Error, accuracy and repeatability" },
      { es: "Calibración en 5 puntos", en: "5-point calibration" },
      { es: "Comunicadores HART", en: "HART communicators" },
    ],
    image: images.workshop,
  },
  {
    id: "valvulas-control",
    category: "basic",
    order: 3,
    name: {
      es: "Dimensionamiento, selección y calibración de válvulas de control",
      en: "Control Valve Sizing, Selection and Calibration",
      ko: "조절밸브 사이징, 선정 및 교정",
      ja: "調節弁のサイジング・選定・校正",
      zh: "调节阀选型、尺寸计算与校准",
    },
    summary: {
      es: "Cálculo de Cv, características de flujo, actuadores y posicionadores.",
      en: "Cv calculation, flow characteristics, actuators and positioners.",
    },
    hours: 24,
    modality: ["presencial", "in-plant"],
    endorsement: ENDORSE,
    topics: [
      { es: "Cálculo de Cv (ISA 75.01)", en: "Cv calculation (ISA 75.01)" },
      { es: "Cavitación y flashing", en: "Cavitation and flashing" },
      { es: "Calibración de posicionadores", en: "Positioner calibration" },
    ],
    image: images.fieldCalibration,
  },
  {
    id: "dcs",
    category: "basic",
    order: 4,
    name: {
      es: "Sistemas de control distribuido (DCS)",
      en: "Distributed Control Systems (DCS)",
      ko: "분산 제어 시스템(DCS)",
      ja: "分散制御システム（DCS）",
      zh: "集散控制系统 (DCS)",
    },
    summary: {
      es: "Arquitectura, configuración y operación de sistemas DCS en planta.",
      en: "DCS architecture, configuration and plant operation.",
    },
    hours: 24,
    modality: ["presencial", "online"],
    endorsement: ENDORSE,
    topics: [
      { es: "Arquitectura y redes industriales", en: "Architecture and industrial networks" },
      { es: "Bloques funcionales y estrategias de control", en: "Function blocks and control strategies" },
      { es: "HMI y gestión de alarmas", en: "HMI and alarm management" },
    ],
    image: images.plant,
  },
  // ───────── Cursos especializados ─────────
  {
    id: "analitica",
    category: "specialized",
    name: {
      es: "Instrumentación Analítica",
      en: "Analytical Instrumentation",
      ko: "분석 계측",
      ja: "分析計装",
      zh: "分析仪表",
    },
    summary: {
      es: "Analizadores de pH, conductividad, oxígeno disuelto, cromatografía y gases.",
      en: "pH, conductivity, dissolved oxygen, chromatography and gas analyzers.",
    },
    hours: 24,
    modality: ["presencial", "in-plant"],
    endorsement: ENDORSE,
    topics: [
      { es: "Analizadores electroquímicos", en: "Electrochemical analyzers" },
      { es: "Cromatografía de gases", en: "Gas chromatography" },
      { es: "Sistemas de muestreo", en: "Sampling systems" },
    ],
    image: images.labCalibration,
  },
  {
    id: "metrologia",
    category: "specialized",
    name: { es: "Metrología", en: "Metrology", ko: "계측학", ja: "計量学", zh: "计量学" },
    summary: {
      es: "Fundamentos de metrología aplicada a procesos industriales.",
      en: "Metrology fundamentals applied to industrial processes.",
    },
    hours: 16,
    modality: ["presencial", "online"],
    endorsement: ENDORSE,
    topics: [
      { es: "Trazabilidad e incertidumbre", en: "Traceability and uncertainty" },
      { es: "Patrones de referencia", en: "Reference standards" },
    ],
    image: images.labCalibration,
  },
  {
    id: "neumatica",
    category: "specialized",
    name: {
      es: "Neumática Industrial",
      en: "Industrial Pneumatics",
      ko: "산업 공압",
      ja: "工業空圧",
      zh: "工业气动",
    },
    summary: {
      es: "Componentes, circuitos y mantenimiento de sistemas neumáticos.",
      en: "Pneumatic system components, circuits and maintenance.",
    },
    hours: 16,
    modality: ["presencial"],
    endorsement: ENDORSE,
    topics: [
      { es: "Unidades de mantenimiento FRL", en: "FRL units" },
      { es: "Válvulas direccionales y actuadores", en: "Directional valves and actuators" },
    ],
    image: images.workshop,
  },
  {
    id: "sil",
    category: "specialized",
    name: {
      es: "Selección de SIL",
      en: "SIL Selection",
      ko: "SIL 선정",
      ja: "SIL 選定",
      zh: "SIL 等级选定",
    },
    summary: {
      es: "Determinación del nivel de integridad de seguridad conforme a IEC 61511 / 61508.",
      en: "Safety Integrity Level determination per IEC 61511 / 61508.",
    },
    hours: 16,
    modality: ["presencial", "online"],
    endorsement: ENDORSE,
    topics: [
      { es: "Análisis LOPA y gráfico de riesgo", en: "LOPA and risk graph" },
      { es: "Cálculo de PFDavg", en: "PFDavg calculation" },
    ],
    image: images.refinery,
  },
  {
    id: "subsea",
    category: "specialized",
    name: {
      es: "Subsea Training",
      en: "Subsea Training",
      ko: "해저(Subsea) 교육",
      ja: "サブシー研修",
      zh: "水下 (Subsea) 培训",
    },
    summary: {
      es: "Instrumentación y sistemas de control submarinos para la industria costa afuera.",
      en: "Subsea instrumentation and control systems for the offshore industry.",
    },
    hours: 24,
    modality: ["presencial"],
    endorsement: ENDORSE,
    topics: [
      { es: "Sistemas de producción submarina", en: "Subsea production systems" },
      { es: "Control electrohidráulico", en: "Electro-hydraulic control" },
    ],
    image: images.refinery,
  },
];

/** Calendario de próximas fechas (editable). */
export const calendar = [
  { courseId: "psv-nom-093", date: "2026-11-09", city: "Altamira, Tamps." },
  { courseId: "isa-ccst", date: "2026-11-23", city: "Online" },
  { courseId: "ajuste-calibracion", date: "2026-11-30", city: "Altamira, Tamps." },
  { courseId: "diplomado-instrumentacion", date: "2027-01-12", city: "Cd. del Carmen, Camp." },
  { courseId: "nccer", date: "2027-01-26", city: "Altamira, Tamps." },
  { courseId: "diplomado-metrologia", date: "2027-02-09", city: "Online" },
];
