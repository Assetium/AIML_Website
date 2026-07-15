import React from "react";
import gceotalks from "@/public/home/geco-talks.png";
import backgroundImage from "@/public/home/testimonial-bg.png";
import Image from "next/image";
import SectionTwo from "../components/section-two";

const GCEOMessage = () => {
  return (
    <div className="my-8 flex items-center justify-center px-5 lg:px-10 xl:px-20">
      <div
        className="block md:flex items-center lg:gap-8"
        style={{
          backgroundImage: `url(${backgroundImage.src})`, // Ensure you are using the image source
          backgroundSize: "cover", // Adjust to your needs
          backgroundPosition: "center", // Adjust to your needs
          width: "100%", // Adjust to your needs
        }}
      >
        <div className="w-full h-full">
          <Image
            src={gceotalks}
            layout="responsive"
            width={4}
            height={5}
            alt="Group CEO"
          />
        </div>
        <div className="md:max-w-[50%] px-5 py-5 h-full lg:flex items-center justify-center">
          <div>
            <SectionTwo
              headerText="Our Philosophy"
              paragraphText1="We believe that value is created by structuring capital around real assets, defined strategies, and measurable outcomes. Our focus is on building investment solutions that are deliberate, diversified, and aligned with long-term performance rather than short-term speculation."
              paragraphText2="Across asset management, commodities trading, business advisory, and real estate, Assetium designs structured pathways that help clients manage risk, preserve value, and grow capital through changing market cycles. Each strategy is guided by disciplined execution, transparency, and an understanding of how investment assets perform in the real economy."
              fontColor="#444444"
            />
            <div className="flex gap-1 flex-col items-end justify-end">
              <p className="lg:leading-8 text-[13px] lg:text-title-xsm text-[#444444] font-semibold text-right">
                <i> Success is a trail of choices no one saw you make.</i>
                <br />
                <span className="w-full text-[12px] font-medium">
                  - Group CEO, The Assetium Group
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GCEOMessage;
