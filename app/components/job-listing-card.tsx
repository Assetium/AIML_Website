import React from "react";

interface JobListingCardProps {
  title: string;
  location: string;
  description: string;
  onButtonClick?: () => void;
}

const JobListingCard: React.FC<JobListingCardProps> = ({
  title,
  location,
  description,
  onButtonClick,
}) => {
  // Split "Onsite - Abuja, Nigeria" → workType = "Onsite", locationName = "Abuja, Nigeria"
  const [workType, ...locationParts] = location.split(" - ");
  const locationName = locationParts.join(" - ");

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1a1919] transition-all duration-300 hover:border-brand/40 hover:shadow-[0_0_30px_rgba(193,69,17,0.1)]">

      {/* Subtle brand wash on hover */}
      <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 rounded-2xl bg-brand/[0.04] transition-transform duration-500 ease-out group-hover:scale-y-100" />

      <div className="relative z-10 flex flex-col gap-6 p-7 lg:flex-row lg:items-center lg:justify-between">

        {/* ── Left ── */}
        <div className="flex flex-col gap-3">

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
          </div>

          {/* Title */}
          <h3 className="text-title-xsm font-bold leading-snug text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="max-w-[580px] text-[0.9rem] leading-relaxed text-white/45 line-clamp-2">
            {description}
          </p>

        </div>

        {/* ── Right: CTA ── */}
        <div className="flex shrink-0 items-center lg:items-end">
          <button
            onClick={onButtonClick}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/25"
          >
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>

      {/* Bottom accent bar */}
      <div className="h-[2px] w-0 bg-brand transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

export default JobListingCard;