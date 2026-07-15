const services = [
  {
    number: "01",
    title: "Portfolio Management",
    description:
      "We build and manage investment portfolios tailored to your financial goals, risk tolerance, and investment horizon — so your money is always working with purpose.",
    highlights: [
      "Commodity-backed portfolios",
      "Risk-adjusted construction",
      "Goal-aligned strategy",
      "Regular performance reviews",
    ],
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
    number: "02",
    title: "Investment Advisory",
    description:
      "Not sure where to start? Our advisors walk you through your options — helping you choose the right portfolio, understand your returns, and stay informed at every step.",
    highlights: [
      "One-on-one consultations",
      "Transparent fee structure",
      "Market intelligence & updates",
      "No jargon, no confusion",
    ],
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Wealth Planning",
    description:
      "Wealth isn't just built — it's planned. We help you map a clear financial roadmap for retirement, legacy building, children's education, and long-term capital preservation.",
    highlights: [
      "Retirement planning",
      "Generational wealth transfer",
      "Children's investment plans",
      "Capital preservation strategy",
    ],
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
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ethical & Halal Investing",
    description:
      "We offer a fully Shariah-compliant investment option for clients who want their money to grow in line with Islamic financial principles — without compromising on returns.",
    highlights: [
      "Mudaraba-based structure",
      "SEC-regulated & transparent",
      "Competitive profit distribution",
      "No interest-bearing instruments",
    ],
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
    number: "05",
    title: "Institutional Investment Management",
    description:
      "For corporates, cooperatives, and institutions looking to deploy surplus funds — we structure bespoke investment mandates that align with your treasury and growth objectives.",
    highlights: [
      "Corporate treasury solutions",
      "Bespoke investment mandates",
      "Dedicated relationship manager",
      "Structured reporting & compliance",
    ],
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
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Financial Education & Coaching",
    description:
      "We believe informed investors make better decisions. Through our kiddies portfolio and client sessions, we build financial literacy from early ages through to experienced investors.",
    highlights: [
      "ACML Kids Membership Club",
      "Investor onboarding sessions",
      "Market update newsletters",
      "Workshops & events",
    ],
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
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function AIMLServices() {
  return (
    <section className="bg-[#faf9f7] py-24 px-4 md:px-8 overflow-hidden relative">
      {/* Subtle diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, #1a1919, #1a1919 1px, transparent 1px, transparent 32px)`,
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                What We Do
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              Services Built Around{" "}
              <span className="text-brand">Your Goals</span>
            </h2>
          </div>
          <p className="text-[.8rem] leading-relaxed text-[#1a1919]/55 max-w-sm md:text-right">
            Every service we offer starts with one question — what does this
            investor need? Then we build from there.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white border border-black/[0.06] rounded-2xl p-7 flex flex-col gap-5 hover:border-brand/25 hover:shadow-[0_8px_32px_rgba(193,69,17,0.07)] transition-all duration-300 overflow-hidden"
            >
              {/* Accent top bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

              {/* Number watermark */}
              <span className="absolute bottom-4 right-5 text-[4.5rem] font-black text-[#1a1919]/[0.03] leading-none select-none pointer-events-none">
                {s.number}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-brand/[0.08] border border-brand/15 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-bold text-[#1a1919] leading-snug group-hover:text-brand transition-colors duration-300">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[.8rem] leading-relaxed text-[#1a1919]/55 flex-1">
                {s.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-2 pt-4 border-t border-black/[0.05]">
                {s.highlights.map((h, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/50 group-hover:bg-brand flex-shrink-0 transition-colors duration-300" />
                    <span className="text-[.75rem] text-[#1a1919]/50">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#1a1919] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-[300px] h-[300px] bg-brand/[0.08] blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-[18px] font-bold text-white mb-1">
              Not sure which service fits your needs?
            </h3>
            <p className="text-[.8rem] text-white/45 max-w-md">
              Book a free consultation and we&apos;ll point you in the right
              direction.
            </p>
          </div>
          <a
            href="#get-started"
            className="relative z-10 inline-flex items-center gap-2 bg-brand text-white text-[13px] font-bold px-6 py-3.5 rounded-md hover:bg-brand/90 transition-colors duration-200 flex-shrink-0"
          >
            Book a Free Consultation
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
