// import Image from "next/image";
// import React from "react";
// import headerImage from "@/public/apl/headerImage.png";
// import hero1 from "@/public/acl/hero1.jpg";

// const ACLHero = () => {
//   return (
//     <div className="px-5 lg:px-10 xl:px-20 pt-20 xl:pt-30 bg-[#1A1919] flex items-center gap-6">
//       <div className="flex lg:gap-6 gap-4 flex-col my-4 xsm:my-0">
//         <h3 className="font-semibold tracking-tighter md:text-[32px] text-title-lg lg:text-[42px] md:leading-[52px] lg:leading-[58px] text-white">
//           Empowering
//           <span className="text-[#c14511] "> Businesses to Succeed </span>
//           with Customized Consulting Solution!
//         </h3>

//         <p className="xl:leading-8 text-[14px] xl:text-title-sm lg:text-[20px] md:text-[16px] text-white w-full xl:w-[80%]">
//           Assetium Consult Limited (ACL), don’t just manage your investments—we
//           amplify them.
//         </p>
//       </div>
//       <div className="xl:w-[100%] bg-red-200 grid-rows-2">
//         <div className="row-span-1">
//           <Image src={hero1} alt="Eduvacity Partnership" />
//         </div>
//         <div className="">
//           <Image src={hero1} alt="Eduvacity Partnership" />
//           <Image src={hero1} alt="Eduvacity Partnership" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ACLHero;

// pages/index.js
import Image from "next/image";
import hero1 from "@/public/acl/hero1.jpg";
import hero2 from "@/public/acl/hero2.jpg";
import hero3 from "@/public/acl/hero3.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative overflow-hidden px-5 pt-30 lg:pt-32 xl:px-20 pb-8 bg-[#f7f4ef] flex flex-col justify-center items-center">

      {/* ── Background decorative elements ── */}
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.055] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a1919 1px, transparent 1px), linear-gradient(90deg, #1a1919 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Concentric circles — bottom right */}
      <svg className="absolute -bottom-24 -right-24 w-[420px] h-[420px] opacity-[0.06] pointer-events-none" viewBox="0 0 420 420" fill="none">
        <circle cx="210" cy="210" r="196" stroke="#1a1919" strokeWidth="1.5" />
        <circle cx="210" cy="210" r="140" stroke="#1a1919" strokeWidth="1" />
        <circle cx="210" cy="210" r="84" stroke="#c14511" strokeWidth="1" strokeOpacity="0.6" />
      </svg>
      {/* Dashed arc — top left */}
      <svg className="absolute -top-16 -left-16 w-[280px] h-[280px] opacity-[0.06] pointer-events-none" viewBox="0 0 280 280" fill="none">
        <circle cx="140" cy="140" r="120" stroke="#1a1919" strokeWidth="1.5" strokeDasharray="5 7" />
      </svg>
      {/* Top brand rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="relative z-10 mx-auto flex flex-col md:flex-row items-center lg:items-center space-y-8 lg:space-x-12 h-full">
        {/* Text Section */}
        <div className="lg:w-1/2 mr-6 flex flex-col h-full justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-[2px] bg-brand rounded-full" />
            <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">Assetium Consult</span>
          </div>
          <h3 className="font-semibold tracking-tight md:text-[28px] text-title-lg lg:text-[38px] md:leading-[52px] lg:leading-[58px] text-[#1a1919]">
            Empowering
            <span className="text-[#c14511]"> Businesses to Succeed </span>
            with Customized Consulting Solution!
          </h3>
          <p className="mt-4 text-[.9rem] leading-relaxed text-[#1a1919]/60 font-medium">
            Assetium Consult Limited, don&apos;t just manage your investments—we
            amplify them.
          </p>
          <div className="mt-6 flex space-x-4">
            <Button
              className="text-xs md:text-base px-5 border-none uppercase"
              variant={"default"}
            >
              Schedule a Consultation
            </Button>
            <Button
              className="text-xs md:text-base px-5 uppercase border-[#1a1919]/20 text-[#1a1919] hover:bg-[#1a1919]/5"
              variant={"outline"}
            >
              What we do
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex gap-4">
          <div className="w-1/2 flex align-middle items-center">
            <div className="relative w-full lg:h-70 h-50">
              <Image
                src={hero1}
                alt="Team meeting"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col w-1/2 gap-3">
            <div className="relative w-full lg:h-70 h-50">
              <Image
                src={hero2}
                alt="Consultation"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-full lg:h-70 h-50">
              <Image
                src={hero3}
                alt="Executive portrait"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
