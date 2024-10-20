import { Link } from "react-router-dom";

const NavBar = () => {
  const linkStyles = "text-text-primary hover:text-primary";

  return (
    <nav className="bg-background-default py-2 border-t border-background-light">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link to="/vinyls" className={linkStyles}>
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
          <Link to="/on-sale"className={linkStyles}>
            ON SALE
          </Link>
        </li>
        <li>
          <Link to="/shipping" className={linkStyles}>
            SHIPPING INFO
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;


