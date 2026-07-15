import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const AccountDetails = () => {
  return (
    <>
      <div
        className="min-h-screen p-6 mt-32
      "
      >
        {/* Product Header */}
        <div className="max-w-4xl mx-auto bg-white  p-6">
          <div className="flex justify-between items-center my-4">
            <div>
              <Image className="w-19" src={logo} alt="Assetium Logo" />
            </div>
            <div>
              <p className="text-right font-semibold text-base">
                Account Statement
                <br />{" "}
                <span className="text-[#c14511] font-medium">
                  {" "}
                  Aug 10, 2024
                </span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-700 uppercase border-[#c4c4c4] border-t-2 border-b-2 py-5">
              Product: Guaranteed Commodity Portfolio (Retail)
            </h2>
          </div>

          {/* Account Info */}

          <div className="flex flex-col ">
            <div className="grid  lg:grid-cols-4 xsm:grid-cols-2 grid-cols-1 gap-7 mt-8">
              <div>
                <p>
                  <span className="font-bold">Account Holder:</span> <br />{" "}
                  Oduwole Ayomipo
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">Holders Address</span> <br /> 29,
                  Nouakchott Crescent, Wuse zone 1, Abuja, Nigeria.
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Period Started</span> <br /> April
                  10, 2024
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Closing Balance</span> <br /> NGN
                  250,234,532.00
                </p>
              </div>
            </div>
            <div className="grid  lg:grid-cols-4 xsm:grid-cols-2 grid-cols-1 gap-7 my-8 pb-8 border-b-2 border-[#c4c4c4]">
              <div></div>
              <div>
                <p>
                  <span className="font-bold"> Account Number</span> <br /> 29,
                  ACML202263{" "}
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Maturity Date</span> <br /> July
                  9, 2024
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Rate</span> <br /> 10%
                </p>
              </div>
            </div>
          </div>

          {/* Account Breakdown */}
          <div className="mt-8 pb-5 border-b-2 border-[#c4c4c4]">
            <h3 className="text-2xl tracking-tight font-bold text-gray-700">
              Account Breakdown
            </h3>
            <p className="text-base text-gray-500 mb-4">
              April 10, 2024 - August 10, 2024
            </p>
            <table className="w-full border-collapse my-10">
              <thead className="bg-[#c14511] text-white text-left">
                <tr className="p-2">
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Subscription</th>
                  <th className="px-4 py-2">Redemption</th>
                  <th className="px-4 py-2">Interest</th>
                  <th className="px-4 py-2">WHT</th>
                  <th className="px-4 py-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "09-20-2024",
                    description: "Opening Balance",
                    subscription: "100,000",
                    redemption: "-",
                    interest: "2,000",
                    wht: "700",
                    balance: "101,300",
                  },
                  {
                    date: "09-20-2024",
                    description: "Opening Balance",
                    subscription: "100,000",
                    redemption: "-",
                    interest: "2,000",
                    wht: "700",
                    balance: "101,300",
                  },
                  {
                    date: "09-20-2024",
                    description: "Opening Balance",
                    subscription: "100,000",
                    redemption: "-",
                    interest: "2,000",
                    wht: "700",
                    balance: "101,300",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={`p-2 ${
                      index % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"
                    }`}
                  >
                    <td className="px-4 py-2">{row.date}</td>
                    <td className="px-4 py-2">{row.description}</td>
                    <td className="px-4 py-2">{row.subscription}</td>
                    <td className="px-4 py-2">{row.redemption}</td>
                    <td className="px-4 py-2">{row.interest}</td>
                    <td className="px-4 py-2">{row.wht}</td>
                    <td className="px-4 py-2">{row.balance}</td>
                  </tr>
                ))}
              </tbody>
              <tbody>
                <tr className="p-2 bg-[#eeeeee]">
                  <td className="px-4 py-2 text-[#c14511]">
                    Closing Balance at
                  </td>
                  <td className="px-4 py-2 text-[#c14511]">April 2024</td>
                  <td className="px-4 py-2">100,000</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">2,000</td>
                  <td className="px-4 py-2">700</td>
                  <td className="px-4 py-2">101,300</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-6 text-gray-700 text-center my-4 text-lg">
            <p>
              Reach out anytime to our customer service, via{" "}
              <a
                href="mailto:customerservice@assetium.com"
                className="text-[#c14511]"
              >
                customerservice@assetium.com
              </a>{" "}
              || <span className="text-[#c14511]"> +234 (0) 123 456 7890 </span>
              || or your account manager - we are here.
              <span className="text-[#c14511]">
                {" "}
                Spread the word to families and friends, Let us all make some
                smart money moves together.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
