interface ProductCardProps {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
}

// ProductCard component
const ProductCard = ({ id, title, artist, price, image }: ProductCardProps) => {
  return (
    <div>
      {image && <img src={image} alt={`${title} cover`} />}
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>${price}</p>
      <button>View Details</button>
    </div>
  );
};

export default ProductCard;
