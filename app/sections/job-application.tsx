import React from "react";
import JobApplicationForm from "../components/job-application-form";

const JobApplication = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3">
        <div className="w-full flex gap-6 col-span-2">
          <div className="py-10 lg:py-20 px-5 lg:pl-10 xl:pl-20 xl:pr-10 w-full">
            <JobApplicationForm />
          </div>
        </div>

        <div className="hidden md:block bg-[#1a1919] text-white sticky top-14 h-screen">
          <div className="py-25 md:px-8 xl:px-10">
            <p className="text-[12px] font-medium uppercase text-[#c14511]">
              Your journey starts here
            </p>
            <h3 className="leading-tight tracking-tighter my-3 text-title-lg">
              Take the next step in your career with confidence
            </h3>
            <p className="text-[13px] md:text-base">
              Ensure your resume and application reflect your best self. Let us
              help you put your best foot forward as you pursue your dream job.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApplication;
