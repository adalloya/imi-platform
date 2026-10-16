"use client";

import React from "react";
import { MessageSquare, ExternalLink } from "lucide-react";

interface MarkdownMessageProps {
  content: string;
  className?: string;
  isUser?: boolean;
}

/**
 * Renderizador de mensajes que transforma sintaxis Markdown a componentes React estilizados:
 * - Convierte **negritas** en <strong>
 * - Convierte *cursivas* en <em>
 * - Convierte enlaces [texto](url) en botones de acción o hipervínculos limpios (¡cero paréntesis o corchetes expuestos!)
 * - Convierte listas con guiones o viñetas (- , * , 1.) en listas estilizadas
 * - Maneja saltos de línea naturales
 */
export function MarkdownMessage({ content, className = "", isUser = false }: MarkdownMessageProps) {
  if (!content) return null;

  // Si es mensaje del usuario, no requiere parseo de links externos complejos
  if (isUser) {
    return <p className={`whitespace-pre-wrap leading-relaxed ${className}`}>{content}</p>;
  }

  // Dividir por bloques de párrafos (doble salto de línea)
  const blocks = content.split(/\n{2,}/);

  return (
    <div className={`space-y-3 leading-relaxed ${className}`}>
      {blocks.map((block, bIdx) => {
        const trimmedBlock = block.trim();
        if (!trimmedBlock) return null;

        const lines = trimmedBlock.split("\n");

        // Detectar si el bloque es una lista con viñetas (- , * , • ) o numerada (1. )
        const isList = lines.every(
          (l) => /^\s*([*•-]|(\d+\.))\s+/.test(l) || l.trim() === ""
        );

        if (isList) {
          return (
            <ul key={bIdx} className="space-y-2 my-2 pl-1">
              {lines.map((line, lIdx) => {
                const match = line.match(/^\s*([*•-]|(\d+\.))\s+(.*)$/);
                if (!match) return null;
                const itemContent = match[3];

                return (
                  <li key={lIdx} className="flex items-start gap-2 text-inherit">
                    <span className="text-brand-600 font-bold shrink-0 mt-0.5">•</span>
                    <span className="flex-1">{parseInlineText(itemContent)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Párrafo normal con posibles saltos de línea internos
        return (
          <p key={bIdx} className="text-inherit">
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {parseInlineText(line)}
                {lIdx < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Parsea formato en línea: enlaces [texto](url), negritas **texto**, y cursivas *texto*
 */
function parseInlineText(text: string): React.ReactNode {
  // Regex para encontrar enlaces [texto](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    const start = match.index;
    const end = linkRegex.lastIndex;

    // Texto antes del enlace
    if (start > lastIndex) {
      parts.push(parseFormatting(text.slice(lastIndex, start)));
    }

    const linkText = match[1];
    const linkUrl = match[2];
    const isWhatsApp = linkUrl.includes("wa.me") || linkUrl.includes("whatsapp");

    if (isWhatsApp) {
      // Si es un enlace a WhatsApp, renderizarlo como botón interactivo destacado
      parts.push(
        <span key={`wa-${start}`} className="block my-2">
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all hover:scale-[1.02] active:scale-95 text-center"
          >
            <MessageSquare className="size-4 shrink-0" />
            <span>{linkText.replace(/^[👉\s]+/, "").trim()}</span>
            <ExternalLink className="size-3.5 opacity-80" />
          </a>
        </span>
      );
    } else {
      // Enlace web regular
      parts.push(
        <a
          key={`link-${start}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold text-brand-700 hover:text-brand-900 underline decoration-brand-400 hover:decoration-brand-600 transition-colors"
        >
          <span>{linkText}</span>
          <ExternalLink className="size-3 opacity-70" />
        </a>
      );
    }

    lastIndex = end;
  }

  // Texto restante
  if (lastIndex < text.length) {
    parts.push(parseFormatting(text.slice(lastIndex)));
  }

  return parts.length > 0 ? parts : text;
}

/**
 * Parsea negritas **texto** y cursivas *texto*
 */
function parseFormatting(text: string): React.ReactNode {
  // Separar por tokens de **negrita**
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);

  return boldParts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={idx} className="font-extrabold text-ink-950">
          {boldText}
        </strong>
      );
    }

    // Cursivas *texto*
    const italicParts = part.split(/(\*[^*]+\*)/g);
    if (italicParts.length > 1) {
      return italicParts.map((iPart, iIdx) => {
        if (iPart.startsWith("*") && iPart.endsWith("*") && iPart.length > 2) {
          return (
            <em key={`${idx}-${iIdx}`} className="italic font-medium">
              {iPart.slice(1, -1)}
            </em>
          );
        }
        return iPart;
      });
    }

    return part;
  });
}
