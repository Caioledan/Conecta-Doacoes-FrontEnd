import { useState } from "react";
import axios from "axios";
import type { IcadastroItems } from "../interfaces/IcadastroItem";
import { itensApi } from "../api/itensApi";

export const useCadastroItem = () => {
  const [itemFormData, setItemFormData] = useState<IcadastroItems>({
    nome: "",
    descricao: "",
    categoria: "",
    condicao: "",
    localizacao: "",
  });

  const [arquivoImagem, setArquivoImagem] = useState<File | null>(null);
  const [sucesso, setSucesso] = useState<boolean>(false);
  const [erro, setErro] = useState<string | null>(null); // Opcional: para exibir mensagens de erro

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setItemFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setArquivoImagem(event.target.files[0]);
    }
  };

  // Função para limpar o formulário
  const resetForm = () => {
    setItemFormData({
      nome: "",
      descricao: "",
      categoria: "",
      condicao: "",
      localizacao: "",
    });
    setArquivoImagem(null);
  };

  const cadastrarItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSucesso(false);
    setErro(null);

    if (!arquivoImagem) {
      alert("Por favor, adicione uma imagem para o item.");
      return;
    }

    alert(arquivoImagem)


    const formData = new FormData();
    formData.append("nome", itemFormData.nome);
    formData.append("descricao", itemFormData.descricao);
    formData.append("categoria", itemFormData.categoria.toUpperCase());
    formData.append("condicao", itemFormData.condicao.toUpperCase());
    formData.append("localizacao", itemFormData.localizacao.toUpperCase());
    formData.append("arquivoImagem", arquivoImagem);
    formData.append("usuarioId", "1");
    
    try {
      const responseData = await itensApi.cadastrarItem(formData);
      alert("Item cadastrado com sucesso!");
      console.log("Resposta da API:", responseData);

      setSucesso(true); // Define o sucesso para disparar o redirecionamento
      resetForm(); // Limpa o formulário
    } catch (error) {
      alert("Erro ao cadastrar o item!");
      setSucesso(false);

      if (axios.isAxiosError(error)) {
        console.error("Detalhes do erro da API:", error.response?.data);
        setErro(error.response?.data?.message || "Ocorreu um erro na API.");
      } else {
        console.error("Erro inesperado:", error);
        setErro("Ocorreu um erro inesperado.");
      }
    }
  };

  return {
    itemFormData,
    arquivoImagem,
    sucesso,
    erro, 
    handleChange,
    handleFileChange,
    cadastrarItem,
  };
};
