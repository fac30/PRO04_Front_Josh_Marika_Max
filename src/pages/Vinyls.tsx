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
          <FiltersSidebar
            selectedGenres={genres}
            selectedPriceRanges={priceRanges}
            selectedTimePeriods={timePeriods}
            onGenreChange={handleGenreChange}
            onPriceRangeChange={handlePriceRangeChange}
            onTimePeriodChange={handleTimePeriodChange}
          />
          <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVinyls.slice(0, productsPerPage).map((vinyl) => (
              <ProductCard key={vinyl.id} vinyl={vinyl} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vinyls;
