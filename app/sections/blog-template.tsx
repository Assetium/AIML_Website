/* import React from "react";

interface BlogDetailsProps {
  blog: {
    title: string;
    headerImage: string; // URL of the header image
    contentOne: string; // Content for the first editor section
    contentTwo: string; // Content for the second editor section
    additionalImageOne?: string; // URL for the first additional image
    additionalImageTwo?: string; // URL for the second additional image
  };
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  return (
    <div className="px-5 xsm:px-10 lg:px-20 xl:px-[20%] pt-10">
      <div className="flex flex-col gap-7 hederSection pt-3 pb-7">
        <div className="flex flex-col gap-5 items-start">
          <img
            src={blog.headerImage}
            alt="Blog Header visual"
            className="w-full h-auto object-cover"
          />
          <h3 className="font-semibold leading-tight tracking-tighter text-title-lg lg:text-title-xl text-[#444444]">
            {blog.title}
          </h3>
        </div>

        <div className="w-full h-[0.2px] bg-gray-200"></div>

        <div>
          <img
            src={blog.additionalImageOne}
            alt="Blog additional visual"
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <div
            className="md:leading-7 text-[13px] md:text-base font-medium text-[#444444]"
            dangerouslySetInnerHTML={{ __html: blog.contentOne }}
          />
        </div>

        <div>
          <img
            src={blog.additionalImageTwo}
            alt="Blog additional visual"
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <div
            className="md:leading-7 text-[13px] md:text-base font-medium text-[#444444]"
            dangerouslySetInnerHTML={{ __html: blog.contentTwo }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
 */

import Image from "next/image";
import React from "react";

interface BlogDetailsProps {
  blog: {
    id: string;
    headerImage: string;
    category: string;
    author?: string;
    title: string;
    isFeatured?: boolean;
    contentOne: string; // Make contentOne optional
    contentTwo?: string; // Make contentTwo optional
    link?: string;
    additionalImageOne?: string;
    additionalImageTwo?: string;
    date?: string;
    readTime?: string;
  };
}

const BlogTemplate: React.FC<BlogDetailsProps> = ({ blog }) => {
  return (
    <div className="px-5 xsm:px-10 lg:px-20 xl:px-[20%] pt-30">
      <div className="flex flex-col gap-7 hederSection pt-3 pb-7">
        {/* Blog Header Section */}
        <div className="flex flex-col gap-5 items-start">
          <Image
            layout="responsive"
            width={16}
            height={9}
            src={blog.headerImage}
            alt="Blog Header visual"
            className="w-full h-auto object-cover rounded-lg"
          />
          <h3 className="font-semibold leading-tight tracking-tighter text-title-lg lg:text-title-xl text-[#444444]">
            {blog.title}
          </h3>
          <div className="flex gap-3 items-center">
            <p className="text-[12px] font-medium text-[#444444]">
              <strong>Author: </strong>
              {blog.author}
            </p>
            <span className="text-[10px] text-gray-500 py-2">
              <strong>Read Time: </strong> {blog.readTime}
            </span>
          </div>
        </div>

        {/* include section for authors,redtime etc, if there is}

        {/* Divider */}
        <div className="w-full h-[0.2px] bg-gray-200"></div>

        {/* Blog Content 1 */}
        {blog.contentOne && (
          <div>
            <div
              className="md:leading-7 text-[13px] md:text-base font-medium text-[#444444]"
              dangerouslySetInnerHTML={{ __html: blog.contentOne }}
            />
          </div>
        )}

        {/* Additional Image 2 */}
        {blog.additionalImageTwo && (
          <div>
            <Image
              src={blog.additionalImageTwo}
              alt="Blog additional visual"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Blog Content 2 */}
        {blog.contentTwo && (
          <div>
            <div
              className="md:leading-7 text-[13px] md:text-base font-medium text-[#444444]"
              dangerouslySetInnerHTML={{ __html: blog.contentTwo }}
            />
          </div>
        )}

        {/* Additional Image 2 */}
        {blog.additionalImageTwo && (
          <div>
            <Image
              src={blog.additionalImageTwo}
              alt="Blog additional visual"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Blog Content 2 */}
        {blog.contentTwo && (
          <div>
            <div
              className="md:leading-7 text-[13px] md:text-base font-medium text-[#444444]"
              dangerouslySetInnerHTML={{ __html: blog.contentTwo }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogTemplate;
