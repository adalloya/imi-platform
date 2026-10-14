"use client";

import { useMemo, useState } from "react";
import {
  Search, ShieldCheck, Download, AlertTriangle, CheckCircle2,
  Calendar, FileText, Wrench, GraduationCap, Truck, ArrowRight,
  LogOut, Lock, Building, User, RefreshCw
} from "lucide-react";
import { buildWaLink } from "@/lib/whatsapp";
import { useI18n } from "./Providers";

// Activos monitoreados de la planta
const PLANT_ASSETS = [
  { tag: "PT-1021", asset: "Transmisor de presión 0-250 psi", serial: "RSM-88412", magnitude: "presion", range: "0 - 250 psig", last: "2025-11-20", due: "2026-11-20" },
  { tag: "TT-3305", asset: "Transmisor de temperatura RTD Pt100", serial: "EH-55219", magnitude: "temperatura", range: "-50 a 400 °C", last: "2025-10-02", due: "2026-10-02" },
  { tag: "PSV-0402", asset: "Válvula de seguridad 2\" x 3\" set 150 psig", serial: "CR-77120", magnitude: "psv", range: "Set 150 psig", last: "2026-03-15", due: "2027-03-15" },
  { tag: "FT-2210", asset: "Medidor de flujo Coriolis 2\"", serial: "MM-10944", magnitude: "flujo", range: "0 - 1,200 kg/min", last: "2025-10-28", due: "2026-10-28" },
  { tag: "LT-1107", asset: "Transmisor de nivel radar 80 GHz", serial: "VG-33018", magnitude: "nivel", range: "0 - 15 m", last: "2026-01-10", due: "2027-01-10" },
  { tag: "PI-0015", asset: "Manómetro de carátula en acero inoxidable IMI", serial: "IMI-20311", magnitude: "presion", range: "0 - 300 psi", last: "2025-08-05", due: "2026-08-05" },
  { tag: "FCV-1300", asset: "Válvula de control 3\" globo con posicionador HART", serial: "FS-41007", magnitude: "valvulas", range: "Cv 110 / 4-20 mA", last: "2026-05-22", due: "2027-05-22" },
  { tag: "PDT-5501", asset: "Transmisor de presión diferencial", serial: "YK-90021", magnitude: "presion", range: "0 - 100 inH2O", last: "2025-11-01", due: "2026-11-01" },
];

// Órdenes de trabajo en laboratorio IMI
const WORK_ORDERS = [
  {
    folio: "OT-2026-084",
    items: "4 Manómetros IMI y 2 Transmisores DP",
    date: "2026-10-08",
    phase: 3, // 1: Recepción, 2: Calibración, 3: QA/QC, 4: Listo
    phaseLabel: "Control de Calidad e Incertidumbre",
    estReturn: "2026-10-18",
    plant: "Planta Altamira",
  },
  {
    folio: "OT-2026-091",
    items: "2 Válvulas de Seguridad PSV 3\" Clase 300",
    date: "2026-10-12",
    phase: 2,
    phaseLabel: "Banco de Pruebas y Lapeado (NOM-093)",
    estReturn: "2026-10-22",
    plant: "Planta Altamira",
  },
  {
    folio: "OT-2026-079",
    items: "1 Medidor de Flujo Coriolis MicroMotion 2\"",
    date: "2026-09-30",
    phase: 4,
    phaseLabel: "Listo para Entrega con Certificado EMA",
    estReturn: "2026-10-15",
    plant: "Planta Altamira",
  },
];

// Constancias DC-3 IMI Academy registradas
const DC3_RECORDS = [
  {
    id: "dc3-1",
    employee: "Ing. Roberto Garza Silva",
    position: "Instrumentista Especialista",
    course: "Certificación en Válvulas de Seguridad PSV NOM-093-SCFI-2020",
    hours: 40,
    folio: "IMI-DC3-2026-0418",
    date: "2026-06-14",
    stpsCode: "IMI150311QL2-0013",
  },
  {
    id: "dc3-2",
    employee: "Téc. Alejandro Ruiz Peña",
    position: "Técnico de Mantenimiento",
    course: "Ajuste y calibración de instrumentación industrial",
    hours: 24,
    folio: "IMI-DC3-2026-0502",
    date: "2026-08-20",
    stpsCode: "IMI150311QL2-0013",
  },
  {
    id: "dc3-3",
    employee: "Ing. Laura Vázquez Morales",
    position: "Ingeniero de Automatización y Control",
    course: "Sistemas de control distribuido (DCS)",
    hours: 24,
    folio: "IMI-DC3-2026-0589",
    date: "2026-09-12",
    stpsCode: "IMI150311QL2-0013",
  },
];

const TODAY = new Date("2026-10-14T00:00:00");
const DAY = 86400000;

export function PortalMock() {
  const { locale, t } = useI18n();

  // Estado de sesión
  const [isLogged, setIsLogged] = useState(false);
  const [loginEmail, setLoginEmail] = useState("carlos.mendoza@petroaltamira.com");
  const [loginCompany, setLoginCompany] = useState("Petroquímica de Altamira S.A. de C.V.");

  // Navegación interna del portal
  const [activeTab, setActiveTab] = useState<"assets" | "orders" | "dc3" | "request">("assets");

  // Filtros de activos
  const [search, setSearch] = useState("");
  const [magFilter, setMagFilter] = useState("all");

  // Solicitud de recalibración
  const [requestForm, setRequestForm] = useState({
    tags: "",
    serviceType: "en-sitio",
    datePref: "2026-10-25",
    notes: "",
  });

  const rows = useMemo(() => {
    return PLANT_ASSETS.map((a) => {
      const days = Math.round((new Date(a.due + "T00:00:00").getTime() - TODAY.getTime()) / DAY);
      const status = days < 0 ? "expired" : days <= 30 ? "dueSoon" : "ok";
      return { ...a, days, status: status as "ok" | "dueSoon" | "expired" };
    }).filter((a) => {
      const matchText = `${a.tag} ${a.asset} ${a.serial} ${a.range}`.toLowerCase().includes(search.toLowerCase());
      const matchMag = magFilter === "all" || a.magnitude === magFilter;
      return matchText && matchMag;
    });
  }, [search, magFilter]);

  const kpis = {
    total: PLANT_ASSETS.length,
    ok: rows.filter((r) => r.status === "ok").length,
    dueSoon: rows.filter((r) => r.status === "dueSoon").length,
    expired: rows.filter((r) => r.status === "expired").length,
  };

  const fmt = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", year: "numeric" });

  const statusBadge = {
    ok: "border-emerald-300 bg-emerald-50 text-emerald-800",
    dueSoon: "border-amber-300 bg-amber-50 text-amber-900",
    expired: "border-red-300 bg-red-50 text-red-900",
  };

  function downloadCertificate(tag: string, asset: string, serial: string) {
    const text = `=====================================================
CERTIFICADO DE CALIBRACIÓN OFICIAL (COPIA ELECTRÓNICA)
INSTRUMENTACIÓN Y METROLOGÍA INDUSTRIAL S.R.L. DE C.V.
Laboratorio Acreditado conforme a NMX-EC-17025-IMNC-2018
Acreditación Oficial EMA · Registro STPS: IMI150311QL2-0013
=====================================================

DATOS DEL ACTIVO AUDITADO:
TAG de Planta: ${tag}
Instrumento: ${asset}
Número de Serie: ${serial}
Planta / Empresa: ${loginCompany}
Fecha de Emisión: 2026-10-14
Vigencia: Conforme a programa de confirmación metrológica

TRAZABILIDAD METROLÓGICA:
Patrones de referencia trazables a CENAM / NIST.
Incertidumbre expandida U calculada con factor de cobertura k = 2 (95.45% de confianza).

ESTE DOCUMENTO DEMOSTRATIVO FORMA PARTE DEL SISTEMA IMI CLOUD SYNC.
Consulte el original sellado en las oficinas del laboratorio central.
=====================================================`;

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `CERTIFICADO-CALIBRACION-${tag}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function downloadDC3(record: (typeof DC3_RECORDS)[0]) {
    const text = `=====================================================
CONSTANCIA DE COMPETENCIAS LABORALES (FORMATO DC-3 STPS)
SECRETARÍA DEL TRABAJO Y PREVISIÓN SOCIAL
AGENTE CAPACITADOR EXTERNO: IMI150311QL2-0013
=====================================================

DATOS DEL TRABAJADOR:
Nombre: ${record.employee}
Puesto: ${record.position}
Empresa: ${loginCompany}

DATOS DEL CURSO:
Nombre de la Capacitación: ${record.course}
Duración: ${record.hours} horas
Folio de Acreditación: ${record.folio}
Fecha de Emisión: ${record.date}

INSTRUCTOR ACREDITADO CONOCER EC0217
INSTRUMENTACIÓN Y METROLOGÍA INDUSTRIAL S.R.L. DE C.V.
=====================================================`;

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `FORMATO-DC3-${record.employee.replace(/\s+/g, "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // PANTALLA 1: LOGIN MOCKUP DE ALTA GAMA B2B
  if (!isLogged) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1.1fr_1fr] rounded-2xl border border-ink-200 overflow-hidden bg-white shadow-xl">
          {/* Columna Izquierda: Información Corporativa */}
          <div className="bg-brand-900 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-wider text-brand-200 font-bold">
                Plataforma de Clientes Industriales
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-white">
                IMI Cloud Sync
              </h2>
              <p className="mt-3 text-sm text-ink-300 leading-relaxed">
                Centro de servicios para gerencias de planta, instrumentistas y auditores de calidad. Consulta trazabilidad, certificados y avance de laboratorio.
              </p>

              <div className="mt-8 space-y-3.5 text-xs text-ink-200">
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-brand-300 font-bold">✓</span>
                  <span><strong>Certificados Trazables ISO/IEC 17025:</strong> Descarga instantánea de informes de calibración vigentes con cálculo de incertidumbre.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-brand-300 font-bold">✓</span>
                  <span><strong>Tracking de Laboratorio:</strong> Seguimiento en vivo de las etapas de recepción, banco de pruebas y calibración de sus equipos.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-brand-300 font-bold">✓</span>
                  <span><strong>Constancias STPS DC-3:</strong> Registro y expediente digital de capacitaciones tomadas por su personal técnico.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-ink-400 font-mono relative z-10">
              Seguridad TLS 1.3 · Cumplimiento NMX-EC-17025-IMNC-2018
            </div>
          </div>

          {/* Columna Derecha: Formulario de Login */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-ink-900">Iniciar Sesión de Planta</h3>
              <p className="mt-1 text-xs text-ink-500">Ingrese sus credenciales de cliente industrial asignadas.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsLogged(true);
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label className="label">Empresa / Complejo Industrial</label>
                  <input
                    className="field text-sm"
                    value={loginCompany}
                    onChange={(e) => setLoginCompany(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="label">Correo Corporativo</label>
                  <input
                    type="email"
                    className="field text-sm"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="label">Contraseña / Token de Planta</label>
                  <input
                    type="password"
                    className="field text-sm font-mono"
                    defaultValue="••••••••••••"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full text-sm font-bold">
                  Acceder a mis Activos y Servicios
                </button>
              </form>
            </div>

            <div className="mt-6 pt-6 border-t border-ink-100">
              <p className="text-xs text-ink-500 mb-2 font-medium">¿Quieres explorar el portal de inmediato?</p>
              <button
                onClick={() => setIsLogged(true)}
                className="btn btn-outline w-full text-xs font-bold text-brand-700 border-brand-200 hover:bg-brand-50"
              >
                Probar con Cuenta Demo (Planta Altamira) →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PANTALLA 2: CENTRO DE SERVICIOS AL CLIENTE (SESIÓN ACTIVA)
  return (
    <div className="space-y-6">
      {/* Barra de Sesión de Usuario */}
      <div className="rounded-xl border border-ink-200 bg-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 font-bold font-mono text-base border border-brand-200">
            PA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-ink-900 text-base">{loginCompany}</h2>
              <span className="chip font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 border-emerald-200">
                Cliente Activo
              </span>
            </div>
            <p className="text-xs text-ink-500 mt-0.5">
              Sesión iniciada: {loginEmail} · Contrato Marco Vigente
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsLogged(false)}
            className="btn btn-outline min-h-10 text-xs px-3 text-ink-600 hover:text-red-700 hover:border-red-200"
          >
            <LogOut className="size-3.5" /> Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Selector de Pestañas del Portal */}
      <div className="flex gap-2 border-b border-ink-200 overflow-x-auto pb-2">
        {[
          { id: "assets" as const, label: "Certificados & Activos", badge: rows.length },
          { id: "orders" as const, label: "Órdenes en Laboratorio", badge: WORK_ORDERS.length },
          { id: "dc3" as const, label: "Constancias DC-3 STPS", badge: DC3_RECORDS.length },
          { id: "request" as const, label: "Solicitar Recolección / Servicio" },
        ].map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex shrink-0 items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-colors cursor-pointer ${
                active
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-ink-700 hover:bg-ink-100"
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge !== undefined && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${active ? "bg-white/20 text-white" : "bg-ink-200 text-ink-700"}`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* PESTAÑA 1: CERTIFICADOS Y ACTIVOS */}
      {activeTab === "assets" && (
        <div className="space-y-6">
          {/* Tarjetas de Resumen KPI */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card p-4">
              <span className="text-xs font-mono font-semibold text-ink-500 uppercase">Activos Registrados</span>
              <p className="text-2xl font-extrabold text-ink-900 mt-1 font-mono">{kpis.total}</p>
            </div>
            <div className="card p-4 border-emerald-200 bg-emerald-50/40">
              <span className="text-xs font-mono font-semibold text-emerald-800 uppercase">Calibración Vigente</span>
              <p className="text-2xl font-extrabold text-emerald-700 mt-1 font-mono">{kpis.ok}</p>
            </div>
            <div className="card p-4 border-amber-200 bg-amber-50/40">
              <span className="text-xs font-mono font-semibold text-amber-900 uppercase">Por Vencer (&lt;30 días)</span>
              <p className="text-2xl font-extrabold text-amber-800 mt-1 font-mono">{kpis.dueSoon}</p>
            </div>
            <div className="card p-4 border-red-200 bg-red-50/40">
              <span className="text-xs font-mono font-semibold text-red-900 uppercase">Vencidos / Recalibrar</span>
              <p className="text-2xl font-extrabold text-red-700 mt-1 font-mono">{kpis.expired}</p>
            </div>
          </div>

          {/* Filtros de Búsqueda */}
          <div className="card p-5 space-y-4">
            <div className="grid gap-3 sm:grid-cols-[1fr_220px]">
              <div className="relative">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
                <input
                  className="field pl-9 text-sm"
                  placeholder="Buscar por TAG (ej. PT-1021), instrumento o número de serie..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select
                className="field text-sm"
                value={magFilter}
                onChange={(e) => setMagFilter(e.target.value)}
              >
                <option value="all">Todas las Magnitudes</option>
                <option value="presion">Presión / Manómetros</option>
                <option value="temperatura">Temperatura / RTD</option>
                <option value="flujo">Flujo Másico / Volumétrico</option>
                <option value="nivel">Nivel Radar / DP</option>
                <option value="psv">Válvulas de Seguridad PSV</option>
                <option value="valvulas">Válvulas de Control</option>
              </select>
            </div>

            {/* Tabla de Activos Desktop */}
            <div className="hidden lg:block overflow-x-auto border border-ink-200 rounded-lg">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink-50 border-b border-ink-200 text-xs font-bold text-ink-600 uppercase font-mono">
                  <tr>
                    <th className="py-3 px-4">TAG</th>
                    <th className="py-3 px-4">Instrumento / Descripción</th>
                    <th className="py-3 px-4">Serie</th>
                    <th className="py-3 px-4">Rango Calibrado</th>
                    <th className="py-3 px-4">Vencimiento</th>
                    <th className="py-3 px-4">Estado</th>
                    <th className="py-3 px-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-100">
                  {rows.map((r) => (
                    <tr key={r.tag} className="hover:bg-ink-50/80 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-brand-700">{r.tag}</td>
                      <td className="py-3 px-4 font-semibold text-ink-900">{r.asset}</td>
                      <td className="py-3 px-4 font-mono text-xs text-ink-500">{r.serial}</td>
                      <td className="py-3 px-4 text-xs font-mono text-ink-600">{r.range}</td>
                      <td className="py-3 px-4 font-mono text-xs text-ink-700">
                        {fmt.format(new Date(r.due + "T12:00:00"))}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`chip text-[11px] font-bold ${statusBadge[r.status]}`}>
                          {t.portal[r.status]}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => downloadCertificate(r.tag, r.asset, r.serial)}
                            className="btn btn-outline min-h-9 px-3 text-xs"
                            title="Descargar Certificado PDF"
                          >
                            <Download className="size-3.5" /> Certificado
                          </button>
                          {r.status !== "ok" && (
                            <a
                              href={buildWaLink("SERVICE", {
                                TAG: r.tag,
                                Equipo: r.asset,
                                Serie: r.serial,
                                Solicitud: "Recalibración urgente",
                                Empresa: loginCompany,
                              })}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary min-h-9 px-3 text-xs font-bold"
                            >
                              Programar
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards Mobile */}
            <div className="grid gap-3 lg:hidden">
              {rows.map((r) => (
                <div key={r.tag} className="border border-ink-200 rounded-lg p-4 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-brand-700 text-sm">{r.tag}</span>
                    <span className={`chip text-[11px] font-bold ${statusBadge[r.status]}`}>
                      {t.portal[r.status]}
                    </span>
                  </div>
                  <p className="font-bold text-sm text-ink-900">{r.asset}</p>
                  <p className="text-xs text-ink-500 font-mono">Serie: {r.serial} · {r.range}</p>
                  <p className="text-xs text-ink-700 font-mono">
                    Vencimiento: {fmt.format(new Date(r.due + "T12:00:00"))}
                  </p>
                  <div className="pt-2 flex gap-2">
                    <button
                      onClick={() => downloadCertificate(r.tag, r.asset, r.serial)}
                      className="btn btn-outline flex-1 min-h-9 text-xs"
                    >
                      <Download className="size-3.5" /> Certificado
                    </button>
                    {r.status !== "ok" && (
                      <a
                        href={buildWaLink("SERVICE", {
                          TAG: r.tag,
                          Equipo: r.asset,
                          Serie: r.serial,
                          Solicitud: "Recalibración",
                          Empresa: loginCompany,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary flex-1 min-h-9 text-xs font-bold"
                      >
                        Recalibrar
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PESTAÑA 2: ÓRDENES DE TRABAJO EN LABORATORIO */}
      {activeTab === "orders" && (
        <div className="card p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-ink-900">Seguimiento en Vivo de Órdenes de Servicio</h3>
            <p className="text-xs text-ink-500 mt-1">
              Monitoree en qué fase de calibración o mantenimiento se encuentran sus instrumentos en nuestros talleres.
            </p>
          </div>

          <div className="space-y-4">
            {WORK_ORDERS.map((wo) => (
              <div key={wo.folio} className="border border-ink-200 rounded-xl p-5 bg-white space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                      {wo.folio}
                    </span>
                    <h4 className="text-base font-bold text-ink-900 mt-1.5">{wo.items}</h4>
                    <p className="text-xs text-ink-500">Ingreso: {wo.date} · Entrega estimada: {wo.estReturn}</p>
                  </div>
                  <div className="text-right self-start sm:self-center">
                    <span className="chip font-bold text-brand-800 bg-brand-50 border-brand-200 text-xs">
                      Fase {wo.phase} de 4: {wo.phaseLabel}
                    </span>
                  </div>
                </div>

                {/* Barra de 4 Fases de Laboratorio */}
                <div>
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-mono font-semibold text-ink-500 mb-1.5">
                    <span className={wo.phase >= 1 ? "text-brand-700 font-bold" : ""}>1. Recepción</span>
                    <span className={wo.phase >= 2 ? "text-brand-700 font-bold" : ""}>2. Calibración</span>
                    <span className={wo.phase >= 3 ? "text-brand-700 font-bold" : ""}>3. Control QA</span>
                    <span className={wo.phase >= 4 ? "text-emerald-700 font-bold" : ""}>4. Listo</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-ink-100 overflow-hidden flex">
                    <div
                      className={`h-full transition-all duration-500 ${
                        wo.phase === 4 ? "bg-emerald-600" : "bg-brand-600"
                      }`}
                      style={{ width: `${(wo.phase / 4) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PESTAÑA 3: CONSTANCIAS DC-3 STPS */}
      {activeTab === "dc3" && (
        <div className="card p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-ink-900">Expediente de Constancias DC-3 (STPS)</h3>
            <p className="text-xs text-ink-500 mt-1">
              Registro oficial de habilidades laborales avaladas por Agente Capacitador Externo: IMI150311QL2-0013.
            </p>
          </div>

          <div className="divide-y divide-ink-100 border border-ink-200 rounded-lg overflow-hidden">
            {DC3_RECORDS.map((rec) => (
              <div key={rec.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white hover:bg-ink-50">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm sm:text-base text-ink-900">{rec.employee}</h4>
                    <span className="chip font-mono text-[10px] font-bold text-brand-700 bg-brand-50">
                      {rec.hours} hrs STPS
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-brand-700 mt-0.5">{rec.course}</p>
                  <p className="text-xs text-ink-500 mt-1">
                    Puesto: {rec.position} · Folio DC-3: <span className="font-mono">{rec.folio}</span> · Fecha: {rec.date}
                  </p>
                </div>

                <button
                  onClick={() => downloadDC3(rec)}
                  className="btn btn-outline min-h-10 text-xs px-4 font-bold shrink-0 self-start sm:self-center"
                >
                  <Download className="size-3.5" /> Descargar DC-3
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PESTAÑA 4: SOLICITUD DE RECALIBRACIÓN / RECOLECCIÓN */}
      {activeTab === "request" && (
        <div className="card p-6 sm:p-8 max-w-2xl">
          <h3 className="text-lg font-bold text-ink-900">Programar Servicio o Recolección de Equipos</h3>
          <p className="text-xs text-ink-500 mt-1">
            Complete los TAGs requeridos. Nuestro coordinador de logística y operaciones le confirmará horario vía WhatsApp.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const link = buildWaLink("SERVICE", {
                Empresa: loginCompany,
                Contacto: loginEmail,
                Modalidad: requestForm.serviceType === "en-sitio" ? "Calibración en Sitio / Planta" : "Recolección para Taller",
                FechaDeseada: requestForm.datePref,
                TAGsSolicitados: requestForm.tags,
                Observaciones: requestForm.notes || "Sin notas adicionales",
              });
              window.open(link, "_blank", "noopener,noreferrer");
            }}
            className="mt-6 space-y-4"
          >
            <div>
              <label className="label">Modalidad Requerida</label>
              <select
                className="field text-sm"
                value={requestForm.serviceType}
                onChange={(e) => setRequestForm({ ...requestForm, serviceType: e.target.value })}
              >
                <option value="en-sitio">Calibración en Sitio (Unidad Móvil en Planta)</option>
                <option value="recoleccion">Recolección de Equipos para Laboratorio Central Altamira</option>
                <option value="psv-parada">Mantenimiento de Válvulas PSV por Paro de Planta</option>
              </select>
            </div>

            <div>
              <label className="label">TAGs o Equipos (separados por coma)</label>
              <textarea
                rows={2}
                required
                className="field py-2 text-sm"
                placeholder="Ej. PT-1021, TT-3305, PSV-0402..."
                value={requestForm.tags}
                onChange={(e) => setRequestForm({ ...requestForm, tags: e.target.value })}
              />
            </div>

            <div>
              <label className="label">Fecha Deseada para Atención</label>
              <input
                type="date"
                required
                className="field text-sm"
                value={requestForm.datePref}
                onChange={(e) => setRequestForm({ ...requestForm, datePref: e.target.value })}
              />
            </div>

            <div>
              <label className="label">Observaciones Especiales (Opcional)</label>
              <input
                className="field text-sm"
                placeholder="Permisos de acceso, requerimiento de EPP específico..."
                value={requestForm.notes}
                onChange={(e) => setRequestForm({ ...requestForm, notes: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full text-sm font-bold">
              Enviar Solicitud a Operaciones IMI
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
