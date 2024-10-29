import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch-data";
import { Vinyl } from "../utils/types";
import { useCartContext } from "../Context/Cart";
import SortControls from "../components/sort-controls/SortControls";
import FiltersSidebar from "../components/sort-controls/FilterControls";
import ProductCard from "../components/productsCard/ProductCard";

const Vinyls = () => {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const [sortBy, setSortBy] = useState("popularity"); // State for sorting
  const { addToCart } = useCartContext();

  const fetchProductData = async () => {
    try {
      const fetchedVinyls: Vinyl[] = await fetchData("vinyls", "GET");
      setVinyls(fetchedVinyls);
    } catch (error) {
      console.error("Error fetching vinyl data:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // Sorting function based on sortBy state
  const sortedVinyls = [...vinyls].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return (dateB.getTime() || 0) - (dateA.getTime() || 0); // Default to 0 if invalid
      case "priceLowHigh":
        return (a.price || 0) - (b.price || 0); // Default to 0 if undefined
      case "priceHighLow":
        return (b.price || 0) - (a.price || 0); // Default to 0 if undefined
      default:
        return 0; // Default case, no sorting
    }
  });

  return (
    <>
      <SortControls sortBy={sortBy} setSortBy={setSortBy} />
      <div className="max-w-screen-2xl m-auto px-4 py-6">
        <div className="flex">
          <FiltersSidebar />
          <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedVinyls.map((vinyl) => (
              <ProductCard key={vinyl.id} vinyl={vinyl} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vinyls;
