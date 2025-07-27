// src/hooks/useLogin.ts
import { useState } from "react";
import type { ILoginCredentials } from "../interfaces/IloginCredentials";
import { LoginApi } from "../api/loginApi";

export const useLogin = () => {
  const [credentials, setCredentials] = useState<ILoginCredentials>({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      username: e.target.value,
    }));
    setError(null); 
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({
      ...prev,
      password: e.target.value,
    }));
    setError(null); 
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
 
      if (!credentials.username || !credentials.password) {
        throw new Error("Por favor, preencha todos os campos");
      }


      await LoginApi.login(credentials);
      

      return true;
    } catch (err) {
      let errorMessage = "Falha no login";
      if (err instanceof Error) {
        errorMessage = err.message || errorMessage;
      }
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    credentials,
    isLoading,
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  };
};