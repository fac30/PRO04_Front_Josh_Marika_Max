import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import ShopCart from "./pages/ShopCart";
import Vinyls from "./pages/Vinyls";
import ContactUs from "./pages/ContactUs";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Vinyls" element={<Vinyls />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route path="/ShopCart" element={<ShopCart />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
