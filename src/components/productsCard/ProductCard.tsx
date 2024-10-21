// ProductCard.tsx

interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image_url: string;
}

interface ProductCardProps {
  product: Product; // Accept product object as a prop
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs w-full">
      {product.image_url ? (
        <img
          src={product.image_url}
          alt={`Vinyl cover for ${product.title}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
          <span>No Image Available</span>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600">{product.artist}</p>
        <p className="text-gray-800 font-semibold">${product.price}</p>
        <button className="mt-4 bg-background-light text-black py-2 px-4 rounded-lg hover:bg-background-footer transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
