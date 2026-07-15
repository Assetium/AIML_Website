import axios from "axios";
import { MediaItem } from "@/lib/types"; // Ensure MediaItem is imported correctly

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Initialize MediaData as an empty array
export const MediaData: MediaItem[] = [];

// Use a Set to track unique IDs
const uniqueIds = new Set<string>(); // Update to use string type for unique IDs

interface FetchedItem {
  id: string;
  title: string;
  category: string;
  date: string; // Use Date if your application parses it
  headerImage: string;
  author: string;
  contentOne: string;
  contentTwo: string | null;
  additionalImageOne: string | null;
  additionalImageTwo: string | null;
  isFeatured: boolean;
  readTime: string; // Adjust if it's strictly a number in your DB
  link: string;
}

// Function to fetch and populate MediaData from the API
export const fetchAndUpdateMediaData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/blog`);

    // Specify that the fetched data will be an array of MediaItem
    const fetchedData: MediaItem[] = response.data.data.map(
      (item: FetchedItem) => ({
        id: item.id, // Ensure id is a string
        headerImage: item.headerImage,
        category: item.category,
        title: item.title,
        contentOne: item.contentOne,
        isFeatured: item.isFeatured,
        author: item.author,
        date: item.date,
        readTime: item.readTime, // Convert if needed
        link: item.link,
      })
    );

    // Filter out duplicate items using the Set for unique ids (string type)
    const uniqueFetchedData = fetchedData.filter((item: MediaItem) => {
      if (uniqueIds.has(item.id)) {
        return false; // Skip this item if the id has already been seen
      }
      uniqueIds.add(item.id); // Mark the id as seen
      return true;
    });

    // Populate MediaData with the unique fetched data
    MediaData.push(...uniqueFetchedData);
  } catch (error) {
    console.error("Error fetching media data:", error);
  }
};
