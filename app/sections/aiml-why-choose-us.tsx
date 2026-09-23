const reasons = [
  {
    number: "01",
    title: "SEC Licensed & Regulated.",
    description:
      "Assetium Investment Managers Limited is licensed by the Securities and Exchange Commission of Nigeria as a Fund and Portfolio Manager. Your investment is managed within a regulated framework.",
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
    number: "02",
    title: "Independently Rated.",
    description:
      "Assetium is rated by Augusto & Co. and Datapro, giving clients independent assurance about the strength and credibility of the business they are trusting with their investments.",
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
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Strong Governance Structure.",
    description:
      "Our corporate governance framework supports transparency, accountability, clear oversight, and disciplined decision-making across every investment mandate.",
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
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Real Assets. Real Value.",
    description:
      "Our investment approach includes real, traceable assets such as commodities alongside other carefully selected asset classes, helping connect investment decisions to tangible economic activity.",
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
        <path d="M3 20h18" />
        <path d="m5 16 4-5 3 3 5-7 2 3" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Funds Managed by Professionals.",
    description:
      "Our professionals apply research, risk-adjusted modelling, due diligence, and disciplined asset allocation to manage portfolios in line with each client's objectives.",
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
    number: "06",
    title: "Ethical Options Included.",
    description:
      "Our Ethical Portfolio gives investors access to responsible and ESG-aligned strategies designed to support long-term financial objectives.",
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

export default function AIMWhyUs() {
  return (
    <section className="relative bg-[#f8f7f3] py-24 px-4 md:px-8 overflow-hidden">
      {/* Subtle background lines */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 31px, rgba(26, 25, 25, 0.045) 32px, transparent 33px)",
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
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              Why <span className="text-brand">Assetium</span>
              <br />
              Investment Managers?
            </h2>
          </div>
          <p className="text-[.8rem] leading-relaxed text-[#1a1919]/55 max-w-sm md:text-right">
            These are strong, structured investment models that help build
            sustainable wealth.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group relative bg-white/70 border border-black/[0.08] rounded-2xl p-7 flex flex-col gap-5 hover:bg-white hover:border-brand/25 transition-all duration-300 overflow-hidden"
            >
              {/* Ghost number */}
              <span className="absolute -bottom-3 -right-2 text-[5rem] font-black text-[#1a1919]/[0.04] leading-none select-none pointer-events-none">
                {r.number}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300">
                {r.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[15px] font-bold text-[#1a1919] leading-snug group-hover:text-brand transition-colors duration-300">
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
