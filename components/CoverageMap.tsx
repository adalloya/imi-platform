"use client";

import { useMemo, useState } from "react";
import { Building2, ExternalLink, MapPin, Navigation, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { locations, mapsUrl, type Location } from "@/data/locations";
import { buildWaLink } from "@/lib/whatsapp";
import { useI18n } from "./Providers";

/**
 * Proyección matemática para coordenadas geográficas en SVG (Norteamérica: EE. UU. y México)
 * Bounds: Longitude [-125, -70], Latitude [14.5, 49.5]
 * ViewBox: 0 0 1000 640
 */
function projectCoords(lat: number, lng: number): { x: number; y: number } {
  const minLng = -124.5;
  const maxLng = -71.0;
  const minLat = 14.2;
  const maxLat = 49.2;

  const x = ((lng - minLng) / (maxLng - minLng)) * 880 + 60;
  const y = ((maxLat - lat) / (maxLat - minLat)) * 520 + 60;
  return { x: Math.round(x), y: Math.round(y) };
}

export function CoverageMap() {
  const { locale } = useI18n();
  const [filterCountry, setFilterCountry] = useState<"ALL" | "MX" | "US" | "PE">("ALL");
  const [selectedId, setSelectedId] = useState<string>("altamira");

  const filteredLocations = useMemo(() => {
    if (filterCountry === "ALL") return locations;
    return locations.filter((l) => l.country === filterCountry);
  }, [filterCountry]);

  const selectedLoc = useMemo(() => {
    return locations.find((l) => l.id === selectedId) || locations[0];
  }, [selectedId]);

  // Coordenadas proyectadas de las ubicaciones en Norteamérica
  const pins = useMemo(() => {
    return locations
      .filter((l) => l.country === "MX" || l.country === "US")
      .map((l) => {
        const { x, y } = projectCoords(l.lat, l.lng);
        // Ajuste fino para evitar sobreposición en Tampico / Madero
        const adjustedX = l.id === "madero" ? x + 10 : x;
        const adjustedY = l.id === "madero" ? y + 8 : y;
        return { ...l, x: adjustedX, y: adjustedY };
      });
  }, []);

  return (
    <div className="space-y-6">
      {/* Barra de Filtros y Controles */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "ALL" as const, label: "Toda la Red (12)" },
            { id: "MX" as const, label: "México (10 Sedes)" },
            { id: "US" as const, label: "EE. UU. · Houston" },
            { id: "PE" as const, label: "Sudamérica · Perú" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterCountry(tab.id)}
              className={`min-h-10 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterCountry === tab.id
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-ink-100 text-ink-700 hover:bg-ink-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Leyenda de Tipos de Instalación */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-ink-700">
            <span className="size-3 rounded-full bg-amber-400 ring-2 ring-amber-200" />
            Matriz & Laboratorio
          </span>
          <span className="flex items-center gap-1.5 text-ink-700">
            <span className="size-3 rounded-full bg-brand-600" />
            Sucursal Operativa
          </span>
          <span className="flex items-center gap-1.5 text-ink-700">
            <span className="size-3 rounded-full bg-slate-500" />
            Punto de Servicio
          </span>
        </div>
      </div>

      {/* CONTENEDOR DEL MAPA VECTORIAL */}
      <div className="relative overflow-hidden rounded-2xl border border-ink-800 bg-[#071326] shadow-2xl">
        {/* Fondo con Cuadrícula Técnica Industrial */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />

        {/* Coordenadas en las esquinas (Estética militar/aeroespacial de metrología) */}
        <div className="absolute top-3 left-4 z-10 flex items-center gap-2 font-mono text-[10px] text-ink-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>RED METROLÓGICA NORTEAMÉRICA · 14°N – 49°N / 71°W – 125°W</span>
        </div>

        <div className="absolute top-3 right-4 z-10 font-mono text-[10px] text-ink-400 hidden sm:block">
          SISTEMA WGS-84 · COBERTURA MÉXICO - EE. UU.
        </div>

        {/* SVG DEL MAPA */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
          <svg
            viewBox="0 0 1000 620"
            className="size-full select-none"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
          >
            <defs>
              {/* Gradiente para masa continental de EE. UU. */}
              <linearGradient id="usGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#142642" />
                <stop offset="100%" stopColor="#0d1b30" />
              </linearGradient>

              {/* Gradiente para masa continental de México */}
              <linearGradient id="mxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a3356" />
                <stop offset="100%" stopColor="#0f233d" />
              </linearGradient>

              {/* Pulso de radar para Matriz Altamira */}
              <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ──────────────── MASAS CONTINENTALES VECTORIALES ──────────────── */}
            <g id="landmass">
              {/* ESTADOS UNIDOS (Silueta contigua simplificada de alta fidelidad) */}
              <path
                d="M 68,135
                   L 130,120 L 250,118 L 410,120 L 530,122 L 585,150 L 630,140 L 730,145 L 820,120 L 870,140
                   L 845,185 L 810,230 L 780,290 L 795,355 L 755,395 L 735,360 L 680,350 L 610,345
                   L 540,345 L 515,355 L 485,390 L 440,410 L 438,405 L 360,390 L 290,385 L 230,355
                   L 160,305 L 140,285 L 100,240 L 80,190 Z"
                fill="url(#usGrad)"
                stroke="#2a4770"
                strokeWidth="1.5"
                opacity="0.85"
              />

              {/* Línea divisoria Frontera USA - México (Río Bravo / Frontera Norte) */}
              <path
                d="M 160,305 L 230,355 L 290,385 L 360,390 L 438,405 L 485,390 L 515,355"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                opacity="0.7"
              />

              {/* Península de Baja California */}
              <path
                d="M 160,305
                   L 155,330 L 175,370 L 195,430 L 220,490 L 228,505
                   L 220,480 L 198,425 L 178,365 L 168,315 Z"
                fill="url(#mxGrad)"
                stroke="#38bdf8"
                strokeWidth="1.5"
                opacity="0.95"
              />

              {/* Territorio de MÉXICO Continental */}
              <path
                d="M 170,315
                   L 230,355 L 290,385 L 360,390 L 438,405
                   L 448,435 L 473,458 L 475,462 L 490,495 L 530,524 L 570,520
                   L 615,505 L 640,495 L 650,515 L 615,535 L 573,525 L 550,555
                   L 520,565 L 470,550 L 420,530 L 380,510 L 340,470 L 280,420
                   L 230,380 L 190,340 Z"
                fill="url(#mxGrad)"
                stroke="#38bdf8"
                strokeWidth="1.8"
                opacity="0.95"
              />

              {/* Península de Yucatán */}
              <path
                d="M 570,520 L 615,505 L 640,495 L 650,515 L 615,535 L 573,525 Z"
                fill="#163050"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
            </g>

            {/* Corredor Industrial Marítimo Golfo / Oil & Gas (Houston -> Altamira -> Carmen) */}
            <g id="energyCorridor" opacity="0.6">
              <path
                d="M 515,344 Q 535,410 473,458 T 573,516"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <text x="545" y="440" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">
                CORREDOR ENERGÉTICO GOLFO DE MÉXICO
              </text>
            </g>

            {/* Etiquetas de Territorio */}
            <text x="380" y="240" fill="#476d9c" fontSize="18" fontFamily="monospace" fontWeight="bold" letterSpacing="4">
              UNITED STATES
            </text>
            <text x="350" y="460" fill="#476d9c" fontSize="18" fontFamily="monospace" fontWeight="bold" letterSpacing="4">
              MÉXICO
            </text>
            <text x="525" y="475" fill="#2d527c" fontSize="11" fontFamily="monospace" fontWeight="bold">
              GOLFO DE MÉXICO
            </text>

            {/* ──────────────── PINES DE UBICACIÓN INTERACTIVOS ──────────────── */}
            {pins.map((p) => {
              const isSelected = selectedId === p.id;
              const isHQ = p.type === "hq";
              const isBranch = p.type === "branch";

              return (
                <g
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className="cursor-pointer transition-transform duration-200 hover:scale-110"
                >
                  {/* Radar animado en la Matriz / Laboratorio Central de Altamira */}
                  {isHQ && (
                    <>
                      <circle cx={p.x} cy={p.y} r="26" fill="url(#radarGlow)">
                        <animate attributeName="r" values="12;32;12" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={p.x} cy={p.y} r="16" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
                    </>
                  )}

                  {/* Halo de selección */}
                  {isSelected && (
                    <circle cx={p.x} cy={p.y} r="18" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
                  )}

                  {/* Punto principal del Pin */}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isHQ ? "7" : isBranch ? "5.5" : "4.5"}
                    fill={isHQ ? "#f59e0b" : isBranch ? "#0256B2" : "#94a3b8"}
                    stroke="#ffffff"
                    strokeWidth={isHQ ? "2.5" : "1.8"}
                  />

                  {/* Etiqueta visible permanente con el nombre de la ciudad */}
                  <g transform={`translate(${p.x}, ${p.y})`}>
                    {/* Fondo de texto para máxima legibilidad */}
                    <rect
                      x={p.id === "houston" ? "10" : p.id === "tijuana" ? "-85" : p.id === "altamira" ? "12" : p.id === "carmen" ? "10" : "8"}
                      y={p.id === "madero" ? "8" : "-8"}
                      width={p.shortName.length * 6.5 + 10}
                      height="16"
                      rx="3"
                      fill={isSelected ? "#0256B2" : isHQ ? "#1e293b" : "#0f172a"}
                      stroke={isSelected ? "#ffffff" : isHQ ? "#f59e0b" : "#334155"}
                      strokeWidth="1"
                      opacity="0.95"
                    />
                    <text
                      x={p.id === "houston" ? "15" : p.id === "tijuana" ? "-80" : p.id === "altamira" ? "17" : p.id === "carmen" ? "15" : "13"}
                      y={p.id === "madero" ? "20" : "4"}
                      fill={isSelected ? "#ffffff" : isHQ ? "#f59e0b" : "#e2e8f0"}
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight={isHQ || isSelected ? "bold" : "normal"}
                    >
                      {p.shortName}
                    </text>
                  </g>
                </g>
              );
            })}

            {/* Inset Box para Sudamérica (Lima, Perú) */}
            <g transform="translate(730, 470)">
              <rect
                width="240"
                height="125"
                rx="8"
                fill="#0b1a2f"
                stroke={selectedId === "lima" ? "#0256B2" : "#1e3a5f"}
                strokeWidth={selectedId === "lima" ? "2" : "1"}
                className="cursor-pointer"
                onClick={() => setSelectedId("lima")}
              />
              <text x="12" y="22" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                COBERTURA SUDAMÉRICA
              </text>
              <line x1="12" y1="30" x2="228" y2="30" stroke="#1e3a5f" strokeWidth="1" />

              <g transform="translate(18, 48)">
                <circle cx="8" cy="8" r="5" fill="#94a3b8" stroke="#ffffff" strokeWidth="1.5" />
                <text x="22" y="12" fill="#ffffff" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
                  Lima, Perú
                </text>
                <text x="22" y="28" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">
                  Centro Empresarial San Isidro / Callao
                </text>
                <text x="22" y="44" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                  Punto de Enlace Regional
                </text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* TARJETA DETALLADA DE LA UBICACIÓN SELECCIONADA */}
      <div className="rounded-xl border border-brand-200 bg-white p-6 shadow-md transition-all">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b border-ink-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">
                {selectedLoc.country === "MX" ? "🇲🇽" : selectedLoc.country === "US" ? "🇺🇸" : "🇵🇪"}
              </span>
              <h3 className="text-xl font-extrabold text-ink-900">{selectedLoc.name}</h3>
              <span
                className={`chip text-xs font-mono font-bold ${
                  selectedLoc.type === "hq"
                    ? "bg-amber-50 text-amber-900 border-amber-300"
                    : selectedLoc.type === "branch"
                    ? "bg-brand-50 text-brand-700 border-brand-300"
                    : "bg-ink-100 text-ink-700 border-ink-200"
                }`}
              >
                {selectedLoc.type === "hq"
                  ? "Laboratorio Central (HQ)"
                  : selectedLoc.type === "branch"
                  ? "Sucursal Operativa"
                  : "Punto Estratégico de Servicio"}
              </span>
            </div>
            <p className="text-xs text-ink-500 font-mono mt-1">
              {selectedLoc.region} · Coordenadas: {selectedLoc.lat.toFixed(4)}° N, {Math.abs(selectedLoc.lng).toFixed(4)}° W
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedLoc.address && (
              <a
                href={mapsUrl(selectedLoc.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline min-h-10 text-xs px-3 font-semibold"
              >
                <Navigation className="size-3.5" /> Abrir en Google Maps
              </a>
            )}
            <a
              href={buildWaLink("CONTACT", {
                SedeRequerida: selectedLoc.name,
                Ubicacion: selectedLoc.region,
                Consulta: "Solicitud de atención técnica local",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary min-h-10 text-xs px-4 font-bold"
            >
              Contactar esta Sede
            </a>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          <div>
            <span className="text-xs font-mono text-ink-500 block uppercase font-bold">Capacidad & Especialidad</span>
            <p className="mt-1 font-medium text-ink-800">{selectedLoc.specialty}</p>
          </div>

          <div>
            <span className="text-xs font-mono text-ink-500 block uppercase font-bold">Dirección / Complejo</span>
            <p className="mt-1 text-ink-700">{selectedLoc.address || "Atención técnica y comercial en parque industrial"}</p>
          </div>

          <div>
            <span className="text-xs font-mono text-ink-500 block uppercase font-bold">Teléfono de Enlace</span>
            <p className="mt-1 text-ink-900 font-semibold font-mono">
              {selectedLoc.phone ? (
                <a href={`tel:${selectedLoc.phone}`} className="text-brand-700 hover:underline">
                  {selectedLoc.phone}
                </a>
              ) : (
                "Conmutador Central: (833) 155.0189"
              )}
            </p>
          </div>
        </div>
      </div>

      {/* MATRIZ COMPLETA DE SEDES EN CUADRÍCULA */}
      <div className="pt-4">
        <h3 className="text-base font-bold text-ink-900 mb-3">
          Directorio Rápido de Ubicaciones ({filteredLocations.length})
        </h3>
        <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredLocations.map((loc) => {
            const isSelected = selectedId === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedId(loc.id)}
                className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? "border-brand-600 bg-brand-50/70 shadow-sm"
                    : "border-ink-200 bg-white hover:border-ink-300 hover:bg-ink-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-ink-900">{loc.shortName}</span>
                  <span className="text-xs">{loc.country === "MX" ? "🇲🇽" : loc.country === "US" ? "🇺🇸" : "🇵🇪"}</span>
                </div>
                <span className="text-[11px] text-ink-500 block mt-1 truncate">{loc.region}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
