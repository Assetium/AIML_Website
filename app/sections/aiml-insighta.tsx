"use client";

import { useState, useEffect } from "react";
import axios from "axios";

type BlogItem = {
  id: string;
  title: string;
  category: string;
  date?: string;
  headerImage?: string;
  contentOne: string;
  author?: string;
  isFeatured?: boolean;
  readTime?: string | null;
  subsidiary?: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  blog: "Blog",
  csr: "CSR",
  press_release: "Press Release",
  insights: "Insights",
  newsletter: "Newsletter",
};

const CATEGORY_COLORS: Record<string, string> = {
  blog: "bg-brand/[0.08] text-brand border-brand/15",
  csr: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  press_release: "bg-sky-500/10 text-sky-600 border-sky-500/20",
  insights: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  newsletter: "bg-purple-500/10 text-purple-600 border-purple-500/20",
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").slice(0, 130) + "...";
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AIMLInsights() {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<BlogItem | null>(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog`)
      .then((res) => {
        const all: BlogItem[] = res.data.data;
        const aim = all.filter((item) => item.subsidiary === "aiml");
        const seen = new Set<string>();
        const deduped = aim.filter((item) => {
          if (seen.has(item.id)) return false;
          seen.add(item.id);
          return true;
        });
        setItems(deduped.slice(0, 6));
      })
      .catch(() => setError("Unable to load insights."))
      .finally(() => setLoading(false));
  }, []);

  // ── Article read view ───────────────────────────────────────────────────
  if (selected) {
    return (
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-[860px] mx-auto">
          {/* Back */}
          <button
            onClick={() => setSelected(null)}
            className="inline-flex items-center gap-2 text-[12px] font-bold text-[#1a1919]/40 hover:text-brand transition-colors mb-8 uppercase tracking-wider"
          >
            <svg
              className="w-3.5 h-3.5 rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
            Back to Insights
          </button>

          {/* Hero image */}
          {selected.headerImage && (
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img
                src={selected.headerImage}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${CATEGORY_COLORS[selected.category] ?? "bg-gray-100 text-gray-500 border-gray-200"}`}
            >
              {CATEGORY_LABELS[selected.category] ?? selected.category}
            </span>
            <span className="text-[11px] text-[#1a1919]/40">
              {formatDate(selected.date)}
            </span>
            {selected.author && (
              <span className="text-[11px] text-[#1a1919]/40">
                · {selected.author}
              </span>
            )}
            {selected.readTime && (
              <span className="text-[11px] text-[#1a1919]/40">
                · {selected.readTime} min read
              </span>
            )}
          </div>

          <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-black text-[#1a1919] leading-tight mb-8">
            {selected.title}
          </h1>

          <article
            className="prose prose-sm md:prose-base max-w-none prose-headings:font-bold prose-headings:text-[#1a1919] prose-p:text-[#1a1919]/65 prose-p:leading-relaxed prose-strong:text-[#1a1919] pb-16"
            dangerouslySetInnerHTML={{ __html: selected.contentOne }}
          />
        </div>
      </section>
    );
  }

  // ── Main section ────────────────────────────────────────────────────────
  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                Insights
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              Stay Informed. <span className="text-brand">Invest Better.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-[.8rem] leading-relaxed text-[#1a1919]/55 max-w-sm md:text-right">
              Market updates, investment education, and news from the world of
              commodity-backed asset management.
            </p>
            <a
              href="/media"
              className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand hover:text-brand/70 transition-colors uppercase tracking-wider"
            >
              View All Insights
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </a>
          </div>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-[#faf9f7] rounded-2xl h-72 animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-16 text-[#1a1919]/40 text-[.8rem]">
            {error}
          </div>
        )}

        {/* Cards */}
        {!loading && !error && (
          <>
            {items.length === 0 ? (
              <div className="text-center py-16 text-[#1a1919]/40 text-[.8rem]">
                No insights available yet. Check back soon.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Featured card — first item, spans 2 cols on lg */}
                {items[0] && (
                  <button
                    onClick={() => setSelected(items[0])}
                    className="group text-left lg:col-span-2 bg-white border border-black/[0.07] rounded-2xl overflow-hidden hover:border-brand/25 hover:shadow-[0_8px_40px_rgba(193,69,17,0.08)] transition-all duration-300 flex flex-col md:flex-row"
                  >
                    {/* Image */}
                    <div className="relative md:w-64 lg:w-80 h-52 md:h-auto overflow-hidden flex-shrink-0 bg-[#faf9f7]">
                      {items[0].headerImage && (
                        <img
                          src={items[0].headerImage}
                          alt={items[0].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 hidden md:block" />
                      {items[0].isFeatured && (
                        <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest bg-brand text-white px-2.5 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    {/* Body */}
                    <div className="flex flex-col gap-3 p-6 flex-1 justify-center">
                      <span
                        className={`self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[items[0].category] ?? "bg-gray-100 text-gray-500 border-gray-200"}`}
                      >
                        {CATEGORY_LABELS[items[0].category] ??
                          items[0].category}
                      </span>
                      <h3 className="text-[17px] font-bold text-[#1a1919] leading-snug group-hover:text-brand transition-colors duration-300">
                        {items[0].title}
                      </h3>
                      <p className="text-[.8rem] leading-relaxed text-[#1a1919]/50 line-clamp-3">
                        {stripHtml(items[0].contentOne)}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[10px] text-[#1a1919]/35 font-semibold">
                          {formatDate(items[0].date)}
                          {items[0].author && ` · ${items[0].author}`}
                        </span>
                        <span className="text-[11px] font-bold text-brand flex items-center gap-1">
                          Read
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <polyline points="14 6 20 12 14 18" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </button>
                )}

                {/* Right stacked card */}
                {items[1] && (
                  <button
                    onClick={() => setSelected(items[1])}
                    className="group text-left bg-white border border-black/[0.07] rounded-2xl overflow-hidden hover:border-brand/25 hover:shadow-[0_8px_40px_rgba(193,69,17,0.08)] transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-44 overflow-hidden bg-[#faf9f7]">
                      {items[1].headerImage && (
                        <img
                          src={items[1].headerImage}
                          alt={items[1].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span
                        className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[items[1].category] ?? "bg-white/20 text-white border-white/20"}`}
                      >
                        {CATEGORY_LABELS[items[1].category] ??
                          items[1].category}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 p-5 flex-1">
                      <p className="text-[10px] text-[#1a1919]/35 font-semibold">
                        {formatDate(items[1].date)}
                      </p>
                      <h3 className="text-[14px] font-bold text-[#1a1919] leading-snug group-hover:text-brand transition-colors line-clamp-2">
                        {items[1].title}
                      </h3>
                      <p className="text-[.75rem] text-[#1a1919]/45 line-clamp-2 flex-1">
                        {stripHtml(items[1].contentOne)}
                      </p>
                      <span className="text-[11px] font-bold text-brand flex items-center gap-1 mt-1">
                        Read More
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <polyline points="14 6 20 12 14 18" />
                        </svg>
                      </span>
                    </div>
                  </button>
                )}

                {/* Remaining cards — standard */}
                {items.slice(2).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="group text-left bg-white border border-black/[0.07] rounded-2xl overflow-hidden hover:border-brand/25 hover:shadow-[0_8px_40px_rgba(193,69,17,0.08)] transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-44 overflow-hidden bg-[#faf9f7]">
                      {item.headerImage && (
                        <img
                          src={item.headerImage}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span
                        className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[item.category] ?? "bg-white/20 text-white border-white/20"}`}
                      >
                        {CATEGORY_LABELS[item.category] ?? item.category}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 p-5 flex-1">
                      <p className="text-[10px] text-[#1a1919]/35 font-semibold">
                        {formatDate(item.date)}
                      </p>
                      <h3 className="text-[14px] font-bold text-[#1a1919] leading-snug group-hover:text-brand transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-[.75rem] text-[#1a1919]/45 line-clamp-2 flex-1">
                        {stripHtml(item.contentOne)}
                      </p>
                      <span className="text-[11px] font-bold text-brand flex items-center gap-1 mt-1">
                        Read More
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <polyline points="14 6 20 12 14 18" />
                        </svg>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
