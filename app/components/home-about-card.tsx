import React from "react";

interface HomeAboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HomeAboutCard: React.FC<HomeAboutCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="text-orange-500">{icon}</div>
      <div className="gap-3">
        <h4 className="font-semibold text-sm mb-2 text-gray-900">{title}</h4>
        <p className="text-xs leading-relaxed text-[#444444]">{description}</p>
      </div>
    </div>
  );
};

export default HomeAboutCard;
