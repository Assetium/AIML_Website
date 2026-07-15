// import Image from "next/image";
import React from "react";
import Image from "next/image";
import sec from "@/public/metrics/sec-logo.png";
import afex from "@/public/metrics/AFEX LOGO.png";
import NEPC from "@/public/metrics/NEPC.jpeg";
import LCFE from "@/public/metrics/LCFE_LOGO.png";
import ginger from "@/public/metrics/ginger_up.webp";
import eduvacity from "@/public/metrics/eduvacity.png";
import ecokleen from "@/public/metrics/ecokleen.png";
import AORN from "@/public/metrics/AORN.png";
import globus from "@/public/metrics/globus.png";
import dantata from "@/public/metrics/dantata.png";
import casalavoro from "@/public/metrics/casalavoro.png";

import Marquee from "react-fast-marquee";

const Metrics = () => {
  return (
    <div className="h-[80px] flex items-center p-3 flex-wrap bg-white shadow-md ">
      <Marquee>
        <Image
          src={sec}
          alt="Securities and Exchange Commission, Nigeria Logo"
          className="lg:mr-25 md:mr-15 mr-8  "
          width={180}
        />
        <Image
          src={afex}
          alt="Afex Logo"
          className="lg:mr-25 md:mr-15 mr-8"
          width={100}
        />
        <Image
          src={ginger}
          alt="Logo"
          className="lg:mr-25 md:mr-15 mr-8"
          width={40}
        />
        <Image
          src={AORN}
          alt="Logo"
          className="lg:mr-25 md:mr-15 mr-8"
          width={30}
        />
        <Image
          src={casalavoro}
          alt="Logo"
          className="lg:mr-25 md:mr-15 mr-8"
          width={130}
        />
        <Image
          src={NEPC}
          alt="nepc  Logo"
          className="lg:mr-25 md:mr-15 mr-8"
          width={150}
        />
        <Image
          src={globus}
          alt="Globus"
          className="lg:mr-25 md:mr-15 mr-8"
          width={55}
        />
        <Image
          src={LCFE}
          alt="Logo"
          width={150}
          className="lg:mr-25 md:mr-15 mr-8 "
        />
        <Image
          src={dantata}
          alt="Logo"
          className="lg:mr-25 md:mr-15 mr-8"
          width={100}
        />
        <Image
          src={ecokleen}
          alt="Logo"
          width={150}
          className="lg:mr-25 md:mr-15 mr-8 "
        />
        <Image
          src={eduvacity}
          alt="Logo"
          className="lg:mr-25 md:mr-15 mr-8"
          width={180}
        />{" "}
      </Marquee>

      {/*     <p className=" px-6 text-base font-semibold text-[#444444]">
        Licensed by:{" "}
        <span className="text-[#c14511] italic font-medium">
          The Securities and Exchange Commission, Nigeria (SEC)
        </span>
      </p> */}
    </div>
  );
};

export default Metrics;
