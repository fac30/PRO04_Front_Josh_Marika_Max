import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import ProductCard from "./components/ProductCard";
import { fetchData } from "./utils/fetch-data"; // Import the fetchData function

interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
}

const App = () => {
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
    <div className="app">
      <main>
        <section className="hero">
          <h1>Welcome to Font Hill Records</h1>
          <p>Discover the best vinyl records!</p>
          <Button onClick={addToCart} text="Add to Cart" />
        </section>

        <section className="featured-products">
          <h2>What's New</h2>
          <div className="product-grid">
            {productData.map((card) => (
              <ProductCard
                key={card.id}
                id={card.id}
                title={card.title}
                artist={card.artist}
                price={card.price}
                image={card.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
