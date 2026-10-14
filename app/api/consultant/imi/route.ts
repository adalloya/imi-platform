import { NextResponse } from "next/server";
import { generateImiConsultantResponse, type ChatMessage } from "@/lib/gemini-imi";

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

    const encodedMsg = encodeURIComponent(
      `Hola IMI, me comunico tras consultar con su asistente técnico: ${chatHistory[chatHistory.length - 1].content.slice(0, 120)}`,
    );
    const whatsappUrl = `https://wa.me/528331550189?text=${encodedMsg}`;

    return NextResponse.json({
      reply,
      whatsappUrl,
      consultant: "Ingeniero Senior de Aplicaciones y Consultor Comercial IMI",
    });
  } catch (error) {
    console.error("Error en API /api/consultant/imi:", error);
    return NextResponse.json(
      {
        reply:
          "Nuestro equipo de ingeniería está disponible 24/7. Puede contactar directamente con el ingeniero de guardia al celular (833) 155.0189 o vía WhatsApp directo.",
        whatsappUrl: "https://wa.me/528331550189",
      },
      { status: 200 },
    );
  }
}
