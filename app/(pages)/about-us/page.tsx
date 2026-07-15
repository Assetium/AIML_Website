import React from "react";
import AboutUsHero from "@/app/sections/aboutus-hero";
// import AboutUsMission from "@/app/sections/aboutus-mission";
// import StrategicIntent from "@/app/sections/strategic-intent";
import AboutusJoinus from "@/app/sections/aboutus-joinus";
import ExecutiveManagement from "@/app/sections/executive-management";
import MissionVisionValuesSection from "@/app/sections/MissionVisionValuesSection";
// import ACMLOrgChart from "@/app/sections/acml-org-chart";
// import MissionVisionValuesSection from "@/app/sections/MissionVisionValuesSection";

const AboutUs = () => {
  return (
    <div className="">
      {/* <AboutUsMission />
       /> */}
      <AboutUsHero />
      <MissionVisionValuesSection />
      <ExecutiveManagement />
            {/* <ACMLOrgChart /> */}
      
      <AboutusJoinus />
    </div>
    //Test
  );
};

export default AboutUs;
