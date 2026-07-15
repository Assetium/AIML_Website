import React from "react";
import ACLHero from "@/app/sections/acl-hero";
import ACLServiceOfferings from "@/app/sections/acl-service-offerings";
import ACLPartnershipProcess from "@/app/sections/acl-process-of-partnership";
import ACLScheduler from "@/app/sections/acl-scheduler";
import Partners from "@/app/sections/acl-success-stories";

const page = () => {
  return (
    <div>
      <ACLHero />
      <ACLServiceOfferings />
      <ACLPartnershipProcess />
      <Partners />
      <ACLScheduler />
    </div>
  );
};

export default page;
