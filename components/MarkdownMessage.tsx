"use client";

import React from "react";
import { MessageSquare, ExternalLink } from "lucide-react";

interface MarkdownMessageProps {
  content: string;
  className?: string;
  isUser?: boolean;
}

type Block =
  | { type: "p"; lines: string[] }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] };

/**
 * Renderizador de mensajes que transforma sintaxis Markdown a componentes React estilizados
 * sin fugas de caracteres como asteriscos, corchetes, paréntesis escapados o viñetas rotas.
 */
export function MarkdownMessage({ content, className = "", isUser = false }: MarkdownMessageProps) {
  if (!content) return null;

  if (isUser) {
    return <p className={`whitespace-pre-wrap leading-relaxed ${className}`}>{content}</p>;
  }

  // Sanitizar caracteres escapados como \(NOM-093\) o asteriscos extra
  const cleanContent = content
    .replace(/\\([()[\]])/g, "$1") // des-escapar \( \) \[ \]
    .replace(/\r\n/g, "\n");

  const lines = cleanContent.split("\n");
  const blocks: Block[] = [];
  let currentBlock: Block | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      continue;
    }

    const olMatch = line.match(/^(\d+)\.\s+(.*)$/);
    const ulMatch = line.match(/^([*•\-])\s+(.*)$/);

    if (olMatch) {
      const text = olMatch[2];
      if (currentBlock && currentBlock.type === "ol") {
        currentBlock.items.push(text);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: "ol", items: [text] };
      }
    } else if (ulMatch) {
      const text = ulMatch[2];
      if (currentBlock && currentBlock.type === "ul") {
        currentBlock.items.push(text);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: "ul", items: [text] };
      }
    } else {
      if (currentBlock && currentBlock.type === "p") {
        currentBlock.lines.push(line);
      } else {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: "p", lines: [line] };
      }
    }
  }

  if (currentBlock) {
    blocks.push(currentBlock);
  }

  return (
    <div className={`space-y-3 leading-relaxed text-inherit ${className}`}>
      {blocks.map((block, bIdx) => {
        if (block.type === "ol") {
          return (
            <ol key={bIdx} className="space-y-1.5 my-2.5 pl-5 list-decimal text-inherit">
              {block.items.map((item, iIdx) => (
                <li key={iIdx} className="leading-relaxed pl-1">
                  {parseInlineText(item)}
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={bIdx} className="space-y-1.5 my-2.5 pl-1 text-inherit">
              {block.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-brand-600 font-bold shrink-0 mt-0.5">•</span>
                  <span className="flex-1">{parseInlineText(item)}</span>
                </li>
              ))}
            </ul>
          );
        }

        // Párrafo normal
        return (
          <p key={bIdx} className="text-inherit">
            {block.lines.map((l, lIdx) => (
              <React.Fragment key={lIdx}>
                {parseInlineText(l)}
                {lIdx < block.lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Tokeniza formato en línea: enlaces [texto](url), negritas **texto**, cursivas *texto* y código `code`
 */
function parseInlineText(text: string): React.ReactNode {
  // Regex para capturar [link](url), **bold**, *italic*, `code`
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (!part) return null;

    // Enlace Markdown [texto](url)
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        const linkText = match[1].replace(/^[👉\s]+/, "").trim();
        const linkUrl = match[2].trim();
        const isWhatsApp = linkUrl.includes("wa.me") || linkUrl.includes("whatsapp");

        if (isWhatsApp) {
          return (
            <span key={idx} className="block my-2.5">
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all hover:scale-[1.02] active:scale-95 text-center"
              >
                <MessageSquare className="size-4 shrink-0" />
                <span>{linkText}</span>
                <ExternalLink className="size-3.5 opacity-80" />
              </a>
            </span>
          );
        }

        return (
          <a
            key={idx}
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
    }

    // Negrita **texto**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      const boldInner = part.slice(2, -2);
      return (
        <strong key={idx} className="font-extrabold text-ink-950">
          {boldInner}
        </strong>
      );
    }

    // Cursiva *texto*
    if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
      const italicInner = part.slice(1, -1);
      return (
        <em key={idx} className="italic font-medium">
          {italicInner}
        </em>
      );
    }

    // Código `code`
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return (
        <code key={idx} className="rounded bg-brand-50 px-1 py-0.5 font-mono text-xs text-brand-800">
          {part.slice(1, -1)}
        </code>
      );
    }

    // Texto plano
    return <span key={idx}>{part}</span>;
  });
}
