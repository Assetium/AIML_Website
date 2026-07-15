// import React from "react";
// import consult from "@/public/acl/schedule_consultaion.jpg";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const ACLScheduler = () => {
//   return (
//     <div className="relative md:py-8 pt-0 pb-8 px-5 lg:px-10 xl:px-20">
//       <div className="absolute inset-0 flex items-center justify-center">
//         <Button
//           className="text-xs md:text-base text-background px-5 border-none uppercase w-fit"
//           variant={"default"}
//         >
//           Schedule a Consultation
//         </Button>
//       </div>
//       <Image src={consult} alt="Tour Our Apartment" className="w-full" />
//     </div>
//   );
// };

// export default ACLScheduler;

"use client";

import React from "react";
import consult from "@/public/acl/schedule_consultaion.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ACLScheduler = () => {
  function handleScheduleConsultation() {
    const subject = "Consultation Request";
    const body =
      "Hi, I would like to schedule a consultation. Please let me know a suitable time.";
    const mailtoLink = `mailto:info@assetium.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  return (
    <div className="relative md:py-8 pt-0 pb-8 px-5 lg:px-10 xl:px-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          className="text-xs md:text-base text-background px-5 border-none uppercase w-fit"
          variant="default"
          onClick={handleScheduleConsultation}
        >
          Schedule a Consultation
        </Button>
      </div>
      <Image src={consult} alt="Tour Our Apartment" className="w-full" />
    </div>
  );
};

export default ACLScheduler;
