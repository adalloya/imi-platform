"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Send, Sparkles, User, ExternalLink, RefreshCw, CheckCircle2, Bot } from "lucide-react";
import { MarkdownMessage } from "@/components/MarkdownMessage";
import { images } from "@/data/company";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  whatsappUrl?: string;
};

const STARTER_PROMPTS = [
  "Cotizar Calibración de Flujo (Coriolis / Vórtex)",
  "Mantenimiento Válvulas PSV NOM-093-SCFI-2020",
  "Certificaciones IMI Academy con Formato STPS DC-3",
  "Renta de Calibrador de Presión Multifunción",
];

export default function ImiConsultantPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "¡Hola! ¿Qué tal? Soy Sergio, Director General e Ingeniero Senior de IMI.\n\nEstoy a tu disposición para apoyarte directamente con cualquier duda o especificación sobre calibración acreditada ISO/IEC 17025, mantenimiento de válvulas de seguridad PSV (NOM-093), venta y renta de instrumentos o capacitaciones oficiales STPS con constancia DC-3.\n\n¿En qué proyecto o equipo de tu planta estás trabajando hoy?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(textToSend?: string) {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMsg: Msg = { id: String(Date.now()), role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/consultant/imi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error("Error en servidor");
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          role: "assistant",
          content: data.reply || "Un ingeniero de IMI puede atenderle vía WhatsApp al +52 833 155 0189.",
          whatsappUrl: data.whatsappUrl,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          role: "assistant",
          content:
            "Estimado cliente, tenemos línea técnica activa 24/7. Puede conectarse directamente con nuestro ingeniero de servicio vía WhatsApp para cotización formal inmediata.",
          whatsappUrl: "https://wa.me/528331550189",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen w-full flex-col bg-brand-50/50 text-ink-900 font-sans antialiased">
      {/* HEADER CORPORATIVO IMI */}
      <header className="flex shrink-0 items-center justify-between border-b border-brand-200/80 bg-white px-4 py-3 shadow-xs sm:px-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.logo}
              alt="Logotipo IMI"
              className="h-9 w-auto max-w-[140px] sm:max-w-[170px] object-contain"
            />
          </div>
          <div className="border-l border-ink-200 pl-3">
            <div className="flex items-center gap-1.5">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <h1 className="text-xs sm:text-sm font-bold text-ink-900">
                Sergio · Director General e Ingeniero Senior
              </h1>
            </div>
            <p className="text-[11px] text-ink-500 font-mono">
              Laboratorio Acreditado ISO/IEC 17025 · Altamira, Tamps.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="btn btn-outline min-h-9 px-3 text-xs font-bold"
          >
            Volver al Portal
          </Link>
        </div>
      </header>

      {/* ÁREA DE MENSAJES CON FONDO SUTILMENTE AZUL */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-brand-50/70">
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <div
              key={m.id}
              className={`flex gap-3 max-w-3xl ${isUser ? "ml-auto justify-end" : "mr-auto justify-start"}`}
            >
              {!isUser && (
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white font-extrabold text-xs shadow-md">
                  Sergio
                </div>
              )}

              <div
                className={`rounded-2xl p-4 text-sm leading-relaxed ${
                  isUser
                    ? "bg-brand-600 text-white rounded-br-none shadow-md"
                    : "bg-white text-ink-900 border border-brand-100/90 rounded-bl-none shadow-md"
                }`}
              >
                <MarkdownMessage content={m.content} isUser={isUser} />

                {!isUser && m.whatsappUrl && !m.content.includes("wa.me") && (
                  <div className="mt-3 pt-3 border-t border-ink-100 flex flex-wrap gap-2">
                    <a
                      href={m.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-all shadow-sm"
                    >
                      <ExternalLink className="size-3.5" /> Continuar Cotización en WhatsApp
                    </a>
                  </div>
                )}
              </div>

              {isUser && (
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink-200 text-ink-700 font-bold text-xs">
                  <User className="size-4" />
                </div>
              )}
            </div>
          );
        })}

        {loading && (
          <div className="flex items-center gap-3 text-xs text-ink-500 font-mono">
            <div className="flex size-8 items-center justify-center rounded-lg bg-brand-700 text-white font-bold text-xs">
              IMI
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-white border border-ink-200 px-3 py-2 shadow-sm">
              <RefreshCw className="size-3.5 animate-spin text-brand-600" />
              <span>Analizando especificaciones técnicas...</span>
            </div>
          </div>
        )}

        <div ref={scrollRef} />
      </main>

      {/* SUGERENCIAS RÁPIDAS (PROMPTS TÉCNICOS) */}
      <div className="bg-white/95 border-t border-brand-200/70 px-4 py-2 sm:px-6">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {STARTER_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="shrink-0 rounded-full border border-brand-200/80 bg-brand-50/70 px-3 py-1 text-xs font-medium text-brand-900 hover:border-brand-500 hover:text-brand-800 hover:bg-brand-100 transition-colors cursor-pointer shadow-2xs"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* FORMULARIO DE ENVÍO */}
      <footer className="border-t border-brand-200/70 bg-white p-3 sm:p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="mx-auto flex max-w-4xl items-center gap-2"
        >
          <input
            className="field flex-1 text-sm py-2.5 px-4"
            placeholder="Pregunte sobre calibración de flujo, válvulas PSV, cursos DC-3 o precios..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="btn btn-primary shrink-0 min-h-11 px-5 font-bold"
          >
            <Send className="size-4" /> Enviar
          </button>
        </form>
        <p className="mt-2 text-center text-[10px] text-ink-400 font-mono">
          Instrumentación y Metrología Industrial S.R.L. de C.V. · STPS IMI150311QL2-0013 · CONOCER EC0217
        </p>
      </footer>
    </div>
  );
}
