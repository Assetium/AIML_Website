// import Image from "next/image";
// import { CardTwoProps } from "@/lib/types";

// const CardTwo: React.FC<CardTwoProps> = ({ name, text, imageSrc }) => {
//   return (
//     <div className={"flex h-full relative py-1 lg:px-5 gap-[-10px]"}>
//       <div className="bar bg-[#c14511] rounded-s-sm w-2 -my-[5px]"></div>
//       <div className="w-full flex flex-row gap-4 items-center rounded border-y border-r border-[#979797] m-[-2px] px-4 py-2">
//         <Image
//           src={imageSrc}
//           className="rounded-full h-21 w-21"
//           alt={`${name}'s testimonial`}
//           width={84}
//           height={84}
//         />
//         <div className="flex gap-1 flex-col">
//           <p className="text-[13px] font-medium text-[#1A1919]">{name}</p>
//           <p className="text-[12px] text-[#444444]">{text}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardTwo;
import React from "react";
import Image from "next/image";
import { CardTwoProps } from "@/lib/types";
import { QuoteIcon } from "lucide-react";

const CardTwo: React.FC<CardTwoProps> = ({ name, text, imageSrc }) => {
  return (
    <div className="bg-[#efefef] flex flex-col p-8 rounded-xl h-full transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
      <div className="flex-1 flex flex-col gap-6 lg:gap-10">
        <div>
          <Image
            src={imageSrc}
            className="rounded-full h-21 w-21"
            alt={`${name}'s testimonial`}
            width={72}
            height={72}
          />
        </div>

        <div className="flex gap-3 flex-col">
          <QuoteIcon color="#c14511" />
          <p className="text-base text-[#1A1919]">{text}</p>
        </div>
      </div>

      <div className="flex gap-4 items-center mt-6">
        <div className="w-[1px] h-3 bg-[#c14511]" />
        <p className="text-[13px] font-medium text-[#444444]">{name}</p>
      </div>
    </div>
  );
};

export default CardTwo;
