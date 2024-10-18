import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};


export default HomePage;