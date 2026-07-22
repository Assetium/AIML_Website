// import React from "react";
// import Link from "next/link";
import AIMLHeader from "@/app/sections/aiml-header";
import AIMLServices from "@/app/sections/aiml-service";
import AIMLProducts from "@/app/sections/aiml-products";
import AIMLInsights from "@/app/sections/aiml-insighta";
import AIMWhyUs from "@/app/sections/aiml-why-choose-us";

export default function ComingSoon() {
  return (
    <>
      <AIMLHeader />
      <AIMLServices />
      <AIMLProducts />
      <AIMLInsights />
      <AIMWhyUs />
    </>
    // <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1919] text-[#444444] px-6 text-center">
    //   <p className="mt-6 font-normal text-[#444444] mb-5">Coming Soon!</p>

    //   <h1 className="text-xl md:text-3xl  font-semibold text-white">
    //     Market is open, <br /> but we’re still investing in this page.
    //   </h1>

    //   <p className="mt-6  font-normal text-[#444444]">
    //     While waiting, kindly check out{" "}
    //     <Link className="hover:underline text-[#c14511]" href="/our-solutions">
    //       our other businesses.
    //     </Link>
    //   </p>
    // </div>
  );
}
