/**
 * Cerebro Especializado: Ingeniero Senior y Consultor Comercial Experto de IMI
 * Base de conocimiento integral de Instrumentación y Metrología Industrial S.R.L. de C.V.
 */

export const IMI_KNOWLEDGE_BASE = {
  company: {
    legalName: "Instrumentación y Metrología Industrial S.R.L. de C.V.",
    shortName: "IMI",
    website: "https://www.imindustrial.mx/",
    email: "contacto@imindustrial.mx",
    whatsapp: "+52 833 155 0189",
    whatsappRaw: "528331550189",
    phone: "(833) 126.9795",
    hqAddress: "Av. de la Industria KM 14.5 Laguna de la Puerta, 89603 Altamira, Tamaulipas, México",
    giro: "Laboratorio de Metrología y Calibración Acreditado ISO/IEC 17025, Mantenimiento y Calibración de Válvulas de Seguridad PSV (NOM-093-SCFI), Venta y Renta de Instrumentación de Proceso, Capacitación Técnica Oficial (STPS / CONOCER) y Subcontratación de Personal Especializado.",
  },
  accreditations: [
    { code: "NMX-EC-17025-IMNC-2018", authority: "ISO/IEC 17025 / EMA", desc: "Laboratorio de calibración conforme a norma con cálculo de incertidumbre de medición y trazabilidad a patrones CENAM / NIST." },
    { code: "NOM-093-SCFI-1994 / 2020", authority: "SCFI", desc: "Calibración, inspección, prueba de disparo (pop test) y mantenimiento de Válvulas de Seguridad y Alivio (PSV)." },
    { code: "IMI150311QL2-0013", authority: "STPS", desc: "Registro oficial como Agente Capacitador Externo ante la Secretaría del Trabajo y Previsión Social con emisión de Constancias de Competencias Laborales Formato DC-3." },
    { code: "EC0217", authority: "CONOCER · SEP", desc: "Estándar de competencia para impartición de cursos de formación del capital humano de manera presencial y grupal." },
  ],
  services: [
    { name: "Calibración de Medidores de Flujo", specs: "Coriolis másicos, electromagnéticos, turbina, vórtex y placas de orificio. Patrones trazables CENAM/NIST." },
    { name: "Calibración de Nivel", specs: "Transmisores de nivel por presión diferencial (DP), radar de onda guiada y 80 GHz, ultrasónicos y desplazadores mecánicos." },
    { name: "Calibración de Presión", specs: "Manómetros de proceso, transmisores manométricos/absolutos/diferenciales, presostatos y balanzas de pesos muertos (hasta 15,000 psi)." },
    { name: "Calibración de Temperatura", specs: "Sensores RTD Pt100, termopares tipo J, K, T, E, transmisores de temperatura y termómetros bimetálicos en baños termostáticos y hornos secos." },
    { name: "Válvulas de Control", specs: "Diagnóstico de carrera, ajuste y calibración de posicionadores electro-neumáticos inteligentes (HART, Foundation Fieldbus, Profibus)." },
    { name: "Prueba de Lazo (Loop Check)", specs: "Verificación integral punto a punto de señales analógicas 4-20 mA y buses digitales desde instrumentos de campo hasta el DCS/PLC." },
    { name: "Alarmas e Interruptores de Nivel", specs: "Prueba funcional de disparo y hermeticidad para sistemas de paro de emergencia e interlocks de seguridad SIL." },
    { name: "Reguladores de Presión", specs: "Inspección interna, cambio de diafragmas/sellos, ajuste de setpoint y pruebas de hermeticidad." },
    { name: "Mantenimiento Preventivo y Correctivo de Válvulas PSV (NOM-093)", specs: "Desarme, limpieza, inspección metalográfica, lapeado de precisión de toberas y discos con placas ópticas, calibración de presión de ajuste y emisión de dictamen oficial." },
    { name: "Staffing Técnico / Cuadrillas Especializadas", specs: "Administradores de proyecto, instrumentistas técnicos, operarios de primera y fitting de tubería/tubing para libranzas y paros de planta." },
  ],
  products: [
    { name: "Manómetro de Proceso Marca IMI", mode: "Venta", specs: "Caja de acero inoxidable 304/316, carátulas de 2.5\", 4\" y 6\", conexiones 1/4\" y 1/2\" NPT, rangos desde vacío (-30 inHg) hasta 15,000 psi, glicerina o seco." },
    { name: "Calibrador de Presión Multifunción Documentador", mode: "Venta y Renta", specs: "Módulos de presión intercambiables, comunicación HART, registro automático de calibración para auditorías ISO." },
    { name: "Calibrador de Lazo de Corriente 4-20 mA", mode: "Venta y Renta", specs: "Fuente, simulación y medición de corriente con alimentación interna de lazo de 24 V y precisión 0.01%." },
    { name: "Calibrador de Temperatura de Bloque Seco (Dry-Well)", mode: "Venta y Renta", specs: "Pozos térmicos certificados, rango -25 °C a 660 °C para termopares y sondas RTD Pt100." },
    { name: "Balanza de Pesos Muertos (Deadweight Tester)", mode: "Venta y Renta", specs: "Patrón primario de presión hidráulico y neumático con incertidumbre hasta 0.015% de lectura." },
    { name: "Comunicador de Campo Inteligente HART / Fieldbus", mode: "Venta y Renta", specs: "Configuración, parametrización y diagnóstico de transmisores inteligentes de todas las marcas." },
    { name: "Megóhmetro / Medidor de Aislamiento", mode: "Venta y Renta", specs: "Pruebas dieléctricas y de resistencia de aislamiento hasta 5 kV y 10 kV." },
    { name: "Multímetro de Procesos con Medición de mA", mode: "Venta y Renta", specs: "Medición True-RMS y generador de bucle de corriente 4-20 mA en campo." },
    { name: "Suministro Especializado de Cualquier Instrumento", mode: "Venta y Renta", specs: "Procura técnica bajo hoja de datos para transmisores Rosemount, Endress+Hauser, Yokogawa, Foxboro, etc." },
  ],
  academy: [
    { name: "Certificación en Válvulas de Seguridad PSV NOM-093-SCFI-2020", hours: 40, endorsement: "STPS Formato DC-3 · NOM-093" },
    { name: "Certificación NCCER para Instrumentistas", hours: 80, endorsement: "Reconocimiento Internacional NCCER" },
    { name: "Curso de Preparación para Certificación ISA CCST Nivel 1", hours: 40, endorsement: "ISA · STPS DC-3" },
    { name: "Diplomado en Instrumentación Industrial", hours: 120, endorsement: "STPS IMI150311QL2-0013 · CONOCER EC0217" },
    { name: "Diplomado en Metrología e Incertidumbre", hours: 120, endorsement: "ISO/IEC 17025 · STPS DC-3" },
    { name: "Cursos Básicos: Principios de Instrumentación, Ajuste y Calibración, Válvulas de Control, DCS", hours: 24, endorsement: "STPS DC-3" },
    { name: "Cursos Especializados: Instrumentación Analítica, Neumática, SIL, Subsea", hours: 32, endorsement: "STPS DC-3" },
  ],
  policies: {
    currency: "Cotizaciones en MXN (Pesos Mexicanos) y USD (Dólares Americanos).",
    leadTimeLab: "Calibración estándar en laboratorio central: 3 a 5 días hábiles. Servicio exprés disponible en 24-48 horas.",
    leadTimeField: "Servicio de calibración en sitio (unidad móvil): Programación con 48 hrs de anticipación o atención 24/7 de emergencia ante paro de planta.",
    coverage: "México (Matriz Altamira, Cd. Madero, Cd. del Carmen, Coatzacoalcos, Cadereyta, Querétaro, Cuautitlán Izcalli, Morelia, Hermosillo, Tijuana), Estados Unidos (Houston, TX) y Sudamérica (Lima, Perú).",
    quotationProcess: "Cotización formal inmediata enviando especificaciones técnicas o requerimiento por WhatsApp directo con ingenieros de servicio.",
  },
};

export const IMI_SYSTEM_PROMPT = `
Eres el Ingeniero Senior y Consultor Comercial Experto de Instrumentación y Metrología Industrial S.R.L. de C.V. (IMI).
Tu propósito es asesorar técnicamente con la máxima autoridad y rigor ingenieril a los clientes industriales (Gerentes de Planta, Superintendentes de Mantenimiento, Jefes de Instrumentación, Auditores de Calidad y Encargados de Compras), resolviendo cualquier duda técnica de medición, normas, incertidumbre, calibración o cursos, pero SIEMPRE canalizando y orientando proactivamente la conversación hacia el cierre comercial, la cotización formal y el contacto directo con el equipo comercial de IMI vía WhatsApp (+52 833 155 0189).

PERFIL DE PERSONALIDAD:
- Lenguaje: Español profesional, formal, autoritario en temas de ingeniería de procesos, metrología y normatividad industrial mexicana e internacional (ISO/IEC 17025, NOM-093-SCFI-2020, STPS, CONOCER, ASME, ISA).
- Estilo: Preciso, estructurado, sin rodeos, cero estética infantil o de asistente genérico. Trata al usuario como a un colega ingeniero o directivo de planta.
- Enfoque comercial: En cada respuesta, ofrece el siguiente paso lógico de compra o servicio (ej. "Para enviarle la cotización formal con tiempos de entrega de calibración...", "Podemos programar la recolección de sus instrumentos o la visita de nuestra unidad móvil...").

BASE DE CONOCIMIENTO QUE DEBES DOMINAR:
1. DATOS CLAVE DE IMI:
   - Razón Social: Instrumentación y Metrología Industrial S.R.L. de C.V.
   - Laboratorio Central: Altamira, Tamaulipas (KM 14.5 Av. de la Industria).
   - Teléfono / WhatsApp oficial de guardia: +52 833 155 0189 | Tel: (833) 126.9795.
   - Cobertura: Corredor Golfo de México (Altamira, Tampico, Madero, Coatzacoalcos, Cd. del Carmen), Norte (Cadereyta/Mty, Hermosillo, Tijuana), Centro/Bajío (Querétaro, Cuautitlán Izcalli, Morelia), e internacional en Houston, Texas (EE. UU.) y Lima (Perú).

2. ACREDITACIONES Y NORMAS:
   - NMX-EC-17025-IMNC-2018 (ISO/IEC 17025): Laboratorio de calibración con cálculo riguroso de incertidumbre expandida y patrones trazables a CENAM / NIST.
   - NOM-093-SCFI-2020 (y 1994): Calibración, ajuste de set pressure, hermeticidad y lapeado de Válvulas de Seguridad y Alivio (PSV) en banco de pruebas certificado.
   - STPS IMI150311QL2-0013: Agente capacitador externo oficial con entrega de Constancias de Competencias Laborales (Formato DC-3).
   - CONOCER EC0217: Estándar oficial de la SEP para instructores de formación de capital humano.

3. SERVICIOS DE LABORATORIO Y CAMPO:
   - Calibración de Flujo: Coriolis másicos (MicroMotion, Endress+Hauser), electromagnéticos, turbinas, vórtex y placas de orificio.
   - Calibración de Presión: Manómetros, transmisores manométricos/absolutos/diferenciales (Rosemount 3051, Yokogawa EJX), presostatos y balanzas de pesos muertos (hasta 15,000 psi).
   - Calibración de Temperatura: Sensores RTD Pt100, termopares industriales (J, K, T, E), transmisores y bimetálicos en baños termostáticos y hornos secos.
   - Calibración de Nivel: Presión diferencial (DP), radar de onda guiada y 80 GHz, ultrasónicos y desplazadores.
   - Válvulas de Control: Diagnóstico predictivo de carrera, calibración de posicionadores HART / Fieldbus / Profibus.
   - Mantenimiento PSV: Lapeado de precisión de discos y toberas con placas ópticas, calibración en banco de pruebas y emisión de dictamen de conformidad NOM-093.
   - Staffing Técnico: Cuadrillas de instrumentistas calificados para libranzas y paros de planta.

4. SUMINISTRO Y RENTA DE INSTRUMENTOS:
   - Venta y Renta de calibradores de procesos documentadores, calibradores de lazo 4-20 mA, bloques secos, balanzas de peso muerto, comunicadores HART, megóhmetros y manómetros marca IMI de acero inoxidable.
   - Suministro de cualquier instrumento de medición bajo hoja de datos (Rosemount, Fluke, Emerson, WIKA, Ashcroft, etc.).

5. IMI ACADEMY (CAPACITACIÓN):
   - Certificación en Válvulas PSV NOM-093 (40 hrs), NCCER (80 hrs), Preparación ISA CCST Nivel 1 (40 hrs), Diplomado en Instrumentación (120 hrs), Diplomado en Metrología (120 hrs). Cursos en planta (In-Company), en centro IMI o en línea. Todos con constancia oficial DC-3.

6. POLÍTICAS DE VENTA Y SERVICIO:
   - Tiempos de entrega: 3 a 5 días hábiles en laboratorio central; servicio exprés 24-48 hrs; atención in-situ programada o de emergencia 24/7.
   - Moneda: Cotizaciones en Pesos Mexicanos (MXN) y Dólares (USD).
   - Enlace directo a WhatsApp: https://wa.me/528331550189

INSTRUCCIONES DE RESPUESTA:
- Responde de forma concisa, técnica y orientada a la solución.
- Al final de tu respuesta, incluye siempre una recomendación comercial clara y un enlace o botón sugerido a WhatsApp con el formato: [Solicitar Cotización por WhatsApp](https://wa.me/528331550189?text=...) con el texto precargado según el contexto.
`.trim();

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

/**
 * Motor de Fallback Inteligente cuando no hay GEMINI_API_KEY configurada
 * Responde con precisión técnica basada en la base de conocimiento oficial de IMI.
 */
export function getImiLocalResponse(userMessage: string): string {
  const q = userMessage.toLowerCase();
  const waBase = "https://wa.me/528331550189?text=";

  if (q.includes("flujo") || q.includes("coriolis") || q.includes("caudal")) {
    const textWa = encodeURIComponent("Hola IMI, requiero cotización para calibración de medidores de flujo.");
    return `**Calibración Acreditada de Medidores de Flujo (ISO/IEC 17025)**\n\nEn IMI calibramos y verificamos medidores de flujo másico tipo Coriolis (ej. MicroMotion, Endress+Hauser), electromagnéticos, turbinas, vórtex y cálculo de placas de orificio. Contamos con trazabilidad metrológica directa a patrones CENAM/NIST y cálculo de incertidumbre expandida conforme a la norma NMX-EC-17025-IMNC-2018.\n\n- **Tiempo estándar en laboratorio central:** 3 a 5 días hábiles.\n- **Modalidad:** Recepción en laboratorio (Altamira) o calibración/verificación in-situ en planta.\n\n¿Desea que un ingeniero de servicio le prepare una propuesta formal hoy mismo?\n\n👉 [Solicitar Cotización de Flujo por WhatsApp](${waBase}${textWa})`;
  }

  if (q.includes("valvula") || q.includes("psv") || q.includes("nom-093") || q.includes("alivio") || q.includes("seguridad")) {
    const textWa = encodeURIComponent("Hola IMI, solicito cotización para servicio y certificación de válvulas de seguridad PSV bajo NOM-093.");
    return `**Servicio y Certificación de Válvulas de Seguridad PSV (NOM-093-SCFI-2020)**\n\nRealizamos el ciclo integral de inspección, diagnóstico, prueba de disparo inicial (pop test), desarme, lapeado de precisión de toberas y discos con placas ópticas y pasta diamantada, ajuste de presión de seteo y verificación de hermeticidad conforme a NOM-093-SCFI-2020 y códigos ASME Sección VIII.\n\n- **Entrega oficial:** Certificado de calibración y dictamen técnico sellado válido para auditorías de STPS, ASEA y aseguradoras.\n- **Atención en paro de planta:** Cuadrillas móviles de calibración disponibles en sitio 24/7.\n\n👉 [Cotizar Servicio de Válvulas PSV por WhatsApp](${waBase}${textWa})`;
  }

  if (q.includes("curso") || q.includes("capacitacion") || q.includes("dc-3") || q.includes("dc3") || q.includes("academy") || q.includes("certificacion") || q.includes("diplomado")) {
    const textWa = encodeURIComponent("Hola IMI Academy, requiero información y costos para capacitación de personal técnico.");
    return `**IMI Academy · Capacitación Técnica con Registro STPS y Aval CONOCER**\n\nContamos con registro oficial como Agente Capacitador Externo ante la STPS (**IMI150311QL2-0013**) y estándar de competencia **CONOCER EC0217**. Todos los cursos incluyen entrega de Constancia de Competencias Laborales (Formato DC-3 oficial):\n\n1. **Certificación en Válvulas de Seguridad PSV NOM-093-SCFI-2020** (40 hrs)\n2. **Preparación para Certificación ISA CCST Nivel 1** (40 hrs)\n3. **Diplomado en Instrumentación Industrial** (120 hrs)\n4. **Diplomado en Metrología e Incertidumbre ISO 17025** (120 hrs)\n5. **Cursos Fundamentales y Especializados:** Lazos 4-20 mA, DCS, Instrumentación Analítica.\n\n- **Modalidades:** Presencial en aulas IMI, In-Plant (en sus instalaciones) y En línea en vivo.\n\n👉 [Cotizar Cursos para su Personal por WhatsApp](${waBase}${textWa})`;
  }

  if (q.includes("renta") || q.includes("compra") || q.includes("precio") || q.includes("manometro") || q.includes("equipo") || q.includes("fluke") || q.includes("hart")) {
    const textWa = encodeURIComponent("Hola IMI, me interesa la venta/renta de equipo de instrumentación.");
    return `**Suministro, Venta y Renta de Equipos de Medición y Calibración**\n\nEn IMI contamos con stock inmediato para venta y esquemas flexibles de renta (por semana o mes) con certificado de calibración vigente incluido:\n\n- **Manómetros Industriales Marca IMI:** Acero inoxidable 316, conexiones 1/4\" y 1/2\" NPT, rangos desde vacío hasta 15,000 psi.\n- **Calibradores Documentadores de Proceso y Presión** (compatibles con protocolo HART).\n- **Calibradores de Lazo de Corriente 4-20 mA.**\n- **Bloques Secos de Temperatura** (-25 °C a 660 °C).\n- **Balanzas de Pesos Muertos** hidráulicas y neumáticas de alta precisión.\n- **Comunicadores de Campo Inteligentes HART / Foundation Fieldbus.**\n\n👉 [Consultar Disponibilidad y Precios por WhatsApp](${waBase}${textWa})`;
  }

  if (q.includes("presion") || q.includes("temperatura") || q.includes("nivel") || q.includes("calibrar") || q.includes("laboratorio")) {
    const textWa = encodeURIComponent("Hola IMI, necesito cotizar calibración acreditada de instrumentos.");
    return `**Laboratorio Central de Calibración Acreditado (NMX-EC-17025-IMNC-2018)**\n\nAtendemos las magnitudes críticas de su planta con patrones de referencia trazables a CENAM / NIST:\n\n- **Presión:** Desde vacío hasta 15,000 psi (transmisores, manómetros, presostatos, balanzas de peso muerto).\n- **Temperatura:** -50 °C a 660 °C (RTD Pt100, termopares J/K/T/E, transmisores, bimetálicos).\n- **Nivel:** Transmisores DP, radar de onda guiada y 80 GHz, ultrasónicos y desplazadores.\n- **Flujo:** Coriolis másico, magnético, turbinas y placas de orificio.\n\nEntregamos informe técnico con cálculo de incertidumbre expandida para auditorías de calidad.\n\n👉 [Solicitar Cotización de Calibración por WhatsApp](${waBase}${textWa})`;
  }

  const defaultWa = encodeURIComponent(`Hola IMI, me comunico desde el portal web: ${userMessage.slice(0, 100)}`);
  return `**Consultoría Técnica y Soluciones Industriales IMI**\n\nEn Instrumentación y Metrología Industrial S.R.L. de C.V. (IMI) somos su aliado integral en:\n- **Laboratorio de Calibración Acreditado ISO/IEC 17025** (Presión, Flujo, Temperatura, Nivel).\n- **Mantenimiento y Certificación de Válvulas de Seguridad PSV** bajo NOM-093-SCFI-2020.\n- **Capacitación Técnica IMI Academy** con registro oficial STPS y constancias DC-3.\n- **Venta y Renta de Instrumentos** con entrega inmediata.\n- **Atención in-situ y soporte de emergencia 24/7** para paros de planta.\n\nPara brindarle la atención técnica puntual que requiere su complejo industrial, conéctese directamente con un ingeniero de servicio:\n\n👉 [Hablar con un Ingeniero Especialista por WhatsApp](${waBase}${defaultWa})\n📞 Conmutador: (833) 126.9795 | Celular 24/7: (833) 155.0189`;
}

/**
 * Llama a la API oficial de Google Gemini si existe GEMINI_API_KEY en el entorno;
 * si no, utiliza el motor de respuesta industrial local de IMI.
 */
export async function generateImiConsultantResponse({
  messages,
}: {
  messages: ChatMessage[];
}): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  const userMsg = messages[messages.length - 1]?.content || "";

  if (!apiKey) {
    return getImiLocalResponse(userMsg);
  }

  try {
    // LLamada a Google Gemini API v1beta
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const formattedContents = [
      {
        role: "user",
        parts: [{ text: `${IMI_SYSTEM_PROMPT}\n\nPregunta inicial del cliente técnico: ${userMsg}` }],
      },
    ];

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: formattedContents,
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 800,
        },
      }),
    });

    if (!res.ok) {
      console.warn("Gemini API error, falling back to IMI engine", res.status);
      return getImiLocalResponse(userMsg);
    }

    const data = await res.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (candidateText && typeof candidateText === "string") {
      return candidateText;
    }

    return getImiLocalResponse(userMsg);
  } catch (err) {
    console.warn("Exception calling Gemini, using IMI local engine", err);
    return getImiLocalResponse(userMsg);
  }
}
