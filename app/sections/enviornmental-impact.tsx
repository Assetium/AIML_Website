import React from "react";
import Image from "next/image";
import SectionOne from "../components/section-one";
import sustainablity from "@/public/sustainability/sustainability.png";

const EnviornmentalImpact = () => {
  return (
    <div className="py-8 lg:py-15 px-5 lg:px-10 xl:px-20 relative">
      {/* Large Screen Image */}
      <div className="relative hidden xsm:block">
        <Image
          src={sustainablity}
          className="min-w-full min-h-full object-cover"
          alt="Sustainability"
        />
      </div>

      <div
        className="xsm:absolute w-full inset-x-0 mx-auto bottom-15 lg:bottom-25 md:left-10 lg:left-30 md:mx-0 
        bg-[#f8f8f8] bg-opacity-50 backdrop-blur-md p-4 xsm:p-6 rounded-lg shadow-md 
       xsm:max-w-md md:max-w-xl lg:max-w-2xl"
      >
        <SectionOne
          headerText="Sustainable Impact"
          paragraphText1="Sustainability ensures that the decisions we make today positively impact the future. When combined with smart investment strategies, it leads to long-term growth that benefits everyone: investors, businesses, and society. Our goal is to align profitable investments with initiatives that promote environmental protection, social well-being, and responsible governance (ESG)."
          fontColor="#444444"
        />
      </div>
    </div>
  );
};

export default EnviornmentalImpact;
