import Guys from "../assets/images/header_guys.png"

function Header_guys(){
    return (
        <div className="2xl:mt-24 xl:mt-38">
            <img src={Guys} alt="" className="max-w-none 2xl:w-160 xl:w-130"/>
        </div>
    )
}

export default Header_guys;