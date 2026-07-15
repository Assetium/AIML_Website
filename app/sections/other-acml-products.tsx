const products = [
  {
    tag: "Farmer Network",
    title: "Assetium Farmers Community",
    shortName: "AFC",
    description:
      "A dedicated platform connecting farmers with resources, market insights, and agricultural innovations — from smallholders to large-scale operators.",
    features: [
      { icon: "🌱", label: "Farmer-to-Farmer Networking" },
      { icon: "🛒", label: "Agri-Input Access" },
      { icon: "📊", label: "Market Intelligence" },
      { icon: "💰", label: "Seamless Produce Sales" },
      { icon: "📍", label: "Real-Time Tracking" },
    ],
    cta: "Join the Community",
    href: "#",
    image: "acml/assetium_farmers_community.jpg",
  },
  {
    tag: "Digital Marketplace",
    title: "Assetium Farmers Store",
    shortName: "FS",
    description:
      "A digital marketplace connecting investors and farmers in a seamless, profitable, and transparent way — simplifying agro-commodity investments with fair trade and efficient logistics.",
    features: [
      { icon: "✅", label: "Verified Farmer Listings" },
      { icon: "⚖️", label: "Fair Trade & Price Stability" },
      { icon: "🚚", label: "Efficient Logistics" },
      { icon: "🔒", label: "Secure Transactions" },
      { icon: "🌾", label: "Direct Farm Access" },
    ],
    cta: "Visit the Store",
    href: "#",
    image: "acml/farmers_store.jpg",
  },
];

export default function OtherProducts() {
  return (
    <section className="bg-white py-12 px-4 lg:px-20 md:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-[2px] bg-brand rounded-full" />
              <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                Other Products
              </span>
            </div>
            <h2 className="text-title-xl font-bold text-[#1a1919] leading-tight">
              Beyond <span className="text-brand">Trading</span>
            </h2>
          </div>
          <p className="text-[.8rem] leading-relaxed text-foreground max-w-sm md:text-right">
            Our ecosystem extends beyond investment — empowering farmers and
            connecting markets through purpose-built platforms.
          </p>
        </div>

        {/* Product rows */}
        <div className="flex flex-col gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-black/[0.07] overflow-hidden hover:border-brand/25 hover:shadow-[0_8px_40px_rgba(193,69,17,0.07)] transition-all duration-300"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Image */}
                <div
                  className={`relative h-64 lg:h-auto overflow-hidden ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col gap-6 p-8 lg:p-10 bg-white ${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  {/* Tag */}
                  <span className="self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand/[0.08] border border-brand/15 text-brand">
                    {p.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-[24px] font-bold text-[#1a1919] leading-tight group-hover:text-brand transition-colors duration-300">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[.85rem] leading-relaxed text-foreground">
                    {p.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {p.features.map((f, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2.5 text-[.78rem] text-foreground/90"
                      >
                        <span className="text-base">{f.icon}</span>
                        {f.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
