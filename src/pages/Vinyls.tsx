import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch-data";
import { Vinyl } from "../utils/types";
import { useCartContext } from "../Context/Cart";
import SortControls from "../components/sort-controls/SortControls";
import FiltersSidebar from "../components/sort-controls/FilterControls";
import ProductCard from "../components/productsCard/ProductCard";

const Vinyls = () => {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const { addToCart } = useCartContext();

  // Function to fetch product data
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

  return (
    // Fixed the return statement
    <>
      <SortControls />
      <FiltersSidebar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex">
          <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vinyls.map((vinyl) => (
              <ProductCard key={vinyl.id} vinyl={vinyl} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Vinyls;
