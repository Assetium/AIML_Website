/* import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContactInterested = () => {
  return (
    <>
      <div className="my-8 bg-[#fff8f6]">
        <div className="py-8 lg:py-15 px-5 lg:px-10 xl:px-20 grid lg:grid-cols-2 gap-10  grid-cols-1">
          <div className="lg:hidden block">
            <p className="lg:leading-8 text-[11px] md:text-lg lg:text-xl uppercase text-[#c14511]">
              Hi! I am Here
            </p>
            <h3 className="font-meidum leading-tight tracking-tighter my-3 text-title-lg text-[#444444] ">
              Interested in a product or service? Talk to our sales team{" "}
            </h3>
            <p className="lg:leading-8 text-[13px] font-normal md:text-base lg:text-xl text-[#444444]">
              From questions about pricing to one-on-one personalized demos, we
              would love to connect and help get you started.
            </p>
          </div>
          <div className="grid gap-8">
            <Card className="">
              <CardHeader>
                <CardTitle className="flex gap-1 items-center text-base font-light">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 72 72"
                    >
                      <path fill="#fff" d="M5 17h62v38H5z"></path>
                      <path
                        fill="#186648"
                        d="M5 17h21v38H5zm41 0h21v38H46z"
                      ></path>
                      <path fill="none" d="M5 17h62v38H5z"></path>
                    </svg>
                  </span>
                  Lagos, Nigeria
                </CardTitle>
                <div className="grid grid-cols-1 xsm:grid-cols-2 gap-3 items-start justify-center text-[#444444]">
                  <div>
                    <CardDescription className="pt-5 text-[10px]">
                      Address
                    </CardDescription>
                    <CardContent className="m-0 p-0">
                      <p className="text-[13px] text-[#444444]">
                        1, Orisasanya Street. Oniru Estate Victoria Island,
                        Lagos. Nigeria{" "}
                      </p>
                    </CardContent>
                  </div>

                  <div>
                    <CardDescription className="pt-5 text-[10px]">
                      Email Address
                    </CardDescription>
                    <CardContent className="m-0 p-0">
                      <p className="text-[13px] text-[#444444]">
                        info@assetium.com
                      </p>
                      <p className="text-[13px] text-[#444444]">
                        customerservice@assetium.com
                      </p>
                    </CardContent>
                  </div>

                  <div>
                    <CardDescription className="pt-5 text-[10px]">
                      Phone Number
                    </CardDescription>
                    <CardContent className="m-0 p-0">
                      <p className="text-[13px] text-[#444444]">
                        +234 701 4855 558
                      </p>
                    </CardContent>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="">
              <CardHeader>
                <CardTitle className="flex gap-1 items-center text-base font-light text-[#444444]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 72 72"
                    >
                      <path fill="#fff" d="M5 17h62v38H5z"></path>
                      <path
                        fill="#186648"
                        d="M5 17h21v38H5zm41 0h21v38H46z"
                      ></path>
                      <path fill="none" d="M5 17h62v38H5z"></path>
                    </svg>
                  </span>
                  Abuja, Nigeria
                </CardTitle>
                <div className="grid grid-cols-1 xsm:grid-cols-2 gap-3 items-start justify-center text-[#444444]">
                  <div>
                    <CardDescription className="pt-5 text-[10px]">
                      Address
                    </CardDescription>
                    <CardContent className="m-0 p-0">
                      <p className="text-[12px] text-[#444444]">
                        29, Nouakchott Cresent Wuse Zone 1. Federal Capital
                        Teritory, Abuja. Nigeria{" "}
                      </p>
                    </CardContent>
                  </div>

                  <div>
                    <CardDescription className="pt-5 text-[10px]">
                      Emai Address
                    </CardDescription>
                    <CardContent className="m-0 p-0">
                      <p className="text-[13px] text-[#444444]">
                        customerservice@assetium.com
                      </p>
                      <p className="text-[13px] text-[#444444]">
                        info@assetium.com
                      </p>
                    </CardContent>
                  </div>

                  <div>
                    <CardDescription className="pt-5 text-[10px]">
                      Phone Number
                    </CardDescription>
                    <CardContent className="m-0 p-0">
                      <p className="text-[13px] text-[#444444]">
                        +234 701 4855 558
                      </p>
                    </CardContent>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="hidden lg:block">
            <p className="lg:leading-8 text-[13px] md:text-lg lg:text-xl uppercase text-[#c14511] font-bold">
              Hi! I am Here
            </p>
            <h3 className="font-meidum leading-tight tracking-tighter my-3 text-title-lg text-[#444444] ">
              Interested in a product or service? Talk to our sales team{" "}
            </h3>
            <p className="lg:leading-8 text-[13px] md:text-lg lg:text-xl font-medium text-[#444444]">
              From questions about pricing to one-on-one personalized demos, we
              would love to connect and help get you started.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInterested;
 */

import React from "react";
import Image from "next/image";
import abjOffice from "@/public/contact/contact-abuja-building.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ContactCard = ({
  location,
  address,
  emails,
  phone,
}: {
  location: string;
  address: string;
  emails: string[];
  phone: string;
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex gap-1 items-center text-[.9rem] font-semibold text-[#1a1919]">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 72 72"
          >
            <path fill="#fff" d="M5 17h62v38H5z" />
            <path fill="#186648" d="M5 17h21v38H5zm41 0h21v38H46z" />
            <path fill="none" d="M5 17h62v38H5z" />
          </svg>
        </span>
        {location}
      </CardTitle>
      <div className="grid grid-cols-1 xsm:grid-cols-2 gap-3 text-[#444444]">
        <div>
          <CardDescription className="pt-5 text-[10px]">
            Address
          </CardDescription>
          <CardContent className="m-0 p-0">
            <p className="text-[.8rem] text-[#1a1919]/70">{address}</p>
          </CardContent>
        </div>
        <div>
          <CardDescription className="pt-5 text-[10px]">
            Email Address
          </CardDescription>
          <CardContent className="m-0 p-0">
            {emails.map((email, idx) => (
              <p key={idx} className="text-[.8rem] text-[#1a1919]/70">
                {email}
              </p>
            ))}
          </CardContent>
        </div>
        <div>
          <CardDescription className="pt-5 text-[10px]">
            Phone Number
          </CardDescription>
          <CardContent className="m-0 p-0">
            <p className="text-[.8rem] text-[#1a1919]/70">{phone}</p>
          </CardContent>
        </div>
      </div>
    </CardHeader>
  </Card>
);

const ContactInterested = () => {
  const contactData = [
    {
      location: "Lagos, Nigeria",
      address: "1, Orisasanya Street, Oniru Estate, Victoria Island, Lagos.",
      emails: ["info@assetium.com", "customerexperience@assetium.com"],
      phone: "+234 701 4855 558",
    },
    {
      location: "Abuja, Nigeria",
     address: `29, Nouakchott Crescent, Wuse Zone 1, Federal Capital Territory, Abuja.\n54, Nouakchott Street, Wuse Zone 1, Federal Capital Territory, Abuja.`,
      emails: ["customerexperience@assetium.com", "info@assetium.com"],
      phone: "+234 701 4855 558",
    },
  ];

  return (
    <div className="my-8 bg-[#fff8f6]">
      <div className="py-8 lg:py-15 px-5 lg:px-10 xl:px-20 lg:grid lg:grid-cols-2 gap-10 flex flex-col-reverse ">
        {/* Contact Cards */}
        <div className="grid gap-8" style={{ whiteSpace: "pre-line" }}>
          {contactData.map((data) => (
            <ContactCard
              key={Math.random()}
              location={data.location}
              address={data.address}
              emails={data.emails}
              phone={data.phone}
            />
          ))}
        </div>

        {/* Text Section */}
        <div className=" col-span-1 flex justify-between flex-col">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Hi! I am Here
            </p>
            <h3 className="leading-tight tracking-tight my-3 text-title-lg lg:text-title-xl text-[#1a1919]">
              Interested in a product or service? Talk to our sales team
            </h3>
            <p className="text-[.9rem] leading-relaxed text-[#1a1919]/60 font-medium">
              From questions about pricing to one-on-one personalized demos, we
              would love to connect and help get you started.
            </p>
          </div>

          <div className="w-full mt-8">
            <Image
              src={abjOffice}
              alt="Lagos Office Building"
              className="rounded-md"
            />
            <div className="flex items-center gap-2 mt-2 p-2 bg-gray-100 rounded-md">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-xs text-gray-700">
                Building Represents Assetium Abuja Office
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInterested;
