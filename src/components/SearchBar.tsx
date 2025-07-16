import { Search } from "lucide-react";

function SearchBar(){
    return (
        <div className="flex items-center bg-white w-175 h-12 rounded-md shadow-md p-2">
            <input className="placeholder-gray-800 text-gray-800 bg-transparent w-full focus:outline-none px-2 text-lg" type="text"  placeholder="Procurar item" />
            <button className="hover:cursor-pointer rounded-full text-gray-800 px-2"><Search/></button>
        </div>
    )
}

export default SearchBar;