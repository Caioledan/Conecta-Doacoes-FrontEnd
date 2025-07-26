import { Link } from "react-router-dom";

interface HeaderButtonsProps {
  isLogged: boolean;
  username?: string;
  onLogout?: () => void;
}

function HeaderButtons({
  isLogged = false,
  username = "",
  onLogout,
}: HeaderButtonsProps) {
  return (
    <div className="flex justify-center items-center h-40 gap-6">
      {isLogged ? (
        <div className="flex items-center gap-6">
          <span className="text-2xl">
            Bem-vindo,
            <br /> {username}
          </span>
          <button
            onClick={() => {
              localStorage.removeItem("authToken");
              localStorage.removeItem("username");
              onLogout?.();
              window.location.reload();
            }}
            className="bg-[var(--color-dark-green)] rounded-4xl h-12 w-40 text-2xl hover:cursor-pointer hover:shadow-md hover:shadow-green-600 hover:scale-105 duration-300 transform"
          >
            Sair
          </button>
        </div>
      ) : (
        <>
          <Link
            to="/login"
            className="bg-[var(--color-dark-green)] rounded-4xl h-12 w-40 text-2xl hover:cursor-pointer hover:shadow-md hover:shadow-green-600 hover:scale-105 duration-300 transform flex justify-center items-center"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            className="bg-[var(--color-dark-green)] rounded-4xl h-12 w-40 text-2xl hover:cursor-pointer hover:shadow-md hover:shadow-green-600 hover:scale-105 duration-300 transform flex justify-center items-center"
          >
            Cadastrar
          </Link>
        </>
      )}
    </div>
  );
}

export default HeaderButtons;
