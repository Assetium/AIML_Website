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

import React from "react";
import { NewsletterItem } from "@/lib/types";
import Image from "next/image";

const NewsletterArticle: React.FC<{ data: NewsletterItem }> = ({ data }) => {
  return (
    <div className="px-5 xsm:px-10 lg:px-20 xl:px-[20%] pt-30">
      <div className="flex flex-col gap-7 hederSection pt-3 pb-7">
        {/* Blog Header Section */}
        <div className="flex flex-col gap-5 items-start">
          <Image
            src={data.backgroundImage}
            layout="responsive"
            width={16}
            height={9}
            alt="Blog Header visual"
            className="w-full h-auto object-cover"
          />
          <h3 className="font-semibold leading-tight tracking-tighter text-title-lg lg:text-title-xl text-[#444444]">
            {data.title}
          </h3>
          <div className="flex gap-3">
            <p className="text-[12px] font-medium text-[#444444]">
              {data.performedBy}
            </p>
          </div>
        </div>

        {/* include section for authors,redtime etc, if there is}

        {/* Divider */}
        <div className="w-full h-[0.2px] bg-gray-200"></div>

        {/* Blog Content 1 */}
        {data.content && (
          <div>
            <div
              className="md:leading-7 text-[13px] md:text-base font-medium text-[#444444]"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        )}

        {/* Divider */}
        <div className="w-full h-[0.2px] bg-gray-200"></div>

        {data.image && (
          <div>
            <Image
              src={data.image}
              layout="responsive"
              width={16}
              height={9}
              alt="Blog additional visual"
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterArticle;
