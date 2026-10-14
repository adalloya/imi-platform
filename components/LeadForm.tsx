"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { buildWaLink, type LeadType } from "@/lib/whatsapp";
import { useI18n } from "./Providers";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "tel" | "email" | "number" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  defaultValue?: string;
};

/**
 * Formulario genérico: no almacena nada, construye el mensaje y abre WhatsApp.
 */
export function LeadForm({
  type,
  fields,
  submitLabel,
  extra,
  tone = "primary",
  id,
}: {
  type: LeadType;
  fields: FieldDef[];
  submitLabel?: string;
  extra?: Record<string, string>;
  tone?: "primary" | "safety";
  id: string;
}) {
  const { t } = useI18n();
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((f) => [f.name, f.defaultValue ?? ""])),
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload: Record<string, string> = { ...extra };
    fields.forEach((f) => (payload[f.label] = values[f.name]));
    window.open(buildWaLink(type, payload), "_blank", "noopener,noreferrer");
  }

  return (
    <form id={id} onSubmit={onSubmit} className="space-y-4">
      {fields.map((f) => {
        const common = {
          id: `${id}-${f.name}`,
          name: f.name,
          required: f.required,
          value: values[f.name],
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
            setValues((v) => ({ ...v, [f.name]: e.target.value })),
        };
        return (
          <div key={f.name}>
            <label htmlFor={common.id} className="label">
              {f.label} {f.required && <span className="text-safety-600">*</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea {...common} rows={3} className="field py-3" />
            ) : f.type === "select" ? (
              <select {...common} className="field">
                <option value="">—</option>
                {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : (
              <input {...common} type={f.type ?? "text"} className="field" inputMode={f.type === "tel" ? "tel" : undefined} />
            )}
          </div>
        );
      })}
      <button type="submit" className={`btn w-full ${tone === "safety" ? "btn-safety" : "btn-primary"}`}>
        <Send className="size-4" /> {submitLabel ?? t.common.sendWhatsapp}
      </button>
      <p className="text-xs text-ink-500">{t.common.privacy}</p>
    </form>
  );
}
