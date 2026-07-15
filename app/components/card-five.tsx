import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface CardFiveProps {
  imagePosition?: "left" | "right"; // Prop to set image position on larger screens
  imageSrc: string; // Path to the image, to make it dynamic
  title: string;
  description: string;
  tags?: string[]; // Optional tags array
  tagDisplay?: boolean; // Prop to control tags display
  link?: string;
  product_fullName?: string;
}

const CardFive: React.FC<CardFiveProps> = ({
  imagePosition = "left",
  product_fullName = "",
  imageSrc,
  title,
  description,
  tags = [],
  tagDisplay = true,
  link,
}) => {
  return (
    <div className="w-full mb-12">
      {link ? (
        <Link href={link}>
          <Card className="md:p-8 p-3 bg-[#f8f8f8] rounded-3xl shadow-sm stroke-slate-50 hover:bg-[#e6e6e6]">
            <div
              className={`w-full flex flex-col xsm:flex-row items-center gap-5 xsm:gap-5 md:gap-9 ${
                imagePosition === "right" ? "xsm:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full">
                <Image
                  src={imageSrc}
                  alt={title}
                  layout="responsive"
                  width={592}
                  height={393}
                  className="rounded-2xl"
                />
              </div>
              <div className="flex justify-around flex-col h-full gap-4 lg:gap-7 w-full">
                <div className="p-0">
                  <h3 className="md:text-2xl lg:text-3xl text-[15px] font-semibold text-[#444444] uppercase">
                    {title}
                  </h3>
                  <p className="text-[#c14511]">{product_fullName}</p>
                </div>
                <div className="flex flex-col gap-3 md:gap-4">
                  {tagDisplay && tags.length > 0 && (
                    <div className="xsm:hidden flex md:flex gap-2 xsm:gap-5 items-center text-[7px] lg:text-[12px]">
                      {tags.map((tag, index) => (
                        <p
                          key={index}
                          className={`lg:py-2 lg:px-4 px-1 py-1 text-[#444444] font-semibold rounded-full ${
                            index === 0
                              ? "bg-[#EFB399]"
                              : index === 1
                              ? "bg-[#C2C2C2]"
                              : "bg-[#d4d4d4]"
                          }`}
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  )}
                  <p className="text-[13px] xsm:text-[10px] lg:text-[15px] tracking-tight leading-normal pb-3 text-[#444444]">
                    {description}
                  </p>
                  <div className="flex gap-2 items-center font-medium text-[#c14511] hover:text-[#444444] hover:font-bold hover:cursor-pointer">
                    <MoveRight className="w-4" />
                    <p className="lg:text-[12px] md:text-[8px] pt-3 font-semibold tracking-tight leading-snug pb-3">
                      View Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ) : (
        <Card className="md:p-8 p-3 bg-[#f8f8f8] rounded-3xl shadow-sm stroke-slate-50 hover:bg-[#e6e6e6]">
          <div
            className={`w-full flex flex-col xsm:flex-row items-center gap-5 xsm:gap-5 md:gap-9 ${
              imagePosition === "right" ? "xsm:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full">
              <Image
                src={imageSrc}
                alt={title}
                layout="responsive"
                width={592}
                height={393}
                className="rounded-2xl"
              />
            </div>
            <div className="flex justify-around flex-col h-full gap-4 lg:gap-7 w-full">
              <div className="p-0">
                <h3 className="md:text-2xl lg:text-3xl text-[15px] font-semibold text-[#444444]">
                  {title}
                </h3>
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                {tagDisplay && tags.length > 0 && (
                  <div className="xsm:hidden flex md:flex gap-2 xsm:gap-5 items-center text-[10px] lg:text-[12px]">
                    {tags.map((tag, index) => (
                      <p
                        key={index}
                        className={`py-2 px-4 text-[#444444] rounded-full ${
                          index === 0
                            ? "bg-[#EFB399]"
                            : index === 1
                            ? "bg-[#C2C2C2]"
                            : "bg-[#d4d4d4]"
                        }`}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                )}
                <p
                  className="text-[13px] xsm:text-[10px] lg:text-[15px] tracking-tight leading-normal pb-3 text-[#444444]"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CardFive;
