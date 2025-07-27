function Footer_main() {
  return (
      <footer className="bg-solidarity-orange w-full overflow-x-hidden gap-5 px-5 py-20 flex justify-between items-center font-epilogue text-white">
        <div className="flex justify-center items-center min-w-32">
          <img
            src="src/assets/images/logo_footer.png"
            alt="Logo Conecta"
            className="h-16 md:min-w-32"
          />
        </div>
        <div className="flex flex-col gap-5">
          <ul className="font-medium md:text-xs lg:text-xl xl:text-3xl flex lg:space-x-5 xl:space-x-10  md:space-x-5">
            <a className="hover:cursor-pointer">
              <li>Sobre nós</li>
            </a>
            <a className="hover:cursor-pointer">
              <li>Gerenciamento</li>
            </a>
            <a className="hover:cursor-pointer">
              <li>Projeto</li>
            </a>
            <a className="hover:cursor-pointer">
              <li>FAQ's</li>
            </a>
          </ul>
          <ul className="lg:text-xl text-gray-200 md:text-xs flex justify-around items-center">
            <li>contato@conecta.com</li>
            <li>(505)555-0125</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-5 lg:text-2xl">
          <p>Newsletter</p>

          <input
            type="email"
            placeholder="Insira seu e-mail aqui"
            className="focus:outline-none border-b-2 border-b-solid border-gray-200 focus:border-b-white"
          />
        </div>
      </footer>
  );
}

export default Footer_main;
