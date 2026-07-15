/* "use client";
import React, { useState } from "react";
import Image from "next/image";
import acp from "@/public/acml/product-champs/agrivest.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronUp, ChevronDown } from "lucide-react";

const ProductDetails = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleAccordionToggle = (item: string) => {
    setActiveItem((prev) => (prev === item ? null : item));
  };

  return (
    <>
      <div className="px-5 lg:px-10 xl:px-20">
        <div className="py-3">
          <h3 className="font-semibold leading-tight pt-30 tracking-tighter text-title-lg lg:text-title-xl text-[#444444]">
            Assetium Commodities Portfolio
          </h3>
          <p className="text-[13px] tracking-tight leading-normal font-normal pb-3  text-gray-500">
            A Portfolio Product of Assetium Capital Management Limited
          </p>
        </div>

        <div className="block md:grid grid-cols-2 my-7 gap-10">
          <div className="col-span-1">
            <Image
              src={acp}
              alt="some text"
              layout="responsive"
              width={16}
              height={9}
            />
          </div>
          <div className=" flex justify-between flex-col  ">
            <div className="col-span-1">
              <Accordion
                type="single"
                collapsible
                onValueChange={(value) => handleAccordionToggle(value || "")}
                className="gap-9"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[#444444]">Product Description</p>
                      {activeItem === "item-1" ? (
                        <ChevronUp className="text-[#444444]" />
                      ) : (
                        <ChevronDown className="text-[#444444]" />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-500 text-sm pr-9 py-4">
                      Assetium Commodities Portfolio is a structured portfolio
                      which gives investors an opportunity to invest towards a
                      short to medium term goal. that provides liquidity,
                      capital preservation and competitive returns. Returns are
                      compounded quarterly, semiannually or at maturity. The
                      portfolio is targeted at Retail Investors, Medium Class
                      Net-worth Individuals seeking commodity backed
                      investments.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[#444444]">Product Main Features</p>
                      {activeItem === "item-1" ? (
                        <ChevronUp className="text-[#444444]" />
                      ) : (
                        <ChevronDown className="text-[#444444]" />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="text-gray-500 pr-9 py-4">
                      <li className="py-2 text-sm">
                        <strong>Diverse Commodity Exposure: </strong> Invests
                        across a range of commodities including precious metals
                        (gold, silver), energy (oil, natural gas), agricultural
                        products (wheat, corn), and industrial metals (copper,
                        aluminum).
                      </li>
                      <li className="py-2">
                        <strong>Managed Risk: </strong> Actively managed to
                        optimize risk-reward by dynamically adjusting the
                        portfolio allocation based on market conditions.
                      </li>
                      <li className="">
                        <strong>Liquidity: </strong> Offers high liquidity,
                        enabling investors to enter and exit positions with ease
                      </li>
                      <li className="py-2">
                        <strong> Customization: </strong> Tailored portfolio
                        options available to meet specific client investment
                        goals and risk tolerance.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[#444444]">Product Benefits</p>
                      {activeItem === "item-1" ? (
                        <ChevronUp className="text-[#444444]" />
                      ) : (
                        <ChevronDown className="text-[#444444]" />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="text-gray-500 py-4 pr-9">
                      <li className="py-2 text-sm">
                        <strong> Inflation Hedge: </strong>
                        Commodities historically perform well during
                        inflationary periods, offering protection against
                        inflation.
                      </li>
                      <li className="py-2">
                        <strong>Portfolio Diversification: </strong>
                        Adds a layer of diversification to traditional equity
                        and bond portfolios, reducing overall portfolio risk.
                      </li>
                      <li className="">
                        <strong>Growth Potential: </strong>
                        Capitalizes on global demand trends and supply
                        constraints, offering potential for substantial capital
                        appreciation.
                      </li>
                      <li className="py-2">
                        <strong>Transparency: </strong>
                        Regular updates and transparent reporting on portfolio
                        performance and allocation.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[#444444]">Target Markets</p>
                      {activeItem === "item-1" ? (
                        <ChevronUp className="text-[#444444]" />
                      ) : (
                        <ChevronDown className="text-[#444444]" />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-4">
                      <p className="text-gray-500 text-sm">
                        The portfolio is targeted at:
                      </p>
                      <ol className="text-gray-500 py-2 pr-9">
                        <li className="py-2 text-sm">
                          <strong>Institutional Investors: </strong>
                          Including hedge funds, pension funds, and insurance
                          companies looking for diversification and inflation
                          protection.
                        </li>
                        <li className="py-2">
                          <strong>Hign Network Individuals </strong>
                          Seeking alternative investment options to enhance
                          their portfolios.
                        </li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="py-4 flex flex-col items-end ">
              <p className="font-medium leading-tight tracking-tighter text-title-lg text-[#C14511]">
                ₦50,000
              </p>
              <p className="font-medium text-[15px] text-[#444444]">
                Minimum Subscription Amount
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

*/

"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronUp, ChevronDown } from "lucide-react";

type AccordionData = {
  id: string;
  title: string;
  content: string | JSX.Element;
};

type ProductDetailsProps = {
  title: string;
  subtitle: string;
  image: StaticImageData;
  price: string;
  priceDescription: string;
  accordionItems: AccordionData[];
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  subtitle,
  image,
  price,
  priceDescription,
  accordionItems,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleAccordionToggle = (item: string) => {
    setActiveItem((prev) => (prev === item ? null : item));
  };

  return (
    <div className="px-5 lg:px-10 xl:px-20">
      <div className="py-3">
        <h3 className="font-semibold leading-tight pt-30 tracking-tighter text-title-lg lg:text-title-xl text-[#444444]">
          {title}
        </h3>
        <p className="text-[13px] tracking-tight leading-normal font-normal pb-3 text-gray-500">
          {subtitle}
        </p>
      </div>

      <div className="block md:grid grid-cols-2 my-7 gap-10">
        <div className="col-span-1">
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={16}
            height={9}
          />
        </div>
        <div className="flex justify-between flex-col">
          <div className="col-span-1">
            <Accordion
              type="single"
              collapsible
              onValueChange={(value) => handleAccordionToggle(value || "")}
              className="gap-9"
            >
              {accordionItems.map(({ id, title, content }) => (
                <AccordionItem key={id} value={id}>
                  <AccordionTrigger>
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[#444444] font-medium">{title}</p>
                      {activeItem === id ? (
                        <ChevronUp className="text-[#444444]" />
                      ) : (
                        <ChevronDown className="text-[#444444]" />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-gray-500 text-sm md:pr-9 py-4">
                      {content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="py-4 flex flex-col items-end">
            <p className="font-medium leading-tight tracking-tighter text-title-lg text-[#C14511]">
              {price}
            </p>
            <p className="font-medium text-[15px] text-[#444444]">
              {priceDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
