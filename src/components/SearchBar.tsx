import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (newVal: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center bg-white w-175 h-12 rounded-md shadow-md p-2">
        <input
          className="placeholder-gray-800 text-gray-800 bg-transparent w-full focus:outline-none px-2 text-lg"
          type="text"
          placeholder="Procurar item"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={onSearch}
          className="hover:cursor-pointer rounded-full text-gray-800 px-2"
        >
          <Search />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
