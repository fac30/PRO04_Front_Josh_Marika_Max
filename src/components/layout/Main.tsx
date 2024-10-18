import { useEffect, useState } from "react";
import ProductCard from "../productsCard/ProductCard";
import { fetchData } from "../../utils/fetch-data";

interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image_url: string;
}

const Main = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data: Product[] = await fetchData("vinyls", "GET");
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <main
      className="flex-grow w-full px-4 py-8 flex flex-col items-center justify-center text-center"
      role="main"
    >
      <h2 className="text-4xl font-bold mb-4">
        Welcome to Font Hill Records
      </h2>
      <p className="text-xl mb-6">
        Discover and collect your favorite vinyl records
      </p>

      <section className="mb-12 w-full" aria-labelledby="new-on-store">
        <h2 className="text-2xl font-semibold mb-4">New on Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;