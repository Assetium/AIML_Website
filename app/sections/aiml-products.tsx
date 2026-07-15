// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const products = [
//   {
//     id: "fixed",
//     tag: "Capital Growth",
//     name: "Fixed Investment Portfolio",
//     shortDesc: "Short-term. Steady. Commodity-backed.",
//     color: "#c14511",
//     lightColor: "rgba(193,69,17,0.08)",
//     borderColor: "rgba(193,69,17,0.25)",
//     emoji: "📈",
//     description:
//       "Designed for investors who want their money to grow steadily without operational hassle. Your capital is deployed into physical commodities managed by our expert team — and profits are paid out on your schedule.",
//     features: [
//       {
//         label: "Profit Payment",
//         value: "Quarterly, Semi-annually, or at Maturity",
//       },
//       { label: "Minimum Investment", value: "₦50,000" },
//       { label: "Investment Type", value: "Commodity-Backed" },
//       { label: "Ideal For", value: "Retail & Medium Net-Worth Investors" },
//     ],
//     highlights: [
//       "Attractive profit on commodity-backed investment",
//       "Flexible tenor and profit payment options",
//       "Capital preservation focus",
//       "Expert-managed from day one",
//     ],
//     cta: "Start with Fixed Portfolio",
//   },
//   {
//     id: "kiddies",
//     tag: "Future Planning",
//     name: "Kiddies Investment Portfolio",
//     shortDesc: "Little steps. Big future. Start today.",
//     color: "#0ea5e9",
//     lightColor: "rgba(14,165,233,0.08)",
//     borderColor: "rgba(14,165,233,0.25)",
//     emoji: "🌱",
//     description:
//       "The best time to invest for your child was yesterday. The next best time is now. Minivault is designed to build your child's financial future while teaching them the value of money from an early age.",
//     features: [
//       { label: "Minimum Tenor", value: "5 Years" },
//       { label: "Annual Withdrawal", value: "Up to 20% of Balance" },
//       { label: "Fund Protection", value: "Insured" },
//       { label: "Ideal For", value: "Parents & Guardians" },
//     ],
//     highlights: [
//       "Min. 5 years — max subject to parent's plan",
//       "Competitive returns, periodically reviewed",
//       "Access to ACML Kids Membership Club",
//       "Financial education, events & workshops",
//     ],
//     cta: "Open a Minivault Account",
//   },
//   {
//     id: "halal",
//     tag: "Shariah-Compliant",
//     name: "Halal Investment Portfolio",
//     shortDesc: "Ethical. Transparent. Profitable.",
//     color: "#10b981",
//     lightColor: "rgba(16,185,129,0.08)",
//     borderColor: "rgba(16,185,129,0.25)",
//     emoji: "☪️",
//     description:
//       "Grow your wealth the ethical way. Based on the Mudaraba (Partnership) principle, AHIP lets you participate in a carefully selected basket of physical commodities — fully Shariah-compliant, fully transparent.",
//     features: [
//       { label: "Principle", value: "Mudaraba (Partnership)" },
//       { label: "Tenor", value: "90 · 180 · 365 Days" },
//       { label: "Minimum Investment", value: "₦50,000" },
//       { label: "Redemption", value: "24–48 Working Hours" },
//     ],
//     highlights: [
//       "Fully Shariah-compliant investment",
//       "Competitive profits — higher than regular non-interest accounts",
//       "Early / part termination allowed",
//       "Physical commodity backing",
//     ],
//     cta: "Invest with AHIP",
//   },
// ];

// // ── Individual product card ───────────────────────────────────────────────
// function ProductCard({
//   product,
//   index,
// }: {
//   product: (typeof products)[0];
//   index: number;
// }) {
//   const ref = useRef<HTMLDivElement>(null);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.1,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="relative bg-white border rounded-2xl overflow-hidden"
//       style={{ borderColor: product.borderColor }}
//     >
//       {/* Top accent bar */}
//       <div
//         className="h-[4px] w-full"
//         style={{ backgroundColor: product.color }}
//       />

//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px]">
//         {/* LEFT — main content */}
//         <div className="flex flex-col gap-6 p-8 lg:p-10">
//           {/* Tag + emoji */}
//           <div className="flex items-center gap-3">
//             <span
//               className="text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border"
//               style={{
//                 color: product.color,
//                 backgroundColor: product.lightColor,
//                 borderColor: product.borderColor,
//               }}
//             >
//               {product.tag}
//             </span>
//           </div>

//           {/* Name */}
//           <div>
//             <span className="text-[3rem] leading-none select-none">
//               {product.emoji}
//             </span>
//             <h3 className="text-[26px] font-black text-[#1a1919] leading-tight mt-3">
//               {product.name}
//             </h3>
//             <p
//               className="text-[.8rem] font-semibold mt-1"
//               style={{ color: product.color }}
//             >
//               {product.shortDesc}
//             </p>
//           </div>

//           {/* Description */}
//           <p
//             className="text-[.8rem] leading-relaxed text-[#1a1919]/60 max-w-lg border-l-2 pl-4"
//             style={{ borderColor: product.color + "50" }}
//           >
//             {product.description}
//           </p>

//           {/* Highlights */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//             {product.highlights.map((h, i) => (
//               <div key={i} className="flex items-start gap-2.5">
//                 <span
//                   className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
//                   style={{ backgroundColor: product.color }}
//                 />
//                 <span className="text-[.78rem] text-[#1a1919]/60 leading-snug">
//                   {h}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="pt-2">
//             <a
//               href="#get-started"
//               className="inline-flex items-center gap-2 text-white text-[13px] font-bold px-6 py-3 rounded-md transition-opacity duration-200 hover:opacity-90"
//               style={{ backgroundColor: product.color }}
//             >
//               {product.cta}
//               <svg
//                 className="w-4 h-4"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="4" y1="12" x2="20" y2="12" />
//                 <polyline points="14 6 20 12 14 18" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT — feature grid */}
//         <div
//           className="flex flex-col justify-center gap-px border-t lg:border-t-0 lg:border-l"
//           style={{
//             borderColor: product.borderColor,
//             backgroundColor: product.lightColor,
//           }}
//         >
//           {product.features.map((f, i) => (
//             <div
//               key={i}
//               className="flex flex-col gap-1 px-7 py-5 border-b last:border-b-0"
//               style={{ borderColor: product.borderColor }}
//             >
//               <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1919]/35">
//                 {f.label}
//               </span>
//               <span className="text-[14px] font-bold text-[#1a1919] leading-snug">
//                 {f.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// // ── Main section ──────────────────────────────────────────────────────────
// export default function AIMlProducts() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <section
//       ref={containerRef}
//       id="portfolios"
//       className="bg-[#faf9f7] py-24 px-4 md:px-8"
//     >
//       <div className="max-w-[1280px] mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
//         >
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <span className="block w-6 h-[2px] bg-brand rounded-full" />
//               <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
//                 Investment Portfolios
//               </span>
//             </div>
//             <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
//               Choose Your <span className="text-brand">Portfolio</span>
//             </h2>
//           </div>
//           <p className="text-[.8rem] leading-relaxed text-[#1a1919]/55 max-w-sm md:text-right">
//             Three distinct portfolios — each built for a different investor
//             goal. Pick the one that fits where you are and where you're going.
//           </p>
//         </motion.div>

//         {/* Product cards — stacked, scroll-revealed */}
//         <div className="flex flex-col gap-8">
//           {products.map((product, i) => (
//             <ProductCard key={product.id} product={product} index={i} />
//           ))}
//         </div>

//         {/* Comparison note */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mt-10 bg-white border border-black/[0.06] rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
//         >
//           <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
//             <svg
//               viewBox="0 0 24 24"
//               fill="none"
//               className="w-5 h-5"
//               stroke="#c14511"
//               strokeWidth="1.8"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="10" />
//               <line x1="12" y1="8" x2="12" y2="12" />
//               <line x1="12" y1="16" x2="12.01" y2="16" />
//             </svg>
//           </div>
//           <p className="text-[.8rem] leading-relaxed text-[#1a1919]/55 flex-1">
//             Not sure which portfolio is right for you? All three are available
//             to the same investor —
//             <span className="font-semibold text-[#1a1919]">
//               {" "}
//               you can hold more than one.
//             </span>{" "}
//             Speak with an advisor to structure the right combination for your
//             goals.
//           </p>
//           <a
//             href="#get-started"
//             className="flex-shrink-0 inline-flex items-center gap-2 text-[12px] font-bold text-brand hover:text-brand/70 transition-colors uppercase tracking-wider"
//           >
//             Talk to an Advisor
//             <svg
//               className="w-3.5 h-3.5"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="4" y1="12" x2="20" y2="12" />
//               <polyline points="14 6 20 12 14 18" />
//             </svg>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

const products = [
  {
    id: "fixed",
    tab: "Fixed Investment",
    badge: "Flexible",
    badgeColor: "#c14511",
    name: "Assetium Fixed Investment Portfolio",
    tagline: "Grow your money steadily. No stress, no guesswork.",
    description:
      "A carefully managed, commodity-backed investment portfolio designed to help you achieve short-term financial goals while preserving capital and maintaining liquidity. Our team of experts handles everything — you simply invest and earn.",
    details:
      "Profits are compounded quarterly, semi-annually, or at maturity — giving you flexibility on when and how you receive your returns. Ideal for retail investors and medium net-worth individuals who want a smart, stable alternative to traditional savings.",
    highlights: [
      { label: "Minimum Investment", value: "₦50,000" },
      { label: "Profit Payment", value: "Quarterly · Semi-Annual · Maturity" },
      { label: "Investment Type", value: "Commodity-Backed" },
      { label: "Target Investor", value: "Retail & Medium Net-Worth" },
    ],
    features: [
      "Attractive profit on commodity-backed investment",
      "Flexible tenor aligned to your goals",
      "Capital preservation focus",
      "Liquidity maintained throughout",
      "Professionally managed end-to-end",
    ],
    color: "#16a34a",
    image: "/aiml/product/afipp.jpg",
  },
  {
    id: "kiddies",
    tab: "Kiddies (Minivault)",
    badge: "Long-Term",
    badgeColor: "#c14511",
    name: "Assetium Kiddies Investment Portfolio",
    tagline: "Little steps today. A strong financial future tomorrow.",
    description:
      "Purpose-built for parents who want to give their children a head start. By investing in real, tangible commodities, the Minivault grows your child's savings while teaching them invaluable lessons about money, markets, and financial discipline.",
    details:
      "Children don't just save — they learn. Through the ACML Kids Membership Club, young investors gain access to financial education, interactive workshops, and exclusive events that set them on the path to financial independence.",
    highlights: [
      { label: "Minimum Tenor", value: "5 Years" },
      { label: "Annual Withdrawal", value: "Up to 20% of balance" },
      { label: "Fund Status", value: "Insured" },
      { label: "Returns", value: "Competitive — reviewed periodically" },
    ],
    features: [
      "Financial goals: education, upkeep, entrepreneurship, wealth transfer",
      "Up to 20% annual withdrawal flexibility",
      "Fund is fully insured",
      "Access to ACML Kids Membership Club",
      "Financial education, workshops, and interactive sessions",
    ],
    color: "#0ea5e9",
    image: "/aiml/product/minivault.png",
  },
  {
    id: "halal",
    tab: "Halal Portfolio",
    badge: "Shariah-Compliant",
    badgeColor: "#c14511",
    name: "Assetium Halal Investment Portfolio",
    tagline: "Grow your wealth ethically. No compromise on returns.",
    description:
      "A short to medium-term, Shariah-compliant investment for individuals and businesses who want competitive returns without compromising on Islamic financial principles. Built on the Mudaraba (partnership) model — transparent, ethical, and real asset-backed.",
    details:
      "Investors participate in a carefully selected basket of physical commodities, earning profits that are typically higher than returns on regular non-interest accounts. Liquidity and safety of funds are maintained throughout.",
    highlights: [
      { label: "Minimum Investment", value: "₦50,000" },
      { label: "Flexible Tenor", value: "90 · 180 · 365 days" },
      { label: "Redemption", value: "24 – 48 working hours" },
      {
        label: "Early Termination",
        value: "Allowed (25% charge on accrued profit)",
      },
    ],
    features: [
      "Fully Shariah-compliant — Mudaraba principle",
      "Physical commodity-backed basket",
      "Competitive profits — higher than non-interest accounts",
      "Flexible tenors: 90, 180, or 365 days",
      "Early or part-termination allowed",
    ],
    color: "#f59e0b",
    image: "/aiml/product/halal.png",
  },
];

export default function AIMProducts() {
  const [active, setActive] = useState("fixed");
  const p = products.find((prod) => prod.id === active)!;

  return (
    <section className="bg-[#f7f4ef] py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Grid line background */}
      <div
        className="absolute inset-0 opacity-[0.055] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a1919 1px, transparent 1px), linear-gradient(90deg, #1a1919 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Diagonal accent lines */}
      <svg className="absolute top-0 right-0 w-[420px] h-[420px] opacity-[0.04] pointer-events-none" viewBox="0 0 420 420" fill="none">
        <line x1="420" y1="0" x2="0" y2="420" stroke="#1a1919" strokeWidth="1.5" />
        <line x1="420" y1="60" x2="60" y2="420" stroke="#1a1919" strokeWidth="1" />
        <line x1="420" y1="120" x2="120" y2="420" stroke="#c14511" strokeWidth="1" strokeOpacity="0.6" />
      </svg>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                Investment Portfolios
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              Find the Right <span className="text-brand">Portfolio</span>
            </h2>
          </div>
          <p className="text-[.8rem] leading-relaxed text-[#1a1919]/50 max-w-sm md:text-right">
            Three distinct portfolios designed for different goals, timelines,
            and values. All commodity-backed. All professionally managed.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-[#1a1919]/[0.05] border border-[#1a1919]/[0.08] rounded-xl p-1.5 w-fit">
          {products.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setActive(prod.id)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                active === prod.id
                  ? "bg-white text-[#1a1919] shadow-sm border border-[#1a1919]/[0.08]"
                  : "text-[#1a1919]/35 hover:text-[#1a1919]/65"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200"
                style={{
                  backgroundColor:
                    active === prod.id
                      ? prod.badgeColor
                      : "rgba(26,25,25,0.15)",
                }}
              />
              {prod.tab}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          key={active}
          className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr] rounded-2xl overflow-hidden border"
          style={{ borderColor: `${p.badgeColor}30` }}
        >
          {/* Left — image panel */}
          <div className="relative overflow-hidden min-h-[380px] md:min-h-0">
            <img
              src={p.image}
              alt={p.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, #111110ee 20%, transparent 70%), linear-gradient(to right, ${p.badgeColor}15, transparent)`,
              }}
            />

            {/* Badge */}
            <div className="absolute top-5 left-5 z-10">
              <span
                className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border"
                style={{
                  color: p.badgeColor,
                  backgroundColor: `${p.badgeColor}18`,
                  borderColor: `${p.badgeColor}40`,
                }}
              >
                {p.badge}
              </span>
            </div>

            {/* Tagline at bottom */}
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <p className="text-[13px] font-bold text-white leading-snug">
                {p.tagline}
              </p>
            </div>
          </div>

          {/* Right — details */}
          <div className="flex flex-col gap-6 p-8 bg-white">
            <div className="flex justify-between items-center">
              <h3 className="text-[19px] font-black text-[#1a1919] leading-tight">
                {p.name}
              </h3>
              <div className="pt-2">
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 text-[13px] font-bold px-6 py-3 rounded-md transition-opacity duration-200 hover:opacity-90 text-white"
                  style={{ backgroundColor: p.badgeColor }}
                >
                  Invest in This Portfolio
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

            <p className="text-[.8rem] leading-relaxed text-[#1a1919]/60">
              {p.description}
            </p>

            {/* Key highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {p.highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-[#f7f4ef] border border-[#1a1919]/[0.07] rounded-xl px-4 py-3 flex flex-col gap-1"
                >
                  <span className="text-[10px] font-bold text-[#1a1919]/35 uppercase tracking-wider">
                    {h.label}
                  </span>
                  <span className="text-[12px] font-bold text-[#1a1919] leading-snug">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#1a1919]/[0.06]" />

            {/* Features */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-[#1a1919]/35 uppercase tracking-wider mb-1">
                Key Features
              </span>
              {p.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px]"
                    style={{ backgroundColor: p.badgeColor }}
                  />
                  <span className="text-[.8rem] text-[#1a1919]/60 leading-relaxed">
                    {f}
                  </span>
                </div>
              ))}
            </div>

        
          </div>
        </div>
      </div>
    </section>
  );
}
