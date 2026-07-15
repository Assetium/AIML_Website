// faqData.ts

export type FAQ = {
  question: string;
  answer: string;
};

export type ProductKey =
  | "Assetium Investment Management Limited"
  | "Assetium Capital Management"
  | "Assetium Properties Limited"
  | "Assetium Consult Limited"
  | "Assetium Barakah Farms Limited";

export const faqData: Record<ProductKey, { question: string; answer: string }[]> = {
  "Assetium Investment Management Limited": [
    {
      question: "What does Assetium Investment Management Limited do?",
      answer:
        "Assetium Investment Management Limited (AIML) provides professional investment management services, helping individuals and institutions grow their wealth through disciplined portfolio management and alternative investment opportunities.",
    },
    {
      question: "Who can invest with AIML?",
      answer:
        "Our services are open to individuals, businesses, family offices, institutions, and corporate organizations looking for professionally managed investment solutions.",
    },
    {
      question: "What types of investment products does AIML offer?",
      answer:
        "We offer a range of investment products including structured funds, alternative investments, ethical/sharia-compliant products, fixed-income instruments, and asset-backed investment opportunities.",
    },
    {
      question: "Is there a minimum investment amount?",
      answer:
        "Yes. Minimum investment thresholds vary by product. Please contact our team or your relationship manager for product-specific details.",
    },
    {
      question: "How are returns generated on my investment?",
      answer:
        "Returns are tied to the performance of the underlying assets and the terms agreed upon at the time of investment. Each product has its own defined return profile.",
    },
    {
      question: "Are my investments guaranteed?",
      answer:
        "All investments carry inherent risk. While we employ robust risk management practices, returns cannot be guaranteed unless expressly stated in the product documentation.",
    },
    {
      question: "How does AIML manage investment risk?",
      answer:
        "We manage risk through asset diversification, thorough due diligence, professional portfolio oversight, and continuous market monitoring.",
    },
    {
      question: "Can I withdraw my investment before maturity?",
      answer:
        "Early redemption may be permitted depending on the product terms. Some products may carry notice periods or early exit conditions. Speak with your relationship manager for details.",
    },
    {
      question: "How do I open an investment account?",
      answer:
        "Contact our team or visit any of our offices. A relationship manager will guide you through the account opening and onboarding process. Visit www.assetium.com/open-account",
    },
    {
      question: "How do I monitor my portfolio?",
      answer:
        "Clients can track their investments through our secure digital platform, where they can give instructions, view balances, performance reports, and account statements.",
    },
    
  ],

  "Assetium Capital Management": [
    {
      question: "What is Assetium Capital Management?",
      answer:
        "Assetium Capital Management is a SEC-licensed commodity broker-dealer company, providing structured commodity investment opportunities and capital solutions for individuals and institutional clients.",
    },
    {
      question: "What commodities does Assetium Capital Management trade?",
      answer:
        "We trade select agricultural commodities including maize, paddy rice, ginger, cocoa, soybeans, sesame, turmeric, and other export-ready products.",
    },
    {
      question: "What is a commodity investment?",
      answer:
        "A commodity investment gives you financial exposure to physical goods — typically agricultural produce — with returns tied to market prices and supply chain performance.",
    },
    {
      question: "How does Assetium Capital Management ensure commodity quality?",
      answer:
        "We work with verified farmers, licensed aggregators, certified warehouses, and logistics partners, maintaining quality assurance at every stage of the supply chain.",
    },
    {
      question: "Is Assetium Capital Management regulated?",
      answer:
        "Yes. We operate under the guidelines of applicable regulatory bodies, including the Securities and Exchange Commission (SEC), and maintain high standards of governance and compliance.",
    },
    {
      question: "What documents do I need to get started?",
      answer:
        "Individuals require a valid government-issued ID, proof of address, passport photograph, and BVN/NIN. Corporate clients will need CAC registration documents and relevant compliance materials.",
    },
    {
      question: "Can businesses partner with Assetium Capital Management?",
      answer:
        "Yes. We welcome partnerships with commodity producers, exporters, institutional investors, industrialists, manufacturers and other strategic partners across the agricultural value chain.",
    },
    {
      question: "How are client funds protected?",
      answer:
        "Client funds are managed in accordance with applicable regulations, internal governance frameworks, and approved operational procedures.",
    },
  ],

  "Assetium Properties Limited": [
    {
      question: "What does Assetium Properties Limited do?",
      answer:
        "Assetium Properties Limited handles real estate investment, development, and property management & hospitality, offering clients access to premium property opportunities across Nigeria.",
    },
    {
      question: "What types of properties does Assetium Properties offer?",
      answer:
        "We offer residential, commercial, and short-let property solutions, including investment-grade properties and fractional real estate opportunities.",
    },
    {
      question: "What is fractional real estate investment?",
      answer:
        "Fractional real estate allows multiple investors to co-own a property by democratising the purchasing slots or units, making high-value property investment accessible without needing to buy an entire property outright.",
    },
    {
      question: "How do I earn returns from a property investment?",
      answer:
        "Returns are typically earned through rental income distributions and/or capital appreciation when the property is sold or refinanced, depending on the investment structure.",
    },
    {
      question: "Is there a minimum amount to invest in real estate with Assetium?",
      answer:
        "Yes. Minimum investment amounts vary by property and investment structure. Contact our team for current opportunities and entry requirements.",
    },
    {
      question: "Can I exit my property investment early?",
      answer:
        "Early exit options depend on the product structure. Some investment types allow secondary market transfers with applicable fees or notice periods.",
    },
    {
      question: "Does Assetium Properties manage properties on behalf of owners?",
      answer:
        "Yes. We offer property management services including tenant sourcing, maintenance coordination, and income remittance for property owners.",
    },
    {
      question: "How do I get started with a property investment?",
      answer:
        "Reach out to our team to discuss available opportunities, review the terms, complete KYC, and proceed with your investment. A relationship manager will guide you through every step.",
    },
  ],

  "Assetium Consult Limited": [
    {
      question: "What services does Assetium Consult Limited offer?",
      answer:
        "Assetium Consult Limited provides business advisory, financial consulting, strategy development, and organizational transformation services to businesses across various sectors.",
    },
    {
      question: "Who are your typical consulting clients?",
      answer:
        "We work with startups, SMEs, corporates, non-profits, and public sector organizations seeking strategic clarity, operational efficiency, or financial restructuring.",
    },
    {
      question: "Can Assetium Consult help with business registration and compliance?",
      answer:
        "Yes. We assist clients with business structuring, regulatory compliance guidance, and corporate governance best practices.",
    },
    {
      question: "Do you offer financial modelling and investment advisory services?",
      answer:
        "Yes. Our team provides financial analysis, investment structuring, feasibility studies, and advisory support to help businesses make informed decisions.",
    },
    {
      question: "How does Assetium Consult approach a new client engagement?",
      answer:
        "We begin with a discovery session to understand your business needs, then develop a tailored engagement plan with clear deliverables, timelines, and success metrics.",
    },
    {
      question: "Can Assetium Consult support fundraising or investor relations?",
      answer:
        "Yes. We support businesses in preparing for fundraising rounds, developing investor materials, and connecting with relevant funding sources.",
    },
    {
      question: "How do I engage Assetium Consult for my business?",
      answer:
        "You can reach us through our contact channels to schedule an initial consultation. We will assess your needs and propose an appropriate engagement structure.",
    },
  ],

  "Assetium Barakah Farms Limited": [
    {
      question: "What is Assetium Barakah Farms Limited?",
      answer:
        "Assetium Barakah Farms Limited is the agricultural arm of The Assetium Group, focused on commodity production, agribusiness investment, and export-ready agricultural value chain development.",
    },
    {
      question: "What crops and commodities does Barakah Farms focus on?",
      answer:
        "We focus on high-value commodities including maize, rice, ginger, cocoa, soybeans, sesame, turmeric, and other export-grade agricultural produce.",
    },
    {
      question: "Can I invest in Assetium Barakah Farms?",
      answer:
        "Yes. We offer structured agribusiness investment opportunities that allow investors to participate in the agricultural value chain and earn returns tied to commodity performance.",
    },
    {
      question: "How does an agribusiness investment work?",
      answer:
        "Investors fund specific commodity cycles — from planting or aggregation through processing and sale. Returns are distributed based on the agreed terms at the end of each cycle.",
    },
    {
      question: "What is the typical investment cycle length?",
      answer:
        "Investment cycles vary by commodity and season, typically ranging from a few months to one year. Your relationship manager will provide cycle-specific timelines.",
    },
    {
      question: "How does Barakah Farms ensure the quality of its produce?",
      answer:
        "We work with experienced farmers, certified aggregators, and quality assurance partners to maintain produce standards from farm to final delivery.",
    },
    {
      question: "Is agribusiness investment risky?",
      answer:
        "Like all investments, agribusiness carries risks including weather, market price fluctuations, and logistics. We mitigate these through diversification, insurance, and experienced farm management.",
    },
    {
      question: "What is the minimum investment for Barakah Farms opportunities?",
      answer:
        "Minimum investment amounts vary by commodity cycle and product. Please contact our team for current offerings and entry amounts.",
    },
    {
      question: "How are my returns paid?",
      answer:
        "Returns are paid out at the end of the investment cycle via your registered bank account, along with a performance report detailing the commodity cycle outcomes.",
    },
    {
      question: "Can corporate organizations invest in Barakah Farms?",
      answer:
        "Yes. We welcome investment from individuals, SMEs, corporate organizations, and institutional investors looking to diversify into the agricultural sector.",
    },
  ],
};

// export const faqData: Record<ProductKey, FAQ[]> = {
//   AGRIVEST: [
//     {
//       question: "What exactly is the Agrivest (Assetium Commodity Portfolio)?",
//       answer:
//         "The Agrivest (Assetium Commodity Portfolio) primarily focuses on investing in a diverse range of strategically selected agricultural commodities that demonstrate strong growth potential and are essential to the Nigerian and potentially international markets.",
//     },

//     {
//       question:
//         "How does the Agrivest (Assetium Commodity Portfolio) aim to generate returns for investors?",
//       answer:
//         "It aims to generate returns through a combination of strategies, which may include: direct investment in physical commodities, participation in commodity futures and derivatives markets, and potentially strategic partnerships within the agricultural value chain",
//     },
//     {
//       question:
//         "Who is eligible to invest in the Agrivest (Assetium Commodity Portfolio)?",
//       answer: "Anyone 18 years and above",
//     },
//     {
//       question:
//         "What are the potential advantages of including commodities in my investment portfolio through Assetium?",
//       answer:
//         "Yes, you get an investment confirmation. While an investment Statement, indicating the amount invested by you and other investment details will be forwarded to you via the email address provided on your account opening form",
//     },
//     {
//       question:
//         "How can I begin investing in the Agrivest (Assetium Commodity Portfolio)?",
//       answer:
//         "To start investing, it involves completing an application form, providing necessary documentation for yourself and the child. Also you could contact Assetium directly for the specific account opening process.",
//     },
//     {
//       question:
//         "Is there a minimum initial investment required for the Agrivest (Assetium Commodity Portfolio)?",
//       answer:
//         "Yes, there is a minimum initial investment amount of N50,000 required to open an account",
//     },
//     {
//       question:
//         "How can I add more funds to my investment in the Agrivest (Assetium Commodity Portfolio) over time?",
//       answer:
//         "You can make additional subscription as low as N5,000 through various methods, such as bank transfers, online payments, or scheduled contributions",
//     },
//     {
//       question:
//         "How will I be able to track the performance of my investment in the Agrivest (Assetium Commodity Portfolio)?",
//       answer:
//         "As a investor to the Portfolio, you will receive a statement of account monthly.",
//     },
//     {
//       question:
//         "What is the process for withdrawing or redeeming my investment from the Agrivest (Assetium Commodity Portfolio)?",
//       answer:
//         "You will be required to complete a Redemption Form. Once these documents have been verified, the redemption request will be processed within 24-48 working hours",
//     },
//     {
//       question:
//         "How is my investment in the Agrivest (Assetium Commodity Portfolio) protected and kept secure?",
//       answer:
//         "There are other professional parties to the portfolio who ensure necessary checks and balances.",
//     },
//   ],
//   MINIVAULT: [
//     {
//       question: "What is the Minivault (Assetium Kiddies Commodity Portfolio)?",
//       answer:
//         "The Minivault (Assetium Kiddies Commodity Portfolio) is a specialized investment product designed to help parents and guardians save and invest in commodities for the future benefit of children. It provides a structured way to accumulate assets over time, specifically focusing on commodities.",
//     },
//     {
//       question:
//         "How does the Minivault (Assetium Kiddies Commodity Portfolio) aim to grow savings for children?",
//       answer:
//         "It aims to grow savings by strategically investing in a diversified selection of commodities",
//     },
//     {
//       question: "Who can invest in the Minivault on behalf of a child?",
//       answer:
//         "Parents, legal guardians, and other individuals legally authorized to act on behalf of a child can invest in the Minivault",
//     },
//     {
//       question:
//         "What are the potential benefits of investing in the Minivault for my child's future?",
//       answer:
//         "Potential benefits include providing funds for future education, healthcare, or other significant life expenses.",
//     },
//     {
//       question: "How can I start investing in the Minivault for my child?",
//       answer:
//         "To start investing, it involves completing an application form, providing necessary documentation for yourself and the child. Also you could contact Assetium directly for the specific account opening process.",
//     },
//     {
//       question:
//         "Is there a minimum initial amount required to start saving in the Minivault?",
//       answer:
//         "Yes, there is a minimum initial investment amount of N50,000 required to open a Minivault account",
//     },
//     {
//       question:
//         "How can I add more funds to my child's Minivault account over time?",
//       answer:
//         "You can make additional subscription as low as N5,000 through various methods, such as bank transfers, online payments, or scheduled contributions",
//     },
//     {
//       question: "How can I monitor the growth of my child's Minivault savings?",
//       answer:
//         "As a investor to the Portfolio, you will receive a statement of account monthly.",
//     },
//     {
//       question:
//         "If needed, how can I access the funds in my child's Minivault account in the future?",
//       answer:
//         "You can withdrawal as high as 20% of the amount invested annually",
//     },
//     {
//       question: "How is my child's investment in the Minivault kept secure?",
//       answer:
//         "The assets of the Portfolio are insured by Capital Express Indemnity Insurance Ltd. There are other professional parties to the portfolio who ensure necessary checks and balances.",
//     },
//   ],
//   HALAL: [
//     {
//       question:
//         "What are the potential benefits of investing in the Assetium Halal Commodity Portfolio?",
//       answer:
//         "Ease of access to Shariah Compliant Backed Commodities; Ethical Investing; Stable income & liquidity; Capital appreciation; Investment diversification; Low risk; Professional management by qualified Portfolio Managers",
//     },
//     {
//       question: "How can I invest in the Assetium Halal Commodity Portfolio?",
//       answer:
//         "Investors can invest in the portfolio by executing the account opening form as well as providing supporting documents (passport photograph, valid means of ID, proof of address and proof of payment). Investors will also be able to invest in the portfolio through any of our digital channels.",
//     },
//     {
//       question:
//         "In what types of Shariah-compliant commodities and related securities can the Assetium Halal Commodity Portfolio invest?",
//       answer:
//         "The Portfolio will only invest in Shariah Compliant securities and investment products that are permissible under Shariah principles. Some of these include: Sukuk; Shariah-Complaint Commodities; Cash and Other Shariah-Compliant Contracts",
//     },
//     {
//       question:
//         "How is it ensured that the Assetium Halal Commodity Portfolio adheres to Shariah principles?",
//       answer:
//         "An Advisory Committee comprised of renowned Islamic scholars with national and international experience will oversee the investment activities of the portfolio. The adisory committee will issue a certificate of compliance on the portfolio annually. ",
//     },
//     {
//       question:
//         "Does the Assetium Halal Commodity Portfolio have a fixed investment period (Tenor)?",
//       answer: "No, it has a flexible tenor ranging from 90, 180, and 365 day",
//     },
//     {
//       question:
//         "Are there any charges or penalties for withdrawing my investment from the Assetium Halal Commodity Portfolio before a specific time?",
//       answer:
//         "Yes, early termination or part termination is allowed, but it is subject to termination charges of 25% of accrued interest",
//     },
//     {
//       question:
//         "Will there be periodic distributions or returns for investors in the Assetium Halal Commodity Portfolio?",
//       answer: "Returns are realized at the end of the investment tenor",
//     },
//     {
//       question:
//         "Can individuals who are not Muslim invest in the Assetium Halal Commodity Portfolio?",
//       answer:
//         "Yes. The Portfolio is suitable for all ethically-minded individuals and institutions",
//     },
//     {
//       question:
//         "Is the Assetium Halal Commodity Portfolio regulated by the relevant financial authorities (e.g., SEC)?",
//       answer:
//         "All investment portfolios issued by licensed Commodity Broker and Dealer including Assetium Halal Commodity Portfolio are regulated by the SEC",
//     },
//     {
//       question:
//         "What are the applicable management fees associated with the Assetium Halal Commodity Portfolio?",
//       answer: "",
//     },
//   ],
// };
