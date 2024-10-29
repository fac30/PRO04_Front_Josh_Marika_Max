const SortControls = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <label htmlFor="sort" className="mr-2 font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          className="p-2 border border-gray-300 rounded"
          defaultValue="popularity"
        >
          <option value="popularity">Popularity</option>
          <option value="newest">Newest Arrivals</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SortControls;
