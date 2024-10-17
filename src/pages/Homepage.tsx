import { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Logo from "../components/common/Logo";
import ProductCard from "../components/productsCard/ProductCard";
import { fetchData } from "../utils/fetch-data";

interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
}

const HomePage = () => {
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
    <div className="min-h-screen bg-gray-100 w-full flex flex-col">
         {/* Header */}
         <header className="bg-white p-4 shadow">
        <div className="flex justify-between items-center p-4">
          <Logo aria-label="Font Hill Records logo" />
        </div>
      </header>
         

      {/* Main Content */}
      <main className="flex-grow w-full px-4 py-8 flex flex-col items-center justify-center text-center" role="main">
          <h1 className="text-4xl font-bold mb-4">Welcome to Font Hill Records</h1>
          <p className="text-xl mb-6">Discover and collect your favorite vinyl records</p>
       

        <Button text="Shop Now" aria-label="Shop Now Button"></Button>

        <section className="mb-12 w-full" aria-labelledby="new-on-store">
          <h2 className="text-2xl font-semibold mb-4">New on Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="bg-gray-800 text-white py-8 w-full">
        <div className="text-center">
          <p>Footer</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
