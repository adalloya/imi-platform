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
        className="fixed right-4 bottom-4 z-40 flex h-13 items-center gap-2.5 rounded-full bg-brand-700 px-5 font-bold text-white shadow-[0_10px_30px_-6px_rgba(2,86,178,0.55)] ring-2 ring-white transition-all hover:bg-brand-800 active:scale-95 cursor-pointer"
        aria-label={t.sos.button}
      >
        <span className="relative flex items-center justify-center">
          <Headset className="size-5" />
          <span className="absolute -top-1 -right-1 flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </span>
        </span>
        <span className="text-sm tracking-wide font-semibold">{t.sos.button}</span>
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
