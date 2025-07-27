import { Search } from "lucide-react";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

function Header_profile() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header>
      <div className="h-30 flex justify-between p-4 items-center mx-4">
        <a href="/">
          <img
            src="src/assets/images/logo-cortada.png"
            alt=""
            className="h-20"
          />
        </a>
        <div className="flex items-center bg-white w-90 h-12 rounded-xl shadow-md mr-4 border">
          <input
            className="placeholder-gray-800 text-gray-800 bg-transparent w-full focus:outline-none px-2 text-lg"
            type="text"
            placeholder="Pesquisar"
          />
          <button className="hover:cursor-pointer rounded-full text-gray-800 px-2">
            <Search />
          </button>
        </div>
      </div>
      <div className="bg-blue-600 h-20 flex items-center">
        <ul className="flex items-center justify-around gap-5 w-175 h-10 text-white">
          <Dropdown />
          <li 
            className="text-xl hover:cursor-pointer"
            onClick={handleProfileClick}
          >
            Meu perfil
          </li>
          <li className="text-xl hover:cursor-pointer">
            <a href="#">Ajuda</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header_profile;