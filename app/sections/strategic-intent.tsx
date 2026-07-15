import React from "react";
import priscaStrategy from "@/public/about-us/prisca-strategy.jpg";
import Image from "next/image";
import SectionOne from "../components/section-one";

const StrategicIntent = () => {
  return (
    <div className="md:grid grid-cols-3 block items-center gap-5 lg:gap-8">
      <div className="col-span-1">
        <Image src={priscaStrategy} alt="" />
      </div>
      <div className="col-span-2 p-4 md:p-7 xl:pr-20">
        <SectionOne
          headerText="Our Strategic Intent"
          paragraphText1="We are driven by a clear purpose: to transform the way you invest and grow. Our strategic intent is to elevate your investment experience, combining innovation, expertise, and technology to deliver unmatched opportunities for growth."
          paragraphText2="We believe that every portfolio has the potential to achieve greatness when guided by the right strategies. That’s why we focus on empowering individuals and businesses with tailored solutions designed to navigate today’s dynamic financial landscape. From asset management to commodities trading, business advisory, and real estate, our approach ensures that every decision aligns with your unique goals. "
          leftButtonText="Open Account"
          leftButtonHref="/open-account"
          fontColor="#444444"
        />
      </div>
    </div>
  );
};

export default StrategicIntent;
