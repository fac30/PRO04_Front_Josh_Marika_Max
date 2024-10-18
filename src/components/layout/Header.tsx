import Logo from "../common/Logo";
import NavBar from "../layout/NavBar"
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";
import IconWithText from "../common/IconWithText";
import SearchBar from "../common/SearchBar"



const Header = () => {
  return (
    <header className="bg-white p-4 shadow">
      <div className="flex justify-between items-center p-4">
        <Logo aria-label="Font Hill Records logo" />
        <SearchBar />
        <div className="flex items-center space-x-4">
          <IconWithText IconComponent={FaUserCircle} label="Account" />
          <IconWithText IconComponent={FaShoppingBag} label="Cart" />
        </div>
      </div>
      <NavBar />
      <div className="bg-gray-100 text-center py-2 font-semibold">
        FREE UK DELIVERY ON ALL ORDERS (International delivery available)
      </div>
    </header>
  );
};

export default Header;






