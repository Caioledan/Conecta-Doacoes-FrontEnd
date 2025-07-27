import { useState, useEffect } from "react";
import { itensApi } from "../api/itensApi";
import type { Itens } from "../interfaces/Iitens";

export const useItens = () => {
  const [itens, setItens] = useState<Itens[]>([]);
  const [currentItem, setCurrentItem] = useState<Itens | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'TODOS' | 'DOACAO' | 'TROCA'>('TODOS');

  const fetchData = async (fetchFunction: () => Promise<Itens[]>) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFunction();
      setItens(data);
    } catch (err) {
      setError("Erro ao carregar itens");
      console.error("Erro na requisição:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchItens = async () => {
    await fetchData(() => 
      filterCategory 
        ? itensApi.getPorCategoria(filterCategory) 
        : itensApi.getItens()
    );
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
    await fetchData(() => 
      filterCategory
        ? itensApi.getPorCategoria(filterCategory).then(items => 
            items.filter(item => item.tipo === 'TROCA'))
        : itensApi.getItensTroca()
    );
  };

  const fetchItensDoacao = async () => {
    await fetchData(() => 
      filterCategory
        ? itensApi.getPorCategoria(filterCategory).then(items => 
            items.filter(item => item.tipo === 'DOACAO'))
        : itensApi.getItensDoacao()
    );
  };

  const fetchPorCategoria = async (categoria: string) => {
    setFilterCategory(categoria);
  };

  useEffect(() => {
    if (filterType === 'TODOS') {
      fetchItens();
    } else if (filterType === 'DOACAO') {
      fetchItensDoacao();
    } else if (filterType === 'TROCA') {
      fetchItensTroca();
    }
  }, [filterType, filterCategory]);

  const refreshItens = () => {
    setFilterCategory(null);
    setFilterType('TODOS');
    fetchItens();
  };

  const refreshItensTroca = () => {
    setFilterCategory(null);
    setFilterType('TROCA');
    fetchItensTroca();
  };

  const refreshItensDoacao = () => {
    setFilterCategory(null);
    setFilterType('DOACAO');
    fetchItensDoacao();
  };

  return {
    itens,
    currentItem,
    loading,
    error,
    filterCategory,
    filterType,
    fetchItemById,
    refreshItens,
    fetchItens,
    fetchItensTroca,
    fetchItensDoacao,
    fetchPorCategoria,
    setFilterType,
    refreshItensTroca,
    refreshItensDoacao,
  };
};