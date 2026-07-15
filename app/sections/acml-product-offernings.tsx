// import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import CardFive from "../components/card-five";
// import agrivest from "@/public/acml/product-champs/agrivest.jpg";
// import halal from "@/public/acml/product-champs/halal.png";
// import minivault from "@/public/acml/product-champs/minivault.png";
// // import aaic from "@/public/acml/product-champs/aaic.png";
// // import aam from "@/public/acml/product-champs/aam.png";
// // import aat from "@/public/acml/product-champs/aat.png";
// import farmers_store from "@/public/acml/product-champs/farmers_store.jpg";
// import mockup from "@/public/acml/product-champs/mockup.png";
// import farmers_community from "@/public/acml/product-champs/farmers-community.jpg";

//import ATCCommoditiesCycles from "./atcl-commodity-cycles";
//import ATCHowItWorks from "./how-actl-work";

// const ACMLServiceOfferings = () => {
//   return (
//     <>
//       <div className="bg-[#]">
//         <div className="px-5 lg:px-10 xl:px-20 py-8">
//           <h3 className="font-semibold leading-tight pb-7 md:pb-10 tracking-tighter text-title-lg lg:text-title-xl text-[#444444] ">
//             Our Product Offerings
//           </h3>
//           <p className="hidden lg:leading-8 text-[13px] md:text-lg lg:text-xl font-medium text-[#444444]">
//             We pride ourselves on delivering exceptional expertise and a broad
//             spectrum of financial services tailored to meet your unique
//             investment needs.
//           </p>

//           <p className="lg:leading-8 text-[13px] md:text-lg lg:text-xl font-medium text-[#444444]">
//             We pride ourselves on delivering exceptional expertise and a broad
//             spectrum of commodity trading services tailored to meet your unique
//             investment needs.
//           </p>
//         </div>
//         <div>
//           <Accordion
//             type="multiple"
//             defaultValue={["item-1", "item-2", "item-3"]}
//           >
//             <AccordionItem value="item-1" className="hidden">
//               <AccordionTrigger className="px-5 lg:px-10 xl:px-20 md:py-8 bg-[#c14511]">
//                 <div>
//                   <h3 className="font-semibold uppercase leading-tight tracking-tighter text-title-xsm md:text-title-lg text-white ">
//                     <span className="mr-4">01.</span> Investments
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-[#ffffff]">
//                 <div className="px-5 lg:px-10 xl:px-20 py-10">
//                   <CardFive
//                     product_fullName="Assetium Commodity Portfolio (ACP)"
//                     imagePosition="left"
//                     imageSrc={agrivest.src}
//                     title="Agrivest"
//                     description=" This is a structured investment portfolio designed to help investors achieve short-term financial goals while ensuring liquidity, capital preservation, and competitive returns. Managed by a team of experts, the portfolio allows individuals to invest in physical commodities, providing a secure and alternative investment option."
//                     tags={[
//                       "Inflation Hedge",
//                       "High Liquidity",
//                       "Diverse Commodity Exposure",
//                     ]}
//                     link="/assetium-capital-management-limited/agrivest"
//                   />

//                   <CardFive
//                     imagePosition="right"
//                     imageSrc={minivault.src}
//                     title="Minivault"
//                     product_fullName="Assetium Kiddies Commodity Portfolio (AKCP)"
//                     description="The Assetium Kiddies Commodity Portfolio is a first-of-its-kind product aimed at instilling financial literacy and a culture of saving and investing in children from an early age. This portfolio allows parents and guardians to make manageable contributions toward their child’s future needs, such as education or long-term upkeep, through a low-risk, growth-focused investment strategy.
//                     "
//                     tags={[
//                       "Inflation Hedge",
//                       "High Liquidity",
//                       "Diverse Commodity Exposure",
//                     ]}
//                     link="/assetium-capital-management-limited/minivault"
//                   />

//                   <CardFive
//                     imagePosition="left"
//                     product_fullName="Assetium Halal Commodity Portfolio (AHCP)"
//                     imageSrc={halal.src}
//                     title=" Halal"
//                     description="For socially conscious investors, the Assetium Halal Commodity Portfolio offers an opportunity to invest responsibly without compromising on returns. Focused on sustainable, ethically sourced, and environmentally sound assets, this portfolio aligns financial growth with moral values."
//                     tags={["Future-focused", "Empowering", "Secure"]}
//                     link="/assetium-capital-management-limited/halal"
//                   />
//                 </div>
//               </AccordionContent>
//             </AccordionItem>

//             <AccordionItem value="item-2">
//               <AccordionTrigger className="px-5 lg:px-10 xl:px-20 md:py-8 bg-[#1A1919]">
//                 <div>
//                   <h3 className="font-semibold uppercase leading-tight tracking-tighter text-title-xsm md:text-title-lg text-white ">
//                     <span className="mr-4">02.</span> Commodity Trading
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-[#f1f1f1]">
//                 <div className="px-5 lg:px-10 xl:px-20 py-10">
//                   <CardFive
//                     imagePosition="right"
//                     tagDisplay={false}
//                     imageSrc={mockup.src}
//                     title="Assetium Commodities Trading"
//                     description="It’s a commodity-backed investment community where investors participate in structured agricultural trading cycles, focused on real commodities. Currently, we trade and cultivate ginger, turmeric, and maize"
//                   />
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem value="item-3">
//               <AccordionTrigger className="px-3 lg:px-10 xl:px-20 md:py-8 bg-[#C14511]">
//                 <div>
//                   <h3 className="font-semibold uppercase leading-tight tracking-tighter text-title-xsm md:text-title-lg text-white ">
//                     <span className="mr-3">03.</span> Farmers Engagement &
//                     Community
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-[#f1f1f1]">
//                 <div className="px-5 lg:px-10 xl:px-20 py-10">
//                   <CardFive
//                     imagePosition="left"
//                     imageSrc={farmers_community.src}
//                     tagDisplay={false}
//                     title="Assetium Farmers Community"
//                     description={`Assetium Farmers Community is a dedicated platform that connects farmers, providing them with access to essential resources, market insights, and agricultural innovations. Whether you are a smallholder or a large-scale farmer, our community driven ecosystem empowers you with: <br/><br/>
//  🌱  Farmer-to-Farmer Networking  <br/>
//  🌱 Agri-Input Access  <br/>
//  🌱  Market Intelligence  <br/>
//  🌱 SeamlessProduceSales  <br/>
//  🌱  Real-Time Tracking  <br/><br/>
//  At Assetium Farmers Community, we believe in empowering farmers through
//  connection, collaboration, and resource accessibility.`}
//                     tags={[
//                       "Inflation Hedge",
//                       "High Liquidity",
//                       "Diverse Commodity Exposure",
//                     ]}
//                   />
//                   <CardFive
//                     imagePosition="right"
//                     imageSrc={farmers_store.src}
//                     tagDisplay={false}
//                     title="Farmers Store"
//                     description={`Farmers Store is a digital marketplace designed to connect investors and farmers                       in a seamless, profitable, and transparent way.<br/><br/>
//                       🔹 <strong>Investors</strong> to purchase high-quality agro commodities directly from verified farmers, securing assets with real, tangible value.<br/><br/>
//                       🔹  <strong>Farmers </strong>to list their products, gain access to a wider market, and receive competitive prices for their produce..<br/><br/>
//                        With Assetium Farmers Store, we simplify agro-commodity investments, ensuring fair trade, price stability, and efficient logistics. Whether you’re looking to purchase agricultural products or sell your harvest at the best rates, we provide a secure and trusted ecosystem to help you grow.`}
//                     tags={[
//                       "Inflation Hedge",
//                       "High Liquidity",
//                       "Diverse Commodity Exposure",
//                     ]}
//                   />
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//           {/* <Accordion type="single" collapsible>
//             <AccordionItem value="item-2">
//               <AccordionTrigger className="px-5 lg:px-10 xl:px-30 md:py-8 bg-[#1A1919]">
//                 <div>
//                   <h3 className="font-semibold uppercase leading-tight tracking-tighter text-title-lg text-white">
//                     FARMERS COMMUNITY
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-[#f1f1f1]">
//                 <div className="px-5 lg:px-10 xl:px-30 md:py-8">
//                   <CardFour
//                     title="Portfolio & Investment Management"
//                     description="This service is designed for clients seeking professional management of their investments across various asset classes. We tailor our approach to meet the specific needs and risk tolerance of each client, aiming to deliver optimal returns while managing risk effectively."
//                     icon={<Briefcase />}
//                   />
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//           <Accordion type="single" collapsible>
//             <AccordionItem value="item-3">
//               <AccordionTrigger className="px-5 lg:px-10 xl:px-30 md:py-8 bg-[#C14511]">
//                 <div>
//                   <h3 className="font-semibold uppercase leading-tight tracking-tighter text-title-lg text-white">
//                     COMMMODITY TRADING{" "}
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-[#f1f1f1]">
//                 <div className="px-5 lg:px-10 xl:px-30 md:py-8">
//                   <CardFour
//                     title="Portfolio & Investment Management"
//                     description="This service is designed for clients seeking professional management of their investments across various asset classes. We tailor our approach to meet the specific needs and risk tolerance of each client, aiming to deliver optimal returns while managing risk effectively."
//                     icon={<Briefcase />}
//                   />
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//           <Accordion type="single" collapsible>
//             <AccordionItem value="item-4">
//               <AccordionTrigger className="px-5 lg:px-10 xl:px-30 md:py-8 bg-[#1A1919]">
//                 <div>
//                   <h3 className="font-semibold uppercase leading-tight tracking-tighter text-title-lg text-white">
//                     Farmers Store
//                   </h3>
//                 </div>
//               </AccordionTrigger>
//               <AccordionContent className="bg-[#f1f1f1]">
//                 <div className="px-5 lg:px-10 xl:px-30 md:py-8">
//                   <CardFour
//                     title="Portfolio & Investment Management"
//                     description="This service is designed for clients seeking professional management of their investments across various asset classes. We tailor our approach to meet the specific needs and risk tolerance of each client, aiming to deliver optimal returns while managing risk effectively."
//                     icon={<Briefcase />}
//                   />
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion> */}
//         </div>
//         {/*   <div className="xsm:flex flex-wrap w-full items-start justify-around my-7">
//           <CardFour
//             title="Portfolio & Investment Management"
//             description="This service is designed for clients seeking professional management of their investments across various asset classes. We tailor our approach to meet the specific needs and risk tolerance of each client, aiming to deliver optimal returns while managing risk effectively."
//             icon={<BriefcaseBusiness />}
//           />
//           <CardFour
//             title="Farmers Community & Engagement"
//             description="Our team of seasoned professionals leverages deep market knowledge, advanced analytics, and strong industry relationships to execute profitable trades across a wide range of commodities. We offer tailored solutions that help our clients capitalize on market opportunities while effectively managing risk."
//             icon={<Lightbulb />}
//           />

//           <CardFour
//             title="Commodity Trading"
//             description="Our expertise extends to fixed income services, which involve investment opportunities centered around securities that provide a predictable stream of income. We provide expert guidance and support to help our clients navigate the fixed income market andachieve their investment goals."
//             icon={<ChartColumnIncreasing />}
//           />
//           <CardFour
//             title="Farmers Market"
//             description="Assetium Farmers Market connects you to the freshest and most affordable produce directly from local farmers. Our service offers a convenient way to purchase a wide variety of fresh foodstuffs, delivered right to your doorstep. Enjoy the taste of homegrown goodness while supporting your local community."
//             icon={<Store />}
//           />

//           <div className="flex-grow bg-red-50 md:m-7">
//             <Image
//               src={acmlServiceImg}
//               alt=""
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default ACMLServiceOfferings;
import { Button } from "@/components/ui/button";

export default function ATCOverview() {
  return (
    <section className="bg-[#faf9f7] py-20 px-4 lg:px-20 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="block w-6 h-[2px] bg-brand rounded-full" />
          <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
            Flagship Product
          </span>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — text */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[2rem] font-black text-brand/[0.06] leading-none block -mb-4 select-none">
                ATCL
              </span>
              <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
                Assetium Commodity <span className="text-brand">Trading </span>
                League
              </h2>
            </div>

            <p className="text-[.92rem] leading-relaxed text-[#1a1919]">
              A structured, cycle-based commodity investment platform that
              allows members to earn from real agricultural commodities. Unlike
              traditional trading, ACTL handles the full operational process —
              letting investors participate without operational hassle.
            </p>

            <p className="text-[.92rem] leading-relaxed text-[#1a1919]">
              By turning everyday food demand into a repeatable wealth-building
              system, ACTL provides a transparent, scalable, and outcome-driven
              investment opportunity grounded in real commercial activity.
            </p>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { label: "Investment Type", value: "Commodity-Backed" },
                { label: "Target Return", value: "Ethical Profit Sharing" },
                // { label: "Cycle Structure", value: "Short · Mid · Long" },
                // { label: "Exit Options", value: "Standard or Position Sale" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-black/[0.06] rounded-xl px-4 py-3 flex flex-col gap-1"
                >
                  <span className="text-[10px] font-bold text-[#1a1919]/40 uppercase tracking-wider">
                    {f.label}
                  </span>
                  <span className="text-[12px] font-semibold text-[#1a1919]">
                    {f.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-4 mt-2">
                <Button>Open Account</Button>
                <Button
                  variant={"link"}
                  className="text-[.8rem] font-medium underline hover:font-semibold text-foreground/90 hover:text-foreground"
                >
                  Download Pitchdeck
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT — visual */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden h-[460px]">
              <img
                src="acml/actl.jpg"
                alt="Assetium Trading Community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-white/60 uppercase tracking-widest mb-1">
                    Currently Active
                  </p>
                  <p className="text-[16px] font-black text-white">
                    Tranche 2 — Ginger Cycle
                  </p>
                </div>
                <span className="w-3 h-3 rounded-full bg-brand animate-pulse flex-shrink-0" />
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -top-5 -right-5 bg-white border border-black/[0.08] rounded-2xl px-5 py-4 shadow-lg flex flex-col gap-1">
              <span className="text-1rem] font-black text-brand leading-none uppercase">
                Profit Sharing
              </span>

              <span className="text-[10px] text-[#1a1919]/40">
                Per completed cycle
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
