// import React from "react";
// import Image from "next/image";
// import { Lightbulb, ChartColumnIncreasing } from "lucide-react";
// import CardFour from "../components/card-four";

// import acmlServiceImg from "@/public/acml/acmlServiceImggg.png";

// const ACMLServiceOfferings = () => {
//   return (
//     <>
//       <div className="px-5 lg:px-10 xl:px-20 py-6 bg-[#f1f1f1]">
//         <div>
//           <h3 className="font-semibold leading-tight pb-7 md:pb-10 tracking-tighter text-title-lg lg:text-title-xl text-[#444444] ">
//             Our Service Offerings
//           </h3>
//           <div className="">
//             <p className="lg:leading-8 text-[13px] md:text-lg lg:text-xl font-medium text-[#444444]">
//               Our offerings are crafted to provide comprehensive solutions,
//               whether you are an individual investor seeking growth or an
//               institution looking for how to venture into commodity trading.
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-9">
//           {/* <CardFour
//             title="Commodity Portfolio & Investment Management"
//             description="We offers a comprehensive range of portfolio and investment management services tailored to meet your unique financial goals. Our experienced team of investment professionals utilizes a disciplined approach to risk management and diversification to construct portfolios that align with your investment objectives and risk tolerance. We provide personalized advice, ongoing monitoring, and proactive rebalancing to ensure your investments remain ontrack"
//             icon={<BriefcaseBusiness />}
//           />
//           <CardFour
//             title="Farmers Engagement & Community Service"
//             description="We are committed to empowering farmers and fostering sustainable agricultural practices. We offer a range of services tailored to meet the unique needs of the farming community, including access to quality farm inputs, expert advice, financial support, and market linkages. Our goal is to help farmers increase their yields, improve their livelihoods, and contribute to a thriving agricultural sector."
//             icon={<Lightbulb />}
//           />

//           <CardFour
//             title="Commodity Trading"
//             description="Our experienced team provides expert guidance, market analysis, and access to a diverse portfolio of commodities, including energy, metals, and agricultural products. We leverage advanced trading strategies and risk management tools to optimize your investment returns while mitigating potential risks. Whether you're a seasoned trader or just starting out, Assetium is committed to providing you with the knowledge and support you need to succeed in the world ofcommodity trading."
//             icon={<ChartColumnIncreasing />}
//           /> */}

//           <CardFour
//             title="Commodity Trading"
//             description="Our experienced team provides expert guidance, market analysis, and access to a diverse portfolio of commodities, including energy, metals, and agricultural products. We leverage advanced trading strategies and risk management tools to optimize your investment returns while mitigating potential risks. Whether you're a seasoned trader or just starting out, Assetium is committed to providing you with the knowledge and support you need to succeed in the world ofcommodity trading."
//             icon={<ChartColumnIncreasing />}
//           />

//           <CardFour
//             title="Farmers Engagement"
//             description="We believe that empowered farmers build resilient communities. That’s why we’re dedicated to providing farmers with the tools, knowledge, and resources they need to thrive. From access to high-quality inputs and expert agronomic support to financial inclusion and technology-driven solutions, our services are designed to boost productivity and independence. By investing in farmers, we’re cultivating not just better harvests, but better futures."
//             icon={<Lightbulb />}
//           />

//           <CardFour
//             title="Community Service Focus"
//             description="Our commitment goes beyond individual farms — we aim to uplift entire communities. By supporting sustainable agricultural practices, facilitating market access, and promoting food security, we work hand-in-hand with local stakeholders to build stronger, more self-reliant rural areas. Every initiative we undertake is guided by a vision of inclusive growth that leaves no community behind."
//             icon={<Lightbulb />}
//           />

//           <div className="col-span-1 ">
//             <Image
//               src={acmlServiceImg}
//               alt="assetium woman farmer cleaning turmeric"
//               className="object-cover w-full h-full rounded shadow-sm"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ACMLServiceOfferings;

const services = [
  {
    number: "01",
    title: "Commodity Trading",
    image: "acml/commodities_trading.jpg",
    description:
      "Expert-guided access to energy, metals, and agricultural markets — with advanced strategies built to grow and protect your capital.",
    tags: ["Energy", "Metals", "Agriculture"],
  },
  {
    number: "02",
    title: "Farmers Engagement",
    image: "acml/farmers_engagement.jpg",
    description:
      "Equipping farmers with quality inputs, agronomic support, and financial tools to boost productivity and independence.",
    tags: ["Agri-Inputs", "Financial Inclusion", "Tech Solutions"],
  },
  {
    number: "03",
    title: "Community Service",
    image: "acml/community_service.jpg",
    description:
      "Driving sustainable growth beyond the farm — through market access, food security, and inclusive community development.",
    tags: ["Food Security", "Market Access", "Sustainability"],
  },
];

export default function ACMLServices() {
  return (
    <section className="bg-white py-12 px-4 lg:px-20 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                What We Do
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight max-w-md">
              Our Service <span className="text-brand">Offerings</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#1a1919]/80 max-w-sm md:text-right">
            Crafted to provide comprehensive solutions — whether you&apos;re an
            individual investor or an institution entering commodity markets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative  overflow-hidden h-[420px] cursor-pointer"
            >
              {/* Background image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Default: dark gradient from bottom only */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

              {/* Hover: brand gradient from bottom only */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand via-brand/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                {/* Number — always visible */}
                <span className="text-[10px] font-black text-white/50 tracking-[0.3em] mb-3 block">
                  {s.number}
                </span>

                {/* Title — always visible */}
                <h3 className="text-[22px] font-bold text-white leading-tight">
                  {s.title}
                </h3>

                {/* Description — slides in on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-out">
                  <p className="text-[.8rem] leading-relaxed text-white/85 mt-3">
                    {s.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {s.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-semibold text-white/80 bg-white/15 border border-white/25 px-2.5 py-1 rounded-full uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
