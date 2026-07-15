import heroBg from "@/public/home/hero-bg.png";
import Image from "next/image";

export default function AIMHero() {
  return (
    <section className="relative bg-white min-h-screen overflow-hidden flex flex-col justify-end pb-16 pt-32 px-4 md:px-8">
      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt=""
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        {/* Fade to white */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent" />
      </div>

      {/* ── Background decorative elements ── */}
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1a1919 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Concentric circles — top right */}
      <svg className="absolute -top-32 -right-32 w-[540px] h-[540px] opacity-[0.07] pointer-events-none" viewBox="0 0 540 540" fill="none">
        <circle cx="270" cy="270" r="250" stroke="#1a1919" strokeWidth="1.5" />
        <circle cx="270" cy="270" r="190" stroke="#1a1919" strokeWidth="1" />
        <circle cx="270" cy="270" r="130" stroke="#c14511" strokeWidth="1" strokeOpacity="0.6" />
      </svg>
      {/* Dashed arc — bottom left */}
      <svg className="absolute -bottom-20 -left-20 w-[300px] h-[300px] opacity-[0.07] pointer-events-none" viewBox="0 0 300 300" fill="none">
        <circle cx="150" cy="150" r="130" stroke="#1a1919" strokeWidth="1.5" strokeDasharray="5 7" />
        <circle cx="150" cy="150" r="80" stroke="#c14511" strokeWidth="1" strokeDasharray="3 5" strokeOpacity="0.5" />
      </svg>
      {/* Horizontal rule lines */}
      <div className="absolute top-[32%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a1919]/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-[67%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a1919]/[0.06] to-transparent pointer-events-none" />

      {/* Top brand rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-end">
          {/* LEFT */}
          <div className="flex flex-col gap-8 max-w-2xl">
            {/* Headline */}
            <h1 className="text-[clamp(1.8rem,5vw,4rem)] font-black text-[#1a1919] leading-[1.2] tracking-tight">
              Every Naira You Invest
              <span className="text-brand font-light">
                {" "}
                Should Work Harder.
              </span>
            </h1>

            {/* Sub copy */}
            <p className="text-[.9rem] leading-[1.9] text-[#1a1919]/60 max-w-lg">
              We manage your money so you don&apos;t have to worry about it. Whether
              you&apos;re building for retirement, your children&apos;s future, or
              long-term wealth — we have a portfolio designed for exactly that.
            </p>

            {/* Trust markers
            <div className="flex flex-wrap gap-3">
              {[
                { label: "SEC Licensed & Regulated" },
                { label: "Shariah-Compliant Option" },
                { label: "Min. ₦50,000 Entry" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.09] rounded-full px-4 py-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-white/60 tracking-wide">
                    {t.label}
                  </span>
                </div>
              ))}
            </div> */}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 bg-brand text-white text-[13px] font-bold px-7 py-3.5 rounded-md hover:bg-brand/90 transition-colors duration-200 shadow-sm"
              >
                Start Investing
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
              <a
                href="#portfolios"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1a1919]/40 hover:text-[#1a1919]/70 transition-colors duration-200"
              >
                View Our Portfolios
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT — portfolio quick-look cards */}
          <div className="hidden lg:flex flex-col gap-3">
            {[
              {
                name: "Fixed Investment Portfolio",
                risk: "Low Risk",
                riskColor: "text-emerald-400",
                riskBg: "bg-emerald-400/10 border-emerald-400/20",
                tenor: "90 · 180 · 365 days",
                highlight: "Quarterly, semi-annual or maturity profit payment",
                dot: "bg-emerald-400",
              },
              {
                name: "Kiddies Investment Portfolio",
                risk: "Low – Medium",
                riskColor: "text-sky-400",
                riskBg: "bg-sky-400/10 border-sky-400/20",
                tenor: "5 years minimum",
                highlight:
                  "Secure your child's future. Up to 20% annual withdrawal.",
                dot: "bg-sky-400",
              },
              {
                name: "Halal Investment Portfolio",
                risk: "Shariah-Compliant",
                riskColor: "text-amber-400",
                riskBg: "bg-amber-400/10 border-amber-400/20",
                tenor: "90 · 180 · 365 days",
                highlight: "Mudaraba-based. Ethical. Competitive returns.",
                dot: "bg-amber-400",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="group bg-white hover:bg-[#faf9f7] border border-[#1a1919]/[0.07] hover:border-brand/25 hover:shadow-[0_4px_20px_rgba(193,69,17,0.07)] rounded-2xl px-5 py-4 flex items-center gap-4 transition-all duration-300 cursor-pointer"
              >
                {/* Color dot */}
                <div
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${p.dot}`}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-[13px] font-bold text-[#1a1919] leading-tight truncate">
                      {p.name}
                    </h4>
                    <span
                      className={`flex-shrink-0 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${p.riskColor} ${p.riskBg}`}
                    >
                      {p.risk}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1a1919]/40 mb-1">{p.tenor}</p>
                  <p className="text-[11px] text-[#1a1919]/55 leading-snug">
                    {p.highlight}
                  </p>
                </div>

                <svg
                  className="w-4 h-4 text-[#1a1919]/25 group-hover:text-brand flex-shrink-0 transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </div>
            ))}

            {/* CTA under cards */}
            <p className="text-[10px] font-bold text-[#1a1919]/30 uppercase tracking-widest text-center mt-2">
              Explore all portfolios below ↓
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex items-center gap-3 mt-14">
          <div className="w-px h-10 bg-gradient-to-b from-[#1a1919]/20 to-transparent" />
          <span className="text-[9px] font-bold text-[#1a1919]/25 uppercase tracking-[0.3em]">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
