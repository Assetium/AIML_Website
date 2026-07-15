export function GallerySkeleton() {
  return (
    <div className="flex flex-col gap-3">
      {/* Row 1 — Hero + 2 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-3">
        <div className="h-[332px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl animate-pulse" />
        <div className="flex flex-col gap-3">
          <div className="h-[160px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl animate-pulse" />
          <div className="h-[160px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl animate-pulse" />
        </div>
      </div>

      {/* Row 2 — 4 equal */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-[180px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl animate-pulse" />
        ))}
      </div>

      {/* Row 3 — 1 wide + 2 equal */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3">
        <div className="flex flex-col gap-3">
          <div className="h-[160px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl animate-pulse" />
          <div className="h-[160px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl animate-pulse" />
        </div>
        <div className="h-[332px] bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl animate-pulse" />
      </div>
    </div>
  );
}