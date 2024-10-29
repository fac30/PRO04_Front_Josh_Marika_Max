const FiltersSidebar = () => {
  return (
    <aside className="w-72 pr-4">
      <div className="p-4 border border-gray-300 rounded mb-4">
        <h2 className="text-xl font-semibold mb-3">Filters</h2>
        <div className="mb-3">
          <h3 className="font-medium mb-2">Genre</h3>
          <div className="space-y-1">
            {["Rock", "Pop", "Jazz", "Hip-Hop"].map((genre) => (
              <label key={genre} className="flex items-center">
                <input type="checkbox" className="mr-2" /> {genre}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="space-y-1">
            {["$0 - $20", "$20 - $50", "$50 - $100"].map((range) => (
              <label key={range} className="flex items-center">
                <input type="checkbox" className="mr-2" /> {range}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <h3 className="font-medium mb-2">Year</h3>
          <div className="space-y-1">
            {["2023", "2022", "2021"].map((year) => (
              <label key={year} className="flex items-center">
                <input type="checkbox" className="mr-2" /> {year}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
