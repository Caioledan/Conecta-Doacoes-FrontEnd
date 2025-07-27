import axios from "axios";
import type { IformData } from "../interfaces/IformData";
import type { ApiResponse } from "../interfaces/ApiResponse.interface";
import { useState } from "react";


export const useCadastro = () => {
  const [formData, setFormData] = useState<IformData>({
    nome: "",
    email: "",
    telefone: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  });

  const [cadastrado , setCadstrado] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const cadastrar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
 

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const apiUrl =
        "http://localhost:8080/api/usuarios/cadastrar";
        

      const response = await axios.post<ApiResponse>(apiUrl, formData);
      

      alert("Cadastro realizado com sucesso");
      console.log("Resposta da API:", response.data);
      setCadstrado(true)

    } catch (error) {
      alert("Erro ao realizar o cadastro!");
      if (axios.isAxiosError(error)) {
        console.error("Detalhes do erro da API:", error.response?.data);
      } else {
        console.error("Erro inesperado:", error);
      }
      setCadstrado(false)
    }
  };

  return {
    handleChange,
    cadastrar,
    formData,
    cadastrado
  };
};
