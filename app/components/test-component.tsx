"use client";
import React, { useEffect, useState } from "react";
import { fetchAndUpdateMediaData, MediaData } from "@/app/data/media-data";

const NewsletterTest: React.FC = () => {
  const [newsletters, setNewsletters] = useState(MediaData);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAndUpdateMediaData();
      setNewsletters([...MediaData]);
    };

    fetchData();
  }, []);

  return (
    <div className="pt-60">
      <h1>Newsletter Test</h1>
      {newsletters.length > 0 ? (
        <ul>
          {newsletters.map((item) => (
            <li key={item.id}>
              {item.title} <span className="text-red-500">{item.category}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No newsletters available.</p>
      )}
    </div>
  );
};

export default NewsletterTest;
