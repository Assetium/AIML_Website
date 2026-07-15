import React from "react";
import CardFour from "../components/card-four";
import {
  BriefcaseBusiness,
  ChartColumnIncreasing,
  Lightbulb,
  Store,
} from "lucide-react";

const SustainableApproach = () => {
  return (
    <div className="py-8 lg:py-10 px-5 lg:px-10 xl:px-20 bg-[#fff8f6] my-8">
      <div className="">
        <h3 className="font-semibold leading-tight tracking-tighter pb-5 text-title-lg lg:text-title-xl text-[#444444] ">
          Our Approach to Sustainability Through Our Subsidiaries
        </h3>
        <p className=" font-normal text-[16px] lg:text-[17px] text-[#444444]">
          We are not just about investments; we are about making the world a
          better place. That is why we are committed to the contributing to
          Sustainable Development Goals (SDGs).
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xsm:grid-cols-2 gap-4 my-10">
        <div className="flex flex-col h-full">
          <CardFour
            title="Asset Management"
            description="We incorporate ESG criteria into investing in businesses that demonstrate a commitment to sustainability. From renewable energy projects to innovative green technologies, we ensure that our clients' investments drive positive change. "
            icon={<BriefcaseBusiness />}
          />
        </div>
        <div className="flex flex-col h-full">
          <CardFour
            title="Commodity Trading"
            description="In our commodity trading, we source ethically and responsibly. Whether it’s agricultural produce or natural resources, we work with partners who adhere to sustainable practices, ensuring a reduced environmental footprint and equitable trade practices."
            icon={<ChartColumnIncreasing />}
          />
        </div>
        <div className="flex flex-col h-full">
          <CardFour
            title="Consulting"
            description="Our consulting services help organizations integrate sustainability into their strategies. We guide businesses on reducing their carbon footprint, optimizing resource usage, and adopting eco-friendly operational models."
            icon={<Lightbulb />}
          />
        </div>
        <div className="flex flex-col h-full">
          <CardFour
            title="Hospitality & Real Estate"
            description="We prioritize green building practices, energy-efficient designs, and smart urban planning in our real estate projects. By creating sustainable spaces, we provide properties that are not just investments but also contributors to a healthier environment."
            icon={<Store />}
          />
        </div>
      </div>

      {/*  <div className="grid gap-5 my-7 lg:grid-cols-4 xsm:grid-cols-2 grid-cols-1">
        <CardSix
          imageSrc={noPoverty.src}
          sdgNumber="SDG ONE"
          sdgTitle=" No Poverty"
        />
        <CardSix
          imageSrc={zeroHunger.src}
          sdgNumber="SDG TWO"
          sdgTitle="Zero Hunger"
        />

        <CardSix
          imageSrc={responsibleConsumption.src}
          sdgNumber="SDG Twelve"
          sdgTitle="Responsible Consumption and Production"
        />

        <CardSix
          imageSrc={sustainableCities.src}
          sdgNumber="SDG Eleven"
          sdgTitle="  Sustainable Cities and Communities "
        />
      </div> */}
    </div>
  );
};

export default SustainableApproach;
