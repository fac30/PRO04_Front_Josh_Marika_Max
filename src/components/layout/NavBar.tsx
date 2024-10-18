import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white py-2 border-t">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link to="/vinyls" className="text-black hover:text-blue-500">
            VINYLS
          </Link>
        </li>
        <li>
          <Link to="/genres" className="text-black hover:text-blue-500">
            GENRES
          </Link>
        </li>
        <li>
          <Link to="/artists" className="text-black hover:text-blue-500">
            ARTISTS
          </Link>
        </li>
        <li>
          <Link to="/labels" className="text-black hover:text-blue-500">
            LABELS
          </Link>
        </li>
        <li>
          <Link to="/new-releases" className="text-black hover:text-blue-500">
            NEW RELEASES
          </Link>
        </li>
        <li>
          <Link to="/on-sale" className="text-black hover:text-blue-500">
            ON SALE
          </Link>
        </li>
        <li>
          <Link to="/shipping" className="text-black hover:text-blue-500">
            SHIPPING INFO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

