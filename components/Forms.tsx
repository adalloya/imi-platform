"use client";

import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import { courses } from "@/data/academy";
import { services } from "@/data/services";
import { tr } from "@/lib/i18n";
import { LeadForm } from "./LeadForm";
import { Modal } from "./Modal";
import { useI18n } from "./Providers";

/** Botón "Solicitar este servicio" → modal → WhatsApp */
export function ServiceRequestButton({ serviceId, label }: { serviceId: string; label: string }) {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const s = services.find((x) => x.id === serviceId)!;
  return (
    <>
      <button id={`svc-${serviceId}`} onClick={() => setOpen(true)} className="flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
        <MessageSquare className="size-4" /> {label}
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title={tr(s.name, locale)}>
        <LeadForm
          id={`svc-form-${serviceId}`}
          type="SERVICE"
          extra={{ Servicio: tr(s.name, "es") }}
          fields={[
            { name: "name", label: t.common.name, required: true },
            { name: "company", label: t.common.company, required: true },
            { name: "city", label: t.common.city },
            { name: "message", label: t.common.message, type: "textarea" },
          ]}
        />
      </Modal>
    </>
  );
}

/** Formulario de contacto / cotización express */
export function ContactForm() {
  const { locale, t } = useI18n();
  const [isCourse, setIsCourse] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- tipo inicial desde la URL
    setIsCourse(new URLSearchParams(window.location.search).get("tipo") === "curso");
  }, []);

  const serviceOptions = isCourse
    ? courses.map((c) => tr(c.name, locale))
    : [...services.map((s) => tr(s.name, locale)), t.nav.store, t.nav.academy];

  return (
    <LeadForm
      key={String(isCourse)}
      id="contact-form"
      type={isCourse ? "COURSE" : "QUOTE"}
      fields={[
        { name: "name", label: t.common.name, required: true },
        { name: "company", label: t.common.company, required: true },
        { name: "phone", label: t.common.phone, type: "tel" },
        { name: "email", label: t.common.email, type: "email" },
        { name: "city", label: t.common.city },
        { name: "service", label: isCourse ? t.academy.course : t.common.service, type: "select", options: serviceOptions },
        { name: "message", label: t.common.message, type: "textarea" },
      ]}
    />
  );
}
