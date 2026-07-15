// "use client";

// import { useState } from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { faqData, ProductKey } from "@/lib/faqData";

// export default function Page() {

//   const tabs: ProductKey[] = [
//   "Assetium Investment Managers",
//   "Assetium Advisory Limited",
//   "Assetium Capital Management Limited", 
//   "Assetium Barakah Farms Limited",
// ];



//   // const [activeTab, setActiveTab] = useState<ProductKey>("Assetium Investment Managers");
//   const [activeTab, setActiveTab] = useState<ProductKey>(tabs[0]);
//   // const tabs: ProductKey[] = ["AGRIVEST", "MINIVAULT", "HALAL"];

//   return (
//     <div className="bg-[#f9f9f9] text-[#444444] px-6 py-20 mt-10 lg:px-10 xl:px-20">
//       <div className="py-8">
//         <h3 className="font-semibold leading-tight pb-7 md:pb-10 tracking-tighter text-title-lg lg:text-title-xl text-[#444444]">
//           Frequently Asked Questions
//         </h3>
//         <p className="lg:leading-8 text-[13px] md:text-lg lg:text-xl text-[#444444]">
//           Find quick answers to common questions about our products. Click on a
//           tab to explore FAQs for each one.
//         </p>
//       </div>

//       {/* Tabs */}
//       <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 md:gap-6 mb-10 bg-gray-200 w-full p-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`flex-1 px-4 py-2 text-sm font-semibold shadow-md transition duration-200 hover:scale-105 hover:shadow-lg ${
//               activeTab === tab
//                 ? "bg-[#c14511] text-white"
//                 : "bg-[#1a1a19] text-white"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Accordion */}
//       <div className=" w-full md:max-w-[80%] mx-auto">
//         <Accordion type="single" collapsible className="w-full space-y-2">
//           {faqData[activeTab].map((item, index) => (
//             <AccordionItem key={index} value={`item-${index}`}>
//               <AccordionTrigger className="text-base font-medium text-left">
//                 {item.question}
//               </AccordionTrigger>
//               <AccordionContent className="text-sm text-gray-600">
//                 {item.answer}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData, ProductKey } from "@/lib/faqData";

const tabs: ProductKey[] = [
  "Assetium Investment Management Limited",
  "Assetium Capital Management",
  "Assetium Properties Limited",
  "Assetium Consult Limited",
  "Assetium Barakah Farms Limited",
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<ProductKey>(tabs[0]);

  return (
    <div className="bg-[#f9f9f9] text-[#444444] px-6 py-20 mt-10 lg:px-10 xl:px-20">
      <div className="py-8">
        <h3 className="font-semibold leading-tight pb-7 md:pb-10 tracking-tighter text-title-lg lg:text-title-xl text-[#444444]">
          Frequently Asked Questions
        </h3>
        <p className="lg:leading-8 text-[13px] md:text-lg lg:text-xl text-[#444444]">
          Find quick answers to common questions about our products. Click on a
          tab to explore FAQs for each one.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 md:gap-6 mb-10 bg-gray-200 w-full p-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-2 text-sm font-semibold shadow-md transition duration-200 hover:scale-105 hover:shadow-lg ${
              activeTab === tab
                ? "bg-[#c14511] text-white"
                : "bg-[#1a1a19] text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="w-full md:max-w-[80%] mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {(faqData[activeTab] ?? []).map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-medium text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}