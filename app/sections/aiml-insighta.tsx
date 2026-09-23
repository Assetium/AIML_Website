import FeaturedInsights from "@/app/components/featured-insight";

export default function AIMLInsights() {
  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                Insights
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              Stay Informed. <span className="text-brand">Invest Better.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-[.8rem] leading-relaxed text-[#1a1919]/55 max-w-sm md:text-right">
              Latest insights on investment strategies, market trends, and
              economic developments from Assetium Investment Managers.
            </p>
            <a
              href="/media"
              className="inline-flex items-center gap-1.5 text-[12px] font-bold text-brand hover:text-brand/70 transition-colors uppercase tracking-wider"
            >
              View All Insights
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </a>
          </div>
        </div>

        <FeaturedInsights subsidiary="aiml" featuredOnly={false} />
      </div>
    </section>
  );
}
