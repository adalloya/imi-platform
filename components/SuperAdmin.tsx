"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2, GraduationCap, Wrench, ShoppingBag, MapPin, FileText,
  Save, RotateCcw, Download, Upload, Check, AlertCircle, Plus, Trash2,
  ExternalLink, HelpCircle, Lock, Unlock, Eye, Sparkles, BookOpen
} from "lucide-react";
import { useCms } from "./CmsProvider";
import { useI18n } from "./Providers";
import type { Course, CourseCategory } from "@/data/academy";
import type { Product, ProductCategory } from "@/data/products";
import type { Location } from "@/data/locations";
import type { PdfDocument, DocumentCategory } from "@/data/documents";
import type { Service, ServiceGroup } from "@/data/services";

type Tab = "company" | "academy" | "services" | "products" | "locations" | "documents" | "backup";

export function SuperAdmin() {
  const { locale, t } = useI18n();
  const cms = useCms();

  const [auth, setAuth] = useState(false);
  const [pin, setPin] = useState("");
  const [authError, setAuthError] = useState(false);

  const [activeTab, setActiveTab] = useState<Tab>("company");
  const [showTutorial, setShowTutorial] = useState(true);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  // Form states
  const [companyForm, setCompanyForm] = useState(cms.state.company);

  // Notifications
  const notify = (msg: string) => {
    setStatusMsg(msg);
    setTimeout(() => setStatusMsg(null), 3000);
  };

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Clave predeterminada segura para el cliente
    if (pin === "imi2026" || pin === "admin") {
      setAuth(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  }

  if (!auth) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center p-4">
        <div className="card w-full max-w-md p-8 shadow-xl">
          <div className="flex size-12 items-center justify-center rounded-xl bg-brand-600 text-white mx-auto">
            <Lock className="size-6" />
          </div>
          <h1 className="mt-4 text-center text-2xl font-bold text-ink-900">
            Super Admin IMI
          </h1>
          <p className="mt-1 text-center text-sm text-ink-500">
            Panel de control para actualización total del sitio sin programadores.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="label">Clave de Acceso</label>
              <input
                type="password"
                placeholder="Ingresa la clave (por defecto: imi2026)"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setAuthError(false);
                }}
                className="field text-center font-mono tracking-widest text-lg"
                autoFocus
              />
              {authError && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium">
                  <AlertCircle className="size-3.5" /> Clave incorrecta. Usa: imi2026
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              <Unlock className="size-4" /> Ingresar al Panel
            </button>
          </form>

          <div className="mt-6 rounded-lg bg-brand-50 p-3.5 text-xs text-brand-800">
            <strong>¿Para qué sirve este panel?</strong> Permite al equipo comercial y operativo de IMI cambiar teléfonos de WhatsApp, agregar o editar cursos, modificar productos en renta/venta, y gestionar descargas de folletos PDF en tiempo real.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Top Banner de Control */}
      <div className="border-b border-ink-200 bg-ink-900 text-white">
        <div className="container-x flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded bg-safety-500 text-white font-bold text-xs">
              CMS
            </span>
            <div>
              <h1 className="text-lg font-bold leading-none">Panel Super Admin · IMI Platform</h1>
              <p className="text-xs text-ink-400 mt-1">Gestión autónoma de contenidos y recursos</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTutorial(!showTutorial)}
              className={`btn min-h-9 px-3 text-xs ${showTutorial ? "bg-white/20 text-white" : "bg-white/10 text-ink-300 hover:text-white"}`}
            >
              <HelpCircle className="size-3.5" />
              {showTutorial ? "Ocultar Tutoriales" : "Ver Tutoriales"}
            </button>

            <Link
              href={`/${locale}`}
              target="_blank"
              className="btn btn-ghost-dark min-h-9 px-3 text-xs"
            >
              <Eye className="size-3.5" /> Ver Sitio en Vivo <ExternalLink className="size-3 ml-0.5" />
            </Link>

            <button
              onClick={() => setAuth(false)}
              className="btn min-h-9 border border-white/20 text-ink-300 hover:text-white px-3 text-xs"
            >
              Salir
            </button>
          </div>
        </div>
      </div>

      {statusMsg && (
        <div className="sticky top-16 z-50 bg-emerald-600 text-white text-center py-2 text-sm font-semibold shadow-md flex items-center justify-center gap-2">
          <Check className="size-4" /> {statusMsg}
        </div>
      )}

      <div className="container-x mt-8">
        {/* Pestañas de Navegación del Panel */}
        <div className="flex gap-2 overflow-x-auto border-b border-ink-200 pb-2">
          {[
            { id: "company" as const, label: "Empresa & Contacto", icon: Building2 },
            { id: "academy" as const, label: "IMI Academy & Cursos", icon: GraduationCap, badge: cms.state.courses.length },
            { id: "services" as const, label: "Servicios & Laboratorio", icon: Wrench, badge: cms.state.services.length },
            { id: "products" as const, label: "Tienda & Equipos", icon: ShoppingBag, badge: cms.state.products.length },
            { id: "locations" as const, label: "Sucursales & Cobertura", icon: MapPin, badge: cms.state.locations.length },
            { id: "documents" as const, label: "Recursos & PDFs", icon: FileText, badge: cms.state.documents.length },
            { id: "backup" as const, label: "Respaldo & Exportación", icon: Save },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-ink-600 hover:bg-ink-100 hover:text-ink-900"
                }`}
              >
                <Icon className="size-4" />
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-mono font-bold ${
                      active ? "bg-white/20 text-white" : "bg-ink-200 text-ink-700"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Contenido del Módulo */}
        <div className="mt-6">
          {activeTab === "company" && (
            <CompanyModule
              company={companyForm}
              showTutorial={showTutorial}
              onChange={setCompanyForm}
              onSave={() => {
                cms.updateCompany(companyForm);
                notify("Datos de la empresa y WhatsApp actualizados exitosamente.");
              }}
            />
          )}

          {activeTab === "academy" && (
            <AcademyModule
              courses={cms.state.courses}
              calendar={cms.state.calendar}
              showTutorial={showTutorial}
              onAddCourse={(c) => {
                cms.addCourse(c);
                notify("Nuevo curso agregado al catálogo.");
              }}
              onDeleteCourse={(id) => {
                cms.deleteCourse(id);
                notify("Curso eliminado del catálogo.");
              }}
              onAddCalendarEvent={(ev) => {
                cms.addCalendarEvent(ev);
                notify("Fecha programada en el calendario.");
              }}
              onDeleteCalendarEvent={(idx) => {
                cms.deleteCalendarEvent(idx);
                notify("Fecha retirada del calendario.");
              }}
            />
          )}

          {activeTab === "services" && (
            <ServicesModule
              services={cms.state.services}
              showTutorial={showTutorial}
              onAddService={(s) => {
                cms.addService(s);
                notify("Servicio agregado exitosamente.");
              }}
              onDeleteService={(id) => {
                cms.deleteService(id);
                notify("Servicio eliminado.");
              }}
            />
          )}

          {activeTab === "products" && (
            <ProductsModule
              products={cms.state.products}
              showTutorial={showTutorial}
              onAddProduct={(p) => {
                cms.addProduct(p);
                notify("Producto agregado al catálogo de tienda.");
              }}
              onDeleteProduct={(id) => {
                cms.deleteProduct(id);
                notify("Producto retirado del catálogo.");
              }}
            />
          )}

          {activeTab === "locations" && (
            <LocationsModule
              locations={cms.state.locations}
              showTutorial={showTutorial}
              onAddLocation={(loc) => {
                cms.addLocation(loc);
                notify("Ubicación agregada al directorio.");
              }}
              onDeleteLocation={(id) => {
                cms.deleteLocation(id);
                notify("Ubicación eliminada.");
              }}
            />
          )}

          {activeTab === "documents" && (
            <DocumentsModule
              documents={cms.state.documents}
              showTutorial={showTutorial}
              onAddDocument={(doc) => {
                cms.addDocument(doc);
                notify("Nuevo documento PDF registrado.");
              }}
              onDeleteDocument={(id) => {
                cms.deleteDocument(id);
                notify("Documento eliminado.");
              }}
            />
          )}

          {activeTab === "backup" && (
            <BackupModule
              showTutorial={showTutorial}
              onExport={() => {
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(cms.exportBackup());
                const a = document.createElement("a");
                a.setAttribute("href", dataStr);
                a.setAttribute("download", `imi_backup_${new Date().toISOString().slice(0, 10)}.json`);
                document.body.appendChild(a);
                a.click();
                a.remove();
                notify("Archivo de respaldo JSON descargado.");
              }}
              onImport={(json) => {
                if (cms.importBackup(json)) {
                  notify("Respaldo restaurado con éxito.");
                } else {
                  alert("Error al procesar el archivo JSON. Verifica su estructura.");
                }
              }}
              onReset={() => {
                if (confirm("¿Estás seguro de restablecer todos los datos a los valores originales de fábrica? Se perderán las modificaciones no respaldadas.")) {
                  cms.resetToDefaults();
                  setCompanyForm(cms.state.company);
                  notify("Sistema restablecido a los datos de fábrica.");
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// COMPONENTES DE MÓDULO CON TUTORIALES DIDÁCTICOS INCORPORADOS
// -------------------------------------------------------------

function TutorialBox({ title, whatIsIt, howToUse, tips }: { title: string; whatIsIt: string; howToUse: string[]; tips: string }) {
  return (
    <div className="mb-6 rounded-xl border border-brand-200 bg-brand-50/70 p-5 text-sm text-brand-950">
      <div className="flex items-center gap-2 font-bold text-brand-900 text-base mb-2">
        <BookOpen className="size-5 text-brand-600" />
        <span>Tutorial Guiado: {title}</span>
      </div>
      <p className="text-brand-800 leading-relaxed mb-3">
        <strong>¿Qué es y para qué sirve?</strong> {whatIsIt}
      </p>
      <div className="space-y-1.5 mb-3">
        <strong className="block text-brand-900">Paso a paso para usarlo:</strong>
        <ol className="list-decimal pl-5 space-y-1 text-brand-800">
          {howToUse.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
      <div className="flex items-start gap-2 rounded-lg bg-white/80 p-2.5 text-xs text-brand-900 border border-brand-200">
        <Sparkles className="size-4 shrink-0 text-safety-500 mt-0.5" />
        <span><strong>Consejo profesional:</strong> {tips}</span>
      </div>
    </div>
  );
}

// Módulo 1: Empresa
function CompanyModule({
  company,
  showTutorial,
  onChange,
  onSave,
}: {
  company: any;
  showTutorial: boolean;
  onChange: (val: any) => void;
  onSave: () => void;
}) {
  return (
    <div className="card p-6 sm:p-8">
      {showTutorial && (
        <TutorialBox
          title="Datos Corporativos y Canales de Recepción de Leads"
          whatIsIt="Este módulo controla la información institucional visible en el encabezado, pie de página, botones de llamada directa y, lo más importante: el número de WhatsApp oficial donde llegan todas las cotizaciones, solicitudes de cursos y alertas SOS de paro de planta."
          howToUse={[
            "Para cambiar el WhatsApp receptor, ingresa el número con código de país sin signos (ejemplo: 528331550189).",
            "Actualiza los teléfonos de oficina y móvil para que se marquen automáticamente cuando un cliente haga clic en 'Llamar'.",
            "Haz clic en 'Guardar Cambios' al final de la página para que se aplique instantáneamente en toda la web.",
          ]}
          tips="Si cambias de número de WhatsApp de guardia, actualízalo aquí y todas las alertas SOS de clientes se dirigirán de inmediato al nuevo teléfono sin necesidad de reiniciar el servidor."
        />
      )}

      <h2 className="text-xl font-bold text-ink-900 mb-6">Configuración Institucional</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="label">Razón Social Legal</label>
          <input
            className="field"
            value={company.legalName || ""}
            onChange={(e) => onChange({ ...company, legalName: e.target.value })}
          />
        </div>
        <div>
          <label className="label">Nombre Corto</label>
          <input
            className="field"
            value={company.shortName || ""}
            onChange={(e) => onChange({ ...company, shortName: e.target.value })}
          />
        </div>

        <div>
          <label className="label">WhatsApp Receptor de Leads (Formato Internacional)</label>
          <input
            className="field font-mono"
            placeholder="528331550189"
            value={company.mobileRaw?.replace("+", "") || ""}
            onChange={(e) => onChange({ ...company, mobileRaw: `+${e.target.value.replace("+", "")}` })}
          />
          <p className="mt-1 text-xs text-ink-500">Ejemplo: 528331550189 (sin espacios ni guiones)</p>
        </div>

        <div>
          <label className="label">Teléfono Móvil (Visualización)</label>
          <input
            className="field"
            value={company.mobile || ""}
            onChange={(e) => onChange({ ...company, mobile: e.target.value })}
          />
        </div>

        <div>
          <label className="label">Teléfono Fijo Conmutador (Visualización)</label>
          <input
            className="field"
            value={company.phone || ""}
            onChange={(e) => onChange({ ...company, phone: e.target.value })}
          />
        </div>

        <div>
          <label className="label">Correo Electrónico de Contacto</label>
          <input
            className="field"
            type="email"
            value={company.email || ""}
            onChange={(e) => onChange({ ...company, email: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-ink-200 flex justify-end">
        <button onClick={onSave} className="btn btn-primary px-8">
          <Save className="size-4" /> Guardar Cambios de Empresa
        </button>
      </div>
    </div>
  );
}

// Módulo 2: Academy
function AcademyModule({
  courses,
  calendar,
  showTutorial,
  onAddCourse,
  onDeleteCourse,
  onAddCalendarEvent,
  onDeleteCalendarEvent,
}: {
  courses: Course[];
  calendar: any[];
  showTutorial: boolean;
  onAddCourse: (c: Course) => void;
  onDeleteCourse: (id: string) => void;
  onAddCalendarEvent: (ev: any) => void;
  onDeleteCalendarEvent: (idx: number) => void;
}) {
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);

  // New course form
  const [newCourse, setNewCourse] = useState({
    name: "",
    category: "certification" as CourseCategory,
    hours: 40,
    summary: "",
    image: "https://www.imindustrial.mx/wp-content/uploads/2020/02/curso-de-instrumentacion.jpg",
    topics: "Fundamentos, Normatividad, Práctica en banco de prueba",
  });

  // New calendar event form
  const [newEvent, setNewEvent] = useState({
    courseId: courses[0]?.id || "",
    date: "2026-11-15",
    city: "Altamira, Tamps.",
  });

  function handleCreateCourse(e: React.FormEvent) {
    e.preventDefault();
    if (!newCourse.name) return;
    const id = newCourse.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    onAddCourse({
      id,
      category: newCourse.category,
      name: { es: newCourse.name, en: newCourse.name },
      summary: { es: newCourse.summary, en: newCourse.summary },
      hours: Number(newCourse.hours) || 24,
      modality: ["presencial", "online"],
      endorsement: ["STPS IMI150311QL2-0013", "CONOCER EC0217"],
      topics: newCourse.topics.split(",").map((t) => ({ es: t.trim(), en: t.trim() })),
      image: newCourse.image,
    });
    setNewCourse({
      name: "",
      category: "certification",
      hours: 40,
      summary: "",
      image: "https://www.imindustrial.mx/wp-content/uploads/2020/02/curso-de-instrumentacion.jpg",
      topics: "Fundamentos, Normatividad, Práctica en banco de prueba",
    });
    setShowAddCourse(false);
  }

  function handleCreateEvent(e: React.FormEvent) {
    e.preventDefault();
    onAddCalendarEvent(newEvent);
    setShowAddEvent(false);
  }

  return (
    <div className="space-y-8">
      {showTutorial && (
        <TutorialBox
          title="Catálogo IMI Academy y Calendario de Certificaciones"
          whatIsIt="Controla los diplomados, certificaciones STPS/CONOCER y cursos especializados que aparecen en la página /academy. Los usuarios pueden ver el temario, cantidad de horas e inscribirse vía WhatsApp."
          howToUse={[
            "Para agregar un curso, haz clic en '+ Nuevo Curso', escribe su título, duración en horas y un resumen claro.",
            "Para programar fechas en la agenda pública, usa la sección 'Próximas Fechas' indicando el curso, fecha y sede (ej. Altamira o En línea).",
            "Si un curso ya no se impartirá temporalmente, puedes eliminarlo de la lista con el botón del bote de basura.",
          ]}
          tips="Para las imágenes de los cursos, usa URLs seguras que terminen en .jpg o .png (puedes reutilizar las URLs de imágenes institucionales ya registradas)."
        />
      )}

      {/* Calendario de Fechas */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-ink-900">Calendario Oficial de Fechas</h2>
            <p className="text-xs text-ink-500">Estas fechas aparecen destacadas para registro inmediato</p>
          </div>
          <button onClick={() => setShowAddEvent(!showAddEvent)} className="btn btn-outline text-xs">
            <Plus className="size-4" /> Agregar Fecha
          </button>
        </div>

        {showAddEvent && (
          <form onSubmit={handleCreateEvent} className="mb-6 rounded-lg bg-ink-50 p-4 border border-ink-200 grid gap-3 sm:grid-cols-3">
            <div>
              <label className="label">Curso</label>
              <select
                className="field"
                value={newEvent.courseId}
                onChange={(e) => setNewEvent({ ...newEvent, courseId: e.target.value })}
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>{c.name.es}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Fecha</label>
              <input
                type="date"
                className="field"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Sede / Ciudad</label>
              <input
                className="field"
                value={newEvent.city}
                onChange={(e) => setNewEvent({ ...newEvent, city: e.target.value })}
              />
            </div>
            <div className="sm:col-span-3 flex justify-end gap-2">
              <button type="button" onClick={() => setShowAddEvent(false)} className="btn btn-outline text-xs">Cancelar</button>
              <button type="submit" className="btn btn-primary text-xs">Guardar en Calendario</button>
            </div>
          </form>
        )}

        <div className="divide-y divide-ink-100 border rounded-lg overflow-hidden">
          {calendar.map((ev, idx) => {
            const course = courses.find((c) => c.id === ev.courseId);
            return (
              <div key={idx} className="flex items-center justify-between p-3.5 text-sm">
                <div>
                  <span className="font-mono text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded mr-2">{ev.date}</span>
                  <span className="font-semibold text-ink-900">{course?.name.es || ev.courseId}</span>
                  <span className="text-xs text-ink-500 ml-2">({ev.city})</span>
                </div>
                <button onClick={() => onDeleteCalendarEvent(idx)} className="text-ink-400 hover:text-red-600 p-1" title="Eliminar fecha">
                  <Trash2 className="size-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lista de Cursos */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-ink-900">Catálogo de Cursos & Certificaciones ({courses.length})</h2>
            <p className="text-xs text-ink-500">Cursos disponibles con registro STPS y CONOCER</p>
          </div>
          <button onClick={() => setShowAddCourse(!showAddCourse)} className="btn btn-primary text-xs">
            <Plus className="size-4" /> Nuevo Curso
          </button>
        </div>

        {showAddCourse && (
          <form onSubmit={handleCreateCourse} className="mb-6 rounded-lg bg-ink-50 p-4 border border-ink-200 space-y-4">
            <h3 className="font-bold text-sm text-ink-900">Registrar Nuevo Curso o Diplomado</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <label className="label">Nombre del Curso</label>
                <input
                  required
                  className="field"
                  placeholder="Ej. Curso Avanzado de Transmisores Multivariables"
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                />
              </div>
              <div>
                <label className="label">Categoría</label>
                <select
                  className="field"
                  value={newCourse.category}
                  onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value as CourseCategory })}
                >
                  <option value="certification">Certificación</option>
                  <option value="basic">Curso Básico</option>
                  <option value="specialized">Curso Especializado</option>
                </select>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="label">Duración (Horas)</label>
                <input
                  type="number"
                  className="field"
                  value={newCourse.hours}
                  onChange={(e) => setNewCourse({ ...newCourse, hours: Number(e.target.value) })}
                />
              </div>
              <div>
                <label className="label">URL Imagen de Portada</label>
                <input
                  className="field"
                  value={newCourse.image}
                  onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="label">Resumen Descriptivo</label>
              <textarea
                rows={2}
                className="field py-2"
                placeholder="Descripción del alcance y perfil de egreso..."
                value={newCourse.summary}
                onChange={(e) => setNewCourse({ ...newCourse, summary: e.target.value })}
              />
            </div>

            <div>
              <label className="label">Temas (separados por coma)</label>
              <input
                className="field"
                placeholder="Tema 1, Tema 2, Tema 3..."
                value={newCourse.topics}
                onChange={(e) => setNewCourse({ ...newCourse, topics: e.target.value })}
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setShowAddCourse(false)} className="btn btn-outline text-xs">Cancelar</button>
              <button type="submit" className="btn btn-primary text-xs">Guardar Curso</button>
            </div>
          </form>
        )}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div key={c.id} className="rounded-lg border border-ink-200 p-4 flex flex-col justify-between bg-white hover:border-brand-400">
              <div>
                <span className="chip text-[10px] uppercase font-bold text-brand-700 bg-brand-50 mb-2">
                  {c.category} · {c.hours} hrs
                </span>
                <h4 className="font-bold text-sm text-ink-900 mt-1">{c.name.es}</h4>
                <p className="text-xs text-ink-500 mt-1.5 line-clamp-2">{c.summary.es}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-ink-100 flex items-center justify-between text-xs">
                <span className="text-ink-400">ID: {c.id}</span>
                <button
                  onClick={() => {
                    if (confirm(`¿Eliminar el curso "${c.name.es}"?`)) onDeleteCourse(c.id);
                  }}
                  className="text-ink-400 hover:text-red-600 p-1"
                  title="Eliminar curso"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Módulo 3: Servicios
function ServicesModule({
  services,
  showTutorial,
  onAddService,
  onDeleteService,
}: {
  services: Service[];
  showTutorial: boolean;
  onAddService: (s: Service) => void;
  onDeleteService: (id: string) => void;
}) {
  const [showAdd, setShowAdd] = useState(false);
  const [newSvc, setNewSvc] = useState({
    name: "",
    group: "lab" as ServiceGroup,
    desc: "",
    icon: "Gauge",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newSvc.name) return;
    const id = newSvc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    onAddService({
      id,
      group: newSvc.group,
      icon: newSvc.icon,
      name: { es: newSvc.name, en: newSvc.name },
      desc: { es: newSvc.desc, en: newSvc.desc },
    });
    setNewSvc({ name: "", group: "lab", desc: "", icon: "Gauge" });
    setShowAdd(false);
  }

  return (
    <div className="card p-6">
      {showTutorial && (
        <TutorialBox
          title="Servicios de Metrología, Mantenimiento y Personal Técnico"
          whatIsIt="Controla los servicios que aparecen en las secciones /servicios y /laboratorio. Cada servicio permite al cliente hacer clic para solicitar cotización directa por WhatsApp con el nombre del servicio ya precargado."
          howToUse={[
            "Revisa la lista de servicios dividida en Laboratorio, Calibración/Mantenimiento y Staffing.",
            "Para agregar una nueva capacidad técnica (ejemplo: 'Calibración de Densímetros'), pulsa '+ Nuevo Servicio'.",
            "Asígnale su grupo correspondiente y una breve descripción con los tipos de instrumentos atendidos.",
          ]}
          tips="Mantén las descripciones concisas (1 o 2 líneas) para que se vean organizadas en las tarjetas del sitio público."
        />
      )}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-ink-900">Servicios Activos ({services.length})</h2>
          <p className="text-xs text-ink-500">Laboratorio de calibración, válvulas y personal en planta</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="btn btn-primary text-xs">
          <Plus className="size-4" /> Nuevo Servicio
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleSubmit} className="mb-6 rounded-lg bg-ink-50 p-4 border border-ink-200 space-y-3">
          <h3 className="font-bold text-sm text-ink-900">Registrar Nuevo Servicio Técnico</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="label">Nombre del Servicio</label>
              <input
                required
                className="field"
                placeholder="Ej. Calibración de Analizadores de Gas"
                value={newSvc.name}
                onChange={(e) => setNewSvc({ ...newSvc, name: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Grupo de Servicio</label>
              <select
                className="field"
                value={newSvc.group}
                onChange={(e) => setNewSvc({ ...newSvc, group: e.target.value as ServiceGroup })}
              >
                <option value="lab">Laboratorio de Metrología</option>
                <option value="calibration">Calibración y Mantenimiento</option>
                <option value="staffing">Subcontratación de Personal</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">Descripción Técnica</label>
            <input
              className="field"
              placeholder="Instrumentos, alcances o normas aplicables..."
              value={newSvc.desc}
              onChange={(e) => setNewSvc({ ...newSvc, desc: e.target.value })}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowAdd(false)} className="btn btn-outline text-xs">Cancelar</button>
            <button type="submit" className="btn btn-primary text-xs">Guardar Servicio</button>
          </div>
        </form>
      )}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.id} className="rounded-lg border border-ink-200 p-4 flex flex-col justify-between bg-white">
            <div>
              <span className="chip text-[10px] uppercase font-bold text-ink-600 bg-ink-100 mb-2">
                {s.group}
              </span>
              <h4 className="font-bold text-sm text-ink-900">{s.name.es}</h4>
              <p className="text-xs text-ink-500 mt-1">{s.desc.es}</p>
            </div>
            <div className="mt-4 pt-2 border-t border-ink-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-ink-400">{s.icon}</span>
              <button
                onClick={() => {
                  if (confirm(`¿Eliminar el servicio "${s.name.es}"?`)) onDeleteService(s.id);
                }}
                className="text-ink-400 hover:text-red-600 p-1"
                title="Eliminar"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Módulo 4: Tienda & Productos
function ProductsModule({
  products,
  showTutorial,
  onAddProduct,
  onDeleteProduct,
}: {
  products: Product[];
  showTutorial: boolean;
  onAddProduct: (p: Product) => void;
  onDeleteProduct: (id: string) => void;
}) {
  const [showAdd, setShowAdd] = useState(false);
  const [newProd, setNewProd] = useState({
    name: "",
    category: "test-calibration" as ProductCategory,
    desc: "",
    image: "https://www.imindustrial.mx/wp-content/uploads/2018/05/instruments.png",
    sale: true,
    rent: true,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newProd.name) return;
    const id = newProd.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    onAddProduct({
      id,
      name: newProd.name,
      category: newProd.category,
      desc: { es: newProd.desc, en: newProd.desc },
      image: newProd.image,
      sale: newProd.sale,
      rent: newProd.rent,
    });
    setNewProd({
      name: "",
      category: "test-calibration",
      desc: "",
      image: "https://www.imindustrial.mx/wp-content/uploads/2018/05/instruments.png",
      sale: true,
      rent: true,
    });
    setShowAdd(false);
  }

  return (
    <div className="card p-6">
      {showTutorial && (
        <TutorialBox
          title="Catálogo de Instrumentos y Equipos en Tienda (Venta y Renta)"
          whatIsIt="Administra el catálogo de la sección /tienda. Cada equipo puede habilitarse para 'Venta', 'Renta' o ambas. Los clientes pueden agregarlos con un clic a su 'Express Cart' y generar una solicitud de cotización consolidada por WhatsApp."
          howToUse={[
            "Para agregar un nuevo equipo (ejemplo: 'Calibrador de Procesos Fluke 754'), pulsa '+ Nuevo Producto'.",
            "Selecciona si está disponible para Venta, Renta o ambas modalidades.",
            "Pega la URL de la imagen del equipo.",
          ]}
          tips="Puedes alojar fotos de equipos en servidores externos o en la página actual de imindustrial.mx y simplemente pegar el enlace aquí."
        />
      )}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-ink-900">Equipos Registrados ({products.length})</h2>
          <p className="text-xs text-ink-500">Instrumentos para calibración, pruebas eléctricas y control</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="btn btn-primary text-xs">
          <Plus className="size-4" /> Nuevo Producto
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleSubmit} className="mb-6 rounded-lg bg-ink-50 p-4 border border-ink-200 space-y-3">
          <h3 className="font-bold text-sm text-ink-900">Agregar Instrumento o Equipo al Catálogo</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="label">Nombre del Equipo</label>
              <input
                required
                className="field"
                placeholder="Ej. Calibrador Documentador de Procesos"
                value={newProd.name}
                onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Categoría</label>
              <select
                className="field"
                value={newProd.category}
                onChange={(e) => setNewProd({ ...newProd, category: e.target.value as ProductCategory })}
              >
                <option value="test-calibration">Equipo de prueba y calibración</option>
                <option value="electrical">Equipo de pruebas eléctricas</option>
                <option value="other">Otros instrumentos</option>
                <option value="any">Cualquier instrumento</option>
              </select>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="label">URL Imagen del Instrumento</label>
              <input
                className="field"
                value={newProd.image}
                onChange={(e) => setNewProd({ ...newProd, image: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-6 pt-6">
              <label className="flex items-center gap-2 text-sm font-semibold text-ink-800 cursor-pointer">
                <input
                  type="checkbox"
                  className="size-4 rounded text-brand-600"
                  checked={newProd.sale}
                  onChange={(e) => setNewProd({ ...newProd, sale: e.target.checked })}
                />
                Disponible para Venta
              </label>
              <label className="flex items-center gap-2 text-sm font-semibold text-ink-800 cursor-pointer">
                <input
                  type="checkbox"
                  className="size-4 rounded text-brand-600"
                  checked={newProd.rent}
                  onChange={(e) => setNewProd({ ...newProd, rent: e.target.checked })}
                />
                Disponible para Renta
              </label>
            </div>
          </div>

          <div>
            <label className="label">Descripción Técnica</label>
            <input
              className="field"
              placeholder="Especificaciones, rangos o marcas compatibles..."
              value={newProd.desc}
              onChange={(e) => setNewProd({ ...newProd, desc: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowAdd(false)} className="btn btn-outline text-xs">Cancelar</button>
            <button type="submit" className="btn btn-primary text-xs">Guardar en Tienda</button>
          </div>
        </form>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="rounded-lg border border-ink-200 overflow-hidden flex flex-col justify-between bg-white">
            <div className="aspect-[16/9] bg-ink-100 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} className="size-full object-cover" />
              <div className="absolute top-2 right-2 flex gap-1">
                {p.sale && <span className="chip bg-white text-ink-800 font-bold text-[10px]">Venta</span>}
                {p.rent && <span className="chip bg-brand-600 text-white font-bold text-[10px]">Renta</span>}
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sm text-ink-900">{p.name}</h4>
                <p className="text-xs text-ink-500 mt-1">{p.desc.es}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-ink-100 flex items-center justify-between text-xs text-ink-400">
                <span>Cat: {p.category}</span>
                <button
                  onClick={() => {
                    if (confirm(`¿Retirar "${p.name}" del catálogo?`)) onDeleteProduct(p.id);
                  }}
                  className="text-ink-400 hover:text-red-600 p-1"
                  title="Eliminar"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Módulo 5: Sucursales
function LocationsModule({
  locations,
  showTutorial,
  onAddLocation,
  onDeleteLocation,
}: {
  locations: Location[];
  showTutorial: boolean;
  onAddLocation: (loc: Location) => void;
  onDeleteLocation: (id: string) => void;
}) {
  const [showAdd, setShowAdd] = useState(false);
  const [newLoc, setNewLoc] = useState({
    name: "",
    type: "pos" as "hq" | "branch" | "pos",
    address: "",
    phone: "",
    country: "MX" as "MX" | "PE" | "US",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newLoc.name) return;
    const id = newLoc.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    onAddLocation({
      id,
      name: newLoc.name,
      type: newLoc.type,
      address: newLoc.address || undefined,
      phone: newLoc.phone || undefined,
      country: newLoc.country,
    });
    setNewLoc({ name: "", type: "pos", address: "", phone: "", country: "MX" });
    setShowAdd(false);
  }

  return (
    <div className="card p-6">
      {showTutorial && (
        <TutorialBox
          title="Directorio de Sedes, Laboratorios y Puntos de Venta"
          whatIsIt="Controla los puntos de atención que aparecen en la sección /sucursales y en el pie de página de todo el sitio web. Permite a los clientes ubicar laboratorios y calcular rutas en Google Maps."
          howToUse={[
            "Para registrar un nuevo punto de atención o representante comercial, pulsa '+ Nueva Sucursal'.",
            "Define si es 'Matriz/Laboratorio', 'Sucursal Oficial' o 'Punto de Venta'.",
            "Ingresa la dirección completa para que el enlace a Google Maps funcione con precisión.",
          ]}
          tips="Si abres una nueva oficina en otra ciudad o país, agrégala aquí y aparecerá de inmediato en los contadores y directorios globales."
        />
      )}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-ink-900">Ubicaciones Registradas ({locations.length})</h2>
          <p className="text-xs text-ink-500">Laboratorios, oficinas y cobertura internacional</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="btn btn-primary text-xs">
          <Plus className="size-4" /> Nueva Ubicación
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleSubmit} className="mb-6 rounded-lg bg-ink-50 p-4 border border-ink-200 space-y-3">
          <h3 className="font-bold text-sm text-ink-900">Registrar Nueva Ubicación o Sucursal</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label className="label">Nombre de la Sucursal o Ciudad</label>
              <input
                required
                className="field"
                placeholder="Ej. Monterrey, N.L. / Sucursal Apodaca"
                value={newLoc.name}
                onChange={(e) => setNewLoc({ ...newLoc, name: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Tipo</label>
              <select
                className="field"
                value={newLoc.type}
                onChange={(e) => setNewLoc({ ...newLoc, type: e.target.value as any })}
              >
                <option value="hq">Laboratorio y Matriz</option>
                <option value="branch">Sucursal Oficial</option>
                <option value="pos">Punto de Venta / Enlace</option>
              </select>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label className="label">Dirección Física (Opcional)</label>
              <input
                className="field"
                placeholder="Calle, número, colonia, CP, municipio..."
                value={newLoc.address}
                onChange={(e) => setNewLoc({ ...newLoc, address: e.target.value })}
              />
            </div>
            <div>
              <label className="label">País</label>
              <select
                className="field"
                value={newLoc.country}
                onChange={(e) => setNewLoc({ ...newLoc, country: e.target.value as any })}
              >
                <option value="MX">México (MX)</option>
                <option value="PE">Perú (PE)</option>
                <option value="US">Estados Unidos (US)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="label">Teléfono Local</label>
            <input
              className="field"
              placeholder="Ej. (833) 155.0189"
              value={newLoc.phone}
              onChange={(e) => setNewLoc({ ...newLoc, phone: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowAdd(false)} className="btn btn-outline text-xs">Cancelar</button>
            <button type="submit" className="btn btn-primary text-xs">Guardar Ubicación</button>
          </div>
        </form>
      )}

      <div className="divide-y divide-ink-100 border rounded-lg overflow-hidden">
        {locations.map((loc) => (
          <div key={loc.id} className="flex items-center justify-between p-4 bg-white hover:bg-ink-50">
            <div>
              <div className="flex items-center gap-2">
                <span className={`chip text-[10px] font-bold ${loc.type === "hq" ? "bg-brand-50 text-brand-700" : ""}`}>
                  {loc.type === "hq" ? "Matriz" : loc.type === "branch" ? "Sucursal" : "Punto de Venta"}
                </span>
                <span className="font-mono text-xs text-ink-400">[{loc.country}]</span>
                <h4 className="font-bold text-sm text-ink-900">{loc.name}</h4>
              </div>
              {loc.address && <p className="text-xs text-ink-500 mt-1">{loc.address}</p>}
              {loc.phone && <p className="text-xs text-brand-700 font-semibold mt-0.5">Tel: {loc.phone}</p>}
            </div>
            <button
              onClick={() => {
                if (confirm(`¿Eliminar la ubicación "${loc.name}"?`)) onDeleteLocation(loc.id);
              }}
              className="text-ink-400 hover:text-red-600 p-1.5"
              title="Eliminar"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Módulo 6: Documentos & PDFs
function DocumentsModule({
  documents,
  showTutorial,
  onAddDocument,
  onDeleteDocument,
}: {
  documents: PdfDocument[];
  showTutorial: boolean;
  onAddDocument: (doc: PdfDocument) => void;
  onDeleteDocument: (id: string) => void;
}) {
  const [showAdd, setShowAdd] = useState(false);
  const [newDoc, setNewDoc] = useState({
    title: "",
    category: "brochure" as DocumentCategory,
    description: "",
    url: "",
    filename: "",
    badge: "Oficial",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newDoc.title || !newDoc.url) return;
    const id = newDoc.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const fn = newDoc.filename || newDoc.url.split("/").pop() || "documento.pdf";
    onAddDocument({
      id,
      category: newDoc.category,
      badge: newDoc.badge,
      title: { es: newDoc.title, en: newDoc.title },
      description: { es: newDoc.description, en: newDoc.description },
      url: newDoc.url,
      filename: fn,
    });
    setNewDoc({
      title: "",
      category: "brochure",
      description: "",
      url: "",
      filename: "",
      badge: "Oficial",
    });
    setShowAdd(false);
  }

  return (
    <div className="card p-6">
      {showTutorial && (
        <TutorialBox
          title="Gestión de Documentos, Acreditaciones y Brochures PDF"
          whatIsIt="Controla los documentos descargables oficiales de IMI (Brochures corporativos, acreditaciones de la Entidad Mexicana de Acreditación EMA, alcances de calibración y solicitudes de inscripción STPS). Los clientes pueden visualizarlos o descargarlos directamente."
          howToUse={[
            "Verifica la lista de los 7 documentos originales de imindustrial.mx (Brochure IMI, Brochure PSV, Acreditación EMA 17025, Anexo A, etc.).",
            "Para agregar un nuevo PDF (ejemplo: 'Catálogo de Servicios 2026' o un certificado nuevo), pulsa '+ Nuevo Documento PDF'.",
            "Coloca la URL directa del archivo PDF alojado en tu servidor web, Google Drive o nube pública.",
            "Haz clic en el enlace para probar que el PDF se descargue correctamente.",
          ]}
          tips="Para documentos de Google Drive, asegúrate de que el enlace tenga permisos de 'Cualquiera con el enlace puede ver'."
        />
      )}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-ink-900">Documentos y Recursos PDF ({documents.length})</h2>
          <p className="text-xs text-ink-500">Brochures, normatividad y formatos oficiales</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="btn btn-primary text-xs">
          <Plus className="size-4" /> Nuevo Documento PDF
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleSubmit} className="mb-6 rounded-lg bg-ink-50 p-4 border border-ink-200 space-y-3">
          <h3 className="font-bold text-sm text-ink-900">Registrar Nuevo Recurso Descargable PDF</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label className="label">Título del Documento</label>
              <input
                required
                className="field"
                placeholder="Ej. Brochure de Servicios Costa Afuera (Offshore)"
                value={newDoc.title}
                onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Categoría</label>
              <select
                className="field"
                value={newDoc.category}
                onChange={(e) => setNewDoc({ ...newDoc, category: e.target.value as DocumentCategory })}
              >
                <option value="brochure">Brochure / Folleto</option>
                <option value="accreditation">Acreditación Oficial (EMA / ISO)</option>
                <option value="format">Formato Descargable</option>
                <option value="official">Documento Legal</option>
              </select>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="label">URL Directa del PDF</label>
              <input
                required
                type="url"
                className="field font-mono text-xs"
                placeholder="https://www.imindustrial.mx/wp-content/uploads/.../archivo.pdf"
                value={newDoc.url}
                onChange={(e) => setNewDoc({ ...newDoc, url: e.target.value })}
              />
            </div>
            <div>
              <label className="label">Etiqueta / Badge (Opcional)</label>
              <input
                className="field"
                placeholder="Ej. NOM-093 o EMA 2026"
                value={newDoc.badge}
                onChange={(e) => setNewDoc({ ...newDoc, badge: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="label">Descripción Breve</label>
            <input
              className="field"
              placeholder="Explica qué contiene este documento y a quién va dirigido..."
              value={newDoc.description}
              onChange={(e) => setNewDoc({ ...newDoc, description: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setShowAdd(false)} className="btn btn-outline text-xs">Cancelar</button>
            <button type="submit" className="btn btn-primary text-xs">Guardar Documento</button>
          </div>
        </form>
      )}

      <div className="divide-y divide-ink-100 border rounded-lg overflow-hidden">
        {documents.map((doc) => (
          <div key={doc.id} className="p-4 bg-white hover:bg-ink-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 font-bold text-xs mt-0.5">
                PDF
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm text-ink-900">{doc.title.es}</h4>
                  {doc.badge && (
                    <span className="chip text-[10px] font-semibold text-brand-700 bg-brand-50">
                      {doc.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-500 mt-1">{doc.description.es}</p>
                <p className="text-[11px] font-mono text-ink-400 mt-1 break-all">{doc.url}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline min-h-9 px-3 text-xs"
              >
                <ExternalLink className="size-3.5" /> Abrir PDF
              </a>
              <button
                onClick={() => {
                  if (confirm(`¿Eliminar el documento "${doc.title.es}"?`)) onDeleteDocument(doc.id);
                }}
                className="text-ink-400 hover:text-red-600 p-2"
                title="Eliminar"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Módulo 7: Respaldo
function BackupModule({
  showTutorial,
  onExport,
  onImport,
  onReset,
}: {
  showTutorial: boolean;
  onExport: () => void;
  onImport: (json: string) => void;
  onReset: () => void;
}) {
  const [jsonText, setJsonText] = useState("");

  return (
    <div className="card p-6 sm:p-8 space-y-8">
      {showTutorial && (
        <TutorialBox
          title="Respaldo, Exportación y Restauración Total de Datos"
          whatIsIt="Esta herramienta te permite descargar un archivo de copia de seguridad con todos los cambios que hayas hecho en el sitio web (cursos, servicios, productos, teléfonos y documentos). También te permite restaurar una copia previa en cualquier momento o reiniciar a los datos de fábrica originales."
          howToUse={[
            "Haz clic en 'Descargar Respaldo JSON' antes de hacer modificaciones importantes para tener un respaldo seguro en tu computadora.",
            "Para restaurar un respaldo, abre tu archivo JSON, copia el texto y pégalo en la caja de importación, luego pulsa 'Cargar y Restaurar'.",
            "Si alguna vez quieres borrar todas las modificaciones y volver al estado inicial del sitio, usa 'Restablecer a Valores de Fábrica'.",
          ]}
          tips="Puedes guardar el archivo de respaldo en tu Google Drive o enviarlo a tu equipo técnico para documentar las versiones de tus catálogos."
        />
      )}

      <div>
        <h2 className="text-xl font-bold text-ink-900 mb-2">Descargar Copia de Seguridad</h2>
        <p className="text-sm text-ink-500 mb-4">
          Exporta todos los catálogos y configuraciones en un archivo ligero listo para respaldar.
        </p>
        <button onClick={onExport} className="btn btn-primary">
          <Download className="size-4" /> Descargar Respaldo JSON Completo
        </button>
      </div>

      <div className="pt-6 border-t border-ink-200">
        <h2 className="text-xl font-bold text-ink-900 mb-2">Restaurar Copia de Seguridad</h2>
        <p className="text-sm text-ink-500 mb-4">
          Pega el contenido de un archivo JSON de respaldo para aplicarlo de inmediato.
        </p>
        <textarea
          rows={4}
          className="field font-mono text-xs py-3"
          placeholder='Pega aquí el código JSON del respaldo (ej. {"company": {...}, "courses": [...]})'
          value={jsonText}
          onChange={(e) => setJsonText(e.target.value)}
        />
        <div className="mt-3 flex justify-end">
          <button
            onClick={() => {
              if (!jsonText.trim()) return alert("Por favor pega el texto JSON del respaldo");
              onImport(jsonText);
              setJsonText("");
            }}
            className="btn btn-outline"
          >
            <Upload className="size-4" /> Cargar y Restaurar Respaldo
          </button>
        </div>
      </div>

      <div className="pt-6 border-t border-ink-200">
        <h2 className="text-xl font-bold text-red-600 mb-2">Zona de Peligro: Reinicio de Fábrica</h2>
        <p className="text-sm text-ink-500 mb-4">
          Restaura la plataforma a los datos iniciales originales extraídos de https://www.imindustrial.mx/.
        </p>
        <button onClick={onReset} className="btn bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
          <RotateCcw className="size-4" /> Restablecer a Valores de Fábrica Originales
        </button>
      </div>
    </div>
  );
}
