import { useState } from "react";
import type { Iuser } from "../interfaces/Iuser";
import { userApi } from "../api/userApi";
import { toast } from "react-toastify";

export const useUser = () => {
  const [users, setUsers] = useState<Iuser[]>([]);
  const [user, setUser] = useState<Iuser>();
  const [loading, setLoading] = useState<boolean>(false);

  const obterUsuarios = async () => {
    setLoading(true);
    try {
      const response = await userApi.getUsers();
      setUsers(response);
    } catch (error) {
      toast.error("Não foi possível carregar os usuários.");
      console.error("Falha ao obter usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  const obterUsuario = async () => {
    setLoading(true);
    try {
      const response = await userApi.getUser();
      setUser(response);
    } catch (error) {
      toast.error("Não foi possível carregar os usuário.");
      console.error("Falha ao obter usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  return { users, user, obterUsuarios, obterUsuario, loading };
};
