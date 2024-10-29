import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetch-data";
import {
  Genre,
  PriceRange,
  TimePeriod,
  FiltersSidebarProps,
} from "../../utils/types";

const FiltersSidebar = ({
  selectedGenres = [],
  selectedPriceRanges = [],
  selectedTimePeriods = [],
  onGenreChange,
  onPriceRangeChange,
  onTimePeriodChange,
}: FiltersSidebarProps) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [priceRanges, setPriceRanges] = useState<PriceRange[]>([]);
  const [timePeriods, setTimePeriods] = useState<TimePeriod[]>([]);

  useEffect(() => {
    const fetchFilters = async () => {
      const fetchedGenres: Genre[] = await fetchData("genres", "GET");
      const fetchedPriceRanges: PriceRange[] = await fetchData(
        "price_ranges",
        "GET",
      );
      const fetchedTimePeriods: TimePeriod[] = await fetchData(
        "time_periods",
        "GET",
      );

      setGenres(fetchedGenres);
      setPriceRanges(fetchedPriceRanges);
      setTimePeriods(fetchedTimePeriods);
    };

    fetchFilters();
  }, []);

  return (
    <aside className="w-72 pr-4">
      <div className="p-4 border border-gray-300 rounded mb-4">
        <h2 className="text-xl font-semibold mb-3">Filters</h2>

        <div className="mb-16">
          <h3 className="font-medium mb-2">Genre</h3>
          <div className="space-y-1">
            {genres.map((genre) => (
              <label key={genre.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedGenres.includes(genre.genre)}
                  onChange={() => onGenreChange(genre.genre)}
                />
                {genre.genre}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="space-y-1">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedPriceRanges.includes(range.price_range)}
                  onChange={() => onPriceRangeChange(range.price_range)}
                />
                {range.price_range}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-medium mb-2">Time Periods</h3>
          <div className="space-y-1">
            {timePeriods.map((period) => (
              <label key={period.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedTimePeriods.includes(period.time_period)}
                  onChange={() => onTimePeriodChange(period.time_period)}
                />
                {period.time_period}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
