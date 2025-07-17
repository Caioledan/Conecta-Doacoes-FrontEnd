function HeaderButtons() {
  return (
    <div className="flex justify-center items-center h-40 gap-6">
        <button className="bg-[var(--color-dark-green)] rounded-4xl h-12 w-40 text-2xl hover:cursor-pointer hover:shadow-md hover:shadow-green-600 hover:scale-105 duration-300 transform"><a href="#">Entrar</a></button>
        <button className="bg-[var(--color-dark-green)] rounded-4xl h-12 w-40 text-2xl hover:cursor-pointer hover:shadow-md hover:shadow-green-600 hover:scale-105 duration-300 transform"><a href="#">Cadastrar</a></button>
    </div>
  );
}

export default HeaderButtons;