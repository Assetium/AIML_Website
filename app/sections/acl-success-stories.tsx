"use client";
import Image from "next/image";
import { useState } from "react";

export const partners = [
  {
    id: 1,
    name: "Casalavoro",
    years: "6Months+ Years in Partnership",
    profitability: "Profitability",
    description_one:
      "We are elated to acknowledge the instrumental role Assetium Capital Ltd has played in propelling *Eggosystem and Eggnovation toward realizing its vision of becoming a global foremost, hyper-scale Agritech Egg brand driving Agricultural inclusion through technology. Through their unwavering financial support and strategic investment acumen, Assetium Capital enabled the successful establishment of our advanced Egg sales operations hub—a critical milestone in our journey to revolutionize egg production and distribution across the continent creating a formalized economy and an ecosystem called *Eggosystem* with precisive burden of ensuring not just food security but nutritional security.",

    description_two:
      "Their partnership has gone beyond financing to become a catalyst spurring innovation solutions via Eggnovation; addressing the challenges afacing the Agro-poultry Egg sector.  gggnovation* We deeply value their unwavering support &partnership, and we look forward to achieving even greater impact with Assetium Capital by our side",

    logo: "/metrics/casalavoro.png",
    Author: " Eddidiong Joshua (Founder, Casalavoro)",
  },
  {
    id: 2,
    name: "Josjane Enterprise",
    years: "2+ Years in Partnership",
    profitability: "Profitability & Operational Efficiency",
    description_one:
      "As a major distributor for Nigeria Bottling Company, I have had the privilege of working closely with Assetium Consult, and I can confidently say that their funding and management support have been transformative for my business. When I first approached Assetium Consult, our company was facing significant challenges. Despite our strong customer base and a well-established distribution network, we struggled with cash flow issues and inefficient management processes. We desperately needed an infusion of capital to purchase inventory and improve our logistics, but accessing traditional financing avenues proved to be a daunting task. ",

    description_two:
      "Assetium Consult quickly understood our unique needs and the dynamic nature of the beverage distribution sector. They provided us not only with the much-needed funding but also with strategic management support that helped us streamline our operations. Their team conducted an in-depth analysis of our business model and operations, identifying areas where we could improve efficiency and reduce costs. The financial assistance enabled us to increase our inventory levels significantly, which in turn allowed us to meet growing customer demand without delay. With their guidance, we adopted more effective inventory management practices that minimized waste and maximized profitability. ",

    description_three:
      "Assetium’s consultation on operational efficiency was invaluable; it equipped us with the tools necessary to enhance our distribution processes. Their commitment to helping us succeed has truly made a difference, and we look forward to continuing this fruitful partnership in the future.",

    logo: "/acl/nbc.png",

    Author: "Mr. Koleoso (MD, Josjane)",
  },
  {
    id: 3,
    name: "Eduvacity",
    years: "1+ Years in Partnership",
    profitability: "Community Investment",
    description_one:
      "Access to higher education remains a significant challenge in Sub-Saharan Africa, where only 6% of children enroll in tertiary institutions compared to 80% in developed nations. With just over 740 universities serving 660 million people in Africa’s most populous countries, limited admission opportunities and high failure rates in entrance exams like JAMB have led to educational stagnation. This crisis not only hinders personal and professional development but also stifles economic growth and exacerbates social and psychological challenges. Eduvacity is dedicated to becoming Africa’s leader in higher education access by leveraging technology and innovation to bridge skill gaps and promote lifelong learning. Our mission is to ensure that quality education is a right for all, not a privilege for a select few.",

    description_two:
      "In collaboration with Assetium Capital Management Limited, we have launched the Eduvacity-Assetium Impact Scholarship to remove financial barriers and create opportunities for students, regardless of their circumstances. This initiative aims to empower individuals, foster growth, and provide access to essential industry-relevant skills, ensuring a more inclusive and dynamic education system.",

    description_three:
      "Together, we are transforming education by breaking down barriers and investing in communities. We are excited to support the next generation of skilled and empowered individuals. If you or someone you know is interested in this scholarship, apply now at https://www.eduvacity.com/scholarship.",

    logo: "/acl/eduvacity.png",
    Author: "Musa Abaah (MD/ CEO Eduvacity)",
  },
  {
    id: 4,
    name: "Amec Consult",
    years: "In Partnership",
    profitability: "Business Transformation",
    description_one:
      "In the bustling world of consultancy, it’s rare to come across a partnership that exemplifies true collaboration and mutual growth. Our experience with Assetium Consult has been nothing short of transformative. When Amec Consult first faced the ambitious goal of enhancing our business, we knew we needed external support that could not only understand our vision but also elevate it. Assetium Consult stepped in at the perfect moment. Their team displayed an impressive depth of knowledge and a proactive approach that reassured us we were in capable hands. ",

    description_two:
      "From the outset, Assetium Consult took the time to deeply understand our business model, values, and aspirations The constant communication and transparency from Assetium’s leadership reassured us that we were always on the right track. Every meeting felt collaborative, with our input valued and integrated into the evolving strategy. We never felt like just another client; we felt like partners.Thanks to Assetium Consult, Amec Consult has not only achieved its expansion goals but has also fostered a culture of continuous improvement and adaptation that will serve us well into the future.",

    description_three:
      "In conclusion, we are immensely grateful to Assetium Consult for their unwavering support and guidance. This partnership has not only reshaped our organization but has also set us on a path of sustainable growth and innovation. We wholeheartedly recommend Assetium Consult to any company looking to elevate its performance and achieve excellence.",

    logo: "/acl/nb!c.png",

    Author: "Engr. Taiwo (MD, Amec Consult)",
  },
];

export default function Partners() {
  const [selectedPartner, setSelectedPartner] = useState(partners[0]);

  return (
    <div className="py-8 px-5 lg:px-10 xl:px-20">
      <div>
        <h3 className="font-semibold leading-tight pb-4 md:pb-6 tracking-tight text-title-lg lg:text-title-xl text-[#1a1919]">
          Read our success stories, see business we transformed and how we did
          it!
        </h3>
      </div>
      {/* Mobile View: Tabs on Top */}
      <div className="md:hidden overflow-x-auto whitespace-nowrap space-x-3 mb-4 flex my-5 scroll-smooth scroll-m-0">
        {partners.map((partner) => (
          <button
            key={partner.id}
            className={`flex items-center gap-3 px-4 py-2 text-left transition-all whitespace-nowrap ${
              selectedPartner.id === partner.id
                ? "bg-[#c14511] text-white"
                : "bg-gray-100 hover:bg-gray-200 text-[#444444]"
            }`}
            onClick={() => setSelectedPartner(partner)}
          >
            <Image
              width={16}
              height={16}
              src={partner.logo}
              alt={partner.name}
              className="w-8 h-8 rounded-full bg-red-50"
            />
            <p className="font-medium">{partner.name}</p>
          </button>
        ))}
      </div>

      {/* Desktop View: Side-by-Side Layout */}
      <div className="flex flex-col md:flex-row gap-12 my-8">
        {/* Left Panel (Tabs) - Shown only on Desktop */}
        <div className="hidden md:block w-1/3 space-y-4">
          {partners.map((partner) => (
            <button
              key={partner.id}
              className={`flex rounded items-center gap-3 p-4 w-full text-left transition-all ${
                selectedPartner.id === partner.id
                  ? "bg-[#c14511] text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedPartner(partner)}
            >
              <Image
                width={16}
                height={16}
                src={partner.logo}
                alt={partner.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{partner.name}</p>
                <p className="text-xs">{partner.profitability}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Right Panel (Content) */}
        <div className="w-full md:w-2/3 space-y-3 relative">
          <h2 className="text-2xl font-semibold text-[#444444] tracking-tight">
            {selectedPartner.name}
          </h2>
          <p className="text-gray-400 text-xs">
            {selectedPartner.years} •
            <span className="text-[#c14511]">
              {selectedPartner.profitability}
            </span>
          </p>
          <p className=" text-xs text-[#444444] leading-[1.8]">
            {selectedPartner.description_one}
          </p>
          <p className=" text-xs text-[#444444] leading-[1.8]">
            {selectedPartner.description_two}
          </p>
          <p className=" text-xs text-[#444444] leading-[1.8]">
            {selectedPartner.description_three}
          </p>

          {/* Read More Indicator - Bottom Left */}
          <div className="text-right  pt-4 bottom-0 right-0 text-[#c14511] text-xs font-medium pl-2 hover:underline hover:font-semibold hover:cursor-pointer">
            → {selectedPartner.Author}
          </div>
        </div>
      </div>
    </div>
  );
}
