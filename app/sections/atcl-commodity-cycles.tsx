"use client";

import { useState } from "react";

const commodities = [
  {
    emoji: "🌽",
    name: "Maize",
    type: "Short-Term",
    duration: "4–5 Months",
    position: "Liquidity & Faster Returns",
    color: "#f59e0b",
    phases: [
      { label: "Planting", period: "Mar – Apr" },
      { label: "Growing", period: "Apr – Jun" },
      { label: "Harvest", period: "Jun – Jul" },
      { label: "Sales", period: "Jul – Aug" },
    ],
    why: "Completes quickly, supports cash flow, and allows early profits to be reinvested into longer cycles.",
    width: [15, 35, 25, 25],
    active: false,
  },
  {
    emoji: "🫚",
    name: "Ginger",
    type: "Medium-Term",
    duration: "8–9 Months",
    position: "Margin-Driven Growth",
    color: "#c14511",
    phases: [
      { label: "Planting", period: "Mar – Apr" },
      { label: "Growing", period: "Apr – Oct" },
      { label: "Harvest", period: "Oct – Nov" },
      { label: "Sales", period: "Nov – Dec" },
    ],
    why: "Balances time and returns — strong margins from a high-value spice with multiple demand channels.",
    width: [10, 50, 20, 20],
    active: true,
  },
  {
    emoji: "🍠",
    name: "Turmeric",
    type: "Long-Term",
    duration: "10–12 Months",
    position: "Stability & Portfolio Anchor",
    color: "#d97706",
    phases: [
      { label: "Planting", period: "Apr – May" },
      { label: "Growing", period: "May – Jan" },
      { label: "Harvest", period: "Jan – Feb" },
      { label: "Sales", period: "Feb – Mar" },
    ],
    why: "Anchors the portfolio — demand spans food, wellness, and cosmetics, giving it reliable off-take when processed.",
    width: [8, 60, 18, 14],
    active: false,
  },
];

export default function ATCCommoditiesCycles() {
  const [active, setActive] = useState(1);
  const c = commodities[active];

  return (
    <section className="bg-[#f7f4ef] py-10 px-4 lg:px-20 md:px-8 relative overflow-hidden">
      {/* Grid line background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a1919 1px, transparent 1px), linear-gradient(90deg, #1a1919 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                Commodities & Cycles
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              What We <span className="text-brand">Trade</span>
            </h2>
          </div>
          <p className="text-[.8rem] leading-relaxed text-[#1a1919]/50 max-w-sm md:text-right">
            Assetium Commodity Trading League operates multiple commodity cycles
            within a single calendar year. Members can participate in short,
            medium, and long-term cycles simultaneously.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-[#1a1919]/[0.05] border border-[#1a1919]/[0.08] rounded-xl p-1.5 w-fit">
          {commodities.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                active === i
                  ? "bg-white text-[#1a1919] shadow-sm border border-[#1a1919]/[0.08]"
                  : "text-[#1a1919]/35 hover:text-[#1a1919]/65"
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.name}</span>
              {tab.active && (
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          key={active}
          className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] rounded-2xl overflow-hidden border border-[#1a1919]/[0.08]"
          style={{
            borderColor: active === 1 ? "rgba(193,69,17,0.3)" : undefined,
          }}
        >
          {/* Left identity panel */}
          <div
            className="relative flex flex-col justify-between p-8 overflow-hidden"
            style={{ backgroundColor: `${c.color}12` }}
          >
            {/* Watermark */}
            <span className="absolute -bottom-6 -right-4 text-[8rem] opacity-[0.07] select-none pointer-events-none leading-none">
              {c.emoji}
            </span>

            <div className="flex flex-col gap-4">
              <span className="text-5xl">{c.emoji}</span>
              <div>
                <h3 className="text-[32px] font-black text-[#1a1919] leading-none">
                  {c.name}
                </h3>
                <span
                  className="text-[11px] font-bold uppercase tracking-widest mt-1 block"
                  style={{ color: c.color }}
                >
                  {c.type}
                </span>
              </div>

              {c.active && (
                <div className="flex items-center gap-2 bg-brand/15 border border-brand/25 rounded-full px-3 py-1.5 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  <span className="text-[10px] font-bold text-brand uppercase tracking-widest">
                    Live — Tranche 2
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1 mt-8 relative z-10">
              <span className="text-[10px] font-bold text-[#1a1919]/35 uppercase tracking-wider">
                Duration
              </span>
              <span className="text-[28px] font-black text-[#1a1919]">
                {c.duration}
              </span>
              <span
                className="text-[11px] font-semibold mt-1 italic"
                style={{ color: `${c.color}cc` }}
              >
                &quot;{c.position}&quot;
              </span>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col gap-7 p-8 bg-white">
            {/* Timeline bar */}
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-bold text-[#1a1919]/35 uppercase tracking-wider">
                Cycle Timeline
              </span>
              <div className="flex h-2.5 rounded-full overflow-hidden gap-px">
                {c.phases.map((_, j) => (
                  <div
                    key={j}
                    className="h-full"
                    style={{
                      width: `${c.width[j]}%`,
                      backgroundColor:
                        j === 0
                          ? `${c.color}35`
                          : j === 1
                            ? `${c.color}70`
                            : j === 2
                              ? `${c.color}b0`
                              : c.color,
                    }}
                  />
                ))}
              </div>

              {/* Phase labels */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-1">
                {c.phases.map((phase, j) => (
                  <div key={j} className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor:
                            j === 0
                              ? `${c.color}50`
                              : j === 1
                                ? `${c.color}90`
                                : j === 2
                                  ? `${c.color}c0`
                                  : c.color,
                        }}
                      />
                      <span className="text-[10px] font-bold text-[#1a1919]/35 uppercase tracking-wide">
                        {phase.label}
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-[#1a1919] pl-3.5">
                      {phase.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#1a1919]/[0.06]" />

            {/* Why members choose this */}
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-bold text-[#1a1919]/50 uppercase tracking-wider">
                Why Members Choose This
              </span>
              <p className="text-[.93rem] leading-relaxed text-[#1a1919]/70">
                {c.why}
              </p>
            </div>

            <div className="border-t border-[#1a1919]/[0.06]" />

            {/* Portfolio note */}
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${c.color}15` }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4"
                  stroke={c.color}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2 L2 7 L12 12 L22 7 Z" />
                  <path d="M2 17 L12 22 L22 17" />
                  <path d="M2 12 L12 17 L22 12" />
                </svg>
              </div>
              <p className="text-[.92rem] leading-relaxed text-[#1a1919]/70">
                Members can split capital across multiple cycles to balance cash
                flow and reduce risk — Maize completes first, Ginger follows,
                Turmeric closes last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
