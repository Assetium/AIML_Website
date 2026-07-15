// import React from "react";
// import { Button } from "@/components/ui/button";

// interface JobDetailsProps {
//   job: {
//     id: string;
//     jobTitle: string;
//     location: string;
//     jobDescription: string;
//     responsibilities: string[];
//     qualifications: string[];
//     closingDate: string;
//   };
//   onApplyClick: () => void;
// }

// const JobDetails: React.FC<JobDetailsProps> = ({ job, onApplyClick }) => {
//   return (
//     <div className="px-5 xsm:px-10 lg:px-20 xl:px-[20%] pt-10">
//       <div className="flex flex-col gap-7 hederSection pt-3 pb-7">
//         <div className="md:grid grid-cols-3  gap-10 items-center">
//           <div className="col-span-2">
//             <h3 className="font-semibold leading-tight tracking-tighter text-title-lg lg:text-title-xl text-[#444444] relative">
//               {job.jobTitle}
//             </h3>
//             <p className="text-[12px] font-medium text-[#444444]">
//               {job.closingDate}
//             </p>
//             <span className="text-[10px] text-gray-500 py-2">
//               {job.location}
//             </span>
//           </div>
//         </div>

//         <div className="w-full h-[0.2px] bg-gray-200"></div>

//         <div>
//           <h3 className="tracking-tighter font-medium text-[18px] py-2 text-[#444444]">
//             Job Description
//           </h3>
//           <p className="md:leading-7 text-[13px] md:text-base font-medium text-[#444444]">
//             {job.jobDescription}
//           </p>
//         </div>

//         <div>
//           <h3 className="tracking-tighter font-medium text-[18px] py-2 text-[#444444]">
//             Responsibilities
//           </h3>
//           <ul className="text-[#444444] list-disc pl-5">
//             {job.responsibilities.map((item, index) => (
//               <li
//                 key={index}
//                 className="md:leading-7 text-[13px] md:text-base text-[#444444]"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="tracking-tighter font-medium text-[18px] py-2 text-[#444444]">
//             Role Details
//           </h3>
//           <ul className="text-[#444444] list-disc pl-5">
//             {job.responsibilities.map((item, index) => (
//               <li
//                 key={index}
//                 className="md:leading-7 text-[13px] md:text-base text-[#444444]"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="w-full flex items-center justify-center">
//           <Button
//             className="text-sm text-background border-none uppercase w-full"
//             onClick={onApplyClick}
//           >
//             Apply
//           </Button>
//         </div>

//         <div className="p-6 bg-gray-300">
//           <p className="text-[12px] font-medium  text-[#444444]">
//             Assetium will not discriminate in employment and personnel practices
//             based on race, sex, age, handicap, religion, national origin, or any
//             other basis prohibited by applicable law. Hiring, transferring, and
//             promotion practices are performed without regard to the above-listed
//             items.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobDetails;


import React from "react";

interface JobDetailsProps {
  job: {
    id: string;
    jobTitle: string;
    location: string;
    jobDescription: string;
    responsibilities: string[];
    qualifications: string[];
    closingDate: string;
  };
  onApplyClick: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, onApplyClick }) => {
  const [workType, ...locationParts] = job.location.split(" - ");
  const locationName = locationParts.join(" - ");

  const closingFormatted = new Date(job.closingDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#111110] font-[Poppins,sans-serif]">

      {/* ── HEADER ── */}
      <section className="border-b border-white/[0.06] bg-[#0e0e0d]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-2">
            <span className="block h-[2px] w-6 rounded-full bg-brand" />
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
              Job Opening
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

            {/* Left: title + meta */}
            <div className="flex flex-col gap-4">
              <h1 className="text-title-xl font-bold leading-[1.1] tracking-tight text-white">
                {job.jobTitle}
              </h1>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {locationName && (
                  <span className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.05] px-2.5 py-1 text-[0.68rem] font-medium text-white/50">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {locationName}
                  </span>
                )}
                {workType && (
                  <span className="flex items-center gap-1.5 rounded-md border border-brand/20 bg-brand/10 px-2.5 py-1 text-[0.68rem] font-semibold text-brand">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                    {workType}
                  </span>
                )}
                <span className="flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.05] px-2.5 py-1 text-[0.68rem] font-medium text-white/50">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Closes {closingFormatted}
                </span>
              </div>
            </div>

            {/* Right: Apply CTA */}
            <button
              onClick={onApplyClick}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand px-8 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/25"
            >
              Apply for this Role
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">

          {/* ── Main content ── */}
          <div className="flex flex-col gap-10 lg:col-span-2">

            {/* Job Description */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#1a1919] p-7">
              <h2 className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
                Overview
              </h2>
              <h3 className="mb-4 text-[1.2rem] font-bold text-white">Job Description</h3>
              <p className="text-[0.88rem] leading-[1.85] text-white/55">
                {job.jobDescription}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#1a1919] p-7">
              <h2 className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand">
                What you&apos;ll do
              </h2>
              <h3 className="mb-5 text-[1rem] font-bold text-white">Responsibilities</h3>
              <ul className="flex flex-col gap-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span className="text-[0.86rem] leading-relaxed text-white/55">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#1a1919] p-7">
              <h2 className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand">
                What we&apos;re looking for
              </h2>
              <h3 className="mb-5 text-[1rem] font-bold text-white">Qualifications</h3>
              <ul className="flex flex-col gap-3">
                {job.qualifications.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-[0.6rem] font-bold text-brand">
                      ✓
                    </div>
                    <span className="text-[0.86rem] leading-relaxed text-white/55">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equal opportunity disclaimer */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-6 py-5">
              <p className="text-[0.92em] leading-relaxed text-white/30">
                Assetium will not discriminate in employment and personnel practices based on race, sex, age,
                handicap, religion, national origin, or any other basis prohibited by applicable law. Hiring,
                transferring, and promotion practices are performed without regard to the above-listed items.
              </p>
            </div>

          </div>

          {/* ── Sidebar ── */}
          <div className="flex flex-col gap-5 lg:col-span-1">

            {/* Quick info card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#1a1919] p-6">
              <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
                Role Summary
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "Job Title",
                    value: job.jobTitle,
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Location",
                    value: locationName || job.location,
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                  },
                  {
                    label: "Work Type",
                    value: workType,
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                      </svg>
                    ),
                  },
                  {
                    label: "Closing Date",
                    value: closingFormatted,
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    ),
                  },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      {row.icon}
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white/30">
                        {row.label}
                      </p>
                      <p className="text-[0.82rem] font-medium text-white/70">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Apply CTA */}
            <div className="rounded-2xl border border-brand/20 bg-brand/[0.08] p-6">
              <p className="mb-1 text-[0.82rem] font-semibold text-white">
                Ready to join Assetium?
              </p>
              <p className="mb-4 text-[0.75rem] leading-relaxed text-white/40">
                Submit your application and take the next step in your career.
              </p>
              <button
                onClick={onApplyClick}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/25"
              >
                Apply Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default JobDetails;