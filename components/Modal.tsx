"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export function Modal({
  open,
  onClose,
  title,
  children,
  tone = "default",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  tone?: "default" | "danger";
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label={title}>
      <button className="absolute inset-0 bg-ink-950/60" onClick={onClose} aria-label="Cerrar" />
      <div className="relative max-h-[92dvh] w-full overflow-y-auto rounded-t-xl bg-white shadow-2xl sm:max-w-lg sm:rounded-xl">
        <div className={`sticky top-0 flex items-center justify-between px-5 py-4 ${tone === "danger" ? "bg-safety-500 text-white" : "border-b border-ink-200 bg-white"}`}>
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="flex size-10 items-center justify-center rounded-md hover:bg-black/10" aria-label="Cerrar">
            <X className="size-5" />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
