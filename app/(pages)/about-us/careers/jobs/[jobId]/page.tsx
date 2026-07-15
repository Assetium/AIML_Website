/* "use client";
import { useParams, useRouter } from "next/navigation";
import { jobList } from "@/app/data/job-list";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import headerImage from "@/public/careers/header-image.png";

const JobDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const jobId = params?.jobId;

  const job = jobList.find((job) => job.id === jobId);

  if (!job) {
    return <div>Job not found.</div>;
  }

  const handleApplyClick = () => {
    router.push(`/about-us/careers/apply?jobId=${jobId}`);
  };

  return (
    <>
      <div className="pt-22">
        <Image src={headerImage} className="min-w-full min-h-full" alt="" />
      </div>
      <div className="px-5 xsm:px-10 lg:px-20 xl:px-[20%] pt-10">
        <div className="flex flex-col gap-7 hederSection pt-3 pb-7">
          <div className=" flex flex-col md:flex-row gap-5 justify-between  items-start md:items-center">
            <div>
              <h3 className="font-semibold leading-tight tracking-tighter text-title-lg lg:text-title-xl text-[#444444] relative">
                {job.title}
              </h3>
              <p className="text-[12px] font-medium text-[#444444]">
                Assetium Consult Limited
              </p>
              <span className="text-[10px] text-gray-500 py-2">
                Remote - Lagos, Nigeria
              </span>
            </div>

            <div className="flex gap-5">
              <Button
                className="text-sm text-background border-none uppercase"
                onClick={handleApplyClick}
              >
                Apply
              </Button>
              <Button
                className="text-sm uppercase"
                variant={"outline"}
                onClick={() => alert("Share this job!")}
              >
                Share
              </Button>
            </div>
          </div>

          <div className="w-full h-[0.2px] bg-gray-200"></div>

          <div>
            <h3 className="tracking-tighter font-medium text-[18px] py-2 text-[#444444]">
              Job Description
            </h3>
            <p className="md:leading-7 text-[13px] md:text-base font-medium text-[#444444] text-justify">
              We’re in search of an Operations Manager to hold a strategic role
              in our company, overseeing the distribution of resources
              throughout Tek Experts. This role is accountable for monitoring
              and achieving all performance targets and ensuring we
              strategically meet all SLAs agreed upon with our clients in a
              global way. You will coach and develop team managers, drive
              overall employee engagement, and ensure financial targets are
              achieved while building and maintaining relationships with key
              client contacts.
            </p>
          </div>

          <div>
            <h3 className="tracking-tighter font-medium text-[18px] py-2 text-[#444444]">
              Responsibilities
            </h3>
            <p className="md:leading-7 text-[13px] md:text-base font-medium text-[#444444] text-justify">
              The M365 team supports online and cloud applications for M365
              customers. As part of the M365 team, you will spend much of your
              time collaborating with your team to bring cases to resolution.
              Some cases will be transferred to a higher tier of support.
              Support Engineers will work with peers, Tech Leads, Subject Matter
              Experts, and Technical Advisors from Microsoft. However, you
              should also be able to work independently, learn the product and
              make troubleshooting decisions on your own.
            </p>
          </div>

          <div className="blog-list">
            <h3 className="tracking-tighter font-medium text-[18px] py-2 text-[#444444]">
              This role will:
            </h3>
            <ul className="text-[#444444]">
              <li className="text-justify">
                Communicate with end users/system administrators/solution
                integrators via phone, email, and/or chat to identify, diagnose,
                and troubleshoot their needs, as well as set expectations and
                deliver guidance on resolving the issue.
              </li>
              <li className="text-justify">
                Provide technical guidance across teams by identifying areas
                requiring expertise on different modules of a solution to
                resolve cases.
              </li>
              <li className="text-justify">
                Apply technical knowledge relevant to the solution using
                technical documentation to identify appropriate remediation
                steps, identify escalated urgent situations impacting business
                priorities, troubleshoot, reproduce customer issues in lab
                environments, and seek guidance from technical leads and subject
                matter experts as needed.
              </li>
              <li className="text-justify">
                Maintain documentation for all cases including queries, process
                steps, and resolutions consistent with customer commitments,
                prescribed protocols, and processes.
              </li>
              <li className="text-justify">
                Mentor junior support engineers as needed or requested by
                management.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full h-[0.2px] bg-gray-200"></div>
            <div className="w-full flex justify-end gap-3">
              <Button className="text-sm text-background border-none uppercase">
                Apply
              </Button>
              <Button className="text-sm uppercase" variant={"outline"}>
                Share
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6 my-4 bg-gray-300">
          <p className="text-sm font-medium  text-[#444444]">
            Assetium will not discriminate in employment and personnel practices
            based on race, sex, age, handicap, religion, national origin, or any
            other basis prohibited by applicable law. Hiring, transferring, and
            promotion practices are performed without regard to the above-listed
            items.
          </p>
        </div>
      </div>
    </>
  );
};

export default JobDetailsPage;
 */

"use client";
import { useParams, useRouter } from "next/navigation";
import { jobList } from "@/app/data/job-list";
import Image from "next/image";
import headerImage from "@/public/careers/header-image.png";
import JobDetails from "@/app/sections/job-details";

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const jobId = params?.jobId;

  const job = jobList.find((job) => job.id === jobId);

  if (!job) {
    return <div>Job not found.</div>;
  }

  const handleApplyClick = () => {
    router.push(`/about-us/careers/apply?jobId=${jobId}`);
  };

  return (
    <>
      <div className="pt-22">
        <Image src={headerImage} className="min-w-full min-h-full" alt="" />
      </div>
      <JobDetails job={job} onApplyClick={handleApplyClick} />
    </>
  );
};

export default Page;
