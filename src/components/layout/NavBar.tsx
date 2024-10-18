import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white py-2 border-t">
      <div className="flex justify-center space-x-8">
        <Link to="/vinyls" className="text-black hover:text-blue-500">
          VINYLS
        </Link>
        <Link to="/genres" className="text-black hover:text-blue-500">
          GENRES
        </Link>
        <Link to="/artists" className="text-black hover:text-blue-500">
          ARTISTS
        </Link>
        <Link to="/labels" className="text-black hover:text-blue-500">
          LABELS
        </Link>
        <Link to="/new-releases" className="text-black hover:text-blue-500">
          NEW RELEASES
        </Link>
        <Link to="/on-sale" className="text-black hover:text-blue-500">
          ON SALE
        </Link>
        <Link to="/shipping" className="text-black hover:text-blue-500">
          SHIPPING INFO
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

