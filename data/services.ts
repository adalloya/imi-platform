/**
 * Catálogo completo de servicios, laboratorio y staffing, migrado de https://www.imindustrial.mx/
 */
import type { L10n } from "@/lib/i18n";
import { images } from "./company";

export type ServiceGroup = "lab" | "calibration" | "staffing";

export type Service = {
  id: string;
  group: ServiceGroup;
  icon: string; // nombre de icono lucide
  name: L10n;
  desc: L10n;
};

export const serviceGroups: { id: ServiceGroup; name: L10n; image: string }[] = [
  {
    id: "lab",
    image: images.labCalibration,
    name: {
      es: "Laboratorio de Metrología",
      en: "Metrology Laboratory",
      ko: "계측 시험소",
      ja: "計量試験所",
      zh: "计量实验室",
    },
  },
  {
    id: "calibration",
    image: images.fieldCalibration,
    name: {
      es: "Calibración y Mantenimiento",
      en: "Calibration & Maintenance",
      ko: "교정 및 유지보수",
      ja: "校正・保守",
      zh: "校准与维护",
    },
  },
  {
    id: "staffing",
    image: images.engineer,
    name: {
      es: "Subcontratación de Personal",
      en: "Technical Staffing",
      ko: "기술 인력 파견",
      ja: "技術者派遣",
      zh: "技术人员外包",
    },
  },
];

export const services: Service[] = [
  // Laboratorio
  { id: "cal-flujo", group: "lab", icon: "Waves",
    name: { es: "Calibración de Medidores de Flujo", en: "Flow Meter Calibration", ko: "유량계 교정", ja: "流量計校正", zh: "流量计校准" },
    desc: { es: "Calibración y verificación metrológica con trazabilidad CENAM/NIST. Medidores Coriolis másicos, magnéticos, turbina, vórtex y placas de orificio con incertidumbre acreditada.", en: "Coriolis, magnetic, turbine, vortex and orifice plate meters with accredited uncertainty and CENAM/NIST traceability." } },
  { id: "cal-nivel", group: "lab", icon: "BarChart3",
    name: { es: "Calibración de Nivel", en: "Level Calibration", ko: "레벨계 교정", ja: "レベル計校正", zh: "液位计校准" },
    desc: { es: "Calibración de alta precisión para transmisores de nivel por presión diferencial (DP), radar de onda guiada y 80 GHz, ultrasónicos y desplazadores.", en: "DP, guided wave and 80 GHz radar, ultrasonic and displacer level transmitters for critical processes." } },
  { id: "cal-presion", group: "lab", icon: "Gauge",
    name: { es: "Calibración de Presión", en: "Pressure Calibration", ko: "압력 교정", ja: "圧力校正", zh: "压力校准" },
    desc: { es: "Calibración trazable para manómetros de proceso, transmisores de presión absoluta/diferencial/manométrica, presostatos y balanzas de peso muerto.", en: "Process gauges, DP/absolute/gauge transmitters, pressure switches and deadweight testers." } },
  { id: "cal-temperatura", group: "lab", icon: "Thermometer",
    name: { es: "Calibración de Temperatura", en: "Temperature Calibration", ko: "온도 교정", ja: "温度校正", zh: "温度校准" },
    desc: { es: "Calibración en baños termostáticos y hornos secos para sensores RTD Pt100, termopares industriales (J, K, T, E), transmisores y bimetálicos.", en: "RTDs Pt100, industrial thermocouples, temperature transmitters and bimetal gauges." } },
  // Calibración y mantenimiento
  { id: "valvulas-control", group: "calibration", icon: "SlidersHorizontal",
    name: { es: "Válvulas de Control", en: "Control Valves", ko: "조절밸브", ja: "調節弁", zh: "调节阀" },
    desc: { es: "Diagnóstico predictivo de carrera, calibración de posicionadores electro-neumáticos inteligentes (HART / Fieldbus) y mantenimiento integral para evitar paros de proceso.", en: "Calibration, stroke diagnostics and overhaul of control valves and smart electro-pneumatic positioners." } },
  { id: "prueba-lazo", group: "calibration", icon: "Repeat",
    name: { es: "Prueba de Lazo (Loop Check)", en: "Loop Testing", ko: "루프 테스트", ja: "ループ試験", zh: "回路测试" },
    desc: { es: "Verificación integral de señales 4-20 mA, buses digitales y actuación en campo hacia el Sistema de Control Distribuido (DCS) y PLC.", en: "End-to-end verification of analog and digital control loops from field instruments to DCS/PLC." } },
  { id: "alarmas-nivel", group: "calibration", icon: "BellRing",
    name: { es: "Alarmas de Nivel", en: "Level Alarms", ko: "레벨 알람", ja: "レベル警報", zh: "液位报警" },
    desc: { es: "Prueba funcional de disparo, calibración de interruptores mecánicos, ópticos y horquillas vibratorias para sistemas de paro de emergencia SIL.", en: "Functional trip testing and calibration of level switches for SIS and SIL safety interlocks." } },
  { id: "regulador-presion", group: "calibration", icon: "CircleGauge",
    name: { es: "Regulador de Presión", en: "Pressure Regulators", ko: "압력 조절기", ja: "圧力調整器", zh: "压力调节器" },
    desc: { es: "Inspección interna, cambio de elastómeros, ajuste de setpoint y prueba de hermeticidad en reguladores de gas y fluidos de proceso.", en: "Inspection, elastomer overhaul, setpoint calibration and leak testing on gas/fluid regulators." } },
  { id: "psv-preventivo", group: "calibration", icon: "ShieldCheck",
    name: { es: "Mantenimiento Preventivo de Válvulas de Seguridad PSV", en: "PSV Preventive Maintenance", ko: "안전밸브(PSV) 예방 정비", ja: "安全弁（PSV）予防保全", zh: "安全阀 (PSV) 预防性维护" },
    desc: { es: "Inspección, desmontaje, prueba de disparo en banco (pop test), hermeticidad y dictamen oficial conforme a NOM-093-SCFI-2020.", en: "Inspection, bench pop testing, seat tightness and official certification per NOM-093-SCFI-2020." } },
  { id: "psv-correctivo", group: "calibration", icon: "Wrench",
    name: { es: "Mantenimiento Correctivo de Válvulas de Seguridad PSV", en: "PSV Corrective Maintenance", ko: "안전밸브(PSV) 사후 정비", ja: "安全弁（PSV）事後保全", zh: "安全阀 (PSV) 纠正性维护" },
    desc: { es: "Lapeado de precisión en discos y toberas con placas ópticas, maquinado, sustitución de resortes y ajuste certificado de presión de disparo.", en: "Precision lapping, machining, spring replacement and certified set pressure reset." } },
  // Staffing
  { id: "admin-proyecto", group: "staffing", icon: "ClipboardList",
    name: { es: "Administrador de Proyecto", en: "Project Manager", ko: "프로젝트 관리자", ja: "プロジェクトマネージャー", zh: "项目经理" },
    desc: { es: "Liderazgo senior en sitio para comisionamiento, libranzas y modernización de instrumentación con control riguroso de cronograma y seguridad.", en: "Senior on-site leadership for commissioning, turnarounds and instrumentation upgrades." } },
  { id: "operario-primera", group: "staffing", icon: "HardHat",
    name: { es: "Operario de Primera", en: "First-Class Operator", ko: "1급 작업자", ja: "一級作業員", zh: "一级操作工" },
    desc: { es: "Personal calificado en montaje mecánico, soportería, pruebas hidrostáticas y apoyo técnico en campo bajo estricta normativa de seguridad.", en: "Qualified personnel for mechanical assembly, pipe supports, hydrostatic testing and field support." } },
  { id: "instrumentista-tecnico", group: "staffing", icon: "Cpu",
    name: { es: "Instrumentista Técnico", en: "Instrumentation Technician", ko: "계측 기술자", ja: "計装技術者", zh: "仪表技术员" },
    desc: { es: "Especialistas certificados en calibración in-situ, comisionamiento, diagnóstico avanzado de lazos de control y configuración de protocolos industriales.", en: "Certified specialists for in-situ calibration, commissioning, loop troubleshooting and digital protocol configuration." } },
  { id: "instrumentista", group: "staffing", icon: "Wrench",
    name: { es: "Instrumentista", en: "Instrument Fitter", ko: "계측 작업자", ja: "計装工", zh: "仪表工" },
    desc: { es: "Técnicos expertos en tendido y doblez de tubing en acero inoxidable, montaje de instrumentos, conexionado neumático y mantenimiento correctivo.", en: "Experienced technicians for stainless steel tubing bending, instrument mounting and pneumatic hook-ups." } },
];
