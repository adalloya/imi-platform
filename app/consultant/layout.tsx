import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Consultor Técnico IMI · Asistente de Ingeniería y Ventas",
  description: "Asistente técnico especializado en calibración, válvulas PSV y metrología industrial.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-ink-50 antialiased overflow-hidden">{children}</body>
    </html>
  );
}
