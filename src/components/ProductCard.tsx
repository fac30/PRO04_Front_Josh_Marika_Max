interface ProductCardProps {
  id: number;
  title: string;
  artist: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, title, artist, price, image }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs">
      {image ? (
        <img
          src={image}
          alt={`Vinyl cover for ${title}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
          <span>No Image Available</span>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{artist}</p>
        <p className="text-gray-800 font-semibold">${price}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
