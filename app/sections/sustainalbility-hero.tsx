import Image from "next/image";
import React from "react";
import sustainable from "@/public/sustainability/sustainability-header.png";
const SustainabilityHero = () => {
  return (
    <div className="px-5 lg:px-10 xl:px-20">
      <div className="py-3">
        <h3 className="font-semibold leading-tight pt-30 pb-5 tracking-tighter text-title-lg lg:text-title-xl text-[#444444] ">
          Sustainability and Investment: <br /> Building a Future That Thrives
        </h3>
        {/* Image */}
        <div className="relative">
          <Image
            src={sustainable}
            className="min-w-full min-h-full object-cover"
            alt=""
            width={1280}
            height={514}
          />

          {/* SectionOne Positioned in Bottom-Left Corner */}
          {/*  <div className="absolute bottom-5 left-5 lg:bottom-10 lg:left-10 bg-white bg-opacity-50 backdrop-blur-md p-4 lg:p-6 rounded-lg shadow-md">
            <SectionOne
              headerText="Sustainable Impact"
              paragraphText1="Sustainability ensures that the decisions we make today positively impact the future. When combined with smart investment strategies, it leads to long-term growth that benefits everyone: investors, businesses, and society. Our goal is to align profitable investments with initiatives that promote environmental protection, social well-being, and responsible governance (ESG)."
              fontColor="#444444"
            />
          </div> */}
        </div>
      </div>
      <div className="pb-7">
        <h3 className="text-[#c14511] lg:leading-8 lg:tracking-tighter text-lg font-bold py-3 md:pb-7 md:text-title-md">
          Investing for a Greener, Brighter Tomorrow
        </h3>
        <p className=" font-normal text-[16px] lg:text-[17px] text-[#444444]">
          At Assetium, we believe sustainability and investment go hand in hand
          to create lasting value for our clients, communities, and the planet.
          As a company with diverse subsidiaries—Asset Management, Commodity
          Trading, Consulting, and Real Estate—we are committed to integrating
          sustainable practices across all facets of our operations.
        </p>
      </div>
    </div>
  );
};

export default SustainabilityHero;
