import FeaturedInsights from "../components/featured-insight";

const HomeInsights = () => {
  return (
    <div className="flex flex-col items-start justify-center mx-auto gap-3 px-5 lg:px-10 xl:px-20 xsm:py-8 py-8">
      <div>
        <div className="">
          <h3 className="font-semibold leading-tight tracking-tighter pb-5 text-3xl lg:text-title-xl text-[#444444]">
            Explore Our Featured Insights
          </h3>
          <p className=" font-normal text-[16px] lg:text-[17px] text-[#444444]">
            Latest insights on updates within and outside the company,
            investment strategies, market trends, and economic developments to
            make informed decisions and maximize your returns.
          </p>
        </div>
      </div>

      <FeaturedInsights />
    </div>
  );
};

export default HomeInsights;

/* 
import React, { useEffect, useState } from "react";
import CardOne from "@/app/components/card-one";
import axios from "axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define the type for blog items
interface BlogItem {
  id: string;
  postTitle: string;
  body: string;
  displayImage: string;
  postImage: string;
  categories: string;
  isFeaturedPost: string;
  link: string;
  createdAt: string;
}

const Insights = () => {
  const [featuredMedia, setFeaturedMedia] = useState<BlogItem[]>([]); // State for blog data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get<BlogItem[]>(
          "http://api.portal.assetium.com//api/v1/blog"
        );
        const data = response.data;

        // Filter for featured media
        const featured = data.filter((item) => item.isFeaturedPost).slice(0, 6);
        setFeaturedMedia(featured);
      } catch (err) {
        setError("Failed to load insights. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render loading state
  if (loading) {
    return (
      <div className="text-center text-gray-500">
        Loading featured insights...
      </div>
    );
  }

  // Render error state
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-start justify-center mx-auto gap-3 px-5 lg:px-10 xl:px-20">
      <div>
        <div className="">
          <h3 className="font-semibold leading-tight tracking-tighter pb-5 text-title-lg lg:text-title-xl text-[#444444] ">
            Explore Our Featured Insights
          </h3>
          <p className="lg:leading-8 text-[13px] md:text-lg lg:text-xl font-medium text-[#444444]">
            Latest insights on investment strategies, market trends, and
            economic developments to make informed decisions and maximize your
            returns.
          </p>
        </div>
      </div>

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

export default Insights;
 */
