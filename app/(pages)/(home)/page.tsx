// import Hero from "@/app/sections/hero";
// import Metrics from "@/app/sections/metrics";
// // import ImageSlider from "@/app/sections/image-slider";
// // import HomeAbout from "@/app/sections/home-about";
// import HomeInsights from "@/app/sections/home-insights";
// // import OpenAccountCTA from "@/app/sections/open-account-cta";
// import Testimonials from "@/app/sections/home-testimonials";
// // import backgroundImage from "@/public/home/hero-bg.png";
// import GCEOMessage from "@/app/sections/gceo-message";
// import OurBusinesses from "@/app/sections/our-businesses";

// export default function Home() {
//   return (
//     <div>
      
//       <div className="h-full py-9 relative z-10">
//         <Hero />
//       </div>
//       <div className="relative w-full">
//         <div className=" w-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//           <Metrics />
//         </div>

//         {/* <HomeAbout /> */}
//       </div>
//       {/* <ImageSlider /> */}
//       <OurBusinesses />
//       {/* <OpenAccountCTA /> */}
//       <GCEOMessage />
//       <HomeInsights />
//       <Testimonials />
//     </div>
//   );
// }


import React from "react";
// import Link from "next/link";
import AIMLHeader from "@/app/sections/aiml-header";
import AIMLServices from "@/app/sections/aiml-service";
import AIMLProducts from "@/app/sections/aiml-products";
import AIMLInsights from "@/app/sections/aiml-insighta";
import AIMWhyUs from "@/app/sections/aiml-why-choose-us";

export default function ComingSoon() {
  return (
    <>
      <AIMLHeader />
      <AIMLServices />
      <AIMLProducts />
      <AIMLInsights />
      <AIMWhyUs />
    </>
  
  );
}
