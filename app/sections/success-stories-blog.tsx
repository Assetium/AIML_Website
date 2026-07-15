import React from "react";
import SuccessStory from "@/app/components/success-story";

const SuccessStories = () => {
  return (
    <div className="bg-white py-10">
      <SuccessStory
        headerImage="/path-to-header-image.jpg"
        companyName="GreenFields Agro Ltd."
        profitability="Achieved a 150% increase in net profits over the past 3 years."
        annualReturns="Annual returns grew by 25% year-over-year since 2020."
        partnershipDuration="5 years"
        storyContent="GreenFields Agro Ltd. partnered with Assetium Consult to streamline operations, secure sustainable funding, and implement innovative farming techniques. This partnership has enabled exponential growth in revenue while reducing environmental impact."
        bodyImages={["/path-to-body-image1.jpg", "/path-to-body-image2.jpg"]}
        additionalItems={[
          "Expanded operations to 3 new regions.",
          "Integrated ESG-friendly farming practices.",
          "Gained recognition as a top sustainable agro-business in 2023.",
        ]}
      />
    </div>
  );
};

export default SuccessStories;
