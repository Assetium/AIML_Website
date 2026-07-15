import Image from "next/image";
import taofeeq from "@/public/home/testimonials/taofeeq.png";
import akanimo from "@/public/home/testimonials/akanimo.png";
import AORN from "@/public/acl/AORN.jpg";
import toba from "@/public/home/testimonials/toba.png";

export default function Testimonials() {
  return (
    <section className="min-h-screen  bg-gradient-to-br from-[#1a1919]  to-[#202020] text-white flex flex-col items-center justify-center px-5 xl:px-20 lg:px-10">
      {/* Header */}

      <div className="flex w-full items-start">
        <div className="mb-12 flex gap-4">
          <div className="flex flex-col items-center mt-2">
            <span className="w-2 h-2 rounded-full bg-[#c14511]" />
            <span className="w-px h-10 bg-[#c14511]/55 mt-2" />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 leading-snug">
            Our Customer Experiences
            <span className="block text-gray-500 text-xl font-semibold">
              Directly from our clients
            </span>
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-8 max-w-7xl w-full">
        {/* Testimonial - Card */}

        <div className="rounded-xl bg-[#1f1e1e] p-5 shadow-inner border border-white/5 hover:border-[#C14511]/40 hover:scale-105 transition-transform duration-500 ease-out">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-black/40 mb-4 ring-2 ring-[#C14511]">
              <Image
                src={akanimo}
                alt="Our Client"
                className="rounded-full"
              ></Image>
            </div>
            <h4 className="font-semibold">Akanimo Etim</h4>
            <p className="text-xs text-gray-600 mb-6">
              Assetium Capital Management
            </p>
            <p className="text-gray-300 text-xs leading-relaxed mb-8">
              As a customer within a short period, you’ve not only met the
              expectations you’ve exceeded it!
            </p>
            <div className="flex gap-1 text-[#C14511]">★★★★★</div>
          </div>
        </div>

        <div className="rounded-xl bg-[#1f1e1e] p-5 shadow-inner border border-white/5 hover:border-[#C14511]/40 hover:scale-105 transition-transform duration-500 ease-out">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-black/40 mb-4 ring-2 ring-[#C14511]">
              <Image
                src={AORN}
                alt="Our Client"
                height={100}
                className="rounded-full"
              ></Image>
            </div>
            <h4 className="font-semibold">Aorn International Consult</h4>
            <p className="text-xs text-gray-500 mb-6">Assetium Consult</p>
            <p className="text-gray-300 text-xs leading-relaxed mb-8">
              Their funding and management support have been transformative for
              my business.
            </p>
            <div className="flex gap-1 text-[#C14511]">★★★★★</div>
          </div>
        </div>

        <div className="rounded-xl bg-[#1f1e1e] p-5 shadow-inner border border-white/5 hover:border-[#C14511]/40 hover:scale-105 transition-transform duration-500 ease-out">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-black/40 mb-4 ring-2 ring-[#C14511]">
              <Image
                src={taofeeq}
                alt="Our Client"
                className="rounded-full"
              ></Image>
            </div>
            <h4 className="font-semibold">Taofeeq Amolegbe</h4>
            <p className="text-xs text-gray-600 mb-6">
              Assetium Capital Management
            </p>
            <p className="text-gray-300 text-xs leading-relaxed mb-8">
              Their team of experts has been helping me navigate the market and
              make informed investment decisions.
            </p>
            <div className="flex gap-1 text-[#C14511]">★★★★★</div>
          </div>
        </div>

        <div className="rounded-xl bg-[#1f1e1e] p-5 shadow-inner border border-white/5 hover:border-[#C14511]/40 hover:scale-105 transition-transform duration-500 ease-out">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-black/40 mb-4 ring-2 ring-[#C14511]">
              <Image
                src={toba}
                alt="Our Client"
                className="rounded-full"
              ></Image>
            </div>{" "}
            <h4 className="font-semibold">Mercy Aigbe</h4>
            <p className="text-xs text-gray-500 mb-6">Asseitum Properties</p>
            <p className="text-gray-300 text-xs leading-relaxed mb-8">
              The serviced apartments provided a seamless blend of luxury and
              premium. I felt right at home!
            </p>
            <div className="flex gap-1 text-[#C14511]">★★★★★</div>
          </div>
        </div>
      </div>
    </section>
  );
}
