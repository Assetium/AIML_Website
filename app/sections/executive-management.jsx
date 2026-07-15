import React from "react";
const leaders = [
  {
    name: "Monsurat Iyabode Amolegbe A.",
    title: "Group CEO/ Managing Director",
    subsidiary: "Assetium Capital Management Limited",
    image: "/group-management/monsurat.png",
  },
   {
    name: "Afolabi Lukman Olajide",
    title: "Managing Director",
    subsidiary: "Assetium Investment Management Limited",
    image: "/group-management/afolabi.png",
  },
  {
    name: "Ayoola Gbadegesin Abdulrazqh",
    title: "Managing Director",
    subsidiary: "Assetium Properties Limited",
    image: "/group-management/ayoola.jpg",
  },
  {
    name: "Joy Olaye",
    title: "Acting Managing Director",
    subsidiary: "Assetium Consult Limited",
    image: "/group-management/yetunde.png",
  },
 
];

export default function GroupLeadership() {
  return (
    <section className="bg-[#faf9f7] py-24 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                Our Amazing Leaders
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              Group Executive <span className="text-brand">Management</span>
            </h2>
          </div>
          <p className="text-[.9rem] leading-relaxed text-[#1a1919]/90 max-w-sm md:text-right">
            The executive team driving Assetium&apos;s vision across every subsidiary
            — leading with purpose, expertise, and accountability.
          </p>
        </div>

        {/* Leaders grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leaders.map((l, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-black/[0.07] overflow-hidden hover:border-brand/25 hover:shadow-[0_4px_24px_rgba(193,69,17,0.07)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[#f4f4f3]">
                {l.image ? (
                  <>
                    <img
                      src={l.image}
                      alt={l.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" /> */}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-black/[0.12] flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-8 h-8"
                        stroke="#1a1919"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.2"
                      >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-[#1a1919]/25 uppercase tracking-widest">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="px-5 py-5 flex flex-col gap-1 border-t border-black/[0.05]">
                <h3 className="text-[13px] font-bold text-[#1a1919] leading-snug">
                  {l.name ?? "To Be Announced"}
                </h3>
                <span className="text-[10px] font-black text-brand uppercase tracking-widest">
                  {l.title}
                </span>
                <p className="text-[11px] text-[#1a1919]/40 mt-0.5">
                  {l.subsidiary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
