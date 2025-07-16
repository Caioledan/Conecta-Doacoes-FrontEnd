function HeaderButtons() {
  return (
    <div className="flex justify-center items-center h-40 gap-10">
        <button className="bg-[var(--color-dark-green)] rounded-4xl h-15 w-45 text-2xl hover:cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-300 transform"><a href="#">Entrar</a></button>
        <button className="bg-[var(--color-dark-green)] rounded-4xl h-15 w-45 text-2xl hover:cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-300 transform"><a href="#">Cadastrar</a></button>
    </div>
  );
}

export default HeaderButtons;