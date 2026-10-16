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
  // Activos oficiales extraídos del MediaKit IMI
  flowCalibrationFl55: "/images/mediakit/flow-calibration-fl55.jpg",
  pressureMetrologyLab: "/images/mediakit/pressure-metrology-lab.jpg",
  temperatureMetrologyLab: "/images/mediakit/temperature-metrology-lab.jpg",
  psvValvesBench: "/images/mediakit/psv-valves-bench-nom093.jpg",
  plantFieldService: "/images/mediakit/plant-field-service.jpg",
  plantPipingService: "/images/mediakit/plant-piping-service.jpg",
  teamOfficial: "/images/mediakit/team-official-imi.jpg",
  academyInstructors: "/images/mediakit/academy-instructors.jpg",
  facilitiesMobileUnits: "/images/mediakit/facilities-mobile-units.jpg",
  nationalBoardVr: "/images/mediakit/national-board-vr.jpg",
  accutestElectronic: "/images/mediakit/accutest-electronic-testing.jpg",
  accutestField: "/images/mediakit/accutest-field-engineer.jpg",
  valveTagPlate: "/images/mediakit/valve-tag-plate.jpg",
  marketMapCcc: "/images/mediakit/market-map-ccc.jpg",
  powerGenClients: "/images/mediakit/power-generation-clients.jpg",
  cuatroUnidades: "/images/mediakit/cuatro-unidades-imi.jpg",
  credenciales16Anos: "/images/mediakit/credenciales-16-anos.jpg",
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
  fullName: L10n;
  badge: L10n;
  tagline: L10n;
  description: L10n;
  logo: string;
  image: string;
  primaryHref: string;
  primaryLabel: L10n;
  secondaryHref: string;
  secondaryLabel: L10n;
  highlights: L10n[];
};

export const businessUnits: BusinessUnit[] = [
  {
    id: "instruments",
    shortName: "Instruments & Equipment",
    fullName: {
      es: "IMI Instruments & Equipment",
      en: "IMI Instruments & Equipment",
      ko: "IMI 계측 & 장비 사업부",
      ja: "IMI 計装機器・装置事業部",
      zh: "IMI 仪器与设备事业部",
    },
    badge: {
      es: "Venta · Renta · Equipamiento",
      en: "Sales · Rentals · Procurement",
      ko: "판매 · 렌탈 · 설비 공급",
      ja: "販売・レンタル・調達",
      zh: "销售 · 租赁 · 设备采购",
    },
    tagline: {
      es: "Suministro y Renta de Instrumentación de Proceso",
      en: "Process Instrumentation Sales & Rentals",
      ko: "공정 계측기 공급 및 렌탈 솔루션",
      ja: "プロセス計装機器の販売およびレンタル",
      zh: "流程工业仪表销售与租赁",
    },
    description: {
      es: "Venta y renta de calibradores de procesos multifunción, bombas de presión neumáticas e hidráulicas, manómetros de proceso con sellos químicos y refaccionamiento crítico con entrega inmediata.",
      en: "Sales and rentals of documenting multifunction process calibrators, pneumatic and hydraulic pressure pumps, stainless process gauges with diaphragm seals, and immediate stock of critical parts.",
      ko: "다기능 공정 교정기, 유압 및 공압 압력 펌프, 다이어프램 씰이 장착된 스테인리스 압력계 판매 및 렌탈 지원.",
      ja: "多機能プロセス校正器、空気圧・油圧テストポンプ、ダイアフラムシール付きステンレス圧力計の販売・レンタル。",
      zh: "多功能过程校准仪、气压及液压压力泵、带隔膜密封的不锈钢过程压力表销售与租赁，现货即时交付。",
    },
    logo: "/images/logo-instruments.png",
    image: "/images/unit-instruments.jpg",
    primaryHref: "/tienda",
    primaryLabel: {
      es: "Explorar Catálogo y Renta",
      en: "Explore Catalog & Rentals",
      ko: "카탈로그 및 렌탈 제품 보기",
      ja: "機器カタログ・レンタルを見る",
      zh: "查看产品与租赁目录",
    },
    secondaryHref: "/descargas",
    secondaryLabel: {
      es: "Fichas Técnicas & Catálogos",
      en: "Datasheets & Catalogs",
      ko: "기술 사양서 및 카탈로그",
      ja: "技術仕様書・カタログ",
      zh: "技术规格书与宣传册",
    },
    highlights: [
      {
        es: "Venta de instrumentación y equipo de medición industrial",
        en: "Industrial measurement and process equipment sales",
        ko: "산업용 정밀 측정 및 제어 계측기 판매",
        ja: "産業用計測・プロセス機器の販売",
        zh: "工业测量与过程控制仪器销售",
      },
      {
        es: "Renta de calibradores y patrones trazables inmediatos",
        en: "Rental of traceable calibrators and reference standards",
        ko: "국가 소급성 보유 공인 교정기 긴급 렌탈 지원",
        ja: "トレーサブルな基準校正器の即時レンタル",
        zh: "具备计量溯源性的高精度校准器即时租赁",
      },
      {
        es: "Manómetros y sellos de diafragma marca IMI (hasta 15,000 psi)",
        en: "IMI pressure gauges and chemical seals (up to 15,000 psi)",
        ko: "IMI 브랜드 압력계 및 케미컬 씰 (최대 15,000 psi)",
        ja: "IMIブランド圧力計およびダイアフラムシール（最大15,000 psi）",
        zh: "IMI品牌工业压力表及隔膜密封（最高至15,000 psi）",
      },
      {
        es: "Asesoría técnica para especificación y reemplazo",
        en: "Technical guidance for specification and replacement",
        ko: "설비 스펙 선정 및 대체품 기술 컨설팅",
        ja: "機器選定および代替品選定の技術相談",
        zh: "选型规格确认与替代替换技术咨询",
      },
    ],
  },
  {
    id: "maintenance",
    shortName: "Metrology & Maintenance",
    fullName: {
      es: "IMI Metrology & Maintenance",
      en: "IMI Metrology & Maintenance",
      ko: "IMI 정밀 교정 및 유지보수 사업부",
      ja: "IMI 校正・メンテナンス事業部",
      zh: "IMI 计量校准与维护事业部",
    },
    badge: {
      es: "Laboratorio Acreditado · ISO/IEC 17025",
      en: "Accredited Laboratory · ISO/IEC 17025",
      ko: "공인 시험소 · ISO/IEC 17025",
      ja: "公認校正所 · ISO/IEC 17025",
      zh: "官方认可实验室 · ISO/IEC 17025",
    },
    tagline: {
      es: "Laboratorio Acreditado y Mantenimiento a Válvulas PSV",
      en: "Accredited Calibration Lab & PSV Valve Maintenance",
      ko: "공인 교정 시험소 및 안전밸브(PSV) 유지보수",
      ja: "公認校正ラボおよびPSV安全弁メンテナンス",
      zh: "官方认可校准实验室及安全阀(PSV)检修",
    },
    description: {
      es: "Laboratorio acreditado ante la EMA en presión y flujo, mantenimiento integral a válvulas de seguridad (PSV) bajo NOM-093-SCFI, calibración in-situ con unidades móviles y soporte en paros de planta.",
      en: "EMA accredited calibration lab in pressure and flow, complete safety valve (PSV) maintenance per NOM-093-SCFI, on-site mobile calibration units, and plant turnaround support.",
      ko: "EMA 공인 압력·유량 교정 시험소, NOM-093 규격 준거 안전밸브(PSV) 정비 및 플랜트 정기보수 현장 지원.",
      ja: "EMA公認の圧力・流量校正ラボ、NOM-093準拠の安全弁（PSV）精密整備、移動校正車によるオンサイト対応。",
      zh: "墨西哥EMA官方认可压力与流量校准实验室，NOM-093安全阀(PSV)综合检修，移动式现场校准与停工检修支持。",
    },
    logo: "/images/logo-maintenance.png",
    image: "/images/unit-maintenance.jpg",
    primaryHref: "/laboratorio",
    primaryLabel: {
      es: "Servicios de Laboratorio y Campo",
      en: "Lab & Field Services",
      ko: "시험소 및 현장 서비스",
      ja: "校正ラボ・現場サービス",
      zh: "实验室与现场校准服务",
    },
    secondaryHref: "/servicios",
    secondaryLabel: {
      es: "Mantenimiento a Válvulas PSV",
      en: "PSV Valve Maintenance",
      ko: "PSV 안전밸브 정비 안내",
      ja: "PSV安全弁メンテナンス",
      zh: "PSV安全阀检修维护",
    },
    highlights: [
      {
        es: "Calibración acreditada EMA (NMX-EC-17025-IMNC-2018)",
        en: "EMA accredited calibration (NMX-EC-17025 / ISO 17025)",
        ko: "EMA 공인 교정 성적서 발급 (ISO/IEC 17025)",
        ja: "EMA公認校正証明書発行（ISO/IEC 17025準拠）",
        zh: "出具EMA官方认可校准证书（符合ISO/IEC 17025）",
      },
      {
        es: "Mantenimiento, lapeado y prueba de Válvulas PSV (NOM-093)",
        en: "PSV valve maintenance, precision lapping, and pop test",
        ko: "PSV 안전밸브 정밀 래핑, 분해점검 및 작동시험",
        ja: "PSV弁の精密ラッピング、作動試験および整備",
        zh: "PSV安全阀精密研磨、起跳测试与全面维护",
      },
      {
        es: "Calibración in-situ con patrones trazables CENAM/NIST",
        en: "On-site calibration with CENAM/NIST traceable standards",
        ko: "CENAM/NIST 국가표준 소급 현장 교정 서비스",
        ja: "CENAM/NISTトレーサブル標準器による現場校正",
        zh: "采用溯源至CENAM/NIST国家基准的现场校准",
      },
      {
        es: "Soporte 24/7 y cuadrillas técnicas para paros de planta",
        en: "24/7 turnaround response and specialist plant crews",
        ko: "플랜트 셧다운 대비 24/7 긴급 출동 기술팀 상시대기",
        ja: "定修・プラント停止対応の24時間専門クルー派遣",
        zh: "工厂停工检修24小时驻场技术工程团队",
      },
    ],
  },
  {
    id: "academy",
    shortName: "IMI Academy",
    fullName: {
      es: "IMI Academy México",
      en: "IMI Academy Mexico",
      ko: "IMI 아카데미 멕시코",
      ja: "IMI アカデミー・メキシコ",
      zh: "IMI 培训学院（墨西哥）",
    },
    badge: {
      es: "Capacitación Técnica · Desde 2010",
      en: "Technical Training · Since 2010",
      ko: "산업 기술 교육 · 2010년 설립",
      ja: "技術研修・人材育成 · 2010年設立",
      zh: "专业技术培训 · 始于2010年",
    },
    tagline: {
      es: "Capacitación y Certificación Técnica Especializada",
      en: "Specialized Technical Training & Certifications",
      ko: "전문 계측·제어 기술 교육 및 공인 자격증",
      ja: "産業技術専門研修および公的認定資格",
      zh: "专业工程技术培训与权威技能认证",
    },
    description: {
      es: "Centro de formación y especialización técnica desde 2010 con bancos de pruebas y equipo industrial real. Registro oficial ante la STPS con emisión de constancias DC-3 y alineación CONOCER EC0217.",
      en: "Technical training center established in 2010 equipped with real industrial test benches. Official STPS External Training Agent issuing DC-3 skill certificates aligned with CONOCER EC0217 standards.",
      ko: "실제 공정 테스트 벤치를 갖춘 2010년 설립 전문 기술 아카데미. 멕시코 노동부(STPS) DC-3 공식 수료증 발급 및 CONOCER 역량 기준 준거.",
      ja: "実機テストベンチを備えた2010年創設の産業研修センター。労働省公認STPS DC-3修了証明書の発行およびCONOCER基準対応。",
      zh: "始于2010年拥有真实工业试验台的技术培训中心。劳工部官方认可外部培训机构，颁发合规DC-3技能证书，符合CONOCER标准。",
    },
    logo: "/images/logo-academy.png",
    image: "/images/unit-academy.jpg",
    primaryHref: "/academy",
    primaryLabel: {
      es: "Ver Catálogo de Cursos",
      en: "View Course Catalog",
      ko: "교육 과정 카탈로그 보기",
      ja: "講座カタログを見る",
      zh: "查阅全部课程目录",
    },
    secondaryHref: "/contacto",
    secondaryLabel: {
      es: "Solicitar Plan In-Company",
      en: "Request On-Site Training Plan",
      ko: "사내 맞춤형 연수 계획 문의",
      ja: "社内研修（In-Company）を依頼",
      zh: "申请企业定制内训计划",
    },
    highlights: [
      {
        es: "Cursos teórico-prácticos con equipo industrial real",
        en: "Hands-on theoretical and practical courses with real instruments",
        ko: "실제 공정 계측기를 활용한 실습 중심 교육",
        ja: "実機計装機器を用いた理論・実技統合カリキュラム",
        zh: "结合真实工业现场仪表的理论与实操培训",
      },
      {
        es: "Constancia de habilidades DC-3 oficial ante la STPS",
        en: "Official DC-3 Skills Certificate registered with STPS",
        ko: "멕시코 노동부(STPS) 공인 DC-3 직무능력 수료증 발급",
        ja: "メキシコ労働省（STPS）公認DC-3技能証明書の交付",
        zh: "颁发墨西哥劳工部官方认可DC-3技能证明",
      },
      {
        es: "Alineación a estándares de competencia CONOCER (EC0217)",
        en: "Alignment with CONOCER EC0217 national competency standard",
        ko: "CONOCER EC0217 국가 직무역량 표준 준거",
        ja: "CONOCER EC0217 国家教育基準への完全準拠",
        zh: "完全对标CONOCER EC0217国家职业能力标准",
      },
      {
        es: "Modalidades en aulas IMI, In-Company o en línea",
        en: "Available at IMI facilities, on-site In-Company, or live online",
        ko: "IMI 교육장, 기업 방문(In-Company) 또는 실시간 온라인",
        ja: "IMI研修センター、社内オンサイト、オンライン対応",
        zh: "支持IMI教学中心、企业内训(In-Company)或线上直播",
      },
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
    id: "ema_fl55",
    code: "FL-55",
    authority: "EMA (Entidad Mexicana de Acreditación)",
    label: {
      es: "Laboratorio de Calibración Acreditado en Flujo No. FL-55 conforme a ISO/IEC 17025",
      en: "Flow Calibration Laboratory Accreditation No. FL-55 compliant with ISO/IEC 17025",
      ko: "ISO/IEC 17025 준거 유량 교정 공인 시험소 No. FL-55 (EMA)",
      ja: "ISO/IEC 17025 準拠 流量校正認定試験所 No. FL-55（EMA）",
      zh: "符合 ISO/IEC 17025 官方认可流量校准实验室 No. FL-55 (EMA)",
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
  {
    id: "national_board",
    code: "NBIC 2023 / VR",
    authority: "The National Board",
    label: {
      es: "The National Board of Boiler & Pressure Vessel Inspectors: Certificación VR para Inspección y Reparación de Válvulas de Seguridad",
      en: "The National Board of Boiler & Pressure Vessel Inspectors: VR Certification for Pressure Relief Valve Repair",
      ko: "미국 보일러 압력용기 검사관 협회(National Board): VR 안전밸브 수리 및 검사 인증",
      ja: "全米ボイラー圧力容器検査官協会（National Board）：安全弁修理・検査 VR 認定",
      zh: "美国锅炉压力容器检验师协会 (National Board)：安全阀维修与检验 VR 国际认证",
    },
  },
];

/**
 * Datos y solvencia técnica en Generación Eléctrica (Power Generation) extraídos del MediaKit oficial
 */
export const powerGenerationData = {
  statCcc: "19 / 46",
  percentage: "40%",
  headline: {
    es: "Atendemos el 40% de las Centrales de Ciclo Combinado privadas en México",
    en: "We serve 40% of private Combined-Cycle Power Plants in Mexico",
    ko: "멕시코 민간 복합화력발전소(CCC)의 40% (19/46) 전담 기술 지원",
    ja: "メキシコ国内の民間複合火力発電所（CCC）の40%（19/46）に技術提供",
    zh: "为墨西哥 40% 的私营联合循环发电厂 (19/46) 提供专业技术支持",
  },
  clients: [
    { name: "Iberdrola México", scope: "Centrales El Carmen, Ramos, Bajío, Monterrey" },
    { name: "ENGIE", scope: "Centrales Altamira y Monterrey" },
    { name: "Valia Energía", scope: "Central Saltillo, EVM II, Río Bravo" },
    { name: "Quantum Energía", scope: "Monterrey I-IV, Escobedo, Altamira V, Tamazunchale I-II" },
    { name: "Grupo México", scope: "CCC La Caridad (Nacozari), CCC Reforma" },
    { name: "Central Eléctrica Pesquería (Techgen)", scope: "Parque Industrial Pesquería, N.L." },
    { name: "Abent 3T (A3T)", scope: "Cogeneración Nuevo Pemex" },
    { name: "NAES", scope: "Operación y Mantenimiento de Turbomáquinas" },
    { name: "Global Contour / KST KEPCO", scope: "Central Ciclo Combinado Norte II" },
    { name: "Saavi Energía", scope: "Centrales La Rosita, Bajío, Tierra Mojada" },
  ],
  turbinesSupported: [
    { model: "General Electric (GE)", specs: "GT 7F.04, 7F.05, MS7001-FA (7FA), 7EA, LM6000" },
    { model: "Mitsubishi Hitachi (MHPS)", specs: "Modelo M501J (Tamazunchale, El Carmen, Escobedo)" },
    { model: "ALSTOM / GE", specs: "Modelo GT24 (Dulces Nombres III & IV)" },
    { model: "SIEMENS", specs: "Modelo W501 F4 WH (Nacozari La Caridad)" },
    { model: "WÄRTSILÄ", specs: "Motores 18V50SG + Turbinas de Vapor (Huinalá Pemcorp)" },
  ],
};

/**
 * 16 Industrias Estratégicas Atendidas
 */
export const industriesData = [
  { id: "power", name: "Generación Eléctrica (CCC / Cogen)", icon: "Zap" },
  { id: "refinery", name: "Refinerías y Petroquímica", icon: "Flame" },
  { id: "oilgas", name: "Petróleo y Gas (Upstream / Downstream)", icon: "Fuel" },
  { id: "mining", name: "Minera y Metalúrgica", icon: "Mountain" },
  { id: "steel", name: "Acero y Metalmecánica", icon: "Boxes" },
  { id: "airchem", name: "Plantas de Aire y Criogenia", icon: "Wind" },
  { id: "pharma", name: "Farmacéutica y Biotecnológica", icon: "Pill" },
  { id: "food", name: "Alimentos y Bebidas", icon: "Utensils" },
  { id: "sugar", name: "Ingenios Azucareros y Bioenergía", icon: "Sprout" },
  { id: "paper", name: "Papelera y Celulosa", icon: "FileText" },
  { id: "cement", name: "Cementera y Materiales", icon: "Building2" },
  { id: "cosmetics", name: "Cosméticos y Cuidado Personal", icon: "Sparkles" },
  { id: "marine", name: "Naviera y Plataformas Costa Afuera", icon: "Ship" },
  { id: "autotanks", name: "Autotanques y Transporte de Hidrocarburos", icon: "Truck" },
  { id: "analytics", name: "Analítica en Línea y F&G", icon: "Activity" },
  { id: "oem", name: "Fabricantes OEM e Integradores", icon: "Cpu" },
];

/**
 * Tecnologías de Vanguardia Destacadas en MediaKit
 */
export const technologyData = {
  evtAccutest: {
    title: "Prueba Electrónica en Línea EVT Accutest (En Caliente)",
    subtitle: "Calibración de válvulas de seguridad sin detener la producción de la planta",
    normative: "Aprobado bajo ASME Secc. I (PG-72.2), ASME Secc. VIII (UG-134) y API RP 576",
    description: "Dispositivo auxiliar de alta precisión que aplica carga hidráulica controlada al vástago para determinar la presión de disparo exacta sin necesidad de despresurizar la caldera o línea de proceso.",
  },
  bentlyNevada: {
    title: "Monitoreo y Diagnóstico Bently Nevada 3500",
    subtitle: "Protección integral a turbomaquinaria y equipos dinámicos de BOP",
    sensors: ["Proximitor Probes (Proximidad)", "Velomitor Transducers (Velocidad)", "Seismic Probes (Acelerómetro)", "Tacómetros y Aceleración Integral"],
  },
  flowFl55: {
    title: "Laboratorio Acreditado EMA FL-55",
    subtitle: "Trazabilidad Nacional CENAM e Internacional NIST",
    methods: "Comparación directa con medidor maestro y pesaje gravimétrico en lazos cerrados para flujómetros Coriolis, magnéticos, vórtex y turbinas.",
  },
};

