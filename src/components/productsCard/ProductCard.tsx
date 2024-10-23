import { Vinyl } from "../../utils/types";

interface ProductCardProps {
  Vinyl: Vinyl;
}

const ProductCard = ({ Vinyl }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-md p-4 max-w-80 w-full">
      {Vinyl.image_url ? (
        <img
          src={Vinyl.image_url}
          alt={`Vinyl cover for ${Vinyl.title}`}
          className=" object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
          <span>No Image Available</span>
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{Vinyl.title}</h2>
        <p className="text-gray-600">{Vinyl.artist}</p>
        <p className="text-gray-800 font-semibold">£{Vinyl.price}</p>
        <button className="mt-4 bg-background-light text-black py-2 px-4 rounded-lg hover:bg-background-footer transition">
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
