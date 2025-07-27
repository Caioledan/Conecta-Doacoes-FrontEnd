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
    usuarioId: 1,
  });

  const [arquivoImagem, setArquivoImagem] = useState<File | null>(null);
  const [sucesso, setSucesso] = useState<boolean>(false);
  const [erro, setErro] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const resetForm = () => {
    setItemFormData({
      nome: "",
      descricao: "",
      categoria: "",
      condicao: "",
      localizacao: "",
      usuarioId: localStorage.getItem("currentIdLogged"),
    });
    setArquivoImagem(null);
  };

  const cadastrarItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSucesso(false);
    setErro(null);
    setIsLoading(true);

    if (!arquivoImagem) {
      alert("Por favor, adicione uma imagem para o item.");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      

      formData.append("nome", itemFormData.nome.trim());
      formData.append("descricao", itemFormData.descricao.trim());
      formData.append("categoria", itemFormData.categoria.toUpperCase());
      formData.append("condicao", itemFormData.condicao.toUpperCase());
      formData.append("localizacao", itemFormData.localizacao.toUpperCase());
      formData.append("usuarioId", itemFormData.usuarioId.toString());
      

      formData.append("arquivoImagem", arquivoImagem);

      console.log("Dados sendo enviados:");
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await itensApi.cadastrarItem(formData);
      
      if (response) {
        alert("Item cadastrado com sucesso!");
        setSucesso(true);
        resetForm();
      }
    } catch (error) {
      console.error("Erro detalhado:", error);
      
      let errorMessage = "Erro ao cadastrar o item";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || 
                      error.response?.data?.error || 
                      error.message || 
                      "Erro na comunicação com o servidor";
        
        console.error("Detalhes do erro:", error.response?.data);
      }
      
      setErro(errorMessage);
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    itemFormData,
    arquivoImagem,
    sucesso,
    erro,
    isLoading,
    handleChange,
    handleFileChange,
    cadastrarItem,
  };
};