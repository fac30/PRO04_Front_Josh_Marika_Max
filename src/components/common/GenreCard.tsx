import { Vinyl } from "../../utils/types";

interface GenreCardProps {
  genre: string;
  product: Vinyl | null; // Ensure this is Vinyl or null
  coverImage: string | null; // Accept coverImage as a prop
}

const GenreCard = ({ genre, product, coverImage }: GenreCardProps) => {
  // Add coverImage to destructured props
  return (
    <div className="genre-card">
      <h4 className="text-xl font-bold">{genre}</h4>
      {coverImage && <img src={coverImage} alt={`${genre} cover`} />}{" "}
      {/* Display the genre cover */}
      {product ? (
        <div>
          <img src={product.image_url} alt={product.title} />
          <h5>{product.title}</h5>
          <p>{product.artist}</p>
          <p>${product.price}</p>
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default GenreCard;
