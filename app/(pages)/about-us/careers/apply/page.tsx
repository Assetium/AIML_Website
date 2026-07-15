/* "use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import JobApplication from "@/app/sections/job-application";

const JobApplicationContent = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-5 overflow-x-hidden">
        Apply for Job {jobId ? `#${jobId}` : ""}
      </h1>
      <JobApplication />
    </div>
  );
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobApplicationContent />
    </Suspense>
  );
};

export default page;
 */

import JobApplication from "@/app/sections/job-application";

interface Props {
  searchParams: { jobId?: string };
}

const page = ({ searchParams }: Props) => {
  const jobId = searchParams?.jobId;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-5 overflow-x-hidden">
        Apply for Job {jobId ? `#${jobId}` : ""}
      </h1>
      <JobApplication />
    </div>
  );
};

export default page;
