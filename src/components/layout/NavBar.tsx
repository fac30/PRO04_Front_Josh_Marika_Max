import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for hamburger and close

const NavBar = () => {
  const linkStyles = "text-text-primary hover:text-primary";
  const [isOpen, setIsOpen] = useState(false); // State for managing menu visibility

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background-default py-2 border-t border-background-light relative">
      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex justify-center items-center">
        <button
          onClick={toggleMenu}
          className="text-text-primary focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex-col md:flex-row md:flex md:items-center justify-center space-y-2 md:space-y-0 md:space-x-8 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <li>
          <Link
            data-test="link-to-vinyl-section"
            to="/vinyls"
            className={linkStyles}
          >
            VINYLS
          </Link>
        </li>
        <li>
          <Link to="/genres" className={linkStyles}>
            GENRES
          </Link>
        </li>
        <li>
          <Link to="/artists" className={linkStyles}>
            ARTISTS
          </Link>
        </li>
        <li>
          <Link to="/labels" className={linkStyles}>
            LABELS
          </Link>
        </li>
        <li>
          <Link to="/new-releases" className={linkStyles}>
            NEW RELEASES
          </Link>
        </li>
        <li>
          <Link to="/on-sale" className={linkStyles}>
            ON SALE
          </Link>
        </li>
        <li>
          <Link to="/shipping" className={linkStyles}>
            SHIPPING
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
