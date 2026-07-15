import React from "react";
import backgroundImage from "@/public/home/testimonial-bg.png";

const WhyItMatters = () => {
  return (
    <>
      <div className="px-5 lg:px-10 xl:px-20 pb-10">
        <div
          className="flex-col items-center justify-center flex lg:gap-5 p-7"
          style={{
            backgroundImage: `url(${backgroundImage.src})`, // Ensure you are using the image source
            backgroundSize: "cover", // Adjust to your needs
            backgroundPosition: "center", // Adjust to your needs
            width: "100%", // Adjust to your needs
          }}
        >
          <h3
            className={
              "font-semibold md:text-[32px] text-[21px] text-[#444444] tracking-[-0.07em] lg:text-[40px] text-center"
            }
          >
            Why It Matters
          </h3>
          <p className=" font-normal text-[16px] lg:text-[17px] text-[#444444] text-center">
            By intertwining sustainability and investment, Assetium ensures that
            our growth is meaningful and beneficial to everyone. Together, we
            can build a resilient future where business success aligns with the
            greater good. <br /> Let’s grow responsibly because true wealth lies
            in a sustainable future
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyItMatters;
