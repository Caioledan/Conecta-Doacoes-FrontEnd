import Header_guys from "./Header_guys";
import Header_text from "./Header_text";
import HeaderButtons from "./HeaderButtons";
import Logo from "./Logo";
import MidHeaderHome from "./MidHeaderHome";

function Header_main(){
    return (
        <div className="bg-[var(--color-light-green)] h-150 w-screen flex flex-col">
            <div className="flex justify-around">
                <Logo />
                <MidHeaderHome />
                <HeaderButtons />
            </div>
            <div className="flex items-start gap-8 px-8 py-12 container mx-auto md:flex-row flex-col">
                <Header_text />
                <Header_guys/>
            </div>
        </div>
    )
}

export default Header_main;