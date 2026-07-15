import React from "react";
import Image from "next/image";
import missionVission from "@/public/about-us/mission-vission.png";

const AboutUsMission = () => {
  return (
    <div>
      <div className="py-6 lg:py-10 px-5 lg:px-10 xl:px-20">
        {/* <h3 className="text-[#c14511] lg:leading-8 lg:tracking-tighter text-lg font-bold py-3 md:pb-7 md:text-title-md">
          Why should you choose Assetium?
        </h3>
        <p className="text-[14px] lg:text-[15px] pb-2.5 leading-normal text-[#444444]">
          At Assetium, we don’t just manage investments—we create pathways to
          long-term success, ensuring you achieve meaningful and lasting growth.
          By leveraging cutting-edge technology and pioneering strategies, we
          empower you to navigate the complexities of the financial landscape
          and seize new opportunities. Let Assetium be your bridge to a future
          of unparalleled value and prosperity.
        </p> */}
        <div className="max-w-7xl mx-auto flex items-start gap-4 mt-20">
          <div className="flex flex-col items-center mt-2">
            <span className="w-2 h-2 rounded-full bg-[#c14511]" />
            <span className="w-px h-10 bg-[#c14511]/55 mt-2" />
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            Our Mission,Vision
            <span className="block text-gray-500 font-semibold">
              & Core Values
            </span>
          </h2>
        </div>
      </div>
      <Image src={missionVission} alt="mission and vission of assetium" />
    </div>
  );
};

export default AboutUsMission;
