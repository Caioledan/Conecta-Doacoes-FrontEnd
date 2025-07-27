import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate(); 

  const categories = [
    { value: 'ELETRONICO', label: 'Eletrônicos' },
    { value: 'MOVEL', label: 'Móveis' },
    { value: 'ROUPA', label: 'Roupas' },
    { value: 'LIVRO', label: 'Livros' }
  ];

  const toggleDropdown = () => {
    setOpen(!open);
  }


  const handleCategoryClick = (categoryValue: string) => {
    navigate(`/items?category=${categoryValue}`);
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <li className="text-xl" ref={dropdownRef}>
      <button className="hover:cursor-pointer flex items-center gap-1" onClick={toggleDropdown}>
        Categorias
        <ChevronDown />
      </button>
      {open && (
        <ul className="absolute bg-white text-black rounded-md shadow-lg p-2 mt-2">

          {categories.map((category) => (
            <li
              key={category.value}
              className="px-4 py-2 hover:bg-slate-50 rounded-md cursor-pointer"
              onClick={() => handleCategoryClick(category.value)}
            >
              {category.label}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default Dropdown;
