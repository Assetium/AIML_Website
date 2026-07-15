import OurBusinessCard from "../components/our-business-card";

export default function OurBusinesses() {
  return (
    <main className="px-5 lg:px-10 xl:px-20 py-16">
      {/* Section Header */}

      <div className="max-w-7xl mx-auto mb-12 flex items-start gap-4">
        <div className="flex flex-col items-center mt-2">
          <span className="w-2 h-2 rounded-full bg-[#c14511]" />
          <span className="w-px h-10 bg-[#c14511]/55 mt-2" />
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
          One ecosystem.
          <span className="block text-gray-500 font-semibold">
            Multiple pathways to value
          </span>
        </h2>
      </div>

      {/* Business Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         <OurBusinessCard
          title="Asset Management"
          description="Funds & Portfolio Management"
          imageSrc="/home/image-sliders/22000.png"
        />
       <OurBusinessCard
          title="Commodity Broker"
          description="Farm Management"
          imageSrc="/home/image-sliders/image-slider-two.jpg"
        />
        <OurBusinessCard
          title="Real Estate"
          description="Hospitality"
          imageSrc="/home/image-sliders/image-slider-four.jpg"
        />
        <OurBusinessCard
          title="Business Advisory"
          description="VC & Project Financing"
          imageSrc="/home/image-sliders/image-slider-one.jpg"
        />
      </div>
    </main>
  );
}
