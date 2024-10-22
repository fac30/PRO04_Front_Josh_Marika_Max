interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  image_url: string;
}

interface GenreCardProps {
  genre: string;
  product: Product | null;
}

export default function GenreCard({ genre, product }: GenreCardProps) {
  return (
    <div className="bg-white shadow-md p-4 max-w-80 w-full">
      {/* Display the album cover if available */}
      {product && product.image_url ? (
        <img
          src={product.image_url}
          alt={`Vinyl cover for ${product.title}`}
          className="object-cover w-full h-48 rounded-t-lg"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
          <span>No Image Available</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{genre}</h3>
        <button className="mt-4 bg-background-light text-black py-2 px-4 rounded-lg hover:bg-background-footer transition">
          View All
        </button>
      </div>
    </div>
  );
}
