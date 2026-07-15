import React from "react";
import Image from "next/image";
import ImageSliderOne from "@/public/home/image-sliders/image-slider-one.png";
import ImageSliderTwo from "@/public/home/image-sliders/image-slider-two.png";
import ImageSliderThree from "@/public/home/image-sliders/image-slider-three.png";
import ImageSliderFour from "@/public/home/image-sliders/image-slider-four.png";
import Marquee from "react-fast-marquee";

const ImageSlider = () => {
  return (
    <div className="w-full  flex justify-between py-7 bg-[#F1F1F1]">
      <Marquee>
        {/* Image Slider One */}
        <div className="bg-[#F1F1F1] relative md:my-0 mx-1">
          <Image
            width={378}
            height={383}
            src={ImageSliderOne}
            className="lg:px-3 h-full w-full"
            alt=" Investment/ Portfolio Management"
          />
          <div className="absolute inset-0 flex lg:pl-4 justify-start items-end bottom-8 left-4">
            <div className="flex items-center">
              <div className="w-1 h-4 bg-[#c14511] mr-2"></div>
              <div className="text-white font-semibold lg:text-sm text-xs uppercase">
                Investment/ Portfolio Management{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider Two */}
        <div className="bg-[#F1F1F1] relative md:my-0 mx-1">
          <Image
            width={378}
            height={383}
            src={ImageSliderTwo}
            className="lg:px-3 h-full w-full"
            alt="Commodity Broker"
          />
          <div className="absolute inset-0 flex lg:pl-4 justify-start items-end bottom-8 left-4">
            <div className="flex items-center">
              <div className="w-1 h-4 bg-[#c14511] mr-2"></div>
              <div className="text-white font-semibold lg:text-sm text-xs uppercase">
                Commodity Broker
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider Three */}
        <div className="bg-[#F1F1F1] relative md:my-0 mx-1">
          <Image
            width={378}
            height={383}
            src={ImageSliderThree}
            className="lg:px-3 h-full w-full"
            alt="Business Advisory"
          />
          <div className="absolute inset-0 flex lg:pl-4 justify-start items-end bottom-8 left-4">
            <div className="flex items-center">
              <div className="w-1 h-4 bg-[#c14511] mr-2"></div>
              <div className="text-white font-semibold lg:text-sm text-xs uppercase">
                Business Advisory
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider Four */}
        <div className="bg-[#F1F1F1] relative md:my-0 mx-1">
          <Image
            width={378}
            height={383}
            src={ImageSliderFour}
            className="lg:px-3 h-full w-full"
            alt="Real Estate"
          />
          <div className="absolute inset-0 flex lg:pl-4 justify-start items-end bottom-8 left-4">
            <div className="flex items-center">
              <div className="w-1 h-4 bg-[#c14511] mr-2"></div>
              <div className="text-white font-semibold lg:text-sm text-xs uppercase">
                Real Estate
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ImageSlider;
