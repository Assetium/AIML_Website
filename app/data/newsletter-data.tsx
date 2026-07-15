// import { NewsletterItem } from "@/lib/types";

// export const NewsletterData: NewsletterItem[] = [
//   {
//     id: "1",
//     title: "The Future of Commodity Investment",
//     content: "Explore emerging trends in commodity investment and strategies.",
//     image: "/images/newsletter-1.jpg", // Adjust the path to match your asset structure
//     performedBy: "John Doe",
//     backgroundImage: "/images/newsletter-1.jpg",
//     isSent: true,
//   },
//   {
//     id: "2",
//     title: "AgroTech Innovations",
//     content: "How technology is transforming agriculture and commodities.",
//     image: "/images/newsletter-2.jpg",
//     performedBy: "Jane Smith",
//     backgroundImage: "/images/newsletter-1.jpg",
//     isSent: true,
//   },
//   {
//     id: "3",
//     title: "Market Insights Q4",
//     content:
//       "Key highlights and analysis from the fourth quarter market trends.",
//     image: "/images/newsletter-3.jpg",
//     backgroundImage: "/images/newsletter-1.jpg",
//     isSent: true,
//     performedBy: "Michael Johnson",
//   },
//   // Add more newsletter items as needed
// ];
import axios from "axios";
import { NewsletterItem } from "@/lib/types"; // Ensure MediaItem is imported correctly

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Initialize MediaData as an empty array
export const NewsletterData: NewsletterItem[] = [];

// Use a Set to track unique IDs
const uniqueIds = new Set<string>(); // Update to use string type for unique IDs

interface FetchedNewsletterItem {
  id: string;
  title: string;
  date: string; // Use Date if your application parses it
  backgroundImage: string;
  content: string;
  image: string | null;
}

// Function to fetch and populate MediaData from the API
export const fetchAndUpdateNewsletterData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/newsletter`);

    // Specify that the fetched data will be an array of MediaItem
    const fetchedData: NewsletterItem[] = response.data.data.map(
      (item: FetchedNewsletterItem) => ({
        id: item.id, // Ensure id is a string
        title: item.title,
        date: item.date, // Use Date if your application parses it
        backgroundImage: item.backgroundImage,
        content: item.content,
        image: item.image,
      })
    );

    // Filter out duplicate items using the Set for unique ids (string type)
    const uniqueFetchedData = fetchedData.filter((item: NewsletterItem) => {
      if (uniqueIds.has(item.id)) {
        return false; // Skip this item if the id has already been seen
      }
      uniqueIds.add(item.id); // Mark the id as seen
      return true;
    });

    // Populate MediaData with the unique fetched data
    NewsletterData.push(...uniqueFetchedData);

    console.log(NewsletterData);
  } catch (error) {
    console.error("Error fetching media data:", error);
  }
};
