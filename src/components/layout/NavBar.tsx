import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const linkStyles = "text-text-primary hover:text-background-footer";
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToGenreSection = () => {
    const genreSection = document.querySelector("#genres"); // Adjust selector if necessary
    if (genreSection) {
      genreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToLatestReleases = () => {
    navigate("/vinyls?sort=newest");
    setIsOpen(false); // Close the menu
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
          <button
            onClick={scrollToGenreSection}
            className={`${linkStyles} bg-transparent border-none cursor-pointer`}
          >
            GENRES
          </button>
        </li>
        <li>
          <button
            onClick={navigateToLatestReleases}
            className={`${linkStyles} bg-transparent border-none cursor-pointer`}
          >
            LATEST RELEASES
          </button>
        </li>
        <li>
          <Link to="/contactUs" className={linkStyles}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
