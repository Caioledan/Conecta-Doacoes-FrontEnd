
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";


function MidHeaderHome(){
    
    return (
        <div className="bg-[var(--color-hope-green)] w-3xl h-40 flex justify-center items-center flex-col gap-2">
            <SearchBar />
            <nav>
                <ul className="flex items-center justify-around gap-5 w-175 h-10 text-white">
                    < Dropdown />
                    <li className="text-xl hover:cursor-pointer"><a href="#">Chats</a></li>
                    <li className="text-xl hover:cursor-pointer"><a href="#">Meu perfil</a></li>
                    <li className="text-xl hover:cursor-pointer"><a href="#">Ajuda</a></li>
                </ul>
            </nav>
        </div>

    )
}

export default MidHeaderHome;