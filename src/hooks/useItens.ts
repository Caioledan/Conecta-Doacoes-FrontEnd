import { useState, useEffect } from "react";
import { itensApi } from "../api/itensApi";
import type { Itens } from "../interfaces/Iitens";

export const useItens = () => {
  const [itens, setItens] = useState<Itens[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItens = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await itensApi.getItens();
      setItens(data);
    } catch (err) {
      setError("Erro ao carregar itens");
      console.error("Erro na requisição:", err);
    } finally {
      setLoading(false);
    }
  };

  // const categoria = async (categoria: string) => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     // GET DE CATEGORIAS getPorCategoria(categoria)
  //     setItens(data);
  //   } catch (err) {
  //     setError("Erro ao carregar itens");
  //     console.error("Erro na requisição:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchItens();
  }, []);

  const refreshItens = () => {
    fetchItens();
  };

  return {
    itens,
    loading,
    error,
    refreshItens,
  };
};