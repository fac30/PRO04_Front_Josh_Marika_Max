import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header"; 
import Footer from "./components/layout/Footer"; 
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
    </Router>
  );
};

export default App;





