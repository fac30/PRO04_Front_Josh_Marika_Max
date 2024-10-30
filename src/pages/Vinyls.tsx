import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch-data";
import { Vinyl } from "../utils/types";
import { useCartContext } from "../Context/Cart";
import SortControls from "../components/sort-controls/SortControls";
import FiltersSidebar from "../components/sort-controls/FilterControls";
import ProductCard from "../components/productsCard/ProductCard";

const Vinyls = () => {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const [filteredVinyls, setFilteredVinyls] = useState<Vinyl[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [priceRanges, setPriceRanges] = useState<string[]>([]);
  const [timePeriods, setTimePeriods] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("/");
  const [productsPerPage, setProductsPerPage] = useState<number>(24);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchVinyls = async () => {
      const data: Vinyl[] = await fetchData("vinyls", "GET");
      setVinyls(data);
      setFilteredVinyls(data);
    };
    fetchVinyls();
  }, []);

  useEffect(() => {
    const applyFiltersAndSort = () => {
      const filtered = vinyls.filter(
        (vinyl) =>
          (!genres.length || genres.includes(vinyl.genres.genre)) &&
          (!priceRanges.length ||
            priceRanges.includes(vinyl.price_ranges.price_range)) &&
          (!timePeriods.length ||
            timePeriods.includes(vinyl.time_periods.time_period)),
      );

      const sorted = filtered.sort((a, b) => {
        if (sortBy === "newest")
          return (
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
          );
        if (sortBy === "priceLowHigh") return a.price - b.price;
        if (sortBy === "priceHighLow") return b.price - a.price;
        return 0;
      });

      setFilteredVinyls(sorted);
    };

    applyFiltersAndSort();
  }, [vinyls, genres, priceRanges, timePeriods, sortBy]);

  const toggleFilter = (
    item: string,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    list: string[],
  ) => {
    setter(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item],
    );
  };

  const displayedVinyls = filteredVinyls.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );

  return (
    <>
      <SortControls
        sortBy={sortBy}
        setSortBy={setSortBy}
        productsPerPage={productsPerPage}
        setProductsPerPage={setProductsPerPage}
      />

      <div className="max-w-[1500px] mx-auto px-4 py-6">
        <div className="flex">
          <div className="hidden md:block w-[250px] mr-6">
            <FiltersSidebar
              selectedGenres={genres}
              selectedPriceRanges={priceRanges}
              selectedTimePeriods={timePeriods}
              onGenreChange={(genre) => toggleFilter(genre, setGenres, genres)}
              onPriceRangeChange={(range) =>
                toggleFilter(range, setPriceRanges, priceRanges)
              }
              onTimePeriodChange={(period) =>
                toggleFilter(period, setTimePeriods, timePeriods)
              }
            />
          </div>

          <div className="w-full max-h-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedVinyls.map((vinyl) => (
              <ProductCard key={vinyl.id} vinyl={vinyl} addToCart={addToCart} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-16 items-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border border-gray-300 rounded disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of{" "}
            {Math.ceil(filteredVinyls.length / productsPerPage)}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  prev + 1,
                  Math.ceil(filteredVinyls.length / productsPerPage),
                ),
              )
            }
            disabled={
              currentPage === Math.ceil(filteredVinyls.length / productsPerPage)
            }
            className="p-2 border border-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Vinyls;
