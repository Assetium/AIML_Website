import React from "react";
import Image from "next/image";

const Acknowledgement = () => {
  return (
    <div className="mx-auto my-6 max-w-3xl bg-white p-5 shadow-md pt-30 text-[13px]">
      <div className="flex items-center gap-3">
        <div>
          <Image
            width={45}
            height={400}
            src="https://res.cloudinary.com/dxckyqaes/image/upload/v1738758200/Screenshot_2025-02-05_131246_cg8eez.jpg"
            alt=""
          />
        </div>
        <div>
          {/* Header */}
          <div className="flex items-center justify-between ">
            <div className="flex flex-col items-center">
              <Image
                src="/logo.png"
                alt="Assetium Logo"
                width={75}
                height={75}
              />

              <span className=" py-[0.8px] text-[#c14511] text-[5px] font-semibold uppercase">
                Capital Management Limited
              </span>
              <p className=" font-semibold text-[#444444] text-[8px] uppercase">
                RC: 1597731
              </p>
            </div>
          </div>

          {/* Recipient Details */}
          <div className="mt-6 text-[#444444] text-[12px] flex gap-1 flex-col">
            <p>January 7th, 2025</p>

            <p className="font-semibold">MR ANTHONY C. JEREMIAH,</p>
            <p>IVY APARTMENT BY ZAVATI,</p>
            <p>WUYE,</p>
            <p>ABUJA.</p>
          </div>

          {/* Acknowledgement Statement */}
          <h2 className="mt-6 font-bold uppercase text-gray-800">
            Acknowledgement of ₦25,000,000.00 in Assetium Commodity Portfolio
          </h2>
          <p className="mt-2 text-gray-700">
            We acknowledge receipt of your deposit of{" "}
            <strong>₦25,000,000.00</strong>, which has been credited to your
            investment account. Under the following terms:
          </p>

          {/* Investment Details */}
          <div className="relative mt-6 space-y-2 rounded-lg py-4 px-20 text-[#444444] grid grid-cols-2">
            <div className="grid col-span-1 gap-1 font-semibold">
              <p>Refecence:</p>
              <p>Total Principal:</p>
              <p>Interest Rate:</p>
              <p>Effective Date:</p>
              <p>Investment Tenor:</p>
              <p>Maturity Date:</p>
              <p>Interest Amount Gross:</p>
              <p>Withholding Tax:</p>
              <p>Interest Amount Gross:</p>
              <p>Value at Maturity:</p>
            </div>
            <div className="grid col-span-1 gap-1">
              <p>ACML202319</p>
              <p> ₦25,000,000.00</p>
              <p>20% per Annum</p>
              <p>January 7 th, 2025</p>
              <p>180 Days (With the option of rollover)</p>
              <p>July 6th, 2025</p>
              <p>₦2,465,753.42</p>
              <p>₦246,575.34</p>
              <p>₦2,219,178.08</p>
              <p>₦2,219,178.08</p>
            </div>
          </div>

          {/* Terms and Conditions */}
          <h3 className="mt-6 underline font-semibold text-[#444444]">
            Terms and Conditions
          </h3>
          <ul className="mt-2 list-inside list-decimal space-y-1 text-[#444444]">
            <li>
              Part liquidation/ premature termination is allowed subject to a
              penalty charge of 25% of your accrued Interest
            </li>
            <li>
              Interest earned on the investment is subject to a regulatory 10%
              withholding tax.
            </li>
            <li>
              Upon maturity of investment and in the absence of express
              instruction to the contrary from you, the principal and accrued
              interest will be rolled over at the Prevailing Market Rate and for
              your last advised tenor. <br />
              <strong>
                <i>
                  Please note that the Prevailing Market Rate may differ from
                  your last contracted interest.
                </i>
              </strong>
            </li>
            <li>
              ACML operations is in compliance with the money laundering
              (Prevention and Prohibition) Act, 2022
            </li>
          </ul>

          {/* Signatures */}
          <div className="flex justify-between items-center">
            <div className="text-center font-semibold">
              <Image
                width={100}
                src="https://res.cloudinary.com/dxckyqaes/image/upload/v1738756742/tosin_e_signature_gltnbt.png"
                alt="Tosin Signature"
              />
              <p className="border-t-[3px] border-gray-800 pt-2">
                Oyebamiji Oluwatosin E.
              </p>
              <p>Treasury Manager</p>
            </div>
            <div>
              <Image
                width={250}
                height={250}
                alt="acml_certificate"
                src="/acml_certificate.png"
              />
            </div>
            <div className="text-center font-semibold">
              <Image
                width={100}
                src="https://res.cloudinary.com/dxckyqaes/image/upload/v1738756844/mr_gbade_e_signature_fb0cz4.png"
                alt="Abdrazaq Signature"
              />
              <p className="border-t-[3px] border-gray-800 pt-2 ">
                Ayoola G. Abdrazaq
              </p>
              <p>Chief Operating Officer</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            width={45}
            height={400}
            src="https://res.cloudinary.com/dxckyqaes/image/upload/v1738758200/Screenshot_2025-02-05_131246_cg8eez.jpg"
            alt=""
          />
        </div>
        {/* <div className="flex flex-col gap-3">
          <div className="h-15 bg-[#c14511] w-3"></div>
          <div className="h-15 bg-gray-700 w-3"></div>
          <div className="h-15 bg-[#c14511] w-3"></div>
          <div className="h-15 bg-gray-700 w-3"></div>
          <div className="h-15 bg-[#c14511] w-3"></div>
        </div> */}
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between w-full text-[10px] text-gray-600">
        <span className="bg-[#c14511] px-6 py-1 text-white">
          Asset Management
        </span>
        <span className="bg-gray-700 px-6 py-1 text-white ">
          Commodity Broker/ Dealer
        </span>
        <span className="bg-[#c14511] px-6 py-1 text-white">
          Business Advisory
        </span>
        <span className="bg-gray-700 px-6 py-1 text-white ">Real Estate</span>
      </div>
    </div>
  );
};

export default Acknowledgement;
