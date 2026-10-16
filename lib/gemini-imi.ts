/**
 * Cerebro Especializado: Sergio · Director General e Ingeniero Senior de IMI
 * Base de conocimiento integral de Instrumentación y Metrología Industrial S.R.L. de C.V.
 */

export const IMI_KNOWLEDGE_BASE = {
  company: {
    legalName: "Instrumentación y Metrología Industrial S.R.L. de C.V.",
    shortName: "IMI",
    consultantName: "Sergio",
    consultantTitle: "Director General e Ingeniero Senior de IMI",
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
      code: "NMX-EC-17025-IMNC-2018 (Acreditación EMA FL-55)",
      authority: "ISO/IEC 17025 / EMA",
      desc: "Laboratorio de calibración acreditado en Flujo No. FL-55 con cálculo de incertidumbre expandida y patrones trazables a CENAM / NIST.",
    },
    {
      code: "NOM-093-SCFI-1994 / 2020",
      authority: "SCFI",
      desc: "Calibración, inspección, prueba de disparo (pop test), lapeado y mantenimiento de Válvulas de Seguridad y Alivio (PSV).",
    },
    {
      code: "NBIC 2023 / ASME VR",
      authority: "The National Board",
      desc: "Certificación internacional para inspección y reparación de válvulas de alivio de presión.",
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
  powerGeneration: {
    stat: "19 de 46 Centrales de Ciclo Combinado privadas en México atendidas (40% del mercado)",
    clients: "Iberdrola México, ENGIE, Valia Energía, Quantum Energía, Grupo México, Central Eléctrica Pesquería (Techgen), Abent 3T, NAES, Saavi Energía, KST KEPCO",
    turbines: "GE (7F.04, 7FA, 7EA, LM6000), MHPS (M501J), Alstom (GT24), Siemens (W501), Wärtsilä (18V50SG)",
  },
  specialTechnologies: {
    evtAccutest: "Prueba electrónica en línea de válvulas de seguridad sin parar la planta (ASME Secc. I & VIII, API RP 576)",
    bentlyNevada: "Monitoreo y diagnóstico de vibraciones Bently Nevada 3500 (proximidad, velocidad, aceleración y tacómetros)",
    basesOperativas: "Altamira (Sede Central), Hermosillo (Sonora) y Ciudad del Carmen (Campeche) + Unidades móviles 24/7",
  },
  products: [
    {
      name: "Manómetros Industriales Marca IMI",
      mode: "Venta",
      specs: 'Fabricados en acero inoxidable 316, conexiones 1/4" y 1/2" NPT, rangos desde vacío (-30 inHg) hasta 15,000 psi, opciones secos o con glicerina.',
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
Eres Sergio, Director General e Ingeniero Senior de Instrumentación y Metrología Industrial S.R.L. de C.V. (IMI).
Te encuentras asesorando en tiempo real a un cliente técnico o directivo de planta (ingeniero de instrumentación, jefe de mantenimiento, compras o calidad).

TU OBJETIVO PRINCIPAL:
1. Actuar como un ingeniero mexicano senior, experto, humano, empático, atento y 100% conversacional. NUNCA parezcas un cuestionario o un bot.
2. Escucha activa obligatoria: Analiza a fondo lo que el cliente acaba de escribir. Si el cliente responde con un dato corto o un número (como "4", "2 pulgadas", "150 psi"), NO pases a un guion genérico; analiza qué significa ese número en el contexto previo (por ejemplo 4 válvulas de seguridad PSV, 4 medidores o 4 alumnos), haz las preguntas técnicas pertinentes (diámetros, presiones, marcas) y pregunta con quién tienes el gusto y de qué empresa te contactan.
3. Si el usuario agrega o cambia de tema (por ejemplo, venía hablando de válvulas y envía "Certificaciones IMI Academy con Formato STPS DC-3"), combina ambos requerimientos de forma natural ("¡Excelente combinación! Con mucho gusto. Además del mantenimiento de las válvulas, en IMI Academy impartimos precisamente el curso de NOM-093 con constancia oficial STPS DC-3...").
4. Solo cuando se cuente con los datos del requerimiento y contacto (o si el usuario pide explícitamente WhatsApp o llamada), ofrece continuar por WhatsApp para enviarle la propuesta formal en PDF.
5. Cuida la ortografía y redacción técnica: usa viñetas limpias con guiones (- ) o numeración ordenada (1. ), negritas con doble asterisco (**texto**), sin caracteres extraños ni corchetes rotos.
`.trim();

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type LeadInfo = {
  name?: string;
  company?: string;
  phone?: string;
  quantity?: string;
  topic?: string;
  details?: string;
};

/**
 * Genera un enlace de WhatsApp limpio con parámetros codificados de forma segura
 */
export function buildCleanWaLink(baseText: string): string {
  const safeText = encodeURIComponent(baseText)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/'/g, "%27");
  return `https://wa.me/528331550189?text=${safeText}`;
}

/**
 * Extrae datos del lead (nombre, empresa, teléfono, cantidades) a partir del historial de mensajes
 */
export function extractLeadInfo(messages: ChatMessage[]): LeadInfo {
  const lead: LeadInfo = {};
  const stopWords = new Set([
    "flujo", "presion", "presión", "temperatura", "nivel", "valvula", "válvula",
    "valvulas", "válvulas", "psv", "calibracion", "calibración", "equipo", "equipos",
    "manometro", "manómetro", "manometros", "manómetros", "laboratorio", "campo",
    "planta", "taller", "curso", "cursos", "imi", "mi", "una", "un", "la", "el", "este",
    "hola", "buenos", "dias", "tardes", "noches", "cotizar", "precio", "renta", "venta"
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

    // 2. Nombre: "Soy el Ing. Carlos de Pemex", "Me llamo Roberto", "Mi nombre es Laura", "Ing. Daniel"
    if (!lead.name) {
      const nameMatch = txt.match(
        /(?:soy|me llamo|mi nombre es|atentamente|atte:?)\s+(?:el\s+ing\.?\s+|ing\.?\s+|lic\.?\s+)?([A-ZÁÉÍÓÚa-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚa-záéíóúñ]+)?)(?:\s+(?:de|en|del|y|con|\.|\,)\b|$)/i
      );
      if (nameMatch && nameMatch[1]) {
        const candidate = nameMatch[1].trim();
        if (!stopWords.has(candidate.toLowerCase()) && candidate.length > 2) {
          lead.name = candidate;
        }
      }
    }

    // 3. Empresa: "de Pemex Madero", "en Braskem Idesa", "empresa Iberdrola", "planta Altamira"
    if (!lead.company) {
      const compMatch = txt.match(
        /(?:de|en|empresa|planta|de la planta|de la empresa)\s+([A-ZÁÉÍÓÚ0-9][A-ZÁÉÍÓÚa-záéíóúñ0-9]+(?:\s+[A-ZÁÉÍÓÚa-záéíóúñ0-9]+)?)/i
      );
      if (compMatch && compMatch[1]) {
        const candidate = compMatch[1].trim();
        const firstWord = candidate.toLowerCase().split(" ")[0];
        if (!stopWords.has(firstWord) && candidate.length > 2) {
          lead.company = candidate;
        }
      }
    }

    // 4. Cantidad numérica específica
    const numMatch = txt.match(/\b(\d+)\s*(?:valvulas?|válvulas?|piezas?|equipos?|personas?|alumnos?|medidores?|unidades?|pzas?)?\b/i);
    if (numMatch && !lead.quantity) {
      // Ignorar si parece un teléfono o año
      const val = parseInt(numMatch[1], 10);
      if (val > 0 && val < 5000 && !txt.match(/\b\d{4}\b/)) {
        lead.quantity = numMatch[1];
      }
    }
  }

  return lead;
}

/**
 * Motor local conversacional humano de Sergio con escucha activa real.
 * Responde analizando lo que el cliente realmente dijo y el contexto de la charla.
 */
export function getImiLocalResponse(messages: ChatMessage[]): string {
  const userMessages = messages.filter((m) => m.role === "user");
  const assistantMessages = messages.filter((m) => m.role === "assistant");
  const turn = userMessages.length;
  const lastUserMsg = userMessages[userMessages.length - 1]?.content.trim() || "";
  const prevUserMsg = userMessages[userMessages.length - 2]?.content.trim() || "";
  const lastAssistantMsg = assistantMessages[assistantMessages.length - 1]?.content.trim() || "";

  const q = lastUserMsg.toLowerCase();
  const allUserText = userMessages.map((m) => m.content.toLowerCase()).join(" ");

  const lead = extractLeadInfo(messages);
  const clientGreeting = lead.name ? `Ing. ${lead.name}` : "estimado colega";
  const companyMention = lead.company ? ` para ${lead.company}` : "";

  // 1. SOLICITUD EXPLÍCITA DE WHATSAPP / CONTACTO TELEFÓNICO
  const explicitWaRequest =
    q.includes("whatsapp") ||
    q.includes("whats") ||
    q.includes("dame tu contacto") ||
    q.includes("pasar a whatsapp") ||
    q.includes("hablar por whatsapp") ||
    q.includes("pásame tu teléfono") ||
    q.includes("dame tu teléfono") ||
    q.includes("dame tu numero") ||
    q.includes("dame tu número") ||
    q.includes("llamada") ||
    q.includes("llámame");

  if (explicitWaRequest) {
    const leadText = `Hola Sergio, ${lead.name ? `soy ${lead.name}` : "te contacto desde el portal IMI"}${lead.company ? ` de ${lead.company}` : ""}. Me interesa cotizar servicios de instrumentación: ${lastUserMsg.slice(0, 100)}`;
    const waLink = buildCleanWaLink(leadText);

    return `Con mucho gusto, ${clientGreeting}. Puedes comunicarte directamente a mi WhatsApp oficial o con nuestro ingeniero de guardia:

[Contactar a Sergio por WhatsApp](${waLink})

También me puedes marcar directamente al **(833) 126.9795**. Si gustas, déjame aquí tu número de teléfono y te marcamos nosotros de inmediato.`;
  }

  // Identificar qué temas se han tocado a lo largo de la conversación
  const hadPsv =
    allUserText.includes("valvula") ||
    allUserText.includes("válvula") ||
    allUserText.includes("psv") ||
    allUserText.includes("nom-093") ||
    allUserText.includes("alivio") ||
    allUserText.includes("seguridad") ||
    allUserText.includes("pop test");

  const hadFlowLab =
    allUserText.includes("flujo") ||
    allUserText.includes("coriolis") ||
    allUserText.includes("vortex") ||
    allUserText.includes("vórtex") ||
    allUserText.includes("17025") ||
    allUserText.includes("ema") ||
    allUserText.includes("fl-55");

  const hadStore =
    allUserText.includes("manometro") ||
    allUserText.includes("manómetro") ||
    allUserText.includes("renta") ||
    allUserText.includes("venta") ||
    allUserText.includes("calibrador") ||
    allUserText.includes("bloque") ||
    allUserText.includes("balanza");

  const hadAcademy =
    allUserText.includes("curso") ||
    allUserText.includes("capacitacion") ||
    allUserText.includes("capacitación") ||
    allUserText.includes("dc-3") ||
    allUserText.includes("dc3") ||
    allUserText.includes("academy") ||
    allUserText.includes("stps");

  // Identificar el tema del ÚLTIMO mensaje del usuario
  const lastIsAcademy =
    q.includes("curso") ||
    q.includes("capacitacion") ||
    q.includes("capacitación") ||
    q.includes("dc-3") ||
    q.includes("dc3") ||
    q.includes("academy") ||
    q.includes("stps");

  const lastIsPsv =
    q.includes("valvula") ||
    q.includes("válvula") ||
    q.includes("psv") ||
    q.includes("nom-093") ||
    q.includes("alivio") ||
    q.includes("pop test");

  const lastIsFlow =
    q.includes("flujo") ||
    q.includes("coriolis") ||
    q.includes("vortex") ||
    q.includes("17025") ||
    q.includes("ema");

  const lastIsStore =
    q.includes("manometro") ||
    q.includes("manómetro") ||
    q.includes("renta") ||
    q.includes("venta") ||
    q.includes("calibrador");

  // Detectar si el usuario respondió con un número o cantidad corta (ej. "4", "4 valvulas", "cuatro", "son 4", "10 piezas")
  const isShortQuantity =
    /^\s*(\d+|un|uno|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|quince|veinte)\s*(?:valvulas?|válvulas?|piezas?|equipos?|personas?|medidores?|pzas?)?\s*$/i.test(lastUserMsg);

  // 2. CASO: EL USUARIO RESPONDE CON UN NÚMERO / CANTIDAD (Escucha activa obligatoria)
  if (isShortQuantity) {
    const rawNumberMatch = lastUserMsg.match(/\d+/);
    const qtyText = rawNumberMatch ? rawNumberMatch[0] : lastUserMsg.trim();

    // Contexto: Válvulas PSV
    if (hadPsv || lastAssistantMsg.toLowerCase().includes("válvula") || lastAssistantMsg.toLowerCase().includes("valvula")) {
      return `Entendido, son **${qtyText} válvulas de seguridad (PSV)**.

Para poder dimensionar el servicio con exactitud y cotizarte los alcances precisos:
1. ¿Sabes aproximadamente de qué diámetros son (por ejemplo 1", 2", 3" o 4") y qué marcas manejan (Crosby, Farris, Anderson Greenwood, Dresser, etc.)?
2. ¿A qué presión de calibración o seteo operan aproximadamente?
3. ¿Requerirían el servicio en nuestro taller central de Altamira o con banco móvil en sitio durante un paro de planta?

Y para registrar formalmente la cotización a tu nombre: ¿con quién tengo el gusto y de qué empresa o planta nos contactas?`;
    }

    // Contexto: Capacitación / Academy
    if (hadAcademy || lastAssistantMsg.toLowerCase().includes("curso") || lastAssistantMsg.toLowerCase().includes("capacitación") || lastAssistantMsg.toLowerCase().includes("cuadrilla")) {
      return `Excelente, un grupo de **${qtyText} personas** para la capacitación técnica en **IMI Academy**.

Nuestros programas incluyen constancia de competencias laborales oficial (Formato DC-3 de la STPS) y registro CONOCER:
- ¿Les interesaría impartir el curso de forma presencial en sus instalaciones (modalidad In-Company) o en nuestro centro de entrenamiento técnico en Altamira?

Y por favor, ¿con quién tengo el gusto y para qué empresa o planta sería la propuesta?`;
    }

    // Contexto: Laboratorio de Flujo
    if (hadFlowLab || lastAssistantMsg.toLowerCase().includes("flujo") || lastAssistantMsg.toLowerCase().includes("medidores")) {
      return `Perfecto, **${qtyText} medidores** para calibración acreditada ISO/IEC 17025.

¿De qué tipo son (flujómetros Coriolis, magnéticos, vórtex o turbinas) y qué diámetros o fluidos de proceso manejan en su línea?

Y por favor, para preparar la cotización con trazabilidad CENAM/NIST: ¿con quién tengo el gusto y de qué empresa o planta nos contactas?`;
    }

    // Contexto: Renta / Venta de Instrumentos
    if (hadStore || lastAssistantMsg.toLowerCase().includes("compra") || lastAssistantMsg.toLowerCase().includes("renta")) {
      return `Entendido, **${qtyText} equipos**.

¿En qué rango de medición o presión los requieren y sería para compra directa o renta para algún proyecto temporal?

Y por favor, para preparar la ficha técnica: ¿con quién tengo el gusto y de qué empresa nos visitas?`;
    }

    // Si no hay contexto previo claro
    return `Entendido. Cuando me indicas **"${qtyText}"**, ¿te refieres a ${qtyText} válvulas de seguridad PSV, ${qtyText} medidores para calibración en laboratorio, o ${qtyText} personas para capacitación técnica en IMI Academy?

Con gusto te oriento para darte la cotización exacta. ¿Y con quién tengo el gusto y de qué empresa o planta nos contactas?`;
  }

  // 3. CASO: EL USUARIO AGREGA O CAMBIA DE SERVICIO EN LA CONVERSACIÓN
  // Ejemplo: Estaban hablando de PSV y ahora manda "Certificaciones IMI Academy con Formato STPS DC-3"
  if (lastIsAcademy && hadPsv && !prevUserMsg.toLowerCase().includes("academy")) {
    return `¡Excelente combinación! Con mucho gusto te asesoro.

Además del mantenimiento e inspección a las válvulas de seguridad (NOM-093), en **IMI Academy** impartimos precisamente la certificación en **Calibración y Mantenimiento de Válvulas de Seguridad y Alivio (PSV) bajo NOM-093-SCFI-2020** (40 horas de formación teórico-práctica en banco de pruebas con constancia oficial de competencias laborales STPS Formato DC-3 y registro CONOCER EC0217).

Podemos capacitar a su personal técnico directamente en su planta (modalidad In-Company) o en nuestras instalaciones de Altamira.

¿Les interesaría que incluyamos la capacitación dentro de la misma propuesta técnica integral de las válvulas? Y por favor, ¿con quién tengo el gusto y de qué empresa o planta nos visitas para poder armar la cotización formal?`;
  }

  // 4. CASO: EL USUARIO PROPORCIONA ESPECIFICACIONES TÉCNICAS (diámetros, presiones, marcas, fluidos)
  const containsTechSpecs =
    q.includes("pulgada") ||
    q.includes('"') ||
    q.includes("psi") ||
    q.includes("bar") ||
    q.includes("kg/cm2") ||
    q.includes("crosby") ||
    q.includes("farris") ||
    q.includes("dresser") ||
    q.includes("vapor") ||
    q.includes("gas") ||
    q.includes("agua") ||
    q.includes("coriolis") ||
    q.includes("vortex") ||
    q.includes("150#") ||
    q.includes("300#") ||
    q.includes("600#");

  if (containsTechSpecs && !lead.phone && !lead.name) {
    return `Excelente, tomo debida nota de las especificaciones técnicas que me indicas: **${lastUserMsg}**.

En IMI contamos con la capacidad técnica en banco certificado para realizar el desarme, lapeado plano óptico con luz monocromática (bandas de helio), ajuste de disparo y emisión del dictamen oficial con precinto fechado con validez ante STPS, ASEA y aseguradoras.

Para poder armar tu cotización formal con el desglose de precios y tiempos de entrega:
¿Con quién tengo el gusto, de qué empresa o planta nos contactas y a qué número de WhatsApp o teléfono te la podemos enviar?`;
  }

  // 5. CASO: EL USUARIO COMPARTE SU NOMBRE O EMPRESA
  if ((lead.name || lead.company) && !lead.phone && turn >= 2) {
    const ackName = lead.name ? `Mucho gusto, Ing. ${lead.name}. ` : "";
    const ackComp = lead.company ? `Un placer saludar al equipo de ${lead.company}. ` : "";

    return `${ackName}${ackComp}Ya tengo registrados los requerimientos técnicos que hemos conversado.

Nuestro departamento de ingeniería y ventas ya puede estructurar la cotización formal con costos exactos, tiempos de entrega y acreditación oficial.

Para hacértela llegar en formato PDF directo a tu celular:
¿A qué número de teléfono o WhatsApp te podemos contactar?`;
  }

  // 6. CASO: LEAD COMPLETO (Tenemos requerimiento + contacto o turno avanzado con datos)
  if (lead.phone || (lead.name && lead.company && turn >= 3)) {
    const reqSummary = hadPsv && hadAcademy
      ? "Mantenimiento a Válvulas PSV (NOM-093) y Certificación IMI Academy STPS DC-3"
      : hadPsv
      ? "Mantenimiento y Certificación de Válvulas PSV (NOM-093)"
      : hadFlowLab
      ? "Calibración Acreditada ISO/IEC 17025 de Flujo y Presión"
      : hadAcademy
      ? "Capacitación Técnica IMI Academy con Constancia STPS DC-3"
      : hadStore
      ? "Suministro y Renta de Instrumentación de Proceso"
      : "Servicios de Instrumentación y Metrología";

    const leadSummaryText = [
      `Hola Sergio, ${lead.name ? `soy ${lead.name}` : "te contacto desde el portal IMI"}`,
      lead.company ? `de la empresa ${lead.company}` : "",
      lead.phone ? `(Tel: ${lead.phone})` : "",
      lead.quantity ? `(Cantidad: ${lead.quantity})` : "",
      `. Requiero cotización formal de: ${reqSummary}.`,
      `Detalles: ${lastUserMsg.slice(0, 100)}`,
    ]
      .filter(Boolean)
      .join(" ");

    const waLinkFinal = buildCleanWaLink(leadSummaryText);

    return `Excelente, ${clientGreeting}. Ya tengo registrado el requerimiento${companyMention} para **${reqSummary}**.

Nuestro equipo de ingeniería y ventas ya puede emitir tu cotización formal con costos exactos, tiempos de entrega y certificado de calibración o dictamen oficial.

¿Te parece bien si continuamos por WhatsApp para pasarte la propuesta formal en PDF directo a tu celular?

[Continuar Cotización con Sergio por WhatsApp](${waLinkFinal})

*(También puedes llamarme directamente a la sede central al **(833) 126.9795** si requieres atención inmediata por paro de planta).*`;
  }

  // 7. TURNO INICIAL (Presentación de Servicios Especializados)
  if (lastIsPsv || (turn <= 1 && hadPsv)) {
    return `¡Qué tal! Con mucho gusto te asesoro. En el mantenimiento e inspección de **Válvulas de Seguridad y Alivio (PSV)** trabajamos con estricto apego a la norma oficial **NOM-093-SCFI-2020** y código ASME Secc. I y VIII:

- **Prueba de Disparo Inicial (Pop Test):** Verificamos la presión de apertura real y hermeticidad en banco de pruebas certificado.
- **Desarme y Lapeado de Precisión:** Lapeamos toberas y discos con pastas diamantadas de grano fino y verificamos planicidad absoluta con placas ópticas de luz monocromática (bandas de helio).
- **Calibración y Dictamen Oficial:** Ajustamos a la presión de seteo requerida, colocamos precinto de seguridad fechado y emitimos el informe técnico con validez para auditorías de STPS, ASEA o aseguradoras.
- **Modalidades:** En nuestro taller central especializado en Altamira o en sitio durante paros de planta con banco móvil.

Para dimensionar el servicio: ¿cuántas válvulas tienen contempladas para calibración, qué presiones o diámetros manejan, y con quién tengo el gusto y de qué empresa o planta nos contactas?`;
  }

  if (lastIsAcademy || (turn <= 1 && hadAcademy)) {
    return `¡Qué tal! Con mucho gusto te asesoro sobre nuestra división de formación técnica **IMI Academy**. Contamos con registro oficial como Agente Capacitador Externo ante la **STPS (IMI150311QL2-0013)** y estándar **CONOCER EC0217**:

Nuestros programas destacados incluyen:
- **Certificación en Calibración y Mantenimiento de Válvulas PSV (NOM-093):** 40 horas prácticas en banco de pruebas.
- **Alineación para Certificación ISA CCST Nivel 1:** 40 horas teórico-prácticas.
- **Metrología Industrial y Calibración de Presión, Flujo y Temperatura:** Conforme a ISO/IEC 17025.
- **Lazos de Control 4-20 mA, Protocolo HART y Transmisores Inteligentes.**

Todos nuestros cursos incluyen Constancia de Competencias Laborales (Formato DC-3 oficial con valor curricular). Se pueden impartir en nuestras instalaciones de Altamira o modalidad In-Company directo en su planta.

¿Cuántas personas conformarían la cuadrilla y con quién tengo el gusto y de qué empresa nos visitas?`;
  }

  if (lastIsFlow || (turn <= 1 && hadFlowLab)) {
    return `¡Hola! Con gusto te explico los alcances de nuestro laboratorio. Contamos con acreditación conforme a la norma **NMX-EC-17025-IMNC-2018 (ISO/IEC 17025)** con cálculo de incertidumbre expandida y trazabilidad directa a patrones primarios CENAM y NIST.

Cubrimos:
- **Flujómetros Másicos Coriolis, Magnéticos, Vórtex y Turbinas:** Calibración por método de comparación directa con medidor maestro y gravimétrico (Acreditación EMA FL-55).
- **Presión y Presión Diferencial:** Transmisores SMART (HART/Fieldbus), manómetros patrón y balanzas de pesos muertos.
- **Temperatura:** Termopares, sondas RTD Pt100 y transmisores de proceso.
- **Entregables:** Certificado de calibración oficial con holograma de trazabilidad, curva de error y cálculo de incertidumbre.

Podemos recibir sus instrumentos en nuestro laboratorio o coordinar cuadrilla en planta. ¿Qué tipo de medidores necesitas calibrar y con quién tengo el gusto y de qué empresa o planta nos visitas?`;
  }

  if (lastIsStore || (turn <= 1 && hadStore)) {
    return `¡Hola! Claro que sí, con gusto te paso la información de disponibilidad. En IMI contamos con stock inmediato para venta y esquemas muy flexibles de renta (por semana o por mes), todos acompañados de su **certificado de calibración vigente**:

- **Manómetros Industriales Marca IMI:** 100% acero inoxidable 316, conexiones 1/4" y 1/2" NPT, carátulas de 2.5", 4" y 6", rangos desde vacío (-30 inHg) hasta 15,000 psi (secos o con glicerina).
- **Calibradores Documentadores de Proceso y Presión:** Compatibles con protocolo HART.
- **Calibradores de Lazo 4-20 mA:** Generación, simulación y lectura con precisión de 0.01%.
- **Bloques Secos de Temperatura:** Rango de -25 °C a 660 °C para calibración in-situ de sondas.
- **Balanzas de Pesos Muertos:** Patrón primario de alta precisión hasta 15,000 psi.

¿Requieres el equipo para compra directa o para renta en un proyecto temporal? Y por favor, indícame con quién tengo el gusto y de qué empresa o planta nos contactas para preparar la ficha técnica correspondiente.`;
  }

  // Respuesta por defecto con escucha del mensaje actual
  return `¡Hola! Con mucho gusto te atiendo. Tomo nota de lo que me comentas: "${lastUserMsg}".

En IMI somos especialistas en:
1. **Inspección y Mantenimiento a Válvulas PSV (NOM-093-SCFI):** Banco de pruebas y lapeado óptico.
2. **Laboratorio de Calibración Acreditado ISO/IEC 17025:** Flujo (EMA FL-55), presión y temperatura con trazabilidad CENAM/NIST.
3. **Capacitación Oficial IMI Academy:** Cursos técnicos con constancia STPS Formato DC-3.
4. **Venta y Renta de Instrumentos:** Manómetros inox 316, calibradores HART y bloques secos en stock.

Para poderte asesorar con precisión: ¿cuál es el requerimiento específico de tu planta hoy? Y por favor, coméntame con quién tengo el gusto y de qué empresa o planta nos visitas.`;
}

/**
 * Llama a la API oficial de Google Gemini si existe GEMINI_API_KEY o GOOGLE_API_KEY en el entorno;
 * si no, utiliza el motor de respuesta local humano de Sergio con escucha activa real.
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
    // Usar gemini-2.0-flash o gemini-1.5-flash
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const formattedContents = [
      {
        role: "user",
        parts: [
          {
            text: `${IMI_SYSTEM_PROMPT}

REGLA CLAVE DE ESCUCHA ACTIVA:
Analiza el último mensaje del usuario. Si responde con un número o respuesta corta (ej. "4"), analiza qué significa en el contexto de la charla (ej. 4 válvulas PSV, 4 medidores o 4 personas), haz preguntas de seguimiento pertinentes y solicita con quién tienes el gusto y su empresa. NUNCA des respuestas robóticas ni brinques directo a pedir teléfono si aún no se han aclarado los datos técnicos.

Historial de la conversación:
${JSON.stringify(messages.map((m) => ({ role: m.role, content: m.content })))}

Genera la respuesta como Sergio, en primera persona, empático, experto y conversacional.`,
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
      console.warn("Gemini API error, falling back to Sergio's local engine", res.status);
      return getImiLocalResponse(messages);
    }

    const data = await res.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (candidateText && typeof candidateText === "string") {
      return candidateText;
    }

    return getImiLocalResponse(messages);
  } catch (err) {
    console.warn("Exception calling Gemini, using Sergio's local engine", err);
    return getImiLocalResponse(messages);
  }
}
