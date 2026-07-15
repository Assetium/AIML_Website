

import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ArrowUpRight } from "lucide-react";
// import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#eeeeee] to-[#ffffff]">
      <div
        className="mx-auto lg:px-10 px-5 xl:px-20 py-18
      "
      >
        <div className="grid items-center lg:gap-16 gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-4">
            {/* <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/70">
              Your Bridge To Value
            </span> */}

            <h1 className="text-4xl font-extrabold leading-loose tracking-tight text-[#1a1919] md:text-5xl">
              Financial Ecosystem <br />
              <span className="text-brand">For Value Creation</span>
            </h1>

            <p className="max-w-xl text-[0.97rem] leading-relaxed text-[#1a1919]/80">
              Assetium operates a unified investment platform designed to turn
              capital into productive assets and sustainable wealth.
            </p>

            <div className="grid grid-cols-2 gap-4 text-[0.7rem] gap-x-2 text-[#!a1919]/55">
               <div className="flex flex-row items-center gap-1 my-auto">
                  <div className="flex flex-col items-center">
                    <span className="w-2 h-2 rounded-full bg-[#c14511]" />
                    <span className="w-px h-1 bg-[#c14511]/55 mt-[0.65px]" />
                  </div>
                  <p>Asset Management</p>
                </div>
                 <div className="flex flex-row items-center gap-1 my-auto">
                  <div className="flex flex-col items-center ">
                    <span className="w-2 h-2 rounded-full bg-[#1a1919]" />
                    <span className="w-px h-1 bg-[#1a1919]/55 mt-[0.65px]" />
                  </div>
                  <p>Commodity Broker/Dealer</p>
                </div>


               <div className="flex flex-row items-center gap-1 my-auto">
                  <div className="flex flex-col items-center">
                    <span className="w-2 h-2 rounded-full bg-[#c14511]" />
                    <span className="w-px h-1 bg-[#c14511]/55 mt-[0.65px]" />
                  </div>
                  <p>Business Advisory</p>
                </div>

                 <div className="flex flex-row items-center gap-1 my-auto">
                  <div className="flex flex-col items-center ">
                    <span className="w-2 h-2 rounded-full bg-[#1a1919]" />
                    <span className="w-px h-1 bg-[#1a1919]/55 mt-[0.65px]" />
                  </div>
                  <p>Hospitality & Property Management</p>
                </div>


             
            </div>

         
            <div className="items-start flex flex-col gap-1 rounded-sm border border-[#1a1919]/10 bg-[#1a1919]/5 px-4 py-2 text-[0.7rem] text-[#1a1919]/90">
              <p>✓ Licensed by the Securities and Exchange Commission (SEC)</p>
              <p>✓ Licensed by the Lagos Commodity Futures Exchange (LCFE) </p>
              <p>✓ Licensed by the Nigerian Export Promotion Council (NEPC) </p>
              <p>✓ Licensed by the African Exchange (AFEX) </p>
              <p>✓ Rated by Augusto & Co.</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Image + overlays wrapper */}
            <div className="relative">
              {/* TOP CARD */}
              {/* <StatCard
                className="absolute -top-6 -left-6 z-20"
                title="Metric Title"
                value="00,000"
                sub="+00%"
              /> */}

              {/* IMAGE */}
              <div className="relative z-10 rounded-3xl bg-[#111] p-2 ring-1 ring-white/10">
                <Image
                  src="/home/value.png"
                  alt="Hero visual"
                  width={455}
                  height={450}
                  className="object-cover rounded-2xl transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>

              {/* BOTTOM CARD */}
              {/* <StatCard
                className="absolute -bottom-6 -right-6 z-20"
                title="Another Metric"
                value="₦0.00"
                sub="+0%"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- */
/* Floating Stat Card Component */
/* ----------------------------- */

// function StatCard({
//   title,
//   value,
//   sub,
//   className = "",
// }: {
//   title: string;
//   value: string;
//   sub: string;
//   className?: string;
// }) {
//   return (
//     <div
//       className={`rounded-2xl border border-white/10 bg-[#0f0f0f] px-4 py-3 text-white shadow-lg ${className}`}
//     >
//       <p className="text-xs text-white/55">{title}</p>
//       <div className="flex items-center gap-2">
//         <p className="text-lg font-semibold">{value}</p>
//         <span className="rounded-full bg-brand-muted px-2 py-0.5 text-xs text-brand">
//           {sub}
//         </span>
//       </div>
//     </div>
//   );
// }
