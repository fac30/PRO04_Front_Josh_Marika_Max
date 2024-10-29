import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetch-data";
import { Vinyl } from "../utils/types";
import { useCartContext } from "../Context/Cart";
import ProductCard from "../components/productsCard/ProductCard";

const Vinyls = () => {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]); // Define vinyls state
  const { addToCart } = useCartContext();

  // Function to fetch product data
  const fetchProductData = async () => {
    try {
      const fetchedVinyls: Vinyl[] = await fetchData("vinyls", "GET");
      setVinyls(fetchedVinyls); // Set state with fetched data
    } catch (error) {
      console.error("Error fetching vinyl data:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div
      id="main-content"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 px-4 py-4 max-w-7xl m-auto"
      role="main"
    >
      {vinyls.map((vinyl) => (
        <ProductCard key={vinyl.id} vinyl={vinyl} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Vinyls;
