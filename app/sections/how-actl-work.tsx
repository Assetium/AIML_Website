import {
  //BoxSelect,
  //Calendar,
  CalendarArrowUp,
  Plug2Icon,
  Recycle,
  Users,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Open an Account",
    description:
      "Begin by creating your Assetium account. Quick, straightforward, and fully guided.",
    icon: <Users className="w-7 h-7" />,
  },
  {
    number: "02",
    title: "Select a Cycle",
    description:
      "Choose the commodity cycle that fits your goals and commit your capital.",
    icon: <CalendarArrowUp className="w-7 h-7" />,
  },
  {
    number: "03",
    title: "We Deploy & Operate",
    description:
      "Assetium deploys your capital into the active cycle. We manage everything.",
    icon: <Plug2Icon className="w-7 h-7" />,
  },
  {
    number: "04",
    title: "Receive Your Returns",
    description:
      "At cycle completion, costs are settled and your returns are paid out or rolled over.",
    icon: <Recycle className="w-7 h-7" />,
  },
];

export default function ATCHowItWorks() {
  return (
    <section className="relative bg-[#ffffff] py-12 px-4 md:px-20 lg:px-8overflow-hidden">
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a1919 1px, transparent 1px), linear-gradient(90deg, #1a1919 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                How It Works
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              Getting Started with <span className="text-brand">ATC</span>
            </h2>
          </div>
          <p className="text-[.8rem] leading-relaxed text-foreground max-w-sm md:text-right">
            Designed to make participation in commodity trading accessible,
            transparent, and professionally managed.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-brand/10 via-brand/40 to-brand/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group flex flex-col items-start lg:items-center text-left lg:text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-7">
                  {/* Outer ring */}
                  <div className="w-[104px] h-[104px] rounded-full border-2 border-dashed border-brand/20 group-hover:border-brand/50 transition-colors duration-500 flex items-center justify-center">
                    {/* Inner filled circle */}
                    <div className="w-[76px] h-[76px] rounded-full bg-white border border-black/[0.07] shadow-sm group-hover:bg-brand group-hover:border-brand transition-all duration-500 flex items-center justify-center text-[#1a1919]/60 group-hover:text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step number badge */}
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-brand text-white text-[10px] font-black flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-[14px] font-bold text-[#1a1919] mb-2 group-hover:text-brand transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[.75rem] leading-relaxed text-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
