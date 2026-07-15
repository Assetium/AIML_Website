import ProductDetails from "@/app/components/product-details";
import agrivest from "@/public/acml/product-champs/agrivest.jpg";
// import minivault from "@/public/acml/product-champs/minivault.png";
// import halal from "@/public/acml/product-champs/halal.png";
import React from "react";
import InvestmentPortfolio from "@/app/sections/investment-portfolios";

const portfolios = [
  {
    image: agrivest,
    // image: halal,
    title: " Halal",
    amount: "₦50,000",
    description: "Initial Subscription Amount",
    link: "/assetium-capital-management-limited/halal",
  },
  {
    image: agrivest,
    title: "Agrivest",
    amount: "₦50,000",
    description: "Initial Subscription Amount",
    link: "/assetium-capital-management-limited/agrivest",
  },
  {
    // image: minivault,
    image: agrivest,
    title: "Minivault",
    amount: "₦50,000",
    description: "Initial Subscription Amount",
    link: "/assetium-capital-management-limited/minivault",
  },
];

// Func to filter out other portfolios
const otherPortfolios = portfolios.filter(
  (portfolio) => portfolio.title !== " Halal"
);

const page = () => {
  const accordionItems = [
    {
      id: "item-1",
      title: "Product Description",
      content: (
        <p className=" text-xs leading-[1.8]">
          For socially conscious investors, Halal Portfolio offers an
          opportunity to invest responsibly without compromising on returns.
          Focused on sustainable, ethically sourced, and environmentally sound
          assets, this portfolio aligns financial growth with moral values. AHCP
          enables investors to achieve competitive returns while adhering to
          principles of fairness, sustainability, and social responsibility.
          This product is an ideal choice for those looking to make a positive
          impact through their investments.
        </p>
      ),
    },
    {
      id: "item-2",
      title: "Product Main Features",
      content: (
        <ul className="text-gray-500 pr-7 text-justify pl-5 list-disc">
          <li className=" text-xs  leading-[1.8] py-2">
            <strong>Diverse Commodity Exposure: </strong>Invests across a range
            of shariah compliant commodities including precious metals (gold,
            silver), energy (oil, naturaligas), agricultural products (wheat,
            corn), and industrial metals (copper, aluminum).
          </li>
          <li className=" text-xs  leading-[1.8] py-2">
            <strong>Managed Risk: </strong>Actively managed to optimize
            risk-reward by dynamically adjusting the portfolio allocation based
            on market conditions
          </li>
        </ul>
      ),
    },
    {
      id: "item-3",
      title: "Product Benefits",
      content: (
        <ul className="text-gray-500 pr-7 text-justify pl-5 list-disc">
          <li className=" text-xs  leading-[1.8] py-2">
            <strong>Inflation Hedge: </strong>Commodities historically perform
            well during inflationary periods, offering protection against
            inflation Portfolio Diversification: Adds a layer of diversification
            to traditional equity and bond portfolios, reducing overall
            portfolio risk.
          </li>
          <li className=" text-xs  leading-[1.8] py-2">
            <strong>Growth Potential: </strong> Capitalizes on global demand
            trends and supply constraints, offering potential for substantial
            capital apprediation.
          </li>
          <li className=" text-xs  leading-[1.8] py-2">
            <strong>Transparency: </strong>
            Regular updates and transparent reporting on portfolio performance
            and allocation.
          </li>
        </ul>
      ),
    },
    {
      id: "item-4",
      title: "Target Market",
      content: (
        <>
          <p className="text-gray-500 text-sm">
            The portfolio is targeted Ethical conscious investor at:
          </p>
          <ul className="text-gray-500 pr-7 text-justify pl-5 list-disc">
            <li className=" text-xs  leading-[1.8] py-2">
              <strong>Retail Investors: </strong>
            </li>
            <li className=" text-xs  leading-[1.8] py-2">
              <strong>High Network Individuals (HNIs): </strong>
              Seeking alternative investment options to enhance their
              portfolios.
            </li>
          </ul>
        </>
      ),
    },
  ];
  return (
    <div>
      <ProductDetails
        title="Halal Portfolio"
        subtitle="A Portfolio Product of Assetium Capital Management Limited"
        image={agrivest}
        // image={halal}
        price="₦50,000"
        priceDescription="Initial Subscription Amount"
        accordionItems={accordionItems}
      />
      <div className="py-10 px-5 lg:px-10 xl:px-20">
        <p className="font-medium leading-tight tracking-tighter text-title-lg text-[#444444] py-4">
          Other Investment Portfolio Products
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {otherPortfolios.map((portfolio, index) => (
            <InvestmentPortfolio
              key={index}
              link={portfolio.link}
              image={portfolio.image}
              title={portfolio.title}
              amount={portfolio.amount}
              description={portfolio.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
