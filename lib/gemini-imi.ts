/**
 * Cerebro Especializado: Adal · Ingeniero Senior y Consultor Técnico de IMI
 * Base de conocimiento integral de Instrumentación y Metrología Industrial S.R.L. de C.V.
 */

export const IMI_KNOWLEDGE_BASE = {
  company: {
    legalName: "Instrumentación y Metrología Industrial S.R.L. de C.V.",
    shortName: "IMI",
    consultantName: "Adal",
    consultantTitle: "Ingeniero Senior y Consultor Técnico de IMI",
    website: "https://www.imindustrial.mx/",
    email: "contacto@imindustrial.mx",
    whatsapp: "+52 833 155 0189",
    whatsappRaw: "528331550189",
    phone: "(833) 126.9795",
    hqAddress: "Av. de la Industria KM 14.5 Laguna de la Puerta, 89603 Altamira, Tamaulipas, México",
    giro: "Laboratorio de Metrología y Calibración Acreditado ISO/IEC 17025, Mantenimiento y Calibración de Válvulas de Seguridad PSV (NOM-093-SCFI), Venta y Renta de Instrumentación de Proceso, Capacitación Técnica Oficial (STPS / CONOCER) y Cuadrillas Técnicas Especializadas.",
  },
  accreditations: [
    {
      code: "NMX-EC-17025-IMNC-2018",
      authority: "ISO/IEC 17025 / EMA",
      desc: "Laboratorio de calibración conforme a norma con cálculo de incertidumbre expandida y patrones trazables a CENAM / NIST.",
    },
    {
      code: "NOM-093-SCFI-1994 / 2020",
      authority: "SCFI",
      desc: "Calibración, inspección, prueba de disparo (pop test), lapeado y mantenimiento de Válvulas de Seguridad y Alivio (PSV).",
    },
    {
      code: "IMI150311QL2-0013",
      authority: "STPS",
      desc: "Registro oficial como Agente Capacitador Externo ante la Secretaría del Trabajo y Previsión Social con emisión de Constancias Formato DC-3.",
    },
    {
      code: "EC0217",
      authority: "CONOCER · SEP",
      desc: "Estándar de competencia para impartición de cursos de formación del capital humano.",
    },
  ],
  products: [
    {
      name: "Manómetros Industriales Marca IMI",
      mode: "Venta",
      specs: "Fabricados en acero inoxidable 316, conexiones 1/4\" y 1/2\" NPT, rangos desde vacío (-30 inHg) hasta 15,000 psi, opciones secos o con glicerina.",
    },
    {
      name: "Calibradores Documentadores de Proceso y Presión",
      mode: "Venta y Renta",
      specs: "Compatibles con protocolo HART, registro automático de calibraciones conforme a ISO 9001 / ISO 17025.",
    },
    {
      name: "Calibradores de Lazo de Corriente 4-20 mA",
      mode: "Venta y Renta",
      specs: "Generación, simulación y medición de corriente con precisión de 0.01% y alimentación de bucle de 24 V.",
    },
    {
      name: "Bloques Secos de Temperatura",
      mode: "Venta y Renta",
      specs: "Rango amplio de -25 °C a 660 °C, alta estabilidad térmica para termopares y sondas RTD Pt100.",
    },
    {
      name: "Balanzas de Pesos Muertos",
      mode: "Venta y Renta",
      specs: "Patrón primario hidráulico y neumático de alta precisión (hasta 15,000 psi) con juego de pesas certificadas.",
    },
    {
      name: "Comunicadores de Campo Inteligentes HART / Foundation Fieldbus",
      mode: "Venta y Renta",
      specs: "Diagnóstico, configuración y calibración de transmisores inteligentes de todas las marcas industriales.",
    },
  ],
  services: [
    {
      name: "Calibración Acreditada en Presión y Flujo",
      specs: "Coriolis másicos, magnéticos, vórtex, placas de orificio, transmisores y manómetros con trazabilidad CENAM/NIST.",
    },
    {
      name: "Mantenimiento y Calibración de Válvulas PSV (NOM-093)",
      specs: "Lapeado de precisión de toberas y discos con placas ópticas, calibración de set pressure y dictamen técnico oficial.",
    },
    {
      name: "Calibración In-Situ y Paros de Planta",
      specs: "Unidades móviles con patrones certificados y cuadrillas de instrumentistas 24/7.",
    },
  ],
  rentalTerms:
    "Contamos con stock inmediato para venta y esquemas flexibles de renta (por semana o por mes) con certificado de calibración vigente incluido en todos los equipos.",
};

export const IMI_SYSTEM_PROMPT = `
Eres Adal, Ingeniero Senior y Consultor Técnico de Instrumentación y Metrología Industrial S.R.L. de C.V. (IMI).
Te encuentras asesorando en vivo a un cliente técnico o directivo de planta (ingeniero de instrumentación, jefe de mantenimiento, compras o calidad).

TU OBJETIVO PRINCIPAL:
1. Brindar asesoría técnica de primer nivel, resolviendo a fondo las dudas del cliente antes de hablar de trámites comerciales.
2. Capturar los datos del lead de forma natural y conversacional:
   - Nombre de contacto
   - Empresa / Planta y Ciudad
   - Teléfono o WhatsApp de contacto
   - Detalles técnicos del requerimiento (tipo de equipo, fluidos, diámetros, rangos, fechas requeridas)
3. Solo cuando se hayan recabado los datos del lead (o si el usuario pide explícitamente cotización final o contacto telefónico), ofrecer la transición a WhatsApp para enviar la propuesta formal detallada.

REGLAS DE INTERACCIÓN HUMANA Y CONSULTIVA:
- Eres 100% humano, experimentado, profesional, empático y respetuoso. NUNCA digas que eres una inteligencia artificial, un modelo o un bot.
- Habla en primera persona ("Soy Adal", "en nuestro taller revisamos...", "te recomiendo...", "con gusto te asesoro").
- TURNO 1 (Inicio): Explica la solución técnica a detalle (normativas aplicables como ISO/IEC 17025 o NOM-093-SCFI, tolerancias, especificaciones, métodos). NUNCA envíes enlaces de WhatsApp en el turno 1. Al final de tu explicación, realiza una pregunta sobre su aplicación técnica y pregunta amablemente: "¿Con quién tengo el gusto y de qué empresa o planta nos visitas para poder registrar tu proyecto?"
- TURNO 2 (Calificación de Lead): Si el usuario te da su nombre o empresa, dale la bienvenida con su nombre ("Mucho gusto, Ing. [Nombre] de [Empresa]"), complementa la respuesta técnica y pídele amablemente su número de teléfono o WhatsApp para enviarle la propuesta formal o ficha técnica.
- TURNO 3 O AL COMPLETAR EL LEAD: Si ya cuentas con Nombre, Empresa y Requerimiento (o teléfono), haz un breve resumen del alcance técnico y ofrece formalmente:
  "Excelente, Ing. [Nombre]. Tengo listo tu requerimiento para [Empresa]. ¿Te parece bien si te enviamos la propuesta formal con costos y tiempos de entrega directos a tu WhatsApp?"
  Y coloca el enlace al final:
  [Continuar Cotización con Adal por WhatsApp](https://wa.me/528331550189?text=Hola%20Adal%2C%20soy%20...) con los datos del lead precargados.
- SI EL CLIENTE PIDE EXPLÍCITAMENTE WHATSAPP O TELÉFONO: Dáselo de inmediato con total amabilidad.
`.trim();

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type LeadInfo = {
  name?: string;
  company?: string;
  phone?: string;
  topic?: string;
  details?: string;
};

/**
 * Extrae datos del lead (nombre, empresa, teléfono) a partir del historial de mensajes
 */
export function extractLeadInfo(messages: ChatMessage[]): LeadInfo {
  const lead: LeadInfo = {};
  const stopWordsCompany = new Set([
    "flujo", "presion", "presión", "temperatura", "nivel", "valvula", "válvula",
    "valvulas", "válvulas", "psv", "calibracion", "calibración", "equipo", "equipos",
    "manometro", "manómetro", "manometros", "manómetros", "laboratorio", "campo",
    "planta", "taller", "curso", "cursos", "imi", "mi", "una", "un", "la", "el", "este"
  ]);

  for (const m of messages) {
    if (m.role !== "user") continue;
    const txt = m.content.trim();

    // 1. Teléfono (10 dígitos o común con lada)
    if (!lead.phone) {
      const phoneMatch = txt.match(/\b(?:\+?52\s?)?(?:\d{2,3}[-.\s]?)?\d{3,4}[-.\s]?\d{4}\b/);
      if (phoneMatch && phoneMatch[0].replace(/\D/g, "").length >= 8) {
        lead.phone = phoneMatch[0].trim();
      }
    }

    // 2. Nombre: "Soy el Ing. Carlos de Pemex", "Me llamo Roberto", "Mi nombre es Laura"
    if (!lead.name) {
      const nameMatch = txt.match(
        /(?:soy|me llamo|mi nombre es)\s+(?:el\s+ing\.?\s+|ing\.?\s+|lic\.?\s+)?([A-ZÁÉÍÓÚa-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚa-záéíóúñ]+)?)(?:\s+(?:de|en|del|y|con|\.|\,)\b|$)/i
      );
      if (nameMatch && nameMatch[1]) {
        const candidate = nameMatch[1].trim();
        if (!stopWordsCompany.has(candidate.toLowerCase()) && candidate.length > 2) {
          lead.name = candidate;
        }
      }
    }

    // 3. Empresa: "de Pemex Madero", "en Braskem Idesa", "empresa Iberdrola", "planta Altamira"
    if (!lead.company) {
      const compMatch = txt.match(
        /(?:de|en|empresa|planta)\s+([A-ZÁÉÍÓÚ0-9][A-ZÁÉÍÓÚa-záéíóúñ0-9]+(?:\s+[A-ZÁÉÍÓÚa-záéíóúñ0-9]+)?)/i
      );
      if (compMatch && compMatch[1]) {
        const candidate = compMatch[1].trim();
        const firstWord = candidate.toLowerCase().split(" ")[0];
        if (!stopWordsCompany.has(firstWord) && candidate.length > 2) {
          lead.company = candidate;
        }
      }
    }
  }

  return lead;
}

/**
 * Motor local conversacional humano de Adal.
 * Cumple rigurosamente el proceso:
 * 1. Resuelve la duda técnica a profundidad.
 * 2. Pide datos del lead (nombre, empresa, teléfono).
 * 3. Solo ofrece WhatsApp cuando ya hay datos o a partir de suficiente interacción.
 */
export function getImiLocalResponse(messages: ChatMessage[]): string {
  const userMessages = messages.filter((m) => m.role === "user");
  const turn = userMessages.length;
  const lastUserMsg = userMessages[userMessages.length - 1]?.content || "";
  const q = lastUserMsg.toLowerCase();
  const allText = userMessages.map((m) => m.content.toLowerCase()).join(" ");

  const lead = extractLeadInfo(messages);
  const waBase = "https://wa.me/528331550189?text=";

  const clientGreeting = lead.name ? `Ing. ${lead.name}` : "estimado colega";
  const companyMention = lead.company ? ` para ${lead.company}` : "";

  // Si el usuario pide explícitamente WhatsApp o contacto telefónico
  const explicitWaRequest =
    q.includes("whatsapp") ||
    q.includes("whats") ||
    q.includes("dame tu contacto") ||
    q.includes("pasar a whatsapp") ||
    q.includes("hablar por whatsapp") ||
    q.includes("pásame tu teléfono") ||
    q.includes("dame tu teléfono") ||
    q.includes("dame tu numero") ||
    q.includes("dame tu número");

  if (explicitWaRequest) {
    const leadText = encodeURIComponent(
      `Hola Adal, ${lead.name ? `soy ${lead.name}` : "te contacto desde la web"}${lead.company ? ` de ${lead.company}` : ""}. Me interesa cotizar servicios de instrumentación: ${lastUserMsg.slice(0, 100)}`
    );
    return `Con mucho gusto, ${clientGreeting}. Puedes comunicarte directamente a mi WhatsApp oficial o con nuestro ingeniero de guardia:\n\n[Contactar a Adal por WhatsApp](${waBase}${leadText})\n\nTambién me puedes marcar directamente al **(833) 126.9795**. Si gustas, déjame aquí tu requerimiento o número telefónico y te mandamos la ficha técnica de inmediato.`;
  }

  // Identificar el tema técnico principal
  const isFlowLab =
    allText.includes("flujo") ||
    allText.includes("coriolis") ||
    allText.includes("vortex") ||
    allText.includes("vórtex") ||
    allText.includes("calibrar") ||
    allText.includes("laboratorio") ||
    allText.includes("iso 17025") ||
    allText.includes("ema");

  const isPsv =
    allText.includes("valvula") ||
    allText.includes("válvula") ||
    allText.includes("psv") ||
    allText.includes("nom-093") ||
    allText.includes("alivio") ||
    allText.includes("seguridad") ||
    allText.includes("pop test");

  const isStore =
    allText.includes("manometro") ||
    allText.includes("manómetro") ||
    allText.includes("renta") ||
    allText.includes("venta") ||
    allText.includes("equipo") ||
    allText.includes("calibrador") ||
    allText.includes("bloque") ||
    allText.includes("balanza") ||
    allText.includes("hart");

  const isAcademy =
    allText.includes("curso") ||
    allText.includes("capacitacion") ||
    allText.includes("capacitación") ||
    allText.includes("dc-3") ||
    allText.includes("dc3") ||
    allText.includes("academy") ||
    allText.includes("stps");

  // ETAPA 1: PRIMER TURNO (Asesoría Técnica a Fondo + Solicitud de Lead)
  if (turn <= 1) {
    if (isPsv) {
      return `¡Qué tal! Con mucho gusto te asesoro. En el mantenimiento e inspección de **Válvulas de Seguridad y Alivio (PSV)** trabajamos con estricto apego a la norma oficial **NOM-093-SCFI-2020** y código ASME Secc. I y VIII:

1. **Prueba de Disparo Inicial (*Pop Test*):** Verificamos la presión de apertura real y hermeticidad en banco de pruebas certificado.
2. **Desarme y Lapeado de Precisión:** Lapeamos toberas y discos con pastas diamantadas de grano fino y verificamos planicidad absoluta con placas ópticas de luz monocromática (bandas de helio).
3. **Calibración y Dictamen Oficial:** Ajustamos a la presión de seteo requerida, colocamos precinto de seguridad fechado y emitimos el informe técnico con validez para auditorías de STPS, ASEA o aseguradoras.
4. **Modalidades:** En nuestro taller central especializado o en sitio durante paros de planta con banco móvil.

Para dimensionar el servicio: ¿cuántas válvulas tienen contempladas para calibración, qué presiones o diámetros manejan, y con quién tengo el gusto y de qué empresa o planta nos contactas?`;
    }

    if (isFlowLab) {
      return `¡Hola! Con gusto te explico los alcances de nuestro laboratorio. Contamos con acreditación conforme a la norma **NMX-EC-17025-IMNC-2018 (ISO/IEC 17025)** con cálculo de incertidumbre expandida y trazabilidad directa a patrones primarios CENAM y NIST.

Cubrimos:
- **Flujómetros Másicos Coriolis, Magnéticos, Vórtex y Turbinas:** Calibración por método de comparación directa con medidor maestro y gravimétrico.
- **Presión y Presión Diferencial:** Transmisores SMART (HART/Fieldbus), manómetros patrón y balanzas de pesos muertos.
- **Temperatura:** Termopares, sondas RTD Pt100 y transmisores de proceso.
- **Entregables:** Certificado de calibración oficial con holograma de trazabilidad, curva de error y cálculo de incertidumbre.

Podemos recibir sus instrumentos en nuestro laboratorio o coordinar cuadrilla en planta. ¿Qué tipo de medidores necesitas calibrar y con quién tengo el gusto y de qué empresa o planta nos visitas?`;
    }

    if (isStore) {
      return `¡Hola! Claro que sí, con gusto te paso la información de disponibilidad. En IMI contamos con stock inmediato para venta y esquemas muy flexibles de renta (por semana o por mes), todos acompañados de su **certificado de calibración vigente**:

- **Manómetros Industriales Marca IMI:** 100% acero inoxidable 316, conexiones 1/4" y 1/2" NPT, carátulas de 2.5", 4" y 6", rangos desde vacío (-30 inHg) hasta 15,000 psi (secos o con glicerina).
- **Calibradores Documentadores de Proceso y Presión:** Compatibles con protocolo HART.
- **Calibradores de Lazo 4-20 mA:** Generación, simulación y lectura con precisión de 0.01%.
- **Bloques Secos de Temperatura:** Rango de -25 °C a 660 °C para calibración in-situ de sondas.
- **Balanzas de Pesos Muertos:** Patrón primario de alta precisión hasta 15,000 psi.

¿Requieres el equipo para compra directa o para renta en un proyecto temporal? Y por favor, indícame con quién tengo el gusto y de qué empresa o planta nos contactas para preparar la ficha técnica correspondiente.`;
    }

    if (isAcademy) {
      return `¡Qué tal! Con mucho gusto te asesoro sobre nuestra división de formación técnica **IMI Academy**. Contamos con registro oficial como Agente Capacitador Externo ante la **STPS (IMI150311QL2-0013)** y estándar **CONOCER EC0217**:

Nuestros programas destacados incluyen:
- **Certificación en Calibración y Mantenimiento de Válvulas PSV (NOM-093)** – 40 horas prácticas en banco de pruebas.
- **Alineación para Certificación ISA CCST Nivel 1** – 40 horas teórico-prácticas.
- **Metrología Industrial y Calibración de Presión, Flujo y Temperatura** – Conforme a ISO/IEC 17025.
- **Lazos de Control 4-20 mA, Protocolo HART y Transmisores Inteligentes.**

Todos nuestros cursos incluyen Constancia de Competencias Laborales (Formato DC-3 oficial con valor curricular). Se pueden impartir en nuestras instalaciones de Altamira o modalidad In-Company directo en su planta.

¿Cuántas personas conformarían la cuadrilla y con quién tengo el gusto y de qué empresa nos visitas?`;
    }

    // Default turno 1
    return `¡Hola! ¿Qué tal? Con mucho gusto te atiendo. En IMI respaldamos a la industria en 3 áreas técnicas clave:

1. **Laboratorio Acreditado ISO/IEC 17025:** Calibración en Presión, Flujo, Temperatura y Nivel con trazabilidad CENAM/NIST.
2. **Inspección y Mantenimiento de Válvulas PSV:** Bajo norma oficial NOM-093-SCFI-2020 en taller central o en paros de planta.
3. **Venta y Renta de Instrumentos:** Manómetros de acero inoxidable 316, calibradores HART, lazos 4-20 mA y bloques secos en stock.
4. **IMI Academy:** Capacitación STPS con emisión de constancias oficiales Formato DC-3.

Para darte la mejor recomendación: ¿cuál es el requerimiento o problemática específica de instrumentación en tu planta hoy? Y por favor, coméntame con quién tengo el gusto y de qué empresa o planta nos visitas.`;
  }

  // ETAPA 2: SEGUNDO TURNO (Si aún faltan datos de contacto o detalles de la solicitud)
  if (turn === 2 && (!lead.phone || (!lead.name && !lead.company))) {
    const ackName = lead.name ? `Mucho gusto, Ing. ${lead.name}. ` : "";
    const ackComp = lead.company ? `Un gusto tener contacto con ${lead.company}. ` : "";

    return `${ackName}${ackComp}Perfecto, tomo debida nota de los detalles técnicos que me comentas. 

En IMI nos aseguramos de que cada propuesta cuente con respaldo normativo completo, tiempos de entrega garantizados y soporte post-servicio.

Para armar formalmente tu cotización con el desglose técnico y poder enviarte la ficha técnica:
1. ¿A qué número de teléfono o WhatsApp te podemos contactar directamente?
2. ¿Tienes una fecha estimada o ventana operativa en la que requerirías el servicio o equipo en planta?`;
  }

  // ETAPA 3: TERCER TURNO O CUANDO YA TENEMOS DATOS DEL LEAD (Cierre a WhatsApp con Datos Pre-cargados)
  const reqSummary = isPsv
    ? "Mantenimiento y Certificación de Válvulas PSV (NOM-093)"
    : isFlowLab
    ? "Calibración Acreditada ISO/IEC 17025 de Flujo/Presión"
    : isStore
    ? "Suministro/Renta de Equipos de Medición"
    : isAcademy
    ? "Capacitación Técnica IMI Academy con Constancia STPS DC-3"
    : "Servicios de Instrumentación y Metrología";

  const leadSummaryText = [
    `Hola Adal, ${lead.name ? `soy ${lead.name}` : "te contacto desde el portal IMI"}`,
    lead.company ? `de la empresa ${lead.company}` : "",
    lead.phone ? `(Tel: ${lead.phone})` : "",
    `. Requiero cotización formal de: ${reqSummary}.`,
    `Detalle: ${lastUserMsg.slice(0, 100)}`,
  ]
    .filter(Boolean)
    .join(" ");

  const waLinkFinal = `${waBase}${encodeURIComponent(leadSummaryText)}`;

  return `Excelente, ${clientGreeting}. Ya tengo registrado el requerimiento${companyMention} para **${reqSummary}**.

Nuestro equipo de ingeniería y ventas ya puede emitir tu cotización formal con costos exactos, tiempos de entrega y certificado de calibración o dictamen oficial.

¿Te parece bien si continuamos por WhatsApp para pasarte la propuesta formal en PDF directo a tu celular?

[Continuar Cotización con Adal por WhatsApp](${waLinkFinal})

*(También puedes llamarme directamente a la sede central al **(833) 126.9795** si requieres atención inmediata por paro de planta).*`;
}

/**
 * Llama a la API oficial de Google Gemini si existe GEMINI_API_KEY en el entorno;
 * si no, utiliza el motor de respuesta local humano de Adal con calificación de leads.
 */
export async function generateImiConsultantResponse({
  messages,
}: {
  messages: ChatMessage[];
}): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return getImiLocalResponse(messages);
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const formattedContents = [
      {
        role: "user",
        parts: [
          {
            text: `${IMI_SYSTEM_PROMPT}\n\nHistorial completo de la conversación:\n${JSON.stringify(
              messages.map((m) => ({ role: m.role, content: m.content }))
            )}\n\nGenera la respuesta de Adal para el cliente respetando el proceso consultivo humano: primero asesora y resuelve técnicamente, solicita el lead (nombre, empresa, teléfono), y solo al tener datos o en el momento oportuno genera el enlace de WhatsApp con el lead precargado.`,
          },
        ],
      },
    ];

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: formattedContents,
        generationConfig: {
          temperature: 0.35,
          maxOutputTokens: 850,
        },
      }),
    });

    if (!res.ok) {
      console.warn("Gemini API error, falling back to Adal's local engine", res.status);
      return getImiLocalResponse(messages);
    }

    const data = await res.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (candidateText && typeof candidateText === "string") {
      return candidateText;
    }

    return getImiLocalResponse(messages);
  } catch (err) {
    console.warn("Exception calling Gemini, using Adal's local engine", err);
    return getImiLocalResponse(messages);
  }
}
