import React from "react";
import Image from "next/image";

interface CardSixProps {
  imageSrc: string;
  sdgNumber: string;
  sdgTitle: string;
}
const CardSix: React.FC<CardSixProps> = ({ imageSrc, sdgNumber, sdgTitle }) => {
  return (
    <div>
      <div>
        <Image
          layout="responsive"
          width={9}
          height={16}
          src={imageSrc}
          alt=""
        />
      </div>
      <p className="p-3 bg-[#f1f1f1] font-medium text-sm uppercase">
        {sdgNumber}
      </p>
      <h3 className="p-3 font-semibold leading-tight tracking-tighter pb-5 text-[#c14511] text-lg">
        {sdgTitle}
      </h3>
    </div>
  );
};

export default CardSix;
