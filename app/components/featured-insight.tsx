"use client";
import React, { useEffect, useState } from "react";
import CardOne from "@/app/components/card-one";
import { MediaData, fetchAndUpdateMediaData } from "../data/media-data"; // Ensure fetchAndUpdateMediaData is imported correctly
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MediaItem } from "@/lib/types";

const FeaturedInsights = () => {
  const [featuredMedia, setFeaturedMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state to show while fetching data

  // Fetch media data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAndUpdateMediaData(); // Fetch and update the MediaData array
        const featured = MediaData.filter((item) => item.isFeatured).slice(
          0,
          10
        );
        setFeaturedMedia(featured); // Reverse the array before setting it to state
      } catch (error) {
        console.error("Error fetching media data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData(); // Trigger the data fetch
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return (
      <div className="text-center text-gray-500 py-5">
        <p>Loading featured insights...</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden py-8 h-full">
      {featuredMedia.length > 0 ? (
        <Carousel className="w-full">
          <CarouselContent>
            {featuredMedia.map((item) => (
              <CarouselItem
                key={item.id}
                className="flex justify-between basis-full xsm:basis-1/2"
              >
                <CardOne data={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center py-3">
            <CarouselNext className="ml-15 w-10 h-10" />
            <CarouselPrevious className="mr-15 w-10 h-10" />
          </div>
        </Carousel>
      ) : (
        <p className="text-center text-gray-500">
          No featured insights are available at this time.
        </p>
      )}
    </div>
  );
};

export default FeaturedInsights;
