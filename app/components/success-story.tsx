import Image from "next/image";
import React from "react";

interface SuccessStoryProps {
  headerImage: string; // URL or path to the header image
  companyName: string; // Name of the company
  profitability: string; // Profitability details
  annualReturns: string; // Annual returns information
  partnershipDuration: string; // Duration of the partnership
  bodyImages?: string[]; // Optional additional images
  storyContent: string; // Detailed success story text
  additionalItems?: string[]; // Optional list of additional related items
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  headerImage,
  companyName,
  profitability,
  annualReturns,
  partnershipDuration,
  bodyImages = [],
  storyContent,
  additionalItems = [],
}) => {
  return (
    <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
      {/* Header Section */}
      <div className="relative w-full h-[220px] md:h-[350px] overflow-hidden rounded-lg shadow-md">
        <Image
          src={headerImage}
          alt={`${companyName} Header`}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="mt-6 space-y-6 text-[#444444]">
        <h2 className="text-3xl font-semibold text-gray-800">
          Success Story: {companyName}
        </h2>
        <p className="text-lg font-medium text-gray-600">
          Partnering with Assetium Consult
        </p>
        <p className="text-base md:text-lg leading-7 text-gray-700">
          {storyContent}
        </p>

        {/* Key Details */}
        <div className="mt-6 space-y-4">
          <p className="text-base md:text-lg">
            <span className="font-semibold text-gray-800">Profitability:</span>{" "}
            {profitability}
          </p>
          <p className="text-base md:text-lg">
            <span className="font-semibold text-gray-800">Annual Returns:</span>{" "}
            {annualReturns}
          </p>
          <p className="text-base md:text-lg">
            <span className="font-semibold text-gray-800">
              Partnership Duration:
            </span>{" "}
            {partnershipDuration}
          </p>
        </div>

        {/* Body Images */}
        {bodyImages.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bodyImages.map((image, index) => (
              <div
                key={index}
                className="w-full h-[250px] rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={image}
                  alt={`${companyName} Body Image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        {/* Additional Items */}
        {additionalItems.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800">
              Additional Insights:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-base text-gray-700">
              {additionalItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessStory;
