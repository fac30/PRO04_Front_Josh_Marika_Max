import { useEffect, useState } from "react";
import Button from "../components/Button";
import Logo from "../components/common/Logo";
import ProductCard from "../components/ProductCard";
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
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <Logo />
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Font Hill Records
          </h1>
          <p className="text-xl mb-6">
            Discover and collect your favorite vinyl records
          </p>
        </header>

        {/* <Button text="Shop Now" /> */}

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">New on Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                artist={product.artist}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p>Footer</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
