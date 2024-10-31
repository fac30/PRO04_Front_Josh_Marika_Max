import { SortControlsProps } from "../../utils/types";

type SortControlsPropsExtended = SortControlsProps & {
  productsPerPage: number; // Add productsPerPage to props
  setProductsPerPage: (value: number) => void; // Callback for changing products per page
};

const SortControls = ({
  sortBy,
  setSortBy,
  productsPerPage,
  setProductsPerPage,
}: SortControlsPropsExtended) => {
  return (
    <div className="flex justify-center gap-10 items-center mt-6">
      <div>
        <label htmlFor="sort" className="mr-2 font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          className="p-2 border border-gray-300 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="/"> - </option>
          <option value="newest">Newest Arrivals</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>

      <div>
        <label htmlFor="productsPerPage" className="mr-2 font-medium">
          Products per page:
        </label>
        <select
          id="productsPerPage"
          className="p-2 border border-gray-300 rounded"
          value={productsPerPage}
          onChange={(e) => setProductsPerPage(Number(e.target.value))} // Handle change for products per page
        >
          <option value={24}>24</option>
          <option value={48}>48</option>
          <option value={72}>72</option>
        </select>
      </div>
    </div>
  );
};

export default SortControls;
