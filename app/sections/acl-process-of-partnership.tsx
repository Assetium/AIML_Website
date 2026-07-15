import React from "react";
import { Card } from "@/components/ui/card";

// <svg
//               width="320"
//               height="223"
//               viewBox="0 0 320 223"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M319.632 8.77512C320.06 8.42588 320.124 7.79594 319.775 7.3681L314.083 0.396052C313.734 -0.0317729 313.104 -0.0955004 312.676 0.253744C312.249 0.602988 312.185 1.23295 312.534 1.66079L317.593 7.85816L311.396 12.9171C310.968 13.2663 310.904 13.8963 311.253 14.3241C311.603 14.7519 312.233 14.8157 312.66 14.4664L319.632 8.77512ZM0.910297 218.996C51.5722 223.562 88.4243 223.085 114.881 218.803C141.327 214.523 157.522 206.42 166.692 195.608C175.886 184.769 177.868 171.391 176.308 156.941C174.75 142.514 169.645 126.867 164.512 111.373C159.361 95.8281 154.184 80.4399 152.358 66.3627C150.534 52.3032 152.08 39.7304 160.192 29.6993C168.321 19.6465 183.209 11.9424 208.548 8.02468C233.875 4.10891 269.498 3.99895 318.899 8.99539L319.101 7.00553C269.627 2.00183 233.812 2.0949 208.243 6.04817C182.686 9.99951 167.218 17.8305 158.636 28.4417C150.038 39.0746 148.516 52.2947 150.374 66.62C152.23 80.9275 157.482 96.5159 162.613 112.002C167.761 127.54 172.789 142.979 174.319 157.155C175.847 171.308 173.872 184.051 165.167 194.314C156.439 204.604 140.794 212.583 114.562 216.829C88.3415 221.072 51.6779 221.564 1.08982 217.004L0.910297 218.996Z"
//                 fill="white"
//               />
//             </svg>

const ACLPartnershipProcess = () => {
  return (
    <>
      <div
        className="py-8 px-5 lg:px-10 xl:px-20
      ]"
      >
        <div>
          <h3 className="font-semibold leading-tight pb-4 md:pb-6 tracking-tight text-title-lg lg:text-title-xl text-[#1a1919]">
            Process of Partnership
          </h3>
          <div>
            <p className="text-[.9rem] leading-relaxed font-medium text-[#1a1919]/60">
              Partnerships are more than just agreements—they are connections
              built on shared aspirations and mutual growth. We focus on
              understanding your needs, aligning our strengths, and working
              together to create impactful and lasting results.
            </p>
          </div>
        </div>

        <div className="bg-[#1a1919] h-fit md:rounded-[42px] rounded-xl my-8 text-white md:grid grid-cols-3 items-center md:p-15 px-5 py-8 block">
          <div className="flex flex-col justify-between items-center h-full">
            {/* <div className="shadow-sm col-span-1 bg-[#c14511] p-5 rounded-2xl w-full">
              <p>
                <span className="mr-3">1.</span>IDENTIFY
              </p>
            </div> */}{" "}
            <Card className="w-full  rounded-2xl  flex flex-col justify-between px-2 bg-[#C14511] shadow-sm cursor-pointer">
              <div className="px-4 pb-4 flex flex-col flex-1">
                <div className="flex flex-col xsm:mt-4 mt-2  gap-4 flex-1">
                  <p className="font-semibold xsm:text-white text-white lg:text-lg text-base">
                    <span className="mr-3">1.</span>IDENTIFY
                  </p>
                  <p className="text-sm text-white leading-relaxed">
                    For us, identifying opportunities for partnerships and
                    collaborations within Assetium Consult Limited is achieved
                    through structured approach such as defining strategic
                    goals, Understanding Market Analysis and  leveraging
                    technological platforms
                  </p>
                </div>
              </div>
            </Card>
            <div>
              <div className="md:h-20 h-10 bg-white w-[0.2px] mx-2"></div>
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>
            <Card className="w-full flex flex-col justify-between px-2 bg-[#f8f8f8] shadow-sm cursor-pointer">
              <div className="px-4 pb-4 flex flex-col flex-1">
                <div className="flex flex-col xsm:mt-4 mt-2  gap-4 flex-1">
                  <p className="font-semibold xsm:text-[#444444] text-[#c14511] lg:text-lg text-base">
                    <span className="mr-3">2.</span>PROFILING
                  </p>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    Profiling new businesses for partnership opportunities at
                    Assetium Consult Limited involves a strategic assessment of
                    potential partners based on specific criteria that align
                    with your firm goals and expertise.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="md:hidden flex-col flex items-center">
            <div className="md:h-20 h-10 bg-white w-[0.2px] mx-2"></div>
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
          </div>
          {/* Arrow connecting Profiling to Assessment */}
          <div className="h-full relative md:flex hidden justify-center items-end">
            {/* <div className="relative flex justify-center items-center">
              <svg
                className="w-72 h-10 text-white transform -rotate-12 origin-center"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 400 50" // Extended the viewBox width
              >
                <path
                  d="M0 25 H380 L370 15 M380 25 L370 35" // Extended the horizontal line further
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div> */}

            <div className="md:flex hidden items-center mb-30">
              <div className="w-30 bg-white h-[0.2px] "></div>

              <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between h-full">
            <Card className="w-full md:hidden  rounded-2xl  flex flex-col justify-between px-2 bg-[#f8f8f8] shadow-sm cursor-pointer">
              <div className="px-4 pb-4 flex flex-col flex-1">
                <div className="flex flex-col xsm:mt-4 mt-2  gap-4 flex-1">
                  <p className="font-semibold xsm:text-[#444444] text-[#c14511] lg:text-lg text-base">
                    <span className="mr-3">3.</span>ASSESSMENT
                  </p>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    Assetium Consult Limited effectively assess potential growth
                    through strategic partnerships. A methodical approach will
                    not only help identify the right partners but also ensure
                    that collaborations are fruitful, sustainable, and aligned
                    with the company’s growth objectives.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="w-full hidden md:flex rounded-2xl flex-col justify-between px-2 bg-[#C14511] shadow-sm cursor-pointer">
              <div className="px-4 pb-4 flex flex-col flex-1">
                <div className="flex flex-col xsm:mt-4 mt-2  gap-4 flex-1">
                  <p className="font-semibold xsm:text-white text-white lg:text-lg text-base">
                    <span className="mr-3">4.</span>VALUE ADD
                  </p>
                  <p className="text-sm text-white leading-relaxed">
                    Assetium Consult Limited add value to its partners through
                    various strategic initiatives and collaborative efforts.
                  </p>
                </div>
              </div>
            </Card>
            <div>
              <div className="md:h-20 h-10 bg-white w-[0.2px] mx-2"></div>
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>
            {/* <div className="shadow-sm  col-span-1 bg-[#c14511] w-full p-5 rounded-2xl">
              <p>
                <span className="mr-3">4.</span>VALUE ADD
              </p>
            </div> */}

            <Card className="w-full md:hidden flex rounded-2xl flex-col justify-between px-2 bg-[#C14511] shadow-sm cursor-pointer">
              <div className="px-4 pb-4 flex flex-col flex-1">
                <div className="flex flex-col xsm:mt-4 mt-2  gap-4 flex-1">
                  <p className="font-semibold xsm:text-white text-white lg:text-lg text-base">
                    <span className="mr-3">4.</span>VALUE ADD
                  </p>
                  <p className="text-sm text-white leading-relaxed">
                    Assetium Consult Limited add value to its partners through
                    various strategic initiatives and collaborative efforts.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="w-full hidden rounded-2xl  md:flex flex-col justify-between px-2 bg-[#f8f8f8] shadow-sm cursor-pointer">
              <div className="px-4 pb-4 flex flex-col flex-1">
                <div className="flex flex-col xsm:mt-4 mt-2  gap-4 flex-1">
                  <p className="font-semibold xsm:text-[#444444] text-[#c14511] lg:text-lg text-base">
                    <span className="mr-3">3.</span>ASSESSMENT
                  </p>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    Assetium Consult Limited effectively assess potential growth
                    through strategic partnerships. A methodical approach will
                    not only help identify the right partners but also ensure
                    that collaborations are fruitful, sustainable, and aligned
                    with the company’s growth objectives.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* <div className="bg-[#1a1919] h-fit rounded-[42px] my-8 text-white grid grid-cols-3 items-center p-16">
          <div className="flex flex-col justify-between items-center h-full">
            <div className="col-span-1 bg-[#c14511] p-5 rounded-2xl w-full">
              <p>
                <span className="mr-3">1.</span>IDENTIFY
              </p>
            </div>
            <div>
              <div className="h-20 bg-white w-[0.2px] mx-2"></div>
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>
            <Card className="w-full flex flex-col justify-between px-2 bg-[#f8f8f8] shadow-sm cursor-pointer">
              <div className="xsm:p-4 p-3 flex flex-col flex-1">
                <div className="flex flex-col xsm:mt-4 mt-2  gap-4 flex-1">
                  <p className="font-semibold xsm:text-[#444444] text-[#c14511] lg:text-lg text-base">
                    <span className="mr-3">2.</span>PROFILING
                  </p>
                  <p className="lg:text-sm text-[11px] text-[#444444] leading-relaxed">
                    Partnerships are more than just agreements—they're
                    connections built on shared aspirations and mutual growth.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div></div>
          <div className="flex flex-col items-center justify-between h-full">
            <Card className="w-full flex flex-col justify-between px-2 bg-[#f8f8f8] shadow-sm cursor-pointer">
              <div className="xsm:p-4 p-3 flex flex-col flex-1">
                <div className="flex flex-col xsm:mt-4 mt-2  gap-4 flex-1">
                  <p className="font-semibold xsm:text-[#444444] text-[#c14511] lg:text-lg text-base">
                    <span className="mr-3">3.</span>ASSESSMENT
                  </p>
                  <p className="lg:text-sm text-[11px] text-[#444444] leading-relaxed">
                    Partnerships are more than just agreements—they're
                    connections built on shared aspirations and mutual growth.
                  </p>
                </div>
              </div>
            </Card>
            <div>
              <div className="h-20 bg-white w-[0.2px] mx-2"></div>
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>
            <div className="col-span-1 bg-[#c14511] w-full p-5 rounded-2xl">
              <p>
                <span className="mr-3">4.</span>VALUE ADD
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ACLPartnershipProcess;
