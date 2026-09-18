const reasons = [
  {
    number: "01",
    title: "Real Assets. Real Returns.",
    description:
      "Your money is not sitting in abstract instruments. Every portfolio we manage is backed by physical commodities — real, traceable assets that produce real commercial outcomes.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Managed by Professionals.",
    description:
      "You don't have to be a market expert. Our team of investment managers monitors, adjusts, and optimises your portfolio — so you can stay focused on your life.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Accessible Entry Point.",
    description:
      "With a minimum investment of ₦50,000, AIM opens the door to professional investment management for everyday Nigerians — not just the ultra-wealthy.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Flexible to Your Goals.",
    description:
      "Whether you're investing for 90 days or 5 years, for yourself or your child, for growth or for Halal compliance — we have a portfolio that fits your exact situation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "SEC Licensed & Regulated.",
    description:
      "We operate under the full oversight of the Securities and Exchange Commission of Nigeria. Your investment is not a promise — it is a regulated financial product.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Ethical Options Included.",
    description:
      "Our Halal Investment Portfolio gives Muslim investors a fully Shariah-compliant path to growing wealth — without compromising on returns or principles.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-6 h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "3", label: "Investment Portfolios" },
  { value: "₦50K", label: "Minimum Entry" },
  { value: "SEC", label: "Licensed & Regulated" },
  { value: "100%", label: "Commodity-Backed" },
];

export default function AIMWhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1eb] py-24 px-4 text-[#1a1919] md:px-8">
      {/* Fine architectural lines keep the light surface from feeling flat. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0, transparent 72px, rgba(26,25,25,0.045) 72px, rgba(26,25,25,0.045) 73px), repeating-linear-gradient(25deg, transparent 0, transparent 118px, rgba(193,69,17,0.035) 118px, rgba(193,69,17,0.035) 119px)",
        }}
      />

      <div className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand/[0.07] blur-[110px]" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-title-xl font-bold leading-tight text-[#1a1919]">
              Why <span className="text-brand">Assetium</span>
              <br />
              Investment Managers?
            </h2>
          </div>
          <p className="max-w-sm text-[.8rem] leading-relaxed text-[#1a1919]/55 md:text-right">
            In a market full of promises, we back everything with real assets,
            professional management, and full regulatory oversight.
          </p>
        </div>

        {/* Stats strip */}
        <div className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#1a1919]/[0.08] bg-[#1a1919]/[0.07] md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-1.5 bg-[#f8f6f1]/90 px-6 py-5"
            >
              <span className="text-[2.4rem] font-black leading-none tracking-tight text-[#1a1919]">
                {s.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1919]/45">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-[#1a1919]/[0.08] bg-white/55 p-7 transition-all duration-300 hover:border-brand/30 hover:bg-white/85"
            >
              {/* Ghost number */}
              <span className="pointer-events-none absolute -bottom-3 -right-2 select-none text-[5rem] font-black leading-none text-[#1a1919]/[0.045]">
                {r.number}
              </span>

              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                {r.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[15px] font-bold leading-snug text-[#1a1919] transition-colors duration-300 group-hover:text-brand">
                  {r.title}
                </h3>
                <p className="text-[.8rem] leading-relaxed text-[#1a1919]/55">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
