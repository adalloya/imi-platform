/**
 * Directorio exhaustivo de ubicaciones, migrado de https://www.imindustrial.mx/
 */
export type Location = {
  id: string;
  type: "hq" | "branch" | "pos";
  name: string;
  address?: string;
  phone?: string;
  country: "MX" | "PE" | "US";
};

export const locations: Location[] = [
  { id: "altamira", type: "hq", name: "Laboratorio y Oficinas (Tampico, Madero)",
    address: "Av. de la Industria KM 14.5 Laguna de la Puerta, 89603 Altamira, Tamps.", phone: "8331550189", country: "MX" },
  { id: "madero", type: "branch", name: "Cd. Madero, Tamps.",
    address: "Playa Pacífica 106, Las Dunas, 89506 Cd. Madero, Tamps.", country: "MX" },
  { id: "carmen", type: "branch", name: "Cd. del Carmen, Camp.",
    address: "Av. Aviación #150, Tacubaya, 24180 Cd. del Carmen, Camp.", country: "MX" },
  { id: "coatzacoalcos", type: "pos", name: "Coatzacoalcos, Ver.", country: "MX" },
  { id: "cuautitlan", type: "pos", name: "Cuautitlán Izcalli, Estado de México", country: "MX" },
  { id: "hermosillo", type: "pos", name: "Hermosillo, Son.", country: "MX" },
  { id: "morelia", type: "pos", name: "Morelia, Mich.", country: "MX" },
  { id: "cadereyta", type: "pos", name: "Cadereyta, N.L.", country: "MX" },
  { id: "carmen-pos", type: "pos", name: "Ciudad del Carmen, Camp.", country: "MX" },
  { id: "tijuana", type: "pos", name: "Tijuana, B.C.N.", country: "MX" },
  { id: "queretaro", type: "pos", name: "Querétaro, Qro.", country: "MX" },
  { id: "lima", type: "pos", name: "Lima, Perú", country: "PE" },
  { id: "houston", type: "pos", name: "Houston, Texas, EE. UU.", country: "US" },
];

export function mapsUrl(q: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
