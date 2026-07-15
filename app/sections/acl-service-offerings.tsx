import React from "react";
import { Store, ChartColumnIncreasing, Recycle, Coins } from "lucide-react";
import CardFour from "../components/card-four";

const ACLServiceOfferings = () => {
  return (
    <>
      <div className="px-5 lg:px-10 xl:px-20 bg-[#f1f1f1]">
        <div>
          <h3 className="font-semibold leading-tight pb-4 md:pb-6 tracking-tight text-title-lg lg:text-title-xl text-[#1a1919]">
            Our Service Offerings
          </h3>
          <div>
            <p className="text-[.9rem] leading-relaxed text-[#1a1919]/60 font-medium">
              Our offerings are crafted to provide comprehensive solutions,
              whether you are an individual investor seeking growth or an
              institution looking for robust portfolio management.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-7 gap-3 my-9">
          <CardFour
            title="Strategy"
            description="Assetium Consult Limited drives partner growth through joint marketing, brand consistency, and performance analytics, fostering collaboration, competitive differentiation, and enhanced market positioning."
            icon={<Recycle />}
          />
          <CardFour
            title="Venture Capital"
            description="Assetium Consult Limited supports funding strategies through equity, debt, crowdfunding, partnerships, and bootstrapping, helping clients optimize capital structures and drive sustainable growth."
            icon={<Coins />}
          />
          <CardFour
            title="Funding"
            description="Funding services at Assetium Consult Limited include financial planning, capital sourcing, investment structuring, risk assessment, and strategic advisory to drive business growth and stability."
            icon={<ChartColumnIncreasing />}
          />
          <CardFour
            title="Corporate Governance"
            description="Strong corporate governance ensures transparency, accountability, and ethical leadership through diverse boards, clear roles, performance evaluations, and succession planning, fostering trust and sustainable growth."
            icon={<Store />}
          />
          <CardFour
            title="Business Advisory"
            description="Assetium Consult Limited provides strategic planning, operational efficiency, financial advisory, risk management, and compliance services to drive business growth, efficiency, and resilience."
            icon={<Store />}
          />
          <CardFour
            title="Portfolio Management"
            description="Fund portfolio management optimizes investments through strategy, risk management, performance monitoring, ESG integration, and client reporting—core to Assetium Consult Limited’s advisory expertise."
            icon={<ChartColumnIncreasing />}
          />
        </div>
      </div>
    </>
  );
};

export default ACLServiceOfferings;
