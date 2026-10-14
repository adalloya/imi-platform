"use client";

import { useEffect, useState } from "react";
import { Award, CalendarDays, Clock, MapPin } from "lucide-react";
import { calendar, courses, type Course, type CourseCategory } from "@/data/academy";
import { tr } from "@/lib/i18n";
import { LeadForm } from "./LeadForm";
import { Modal } from "./Modal";
import { useI18n } from "./Providers";

type Filter = "all" | CourseCategory;

export function AcademyCatalog() {
  const { locale, t } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Course | null>(null);

  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get("cat");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- filtro inicial desde la URL
    if (cat === "certification" || cat === "basic" || cat === "specialized") setFilter(cat);
  }, []);

  const tabs: { k: Filter; l: string }[] = [
    { k: "all", l: t.academy.all },
    { k: "certification", l: t.academy.certification },
    { k: "basic", l: t.academy.basic },
    { k: "specialized", l: t.academy.specialized },
  ];

  const groups: CourseCategory[] = filter === "all" ? ["certification", "basic", "specialized"] : [filter];
  const fmt = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", year: "numeric" });

  return (
    <>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div role="tablist" className="inline-flex gap-1 rounded-lg border border-ink-200 bg-ink-50 p-1">
          {tabs.map((tb) => (
            <button
              key={tb.k}
              id={`academy-tab-${tb.k}`}
              role="tab"
              aria-selected={filter === tb.k}
              onClick={() => setFilter(tb.k)}
              className={`min-h-11 rounded-md px-4 text-sm font-semibold whitespace-nowrap transition-colors ${filter === tb.k ? "bg-white text-brand-700 shadow-sm" : "text-ink-500 hover:text-ink-800"}`}
            >
              {tb.l}
            </button>
          ))}
        </div>
      </div>

      {groups.map((g) => (
        <section key={g} className="mt-10">
          <h2 className="flex items-center gap-3 text-lg font-bold text-ink-900">
            <span className="h-5 w-1 rounded bg-brand-600" />
            {t.academy[g]}
            <span className="text-sm font-normal text-ink-400">({courses.filter((c) => c.category === g).length})</span>
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.filter((c) => c.category === g).map((c) => (
              <article key={c.id} className="card flex flex-col overflow-hidden">
                <div className="relative aspect-[16/8] bg-ink-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt="" loading="lazy" className="size-full object-cover" />
                  {c.order && (
                    <span className="absolute top-3 left-3 flex size-8 items-center justify-center rounded bg-brand-600 font-mono text-sm font-bold text-white">{c.order}</span>
                  )}
                  {g === "certification" && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 rounded bg-white/95 px-2 py-1 text-xs font-semibold text-brand-700">
                      <Award className="size-3.5" /> {t.academy.certification}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold leading-snug text-ink-900">{tr(c.name, locale)}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-500">{tr(c.summary, locale)}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="chip"><Clock className="mr-1 size-3" />{c.hours} {t.common.hours}</span>
                    {c.modality.map((m) => <span key={m} className="chip">{t.modality[m]}</span>)}
                  </div>
                  <div className="mt-auto pt-5">
                    <button id={`course-${c.id}`} onClick={() => setSelected(c)} className="btn btn-outline w-full">
                      {t.common.learnMore} · {t.common.enroll}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section id="calendario" className="mt-16 scroll-mt-28">
        <h2 className="flex items-center gap-2 text-xl font-bold text-ink-900">
          <CalendarDays className="size-5 text-brand-600" /> {t.academy.calendar}
        </h2>
        <div className="mt-5 overflow-hidden rounded-lg border border-ink-200">
          <ul className="divide-y divide-ink-100">
            {calendar.map((ev) => {
              const c = courses.find((x) => x.id === ev.courseId)!;
              return (
                <li key={ev.courseId + ev.date} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-24 shrink-0 rounded bg-brand-50 px-2 py-2 text-center font-mono text-xs font-semibold text-brand-700">
                      {fmt.format(new Date(ev.date + "T12:00:00"))}
                    </div>
                    <div>
                      <p className="font-semibold text-ink-900">{tr(c.name, locale)}</p>
                      <p className="flex items-center gap-1 text-sm text-ink-500"><MapPin className="size-3.5" />{ev.city}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelected(c)} className="btn btn-primary sm:w-auto">{t.common.enroll}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected ? tr(selected.name, locale) : ""}>
        {selected && (
          <>
            <p className="text-sm text-ink-600">{tr(selected.summary, locale)}</p>
            <h4 className="mt-5 text-sm font-semibold text-ink-900">{t.common.topics}</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-600">
              {selected.topics.map((tp, i) => (
                <li key={i} className="flex gap-2"><span className="font-mono text-brand-600">{String(i + 1).padStart(2, "0")}</span>{tr(tp, locale)}</li>
              ))}
            </ul>
            <h4 className="mt-5 text-sm font-semibold text-ink-900">{t.common.endorsement}</h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {selected.endorsement.map((e) => <span key={e} className="chip font-mono">{e}</span>)}
            </div>
            <hr className="my-6 border-ink-200" />
            <LeadForm
              id="course-form"
              type="COURSE"
              extra={{ Curso: tr(selected.name, "es"), Horas: String(selected.hours) }}
              fields={[
                { name: "name", label: t.common.name, required: true },
                { name: "company", label: t.common.company, required: true },
                { name: "participants", label: t.common.participants, type: "number" },
                { name: "modality", label: t.common.modality, type: "select", options: selected.modality.map((m) => t.modality[m]) },
                { name: "phone", label: t.common.phone, type: "tel" },
              ]}
            />
          </>
        )}
      </Modal>
    </>
  );
}
