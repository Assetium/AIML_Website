/* import React from "react";
import BlogDetails from "@/app/sections/blog-template";
import { MediaData } from "@/app/data/media-data";
const page: React.FC = () => {
  const blog = MediaData[0];

  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default page;
 */

"use client";
import { useParams } from "next/navigation";
import BlogTemplate from "@/app/sections/blog-template";
import { MediaData } from "@/app/data/media-data";

const BlogPage = () => {
  const params = useParams();
  const blogId = params?.blogId;

  // Find the blog using the `id` from the query
  const blog = MediaData.find((media) => media.id === blogId);

  if (!blog) {
    return (
      <>
        <div className="px-5 lg:px-10 xl:px-20 pt-40px">
          <div className="pt-3 pb-7 md:pb-10">
            <h3 className="font-semibold leading-tight pb-3 tracking-tighter text-title-lg lg:text-title-xl text-[#444444] relative">
              No blog here
              <span className="absolute left-0 bottom-0 w-[64px] h-2 bg-[#c14511]"></span>
            </h3>
          </div>
        </div>
      </>
    ); // Handle case where blog doesn't exist
  }

  return (
    <div>
      <BlogTemplate blog={blog} />
    </div>
  );
};

export default BlogPage;
