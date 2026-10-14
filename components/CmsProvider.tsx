"use client";

import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import { company as defaultCompany, type Accreditation, accreditations as defaultAccreditations } from "@/data/company";
import { courses as defaultCourses, calendar as defaultCalendar, type Course } from "@/data/academy";
import { services as defaultServices, type Service } from "@/data/services";
import { products as defaultProducts, type Product } from "@/data/products";
import { locations as defaultLocations, type Location } from "@/data/locations";
import { documents as defaultDocuments, type PdfDocument } from "@/data/documents";

export type CmsState = {
  company: typeof defaultCompany;
  accreditations: Accreditation[];
  courses: Course[];
  calendar: typeof defaultCalendar;
  services: Service[];
  products: Product[];
  locations: Location[];
  documents: PdfDocument[];
  lastUpdated?: string;
};

const DEFAULT_STATE: CmsState = {
  company: defaultCompany,
  accreditations: defaultAccreditations,
  courses: defaultCourses,
  calendar: defaultCalendar,
  services: defaultServices,
  products: defaultProducts,
  locations: defaultLocations,
  documents: defaultDocuments,
};

const STORAGE_KEY = "imi_superadmin_cms_v1";

type CmsContextType = {
  state: CmsState;
  updateCompany: (patch: Partial<typeof defaultCompany>) => void;
  // Cursos
  addCourse: (course: Course) => void;
  updateCourse: (id: string, patch: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  // Calendario
  addCalendarEvent: (event: { courseId: string; date: string; city: string }) => void;
  deleteCalendarEvent: (index: number) => void;
  // Servicios
  addService: (service: Service) => void;
  updateService: (id: string, patch: Partial<Service>) => void;
  deleteService: (id: string) => void;
  // Productos
  addProduct: (product: Product) => void;
  updateProduct: (id: string, patch: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  // Ubicaciones
  addLocation: (loc: Location) => void;
  updateLocation: (id: string, patch: Partial<Location>) => void;
  deleteLocation: (id: string) => void;
  // Documentos PDF
  addDocument: (doc: PdfDocument) => void;
  updateDocument: (id: string, patch: Partial<PdfDocument>) => void;
  deleteDocument: (id: string) => void;
  // Utilidades
  resetToDefaults: () => void;
  importBackup: (jsonString: string) => boolean;
  exportBackup: () => string;
};

const CmsContext = createContext<CmsContextType | null>(null);

export function useCms() {
  const ctx = useContext(CmsContext);
  if (!ctx) throw new Error("useCms must be used within <CmsProvider>");
  return ctx;
}

export function CmsProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CmsState>(DEFAULT_STATE);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setState((prev) => ({
          ...prev,
          ...parsed,
          // Asegurar que si faltan colecciones nuevas como documents, se incluyan los defaults
          documents: parsed.documents || defaultDocuments,
        }));
      }
    } catch (e) {
      console.warn("Could not load CMS from storage:", e);
    }
  }, []);

  const save = useCallback((newState: CmsState) => {
    const withDate = { ...newState, lastUpdated: new Date().toISOString() };
    setState(withDate);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(withDate));
    } catch (e) {
      console.error("Failed to save CMS state:", e);
    }
  }, []);

  const updateCompany = useCallback((patch: Partial<typeof defaultCompany>) => {
    setState((prev) => {
      const next = { ...prev, company: { ...prev.company, ...patch } };
      save(next);
      return next;
    });
  }, [save]);

  // Cursos
  const addCourse = useCallback((course: Course) => {
    setState((prev) => {
      const next = { ...prev, courses: [course, ...prev.courses] };
      save(next);
      return next;
    });
  }, [save]);

  const updateCourse = useCallback((id: string, patch: Partial<Course>) => {
    setState((prev) => {
      const next = {
        ...prev,
        courses: prev.courses.map((c) => (c.id === id ? { ...c, ...patch } : c)),
      };
      save(next);
      return next;
    });
  }, [save]);

  const deleteCourse = useCallback((id: string) => {
    setState((prev) => {
      const next = { ...prev, courses: prev.courses.filter((c) => c.id !== id) };
      save(next);
      return next;
    });
  }, [save]);

  // Calendario
  const addCalendarEvent = useCallback((event: { courseId: string; date: string; city: string }) => {
    setState((prev) => {
      const next = { ...prev, calendar: [...prev.calendar, event] };
      save(next);
      return next;
    });
  }, [save]);

  const deleteCalendarEvent = useCallback((index: number) => {
    setState((prev) => {
      const next = { ...prev, calendar: prev.calendar.filter((_, i) => i !== index) };
      save(next);
      return next;
    });
  }, [save]);

  // Servicios
  const addService = useCallback((service: Service) => {
    setState((prev) => {
      const next = { ...prev, services: [...prev.services, service] };
      save(next);
      return next;
    });
  }, [save]);

  const updateService = useCallback((id: string, patch: Partial<Service>) => {
    setState((prev) => {
      const next = {
        ...prev,
        services: prev.services.map((s) => (s.id === id ? { ...s, ...patch } : s)),
      };
      save(next);
      return next;
    });
  }, [save]);

  const deleteService = useCallback((id: string) => {
    setState((prev) => {
      const next = { ...prev, services: prev.services.filter((s) => s.id !== id) };
      save(next);
      return next;
    });
  }, [save]);

  // Productos
  const addProduct = useCallback((product: Product) => {
    setState((prev) => {
      const next = { ...prev, products: [product, ...prev.products] };
      save(next);
      return next;
    });
  }, [save]);

  const updateProduct = useCallback((id: string, patch: Partial<Product>) => {
    setState((prev) => {
      const next = {
        ...prev,
        products: prev.products.map((p) => (p.id === id ? { ...p, ...patch } : p)),
      };
      save(next);
      return next;
    });
  }, [save]);

  const deleteProduct = useCallback((id: string) => {
    setState((prev) => {
      const next = { ...prev, products: prev.products.filter((p) => p.id !== id) };
      save(next);
      return next;
    });
  }, [save]);

  // Ubicaciones
  const addLocation = useCallback((loc: Location) => {
    setState((prev) => {
      const next = { ...prev, locations: [...prev.locations, loc] };
      save(next);
      return next;
    });
  }, [save]);

  const updateLocation = useCallback((id: string, patch: Partial<Location>) => {
    setState((prev) => {
      const next = {
        ...prev,
        locations: prev.locations.map((l) => (l.id === id ? { ...l, ...patch } : l)),
      };
      save(next);
      return next;
    });
  }, [save]);

  const deleteLocation = useCallback((id: string) => {
    setState((prev) => {
      const next = { ...prev, locations: prev.locations.filter((l) => l.id !== id) };
      save(next);
      return next;
    });
  }, [save]);

  // Documentos PDF
  const addDocument = useCallback((doc: PdfDocument) => {
    setState((prev) => {
      const next = { ...prev, documents: [doc, ...prev.documents] };
      save(next);
      return next;
    });
  }, [save]);

  const updateDocument = useCallback((id: string, patch: Partial<PdfDocument>) => {
    setState((prev) => {
      const next = {
        ...prev,
        documents: prev.documents.map((d) => (d.id === id ? { ...d, ...patch } : d)),
      };
      save(next);
      return next;
    });
  }, [save]);

  const deleteDocument = useCallback((id: string) => {
    setState((prev) => {
      const next = { ...prev, documents: prev.documents.filter((d) => d.id !== id) };
      save(next);
      return next;
    });
  }, [save]);

  // Reseteo y backup
  const resetToDefaults = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState(DEFAULT_STATE);
  }, []);

  const exportBackup = useCallback(() => {
    return JSON.stringify(state, null, 2);
  }, [state]);

  const importBackup = useCallback((jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === "object") {
        save(parsed);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, [save]);

  const contextValue = useMemo<CmsContextType>(
    () => ({
      state,
      updateCompany,
      addCourse,
      updateCourse,
      deleteCourse,
      addCalendarEvent,
      deleteCalendarEvent,
      addService,
      updateService,
      deleteService,
      addProduct,
      updateProduct,
      deleteProduct,
      addLocation,
      updateLocation,
      deleteLocation,
      addDocument,
      updateDocument,
      deleteDocument,
      resetToDefaults,
      importBackup,
      exportBackup,
    }),
    [
      state,
      updateCompany,
      addCourse,
      updateCourse,
      deleteCourse,
      addCalendarEvent,
      deleteCalendarEvent,
      addService,
      updateService,
      deleteService,
      addProduct,
      updateProduct,
      deleteProduct,
      addLocation,
      updateLocation,
      deleteLocation,
      addDocument,
      updateDocument,
      deleteDocument,
      resetToDefaults,
      importBackup,
      exportBackup,
    ],
  );

  return <CmsContext.Provider value={contextValue}>{children}</CmsContext.Provider>;
}
