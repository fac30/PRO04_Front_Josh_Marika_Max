import Logo from "../common/Logo";
import NavBar from "../layout/NavBar";
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";
import IconWithText from "../common/IconWithText";
import SearchBar from "../common/SearchBar";
import { useCartContext } from "../../Context/Cart";

const Header = () => {
  const {
    state: { cartCount },
  } = useCartContext();

  return (
    <header className="bg-[#ffffffd8] shadow-md">
      
      {/* Main header content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center p-4 space-y-4 md:space-y-0">
          <div className="flex justify-between w-full md:w-auto">
            <Logo aria-label="Font Hill Records logo" />
            <div className="md:hidden"></div>
          </div>
          
          {/* Search bar wrapper with enhanced styling */}
          <div className="w-full flex justify-center md:w-1/3 lg:w-2/5">
            <SearchBar />
          </div>

          {/* Icons wrapper with hover effects */}
          <div className="flex items-center space-x-6 m-5">
            <IconWithText
              IconComponent={FaUserCircle}
              label="Account"
              to={"/UserLogin"}
            />
            <div className="relative">
              <IconWithText
                IconComponent={FaShoppingBag}
                label={`Cart (${cartCount})`}
                to="/ShopCart"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar with subtle separator */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <NavBar />
        </div>
      </div>

      {/* Delivery banner with enhanced visibility */}
      <div className="bg-background-light text-center py-3 font-medium text-sm border-t">
        <p className="animate-fade-in">
          FREE UK DELIVERY ON ALL ORDERS OVER £35!
          <span className="text-black ml-2">
            (International delivery available)
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
