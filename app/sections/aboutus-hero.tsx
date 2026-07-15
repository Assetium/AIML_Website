// export default AboutUsHero;
import groupPhoto from "@/public/about-us/new-banner-photo.png";
export default function AboutHero() {
  return (
    <section className="relative bg-[#111110] min-h-[90vh] flex flex-col justify-end overflow-hidden px-4 md:px-8 pb-16 pt-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={groupPhoto.src}
          alt=""
          className="w-full h-full object-cover "
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/80 via-transparent to-transparent" />
      </div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Decorative brand line — vertical, far right */}
      <div className="absolute top-32 right-16 bottom-16 w-px bg-gradient-to-b from-transparent via-brand/40 to-transparent hidden xl:block" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 xl:px-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="block w-6 h-[2px] bg-brand rounded-full" />
          <span className="text-brand text-[11px] font-bold uppercase tracking-[0.25em]">
            About Assetium
          </span>
        </div>

        <div className="relative z-10 max-w-[50%] w-full mt-6">
          <h1 className="text-[clamp(1.2rem,7vw,1.6rem)] font-medium text-white leading-[1.3] tracking-tight">
            A diversified ecosystem driving financial optimization and growth
            across alternative investments and strategic solutions.
            <br />
            {/* <span className="text-brand">To Value.</span> */}
          </h1>
        </div>

        <div className="flex flex-col gap-4 text-white z-10 relative mt-6 w-[55%]">
          {/* Row 1 */}
          <div className="flex items-center justify-between w-full gap-3">
            <div className="bg-brand w-full text-center border border-white/[0.3] rounded-full px-4 py-[0.5]">
              Asset Management
            </div>
            <div className="bg-white/[0.17] text-center border border-white/[0.1] rounded-full px-4 py-[0.5] w-full">
              Commodity Broker/ Dealer
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between w-full gap-3">
            <div className="bg-white/[0.17] text-center border border-white/[0.1] rounded-full px-4 py-[0.5] w-full">
              Hospitality & Real Estate
            </div>
            <div className="bg-brand text-center border border-white/[0.1] rounded-full px-4 py-[0.5] w-full">
              Advisory Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
