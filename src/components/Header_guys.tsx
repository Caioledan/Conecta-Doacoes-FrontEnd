import Guys from "../assets/images/header_guys.png"

function Header_guys(){
    return (
        <div className="2xl:mt-24 xl:mt-38">
            <img src={Guys} alt="" className="w-full h-auto object-contain min-h-64 sm:max-w-72 [820]:max-w-100 lg:max-w-72 xl:max-w-100 2xl:max-w-2xl"/>
        </div>
    )
}

export default Header_guys;
