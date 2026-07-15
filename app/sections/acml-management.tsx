import Image from "next/image";
import victoria from "@/public/acml/management-staff/victoria.jpeg";
import eucharia from "@/public/acml/management-staff/eucharia.jpeg";
import rilwan from "@/public/acml/management-staff/tijani.png";
// import kelvin from "@/public/acml/management-staff/kelvin.png";
import donalson from "@/public/acml/management-staff/donalson.jpeg";
import monsurat from "@/public/group-management/monsurat.png";

const leaders = [
  {
    id: 1,
    name: "Monsurat Ayoola",
    title: "Managing Director / Chief Executive Officer",
    image: monsurat,
    bio: "Visionary leader with 20+ years driving strategic growth across asset management and financial services.",
    isCEO: true,
  },
  {
    id: 2,
    name: "Eucharia Ileka",
    title: "Chief Operating Officer",
    image: eucharia,
    bio: "Seasoned finance executive specializing in capital allocation and portfolio performance.",
  },
  {
    id: 3,
    name: "Victoria Olusegun",
    title: "Head of Finance",
    image: victoria,
    bio: "Leads Assetium's investment strategy with a sharp focus on emerging market opportunities.",
  },
  {
    id: 4,
    name: "Tijani Abdulazeez",
    title: "Head, Commodity Trading",
    image: rilwan,
    bio: "Drives operational excellence and scalable infrastructure across all business units.",
  },
  {
    id: 5,
    name: "Donalson Dikoru",
    title: "Head, Risk/ Internal Control",
    image: donalson,
    bio: "Architect of Assetium's digital transformation and proprietary fintech platforms.",
  },
];

const CEO = leaders[0];
const team = leaders.slice(1);

export default function LeadershipSection() {
  return (
    <section className="bg-[#0f0f0f] py-20 px-5 lg:px-10 xl:px-20 relative overflow-hidden">
      {/* Subtle radial glow at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(193,69,17,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand mb-3">
            The People Behind the Vision
          </p>
          <h2 className="text-title-xl2 lg:text-title-xl font-semibold tracking-tight text-[#f5ede3] leading-tight mb-6">
            Our Leadership
          </h2>
          <div className="h-px w-18 mx-auto bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>

        {/* CEO Card */}
        <div className="flex justify-center mb-8">
          <div className="group relative border border-brand/30 hover:border-brand/60 transition-all duration-300 hover:-translate-y-1.5 p-8 md:p-10 w-full max-w-[540px] bg-white/[0.03]">
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand" />

            <div className="flex flex-col sm:flex-row gap-7 items-center sm:items-start text-center sm:text-left">
              {/* Avatar */}
              <div className="relative w-28 h-28 rounded-full shrink-0 border border-brand/40 group-hover:ring-2 group-hover:ring-brand group-hover:shadow-[0_0_24px_rgba(193,69,17,0.2)] transition-all duration-300 overflow-hidden">
                <Image
                  src={CEO.image}
                  alt={CEO.name}
                  fill
                  className="object-cover object-top"
                  sizes="112px"
                />
              </div>

              {/* Info */}
              <div>
                <p className="text-[9px] tracking-[0.35em] uppercase text-brand mb-1">
                  MD / CEO
                </p>
                <h3 className="text-title-md font-semibold text-[#f5ede3] leading-snug mb-1">
                  {CEO.name}
                </h3>
                <p className="text-sm italic text-[#f5ede3]/40 mb-4">
                  {CEO.title}
                </p>
                <p className="text-sm text-[#f5ede3]/70 leading-relaxed font-light">
                  {CEO.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-px h-9 bg-gradient-to-b from-brand/50 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand opacity-60" />
        </div>

        {/* Team Grid — 4 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[1100px] mx-auto">
          {team.map((leader) => (
            <div
              key={leader.id}
              className="group relative border border-white/[0.07] hover:border-brand/40 bg-white/[0.02] hover:-translate-y-1.5 transition-all duration-300 p-8 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(193,69,17,0.07) 0%, transparent 65%)",
                }}
              />

              {/* Avatar */}
              <div className="relative w-24 h-24 rounded-full mb-4 border border-brand/30 group-hover:ring-2 group-hover:ring-brand group-hover:shadow-[0_0_20px_rgba(193,69,17,0.18)] transition-all duration-300 overflow-hidden shrink-0">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>

              <h3 className="text-title-xsm font-semibold text-[#f5ede3] leading-snug mb-1">
                {leader.name}
              </h3>
              <p className="text-[10px] tracking-[0.14em] uppercase text-brand mb-3">
                {leader.title}
              </p>
              <p className="text-[.7rem] text-[#f5ede3]/55 leading-relaxed font-light">
                {leader.bio}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
