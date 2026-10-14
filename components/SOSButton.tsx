"use client";

import { useState } from "react";
import { Siren } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { Modal } from "./Modal";
import { useI18n } from "./Providers";

/** IMI SOS Plant Down: botón flotante permanente. */
export function SOSButton() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        id="sos-plant-down"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-40 flex h-14 items-center gap-2 rounded-full bg-safety-500 pr-5 pl-4 font-bold text-white shadow-[0_10px_30px_-8px_rgba(242,107,29,0.7)] ring-4 ring-white transition-transform hover:scale-[1.03] hover:bg-safety-600 active:scale-95"
        aria-label={t.sos.button}
      >
        <span className="relative flex size-7 items-center justify-center">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/40" />
          <Siren className="relative size-5" />
        </span>
        <span className="text-sm">{t.sos.button}</span>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title={t.sos.title} tone="danger">
        <p className="mb-5 text-sm text-ink-600">{t.sos.desc}</p>
        <LeadForm
          id="sos-form"
          type="SOS"
          tone="safety"
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
