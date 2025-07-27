import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import Dropdown from './Dropdown';
import Header_guys from './Header_guys';
import Logo from './Logo';

function Header_main() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const { user, obterUsuario } = useUser();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLogged(true);

      obterUsuario().then(() => {
        setUsername(user?.nome || 'Usuário');
      });
    } else {
      setIsLogged(false);
      setUsername('');
    }
  }, []);

  useEffect(() => {
    if (user?.nome) {
      setUsername(user.nome);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLogged(false);
    setUsername('');
  };

  return (
    <header className="bg-[var(--color-light-green)] w-full flex flex-col overflow-x-hidden">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center xl:px-12 gap-4 container mx-auto">
        {/* Logo e botões mobile */}
        <div className="flex justify-between items-center md:contents md:flex-shrink-0">
          <Logo />
          <div className="md:hidden">
            {isLogged ? (
              <div className="flex items-center gap-2">
                <span className="text-sm truncate max-w-20">
                  Olá, {username}
                </span>
                <button
                  onClick={() => {
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('username');
                    handleLogout?.();
                    window.location.reload();
                  }}
                  className="bg-[var(--color-dark-green)] rounded-2xl px-3 py-1 text-sm hover:shadow-md hover:scale-105 duration-300"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="bg-[var(--color-dark-green)] rounded-2xl px-3 py-1 text-sm hover:shadow-md hover:scale-105 duration-300"
                >
                  Entrar
                </Link>
                <Link
                  to="/cadastro"
                  className="bg-[var(--color-dark-green)] rounded-2xl px-3 py-1 text-sm hover:shadow-md hover:scale-105 duration-300"
                >
                  Cadastrar
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Área de busca e navegação */}
        <div className="bg-[var(--color-hope-green)] w-full max-w-md mx-auto md:mx-4 md:flex-1 md:max-w-xl h-32 md:h-36 xl:h-40 flex justify-center items-center flex-col gap-2 px-4 rounded-lg">
          <div className="flex items-center bg-white w-full max-w-sm md:max-w-md xl:max-w-lg h-10 md:h-12 rounded-md shadow-md p-2">
            <input
              className="placeholder-gray-800 text-gray-800 bg-transparent flex-1 focus:outline-none px-2 text-sm md:text-base xl:text-lg min-w-0"
              type="text"
              placeholder="Procurar item"
            />
            <button className="hover:cursor-pointer rounded-full text-gray-800 px-2 flex-shrink-0">
              <Search
                size={16}
                className="md:w-5 md:h-5 xl:w-6 xl:h-6"
              />
            </button>
          </div>
          <nav className="w-full">
            <ul className="flex items-center justify-center gap-2 md:gap-4 xl:gap-6 w-full h-8 md:h-10 text-white overflow-x-auto no-scrollbar">
              <Dropdown />
              <li className="text-xs md:text-sm xl:text-base hover:cursor-pointer whitespace-nowrap flex-shrink-0">
                <a href="#">Chats</a>
              </li>
              {isLogged && (
                <li className="text-xs md:text-sm xl:text-base hover:cursor-pointer whitespace-nowrap flex-shrink-0">
                  <a href="/profile">Meu perfil</a>
                </li>
              )}
              <li className="text-xs md:text-sm xl:text-base hover:cursor-pointer whitespace-nowrap flex-shrink-0">
                <a href="#">Ajuda</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Botões desktop */}
        <div className="hidden md:flex justify-end items-start gap-2 xl:gap-3 flex-shrink-0 min-w-0">
          {isLogged ? (
            <div className="flex items-start gap-2 xl:gap-4">
              <span className="text-sm xl:text-base text-center max-w-24 xl:max-w-32 text-white">
                Bem-vindo,
                <br /> <span className="truncate">{username}</span>
              </span>
              <button
                onClick={() => {
                  localStorage.removeItem('authToken');
                  localStorage.removeItem('username');
                  handleLogout?.();
                  window.location.reload();
                }}
                className="bg-[var(--color-dark-green)] border border-white/20 shadow-sm rounded-xl xl:rounded-2xl h-8 xl:h-10 px-3 xl:px-4 text-xs xl:text-sm text-white hover:shadow-md hover:shadow-green-600 hover:scale-105 duration-300 whitespace-nowrap"
              >
                Sair
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-[var(--color-dark-green)] border border-white/20 shadow-sm rounded-xl xl:rounded-2xl h-8 xl:h-10 px-3 xl:px-4 text-xs xl:text-sm text-white hover:shadow-md hover:shadow-green-600 hover:scale-105 duration-300 flex justify-center items-center whitespace-nowrap"
              >
                Entrar
              </Link>
              <Link
                to="/cadastro"
                className="bg-[var(--color-dark-green)] border border-white/20 shadow-sm rounded-xl xl:rounded-2xl h-8 xl:h-10 px-3 xl:px-4 text-xs xl:text-sm text-white hover:shadow-md hover:shadow-green-600 hover:scale-105 duration-300 flex justify-center items-center whitespace-nowrap"
              >
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <hr className="w-[80%] border-t border-white/50" />
      </div>
      {/* title and Guys */}
      <div className="md:px-5 xl:px-20 flex justify-between md:gap-10 xl:gap-28 md:flex-row flex-col pt-10">
        <div className="text-white justify-start items-center pb-10 pl-10 font-epilogue flex-none w-full md:w-20 xl:w-152 min-w-102">
          <h1 className="text-3xl md:text-3xl xl:text-5xl font-semibold leading-tight break-words">
            Central Comunitária de Doações e Trocas
          </h1>
          <p className="mt-4 text-base md:text-sm xl:text-xl break-words">
            Compartilhe. Doe. Conecte sua comunidade.
          </p>
        </div>
        <Header_guys />
      </div>
    </header>
  );
}

export default Header_main;
