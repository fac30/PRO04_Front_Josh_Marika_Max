import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-background-default py-2 border-t border-background-light">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link to="/vinyls" className="text-text-primary hover:text-primary">
            VINYLS
          </Link>
        </li>
        <li>
          <Link to="/genres" className="text-text-primary hover:text-primary">
            GENRES
          </Link>
        </li>
        <li>
          <Link to="/artists" className="text-text-primary hover:text-primary">
            ARTISTS
          </Link>
        </li>
        <li>
          <Link to="/labels" className="text-text-primary hover:text-primary">
            LABELS
          </Link>
        </li>
        <li>
          <Link to="/new-releases" className="text-text-primary hover:text-primary">
            NEW RELEASES
          </Link>
        </li>
        <li>
          <Link to="/on-sale"className="text-text-primary hover:text-primary">
            ON SALE
          </Link>
        </li>
        <li>
          <Link to="/shipping" className="text-text-primary hover:text-primary">
            SHIPPING INFO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;


