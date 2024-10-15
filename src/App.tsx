import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';


interface Product {
  id: number;
  artist: string;
  title: string;
  price: number;
  image: string;
}

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);


  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="app">
      {/* <Header cartCount={cartCount} /> */}
      <main>
        <section className="hero">
          <h1>Welcome to Font Hill Records</h1>
          <p>Discover the best vinyl records!</p>
          <Button onClick={addToCart} text="Add to Cart" />
        </section>
        <section className="featured-products">
          <h2>What's New</h2>
          {/* <ProductGrid products={featuredProducts} addToCart={addToCart} /> */}
        </section>
        {/* Add more sections here */}
      </main>
    </div>
  );
};

export default App;
