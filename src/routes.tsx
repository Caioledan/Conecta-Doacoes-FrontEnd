import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Login_page from "./pages/Login_page";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home_page/>}></Route>
                <Route path="/login" element={<Login_page/>}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;