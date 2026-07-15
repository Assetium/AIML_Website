export const dynamic = "force-dynamic";
import React from "react";
import ContactHero from "@/app/sections/contact-hero";
import ContactInterested from "@/app/sections/contact-interested";
import ContactFormComponent from "@/app/sections/contact-form-component";

const Page = () => {
  return (
    <>
      <ContactHero />
      <ContactInterested />
      <ContactFormComponent />
    </>
  );
};

export default Page;
