import { Vinyl } from "../../utils/types";
import ProductCard from "../productsCard/ProductCard";

interface StaffPicksProps {
  vinyl: Vinyl[];
  addToCart: (product: Vinyl) => void; // Add this line
}

const StaffPicks = ({ vinyl }: StaffPicksProps) => {
  function addToCart(vinyl: Vinyl): void {
    throw new Error("Function not implemented.");
  }

  // Destructure 'vinyl'
  return (
    <section className="mb-12 max-w-90" aria-labelledby="staff-picks">
      <h3
        id="staff-picks"
        className="text-2xl font-semibold mb-14 mt-20 text-text-primary"
      >
        Staff's Picks:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {vinyl.map((product) => (
          <ProductCard key={product.id} vinyl={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default StaffPicks;
