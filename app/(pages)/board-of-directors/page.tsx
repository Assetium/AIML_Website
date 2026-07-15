"use client";

import React, { useState } from "react";

type TabKey =
  | "Assetium Capital Management"
  | "Assetium Consult Limited"
  | "Assetium Properties Limited"
  | "Assetium Investment Management Limited"
  | "Assetium Barakah Farms Limited";

type Person = {
  name: string;
  title: string;
  image: string;
  expertise: string[];
  profile: string;
};

const boardData: Record<TabKey, Person[]> = {
  "Assetium Capital Management": [
    {
      name: "Dr. Abubakar Mohammed Koro",
      title: "Chairman, Board of Directors",
      image: "/bod/Dr_Mohammed_OON.jpg",
      expertise: ["Finance", "Corporate Governance", "Strategy"],
      profile: `Dr. Abubakar Koro Muhammad (OON) is the Chairman of the Board of Directors of Assetium Capital Management Limited. He is a medical doctor and a staunch administrator who served in the Ministry of Health as a Federal Permanent Secretary.

As a prominent figure in the medical profession, his track record of service to humanity dates back to his time as an Administrative Staff at the College of Nigeria, Badagry; the Centre for Disease Control Global – River Blindness Training Centre, Jos; and his experience in managing pediatric and medical cases. He also served as Principal Medical Officer in the Public Health Division (MFCT), as well as Chief Medical Officer in the FCT.

Dr. Koro was the Medical Team Leader for the Muslim Pilgrimage in 1994 and for the 2003 FCT Hajj Operations to Saudi Arabia. He was also a committed member of the Nigerian Medical Association (NMA) and the Islamic Medical Association of Nigeria (IMAN).

His passion for growth is evident in his academic background, having studied at Ahmadu Bello University, Zaria, as an undergraduate and postgraduate student, and later at the Frankfurt School of Finance and Management, Germany, driven by his interest in wealth creation and sustainability.

With his strong track record of knowledge and experience, he continues to be recognized for his contributions across both the medical and financial sectors.`,
    },
    {
      name: "Professor Benedict Akanegbu",
      title: "Director",
      image: "/bod/Prof.jpg",
      expertise: ["Economics", "Academia", "Research"],
      profile: `Professor Benedict Akanegbu is a distinguished
academician with a strong background in economics. He
holds a degree from Howard University and currently
serves as the Chief Dean of the Faculty of Economics at
the Nile University of Nigeria,Abuja,
Nigeria. With over two decades of experience in various academic and professional roles, he is a member of several prestigious organizations, including the PGCAR, American Economic Association, African Studies Association, Nigerian Economic Society, and the Association of Social and Behavioral Scientists.

His expertise is further recognized through his involvement as a member of the Editorial Board of the Journal of Management, Economics, and Industrial Organization, as well as his extensive publications in both national and international journals.`,
    },
    {
      name: "Hajia Maimunat Suleiman",
      title: "Director",
      image: "/bod/Memunat.jpg",
      expertise: ["Business Development", "Public Sector", "Leadership"],
      profile: `Hajia Suleiman Maimunatu is a dynamic financial leader and Chartered Forensic Accountant (CFAN) with a proven track record of driving organizational success. Her expertise in financial management, risk assessment, and strategic planning has enabled her to deliver measurable results through innovative solutions and meticulous analysis.

With a focus on optimizing profitability and mitigating financial risks, Suleiman has successfully streamlined processes, implemented cost-saving initiatives, and maximized resource allocation. Her ability to lead and develop high-performing finance teams has been instrumental in achieving corporate objectives.

Her expertise in forensic accounting and financial analysis provides critical insights for informed decision-making, while her adeptness at navigating complex regulatory environments ensures compliance with financial standards.`,
    },
    {
      name: "Dr. Abimbola Osuchukwu",
      title: "Director",
      image: "/bod/bimbo.png",
      expertise: ["Investment", "Risk Management", "Advisory"],
      profile: `Dr. Abimbola Osuchukwu is a seasoned professional with a wealth of experience in business management and training. As the Managing Partner of Valucon Business Services, she brings a unique blend of academic expertise and practical insight to her role.

Dr. Osuchukwu is a certified trainer from reputable organizations such as the Learning and Performance Institute (LPI) and the International Finance Corporation (IFC). She is also a certified Business Development Service Provider from SMEDAN, demonstrating her commitment to supporting the growth of small and medium-sized enterprises in Nigeria.

She serves as an adjunct faculty member at the Enterprise Development Centre, Pan-Atlantic University, and at the China Europe International Business School (CEIBS). Additionally, she holds prestigious qualifications as a Chartered Accountant, Chartered Banker, and a Doctor of Business Administration from the SBS Swiss Business School in Zurich, Switzerland.`,
    },
    {
      name: "Mr Kelvin Ihongbe",
      title: "Director",
      image: "/bod/Kelvin_bod.jpeg",
      expertise: ["Capital Markets", "Operations", "Compliance"],
      profile: `Odigie Kelvin Ihongbe is a seasoned business leader with more than two decades of experience in driving growth and profitability. He excels in business management, client relationship management, and strategic business development.

With a strong track record in retail and asset management, he is a certified professional known for optimizing resources and fostering innovation. Kelvin holds a Bachelor’s degree in Economics and an MBA, with a focus on strategic decision-making and financial planning. He is a visionary leader who consistently exceeds organizational objectives.

Kelvin has held key roles at Transkredit Finance Company Limited, Norrenberger Investment and Capital Management Ltd, and Asset & Resource Management Company. His leadership has consistently resulted in substantial revenue growth and business expansion.`,
    },
    {
      name: "Dr. Monsurat Iyabode A. A.",
      title: "MD/CEO",
      image: "/group-management/monsurat.png",
      expertise: ["Executive Leadership", "Commodities", "Wealth Management"],
      profile: `Dr. Mrs. Monsurat has a wealth of experience as a board member, having served as a Director or Non-Executive Director in more than three reputable financial organizations in Nigeria. She has over two decades of experience driving organizational growth, operational excellence, and financial performance across various industries, including asset and wealth management, business advisory, insurance, pension, and agriculture.

With a proven track record of transforming organizations, Mrs. Monsurat is recognized for her ability to develop revenue-generating strategies, identify untapped opportunities, and mitigate risks. She is adept at translating organizational vision into actionable business outcomes and fostering a culture of excellence and continuous improvement.

Her diverse experience also includes roles in agricultural management, financial advisory, and sales management, where she consistently delivered exceptional results and earned recognition for her performance.

She holds a Doctor of Public Administration (D.P.A.) from Stanford University, United States; a Master of Business Administration (MBA) from the University of Bolton, United Kingdom; and a Bachelor of Science (BSc) from Obafemi Awolowo University, Ile-Ife. These prestigious academic qualifications reflect her strong combination of academic rigor and practical expertise in driving organizational success.`,
    },
  ],
  "Assetium Properties Limited": [
    {
      name: "Dr. Abubakar Mohammed Koro",
      title: "Chairman, Board of Directors",
      image: "/bod/Dr_Mohammed_OON.jpg",
      expertise: ["Finance", "Corporate Governance", "Strategy"],
      profile: `Dr. Abubakar Koro Muhammad (OON) is the Chairman of the Board of Directors of Assetium Capital Management Limited. He is a medical doctor and a staunch administrator who served in the Ministry of Health as a Federal Permanent Secretary.

As a prominent figure in the medical profession, his track record of service to humanity dates back to his time as an Administrative Staff at the College of Nigeria, Badagry; the Centre for Disease Control Global – River Blindness Training Centre, Jos; and his experience in managing pediatric and medical cases. He also served as Principal Medical Officer in the Public Health Division (MFCT), as well as Chief Medical Officer in the FCT.

Dr. Koro was the Medical Team Leader for the Muslim Pilgrimage in 1994 and for the 2003 FCT Hajj Operations to Saudi Arabia. He was also a committed member of the Nigerian Medical Association (NMA) and the Islamic Medical Association of Nigeria (IMAN).

His passion for growth is evident in his academic background, having studied at Ahmadu Bello University, Zaria, as an undergraduate and postgraduate student, and later at the Frankfurt School of Finance and Management, Germany, driven by his interest in wealth creation and sustainability.

With his strong track record of knowledge and experience, he continues to be recognized for his contributions across both the medical and financial sectors.`,
    },
    {
      name: "Dr. Abimbola Osuchukmu",
      title: "Director",
      image: "/bod/bimbo.png",
      expertise: ["Investment", "Risk Management", "Advisory"],
      profile: `Dr. Abimbola Osuchukwu is a seasoned professional with a wealth of experience in business management and training. As the Managing Partner of Valucon Business Services, she brings a unique blend of academic expertise and practical insight to her role.

Dr. Osuchukwu is a certified trainer from reputable organizations such as the Learning and Performance Institute (LPI) and the International Finance Corporation (IFC). She is also a certified Business Development Service Provider from SMEDAN, demonstrating her commitment to supporting the growth of small and medium-sized enterprises in Nigeria.

She serves as an adjunct faculty member at the Enterprise Development Centre, Pan-Atlantic University, and at the China Europe International Business School (CEIBS). Additionally, she holds prestigious qualifications as a Chartered Accountant, Chartered Banker, and a Doctor of Business Administration from the SBS Swiss Business School in Zurich, Switzerland.`,
    },
    {
      name: "Engr. Abe Samuel Ayodele",
      title: "Director",
      image: "/bod/abe_bod.jpeg",
      expertise: ["Engineering", "Real Estate", "Project Management"],
      profile:
        "Engr. Abe Samuel Ayodele is a professional engineer with extensive experience in real estate development and project management. His technical background provides essential oversight of Assetium Properties' development pipeline and asset management activities.",
    },
    {
      name: "Dr. Monsurat Iyabode A. A.",
      title: "Director",
      image: "/group-management/monsurat.png",
      expertise: ["Executive Leadership", "Commodities", "Wealth Management"],
      profile: `Dr. Mrs. Monsurat has a wealth of experience as a board member, having served as a Director or Non-Executive Director in more than three reputable financial organizations in Nigeria. She has over two decades of experience driving organizational growth, operational excellence, and financial performance across various industries, including asset and wealth management, business advisory, insurance, pension, and agriculture.

With a proven track record of transforming organizations, Mrs. Monsurat is recognized for her ability to develop revenue-generating strategies, identify untapped opportunities, and mitigate risks. She is adept at translating organizational vision into actionable business outcomes and fostering a culture of excellence and continuous improvement.

Her diverse experience also includes roles in agricultural management, financial advisory, and sales management, where she consistently delivered exceptional results and earned recognition for her performance.

She holds a Doctor of Public Administration (D.P.A.) from Stanford University, United States; a Master of Business Administration (MBA) from the University of Bolton, United Kingdom; and a Bachelor of Science (BSc) from Obafemi Awolowo University, Ile-Ife. These prestigious academic qualifications reflect her strong combination of academic rigor and practical expertise in driving organizational success.`,
    },
    {
      name: "Ayoola G. Abdrazaq",
      title: "MD/CEO",
      image: "/group-management/ayoola.jpg",
      expertise: ["Real Estate", "Business Development", "Leadership"],
      profile: `Ayoola G. Abdrazaqh is a seasoned executive with a proven track record spanning over two decades in banking, finance, project management, business intelligence, and data analytics.

As a licensed Capital Market Operator by the Securities and Exchange Commission (SEC) and an authorized dealing broker with the Lagos Securities and Futures Exchange, he has consistently demonstrated his ability to drive corporate strategy and achieve financial success.

Ayoola’s specialization in business intelligence and data analysis enables him to extract valuable insights from data, enhancing competitiveness and accelerating the achievement of financial objectives.

Throughout his career at institutions such as NAL Merchant Bank, NEXIM Bank, Ensure Insurance, First Mutual Microfinance Bank, and Almaheer Standard Concept Limited, Ayoola has consistently showcased his expertise and leadership in the financial industry.`,
    },
  ],
  "Assetium Consult Limited": [
    {
      name: "Dr. Abubakar Mohammed Koro",
      title: "Chairman, Board of Directors",
      image: "/bod/Dr_Mohammed_OON.jpg",
      expertise: ["Finance", "Corporate Governance", "Strategy"],
      profile: `Dr. Abubakar Koro Muhammad (OON) is the Chairman of the Board of Directors of Assetium Capital Management Limited. He is a medical doctor and a staunch administrator who served in the Ministry of Health as a Federal Permanent Secretary.

As a prominent figure in the medical profession, his track record of service to humanity dates back to his time as an Administrative Staff at the College of Nigeria, Badagry; the Centre for Disease Control Global – River Blindness Training Centre, Jos; and his experience in managing pediatric and medical cases. He also served as Principal Medical Officer in the Public Health Division (MFCT), as well as Chief Medical Officer in the FCT.

Dr. Koro was the Medical Team Leader for the Muslim Pilgrimage in 1994 and for the 2003 FCT Hajj Operations to Saudi Arabia. He was also a committed member of the Nigerian Medical Association (NMA) and the Islamic Medical Association of Nigeria (IMAN).

His passion for growth is evident in his academic background, having studied at Ahmadu Bello University, Zaria, as an undergraduate and postgraduate student, and later at the Frankfurt School of Finance and Management, Germany, driven by his interest in wealth creation and sustainability.

With his strong track record of knowledge and experience, he continues to be recognized for his contributions across both the medical and financial sectors.`,
    },
    {
      name: "Engr. Abe Samuel Ayodele",
      title: "Director",
      image: "/bod/abe_bod.jpeg",
      expertise: ["Engineering", "Real Estate", "Project Management"],
      profile:
        "Engr. Abe Samuel Ayodele brings his engineering and project management expertise to the Consult board, supporting the delivery of high-quality advisory services to institutional and individual clients.",
    },
    {
      name: "Dr. Monsurat Iyabode A. A.",
      title: "Director",
      image: "/group-management/monsurat.png",
      expertise: ["Executive Leadership", "Commodities", "Wealth Management"],
      profile: `Dr. Mrs. Monsurat has a wealth of experience as a board member, having served as a Director or Non-Executive Director in more than three reputable financial organizations in Nigeria. She has over two decades of experience driving organizational growth, operational excellence, and financial performance across various industries, including asset and wealth management, business advisory, insurance, pension, and agriculture.

With a proven track record of transforming organizations, Mrs. Monsurat is recognized for her ability to develop revenue-generating strategies, identify untapped opportunities, and mitigate risks. She is adept at translating organizational vision into actionable business outcomes and fostering a culture of excellence and continuous improvement.

Her diverse experience also includes roles in agricultural management, financial advisory, and sales management, where she consistently delivered exceptional results and earned recognition for her performance.

She holds a Doctor of Public Administration (D.P.A.) from Stanford University, United States; a Master of Business Administration (MBA) from the University of Bolton, United Kingdom; and a Bachelor of Science (BSc) from Obafemi Awolowo University, Ile-Ife. These prestigious academic qualifications reflect her strong combination of academic rigor and practical expertise in driving organizational success.`,
    },
    {
      name: "Mr. Amolegbe Taofeeq",
      title: "Director",
      image: "/home/testimonials/taofeeq.png",
      expertise: ["Consulting", "Business Strategy", "Advisory"],
      profile:
        "Mr. Amolegbe Taofeeq is a business strategy and consulting professional with a track record of delivering impactful advisory engagements. He brings client-facing expertise and strategic insight to the Consult board.",
    },
       {
      name: "Mr Kelvin Ihongbe",
      title: "Director",
      image: "/bod/Kelvin_bod.jpeg",
      expertise: ["Capital Markets", "Operations", "Compliance"],
      profile:
       `Odigie Kelvin Ihongbe is a seasoned business leader with more than two decades of experience in driving growth and profitability. He excels in business management, client relationship management, and strategic business development.

With a strong track record in retail and asset management, he is a certified professional known for optimizing resources and fostering innovation. Kelvin holds a Bachelor’s degree in Economics and an MBA, with a focus on strategic decision-making and financial planning. He is a visionary leader who consistently exceeds organizational objectives.

Kelvin has held key roles at Transkredit Finance Company Limited, Norrenberger Investment and Capital Management Ltd, and Asset & Resource Management Company. His leadership has consistently resulted in substantial revenue growth and business expansion.`    },
    
  ],
  "Assetium Barakah Farms Limited": [
      {
      name: "Dr. Abubakar Mohammed Koro",
      title: "Chairman, Board of Directors",
      image: "/bod/Dr_Mohammed_OON.jpg",
      expertise: ["Finance", "Corporate Governance", "Strategy"],
      profile: `Dr. Abubakar Koro Muhammad (OON) is the Chairman of the Board of Directors of Assetium Capital Management Limited. He is a medical doctor and a staunch administrator who served in the Ministry of Health as a Federal Permanent Secretary.

As a prominent figure in the medical profession, his track record of service to humanity dates back to his time as an Administrative Staff at the College of Nigeria, Badagry; the Centre for Disease Control Global – River Blindness Training Centre, Jos; and his experience in managing pediatric and medical cases. He also served as Principal Medical Officer in the Public Health Division (MFCT), as well as Chief Medical Officer in the FCT.

Dr. Koro was the Medical Team Leader for the Muslim Pilgrimage in 1994 and for the 2003 FCT Hajj Operations to Saudi Arabia. He was also a committed member of the Nigerian Medical Association (NMA) and the Islamic Medical Association of Nigeria (IMAN).

His passion for growth is evident in his academic background, having studied at Ahmadu Bello University, Zaria, as an undergraduate and postgraduate student, and later at the Frankfurt School of Finance and Management, Germany, driven by his interest in wealth creation and sustainability.

With his strong track record of knowledge and experience, he continues to be recognized for his contributions across both the medical and financial sectors.`,
    },
     {
      name: "Engr. Abe Samuel Ayodele",
      title: "Director",
      image: "/bod/abe_bod.jpeg",
      expertise: ["Engineering", "Real Estate", "Project Management"],
      profile:
        "Engr. Abe Samuel Ayodele is a professional engineer with extensive experience in real estate development and project management. His technical background provides essential oversight of Assetium Properties' development pipeline and asset management activities.",
    },

    {
      name: "Mr. Amolegbe Taofeeq",
      title: "Director",
      image: "/home/testimonials/taofeeq.png",
      expertise: ["Consulting", "Business Strategy", "Advisory"],
      profile:
        "Mr. Amolegbe Taofeeq is a business strategy and consulting professional with a track record of delivering impactful advisory engagements. He brings client-facing expertise and strategic insight to the Consult board.",
    },
    {
      name: "Saidu Musa",
      title: "Director",
      image: "/bod/saidu.jpeg",
      expertise: ["Consulting", "Business Strategy", "Advisory"],
      profile:
""    },
  ],
  "Assetium Investment Management Limited": [
    {
      name: "Dr. Abubakar Mohammed Koro",
      title: "Chairman, Board of Directors",
      image: "/bod/Dr_Mohammed_OON.jpg",
      expertise: ["Finance", "Corporate Governance", "Strategy"],
      profile: `Dr. Abubakar Koro Muhammad (OON) is the Chairman of the Board of Directors of Assetium Capital Management Limited. He is a medical doctor and a staunch administrator who served in the Ministry of Health as a Federal Permanent Secretary.

As a prominent figure in the medical profession, his track record of service to humanity dates back to his time as an Administrative Staff at the College of Nigeria, Badagry; the Centre for Disease Control Global – River Blindness Training Centre, Jos; and his experience in managing pediatric and medical cases. He also served as Principal Medical Officer in the Public Health Division (MFCT), as well as Chief Medical Officer in the FCT.

Dr. Koro was the Medical Team Leader for the Muslim Pilgrimage in 1994 and for the 2003 FCT Hajj Operations to Saudi Arabia. He was also a committed member of the Nigerian Medical Association (NMA) and the Islamic Medical Association of Nigeria (IMAN).

His passion for growth is evident in his academic background, having studied at Ahmadu Bello University, Zaria, as an undergraduate and postgraduate student, and later at the Frankfurt School of Finance and Management, Germany, driven by his interest in wealth creation and sustainability.

With his strong track record of knowledge and experience, he continues to be recognized for his contributions across both the medical and financial sectors.`,
    },
       {
      name: "Mr Kelvin Ihongbe",
      title: "Director",
      image: "/bod/Kelvin_bod.jpeg",
      expertise: ["Capital Markets", "Operations", "Compliance"],
      profile:
       `Odigie Kelvin Ihongbe is a seasoned business leader with more than two decades of experience in driving growth and profitability. He excels in business management, client relationship management, and strategic business development.

With a strong track record in retail and asset management, he is a certified professional known for optimizing resources and fostering innovation. Kelvin holds a Bachelor’s degree in Economics and an MBA, with a focus on strategic decision-making and financial planning. He is a visionary leader who consistently exceeds organizational objectives.

Kelvin has held key roles at Transkredit Finance Company Limited, Norrenberger Investment and Capital Management Ltd, and Asset & Resource Management Company. His leadership has consistently resulted in substantial revenue growth and business expansion.`    },
    
    
 
     {
      name: "Hajia Maimunat Suleiman",
      title: "Director",
      image: "/bod/Memunat.jpg",
      expertise: ["Business Development", "Public Sector", "Leadership"],
      profile: `Hajia Suleiman Maimunatu is a dynamic financial leader and Chartered Forensic Accountant (CFAN) with a proven track record of driving organizational success. Her expertise in financial management, risk assessment, and strategic planning has enabled her to deliver measurable results through innovative solutions and meticulous analysis.

With a focus on optimizing profitability and mitigating financial risks, Suleiman has successfully streamlined processes, implemented cost-saving initiatives, and maximized resource allocation. Her ability to lead and develop high-performing finance teams has been instrumental in achieving corporate objectives.

Her expertise in forensic accounting and financial analysis provides critical insights for informed decision-making, while her adeptness at navigating complex regulatory environments ensures compliance with financial standards.`,
    },
      {
      name: "Professor Benedict Akanegbu",
      title: "Director",
      image: "/bod/Prof.jpg",
      expertise: ["Economics", "Academia", "Research"],
      profile: `Professor Benedict Akanegbu is a distinguished
academician with a strong background in economics. He
holds a degree from Howard University and currently
serves as the Chief Dean of the Faculty of Economics at
the Nile University of Nigeria,Abuja,
Nigeria. With over two decades of experience in various academic and professional roles, he is a member of several prestigious organizations, including the PGCAR, American Economic Association, African Studies Association, Nigerian Economic Society, and the Association of Social and Behavioral Scientists.

His expertise is further recognized through his involvement as a member of the Editorial Board of the Journal of Management, Economics, and Industrial Organization, as well as his extensive publications in both national and international journals.`,
    },
     {
      name: "Afolabi Lukman Olajide",
      title: "MD/CEO",
      image: "/group-management/afolaabi2.jpeg",
      expertise: ["Economics", "Academia", "Research"],
      profile: `Afolabi Lukman Olajide is a distinguished
academician with a strong background in economics. He
holds a degree from Howard University and currently
serves as the Chief Dean of the Faculty of Economics at
the Nile University of Nigeria,Abuja,
Nigeria. With over two decades of experience in various academic and professional roles, he is a member of several prestigious organizations, including the PGCAR, American Economic Association, African Studies Association, Nigerian Economic Society, and the Association of Social and Behavioral Scientists.

His expertise is further recognized through his involvement as a member of the Editorial Board of the Journal of Management, Economics, and Industrial Organization, as well as his extensive publications in both national and international journals.`,
    },
    
   
  ],

};

const tabs: TabKey[] = [
  "Assetium Investment Management Limited",
  "Assetium Capital Management",
  "Assetium Properties Limited",
  "Assetium Consult Limited",
  "Assetium Barakah Farms Limited",
];

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>(
    "Assetium Investment Management Limited",
  );
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handleTabSwitch = (tab: TabKey) => {
    setActiveTab(tab);
    setSelectedPerson(null);
  };

  const handleCardClick = (person: Person) => {
    setSelectedPerson(selectedPerson?.name === person.name ? null : person);
  };

  return (
    <div className="bg-[#f9f9f9] text-[#444444] px-6 py-20 mt-10 lg:px-10 xl:px-20">
      {/* Header — matching site style */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 py-8 mb-2">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-6 h-[2px] bg-[#c14511] rounded-full" />
            <span className="text-[#c14511] text-[11px] font-bold uppercase tracking-[0.22em]">
              Governance
            </span>
          </div>
          <h3 className="font-bold leading-tight tracking-tight text-title-lg lg:text-title-xl text-[#1a1919]">
            Board of <span className="text-[#c14511]">Directors</span>
          </h3>
        </div>
        <p className="text-[.8rem] leading-relaxed text-foreground max-w-sm md:text-right">
          Their collective expertise spans finance, investments, consulting, and
          real estate; anchoring Assetium&apos;s mission to deliver lasting
          value across industries.
        </p>
      </div>

      {/* Tab Navigation — unchanged */}
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 md:gap-6 mb-10 bg-gray-200 w-full mx-auto p-4">
        {tabs.map((key) => (
          <button
            key={key}
            onClick={() => handleTabSwitch(key)}
            className={`flex-1 px-4 py-2 text-xs shadow-md transition duration-200 hover:scale-105 hover:shadow-lg ${
              activeTab === key
                ? "bg-[#c14511] text-white"
                : "bg-[#1a1a19] text-white"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Grid + Drawer layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Team Grid — narrows when drawer is open */}
        <div
          className={`grid gap-8 sm:grid-cols-2 transition-all duration-300 ${
            selectedPerson
              ? "lg:w-[55%] md:grid-cols-2 lg:grid-cols-2"
              : "w-full md:grid-cols-3 lg:grid-cols-3"
          }`}
        >
          {boardData[activeTab].map((person, idx) => {
            const isSelected = selectedPerson?.name === person.name;
            return (
              <div
                key={idx}
                onClick={() => handleCardClick(person)}
                className={`bg-white rounded-xl shadow p-4 text-center cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 select-none ${
                  isSelected
                    ? "ring-2 ring-[#c14511]"
                    : "hover:ring-1 hover:ring-[#c14511]/30"
                }`}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-[13px] font-bold leading-snug">
                  {person.name}
                </h3>
                <p className="text-[11px] text-[#c14511] mt-1">
                  {person.title}
                </p>
                <span className="inline-block mt-2 text-[10px] text-[#444444]/40 uppercase tracking-wider font-semibold">
                  {isSelected ? "Viewing ↗" : "Read profile →"}
                </span>
              </div>
            );
          })}
        </div>

        {/* Profile Drawer */}
        {selectedPerson && (
          <div className="lg:flex-1 w-full bg-white rounded-xl overflow-hidden border border-[#c14511]/20 shadow-lg sticky top-6">
            {/* Drawer header */}
            <div className="bg-[#1a1a19] px-6 py-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src={selectedPerson.image}
                  alt={selectedPerson.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[#c14511] ring-offset-2 ring-offset-[#1a1a19] flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-[15px] leading-tight truncate">
                    {selectedPerson.name}
                  </h4>
                  <span className="text-[#c14511] text-[11px] font-semibold uppercase tracking-wide">
                    {selectedPerson.title}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPerson(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                aria-label="Close profile"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Drawer body */}
            <div className="p-6 flex flex-col gap-5">
              {/* Expertise */}
              <div>
                <p className="text-[10px] font-bold text-[#444444]/40 uppercase tracking-widest mb-2">
                  Areas of Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedPerson.expertise.map((e, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold text-[#c14511] bg-[#c14511]/[0.08] border border-[#c14511]/20 px-3 py-1 rounded-full"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Profile text */}
              <div>
                <p className="text-[10px] font-bold text-[#444444]/40 uppercase tracking-widest mb-2">
                  Profile
                </p>
                <p className="text-[13px] leading-7 text-[#444444]/70">
                  {selectedPerson.profile}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
