import Footer_Pages from "../components/Footer_Pages";
import Header_pages from "../components/Header_pages";
import Login from "../components/Login";

function Login_page(){
    return (
        <div className="flex flex-col min-h-screen ">
            <Header_pages />
            <div className="flex flex-grow">
                <Login />
            </div>
            <Footer_Pages />
        </div>

    )
}

export default Login_page;