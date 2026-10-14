"use client";

import { useState } from "react";
import { Headset } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { Modal } from "./Modal";
import { useI18n } from "./Providers";

/** Contactar a un Experto: botón flotante permanente de atención técnica especializada. */
export function SOSButton() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        id="sos-plant-down"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-[72px] sm:bottom-20 z-40 flex h-11 sm:h-12 items-center gap-2 rounded-full bg-ink-900/95 backdrop-blur-md px-3.5 sm:px-4 font-semibold text-white shadow-lg ring-1 ring-white/20 transition-all hover:bg-ink-800 active:scale-95 cursor-pointer text-xs sm:text-sm"
        aria-label={t.sos.button}
      >
        <Headset className="size-4 sm:size-4.5 text-brand-300" />
        <span className="tracking-wide">{t.sos.button}</span>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title={t.sos.title}>
        <p className="mb-5 text-sm text-ink-600">{t.sos.desc}</p>
        <LeadForm
          id="sos-form"
          type="SOS"
          tone="primary"
          submitLabel={t.sos.send}
          fields={[
            { name: "plant", label: t.sos.plant, required: true },
            { name: "location", label: t.sos.location, required: true },
            { name: "equipment", label: t.sos.equipment },
            { name: "issue", label: t.sos.issue, type: "textarea", required: true },
            { name: "name", label: t.common.name, required: true },
            { name: "phone", label: t.common.phone, type: "tel", required: true },
          ]}
        />
      </Modal>
    </>
  );
}
