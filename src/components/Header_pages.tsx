import Dropdown from "./Dropdown";
import logoImage from '../assets/images/logo-cortada.png';

function Header_pages() {
    return (
        <header>
            <div className="h-30 flex justify-between p-4 items-center mx-4">
                <a href="/"><img src={logoImage} alt="Logo" className="h-20"/></a>
            </div>
            <div className="bg-calm-blue h-20 flex items-center">
                <ul className="flex items-center justify-around gap-5 w-175 h-10 text-white">
                    <Dropdown />
                    <li className="text-xl hover:cursor-pointer"><a href="/profile">Meu perfil</a></li>
                    <li className="text-xl hover:cursor-pointer"><a href="/FAQ">Ajuda</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header_pages;