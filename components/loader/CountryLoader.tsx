const CountryCardSkeleton = () => (
  <div className="bg-slate-800 p-4 rounded-lg animate-pulse">
    <div className="space-y-3 text-lg">
      <div className="w-72 h-48 bg-gray-300 rounded-lg"></div>{" "}
      <div className="space-y-3">
        <div className="h-6 bg-gray-300 rounded"></div>{" "}
        <div className="h-6 bg-gray-300 rounded"></div>{" "}
        <div className="h-6 bg-gray-300 rounded"></div>{" "}
        <div className="h-6 bg-gray-300 rounded"></div>{" "}
      </div>
    </div>
  </div>
);

export const CountriesSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
    {Array.from({ length: 12 }).map((_, index) => (
      <CountryCardSkeleton key={index} />
    ))}
  </div>
);
