import Cadastro from "../components/Cadastro";
import Footer_Pages from "../components/Footer_Pages";
import Header_pages from "../components/Header_pages";

function Cadastro_page(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header_pages />
            <div className="flex flex-grow">
                <Cadastro />
            </div>
            <Footer_Pages />
        </div>
    )
}

export default Cadastro_page;