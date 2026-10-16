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
Te encuentras chateando en vivo con un cliente técnico o directivo de planta (ingeniero de instrumentación, jefe de mantenimiento, compras o calidad).

REGLAS DE IDENTIDAD Y COMPORTAMIENTO (100% HUMANO):
1. Eres un profesional humano real, empático, experimentado y con sólida trayectoria técnica en plantas industriales. NUNCA menciones que eres una IA, un modelo de lenguaje o un bot.
2. Habla en primera persona ("Soy Adal", "con gusto te ayudo", "en nuestro taller revisamos...", "te recomiendo...").
3. Tu lenguaje es técnico, profesional pero cálido y accesible, propio de la ingeniería industrial mexicana.

REGLA DE ORO DE WHATSAPP:
- NO mandes enlaces de WhatsApp ni pidas mover la conversación a WhatsApp en el primer o segundo mensaje.
- Primero escucha, asesora técnicamente, responde sus dudas y haz preguntas clave para conocer el requerimiento (ej. rango de presión, fluido, diámetro, fechas de libranza, cantidad de participantes, etc.).
- SÓLO cuando el usuario ya te haya proporcionado datos suficientes para cotizar, o cuando pida explícitamente precios, cotización formal o tiempos de entrega, pregúntale de manera natural:
  "Ya tengo claro lo que necesitas. ¿Te parece bien si continuamos la conversación por WhatsApp para pasarte la cotización formal con costos y tiempos de entrega directos a tu celular?"
  Y coloca el enlace al final:
  [Continuar Cotización por WhatsApp](https://wa.me/528331550189?text=Hola%20Adal%20de%20IMI,%20solicito%20cotizaci%C3%B3n...)

EQUIPOS Y RENTA DISPONIBLES EN STOCK IMI:
- Manómetros Industriales Marca IMI: Acero inoxidable 316, conexiones 1/4" y 1/2" NPT, rangos desde vacío hasta 15,000 psi.
- Calibradores Documentadores de Proceso y Presión (compatibles con protocolo HART).
- Calibradores de Lazo de Corriente 4-20 mA.
- Bloques Secos de Temperatura (-25 °C a 660 °C).
- Balanzas de Pesos Muertos hidráulicas y neumáticas de alta precisión.
- Comunicadores de Campo Inteligentes HART / Foundation Fieldbus.
Todos disponibles para VENTA y RENTA (por semana o por mes) con certificado de calibración vigente incluido.
`.trim();

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

/**
 * Motor local conversacional humano de Adal para cuando no se use API externa.
 */
export function getImiLocalResponse(userMessage: string, messageCount = 1): string {
  const q = userMessage.toLowerCase();
  const isQuoting =
    q.includes("cotiz") ||
    q.includes("precio") ||
    q.includes("costo") ||
    q.includes("cuanto") ||
    q.includes("presupuesto") ||
    messageCount >= 3;

  const waBase = "https://wa.me/528331550189?text=";

  // 1. Equipos, Renta, Venta, Manómetros
  if (
    q.includes("renta") ||
    q.includes("venta") ||
    q.includes("manometro") ||
    q.includes("equipo") ||
    q.includes("calibrador") ||
    q.includes("hart") ||
    q.includes("bloque") ||
    q.includes("balanza")
  ) {
    if (isQuoting) {
      const waText = encodeURIComponent(
        `Hola Adal de IMI, estuve platicando contigo en la web y me interesa cotizar la venta/renta de equipos: ${userMessage.slice(0, 80)}`
      );
      return `Con gusto te apoyo con la cotización. En IMI tenemos stock disponible para entrega inmediata tanto en venta como en esquemas flexibles de renta (por semana o mes) con su certificado de calibración vigente incluido:

- **Manómetros Industriales Marca IMI:** Acero inoxidable 316, conexiones 1/4" y 1/2" NPT, rangos desde vacío hasta 15,000 psi.
- **Calibradores Documentadores de Proceso y Presión** (compatibles con protocolo HART).
- **Calibradores de Lazo de Corriente 4-20 mA.**
- **Bloques Secos de Temperatura** (-25 °C a 660 °C).
- **Balanzas de Pesos Muertos** hidráulicas y neumáticas de alta precisión.
- **Comunicadores de Campo Inteligentes HART / Foundation Fieldbus.**

Ya tengo claro tu interés. ¿Te parece bien si continuamos la conversación por WhatsApp para pasarte la propuesta económica formal con costos y tiempos de entrega directos a tu celular?

[Continuar Cotización por WhatsApp](${waBase}${waText})`;
    }

    return `¡Hola! Con gusto te paso la información de nuestros equipos. En IMI contamos con stock para entrega inmediata en venta y también manejamos esquemas flexibles de renta (por semana o por mes), todos acompañados de su certificado de calibración vigente:

- **Manómetros Industriales Marca IMI:** Fabricados en acero inoxidable 316, conexiones 1/4" y 1/2" NPT, con rangos desde vacío hasta 15,000 psi.
- **Calibradores Documentadores de Proceso y Presión** (compatibles con protocolo HART).
- **Calibradores de Lazo de Corriente 4-20 mA.**
- **Bloques Secos de Temperatura** (de -25 °C a 660 °C).
- **Balanzas de Pesos Muertos** de alta exactitud (hasta 15,000 psi).
- **Comunicadores de Campo Inteligentes HART / Foundation Fieldbus.**

¿Lo requieres para compra o para renta de proyecto, y en qué rango de presión o temperatura lo estás necesitando? Con esos datos te paso la opción ideal para tu aplicación.`;
  }

  // 2. Válvulas de Seguridad PSV (NOM-093)
  if (
    q.includes("valvula") ||
    q.includes("psv") ||
    q.includes("nom-093") ||
    q.includes("alivio") ||
    q.includes("seguridad")
  ) {
    if (isQuoting) {
      const waText = encodeURIComponent(
        `Hola Adal de IMI, requiero cotización para servicio y certificación de válvulas PSV bajo NOM-093: ${userMessage.slice(0, 80)}`
      );
      return `Excelente. Realizamos el ciclo integral bajo la norma oficial **NOM-093-SCFI-2020**: inspección inicial, prueba de disparo (pop test), desarme completo, lapeado de alta precisión en toberas y discos con placas ópticas, calibración de presión de ajuste y emisión de dictamen oficial avalado para auditorías de STPS, ASEA o aseguradoras.

¿Te parece bien si continuamos la conversación por WhatsApp para revisar las hojas de datos de tus válvulas y enviarte la cotización formal con tiempos de entrega?

[Continuar Cotización de Válvulas por WhatsApp](${waBase}${waText})`;
    }

    return `En el tema de válvulas de seguridad y alivio trabajamos con estricto apego a la norma oficial **NOM-093-SCFI-2020** y código ASME:

- Hacemos la prueba de disparo inicial (*pop test*) y prueba de hermeticidad en banco de pruebas certificado.
- Lapeado de precisión de toberas y discos con pasta diamantada y verificación con placas ópticas de luz monocromática.
- Calibración de presión de seteo y emisión del certificado oficial válido para auditorías de STPS y aseguradoras.
- Servicio en nuestro taller central o en sitio con cuadrillas especializadas para paros de planta.

¿Cuántas válvulas tienes programadas para mantenimiento y qué presión de calibración o diámetro manejan?`;
  }

  // 3. Calibración de Flujo, Presión, Temperatura en Laboratorio
  if (
    q.includes("flujo") ||
    q.includes("coriolis") ||
    q.includes("calibrar") ||
    q.includes("laboratorio") ||
    q.includes("iso 17025") ||
    q.includes("ema")
  ) {
    if (isQuoting) {
      const waText = encodeURIComponent(
        `Hola Adal de IMI, requiero cotización de calibración acreditada: ${userMessage.slice(0, 80)}`
      );
      return `Perfecto. Nuestro laboratorio está acreditado conforme a la norma **NMX-EC-17025-IMNC-2018 (ISO/IEC 17025)** con cálculo de incertidumbre de medición y trazabilidad directa a patrones CENAM y NIST.

Cubrimos medidores de flujo Coriolis másicos, magnéticos, vórtex, transmisores de presión diferencial, manómetros y sensores de temperatura.

¿Te parece bien si continuamos la conversación por WhatsApp para compartirte el alcance acreditado y elaborar tu cotización formal con tiempos de entrega de laboratorio?

[Continuar Cotización de Calibración por WhatsApp](${waBase}${waText})`;
    }

    return `Te comento: nuestro laboratorio de metrología está acreditado conforme a la norma **NMX-EC-17025-IMNC-2018 (ISO/IEC 17025)**. Entregamos informes de calibración oficiales con cálculo de incertidumbre expandida y trazabilidad hacia CENAM y NIST.

Calibramos:
- **Flujo:** Medidores Coriolis másicos, electromagnéticos, turbinas y placas de orificio.
- **Presión:** Manómetros de proceso, transmisores y balanzas de pesos muertos (hasta 15,000 psi).
- **Temperatura:** Termopares, sondas RTD Pt100 y transmisores de temperatura.

Podemos recibir tus instrumentos en nuestro laboratorio central o enviar una unidad móvil a tu planta. ¿Qué tipo de medidores o instrumentos requieres calibrar?`;
  }

  // 4. Cursos y Capacitación IMI Academy
  if (
    q.includes("curso") ||
    q.includes("capacitacion") ||
    q.includes("dc-3") ||
    q.includes("dc3") ||
    q.includes("academy")
  ) {
    if (isQuoting) {
      const waText = encodeURIComponent(
        `Hola Adal de IMI, me interesa cotizar cursos de IMI Academy con constancia DC-3: ${userMessage.slice(0, 80)}`
      );
      return `Con gusto. En IMI Academy contamos con registro oficial como Agente Capacitador Externo ante la STPS (**IMI150311QL2-0013**) y estándar **CONOCER EC0217**. Todos nuestros cursos son teórico-prácticos y otorgan Constancia de Competencias Laborales (Formato DC-3 oficial).

Podemos impartirlos de forma presencial en nuestras aulas de Altamira, en modalidad In-Company directo en tu planta, o en línea en vivo.

¿Te parece bien si continuamos por WhatsApp para enviarte los temarios detallados y la propuesta económica para tu personal?

[Continuar por WhatsApp sobre Cursos](${waBase}${waText})`;
    }

    return `En **IMI Academy** impartimos capacitación técnica de alta especialización con registro ante la STPS (**IMI150311QL2-0013**) y estándar **CONOCER EC0217**, entregando constancia oficial Formato DC-3:

- **Certificación en Válvulas de Seguridad PSV NOM-093** (40 hrs).
- **Preparación para Certificación ISA CCST Nivel 1** (40 hrs).
- **Diplomados en Instrumentación Industrial y Metrología** (120 hrs).
- **Cursos prácticos:** Lazos 4-20 mA, Calibración de Transmisores, Control de Procesos y SIL.

¿Cuántas personas conformarían el grupo y te gustaría que fuera en tus instalaciones (In-Company) o en nuestro centro de entrenamiento?`;
  }

  // 5. Respuesta por defecto
  if (isQuoting) {
    const waText = encodeURIComponent(
      `Hola Adal de IMI, platiqué contigo en el sitio web y me gustaría recibir una cotización: ${userMessage.slice(0, 80)}`
    );
    return `Con mucho gusto te asesoro. En IMI cubrimos laboratorio de calibración ISO/IEC 17025, mantenimiento de válvulas de seguridad PSV (NOM-093), venta y renta de instrumentación y capacitación oficial con constancias DC-3.

Ya tengo identificado tu requerimiento. ¿Te parece bien si continuamos la conversación por WhatsApp para mandarte la propuesta formal con tiempos de entrega y costos directos a tu celular?

[Continuar Cotización por WhatsApp](${waBase}${waText})`;
  }

  return `¡Hola! Con gusto te apoyo. En IMI te podemos respaldar en varias áreas clave para tu planta:

- **Calibración Acreditada ISO/IEC 17025** en Presión, Flujo, Temperatura y Nivel.
- **Mantenimiento y Certificación de Válvulas PSV** bajo NOM-093-SCFI-2020.
- **Venta y Renta de Equipos de Medición:** Manómetros IMI de acero inoxidable 316, calibradores HART, lazos 4-20 mA y bloques secos con stock inmediato.
- **Capacitación Técnica IMI Academy** con registro oficial STPS y constancias DC-3.

Cuéntame un poco más: ¿en qué proyecto o problema específico de instrumentación estás trabajando hoy?`;
}

/**
 * Llama a la API oficial de Google Gemini si existe GEMINI_API_KEY en el entorno;
 * si no, utiliza el motor de respuesta local humano de Adal.
 */
export async function generateImiConsultantResponse({
  messages,
}: {
  messages: ChatMessage[];
}): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  const userMsg = messages[messages.length - 1]?.content || "";
  const count = messages.filter((m) => m.role === "user").length;

  if (!apiKey) {
    return getImiLocalResponse(userMsg, count);
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const formattedContents = [
      {
        role: "user",
        parts: [
          {
            text: `${IMI_SYSTEM_PROMPT}\n\nHistorial de mensajes previos: ${JSON.stringify(
              messages.slice(-4)
            )}\n\nPregunta actual del cliente técnico: ${userMsg}`,
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
          temperature: 0.3,
          maxOutputTokens: 800,
        },
      }),
    });

    if (!res.ok) {
      console.warn("Gemini API error, falling back to Adal's local engine", res.status);
      return getImiLocalResponse(userMsg, count);
    }

    const data = await res.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (candidateText && typeof candidateText === "string") {
      return candidateText;
    }

    return getImiLocalResponse(userMsg, count);
  } catch (err) {
    console.warn("Exception calling Gemini, using Adal's local engine", err);
    return getImiLocalResponse(userMsg, count);
  }
}
