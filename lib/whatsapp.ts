import { WHATSAPP_NUMBER } from "@/data/company";

export type LeadType = "QUOTE" | "RENT" | "COURSE" | "SOS" | "CONTACT" | "SERVICE";

const HEADERS: Record<LeadType, string> = {
  QUOTE: "COTIZACIÓN EXPRESS",
  RENT: "SOLICITUD DE RENTA",
  COURSE: "INSCRIPCIÓN IMI ACADEMY",
  SOS: "*** SOS PLANT DOWN - PARO DE PLANTA ***",
  CONTACT: "CONTACTO GENERAL",
  SERVICE: "SOLICITUD DE SERVICIO",
};

/**
 * Construye un enlace wa.me con un mensaje estructurado y precargado.
 * Ningún lead se almacena: todo se enruta directo a WhatsApp Business de IMI.
 */
export function buildWaLink(
  type: LeadType,
  fields: Record<string, string | number | undefined | null>,
  items?: string[],
): string {
  const lines: string[] = [`[IMI] ${HEADERS[type]}`, ""];
  for (const [k, v] of Object.entries(fields)) {
    if (v !== undefined && v !== null && String(v).trim() !== "") lines.push(`- ${k}: ${v}`);
  }
  if (items && items.length) {
    lines.push("", "Partidas:");
    items.forEach((it, i) => lines.push(`${i + 1}. ${it}`));
  }
  lines.push("", "Enviado desde imindustrial.mx");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
