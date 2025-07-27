import { ChevronDown, ImageIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCadastroItem } from "../hooks/useCadastroItem";

export default function Form_Cadastrar_item() {
  const navigate = useNavigate();

  const {
    itemFormData,
    arquivoImagem,
    sucesso,
    handleChange,
    handleFileChange,
    cadastrarItem,
  } = useCadastroItem();

  useEffect(() => {
    if (sucesso) {
      navigate("/");
    }
  }, [sucesso, navigate]);

  return (
    <form
      onSubmit={cadastrarItem}
      className="w-full max-w-[1200px] bg-white border border-black rounded-[20px] shadow-lg p-6 lg:p-8 mx-auto"
    >
      <h2 className="text-[24px] font-normal text-black mb-8">
        Cadastrar novo item
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="space-y-6">
          <div className="text-center">
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />
            <div className="w-full max-w-[260px] h-[160px] bg-gray-100 border border-black rounded-[5px] shadow-lg mx-auto flex flex-col items-center justify-center">
              {arquivoImagem ? (
                <img
                  src={URL.createObjectURL(arquivoImagem)}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-[5px]"
                />
              ) : (
                <ImageIcon className="w-[40px] h-[40px] text-gray-400 mb-2" />
              )}
            </div>
            <button
              type="button"
              className="text-[16px] text-blue-600 underline mt-2"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              {arquivoImagem ? "Trocar foto" : "Adicionar foto"}
            </button>
          </div>

          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Tipo
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="tipo" 
                  value="DOACAO" 
                  checked={itemFormData.tipo === "DOACAO"}
                  onChange={handleChange}
                />
                <span className="text-[16px]">Doação</span>
              </label>
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="tipo" 
                  value="TROCA" 
                  checked={itemFormData.tipo === "TROCA"}
                  onChange={handleChange}
                />
                <span className="text-[16px]">Troca</span>
              </label>
            </div>
          </div>

          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Categoria
            </label>
            <div className="relative w-full max-w-[260px]">
              <select
                name="categoria"
                value={itemFormData.categoria}
                onChange={handleChange}
                className="w-full h-[48px] border border-black rounded-[5px] shadow px-4 appearance-none"
                required
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="ROUPA">Roupas</option>
                <option value="ELETRONICO">Eletrônicos</option>
                <option value="LIVRO">Livros</option>
                <option value="MOVEL">Móveis</option>
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
              name="nome"
              placeholder="Digite o nome do item"
              className="w-full h-[48px] border border-black rounded-[5px] shadow px-4"
              value={itemFormData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Descrição
            </label>
            <input
              type="text"
              name="descricao"
              placeholder="Descreva o item"
              className="w-full h-[48px] border border-black rounded-[5px] shadow px-4"
              value={itemFormData.descricao}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Localização
            </label>
            <div className="relative w-full">
              <select
                name="localizacao"
                value={itemFormData.localizacao}
                onChange={handleChange}
                className="w-full h-[48px] border border-black rounded-[5px] shadow px-4 appearance-none"
                required
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="CENTRO">Centro</option>
                <option value="VILA">Vila</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 w-[15px]" />
            </div>
          </div>

          <div>
            <label className="text-[18px] font-normal text-black block mb-2">
              Condição
            </label>
            <div className="relative w-full">
              <select
                name="condicao"
                value={itemFormData.condicao}
                onChange={handleChange}
                className="w-full h-[48px] border border-black rounded-[5px] shadow px-4 appearance-none"
                required
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="NOVO">Novo</option>
                <option value="USADO">Usado</option>
                <option value="SEMINOVO">Seminovo</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 w-[15px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <button
          type="submit"
          className="w-full lg:w-[200px] h-[48px] bg-green-600 hover:bg-green-700 transition text-white rounded-[20px] text-[18px]"
        >
          Cadastrar item
        </button>
      </div>
    </form>
  );
}