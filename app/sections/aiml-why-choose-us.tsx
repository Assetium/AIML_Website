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
    <section className="relative bg-[#111110] py-24 px-4 md:px-8 overflow-hidden">
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Brand glow — center left */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-brand/[0.07] blur-[120px] rounded-full pointer-events-none" />

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
            <h2 className="text-title-xl font-bold text-white leading-tight">
              Why <span className="text-brand">Assetium</span>
              <br />
              Investment Managers?
            </h2>
          </div>
          <p className="text-[.8rem] leading-relaxed text-white/45 max-w-sm md:text-right">
            In a market full of promises, we back everything with real assets,
            professional management, and full regulatory oversight.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] mb-14">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-1.5 px-6 py-5 bg-[#111110]"
            >
              <span className="text-[2.4rem] font-black text-white leading-none tracking-tight">
                {s.value}
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
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
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/[0.06] hover:border-brand/25 transition-all duration-300 overflow-hidden"
            >
              {/* Ghost number */}
              <span className="absolute -bottom-3 -right-2 text-[5rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                {r.number}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300">
                {r.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[15px] font-bold text-white leading-snug group-hover:text-brand transition-colors duration-300">
                  {r.title}
                </h3>
                <p className="text-[.8rem] leading-relaxed text-white/45">
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
