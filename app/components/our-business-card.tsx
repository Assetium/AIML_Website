// import { ArrowUpRightFromCircle } from "lucide-react";
import Image from "next/image";

interface OurBusinessCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function OurBusinessCard({
  title,
  description,
  imageSrc,
}: OurBusinessCardProps) {
  return (
    <div
      className="
        group relative rounded-2xl bg-[#F6F8FB] p-4 overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-2 h-[420px]"
    >
      {/* Header */}

      {/* Illustration */}
      <div className="h-[280px] w-[50px] overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={false}
          className="
      object-cover
      transition-transform duration-500 ease-out
      group-hover:scale-110
    "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Bottom Info Card */}

      <div
        className="
          absolute bottom-4 left-4 right-4
          bg-white rounded-xl p-3
          gap-5
          shadow-sm
          transition-all duration-300
          
        "
      >
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-[1rem] group-hover:text-[#c14511] font-semibold text-[#444444]">
            {title} <span className="ml-1">→</span>
          </h3>
        </div>
        <p className="text-xs text-[#1a1919] leading-snug">{description}</p>
      </div>
    </div>
  );
}
