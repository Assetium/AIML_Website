// import Image from "next/image";
// import React from "react";
// import commodityCircle from "@/public/acml/commodity-circle.png";
// import { Button } from "@/components/ui/button";

// const AboutUsHero = () => {
//   return (
//     <div className="px-5 lg:px-10 xl:px-20 xl:py-30 lg:py-25 py-15 lg:grid grid-cols-2 gap-6 mt-5">
//       <div className="col-span-1 grid grid-rows-4 gap-3 h-full">
//         <div className="bg-[#c14511] row-span-3 flex flex-col gap-6 py-12 px-7 rounded-xl">
//           <h3 className="font-semibold text-[32px] md:text-[40px] text-white">
//             Commodities Built for Real Value
//           </h3>
//           <p className="lg:leading-8 text-[13px] md:text-[16px] lg:text-[18px] text-white">
//             We pride ourselves on delivering value and maximizing returns
//             through investments in commodities and their value chain.
//           </p>
//           <div className=" flex gap-3">
//             <Button className="bg-white text-[#c14511] font-semibold">
//               WHAT WE DO
//             </Button>
//             <Button className="border border-white text-white font-semibold">
//               OPEN AN ACCOUNT
//             </Button>
//           </div>
//         </div>
//         <div className="row-span-1 grid grid-cols-1 gap-3">
//           <div className="bg-[#E9EDEC] rounded-lg flex flex-col justify-center px-3 ">
//             <h3 className="lg:leading-8 text-[13px] md:text-[16px] lg:text-[18px] text-[#444444]">
//               Current Trading Cycle
//             </h3>
//             <p className="font-semibold text-[30px] text-[#444444]  ">
//               Ginger | Turmeric | Mazie
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#444444] lg:block hidden w-full rounded-lg relative">
//         <div className="bg-[#E9EDEC] w-full h-2/5 rounded-tl-lg rounded-tr-lg">
//           {/* Circle Overlay */}
//           <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-100 h-100 rounded-full bg-white border-4 border-orange-500 shadow-lg overflow-hidden flex items-center justify-center z-10">
//             <Image
//               src={commodityCircle}
//               alt="Commodities Circle"
//               fill
//               className="object-cover rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsHero;
import Link from "next/link";
import Image from "next/image";
//import { Button } from "@/components/ui/button";
//import { ArrowUpRight } from "lucide-react";

export default function ACMLHero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-[-100px] right-[10%] w-[500px] h-[500px] rounded-full bg-brand/[0.07] blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[-100px] w-[350px] h-[350px] rounded-full bg-amber-900/10 blur-[100px] pointer-events-none z-0" />

      {/* Main grid */}
      <div className="relative z-10 flex-1 max-w-[1280px] mx-auto w-full px-4 lg:px-26 md:px-8 grid lg:grid-cols-2 gap-6 items-center py-18 lg:py-20">
        {/* ── LEFT ── */}
        <div className="flex flex-col pt-8">
          {/* Headline */}
          <h1
            className="font-semibold text-[#1a1919] leading-[1.20] tracking-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            <span className="text-[#1a1919]">Commodities Built</span>
            <br />
            For{" "}
            <span className="relative inline-block text-brand">
              Real Value
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 220 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 Q55 2 110 6 Q165 10 218 5"
                  stroke="#c14511"
                  strokeWidth="2.5"
                  strokeOpacity="0.45"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          {/* Body */}
          <p className="text-[0.92rem] leading-relaxed text-[#1a1919]/65 max-w-md mb-10">
            We operate structured, profit-sharing commodity framework that
            connect capital to productive agricultural value chains through
            transparent frameworks.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-2 mb-14">
            <span className="text-[10px] font-bold text-[#1a1919]/40 uppercase tracking-[0.2em] mb-1">
              Trading Cycles
            </span>
            <div className="flex flex-wrap gap-2">
              {/* Live — Ginger */}
              <Link
                href="#"
                className="group flex items-center gap-3 bg-brand/15 border border-brand/30 hover:bg-brand/25 transition-colors duration-200 px-4 py-3 rounded-xl"
              >
                <span className="text-xl">🫚</span>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#1a1919] leading-none">
                    Ginger
                  </span>
                  <span className="text-[12px] text-[#1a1919]/55 mt-0.5">
                    Medium-Term · Live
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse ml-1" />
              </Link>

              {/* Coming soon */}
              {[
                { emoji: "🌽", label: "Maize", type: "Short-Term" },
                { emoji: "🟡", label: "Turmeric", type: "Long-Term" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#1a1919]/[0.04] border border-[#1a1919]/[0.07] px-4 py-3 rounded-xl opacity-80"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-[#1a1919] leading-none">
                      {item.label}
                    </span>
                    <span className="text-[12px] text-[#1a1919]/60 mt-0.5">
                      {item.type}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded-full ml-1 uppercase tracking-wide">
                    Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — commodity wheel ── */}
        <div className="relative flex items-center justify-center">
          <div
            className="relative w-full max-w-[440px] aspect-square"
            style={{ animation: "spin-slow 40s linear infinite" }}
          >
            <Image
              src="/acml/commodity-circle.png"
              alt="Assetium Commodities Wheel"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-6 right-4 bg-[#1a1919] border border-white/10 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white leading-none">
                ACML - Tranche 2
              </span>
              <span className="text-[10px] text-white/60 mt-0.5">
                Currently Active
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
