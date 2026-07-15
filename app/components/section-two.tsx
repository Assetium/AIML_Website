import React from "react";

// Define the props type
interface SectionOneProps {
  headerText: string;
  paragraphText1: string;
  paragraphText2?: string;
  fontColor?: string;
  spanText?: string;
}

const SectionTwo: React.FC<SectionOneProps> = ({
  headerText,
  paragraphText1,
  paragraphText2,
  fontColor = "white",
  spanText,
}) => {
  return (
    <div className="min-w-full">
      <div className="flex gap-4 lg:gap-5 flex-col">
        <h3
          className={
            "font-semibold leading-tight tracking-tighter text-title-lg"
          }
          style={{
            color: fontColor,
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

        <p
          className="text-[14px] lg:text-[15px] pb-2.5 leading-normal"
          style={{ color: fontColor }}
        >
          {paragraphText2}
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
