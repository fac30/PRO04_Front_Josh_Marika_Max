import { useEffect, useState } from "react";
import Logo from "../common/Logo";
import NavBar from "../layout/NavBar";
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";
import IconWithText from "../common/IconWithText";
import SearchBar from "../common/SearchBar";
import { useCartContext } from "../../Context/Cart";
import { fetchData } from "../../utils/fetch-data";

const Header = () => {
  const {
    state: { cartCount },
  } = useCartContext();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Use fetchData to check session status
    const fetchSessionData = async () => {
      try {
        const data = await fetchData("check-session", "GET");
        setIsLoggedIn(data.isLoggedIn); // Assuming the response includes { isLoggedIn: true/false }
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };
    fetchSessionData();
  }, []);

  return (
    <header className="bg-background-default p-4 shadow">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex justify-between w-full md:w-auto">
          <Logo aria-label="Font Hill Records logo" />
          <div className="md:hidden"></div>
        </div>
        <SearchBar />
        <div className="flex items-center space-x-4 m-5">
          <IconWithText
            IconComponent={FaUserCircle}
            label="Account"
            to={isLoggedIn ? "/UserPage" : "/UserLogin"}
          />
          <IconWithText
            IconComponent={FaShoppingBag}
            label={`Cart (${cartCount})`}
            to="/ShopCart"
          />
        </div>
      </div>
      <NavBar />
      <p className="bg-background-light text-center py-2 font-semibold">
        FREE UK DELIVERY ON ALL ORDERS OVER £35!(International delivery
        available)
      </p>
    </header>
  );
};

export default Header;
