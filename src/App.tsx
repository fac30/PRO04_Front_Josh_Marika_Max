import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UserPage from '../src/pages/UserPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/log-in" element={<LoginPage />} /> 
          {/* Add other routes here */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
