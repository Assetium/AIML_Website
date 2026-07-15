import React from "react";
import Image from "next/image";
// import FeatureItem from "../components/home-about-card";
// import { HandCoins } from "lucide-react";
// import { ChartAreaIcon } from "lucide-react";
const HomeAbout = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#ffffff]  to-[#c1461111]">
      <div className="mx-auto xl:px30 lg:px-12 px-6 py-18">
        <div className="grid items-center justify-center lg:gap-16 gap-10 lg:grid-cols-2 ">
          {/* LEFT */}
          <div className=" z-10 rounded-3xl flex items-center justify-center ring-1 ring-white/10 ">
            <Image
              src="/home/home-about2.png"
              alt="Hero visual"
              width={420}
              height={360}
              priority={false}
              className="rounded-2xl object-cover transition-transform duration-500 ease-out
      group-hover:scale-110"
            />
          </div>

          {/* RIGHT */}
          <div className="space-y-6 ">
            <span className="inline-flex items-center font-bold rounded-full border border-[#1a1919] bg-[#444444]/25 px-4 py-1 text-xs text-[#1a1919]">
              Who We Are
            </span>

            <p className="max-w-xl text-sm leading-relaxed text-[#444444]">
              We redefine investment by offering tailored solutions that empower
              individuals and businesses to achieve meaningful and lasting
              financial growth. In today’s evolving financial landscape,
              alternative investments are essential for building a diversified
              portfolio that protects against inflation and maximizes returns.
              With expertise spanning asset management, commodities trading,
              business advisory, and real estate, we are committed to crafting
              balanced portfolios designed to meet your unique goals.
            </p>

            <p className="max-w-xl text-sm leading-relaxed text-[#444444]">
              By leveraging cutting-edge technology and pioneering strategies,
              we simplify the complexities of the financial world, helping you
              seize opportunities and build a prosperous future. Let Assetium be
              your trusted partner in transforming investments into lasting
              value.
            </p>

            <h1 className="text-lg font-semibold leading-loose tracking-tight text-[#1a1919] md:text-xl">
              We Offer Financial Value Without Borders
            </h1>

            {/* <div className="flex flex-col gap-4 pt-4">
              <FeatureItem
                title="Structured Investment & Asset Financing"
                description="We design and deploy asset-backed and project financing structures that support business expansion, capital efficiency, and long-term growth."
                icon={<HandCoins color="#c14511" />}
              />
              <FeatureItem
                title="Commodities & Real Asset Value Creation"
                description="Through SEC-licensed commodities trading and strategic property investments, we transform real assets into structured opportunities with transparent returns."
                icon={<ChartAreaIcon color="#c14511" />}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
