"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ValuesSection from "@/app/sections/CoreValue";
import JobListingCard from "@/app/components/job-listing-card";
import { jobList } from "@/app/data/job-list";
import Image from "next/image";
// import waliyah from "@/public/careers/waliyah.jpeg";
import waliyah2 from "@/public/careers/waliyah2.jpg";
import ayo from "@/public/careers/ayo.jpeg";
import favour from "@/public/careers/favour.jpg";
// import office from "@/public/careers/office.jpeg";
// import kosi from "@/public/careers/kosi.jpeg";
import kosi2 from "@/public/careers/kosi-sitting.jpeg";
import collab from "@/public/careers/gceo.jpeg";
import mimi from "@/public/careers/mimi.jpeg";

// function ImgPlaceholder({ className, label }: { className?: string; label?: string }) {
//   return (
//     <div className={`flex flex-col items-center justify-center gap-2 bg-muted border border-border ${className}`}>
//       <svg
//         width="28"
//         height="28"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.4"
//         className="text-muted-foreground/30"
//       >
//         <rect x="3" y="3" width="18" height="18" rx="2" />
//         <circle cx="8.5" cy="8.5" r="1.5" />
//         <path d="M21 15l-5-5L5 21" />
//       </svg>
//       {label && (
//         <span className="text-[0.7rem] font-medium text-muted-foreground/40">{label}</span>
//       )}
//     </div>
//   );
// }

// lllsdf/
export default function CareersHero() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleViewDetails = (jobId: string) => {
    router.push(`/about-us/careers/jobs/${jobId}`);
  };

  return (
    <main className="min-h-screen bg-background font-[Poppins,sans-serif]">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden bg-background">

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, #c14511 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 100% 0%, black 20%, transparent 70%)",
            maskImage: "radial-gradient(ellipse 80% 80% at 100% 0%, black 20%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid min-h-[520px] grid-cols-1 items-center gap-12 py-22 lg:grid-cols-2 lg:gap-16">

            {/* Copy */}
            <div
              className={`flex flex-col transition-all duration-700 ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.08] px-4 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
                  We&apos;re Hiring
                </span>
              </div>

              <h1 className="mb-5 text-title-xl font-bold leading-[1.1] tracking-tight text-foreground">
                Join Us
              </h1>

              <p className="mb-8 text-[0.96rem] leading-[1.85] text-muted-foreground">
                We are more than just a company — we are a community of innovators, thinkers, and achievers.
                We pride ourselves on creating an environment where creativity meets strategy, and every team
                member is empowered to contribute their unique talents. Our culture is built on collaboration,
                integrity, and a shared passion for excellence in everything we do.
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/25">
                  See Open Roles
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-brand/30 hover:text-brand">
                  Our Culture
                </button>
              </div>
            </div>

            {/* Image mosaic */}
            <div
              className={`grid grid-cols-2 grid-rows-2 gap-3 transition-all delay-150 duration-700 lg:h-[400px] ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {/* <ImgPlaceholder className="col-span-1 row-span-2 rounded-2xl" label="Team photo" /> */}
               <div className="col-span-1 row-span-2 rounded-2xl">
                <Image src={ayo} alt="kosi1" className="h-full w-full object-cover" />
              </div>
              {/* <ImgPlaceholder className="col-span-1 row-span-1 rounded-2xl" label="Office" /> */}
              <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
                <Image src={kosi2} alt="office" className="col-span-1 row-span-1  object-cover object-[50%_38%] rounded-2xl" />
              </div>
               <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
                <Image src={favour} alt="Office"  className="h-full w-full object-cover object-[50%_38%]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRIDE VALUES — existing component
      ══════════════════════════════ */}
      <ValuesSection />

      {/* ══════════════════════════════
          CULTURE SNAPSHOT
      ══════════════════════════════ */}
      <section className="mx-auto max-w-[1280px] px-6 py-22 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="grid grid-cols-3 grid-rows-2 gap-3 lg:h-[380px]">
            {/* <ImgPlaceholder className="col-span-2 row-span-2 rounded-2xl" label="Team event" /> */}
            <div className="col-span-2 row-span-2 rounded-2x">
                <Image src={collab} alt="Waliyah" className="h-full w-full object-cover" />
              </div>
               <div className="col-span-1 row-span-1 rounded-2xl">
                <Image src={waliyah2} alt="Collaboration" className="h-full w-full object-cover" />
              </div>
                 <div className="col-span-1 row-span-1 rounded-2xl">
                <Image src={mimi} alt="Collaboration" className="h-full w-full object-cover" />
              </div>
            {/* <ImgPlaceholder className="col-span-1 row-span-1 rounded-2xl" label="Workshop" /> */}
            {/* <ImgPlaceholder className="col-span-1 row-span-1 rounded-2xl" label="Collab" /> */}
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
              Life at Assetium
            </p>
            <h2 className="text-title-lg font-bold leading-snug tracking-tight text-foreground">
              A place where great work happens
            </h2>
            <p className="text-[0.95rem] leading-[1.8] text-muted-foreground">
              Our offices are built for focus and collaboration. Whether you&apos;re in Abuja, Lagos, or
              working hybrid, you&apos;ll find a culture that pushes you to grow, celebrates your wins,
              and supports your development at every stage of your career.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              {[
                "Competitive compensation & benefits",
                "Hybrid & flexible work arrangements",
                "Career growth & learning opportunities",
                "Diverse & inclusive team culture",
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-[0.6rem] font-bold text-brand">
                    ✓
                  </div>
                  <span className="text-[0.86rem] text-foreground">{perk}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          JOB LISTINGS
      ══════════════════════════════ */}
      <section className="border-t border-border bg-muted py-22">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

          <div className="mb-12 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
                Open Positions
              </p>
              <h2 className="text-title-lg font-bold tracking-tight text-foreground">
                Recent Job Openings
              </h2>
            </div>
            <p className="text-[0.85rem] text-muted-foreground">
              {jobList.length} open role{jobList.length !== 1 ? "s" : ""} across Nigeria
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {jobList.map((job) => (
              <JobListingCard
                key={job.id}
                title={job.jobTitle}
                location={job.location}
                description={job.jobDescription}
                onButtonClick={() => handleViewDetails(job.id)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          OPEN APPLICATION BANNER
      ══════════════════════════════ */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1280px] px-6 py-22 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl bg-brand px-8 py-16 text-center">
            <div className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full bg-white/[0.06]" />
            <div className="pointer-events-none absolute -bottom-16 -right-8 h-72 w-72 rounded-full bg-white/[0.05]" />
            <div className="relative z-10 flex flex-col items-center gap-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                Don&apos;t see your role?
              </p>
              <h2 className="max-w-[480px] text-title-md font-bold leading-snug text-white">
                We&apos;re always looking for exceptional talent
              </h2>
              <p className="max-w-[400px] text-[0.92rem] leading-relaxed text-white/70">
                Send us your CV and a short note about what you&apos;d bring to Assetium. We&apos;ll be in touch.
              </p>
              <a
                href="mailto:hr@assetium.com?subject=Open%20Application%20-%20Assetium"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-brand transition-all hover:-translate-y-px hover:shadow-xl">
                Send an Open Application
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}