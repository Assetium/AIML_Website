// "use client";

// import Marquee from "react-fast-marquee";

// import React from "react";

// const CommodityBar = () => {
//   return (
//     <div className="w-full flex justify-center">
//       <div className="fixed bottom-2 w-[95vw] bg-[#c14511] text-white text-center max-w-screen-3xl z-50 mx-auto shadow">
//         <div className="flex text-xs">
//           {/* Left Static Section */}
//           <h1 className="bg-[#1a1919] py-2 px-4 w-44">PRICE PER TON</h1>

//           {/* Scrolling Marquee Section */}
//           <Marquee
//             gradient={false}
//             speed={50}
//             pauseOnHover={true}
//             className="py-2"
//           >

//             <div className="flex gap-3">
//               <div className="whitespace-nowrap">Paddy Rice: ₦510,000</div>
//               <div className="whitespace-nowrap">Cashew Nut: ₦1,450,000</div>
//               <div className="whitespace-nowrap">Cocoa: ₦9,900,000</div>
//               <div className="whitespace-nowrap">Soybean: ₦750,000</div>
//               <div className="whitespace-nowrap">Maize: ₦380,000</div>
//               <div className="whitespace-nowrap">Ginger: ₦11,800,000</div>
//               <div className="whitespace-nowrap">Turmeric: ₦2,050,000</div>
//               <div className="whitespace-nowrap">Sesame: ₦1,140,000</div>
//               <div className="whitespace-nowrap">Wheat: ₦630,000</div>
//               <div className="whitespace-nowrap">Sorghum: ₦385,000</div>
//               <div className="whitespace-nowrap">New Maize: ₦250,000</div>
//             </div>
//           </Marquee>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommodityBar;
"use client";

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

type LatestPrice = {
  id: string;
  commodityId: string;
  price: number;
  unit: string;
  recordedAt: string;
};

type Commodity = {
  id: string;
  name: string;
  description: string;
  symbol: string;
  createdAt: string;
  latestPrice: LatestPrice;
};

const CommodityBar = () => {
  const [commodities, setCommodities] = useState<Commodity[]>([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchCommodities = async () => {
      try {
        const res = await fetch(`${BASE_URL}/commodities/prices/recent`);
        const json = await res.json();

        if (json.success && Array.isArray(json.data)) {
          setCommodities(json.data);
        }
      } catch (error) {
        console.error("Error fetching commodities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommodities();
    const interval = setInterval(fetchCommodities, 60000);
    return () => clearInterval(interval);
  }, [BASE_URL]);

  return (
    <div className="w-full flex justify-center">
      <div className="fixed bottom-2 w-[95vw] bg-[#c14511] text-white text-center max-w-screen-3xl z-50 mx-auto shadow">
        <div className="flex text-xs">
          <h1 className="bg-[#1a1919] py-2 px-4 w-44">PRICE PER TON</h1>
          <Marquee gradient={false} speed={50} pauseOnHover className="py-2">
            <div className="flex gap-6">
              {loading ? (
                <div className="whitespace-nowrap">Loading prices...</div>
              ) : commodities.length > 0 ? (
                commodities.map((item) => (
                  <div key={item.id} className="whitespace-nowrap mr-6">
                    {item.name.trim()}: ₦
                    {item.latestPrice?.price?.toLocaleString()} /{" "}
                    {item.latestPrice?.unit}
                  </div>
                ))
              ) : (
                <div className="whitespace-nowrap">No data available</div>
              )}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default CommodityBar;
