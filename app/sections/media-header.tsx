import Image from "next/image";
import React from "react";
import mediaHeader from "@/public/media/media2.png";

const MediaHeader = () => {
  return (
    <div className="px-5 lg:px-10 xl:px-20">
      <div className="py-3">
        <h3 className="font-semibold leading-tight pt-30 pb-7 tracking-tighter text-title-lg lg:text-title-xl text-[#444444] ">
          Welcome to Assetium Media <br />
          Centre
        </h3>
        <div className="">
          <Image src={mediaHeader} className="min-w-full min-h-full" alt="" />
        </div>
      </div>
      <div className="pb-6">
        <h3 className="text-[#c14511] lg:leading-8 lg:tracking-tighter text-lg font-bold py-3 md:pt-18 md:pb-7 md:text-title-md">
          A Peek into Assetium’s Hub
        </h3>
        <p className=" font-normal text-[16px] lg:text-[17px] text-[#444444]">
          Here, you’ll find the latest news, insights, and updates about our
          company, businesses and the commodities market. Stay informed with our
          press releases, industry reports, and thought leadership pieces. This
          is your go-to source for staying connected with everything Assetium
          and gaining insights that can empower your investment decisions.
        </p>
      </div>
    </div>
  );
};

export default MediaHeader;
