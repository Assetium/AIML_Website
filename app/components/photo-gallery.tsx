// import React, { useState, useEffect } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import Masonry from "react-masonry-css";
// import Image from "next/image";

// const fetchRandomPhotos = (count: number) => {
//   return Array.from({ length: count }, (_, index) => {
//     const isLandscape = Math.random() > 0.5;
//     const width = isLandscape ? 500 : 300;
//     const height = isLandscape ? 300 : 500;

//     return {
//       src: `https://picsum.photos/seed/${
//         index + Math.random() * 1000
//       }/${width}/${height}`,
//       width,
//       height,
//       title: `Random Image ${index + 1}`,
//     };
//   });
// };

// interface PhotoProps {
//   src: string;
//   title: string;
//   width: number;
//   height: number;
// }

// const PhotoGallery: React.FC = () => {
//   const breakpointColumnsObj = {
//     default: 3,
//     1100: 2,
//     569: 1,
//   };

//   const [photos, setPhotos] = useState<PhotoProps[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

//   useEffect(() => {
//     loadPhotos(10);
//   }, []);

//   const loadPhotos = async (count: number) => {
//     setLoading(true);
//     const newPhotos = fetchRandomPhotos(count);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
//     setLoading(false);
//   };

//   const handleLoadMore = () => {
//     loadPhotos(10);
//   };

//   return (
//     <div>
//       <h2 className="text-center text-xl font-semibold my-4">Gallery</h2>
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className="my-masonry-grid"
//         columnClassName="my-masonry-grid_column"
//       >
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             className="relative bg-gray-200 rounded overflow-hidden"
//             style={{
//               width: "100%",
//               paddingBottom: `${(photo.height / photo.width) * 100}%`,
//             }}
//             onClick={() => setLightboxIndex(index)} // Open Lightbox on click
//           >
//             <Image
//               src={photo.src}
//               alt={photo.title}
//               layout="responsive" // Makes the image responsive
//               width={photo.width} // Use width and height to define aspect ratio
//               height={photo.height}
//               className="absolute inset-0 w-full h-full object-cover mb-2 transition-opacity duration-500"
//               onLoad={
//                 (e) => (e.currentTarget.style.opacity = "1") // Fade-in effect
//               }
//               style={{ opacity: 0 }}
//             />
//           </div>
//         ))}
//       </Masonry>
//       {lightboxIndex !== null && (
//         <Lightbox
//           open={lightboxIndex !== null}
//           close={() => setLightboxIndex(null)}
//           index={lightboxIndex} // Start from clicked image
//           slides={photos.map((photo) => ({
//             src: photo.src,
//             title: photo.title,
//           }))}
//         />
//       )}
//       {/*   {loading && (
//         <div className="my-4 text-center text-gray-500">
//           Loading more images...
//         </div>
//       )} */}
//       <div className="flex justify-center my-6">
//         <button
//           onClick={handleLoadMore}
//           className="px-4 py-2 bg-[#c14511] uppercase text-xs text-white rounded shadow hover:opacity-90"
//           disabled={loading}
//         >
//           {loading ? "Loading..." : "Load More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PhotoGallery;

import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";
import Image from "next/image";

interface CloudinaryResource {
  public_id: string;
  format: string;
  width: number;
  height: number;
}

interface CloudinaryResponse {
  resources: CloudinaryResource[];
}

const fetchPhotosFromCloudinary = async (folder: string) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME; // Your Cloudinary cloud name
  const url = `https://res.cloudinary.com/${cloudName}/image/list/${folder}.json`;

  try {
    const response = await fetch(url);

    // Ensure the response is in the expected format
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    const data: CloudinaryResponse = await response.json();

    // Map the data to match the desired photo structure
    return data.resources.map((resource) => ({
      src: `https://res.cloudinary.com/${cloudName}/image/upload/${resource.public_id}.${resource.format}`,
      width: resource.width,
      height: resource.height,
      title: resource.public_id,
    }));
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return [];
  }
};
interface PhotoProps {
  src: string;
  title: string;
  width: number;
  height: number;
}

const PhotoGallery: React.FC = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    569: 1,
  };

  const [photos, setPhotos] = useState<PhotoProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    setLoading(true);
    const folder = "WebsiteMediaPhoto"; // Replace with your Cloudinary folder name
    const newPhotos = await fetchPhotosFromCloudinary(folder);
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-center text-xl font-semibold my-4">Gallery</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative bg-gray-200 rounded overflow-hidden"
            style={{
              width: "100%",
              paddingBottom: `${(photo.height / photo.width) * 100}%`,
            }}
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              layout="responsive"
              width={photo.width}
              height={photo.height}
              className="absolute inset-0 w-full h-full object-cover mb-2 transition-opacity duration-500"
            />
          </div>
        ))}
      </Masonry>
      {lightboxIndex !== null && (
        <Lightbox
          open={lightboxIndex !== null}
          close={() => setLightboxIndex(null)}
          index={lightboxIndex}
          slides={photos.map((photo) => ({
            src: photo.src,
            title: photo.title,
          }))}
        />
      )}
      <div className="flex justify-center my-6">
        <button
          onClick={loadPhotos}
          className="px-4 py-2 bg-[#c14511] uppercase text-xs text-white rounded shadow hover:opacity-90"
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
