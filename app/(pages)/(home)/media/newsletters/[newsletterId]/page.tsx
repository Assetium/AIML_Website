"use client";
import { useParams } from "next/navigation";
import NewsletterArticle from "@/app/components/newsletter-article";
import { NewsletterData } from "@/app/data/newsletter-data";

const Page = () => {
  const params = useParams();
  const newsletterId = params?.newsletterId;

  // Find the blog using the `id` from the query
  const newsletters = NewsletterData.find(
    (newsletter) => newsletter.id === newsletterId
  );

  if (!newsletters) {
    return (
      <>
        <div className="px-5 lg:px-10 xl:px-20 pt-40px">
          <div className="pt-3 pb-7 md:pb-10">
            <h3 className="font-semibold leading-tight pb-3 tracking-tighter text-title-lg lg:text-title-xl text-[#444444] relative">
              Newsletter Not Found
              <span className="absolute left-0 bottom-0 w-[64px] h-2 bg-[#c14511]"></span>
            </h3>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <NewsletterArticle data={newsletters} />
    </div>
  );
};

export default Page;
