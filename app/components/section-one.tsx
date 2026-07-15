import { Button } from "@/components/ui/button";
import React from "react";
import { SectionOneProps } from "@/lib/types";
import Link from "next/link";

// Define the props type

const SectionOne: React.FC<SectionOneProps> = ({
  headerText,
  paragraphText1,
  paragraphText2,
  leftButtonText,
  rightButtonText,
  leftButtonHref, // New prop for the left button link
  rightButtonHref, // New prop for the right button link
  fontColor = "#444444",
  headerFontSize, // Header font size prop, optional
  spanText,
}) => {
  return (
    <div className="">
      <div className="flex lg:gap-6 gap-4 flex-col">
        <h3
          className={`font-semibold ${
            headerFontSize
              ? ""
              : "text-[30px] lg:text-[42px] xl:text-[48px] xl:leading-[60px]"
          }  text-[30px]`}
          style={{
            color: fontColor,
            fontSize: headerFontSize ? `${headerFontSize}px` : undefined, // Apply the dynamic font size if passed
          }}
        >
          {headerText}
        </h3>

        <p
          className="text-[14px] lg:text-[15px] pb-1.5 leading-normal"
          style={{ color: fontColor }}
        >
          <span className="text-[#c14511]">{spanText}</span>
          {paragraphText1}
        </p>

        {paragraphText2 && (
          <p
            className="text-[14px] lg:text-[15px] pb-2.5 leading-normal"
            style={{ color: fontColor }}
          >
            {paragraphText2}
          </p>
        )}

        <div className="flex gap-3 md:gap-6">
          {leftButtonText && leftButtonHref && (
            <Link href={leftButtonHref}>
              <Button
                className="text-xs md:text-base text-background px-5 border-none uppercase"
                variant={"default"}
              >
                {leftButtonText}
              </Button>
            </Link>
          )}
          {rightButtonText && rightButtonHref && (
            <Link href={rightButtonHref}>
              <Button
                style={{ color: fontColor }}
                className="text-xs md:text-base uppercase"
                variant={"outline"}
              >
                {rightButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
