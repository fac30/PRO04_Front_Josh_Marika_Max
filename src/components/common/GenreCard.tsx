import { Vinyl } from "../../utils/types";

interface GenreCardProps {
  genre: string;
  product: Vinyl | null; // Ensure this is Vinyl or null
}

const GenreCard = ({ genre, product }: GenreCardProps) => {
  return (
    <div className="genre-card">
      <h4 className="text-xl font-bold">{genre}</h4>
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
