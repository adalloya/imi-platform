import type { Metadata } from "next";
import { SuperAdmin } from "@/components/SuperAdmin";

export const metadata: Metadata = {
  title: "Super Admin · Panel de Control Autónomo",
  description: "Panel de administración y actualización de contenidos para Instrumentación y Metrología Industrial.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="bg-ink-50 min-h-[calc(100vh-140px)]">
      <SuperAdmin />
    </div>
  );
}
