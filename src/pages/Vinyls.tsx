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
  const [years] = useState<string[]>([]);
  const [timePeriods, setTimePeriods] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("/");
  const [productsPerPage, setProductsPerPage] = useState<number>(24);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { addToCart } = useCartContext();

  const fetchProductData = async () => {
    const fetchedVinyls: Vinyl[] = await fetchData("vinyls", "GET");
    setVinyls(fetchedVinyls);
    setFilteredVinyls(fetchedVinyls);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    const filterVinyls = () => {
      if (!vinyls.length) {
        setFilteredVinyls([]);
        return;
      }

      const filtered = vinyls.filter((vinyl) => {
        const genreMatch =
          genres.length === 0 ||
          (vinyl.genres && genres.includes(vinyl.genres.genre));

        const priceMatch =
          priceRanges.length === 0 ||
          (vinyl.price_ranges &&
            priceRanges.includes(vinyl.price_ranges.price_range));

        const yearMatch =
          years.length === 0 ||
          years.includes(new Date(vinyl.release_date).getFullYear().toString());

        const timeMatch =
          timePeriods.length === 0 ||
          (vinyl.time_periods &&
            timePeriods.includes(vinyl.time_periods.time_period));

        return genreMatch && priceMatch && yearMatch && timeMatch;
      });

      setFilteredVinyls(filtered);
    };

    filterVinyls();
  }, [vinyls, genres, priceRanges, years, timePeriods]);

  const totalPages = Math.ceil(filteredVinyls.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedVinyls = filteredVinyls.slice(startIndex, endIndex); // Use the sliced array based on pagination

  const handleGenreChange = (genre: string) => {
    setGenres((prev) => {
      const newGenres = prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre];
      return newGenres;
    });
  };

  const handlePriceRangeChange = (range: string) => {
    setPriceRanges((prev) => {
      const newRanges = prev.includes(range)
        ? prev.filter((r) => r !== range)
        : [...prev, range];
      return newRanges;
    });
  };

  const handleTimePeriodChange = (period: string) => {
    setTimePeriods((prev) => {
      const newPeriods = prev.includes(period)
        ? prev.filter((p) => p !== period)
        : [...prev, period];
      return newPeriods;
    });
  };

  return (
    <>
      <SortControls
        sortBy={sortBy}
        setSortBy={setSortBy}
        productsPerPage={productsPerPage}
        setProductsPerPage={setProductsPerPage}
      />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex">
          <div className="hidden md:block">
            <FiltersSidebar
              selectedGenres={genres}
              selectedPriceRanges={priceRanges}
              selectedTimePeriods={timePeriods}
              onGenreChange={handleGenreChange}
              onPriceRangeChange={handlePriceRangeChange}
              onTimePeriodChange={handleTimePeriodChange}
            />
          </div>
          <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedVinyls.map((vinyl) => (
              <ProductCard key={vinyl.id} vinyl={vinyl} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-16 items-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="p-2 border border-gray-300 rounded disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
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
