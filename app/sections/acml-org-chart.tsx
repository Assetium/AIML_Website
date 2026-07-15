import Image from "next/image";
import eucharia from "@/public/acml/management-staff/eucharia.jpeg";
import victoria from "@/public/acml/management-staff/victoria.jpeg";
import donalson from "@/public/acml/management-staff/donalson.jpeg";
// import tijani from "@/public/acml/management-staff/tijani.png"
// import rilwan from "@/public/acml/management-staff/rilwan.jpeg";
// import anthony from "@/public/acml/management-staff/anthony.jpeg";

/* ─────────────────────────── data ─────────────────────────── */

const COO = {
  name: "Eucharia Ileka",
  title: "Chief Operating Officer",
  role: "COO",
  image: eucharia,
};

const midTier = [
  {
    id: 1,
    name: "Victoria Olusegun",
    title: "Head of Finance",
    image: victoria,
    initials: "VO",
  },
  {
    id: 2,
    name: "Donaldson Dikoru",
    title: "Head of Internal Control / Risk",
    image: donalson,
    initials: "DD",
  },
];

// const businessHeads = [
//   {
//     id: 1,
//     name: "Tijani Abdulazeez",
//     title: "Head, Commodity Business",
//     image: tijani,
//     initials: "TA",
//   },
//   {
//     id: 2,
//     name: "Adebayo Rilwan",
//     title: "Ag. Head, AIML",
//     image: rilwan,
//     initials: "AR",
//   },
//   {
//     id: 3,
//     name: "Anthony Akinola",
//     title: "Head of Hospitality and Real Estate",
//     image: anthony,
//     initials: "HH",
//   },
//   {
//     id: 4,
//     name: "",
//     title: "Head of Business Development",
//     image: null,
//     initials: "BD",
//   },
// ];

/* ─────────────────────── sub-components ───────────────────── */

// function Connector() {
//   return (
//     <div className="flex flex-col items-center my-2">
//       <div className="w-px h-8 bg-gradient-to-b from-brand/50 to-brand/20" />
//       <div className="w-1.5 h-1.5 rounded-full bg-brand opacity-60" />
//     </div>
//   );
// }

function HorizontalBridge({ cols }: { cols: number }) {
  // draws the T-junction line above a grid of `cols` cards
  return (
    <div className="flex flex-col items-center w-full mb-0">
      <div className="w-px h-6 bg-gradient-to-b from-brand/50 to-brand/30" />
      <div
        className="h-px bg-brand/30 w-full"
        style={{ maxWidth: cols === 2 ? "420px" : "900px" }}
      />
      <div className="flex w-full justify-around" style={{ maxWidth: cols === 2 ? "420px" : "900px" }}>
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-px h-6 bg-brand/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

type Person = {
  id: number;
  name: string;
  title: string;
  image: ReturnType<typeof Object.assign> | null;
  initials: string;
};

function PersonCard({ person, size = "sm" }: { person: Person; size?: "sm" | "md" }) {
  const avatarSize = size === "md" ? "w-24 h-24" : "w-20 h-20";
  return (
    <div className="group relative border border-white/[0.07] hover:border-brand/40 bg-white/[0.02] hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col items-center text-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(193,69,17,0.07) 0%, transparent 65%)" }}
      />
      {person.image ? (
        <div className={`relative ${avatarSize} rounded-full mb-4 border border-brand/30 group-hover:ring-2 group-hover:ring-brand group-hover:shadow-[0_0_20px_rgba(193,69,17,0.18)] transition-all duration-300 overflow-hidden shrink-0`}>
          <Image src={person.image} alt={person.name} fill className="object-cover object-top" sizes="96px" />
        </div>
      ) : (
        <div className={`${avatarSize} rounded-full mb-4 border border-brand/30 group-hover:ring-2 group-hover:ring-brand transition-all duration-300 shrink-0 bg-brand/10 flex items-center justify-center`}>
          <span className="text-brand font-semibold text-base">{person.initials}</span>
        </div>
      )}
      {person.name && (
        <h3 className="text-[0.82rem] font-semibold text-[#f5ede3] leading-snug mb-1">{person.name}</h3>
      )}
      <p className="text-[9px] tracking-[0.14em] uppercase text-brand leading-relaxed">{person.title}</p>
      <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent" />
    </div>
  );
}

/* ─────────────────────────── main ─────────────────────────── */

export default function ACMLOrgChart() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-5 lg:px-10 xl:px-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 35% at 50% 0%, rgba(193,69,17,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1400px] mx-auto relative">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand mb-3">
            Operational Structure
          </p>
          <h2 className="text-title-xl2 lg:text-title-xl font-semibold tracking-tight text-[#f5ede3] leading-tight mb-6">
            Management Team
          </h2>
          <div className="h-px w-18 mx-auto bg-gradient-to-r from-transparent via-brand to-transparent" />
        </div>

        {/* ── Tier 1: COO ── */}
        <div className="flex justify-center">
          <div className="group relative border border-brand/30 hover:border-brand/60 transition-all duration-300 hover:-translate-y-1.5 p-8 md:p-10 w-full max-w-[480px] bg-white/[0.03]">
            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand" />
            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand" />
            <div className="flex flex-col sm:flex-row gap-7 items-center sm:items-start text-center sm:text-left">
              <div className="relative w-28 h-28 rounded-full shrink-0 border border-brand/40 group-hover:ring-2 group-hover:ring-brand group-hover:shadow-[0_0_24px_rgba(193,69,17,0.2)] transition-all duration-300 overflow-hidden">
                <Image src={COO.image} alt={COO.name} fill className="object-cover object-top" sizes="112px" />
              </div>
              <div>
                <p className="text-[9px] tracking-[0.35em] uppercase text-brand mb-1">{COO.role}</p>
                <h3 className="text-title-md font-semibold text-[#f5ede3] leading-snug mb-1">{COO.name}</h3>
                <p className="text-sm italic text-[#f5ede3]/40">{COO.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Connector to Tier 2 ── */}
        <div className="flex flex-col items-center">
          <HorizontalBridge cols={2} />
        </div>

        {/* ── Tier 2: Head of Finance + Head of Internal Control ── */}
        <div className="grid grid-cols-1 xsm:grid-cols-2 gap-5 max-w-[420px] mx-auto">
          {midTier.map((person) => (
            <PersonCard key={person.id} person={person} size="md" />
          ))}
        </div>

        {/* ── Connector to Tier 3 ── */}
        {/* <div className="flex flex-col items-center">
          <HorizontalBridge cols={4} />
        </div> */}

        {/* ── Tier 3: Business Heads ── */}
        {/* <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[900px] mx-auto">
          {businessHeads.map((person) => (
            <PersonCard key={person.id} person={person} size="sm" />
          ))}
        </div> */}

      </div>
    </section>
  );
}
