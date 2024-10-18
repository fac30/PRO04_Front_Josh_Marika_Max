import Logo from "../common/Logo";
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";


const Header = () => {
  return (
    <header className="bg-white p-4 shadow">
      <div className="flex justify-between items-center p-4">
        <Logo aria-label="Font Hill Records logo" />
        <div className="flex items-center space-x-4">
          <FaUserCircle size={24} className="hover:text-gray-600" />
          <FaShoppingBag size={24} className="hover:text-gray-600" />
        </div>
      </div>
      <div className="bg-gray-100 text-center py-2 font-semibold">
        FREE UK DELIVERY ON ALL ORDERS (International delivery available)
      </div>
    </header>
  );
};

export default Header;






