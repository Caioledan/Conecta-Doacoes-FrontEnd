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
    loading,
    error,
    refreshItens,
    fetchItens,
    fetchItensTroca,
    fetchItensDoacao,
    refreshItensTroca,
    refreshItensDoacao,
  };
};