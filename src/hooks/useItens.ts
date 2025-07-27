import { useState, useEffect } from "react";
import { itensApi } from "../api/itensApi";
import type { Itens } from "../interfaces/Iitens";

export const useItens = () => {
  const [itens, setItens] = useState<Itens[]>([]);
  const [currentItem, setCurrentItem] = useState<Itens | null>(null);
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

  const fetchItemById = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await itensApi.getItemById(id);
      setCurrentItem(data);
      return data;
    } catch (err) {
      setError("Erro ao carregar item");
      console.error("Erro na requisição:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchItensTroca = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await itensApi.getItensTroca();
      setItens(data);
    } catch (err) {
      setError("Erro ao carregar itens para troca");
      console.error("Erro na requisição:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchItensDoacao = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await itensApi.getItensDoacao();
      setItens(data);
    } catch (err) {
      setError("Erro ao carregar itens para doação");
      console.error("Erro na requisição:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItens();
  }, []);

  const refreshItens = () => {
    fetchItens();
  };

  const refreshItensTroca = () => {
    fetchItensTroca();
  };

  const refreshItensDoacao = () => {
    fetchItensDoacao();
  };

  return {
    itens,
    currentItem,
    loading,
    error,
    fetchItemById,
    refreshItens,
    fetchItens,
    fetchItensTroca,
    fetchItensDoacao,
    refreshItensTroca,
    refreshItensDoacao,
  };
};