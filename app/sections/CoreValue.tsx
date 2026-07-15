// import Link from "next/link";

// const values = [
//   {
//     letter: "P",
//     title: "Professionalism",
//     description: "We uphold the highest standards in every action, ",
//     href: "#",
//   },
//   {
//     letter: "R",
//     title: "Responsiveness",
//     description:
//       "We act with speed and clarity, turning opportunities into progress",
//     href: "#",
//   },
//   {
//     letter: "I",
//     title: "Innovation",
//     description:
//       "We design smarter, future-ready solutions that unlock new dimensions of value.",
//     href: "#",
//   },
//   {
//     letter: "D",
//     title: "Diversity",
//     description:
//       "We embrace wide perspectives and talents, fostering a culture of inclusion.",
//     href: "#",
//   },
//   {
//     letter: "E",
//     title: "Environmentally Friendly",
//     description:
//       "We commit to responsible practices that protect the environment",
//     href: "#",
//   },
// ];

// export default function ValuesSection() {
//   return (
//     <section className="bg-[#f5f5f5] py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto mb-12 flex items-start gap-4">
//         <div className="flex flex-col items-center mt-2">
//           <span className="w-2 h-2 rounded-full bg-[#c14511]" />
//           <span className="w-px h-10 bg-[#c14511]/55 mt-2" />
//         </div>

//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
//           Our Core Values
//           <span className="block text-gray-500 font-semibold">
//             These are our principles
//           </span>
//         </h2>
//       </div>
//       <div className="max-w-[1280px] mx-auto">
//         <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {values.map((value, index) => (
//             <ValueCard key={index} {...value} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// interface ValueCardProps {
//   letter: string;
//   title: string;
//   description: string;
//   href: string;
// }

// function ValueCard({ letter, title, description, href }: ValueCardProps) {
//   return (
//     <section>
//       {" "}
//       <Link
//         href={href}
//         className="group relative shadow-inner border border-brand/20 hover:border-[#C14511]/40 transition-transform duration-500 ease-out bg-white rounded-lg px-6 pt-8 pb-6 flex flex-col items-center text-center hover:shadow-lg  overflow-hidden"
//       >
//         {/* Brand fill on hover — slides up from bottom */}
//         <span className="absolute inset-0 bg-[#1f1e1e] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out rounded-lg pointer-events-none" />

//         {/* Circle with letter */}
//         <div className="relative z-10 w-16 h-16 rounded-full bg-brand-muted group-hover:bg-white/20 transition-colors duration-300 flex items-center justify-center mb-4">
//           <span className="text-2xl font-bold text-brand group-hover:text-white transition-colors duration-300">
//             {letter}
//           </span>
//         </div>

//         {/* Title */}
//         <h3 className="relative z-10 text-[16px] font-bold text-[#1a1919] group-hover:text-brand leading-tight mb-3 transition-colors duration-300">
//           {title}
//         </h3>

//         {/* Divider */}
//         <span className="relative z-10 block w-8 h-[2px] bg-brand-soft group-hover:bg-white/50 transition-colors duration-300 mb-3 rounded-full" />

//         {/* Description */}
//         <p className="relative z-10 text-[.8rem] leading-relaxed text-[#1a1919]/70 group-hover:text-white/90 transition-colors duration-300">
//           {description}
//         </p>
//       </Link>
//     </section>
//   );
// }

import Link from "next/link";

const values = [
  {
    letter: "P",
    title: "Professionalism",
    description: "We uphold the highest standards in every action, ",
    href: "#",
  },
  {
    letter: "R",
    title: "Responsiveness",
    description:
      "We act with speed and clarity, turning opportunities into progress",
    href: "#",
  },
  {
    letter: "I",
    title: "Innovation",
    description:
      "We design smarter, future-ready solutions that unlock new dimensions of value.",
    href: "#",
  },
  {
    letter: "D",
    title: "Diversity",
    description:
      "We embrace wide perspectives and talents, fostering a culture of inclusion.",
    href: "#",
  },
  {
    letter: "E",
    title: "Environmentally Friendly",
    description:
      "We commit to responsible practices that protect the environment",
    href: "#",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[#f7f4ef] py-16 px-4 md:px-8">
      <div className="flex items-center gap-3 mb-16">
        <span className="block w-6 h-[2px] bg-brand rounded-full" />
        <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
          Our Core values
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  letter: string;
  title: string;
  description: string;
  href: string;
}

function ValueCard({ letter, title, description, href }: ValueCardProps) {
  return (
    <Link
      href={href}
      className="group relative border border-[#1a1919]/10 hover:border-brand/50 transition-all duration-500 ease-out bg-white rounded-lg px-6 pt-8 pb-6 flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(193,69,17,0.15)] overflow-hidden h-full"
    >
      {/* Brand fill on hover */}
      <span className="absolute inset-0 bg-brand scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out rounded-lg pointer-events-none" />

      {/* Circle with letter */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-brand/15 group-hover:bg-white/20 transition-colors duration-300 flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-brand group-hover:text-white transition-colors duration-300">
          {letter}
        </span>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-[16px] font-bold text-[#1a1919] group-hover:text-white leading-tight mb-3 transition-colors duration-300">
        {title}
      </h3>

      {/* Divider */}
      <span className="relative z-10 block w-8 h-[2px] bg-brand/60 group-hover:bg-white/50 transition-colors duration-300 mb-3 rounded-full" />

      {/* Description */}
      <p className="relative z-10 text-[.8rem] leading-relaxed text-[#1a1919]/55 group-hover:text-white/90 transition-colors duration-300">
        {description}
      </p>
    </Link>
  );
}
