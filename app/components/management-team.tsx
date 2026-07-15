// import React from "react";
// import Image from "next/image";
// import { ManagementTeamProps } from "@/lib/types";

// const ManagementTeam: React.FC<ManagementTeamProps> = ({
//   name,
//   position,
//   imageUrl,
// }) => {
//   return (
//     <div className="relative flex flex-col items-center border border-[#4444445e] my-6 lg:my-12">
//       {/* Image container */}
//       <div className="relative w-full">
//         <Image
//           src={imageUrl}
//           width={200}
//           height={200}
//           alt={`${name}'s photo`}
//           className="w-full"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//       </div>

//       {/* Content below the image */}
//       <div className="w-full py-3">
//         <div className="flex-col w-full flex items-center">
//           <h3 className="text-[#444444] lg:leading-8 lg:tracking-tighter text-base font-semibold pb-1">
//             {name}
//           </h3>
//           <p className="text-[14px] pb-5 text-center md:text-xs uppercase text-[#c14511] font-bold">
//             {position}
//           </p>
//         </div>
//         {/*   <div className="flex items-center gap-1 md:gap-3">
//           <Icon
//             icon="akar-icons:instagram-fill"
//             width="24"
//             height="24"
//             style={{ color: "#444444" }}
//           />
//           <Icon
//             icon="uil:linkedin"
//             width="24"
//             height="24"
//             style={{ color: " #444444" }}
//           />
//           <Icon
//             icon="proicons:x-twitter"
//             width="24"
//             height="24"
//             style={{ color: "#444444" }}
//           />
//           <Icon
//             icon="fe:facebook"
//             width="24"
//             height="24"
//             style={{ color: "#444444" }}
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default ManagementTeam;
import React from "react";
import Image from "next/image";
import { ManagementTeamProps } from "@/lib/types";

const ManagementTeam: React.FC<ManagementTeamProps> = ({
  name,
  position,
  imageUrl,
  department,
  description,
}) => {
  const [firstName, ...lastName] = name.split(" ");
  return (
    <div className="flex flex-col flex-[0_0_calc(33.333%-0.7rem)] bg-[#dfdfdf]">
      <div className="relative w-full">
        <Image
          src={imageUrl}
          layout="responsive"
          width={1}
          height={1}
          className="w-full h-full object-cover bg-white"
          alt={`${name}'s photo`}
        />
      </div>

      {/* Label */}
      <div className={"px-2 py-1 text-xs uppercase font-medium mt-2"}>
        {department}
      </div>

      {/* Name */}
      <h3 className="text-[16px] text-left font-bold mt-1 pl-3 text-[#444444]">
        <span>{firstName}</span> <span>{lastName.join(" ")}</span>
      </h3>

      {/* Position */}
      <p className="uppercase text-xs mt-1 mb-2 text-left text-[#c14511] pl-3">
        {position}
      </p>

      {/* Description */}
      <p className="text-[#ccc] text-xs px-4 pb-4">{description}</p>
    </div>
  );
};

export default ManagementTeam;
