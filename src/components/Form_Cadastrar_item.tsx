import { ChevronDown, ImageIcon } from "lucide-react";

export default function Form_Cadastrar_item() {
  return (
    <div className="w-full max-w-[1200px] bg-white border border-black rounded-[20px] shadow-lg p-6 lg:p-8 mx-auto">
      <h2 className="text-[24px] font-normal text-black mb-8">
        Cadastrar novo item
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-full max-w-[260px] h-[160px] bg-gray-100 border border-black rounded-[5px] shadow-lg mx-auto flex flex-col items-center justify-center">
              <ImageIcon className="w-[40px] h-[40px] text-gray-400 mb-2" />
            </div>
            <button className="text-[16px] text-blue-600 underline mt-2">
              Adicionar foto
            </button>
          </div>

          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Tipo
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="tipo" value="doacao" />
                <span className="text-[16px]">Doação</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="tipo" value="troca" />
                <span className="text-[16px]">Troca</span>
              </label>
            </div>
          </div>

          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Categoria
            </label>
            <div className="relative w-full max-w-[260px]">
              <select className="w-full h-[48px] border border-black rounded-[5px] shadow px-4 appearance-none">
                <option value="">Selecione</option>
                <option value="roupas">Roupas</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="livros">Livros</option>
                <option value="moveis">Móveis</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 w-[15px]" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite o nome do item"
              className="w-full h-[48px] border border-black rounded-[5px] shadow px-4"
            />
          </div>
          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Descrição
            </label>
            <input
              type="text"
              placeholder="Descreva o item"
              className="w-full h-[48px] border border-black rounded-[5px] shadow px-4"
            />
          </div>

          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Localização
            </label>
            <input
              type="text"
              placeholder="Digite a localização"
              className="w-full h-[48px] border border-black rounded-[5px] shadow px-4"
            />
          </div>

          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Condição
            </label>
            <input
              type="text"
              placeholder="Ex: Novo, Usado, Seminovo"
              className="w-full h-[48px] border border-black rounded-[5px] shadow px-4"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <button className="w-full lg:w-[200px] h-[48px] bg-green-600 hover:bg-green-700 transition text-white rounded-[20px] text-[18px]">
          Cadastrar item
        </button>
      </div>
    </div>
  );
}
