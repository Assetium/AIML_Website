import ACMLHeader from "@/app/sections/acml-header";
import ACMLManagement from "@/app/sections/acml-management";
// import ACMLOrgChart from "@/app/sections/acml-org-chart";
import ACMLProuctOffernings from "@/app/sections/acml-product-offernings";
import ACMLServiceOfferings from "@/app/sections/acml-service-offernings";
import ATCCommoditiesCycles from "@/app/sections/atcl-commodity-cycles";
import ATCTrancheHistory from "@/app/sections/atcl-tranche-history";
import ATCHowItWorks from "@/app/sections/how-actl-work";
import OtherProducts from "@/app/sections/other-acml-products";
import React from "react";

const Acml = () => {
  return (
    <div>
      <ACMLHeader />
      <ACMLServiceOfferings />
      <ACMLProuctOffernings />
      <ATCCommoditiesCycles />
      <ATCHowItWorks />
      <ATCTrancheHistory />
      <OtherProducts />

      <ACMLManagement />
      {/* <ACMLOrgChart /> */}
    </div>
  );
};

export default Acml;
