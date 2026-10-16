import { NextResponse } from "next/server";
import { generateImiConsultantResponse, extractLeadInfo, type ChatMessage } from "@/lib/gemini-imi";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, messages } = body;

    const chatHistory: ChatMessage[] = Array.isArray(messages)
      ? messages
      : message
      ? [{ role: "user", content: String(message) }]
      : [];

    if (!chatHistory.length) {
      return NextResponse.json(
        { error: "Se requiere un mensaje para consultar al ingeniero de IMI." },
        { status: 400 },
      );
    }

    const reply = await generateImiConsultantResponse({ messages: chatHistory });
    const lead = extractLeadInfo(chatHistory);

    // Solo asociar URL de WhatsApp si la respuesta contiene explícitamente un enlace a WhatsApp (wa.me)
    const waLinkMatch = reply.match(/https:\/\/wa\.me\/[^\s)\]]+/);
    const whatsappUrl = waLinkMatch ? waLinkMatch[0] : undefined;

    return NextResponse.json({
      reply,
      whatsappUrl,
      lead,
      consultant: "Sergio · Director General e Ingeniero Senior IMI",
    });
  } catch (error) {
    console.error("Error en API /api/consultant/imi:", error);
    return NextResponse.json(
      {
        reply:
          "Nuestro equipo de ingeniería está disponible 24/7. Puede contactar directamente con el ingeniero de guardia al teléfono (833) 126.9795 o por WhatsApp.",
        whatsappUrl: "https://wa.me/528331550189?text=Hola%20Sergio%2C%20requiero%20atenci%C3%B3n%20t%C3%A9cnica%20de%20guardia%20IMI",
      },
      { status: 200 },
    );
  }
}
