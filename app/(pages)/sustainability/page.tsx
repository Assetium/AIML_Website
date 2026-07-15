import WhyItMatters from "@/app/sections/why-it-matters";
import EnviornmentalLmpact from "@/app/sections/enviornmental-impact";
import SustainableApproach from "@/app/sections/sustainable-approach";
import SustainabilityHero from "@/app/sections/sustainalbility-hero";
import React from "react";
import CSRActivities from "@/app/sections/csr-activities";

const page = () => {
  return (
    <>
      <SustainabilityHero />
      <SustainableApproach />
      <EnviornmentalLmpact />

      <CSRActivities />
      <WhyItMatters />
    </>
  );
};

export default page;
