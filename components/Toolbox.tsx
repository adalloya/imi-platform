"use client";

import { useMemo, useState } from "react";
import { Activity, Gauge, Thermometer } from "lucide-react";
import { useI18n } from "./Providers";

/* Factores a Pascal */
const P_UNITS: Record<string, number> = {
  Pa: 1,
  kPa: 1e3,
  MPa: 1e6,
  bar: 1e5,
  mbar: 100,
  psi: 6894.757293168,
  "kg/cm²": 98066.5,
  atm: 101325,
  "inH₂O": 249.08891,
  "mmH₂O": 9.80665,
  mmHg: 133.322387415,
  inHg: 3386.389,
};

const fmt = (n: number) =>
  !isFinite(n) ? "—" : Math.abs(n) >= 1e6 || (Math.abs(n) < 1e-3 && n !== 0) ? n.toExponential(4) : Number(n.toPrecision(7)).toString();

function Card({ icon: I, title, children }: { icon: typeof Gauge; title: string; children: React.ReactNode }) {
  return (
    <section className="card p-5 sm:p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold text-ink-900">
        <span className="flex size-9 items-center justify-center rounded-md bg-brand-50 text-brand-600"><I className="size-5" /></span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Num({ id, label, value, onChange, step = "any" }: { id: string; label: string; value: string; onChange: (v: string) => void; step?: string }) {
  return (
    <div>
      <label htmlFor={id} className="label">{label}</label>
      <input id={id} type="number" inputMode="decimal" step={step} value={value} onChange={(e) => onChange(e.target.value)} className="field font-mono text-lg" />
    </div>
  );
}

export function Toolbox() {
  const { t } = useI18n();

  // Presión
  const [pv, setPv] = useState("100");
  const [pu, setPu] = useState("psi");
  const pa = (parseFloat(pv) || 0) * P_UNITS[pu];

  // 4-20 mA
  const [lrv, setLrv] = useState("0");
  const [urv, setUrv] = useState("250");
  const [unit, setUnit] = useState("psi");
  const [ma, setMa] = useState("12");
  const [pct, setPct] = useState("50");
  const [eu, setEu] = useState("125");
  const L = parseFloat(lrv) || 0;
  const U = parseFloat(urv) || 0;
  const span = U - L;

  function fromMa(v: string) {
    setMa(v);
    const m = parseFloat(v);
    if (isNaN(m)) return;
    const p = ((m - 4) / 16) * 100;
    setPct(fmt(p));
    setEu(fmt(L + (p / 100) * span));
  }
  function fromPct(v: string) {
    setPct(v);
    const p = parseFloat(v);
    if (isNaN(p)) return;
    setMa(fmt(4 + (p / 100) * 16));
    setEu(fmt(L + (p / 100) * span));
  }
  function fromEu(v: string) {
    setEu(v);
    const e = parseFloat(v);
    if (isNaN(e) || span === 0) return;
    const p = ((e - L) / span) * 100;
    setPct(fmt(p));
    setMa(fmt(4 + (p / 100) * 16));
  }
  const maN = parseFloat(ma);
  const nonNamur = !isNaN(maN) && (maN < 3.8 || maN > 20.5);

  // Temperatura
  const [tv, setTv] = useState("25");
  const [tu, setTu] = useState<"°C" | "°F" | "K" | "°R">("°C");
  const temps = useMemo(() => {
    const v = parseFloat(tv) || 0;
    const c = tu === "°C" ? v : tu === "°F" ? (v - 32) * (5 / 9) : tu === "K" ? v - 273.15 : (v - 491.67) * (5 / 9);
    return { "°C": c, "°F": c * 1.8 + 32, K: c + 273.15, "°R": (c + 273.15) * 1.8 };
  }, [tv, tu]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card icon={Gauge} title={t.toolbox.pressure}>
        <div className="grid grid-cols-[1fr_auto] gap-3">
          <Num id="p-value" label={t.toolbox.value} value={pv} onChange={setPv} />
          <div>
            <label htmlFor="p-unit" className="label">{t.toolbox.from}</label>
            <select id="p-unit" value={pu} onChange={(e) => setPu(e.target.value)} className="field">
              {Object.keys(P_UNITS).map((u) => <option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink-200 bg-ink-200 sm:grid-cols-3">
          {Object.entries(P_UNITS).map(([u, f]) => (
            <div key={u} className={`bg-white px-3 py-2.5 ${u === pu ? "bg-brand-50" : ""}`}>
              <dt className="text-xs text-ink-500">{u}</dt>
              <dd className="font-mono text-sm font-semibold text-ink-900">{fmt(pa / f)}</dd>
            </div>
          ))}
        </dl>
      </Card>

      <Card icon={Activity} title={t.toolbox.current}>
        <div className="grid grid-cols-3 gap-3">
          <Num id="lrv" label={t.toolbox.lrv} value={lrv} onChange={setLrv} />
          <Num id="urv" label={t.toolbox.urv} value={urv} onChange={setUrv} />
          <div>
            <label htmlFor="eu-unit" className="label">{t.toolbox.unit}</label>
            <input id="eu-unit" value={unit} onChange={(e) => setUnit(e.target.value)} className="field" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 rounded-md bg-ink-50 p-3">
          <Num id="ma" label={t.toolbox.ma} value={ma} onChange={fromMa} />
          <Num id="pct" label={t.toolbox.percent} value={pct} onChange={fromPct} />
          <Num id="eu" label={`${t.toolbox.eu} (${unit})`} value={eu} onChange={fromEu} />
        </div>
        <div className="mt-4">
          <div className="relative h-3 overflow-hidden rounded-full bg-ink-100">
            <div className="absolute inset-y-0 left-0 bg-brand-600 transition-all" style={{ width: `${Math.min(100, Math.max(0, parseFloat(pct) || 0))}%` }} />
          </div>
          <div className="mt-1 flex justify-between font-mono text-xs text-ink-400">
            <span>4 mA · {lrv}</span><span>12 mA</span><span>20 mA · {urv}</span>
          </div>
          {nonNamur && <p className="mt-3 rounded-md border border-safety-500/40 bg-safety-500/5 px-3 py-2 text-sm font-medium text-safety-600">{t.toolbox.outOfRange}</p>}
        </div>
      </Card>

      <Card icon={Thermometer} title={t.toolbox.temperature}>
        <div className="grid grid-cols-[1fr_auto] gap-3">
          <Num id="t-value" label={t.toolbox.value} value={tv} onChange={setTv} />
          <div>
            <label htmlFor="t-unit" className="label">{t.toolbox.from}</label>
            <select id="t-unit" value={tu} onChange={(e) => setTu(e.target.value as typeof tu)} className="field">
              {Object.keys(temps).map((u) => <option key={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink-200 bg-ink-200 sm:grid-cols-4">
          {Object.entries(temps).map(([u, v]) => (
            <div key={u} className="bg-white px-3 py-2.5">
              <dt className="text-xs text-ink-500">{u}</dt>
              <dd className="font-mono text-sm font-semibold text-ink-900">{fmt(v)}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  );
}
