import ProductCard from "../productsCard/ProductCard";
import { Vinyl } from "../../utils/types";

interface LatestReleasesProps {
  products: Vinyl[];
}

const LatestReleases = ({ products }: LatestReleasesProps) => {
  return (
    <section className="mb-12 max-w-90" aria-labelledby="new-on-store">
      <h3
        id="new-on-store"
        className="text-2xl font-semibold mb-14 text-text-primary"
      >
        Latest Releases:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} Vinyl={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestReleases;
