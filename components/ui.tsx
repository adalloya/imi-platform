import {
  BarChart3, BellRing, CircleGauge, ClipboardList, Cpu, Gauge, HardHat, Repeat,
  ShieldCheck, SlidersHorizontal, Thermometer, Waves, Wrench, type LucideProps,
} from "lucide-react";

const map = {
  BarChart3, BellRing, CircleGauge, ClipboardList, Cpu, Gauge, HardHat, Repeat,
  ShieldCheck, SlidersHorizontal, Thermometer, Waves, Wrench,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = map[name as keyof typeof map] ?? Gauge;
  return <C {...props} />;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  as: H = "h2",
  center,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H className={`h-section ${eyebrow ? "mt-2" : ""}`}>{title}</H>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-ink-500 sm:text-lg">{subtitle}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="absolute inset-0 size-full object-cover opacity-25" loading="eager" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-brand-900/60" />
      <div className="grid-lines absolute inset-0" />
      <div className="container-x relative py-14 sm:py-20">
        {eyebrow && <p className="text-xs font-semibold tracking-[0.14em] text-brand-200 uppercase">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-ink-300 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
