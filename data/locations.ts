/**
 * Directorio exhaustivo de ubicaciones, migrado de https://www.imindustrial.mx/
 * Incluye coordenadas geográficas para el mapa interactivo de México y EE. UU.
 */
export type Location = {
  id: string;
  type: "hq" | "branch" | "pos";
  name: string;
  shortName: string;
  address?: string;
  phone?: string;
  country: "MX" | "PE" | "US";
  lat: number;
  lng: number;
  region: string;
  specialty: string;
};

export const locations: Location[] = [
  {
    id: "altamira",
    type: "hq",
    name: "Laboratorio Central & Matriz (Tampico, Altamira)",
    shortName: "Altamira / Tampico (HQ)",
    address: "Av. de la Industria KM 14.5 Laguna de la Puerta, 89603 Altamira, Tamps.",
    phone: "8331550189",
    country: "MX",
    lat: 22.3923,
    lng: -97.9372,
    region: "Tamaulipas, México",
    specialty: "Laboratorio Central Acreditado NMX-EC-17025-IMNC-2018 y Oficinas Generales",
  },
  {
    id: "madero",
    type: "branch",
    name: "Cd. Madero, Tamps.",
    shortName: "Cd. Madero",
    address: "Playa Pacífica 106, Las Dunas, 89506 Cd. Madero, Tamps.",
    country: "MX",
    lat: 22.2764,
    lng: -97.8317,
    region: "Tamaulipas, México",
    specialty: "Sucursal Operativa, Soporte a Refinería Madero y Calibración In-Situ",
  },
  {
    id: "carmen",
    type: "branch",
    name: "Cd. del Carmen, Camp.",
    shortName: "Cd. del Carmen",
    address: "Av. Aviación #150, Tacubaya, 24180 Cd. del Carmen, Camp.",
    country: "MX",
    lat: 18.6496,
    lng: -91.8217,
    region: "Campeche, México",
    specialty: "Base Operativa Costa Afuera, Sonda de Campeche y Plataformas Marinas",
  },
  {
    id: "houston",
    type: "pos",
    name: "Houston, Texas, EE. UU.",
    shortName: "Houston, TX",
    address: "Energy Corridor, Houston, TX, United States",
    country: "US",
    lat: 29.7604,
    lng: -95.3698,
    region: "Texas, United States",
    specialty: "Punto de Enlace Internacional, Suministro de Equipos & Procura Especializada",
  },
  {
    id: "tijuana",
    type: "pos",
    name: "Tijuana, B.C.N.",
    shortName: "Tijuana",
    address: "Zona Industrial Otay / El Florido, Tijuana, B.C.",
    country: "MX",
    lat: 32.5149,
    lng: -117.0382,
    region: "Baja California, México",
    specialty: "Atención a Industria Maquiladora, Médica y Electrónica Fronteriza",
  },
  {
    id: "hermosillo",
    type: "pos",
    name: "Hermosillo, Son.",
    shortName: "Hermosillo",
    address: "Parque Industrial Hermosillo, Sonora",
    country: "MX",
    lat: 29.0729,
    lng: -110.9559,
    region: "Sonora, México",
    specialty: "Soporte Técnico a Industria Minera, Metalúrgica y Generación en el Noroeste",
  },
  {
    id: "cadereyta",
    type: "pos",
    name: "Cadereyta, N.L.",
    shortName: "Cadereyta",
    address: "Zona Industrial Cadereyta Jiménez, N.L.",
    country: "MX",
    lat: 25.5898,
    lng: -99.9934,
    region: "Nuevo León, México",
    specialty: "Refinería Ing. Héctor R. Lara Sosa, Complejos Industriales de Monterrey",
  },
  {
    id: "queretaro",
    type: "pos",
    name: "Querétaro, Qro.",
    shortName: "Querétaro",
    address: "Parque Industrial Benito Juárez / El Marqués, Querétaro",
    country: "MX",
    lat: 20.5888,
    lng: -100.3899,
    region: "Querétaro, México",
    specialty: "Corredor del Bajío: Aeroespacial, Automotriz y Procesos Químicos",
  },
  {
    id: "cuautitlan",
    type: "pos",
    name: "Cuautitlán Izcalli, Estado de México",
    shortName: "Cuautitlán Izcalli",
    address: "Zona Industrial Cuautitlán Izcalli, Edo. Méx.",
    country: "MX",
    lat: 19.6732,
    lng: -99.2154,
    region: "Estado de México, México",
    specialty: "Centro del País: Industria Farmacéutica, Alimentos y Manufactura Pesada",
  },
  {
    id: "morelia",
    type: "pos",
    name: "Morelia, Mich.",
    shortName: "Morelia",
    address: "Zona Metropolitana Morelia, Michoacán",
    country: "MX",
    lat: 19.706,
    lng: -101.195,
    region: "Michoacán, México",
    specialty: "Atención Región Centro-Occidente y Plantas de Generación Eléctrica",
  },
  {
    id: "coatzacoalcos",
    type: "pos",
    name: "Coatzacoalcos, Ver.",
    shortName: "Coatzacoalcos",
    address: "Corredor Industrial Cangrejera / Morelos / Pajaritos, Coatzacoalcos, Ver.",
    country: "MX",
    lat: 18.1518,
    lng: -94.4377,
    region: "Veracruz, México",
    specialty: "Polo Petroquímico Nacional y Terminales Marítimas de Hidrocarburos",
  },
  {
    id: "lima",
    type: "pos",
    name: "Lima, Perú",
    shortName: "Lima, Perú",
    address: "Centro Empresarial San Isidro / Callao, Lima, Perú",
    country: "PE",
    lat: -12.0464,
    lng: -77.0428,
    region: "Lima, Perú",
    specialty: "Punto de Enlace Comercial y Cobertura Técnica en Sudamérica",
  },
];

export function mapsUrl(q: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
