// src/components/productsCard/ProductCard.tsx

import { Vinyl } from "../../utils/types";

interface ProductCardProps {
  vinyl: Vinyl; // Changed to 'vinyl' to follow convention
  addToCart: (vinyl: Vinyl) => void; // Include addToCart in the props
}

const ProductCard = ({ vinyl, addToCart }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-md p-4 max-w-80 w-full text-center ">
      {vinyl.image_url ? (
        <img
          src={vinyl.image_url}
          alt={`Vinyl cover for ${vinyl.title}`}
          className="object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
          <span>No Image Available</span>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-md font-bold mb-5">{vinyl.title}</h2>
        <p className="text-gray-600">{vinyl.artist}</p>
        <p className="text-gray-800 font-semibold">£{vinyl.price}</p>
        <button
          className="mt-4 bg-background-light text-black py-2 px-4 rounded-lg hover:bg-background-footer transition"
          onClick={() => addToCart(vinyl)} // Pass the vinyl object to addToCart
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
