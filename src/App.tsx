import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import ShopCart from "./pages/ShopCart";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    if(savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartCount(parsedCart.length);
    }
  }, [])

  return (
      <Router>
        <Header cartCount={cartCount} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home setCartCount={setCartCount} />} />
            <Route path="/UserLogin" element={<UserLogin />} />
            <Route path="/UserSignUp" element={<UserSignUp />} />
            <Route path="/ShopCart" element={<ShopCart setCartCount={setCartCount} />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </Router>
  );
};

export default App;
