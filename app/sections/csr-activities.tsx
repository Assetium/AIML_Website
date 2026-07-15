"use client";

import React, { useEffect, useState } from "react";
import CardOne from "@/app/components/card-one";
import { MediaData, fetchAndUpdateMediaData } from "@/app/data/media-data";
import { MediaItem } from "@/lib/types"; // Ensure the correct path to MediaItem

const CSRActivities = () => {
  // Specify the state type as an array of MediaItem
  const [csrActivitiesData, setCsrActivitiesData] = useState<MediaItem[]>([]);

  useEffect(() => {
    const fetchCSRData = async () => {
      // Fetch and update the global MediaData array
      await fetchAndUpdateMediaData();

      // Filter CSR activities from the updated MediaData
      const filteredData = MediaData.filter((item) => item.category === "csr");
      setCsrActivitiesData(filteredData); // Set the filtered data
    };

    fetchCSRData();
  }, []);

  return (
    <div className="py-8 lg:py-15 px-5 lg:px-10 xl:px-20 my-8">
      <div className="">
        <h3 className="font-semibold leading-tight tracking-tighter pb-5 text-title-lg lg:text-title-xl text-[#444444]">
          Investment in Corporate Social Responsibility
        </h3>
        <p className=" font-normal text-[16px] lg:text-[17px] text-[#444444]">
          At Assetium, we view corporate social responsibility (CSR) not just as
          a duty but as an opportunity to drive meaningful impact.
        </p>
      </div>
      <div className="grid gap-5 my-7 xsm:grid-cols-2 grid-cols-1">
        {csrActivitiesData.length > 0 ? (
          csrActivitiesData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between basis-full xsm:basis-1/2"
            >
              <CardOne data={item} />
            </div>
          ))
        ) : (
          <p className="text-left text-gray-500">
            No CSR activities are available at this time.
          </p>
        )}
      </div>
    </div>
  );
};

export default CSRActivities;
