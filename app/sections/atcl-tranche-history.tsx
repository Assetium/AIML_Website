"use client";

import { useState } from "react";

const tranches = [
  {
    id: 1,
    label: "Tranche 1",
    status: "completed",
    year: "2025",
    color: "#16a34a",
    defaultCommodity: 0,
    commodities: [
      {
        name: "Ginger",
        emoji: "🫚",
        status: "completed",
        summary:
          "Ginger was the anchor commodity of Tranche 1. The cycle ran its full course — from planting through harvest and sales — with all proceeds returned to members at cycle close.",
        highlights: [
          "Full planting-to-sales cycle completed",
          "Strong market off-take achieved",
          "All capital and profits returned to members",
        ],
        youtubeId: "ex_bq5dabRE?si=DlMvcqYWgKlwcXFG",
      },
      {
        name: "Turmeric",
        emoji: "🟡",
        status: "completed",
        summary:
          "Turmeric completed as the long-term anchor of Tranche 1. Spanning the full calendar window, it delivered on its promise as a stable, high-demand commodity with reliable off-take across food, wellness, and cosmetic markets.",
        highlights: [
          "Longest cycle in Tranche 1 — completed in full",
          "Multi-market demand ensured strong sales",
          "Profit shared at cycle close",
        ],
        youtubeId: "QcX_ZuDfqsQ?si=W_qmSNfHkFY8VwI2",
      },
    ],
  },
  {
    id: 2,
    label: "Tranche 2",
    status: "active",
    year: "2026",
    color: "#c14511",
    defaultCommodity: 0,
    commodities: [
      {
        name: "Ginger",
        emoji: "🫚",
        status: "live",
        summary:
          "Ginger is the first commodity live in Tranche 2. Capital has been deployed, cultivation is underway, and we are on track within the cycle window. Field updates are shared with members regularly.",
        highlights: [
          "Capital fully deployed",
          "Active cultivation underway",
          "On track for harvest window",
          "Regular member field updates",
        ],
        youtubeId: "ex_bq5dabRE?si=DlMvcqYWgKlwcXFG",
      },
      {
        name: "Turmeric",
        emoji: "🟡",
        status: "soon",
        summary:
          "The Turmeric cycle within Tranche 2 is yet to open. It will follow the Ginger cycle and will run as the long-term portfolio anchor for this tranche. Members will be notified ahead of the opening.",
        highlights: [
          "Cycle not yet opened",
          "Will follow the Ginger cycle",
          "Members to be notified at opening",
        ],
        youtubeId: null,
      },
      {
        name: "Maize",
        emoji: "🌽",
        status: "soon",
        summary:
          "The Maize cycle within Tranche 2 is yet to open. As the short-term cycle, it will provide faster liquidity for members looking to reinvest into longer cycles. Opening date to be announced.",
        highlights: [
          "Cycle not yet opened",
          "Fastest cycle — 4 to 5 months",
          "Opening date to be announced",
        ],
        youtubeId: null,
      },
    ],
  },
];

const trancheStatusConfig: Record<
  string,
  { label: string; dot: string; badge: string }
> = {
  completed: {
    label: "Completed",
    dot: "bg-green-500",
    badge: "bg-green-500/10 border-green-500/20 text-green-600",
  },
  active: {
    label: "Active",
    dot: "bg-brand animate-pulse",
    badge: "bg-brand/10 border-brand/20 text-brand",
  },
};

const commodityStatusConfig: Record<
  string,
  { label: string; color: string; bg: string; border: string; dot: string }
> = {
  completed: {
    label: "Completed",
    color: "#16a34a",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    dot: "bg-green-500",
  },
  live: {
    label: "Live",
    color: "#c14511",
    bg: "bg-brand/10",
    border: "border-brand/20",
    dot: "bg-brand animate-pulse",
  },
  soon: {
    label: "Coming Soon",
    color: "#d97706",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
  },
};

export default function ATCTrancheHistory() {
  const [activeTranche, setActiveTranche] = useState(2);
  const [activeCommodityIndex, setActiveCommodityIndex] = useState(0);

  const tranche = tranches.find((t) => t.id === activeTranche)!;
  const commodity = tranche.commodities[activeCommodityIndex];
  const tStatus = trancheStatusConfig[tranche.status];
  const cStatus = commodityStatusConfig[commodity.status];

  const handleTrancheSwitch = (id: number) => {
    setActiveTranche(id);
    setActiveCommodityIndex(0);
  };

  return (
    <section className="bg-[#faf9f7] py-12 px-4 lg:px-20 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                Tranche History
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              Our Trading <span className="text-brand">Track Record</span>
            </h2>
          </div>
          <p className="text-[.8rem] leading-relaxed text-foreground max-w-sm md:text-right">
            Transparency is core to how we operate. Every tranche is documented
            — see what was traded, how it performed, and where we are today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          {/* ── Left: Tranche selector ── */}
          <div className="flex sm:flex-col gap-2 w-full sm:w-44 flex-shrink-0">
            {tranches.map((t) => {
              const s = trancheStatusConfig[t.status];
              return (
                <button
                  key={t.id}
                  onClick={() => handleTrancheSwitch(t.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all duration-200 w-full ${
                    activeTranche === t.id
                      ? "bg-white border-black/[0.08] shadow-sm"
                      : "bg-transparent border-black/[0.04] hover:border-black/[0.08] hover:bg-white/60"
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${s.dot}`}
                    />
                    {t.id < tranches.length && (
                      <span className="w-px h-4 bg-black/10" />
                    )}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className={`text-[12px] font-bold ${activeTranche === t.id ? "text-[#1a1919]" : "text-[#1a1919]/50"}`}
                    >
                      {t.label}
                    </span>
                    <span className="text-[10px] text-[#1a1919]/40">
                      {t.year}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Right: Content panel ── */}
          <div className="flex-1 bg-white border border-black/[0.07] rounded-2xl overflow-hidden">
            {/* Tranche header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-[#faf9f7]">
              <div className="flex items-center gap-2">
                {tranche.commodities.map((c, i) => (
                  <span key={i} className="text-xl">
                    {c.emoji}
                  </span>
                ))}
                <h3 className="text-[15px] font-bold text-[#1a1919] ml-1">
                  {tranche.label}
                </h3>
                <span className="text-[#1a1919]/30 mx-1">·</span>
                <span className="text-[12px] text-[#1a1919]/40">
                  {tranche.year}
                </span>
              </div>
              <span
                className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${tStatus.badge}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${tStatus.dot}`} />
                {tStatus.label}
              </span>
            </div>

            {/* ── Nested commodity tabs ── */}
            <div className="px-6 pt-4 pb-0 border-b border-black/[0.06]">
              <div className="flex gap-1">
                {tranche.commodities.map((c, i) => {
                  const cs = commodityStatusConfig[c.status];
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveCommodityIndex(i)}
                      className={`flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold rounded-t-lg border-t border-x transition-all duration-200 ${
                        activeCommodityIndex === i
                          ? "bg-white border-black/[0.07] text-[#1a1919] -mb-px pb-[calc(0.625rem+1px)]"
                          : "bg-transparent border-transparent text-[#1a1919]/40 hover:text-[#1a1919]/70"
                      }`}
                    >
                      <span>{c.emoji}</span>
                      <span>{c.name}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${cs.dot}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Commodity content ── */}
            <div
              key={`${activeTranche}-${activeCommodityIndex}`}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Left — details */}
              <div className="flex flex-col gap-5 p-7 border-b lg:border-b-0 lg:border-r border-black/[0.06]">
                {/* Commodity status badge */}
                <span
                  className={`self-start flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${cStatus.bg} ${cStatus.border}`}
                  style={{ color: cStatus.color }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${cStatus.dot}`} />
                  {cStatus.label}
                </span>

                <p className="text-[.85rem] leading-relaxed text-foreground">
                  {commodity.summary}
                </p>

                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-brand underline uppercase tracking-wider">
                    Highlights
                  </span>
                  {commodity.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[8px] font-black"
                        style={{
                          backgroundColor: `${cStatus.color}18`,
                          color: cStatus.color,
                        }}
                      >
                        {commodity.status === "completed"
                          ? "✓"
                          : commodity.status === "live"
                            ? "●"
                            : "○"}
                      </span>
                      <span className="text-[.8rem] text-[#1a1919]/90">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — video or coming soon */}
              <div className="flex flex-col gap-4 p-7">
                <span className="text-[10px] font-bold text-[#1a1919]/40 uppercase tracking-wider">
                  Field Footage & Updates
                </span>

                {commodity.youtubeId ? (
                  <>
                    <div
                      className="relative w-full rounded-xl overflow-hidden bg-black/[0.04] border border-black/[0.06]"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${commodity.youtubeId}`}
                        title={`${tranche.label} — ${commodity.name} footage`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <p className="text-[.8rem] text-[#1a1919]/40">
                      Watch our team on the ground — from planting through to
                      harvest.
                    </p>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center rounded-xl border border-dashed border-black/[0.08] bg-black/[0.02] py-12 gap-3">
                    <span className="text-4xl opacity-30">
                      {commodity.emoji}
                    </span>
                    <p className="text-[.8rem] text-[#1a1919]/35 text-center max-w-[200px]">
                      Field footage will be available once this cycle opens.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 bg-white border border-black/[0.06] rounded-2xl px-7 py-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px] font-bold text-[#1a1919]">
              Ready to participate in the next tranche?
            </span>
            <p className="text-[.8rem] text-[#1a1919]/50">
              Join ACTL and be part of our next commodity cycle.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-brand/90 transition-colors duration-200 flex-shrink-0"
          >
            Open an Account
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
