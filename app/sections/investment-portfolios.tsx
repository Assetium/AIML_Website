import React from "react";
import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface PortfolioProps {
  image: StaticImageData; // You can use string if the image is coming from a URL
  title: string;
  amount: string;
  description: string;
  link: string;
}

const InvestmentPortfolio: React.FC<PortfolioProps> = ({
  image,
  title,
  amount,
  description,
  link,
}) => {
  return (
    <Link href={link}>
      <Card className="lg:grid grid-cols-2 p-4 gap-3 h-full xsm:grid md:flex flex-col bg-[#f1f1f1]">
        <div>
          <Image src={image} alt={title} layout="responsive" />
        </div>
        <div className="flex flex-col justify-around">
          <h3 className="text-2xl py-4 xsm:py-0 md:py-2 tracking-tighter font-medium text-[#444444]">
            {title}
          </h3>

          <div className="flex flex-col">
            <p className="font-medium leading-tight tracking-tighter text-[21px]  text-[#C14511]">
              {amount}
            </p>
            <p className="font-medium text-[12px] text-[#444444]">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default InvestmentPortfolio;
