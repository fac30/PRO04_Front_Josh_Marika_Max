import { useNavigate } from "react-router-dom";
import { Vinyl } from "../../utils/types";

interface GenreCardProps {
  genre: string;
  genreId: number;
  vinyl: Vinyl | null;
}

const GenreCard = ({ genre, genreId, vinyl }: GenreCardProps) => {
  const navigate = useNavigate();

  // Handle view all button click
  const handleViewAllClick = () => {
    // Redirect to Vinyls page with the genre as a query parameter
    navigate(`/vinyls?genre=${genre}`);
  };

  return (
    <div className="genre-card">
      <div className="w-full bg-background-default shadow-[0_0_15px_rgba(0,0,0,0.3)] p-4 max-w-80">
        {vinyl ? (
          <img
          src={`/genre-images/cover${genreId}.png`}   // Use genreId for dynamic image reference
            alt={vinyl.title}
            className="object-cover w-full h-full rounded-t-lg"
          />
        ) : (
          <span>No Image Available</span>
        )}
        <div className="p-4">
          {vinyl ? (
            <>
              <h2 className="text-lg font-bold mb-2">{genre}</h2>
              <button
                onClick={handleViewAllClick}  // Add onClick handler
                className="mt-4 bg-background-light text-black py-2 px-4 rounded-lg hover:bg-background-footer transition font-['Noto_Sans'] font-bold"
              >
                View All
              </button>
            </>
          ) : (
            <p className="text-gray-600">No product information available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenreCard;
