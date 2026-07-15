import ProductDetails from "@/app/components/product-details";
import InvestmentPortfolio from "@/app/sections/investment-portfolios";
// import minivault from "@/public/acml/product-champs/minivault.png";
import agrivest from "@/public/acml/product-champs/agrivest.jpg";
// import halal from "@/public/acml/product-champs/halal.png";
import React from "react";

const portfolios = [
  {
    image: agrivest,
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
    image: agrivest,
    title: "Minivault",
    amount: "₦50,000",
    description: "Initial Subscription Amount",
    link: "/assetium-capital-management-limited/minivault",
  },
];

// Func to filter out other portfolios
const otherPortfolios = portfolios.filter(
  (portfolio) => portfolio.title !== "Minivault"
);

const page = () => {
  const accordionItems = [
    {
      id: "item-1",
      title: "Product Description",
      content: (
        <p className=" text-xs leading-[1.8]">
          Miinivault Portfolio is a investment portfolio designed to nurture the
          financial intelligence of Nigeria future leaders. By partnering with
          parents, this portfolio empowers children to explore financial goals
          such as education, upkeep, entrepreneurship, and wealth transfer while
          building a strong financial foundation. With this specialized
          portfolio, children not only grow their savings but also learn
          valuable lessons about investments, economic trends, and the power of
          disciplined financial planning. By investing in real, tangible
          commodities, the Assetium Kiddies Commodity Portfolio provides a
          stable and sustainable way to secure their future, setting them on the
          path to financial independence and long-term success.
        </p>
      ),
    },
    {
      id: "item-2",
      title: "Product Main Features",
      content: (
        <ul className="text-gray-500 pr-7 text-justify pl-5 list-disc">
          <li className=" text-xs  leading-[1.8] py-2">
            {" "}
            <strong>Diverse Commodity Exposure: </strong> Invests across a range
            of commodities including precious metals (gold, silver), energy
            (oil, natural gas), agricultural products (wheat, corn), and
            industrial metals (copper, aluminum).
          </li>
          <li className=" text-xs  leading-[1.8] py-2">
            {" "}
            <strong>Managed Risk: </strong> Actively managed to optimize
            risk-reward by dynamically adjusting the portfolio allocation based
            on market conditions.
          </li>
          <li className=" text-xs  leading-[1.8] py-2">
            {" "}
            <strong>Liquidity: </strong> Offers high liquidity, enabling
            investors to enter and exit positions with ease.
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
            {" "}
            <strong> Inflation Hedge: </strong>
            Commodities historically perform well during inflationary periods,
            offering protection against inflation.
          </li>
          <li className=" text-xs  leading-[1.8] py-2">
            {" "}
            <strong>Portfolio Diversification: </strong>
            Adds a layer of diversification to traditional equity and bond
            portfolios, reducing overall portfolio risk.
          </li>
          <li className=" text-xs  leading-[1.8] py-2">
            {" "}
            <strong>Growth Potential: </strong>
            Capitalizes on global demand trends and supply constraints, offering
            potential for substantial capital appreciation.
          </li>
        </ul>
      ),
    },
    {
      id: "item-4",
      title: "Target Market",
      content: (
        <>
          <p className=" text-xs  leading-[1.8] py-2">
            The portfolio is targeted at:
          </p>
          <ul className="text-gray-500 pr-7 text-justify pl-5 list-disc">
            <li className=" text-xs  leading-[1.8] py-2">
              {" "}
              <strong>Children/ Wards </strong>
            </li>
          </ul>
        </>
      ),
    },
  ];
  return (
    <div>
      <ProductDetails
        title="Minivault"
        subtitle="A Portfolio Product of Assetium Capital Management Limited"
        image={agrivest}
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
