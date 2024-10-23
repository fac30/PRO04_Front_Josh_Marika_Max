import { useNavigate } from "react-router-dom";
import Logo from "../common/Logo";
import NavBar from "../layout/NavBar";
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";
import IconWithText from "../common/IconWithText";
import SearchBar from "../common/SearchBar";


interface HeaderProps {
  cartCount: number;
}

const Header = ({cartCount}: HeaderProps)  => {
//   const navigate = useNavigate();

  // const handleAccountClick = () => {
  //   navigate("/UserLogin");
  // };

  // const handleCartClick = () => {
  //   navigate("/ShopCart");
  // };

  return (
    <header className="bg-background-default p-4 shadow">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div className="flex justify-between items-center p-4">
        <Logo aria-label="Font Hill Records logo" />
        <SearchBar />
        <div className="flex items-center space-x-4">
          <IconWithText
            IconComponent={FaUserCircle}
            label="Account"
            to="/UserLogin"  
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
        FREE UK DELIVERY ON ALL ORDERS (International delivery available)
      </p>
    </header>
  );
};

export default Header;
