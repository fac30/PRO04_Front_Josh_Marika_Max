// src/components/productsCard/ProductCard.tsx

import { useCartContext, ADD_TO_CART } from "../../Context/Cart";
import { Vinyl } from "../../utils/types";

interface ProductCardProps {
  vinyl: Vinyl;
  addToCart: (product: Vinyl) => void;
}

const ProductCard = ({ vinyl }: ProductCardProps) => {
  const { dispatch } = useCartContext();

  return (
    <div className="bg-background-default shadow-glow p-4 max-w-80 max-h-[500px] w-full text-center ">
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
          className="mt-4 btn-primary"
          onClick={() => dispatch({ type: ADD_TO_CART, payload: vinyl })}
          aria-label={`Add ${vinyl.title} by ${vinyl.artist} to basket`}
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
