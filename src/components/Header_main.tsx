import { useEffect, useState } from "react";
import Header_guys from "./Header_guys";
import Header_text from "./Header_text";
import HeaderButtons from "./HeaderButtons";
import Logo from "./Logo";
import MidHeaderHome from "./MidHeaderHome";
import { useUser } from "../hooks/useUser";

function Header_main() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const { user, obterUsuario } = useUser();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLogged(true);

      obterUsuario().then(() => {

        setUsername(user?.nome || "Usuário");
      });
    } else {
      setIsLogged(false);
      setUsername("");
    }
  }, []);

  useEffect(() => {

    if (user?.nome) {
      setUsername(user.nome);
    }
  }, [user]); 

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLogged(false);
    setUsername("");
  };

  return (
    <header className="bg-[var(--color-light-green)] h-150 w-screen flex flex-col">
      <div className="flex justify-around">
        <Logo />
        <MidHeaderHome />
        <HeaderButtons
          isLogged={isLogged}
          username={username}
          onLogout={handleLogout}
        />
      </div>
      <div className="flex items-start gap-8 px-8 py-12 container mx-auto md:flex-row flex-col">
        <Header_text />
        <Header_guys />
      </div>
    </header>
  );
}

export default Header_main;