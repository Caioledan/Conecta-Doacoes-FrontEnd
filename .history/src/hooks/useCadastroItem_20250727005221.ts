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
  const [erro, setErro] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setItemFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setArquivoImagem(file);
    }
  };

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

    try {
      const formData = new FormData();
      formData.append("nome", "Camiseta");
      formData.append("descricao", "Camiseta usada");
      formData.append("categoria", "ROUPA");
      formData.append("condicao", "USADO");
      formData.append("localizacao", "CENTRO");
      formData.append("usuarioId", "1");
      formData.append("arquivoImagem", ""); 

      const response = await itensApi.cadastrarItem(formData);

      alert("Item cadastrado com sucesso!");
      console.log("Resposta da API:", response);
      setSucesso(true);
      resetForm();
    } catch (error) {
      console.error("Erro ao cadastrar item:", error);
      setSucesso(false);

      if (axios.isAxiosError(error)) {
        const mensagemErro = error.response?.data?.message || "Erro na comunicação com a API.";
        alert(mensagemErro);
        setErro(mensagemErro);
      } else {
        alert("Erro inesperado ao cadastrar item.");
        setErro("Erro inesperado.");
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
