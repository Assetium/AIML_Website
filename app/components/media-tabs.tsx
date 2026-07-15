import React from "react";

//const categories = ["Insights", "Newspaper", "Newsletters", "Photos", "Videos"];
const categories = ["Insights", "Newspaper", "Newsletters", "Videos"];

interface MediaTabProps {
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

const MediaTabs: React.FC<MediaTabProps> = ({
  onCategorySelect,
  activeCategory,
}) => {
  return (
    <div className="flex overflow-x-auto gap-4 py-4 border-b bg-white">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`h-7 px-4 py-1 whitespace-nowrap rounded text-sm ${
            activeCategory === category
              ? "bg-[#c14511] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MediaTabs;
