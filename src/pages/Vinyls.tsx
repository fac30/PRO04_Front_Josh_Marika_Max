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
      className="items-center justify-center text-center px-4 py-4 flex flex-col"
      role="main"
    >
      {vinyls.map((vinyl) => (
        <ProductCard key={vinyl.id} vinyl={vinyl} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Vinyls;
