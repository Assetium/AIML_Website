// import React from "react";
// import Image from "next/image";
// import joinUs from "@/public/about-us/join-uss.png";
// import SectionOne from "../components/section-one";

// const AboutusJoinus = () => {
//   return (
//     <div className="block md:grid grid-cols-3 items-center md:gap-8 gap-12">
//       <div className="col-span-1">
//         <Image src={joinUs} className="min-w-full" alt="" />
//       </div>
//       <div className="col-span-2 md:pr-5 p-5">
//         <SectionOne
//           headerText="Join Our Team"
//           paragraphText1="Ready to shape the future of finance and investment? We’re always seeking talented, driven individuals to join our dynamic team. Whether you’re just starting your career or looking to take it to the next level, we offer incredible opportunities to grow and thrive in an inspiring, collaborative environment."
//           paragraphText2="Be part of a team that drives innovation, collaborates with industry experts, and delivers impactful solutions. If you’re passionate about making a difference in the financial world, explore our career opportunities and take the next step toward building a brighter future with us."
//           leftButtonText="Explore Open Roles"
//           leftButtonHref="/about-us/careers"
//           fontColor="#444444"
//         />
//       </div>
//     </div>
//   );
// };

// export default AboutusJoinus;

export default function JoinOurTeam() {
  return (
    <section className="relative bg-[#111110] py-24 px-4 md:px-8 overflow-hidden">
      {/* Background grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Brand glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/[0.08] blur-[120px] rounded-full pointer-events-none" />

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text content */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                Careers
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-title-xl font-bold text-white leading-tight">
              Join Our <span className="text-brand">Team</span>
            </h2>

            {/* Body copy */}
            <div className="flex flex-col gap-4 border-l-2 border-brand/25 pl-5">
              <p className="text-[.9rem] leading-relaxed text-white/55">
                Ready to shape the future of finance and investment? We&apos;re
                always seeking talented, driven individuals to join our dynamic
                team. Whether you&apos;re just starting your career or looking to
                take it to the next level, we offer incredible opportunities to
                grow and thrive in an inspiring, collaborative environment.
              </p>
              <p className="text-[.9rem] leading-relaxed text-white/55">
                Be part of a team that drives innovation, collaborates with
                industry experts, and delivers impactful solutions. If you&apos;re
                passionate about making a difference in the financial world,
                explore our career opportunities and take the next step toward
                building a brighter future with us.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="about-us/careers"
                className="inline-flex items-center gap-2 bg-brand text-white text-sm font-medium px-7 py-3.5 rounded-md hover:bg-brand/90 transition-colors duration-200 shadow-sm"
              >
                Explore Open Roles
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </a>
              <a
                href="/about-us"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-200"
              >
                Learn about our culture
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — perks grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    stroke="#c14511"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                ),
                label: "Career Growth",
                description:
                  "Clear paths to advance — from analyst to executive.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    stroke="#c14511"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                ),
                label: "Flexible Work",
                description:
                  "Collaborative, results-driven environment built for performance.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    stroke="#c14511"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                label: "Expert Team",
                description:
                  "Work alongside seasoned professionals across every discipline.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    stroke="#c14511"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
                label: "Real Impact",
                description:
                  "Deliver solutions that genuinely transform lives and businesses.",
              },
            ].map((perk, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 flex flex-col gap-3 hover:border-brand/25 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                  {perk.icon}
                </div>
                <h4 className="text-[13px] font-medium text-white">
                  {perk.label}
                </h4>
                <p className="text-[.75rem] leading-relaxed text-white/40">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
