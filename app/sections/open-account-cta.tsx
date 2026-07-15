// import { Button } from "@/components/ui/button";
// import React from "react";
// import Link from "next/link";

// const OpenAccountCTA = () => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row items-center justify-center text-[#1A1919] my-16 lg:gap-12 gap-8 px-5 lg:px-10 xl:px-20">
//         <p className="text-[14px] lg:text-[15px] pb-1.5 leading-normal text-center md:text-left  text-[#444444]">
//           Whether you are an individual or a corporation, open an account with
//           us today in minutes and access tailored solutions to achieve your
//           financial goals.
//         </p>
//         <div className="flex flex-col align-middle justify-center w-full">
//           <Link href="/open-account" className="w-full">
//             <Button
//               variant={"default"}
//               className="text-sm lg:text-base text-background border-none uppercase w-full"
//             >
//               Individual Account
//             </Button>
//           </Link>
//           <div className="leading-10 t text-sm text-center p-3 font-semibold">
//             OR
//           </div>
//           <Link href="/open-account" className="w-full">
//             <Button
//               variant={"outline"}
//               className="text-sm md:text-base uppercase w-full"
//             >
//               Coporate Account
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OpenAccountCTA;

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import qrcode from "@/public/home/qrcde.png";
import { ChartCandlestick } from "lucide-react";
import { HandCoins } from "lucide-react";
import { House } from "lucide-react";
import Link from "next/link";

const OpenAccountCTA = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 items-start text-[#1A1919] mt-16 lg:gap-20 gap-10 px-5 lg:px-10 xl:px-20 mb-20">
        <div className="col-span-1">
          <div className="flex gap-5 flex-col">
            <h3 className="text-[32px] text-[#c14511] font-semibold lg:text-[40px] tracking-tight">
              Be part of our Alternative Investment Hub{" "}
            </h3>

            <p className="text-[14px] lg:text-[15px] pb-1.5 leading-normal">
              Tap into unique investment opportunities that go beyond
              traditional markets. Grow, diversify, and invest smarter.
            </p>

            <div className="flex flex-row  justify-start gap-6 md:justify-between ">
              <div className="flex flex-row gap-2">
                <div className=" flex items-center justify-center  h-12 w-12 bg-[#c14511] rounded-full">
                  <ChartCandlestick color="#FFFFFF" size={20} />
                </div>
                <p className="text-[10px] lg:text-[15px] pb-1.5 leading-normal">
                  Commodity <br /> Trading{" "}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <div className=" h-12 w-12 flex items-center justify-center bg-[#1a1919] rounded-full">
                  <HandCoins color="#FFFFFF" size={20} />
                </div>
                <p className="text-[10px] lg:text-[15px] pb-1.5 leading-normal">
                  Venture <br /> Capital{" "}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#c14511]">
                  {" "}
                  <House color="#FFFFFF" size={20} />
                </div>
                <p className="text-[10px] lg:text-[15px] pb-1.5 leading-normal">
                  Real-Estate <br /> Investment
                </p>
              </div>
            </div>
            <div className="md:mt-10 flex gap-4 flex-row my-5">
              <p className="md:block hidden">
                Open an{" "}
                <span className="text-[#c14511] font-bold">Individual</span>
                <br />
                or <span className="text-[#c14511] font-bold">
                  Corporate
                </span>{" "}
                account <span className="text-[#c14511] font-bold">here</span>
              </p>
              <p className="md:hidden block">
                Open an{" "}
                <span className="text-[#c14511] font-bold">Individual</span> or{" "}
                <span className="text-[#c14511] font-bold">Corporate</span>{" "}
                account <span className="text-[#c14511] font-bold">here</span>
              </p>
              <ArrowRight color="#444444" className="md:block hidden" />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-5 p-8 rounded-lg items-center justify-center w-full bg-slate-200 h-full relative bg-[linear-gradient(221.48deg,_rgba(239,239,239,0.7)_5.41%,_rgba(228,228,228,0.7)_90.44%)] shadow-[inset_-10px_10px_35px_0px_rgba(0,0,0,0.25)]">
          <Image alt="open an account" src={qrcode} />
          <p>Scan the QR code or Proceed with button</p>

          <Button className="text-sm md:text-base text-background border-none w-full bg-[#c14511]">
            <Link href="/open-account">Open Account </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default OpenAccountCTA;
