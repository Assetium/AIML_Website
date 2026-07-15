"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardData } from "@/lib/types";

interface CardOneProps {
  data: CardData;
}

function CardOne({ data }: CardOneProps) {
  const [truncatedContent, setTruncatedContent] = useState<string>("");

  useEffect(() => {
    // This will only run on the client side
    const truncateText = (htmlContent: string, wordLimit: number): string => {
      // Create a temporary DOM element to parse the HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;

      // Extract plain text from the parsed HTML
      const textContent = tempDiv.textContent || tempDiv.innerText || "";

      // Truncate the text to the specified word limit
      const words = textContent.split(" ");
      return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : textContent;
    };

    const truncated = truncateText(data.contentOne, 40);
    setTruncatedContent(truncated);
  }, [data.contentOne]); // Only re-run when contentOne changes

  return (
    <>
      {data.link ? (
        // Redirect to external link if provided
        <Link
          target="_blank"
          href={data.link}
          passHref
          rel="noopener noreferrer"
        >
          <div className="w-full h-full flex flex-col justify-start align-top stroke-none border-none gap-1 hover:cursor-pointer">
            <div className="relative">
              <div className="relative w-full h-[300px]">
                <Image
                  src={data.headerImage}
                  layout="fill" // Ensures the image spans the entire container
                  className="object-cover rounded-md"
                  alt={data.title}
                />
              </div>

              {/* 
              <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-[#f0f0f0] to-transparent backdrop-blur-sm p-2 flex flex-col items-left justify-center text-white">
                <p className="text-xs">{data.author}</p>
                <p className="text-xs">{data.date}</p>
              </div> */}
            </div>
            <div className="flex gap-2 flex-col">
              <div>
                <h3 className="text-[15px] pt-5 font-medium text-[#1a1919]">
                  {data.title}
                </h3>
              </div>
              <div>
                <p
                  className="text-[13px] pb-2.5 leading-normal text-[#444444c6]"
                  dangerouslySetInnerHTML={{ __html: truncatedContent }}
                ></p>
              </div>
            </div>

            <div className="flex gap-2 items-center font-medium text-[#c14511] hover:font-bold hover:cursor-pointer">
              <MoveRight className="w-4" />
              <p className="text-[10px] pt-3 font-semibold tracking-tight leading-snug pb-3">
                {data.link ? (
                  // Redirect to external link if provided
                  <Link
                    target="_blank"
                    href={data.link}
                    passHref
                    rel="noopener noreferrer"
                  >
                    Read More
                  </Link>
                ) : (
                  // Conditional dynamic route based on category
                  <Link
                    href={
                      data.category === "Newsletters"
                        ? `/media/newsletters/${data.id}`
                        : `/media/blogs/${data.id}`
                    }
                  >
                    Read More
                  </Link>
                )}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        // Conditional dynamic route based on category
        <Link
          href={
            data.category === "Newsletters"
              ? `/media/newsletters/${data.id}`
              : `/media/blogs/${data.id}`
          }
        >
          <div className="w-full h-full flex flex-col justify-start align-top stroke-none border-none gap-1 hover:cursor-pointer hover:bg-gray-50">
            <div className="relative">
              <div className="relative w-full h-[300px]">
                <Image
                  src={data.headerImage}
                  layout="fill" // Ensures the image spans the entire container
                  className="object-cover"
                  alt={data.title}
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-[#f0f0f0] to-transparent backdrop-blur-sm p-2 flex flex-col items-left justify-center text-white">
                {/*             <p className="text-xs">{data.author}</p>
                <p className="text-xs">{data.date}</p> */}
              </div>
            </div>

            <div className="flex gap-2 flex-col">
              <div>
                <h3 className="text-[13px] font-medium text-[#1a1919]">
                  {data.title}
                </h3>
              </div>
              <div>
                <p
                  className="text-[12px] text-[#444444]"
                  dangerouslySetInnerHTML={{ __html: truncatedContent }}
                ></p>
              </div>
            </div>

            <div className="flex gap-2 items-center font-medium text-[#c14511] hover:font-bold hover:cursor-pointer">
              <MoveRight className="w-4" />
              <p className="text-[10px] pt-3 font-semibold tracking-tight leading-snug pb-3">
                {data.link ? (
                  // Redirect to external link if provided
                  <Link
                    target="_blank"
                    href={data.link}
                    passHref
                    rel="noopener noreferrer"
                  >
                    Read More
                  </Link>
                ) : (
                  // Conditional dynamic route based on category
                  <Link
                    href={
                      data.category === "Newsletters"
                        ? `/media/newsletters/${data.id}`
                        : `/media/blogs/${data.id}`
                    }
                  >
                    Read More
                  </Link>
                )}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default CardOne;
