import React from "react";

import ContactForm from "@/app/components/contact-form";
import Image from "next/image";
import lagosoffice from "@/public/contact/lagos.jpeg";
import { MapPin } from "lucide-react";
const ContactFormComponent = () => {
  return (
    <>
      <div className="my-12 bg-[#]">
        <div className="py-8 lg:py-15 px-5 lg:px-10 xl:px-20 grid lg:grid-cols-2 gap-10  grid-cols-1">
          <div className="w-full flex gap-6">
            <div className=" col-span-1 flex justify-between flex-col">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                  Ask away!
                </p>
                <h3 className="leading-tight tracking-tight my-3 text-title-lg lg:text-title-xl text-[#1a1919]">
                  If you cannot find what you are looking for,
                </h3>
                <p className="text-[.9rem] leading-relaxed text-[#1a1919]/60 font-medium">
                  Send a message detailing what you need help with. Our CX team
                  will be happy to lend a helping hand!
                </p>
              </div>
              {/* <div className="w-full mt-8">
                {" "}
                <Image
                  src={lagosoffice}
                  alt="Abuja Office Building"
                  className="rounded-md"
                />
              </div> */}

              <div className="w-full mt-8">
                <Image
                  src={lagosoffice}
                  alt="Lagos Office Building"
                  className="rounded-md"
                />
                <div className="flex items-center gap-2 mt-2 p-2 bg-gray-100 rounded-md">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <span className="text-xs text-gray-700">
                    Building Represents Assetium Lagos Office
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:block w-[0.01px] border border-[#e1e1e1] h-full hidden"></div>
          </div>

          <div className="block h-[0.1px] border border-[#e1e1e1] w-full md:hidden"></div>

          <div className="grid gap-8 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormComponent;
