import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { CardThreeProps } from "@/lib/types";
import { SquareArrowOutUpRight } from "lucide-react";

const CardThree: React.FC<CardThreeProps> = ({ imageSrc, title }) => {
  return (
    <div className="w-full h-full my-7">
      <Card className="w-full h-full flex flex-col justify-start align-top bg-[#f8f8f8] shadow-sm stroke-slate-50">
        <CardHeader className="p-0 w-full">
          <div className="">
            <Image
              src={imageSrc}
              layout="responsive"
              width={1}
              height={1}
              alt={title}
              className="w-full"
            />
          </div>
        </CardHeader>
        <div className="flex items-left flex-col justify-around h-full px-3 md:px-5">
          <div className="flex gap-7 justify-between items-center">
            <p className="text-[15px] tracking-tight font-medium leading-snug text-[#1a1919]">
              {title}
            </p>
            <div>
              <SquareArrowOutUpRight width="24" height="24" color="#c14511" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardThree;
