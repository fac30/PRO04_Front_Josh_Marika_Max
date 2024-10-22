import { useEffect, useState } from "react";
import ProductCard from "../components/productsCard/ProductCard";
import { fetchData } from "../utils/fetch-data";

interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image_url: string;
  quantity: number;
}

interface HomeProps {
  setCartCount: (count: number) => void;
}

const Home = ({setCartCount}: HomeProps) => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data: Product[] = await fetchData("vinyls", "GET");
        const productsWithQuantity = data.map(product => ({
          ...product,
          quantity: 0  
        }));
        setProductData(productsWithQuantity);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();

    const savedCart = localStorage.getItem("shoppingCart");
    if(savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      setCartCount(parsedCart.length);
    }

  }, []);

  const addToCart = (product: Product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    let updatedCart;
    if (existingProductIndex >= 0) {
      // Product exists in cart, increment quantity
      updatedCart = cartItems.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      // Product doesn't exist in cart, add with quantity 1
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }
  
    setCartItems(updatedCart);
    const newCartCount = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(newCartCount);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  };

  return (
    <div
      id="main-content"
      className="items-center justify-center text-center px-4 py-4 flex flex-col"
      role="main"
    >
      <h2 className="text-4xl font-bold mb-4 text-text-primary">
        Welcome to Font Hill Records
      </h2>
      <p className="text-xl mb-6 text-text-secondary">
        Discover and collect your favorite vinyl records
      </p>

      <section className="mb-12 max-w-90" aria-labelledby="new-on-store">
        <h3
          id="new-on-store"
          className="text-2xl font-semibold mb-4 text-text-primary"
        >
          New on Store
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart}/>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
