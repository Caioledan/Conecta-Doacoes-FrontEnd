import { useNavigate } from "react-router-dom";

function Button_cadastrar() {
  const navigate = useNavigate()
  const handleCadastroClick = () => {
    navigate("/cadastroItem");
  };

  return (
    <div className="mt-8">
      <button onClick={handleCadastroClick} className="w-full bg-orange-400 hover:bg-orange-500 transition-colors rounded-[20px] shadow-lg py-3 px-6 cursor-pointer">
        <span className="font-epilogue text-lg lg:text-xl font-normal text-conecta-dark">
          Cadastrar item
        </span>
      </button>
    </div>
  );
}

export default Button_cadastrar;
