import React from "react";
import Image from "next/image";

const AssetiumETF = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Assetium Commodities Trading League
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-4xl">
          Assetium Commodities Trading offers investors a unique blend of
          commodities and stock market investments. It combines the stability of
          commodities trading with the growth potential of equities, allowing
          participants to invest in both classes which is by investing in
          physical traded commodities or purchase of shares in commodity stocks
          listed on the exchange onlocaland international platform while
          receiving periodic dividends.
        </p>

        {/* Image Mockups */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/acml/product-champs/mockup1.png"
              alt="Trading dashboard"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/acml/product-champs/mockup2.png"
              alt="Market data overview"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features List */}
        <h3 className="text-2xl font-semibold mb-4">Features:</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
            >
              <h4 className="text-xl font-bold text-orange-400 mb-2">
                0{index + 1}.
              </h4>
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  "Balanced Diversification of Commodities and Equities granting both local and international access.",
  "Invest in stocks listed on major exchanges such as the Nigerian Stock Exchange, NYSE, LSE, and other emerging markets.",
  "Investors receive dividends on a half-yearly basis from the returns on both commodity and equity investments.",
  "Benefit from potential capital appreciation of stocks and opportunities for stock buybacks, boosting portfolio value.",
  "Access to Exchange-Traded Funds (ETFs) that track global commodities and stock indices for broad market exposure.",
];

export default AssetiumETF;
