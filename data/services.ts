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
    desc: { es: "Medidores másicos, magnéticos, turbina, vórtex y placas de orificio.", en: "Coriolis, magnetic, turbine, vortex and orifice plate meters." } },
  { id: "cal-nivel", group: "lab", icon: "BarChart3",
    name: { es: "Calibración de Nivel", en: "Level Calibration", ko: "레벨계 교정", ja: "レベル計校正", zh: "液位计校准" },
    desc: { es: "Transmisores de nivel por presión diferencial, radar, ultrasónicos y desplazadores.", en: "DP, radar, ultrasonic and displacer level transmitters." } },
  { id: "cal-presion", group: "lab", icon: "Gauge",
    name: { es: "Calibración de Presión", en: "Pressure Calibration", ko: "압력 교정", ja: "圧力校正", zh: "压力校准" },
    desc: { es: "Manómetros, transmisores, presostatos y balanzas de peso muerto.", en: "Gauges, transmitters, pressure switches and deadweight testers." } },
  { id: "cal-temperatura", group: "lab", icon: "Thermometer",
    name: { es: "Calibración de Temperatura", en: "Temperature Calibration", ko: "온도 교정", ja: "温度校正", zh: "温度校准" },
    desc: { es: "Termopares, RTD, termómetros bimetálicos y transmisores.", en: "Thermocouples, RTDs, bimetal thermometers and transmitters." } },
  // Calibración y mantenimiento
  { id: "valvulas-control", group: "calibration", icon: "SlidersHorizontal",
    name: { es: "Válvulas de Control", en: "Control Valves", ko: "조절밸브", ja: "調節弁", zh: "调节阀" },
    desc: { es: "Calibración, diagnóstico y mantenimiento de válvulas y posicionadores.", en: "Calibration, diagnostics and maintenance of valves and positioners." } },
  { id: "prueba-lazo", group: "calibration", icon: "Repeat",
    name: { es: "Prueba de Lazo", en: "Loop Testing", ko: "루프 테스트", ja: "ループ試験", zh: "回路测试" },
    desc: { es: "Verificación integral de lazos de control de campo a DCS.", en: "End-to-end verification of control loops from field to DCS." } },
  { id: "alarmas-nivel", group: "calibration", icon: "BellRing",
    name: { es: "Alarmas de Nivel", en: "Level Alarms", ko: "레벨 알람", ja: "レベル警報", zh: "液位报警" },
    desc: { es: "Prueba funcional de interruptores y alarmas de alto/bajo nivel.", en: "Functional testing of high/low level switches and alarms." } },
  { id: "regulador-presion", group: "calibration", icon: "CircleGauge",
    name: { es: "Regulador de Presión", en: "Pressure Regulators", ko: "압력 조절기", ja: "圧力調整器", zh: "压力调节器" },
    desc: { es: "Ajuste y mantenimiento de reguladores de presión.", en: "Adjustment and maintenance of pressure regulators." } },
  { id: "psv-preventivo", group: "calibration", icon: "ShieldCheck",
    name: { es: "Mantenimiento Preventivo de Válvulas de Seguridad PSV", en: "PSV Preventive Maintenance", ko: "안전밸브(PSV) 예방 정비", ja: "安全弁（PSV）予防保全", zh: "安全阀 (PSV) 预防性维护" },
    desc: { es: "Programa de calibración conforme a NOM-093-SCFI.", en: "Calibration program per NOM-093-SCFI." } },
  { id: "psv-correctivo", group: "calibration", icon: "Wrench",
    name: { es: "Mantenimiento Correctivo de Válvulas de Seguridad PSV", en: "PSV Corrective Maintenance", ko: "안전밸브(PSV) 사후 정비", ja: "安全弁（PSV）事後保全", zh: "安全阀 (PSV) 纠正性维护" },
    desc: { es: "Reparación, lapeado y reemplazo de componentes.", en: "Repair, lapping and component replacement." } },
  // Staffing
  { id: "admin-proyecto", group: "staffing", icon: "ClipboardList",
    name: { es: "Administrador de Proyecto", en: "Project Manager", ko: "프로젝트 관리자", ja: "プロジェクトマネージャー", zh: "项目经理" },
    desc: { es: "Planeación, control y cierre de proyectos de instrumentación.", en: "Planning, control and closeout of instrumentation projects." } },
  { id: "operario-primera", group: "staffing", icon: "HardHat",
    name: { es: "Operario de Primera", en: "First-Class Operator", ko: "1급 작업자", ja: "一級作業員", zh: "一级操作工" },
    desc: { es: "Personal calificado para montaje y apoyo en campo.", en: "Qualified personnel for installation and field support." } },
  { id: "instrumentista-tecnico", group: "staffing", icon: "Cpu",
    name: { es: "Instrumentista Técnico", en: "Instrumentation Technician", ko: "계측 기술자", ja: "計装技術者", zh: "仪表技术员" },
    desc: { es: "Técnicos con experiencia en calibración, configuración y troubleshooting.", en: "Technicians experienced in calibration, configuration and troubleshooting." } },
  { id: "instrumentista", group: "staffing", icon: "Wrench",
    name: { es: "Instrumentista", en: "Instrument Fitter", ko: "계측 작업자", ja: "計装工", zh: "仪表工" },
    desc: { es: "Instalación, tubing y mantenimiento de instrumentos.", en: "Instrument installation, tubing and maintenance." } },
];
