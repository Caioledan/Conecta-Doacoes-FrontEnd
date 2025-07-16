import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

function Dropdown(){
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    const toggleDropdown = () => {
        setOpen(!open);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent){
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return(
        
        <li className="text-xl" ref={dropdownRef}>
            <button className="hover:cursor-pointer flex items-center gap-1" onClick={toggleDropdown}>
                Categorias
                <ChevronDown />
            </button>
            {open && (
                <ul className="absolute bg-white text-black rounded-md shadow-lg p-2 mt-2">
                    <li className="px-4 py-2 hover:bg-slate-50 rounded-md cursor-pointer">Eletrônicos</li>
                    <li className="px-4 py-2 hover:bg-slate-50 rounded-md cursor-pointer">Móveis</li>
                    <li className="px-4 py-2 hover:bg-slate-50 rounded-md cursor-pointer">Vestuário</li>
                    <li className="px-4 py-2 hover:bg-slate-50 rounded-md cursor-pointer">Livros</li>
                    </ul>
            )}
        </li>

    )
}

export default Dropdown;