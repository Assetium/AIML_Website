import React, { useEffect, useState } from "react";
import { MediaData } from "@/app/data/media-data";
import PhotoGallery from "@/app/components/photo-gallery";
import MediaContentPagination from "@/app/components/media-content-pagination";
import CardOne from "./card-one";
import {
  NewsletterData,
  fetchAndUpdateNewsletterData,
} from "@/app/data/newsletter-data";
import  VideoData  from "../data/videoData";
import { MediaItem } from "@/lib/types";

const ITEMS_PER_PAGE = 6;

const MediaContent: React.FC<{ activeCategory: string }> = ({
  activeCategory,
}) => {
  const [newsletters, setNewsletters] = useState(NewsletterData);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAndUpdateNewsletterData();
      setNewsletters([...NewsletterData]);
    };

    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  // Reset the page to 1 when the category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Combine NewsletterData with MediaData for the "Newsletters" category
  const allMediaItems =
    activeCategory === "Newsletters"
      ? [
          ...MediaData,
          ...newsletters.map((news) => ({
            id: news.id,
            headerImage: news.backgroundImage,
            category: "Newsletters",
            title: news.title,
            contentOne: news.content,
            author: news.performedBy,
            readTime: "5 min",
            // Default or calculated value
          })),
        ]
      : 
      // activeCategory === "Videos"
      //   ? VideoData.map((video) => ({
      //       id: video.id,
      //       headerImage: video?.thumbnail || "",
      //       category: "Videos",
      //       title: video?.title,
      //       contentOne: video?.description,
      //       link: video?.link,
      //     }))
      //   : MediaData;

      activeCategory === "Videos"
  ? VideoData.flatMap((subsidiary) =>
      subsidiary.videos.map((video) => ({
        id: video.id,
        headerImage:
          video.thumbnail ||
          `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
        category: "Videos",
        title: video.title,
        contentOne: video.description || "",
        link: `https://www.youtube.com/embed/${video.id}`,
      }))
    )
  : MediaData;

  // Filter items based on the active category
  const filteredItems = allMediaItems.filter(
    (item) => item.category.toLowerCase() === activeCategory.toLowerCase(),
  );

  // Pagination Logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  console.log("I am here", currentItems);

  return (
    // <div className="py-4">
    //   {activeCategory === "Photos" ? (
    //     <PhotoGallery />
    //   ) : (
    //     <>
    //       {filteredItems.length === 0 ? (
    //         <div className="text-center text-gray-500 text-sm py-6">
    //           No data found for the selected category.
    //           <p>{activeCategory}</p>
    //         </div>
    //       ) : (
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //           {currentItems.map((item: MediaItem) => {
    //             if (
    //               [
    //                 "Insights",
    //                 "Newspaper Publications",
    //                 "Newsletters",
    //                 "Presentations",
    //               ].includes(item.category)
    //             ) {
    //               return <CardOne key={item.id} data={item} />;
    //             }

    //             if (item.category === "Videos") {
    //               return (
    //                 <div key={item.id} className="p-4 rounded shadow-sm">
    //                   <iframe
    //                     className="w-full rounded"
    //                     height="200"
    //                     src={`${item.link}?autoplay=0`}
    //                     title={item.title}
    //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                     allowFullScreen
    //                   ></iframe>

    //                   <p className="text-sm text-[#444444] mt-3">
    //                     {item.title}
    //                   </p>
    //                 </div>
    //               );
    //             }

    //             return null;
    //           })}
    //         </div>
    //       )}
    //       <div className="w-full flex justify-end py-3">
    //         <MediaContentPagination
    //           currentPage={currentPage}
    //           totalItems={filteredItems.length}
    //           itemsPerPage={ITEMS_PER_PAGE}
    //           onPageChange={(page) => setCurrentPage(page)}
    //         />
    //       </div>
    //     </>
    //   )}
    // </div>

    <div className="py-4">
      {activeCategory === "Photos" ? (
        <PhotoGallery />
      ) : activeCategory === "Newsletters" ? (
        <>
          {newsletters?.length === 0 ? (
            <div className="text-center text-gray-500 text-sm py-6">
              No data found for the selected category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentItems?.map((item: MediaItem) => {
                return <CardOne key={item.id} data={item} />;
              })}
            </div>
          )}
        </>
      ) : (
        <>
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-sm py-6">
              No data found for the selected category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentItems.map((item: MediaItem) => {
                if (
                  [
                    "Insights",
                    "Newspaper",
                    "Newsletters",
                    "Presentations",
                  ].includes(item.category)
                ) {
                  return <CardOne key={item.id} data={item} />;
                }

                if (item.category === "Videos") {
                  return (
                    <div key={item.id} className="p-4 rounded shadow-sm">
                      <iframe
                        className="w-full rounded"
                        height="200"
                        src={`${item.link}?autoplay=0`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>

                      <p className="text-sm text-[#444444] mt-3">
                        {item.title}
                      </p>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          )}
          <div className="w-full flex justify-end py-3">
            <MediaContentPagination
              currentPage={currentPage}
              totalItems={filteredItems.length}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MediaContent;
