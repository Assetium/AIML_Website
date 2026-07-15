import ValuesSection from "./CoreValue";

export default function AboutPhilosophy() {
  return (
    <section className="bg-[#f7f4ef] py-24 px-4 md:px-8 overflow-hidden relative">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a1919 1px, transparent 1px), linear-gradient(90deg, #1a1919 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Brand glow — center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/[0.07] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}

        <div className="max-w-7xl mx-auto mb-12 flex items-start gap-4">
          <div className="flex flex-col items-center mt-2">
            <span className="w-2 h-2 rounded-full bg-[#c14511]" />
            <span className="w-px h-10 bg-[#c14511]/55 mt-2" />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1919] leading-snug">
            Our Philosophy
            <span className="block text-[#1a1919]/45 font-semibold">
              Mission & Vision
            </span>
          </h2>
        </div>

        {/* Mission + Vision — side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Mission */}
          <div className="relative bg-[#1a1919] border border-white/[0.07] rounded-2xl p-10 flex flex-col gap-6 overflow-hidden group hover:border-brand/30 transition-all duration-300">
            {/* Background number */}
            <span className="absolute -bottom-6 -right-4 text-[10rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
              01
            </span>

            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-2 text-[10px] font-black text-brand uppercase tracking-[0.3em]">
                <span className="w-4 h-[2px] bg-brand rounded-full" />
                Mission
              </span>
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  stroke="#c14511"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
                </svg>
              </div>
            </div>

            <p className="text-[1.25rem] font-medium text-white leading-[1.55] relative z-10">
              To unlock and grow the value of assets by delivering seamless,
              innovative financial solutions.
            </p>

            <div className="mt-auto pt-6 border-t border-white/[0.06] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[10px] font-bold text-white/25 uppercase tracking-widest">
                What drives every decision we make
              </span>
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-brand rounded-2xl p-10 flex flex-col gap-6 overflow-hidden group">
            {/* Background number */}
            <span className="absolute -bottom-6 -right-4 text-[10rem] font-black text-white/[0.08] leading-none select-none pointer-events-none">
              02
            </span>

            {/* Grain over brand */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none rounded-2xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "128px 128px",
              }}
            />

            <div className="flex flex-col gap-3 relative z-10">
              <span className="flex items-center gap-2 text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">
                <span className="w-4 h-[2px] bg-white/50 rounded-full" />
                Vision
              </span>
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>

            <p className="text-[1.25rem] font-medium text-white leading-[1.55] relative z-10">
              To stand at the apex of achievement, shaping opportunities into
              lasting value.
            </p>

            <div className="mt-auto pt-6 border-t border-white/20 flex items-center gap-2 relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                Where we are headed
              </span>
            </div>
          </div>
        </div>
      </div>
      <ValuesSection />
    </section>
  );
}
