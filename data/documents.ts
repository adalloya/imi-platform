/**
 * Documentos, manuales, acreditaciones y brochures oficiales en PDF
 * extraídos íntegramente de https://www.imindustrial.mx/
 * Todas las URLs son directas a los archivos originales.
 */
import type { L10n } from "@/lib/i18n";

export type DocumentCategory = "brochure" | "accreditation" | "format" | "official";

export type PdfDocument = {
  id: string;
  category: DocumentCategory;
  title: L10n;
  description: L10n;
  url: string;
  filename: string;
  badge?: string;
};

export const documents: PdfDocument[] = [
  {
    id: "brochure-imi",
    category: "brochure",
    title: {
      es: "Brochure Corporativo General IMI",
      en: "IMI General Corporate Brochure",
      ko: "IMI 일반 기업 브로슈어",
      ja: "IMI 総合企業パンフレット",
      zh: "IMI 综合企业画册",
    },
    description: {
      es: "Resumen institucional de servicios de metrología, calibración en campo, venta, renta y catálogo IMI Academy.",
      en: "Institutional overview of metrology services, field calibration, sales, rental, and IMI Academy catalog.",
      ko: "계측 서비스, 현장 교정, 판매, 렌탈 및 IMI 아카데미 카탈로그 개요.",
      ja: "計量サービス、現場校正、販売、レンタル、IMIアカデミー講座の総合概要。",
      zh: "计量服务、现场校准、销售、租赁及 IMI 学院课程的综合介绍。",
    },
    url: "https://www.imindustrial.mx/wp-content/uploads/2021/02/Brochure-IMI.pdf",
    filename: "Brochure-IMI.pdf",
    badge: "Oficial",
  },
  {
    id: "brochure-psv",
    category: "brochure",
    title: {
      es: "Brochure Especializado en Válvulas de Seguridad PSV",
      en: "PSV Safety Valves Specialized Brochure",
      ko: "PSV 안전밸브 전문 브로슈어",
      ja: "PSV安全弁専門パンフレット",
      zh: "PSV 安全阀专项宣传册",
    },
    description: {
      es: "Detalles del servicio de calibración, mantenimiento preventivo y correctivo de válvulas de seguridad conforme a NOM-093-SCFI.",
      en: "Details on calibration, preventive and corrective maintenance of safety valves per NOM-093-SCFI.",
      ko: "NOM-093-SCFI에 따른 안전밸브 교정, 예방 및 사후 정비 상세 안내.",
      ja: "NOM-093-SCFI に基づく安全弁の校正、予防・事後保全の詳細。",
      zh: "依据 NOM-093-SCFI 进行的安全阀校准、预防性及纠正性维护详单。",
    },
    url: "https://www.imindustrial.mx/wp-content/uploads/2021/02/Brochure-PSV.pdf",
    filename: "Brochure-PSV.pdf",
    badge: "NOM-093-SCFI",
  },
  {
    id: "ema-iso17025",
    category: "accreditation",
    title: {
      es: "Acreditación EMA NMX-EC-17025-IMNC-2018 / ISO/IEC 17025",
      en: "EMA Accreditation NMX-EC-17025-IMNC-2018 / ISO/IEC 17025",
      ko: "EMA 공인 인증서 NMX-EC-17025-IMNC-2018 / ISO/IEC 17025",
      ja: "EMA認定証 NMX-EC-17025-IMNC-2018 / ISO/IEC 17025",
      zh: "EMA 认可资质 NMX-EC-17025-IMNC-2018 / ISO/IEC 17025",
    },
    description: {
      es: "Acreditación oficial como laboratorio de calibración emitida por la Entidad Mexicana de Acreditación (EMA).",
      en: "Official calibration laboratory accreditation issued by the Mexican Accreditation Entity (EMA).",
      ko: "멕시코 인정기구(EMA) 발행 공인 교정 시험소 인정서.",
      ja: "メキシコ認定機関（EMA）発行の公認校正試験所認定書。",
      zh: "由墨西哥认可实体 (EMA) 颁发的官方校准实验室认可资质证书。",
    },
    url: "https://www.imindustrial.mx/wp-content/uploads/EMA-NMX-EC-17025-IMNC-2018-ISOIEC.pdf",
    filename: "EMA-NMX-EC-17025-IMNC-2018-ISOIEC.pdf",
    badge: "EMA · ISO/IEC",
  },
  {
    id: "ema-anexo-a",
    category: "accreditation",
    title: {
      es: "Anexo Técnico EMA Anexo A (Alcances de Calibración)",
      en: "EMA Technical Annex A (Calibration Scopes)",
      ko: "EMA 기술 별첨 A (교정 측정 범위)",
      ja: "EMA技術付属書A（校正範囲）",
      zh: "EMA 技术附录 A（校准能力范围）",
    },
    description: {
      es: "Alcances, capacidades de medición e incertidumbre aprobada para el laboratorio de metrología.",
      en: "Calibration scopes, measurement capabilities, and approved uncertainties for the metrology laboratory.",
      ko: "계측 시험소 승인 측정 범위, 측정 역량 및 불확도 내역.",
      ja: "計量試験所の承認済み校正範囲、測定能力、および測定不確かさ一覧。",
      zh: "计量实验室核准的校准范围、测量能力与测量不确定度明细。",
    },
    url: "https://www.imindustrial.mx/wp-content/uploads/EMA-anexo-A.pdf",
    filename: "EMA-anexo-A.pdf",
    badge: "Trazabilidad",
  },
  {
    id: "ema-flujo",
    category: "accreditation",
    title: {
      es: "Certificado de Acreditación de Calibración de Flujo EMA",
      en: "EMA Flow Meter Calibration Accreditation Certificate",
      ko: "EMA 유량계 교정 공인 인증서",
      ja: "EMA 流量計校正認定書",
      zh: "EMA 流量计校准认可证书",
    },
    description: {
      es: "Certificado específico para la magnitud de flujo en laboratorio de metrología.",
      en: "Specific accreditation certificate for the flow magnitude in metrology laboratory.",
      ko: "계측 시험소 유량 측정 분야 특화 인정서.",
      ja: "計量試験所における流量測定分野の認定証。",
      zh: "计量实验室流量参数专项认可证书。",
    },
    url: "https://www.imindustrial.mx/wp-content/uploads/EMA-certificado-de-acreditacion-flujo.pdf",
    filename: "EMA-certificado-de-acreditacion-flujo.pdf",
    badge: "Flujo EMA",
  },
  {
    id: "solicitud-inscripcion",
    category: "format",
    title: {
      es: "Solicitud Oficial de Inscripción a Cursos IMI Academy",
      en: "Official IMI Academy Course Enrollment Form",
      ko: "IMI 아카데미 교육과정 공식 수강신청서",
      ja: "IMI アカデミー講座 公式受講申込書",
      zh: "IMI 学院课程官方报名申请表",
    },
    description: {
      es: "Formato descargable e imprimible para registro corporativo de participantes ante STPS.",
      en: "Downloadable and printable format for corporate attendee registration per STPS.",
      ko: "STPS 기업 교육 등록용 인쇄 및 다운로드 가능한 참가 신청서 양식.",
      ja: "STPS 企業研修登録用のダウンロード・印刷可能な受講申込フォーマット。",
      zh: "用于劳工部 (STPS) 官方培训注册的可下载打印企业参训报名表。",
    },
    url: "https://www.imindustrial.mx/wp-content/uploads/2020/08/SOLICITUD-DE-INSCRIPCIÓN-1.1.pdf",
    filename: "SOLICITUD-DE-INSCRIPCION-1.1.pdf",
    badge: "STPS Formato",
  },
  {
    id: "certificado-oficial",
    category: "official",
    title: {
      es: "Certificado Oficial de Registro Institucional",
      en: "Official Institutional Registration Certificate",
      ko: "공식 기관 등록 증명서",
      ja: "公式機関登録証明書",
      zh: "官方机构注册证书",
    },
    description: {
      es: "Cédula y constancia de registro oficial de Instrumentación y Metrología Industrial.",
      en: "Official registration certificate of Instrumentación y Metrología Industrial.",
      ko: "산업 계측 및 메트롤로지 공식 등록 증빙 서류.",
      ja: "工業計装・計量に関する公式登録証明書。",
      zh: "工业仪表与计量官方机构注册证明文件。",
    },
    url: "https://www.imindustrial.mx/wp-content/uploads/2018/07/Certificado-OFICIAL.pdf",
    filename: "Certificado-OFICIAL.pdf",
    badge: "Oficial",
  },
];
