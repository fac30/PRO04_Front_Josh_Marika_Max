import { Vinyl } from "../../utils/types";
import ProductCard from "../productsCard/ProductCard";

interface StaffPicksProps {
  products: Vinyl[];
}

const StaffPicks = ({ products }: StaffPicksProps) => {
  return (
    <section className="mb-12 max-w-90" aria-labelledby="staff-picks">
      <h3
        id="staff-picks"
        className="text-2xl font-semibold mb-14 mt-20 text-text-primary"
      >
        Staff's Picks:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} Vinyl={product} />
        ))}
      </div>
    </section>
  );
};

export default StaffPicks;
