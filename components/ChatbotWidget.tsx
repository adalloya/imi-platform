"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Minus,
  RefreshCw,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { MarkdownMessage } from "@/components/MarkdownMessage";
import { images } from "@/data/company";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  whatsappUrl?: string;
};

const STARTER_PROMPTS = [
  "Cotizar Calibración de Flujo",
  "Mantenimiento Válvulas PSV (NOM-093)",
  "Renta de Calibrador Multifunción",
  "Cursos IMI Academy con DC-3",
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "¡Hola! ¿Qué tal? Soy Sergio, Director General e Ingeniero Senior de IMI.\n\nEstoy aquí para apoyarte directamente con cualquier especificación técnica sobre calibración acreditada ISO/IEC 17025, mantenimiento de válvulas de seguridad PSV (NOM-093), venta y renta de instrumentos o capacitaciones oficiales STPS con constancia DC-3.\n\n¿En qué proyecto o equipo de tu planta estás trabajando hoy?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, loading]);

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
          content: data.reply,
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
            "Disculpe, ocurrió una intermitencia de red. Puede conectarse directamente con nuestro equipo de guardia vía WhatsApp o intentar nuevamente.",
          whatsappUrl:
            "https://wa.me/528331550189?text=Hola%20IMI,%20requiero%20apoyo%20con%20una%20consulta%20t%C3%A9cnica",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* BOTÓN FLOTANTE PRINCIPAL (VISIBLE EN MOBILE Y DESKTOP) */}
      <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2">
        <button
          id="open-chatbot-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group flex h-12 sm:h-13 items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 px-4 sm:px-5 font-bold text-white shadow-[0_10px_25px_-5px_rgba(2,86,178,0.5)] ring-2 ring-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Abrir Chat con Consultor IA IMI"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="size-5 sm:size-5.5 text-white" />
            <span className="absolute -top-1 -right-1 flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-extrabold tracking-wide text-white leading-none">
              Consultor IA
            </span>
            <span className="text-[10px] text-brand-200 font-mono leading-none mt-0.5">
              Ingeniero IMI en línea
            </span>
          </div>
          <Sparkles className="size-3.5 text-yellow-300 hidden sm:inline" />
        </button>
      </div>

      {/* VENTANA FLOTANTE DEL CHATBOT */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-20 top-auto z-50 sm:inset-x-auto sm:right-4 sm:bottom-20 sm:w-[410px] md:w-[440px] max-h-[82vh] h-[580px] flex flex-col rounded-2xl bg-white border border-ink-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header del Chat */}
          <div className="bg-gradient-to-r from-ink-950 via-brand-950 to-brand-900 text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-brand-800">
            <div className="flex items-center gap-3">
              <div className="relative flex size-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <Bot className="size-5 text-brand-200" />
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-ink-950" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white">Sergio · Ingeniero Consultor IMI</h3>
                  <span className="rounded bg-brand-500/20 px-1.5 py-0.2 text-[9px] font-mono text-brand-200 font-semibold">
                    EN LÍNEA
                  </span>
                </div>
                <p className="text-[11px] text-ink-300">
                  Director General & Consultor Técnico
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Link
                href="/consultant/imi"
                target="_blank"
                className="p-1.5 text-ink-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                title="Abrir en pantalla completa"
              >
                <ExternalLink className="size-4" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-ink-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Historial de Mensajes con fondo sutilmente azul para máximo contraste */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-brand-50/70 text-xs sm:text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "assistant" && (
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white mt-0.5 shadow-sm">
                    <Bot className="size-4" />
                  </div>
                )}

                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 leading-relaxed ${
                    m.role === "user"
                      ? "bg-brand-600 text-white rounded-br-xs shadow-md"
                      : "bg-white text-ink-900 border border-brand-100/90 rounded-bl-xs shadow-md"
                  }`}
                >
                  <MarkdownMessage content={m.content} isUser={m.role === "user"} />

                  {m.whatsappUrl && !m.content.includes("wa.me") && (
                    <div className="mt-3 pt-2.5 border-t border-brand-100 flex flex-col gap-1.5">
                      <a
                        href={m.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-all shadow-sm"
                      >
                        <span>Continuar por WhatsApp con Sergio</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {m.role === "user" && (
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink-300 text-ink-800 mt-0.5 shadow-sm">
                    <User className="size-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-ink-500 italic bg-white p-2.5 rounded-xl border border-brand-200/80 shadow-xs w-fit">
                <RefreshCw className="size-3.5 animate-spin text-brand-600" />
                <span>Analizando requerimiento técnico...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Sugerencias rápidas */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 bg-white/95 border-t border-brand-100 flex gap-1.5 overflow-x-auto no-scrollbar">
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="shrink-0 text-[11px] font-medium bg-brand-50/80 hover:bg-brand-100 hover:text-brand-800 text-brand-900 px-2.5 py-1 rounded-full transition-colors border border-brand-200/80 shadow-2xs"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-white border-t border-brand-200/70 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu consulta técnica o cotización..."
              disabled={loading}
              className="flex-1 bg-brand-50/40 border border-brand-200/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-ink-900 focus:outline-none focus:border-brand-600 focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="size-9 sm:size-10 flex shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-40 transition-colors shadow-sm cursor-pointer"
              aria-label="Enviar mensaje"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
