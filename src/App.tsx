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

  return (
    <Router>
      <Header/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route
            path="/ShopCart"
            element={<ShopCart  />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
