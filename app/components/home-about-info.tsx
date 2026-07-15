import React from "react";

interface BadgeExperienceProps {
  years: string;
  text: string;
}

const BadgeExperience: React.FC<BadgeExperienceProps> = ({ years, text }) => {
  return (
    <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 bg-white rounded-full shadow-lg flex flex-col items-center justify-center w-20 h-20">
      <span className="text-orange-500 font-bold text-xl">{years}</span>
      <span className="text-gray-700 text-xs">{text}</span>
    </div>
  );
};

export default BadgeExperience;
