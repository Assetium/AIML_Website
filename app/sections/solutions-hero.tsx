import Link from "next/link";

const solutions = [
    {
    number: "01",
    shortName: "AIML",
    name: "Assetium Investment Management Limited",
    tagline: "Portfolio & Wealth Management",
    description:
      "Professional management of investment portfolios for retail and institutional clients. Built on rigorous research, disciplined risk management, and a long-term orientation toward consistent outcomes.",
    href: "/assetium-investment-managers",
    accent: "#1a1919",
  },

  {
    number: "02",
    shortName: "ACML",
    name: "Assetium Capital Management Limited",
    tagline: "Commodity Broker/ Dealer",
    description:
      "We manage everything — sourcing, production, and sales — so you can participate without the operational burden. Profits shared ethically at cycle close.",
    href: "/assetium-barakah-farms-limited",
    accent: "#c14511",
  },

  
{
    number: "03",
    shortName: "ABFL",
    name: "Assetium Barakah Farms Limited ",
    tagline: "Commodity Cultivation & Agribusiness",
    description:
      "We manage everything — sourcing, production, and sales — so you can participate without the operational burden. Profits shared ethically at cycle close.",
    href: "/assetium-barakah-farms-limited",
    accent: "#c14511",
  },
  {
    number: "04",
    shortName: "ACL",
    name: "Assetium Consult Limited",
    tagline: "Business Advisory & Strategy",
    newTab: true,
    description:
      "Strategic advisory for individuals and institutions navigating complex financial and business decisions. From feasibility studies to organisational strategy, we turn complexity into clear, actionable direction.",
    href: "/assetium-consult-limited",
    accent: "#1a1919",
  },
  {
    number: "05",
    shortName: "APL",
    name: "Assetium Properties Limited",
    tagline: "Real Estate Investment & Development",
    description:
      "Disciplined investment and development across Nigeria's property markets. We identify, develop, and manage real estate assets that generate lasting, compounding value for investors and communities.",
    href: "https://properties.assetium.com",
    newTab: true,
    accent: "#1a1919",
  },

];

export default function OurSolutions() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Hero ── */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 pt-32 pb-16 border-b border-black/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.25em]">
                What We Offer
              </span>
            </div>
            <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-black text-[#1a1919] leading-none tracking-tight">
              Our
              <br />
              <span className="text-brand">Solutions.</span>
            </h1>
          </div>
          <p className="text-[.8rem] leading-[1.9] text-[#1a1919]/50 max-w-xs md:text-right md:pb-2">
            With Assetium, you are not just investing — you are making strategic
            moves to secure your financial future.
          </p>
        </div>
      </section>

      {/* ── Solutions list ── */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8">
        {solutions.map((s, i) => (
          <Link
            key={i}
            href={s.href}
            target={s.newTab ? "_blank" : "_self"}
            className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 border-b border-black/[0.06] hover:bg-[#faf9f7] -mx-4 md:-mx-8 px-4 md:px-8 transition-colors duration-200"
          >
            {/* Number */}
            <span className="text-[11px] font-black text-[#1a1919]/20 tracking-[0.3em] flex-shrink-0 w-8">
              {s.number}
            </span>

            {/* Shortname */}
            <span className="hidden md:block text-[11px] font-black text-brand uppercase tracking-[0.25em] flex-shrink-0 w-16">
              {s.shortName}
            </span>

            {/* Name + tagline */}
            <div className="flex flex-col gap-1 flex-shrink-0 md:w-72">
              <h2 className="text-[17px] font-bold text-[#1a1919] group-hover:text-brand transition-colors duration-200 leading-tight">
                {s.name}
              </h2>
              <span className="text-[11px] text-[#1a1919]/40 font-medium">
                {s.tagline}
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-10 bg-black/[0.08] flex-shrink-0" />

            {/* Description */}
            <p className="text-[.8rem] leading-relaxed text-[#1a1919]/55 flex-1 max-w-lg">
              {s.description}
            </p>

            {/* Arrow */}
            <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full border border-black/[0.1] group-hover:border-brand group-hover:bg-brand items-center justify-center transition-all duration-200">
              <svg
                className="w-4 h-4 text-[#1a1919]/40 group-hover:text-white transition-colors duration-200"
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
            </div>
          </Link>
        ))}
      </section>

      {/* ── Bottom CTA ── */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-20">
        <div className="bg-[#faf9f7] border border-black/[0.06] rounded-2xl px-8 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[16px] font-bold text-[#1a1919]">
              Not sure where to start?
            </h3>
            <p className="text-[.8rem] text-[#1a1919]/50 max-w-sm">
              Our team will walk you through each solution and help you identify
              the right fit for your goals.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-brand/90 transition-colors duration-200 flex-shrink-0"
          >
            Talk to Us
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
          </Link>
        </div>
      </section>
    </div>
  );
}
