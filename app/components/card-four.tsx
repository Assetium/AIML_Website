import React from "react";
import { Card } from "@/components/ui/card";

interface CardFourProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CardFour: React.FC<CardFourProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col h-full">
      <Card className="w-full flex flex-col justify-between h-full bg-[#f8f8f8] shadow-sm transition-transform transform lg:hover:scale-105 cursor-pointer">
        <div className="xsm:p-4 p-3 flex flex-col flex-1">
          {/* Icon Section */}
          <div className="bg-white w-fit p-3 rounded xsm:block hidden">
            {React.cloneElement(icon as React.ReactElement, {
              color: "#c14511",
              width: 32,
              height: 32,
            })}
          </div>

          {/* Text Content */}
          <div className="flex flex-col xsm:mt-4 mt-2  gap-4 flex-1">
            <p className="font-semibold xsm:text-[#444444] text-[#c14511] lg:text-lg text-base">
              {title}
            </p>
            <p className="text-[13px] text-[#444444] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardFour;
