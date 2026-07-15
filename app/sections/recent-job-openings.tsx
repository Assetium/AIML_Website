"use client";

import React from "react";
import { useRouter } from "next/navigation";
import JobListingCard from "@/app/components/job-listing-card";
import { jobList } from "@/app/data/job-list";

const RecentJobOpenings = () => {
  const router = useRouter();

  const handleViewDetails = (jobId: string) => {
    router.push(`/about-us/careers/jobs/${jobId}`);
  };

  return (
    <section className="bg-[#111110]">
      <div className="mx-auto max-w-[1280px] px-6 py-22 lg:px-10">

        {/* Section header */}
        <div className="mb-12 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="block h-[2px] w-6 rounded-full bg-brand" />
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand">
                Open Positions
              </p>
            </div>
            <h2 className="text-title-lg font-bold tracking-tight text-white">
              Recent Job Openings
            </h2>
          </div>
          <p className="text-[0.85rem] text-white/40">
            {jobList.length} open role{jobList.length !== 1 ? "s" : ""} across Nigeria
          </p>
        </div>

        {/* Job cards */}
        <div className="flex flex-col gap-4">
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
  );
};

export default RecentJobOpenings;