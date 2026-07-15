import React from "react";
import backgroundImage from "@/public/home/testimonial-bg.png";

const ContactCTA = () => {
  return (
    <div className="px-5 lg:px-10 xl:px-20 pb-10">
      <div
        className="flex-col items-center justify-center flex lg:gap-8 xsm:px-32 p-7 rounded"
        style={{
          backgroundImage: `url(${backgroundImage.src})`, // Ensure you are using the image source
          backgroundSize: "cover", // Adjust to your needs
          backgroundPosition: "center", // Adjust to your needs
          width: "100%", // Adjust to your needs
        }}
      >
        <h3
          className={
            " md:text-[38px] text-[24px] text-[#444444] tracking-[-0.07em] lg:text-[40px] text-center"
          }
        >
          Open an investment account today, let assetium handle the rest
        </h3>
      </div>
    </div>
  );
};

export default ContactCTA;
