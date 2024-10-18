import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", query);
    // Add your search logic here
  };

  return (
    <div className="flex items-center space-x-2 bg-white border rounded-full px-4 py-1 w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className="w-full focus:outline-none"
      />
      <button onClick={handleSearch} className="text-gray-700 hover:text-blue-500">
        <FiSearch size={20} />
      </button>
    </div>
  );
};

export default Search;