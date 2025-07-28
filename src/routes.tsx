import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Login_page from "./pages/Login_page";
import Cadastro_page from "./pages/Cadastro_page";
import Items_Page from "./pages/Items_page";
import Profile from "./pages/Profile_page";
import Cadastro_itens_page from "./pages/Cadastro_itens_page";
import Item_page from "./pages/Item_page";
import FAQ_page from "./pages/FAQ_page";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_page />}></Route>
        <Route path="/login" element={<Login_page />}></Route>
        <Route path="/cadastro" element={<Cadastro_page />}></Route>
        <Route path="/items" element={<Items_Page />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cadastroItem" element={<Cadastro_itens_page />}></Route>
        <Route path="/Item" element={<Item_page />}></Route>
        <Route path="/item/:id" element={<Item_page />} />
        <Route path="/FAQ" element={<FAQ_page/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;