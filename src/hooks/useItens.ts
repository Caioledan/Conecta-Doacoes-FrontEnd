import { useState, useEffect } from "react";
import { itensApi } from "../api/itensApi";
import type { Itens } from "../interfaces/Iitens";

type FilterType = 'TODOS' | 'DOACAO' | 'TROCA';

export const useItens = () => {
  const [itens, setItens] = useState<Itens[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterLocation, setFilterLocation] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<FilterType>('TODOS');

  useEffect(() => {
    const fetchFilteredItens = async () => {
      setLoading(true);
      setError(null);
      try {
        let data: Itens[];
        if (filterCategory) {
          data = await itensApi.getPorCategoria(filterCategory);
        } else if (filterLocation) {
          data = await itensApi.getPorLocalizacao(filterLocation);
        } else if (filterType === 'DOACAO') {
          data = await itensApi.getItensDoacao();
        } else if (filterType === 'TROCA') {
          data = await itensApi.getItensTroca();
        } else {
          data = await itensApi.getItens();
        }
        setItens(data);
      } catch (err) {
        setError("Erro ao carregar os itens.");
        console.error("Erro na requisição:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredItens();
  }, [filterCategory, filterLocation, filterType]);

  const resetFilters = () => {
    setFilterCategory(null);
    setFilterLocation(null);
    setFilterType('TODOS');
  };

  return {
    itens,
    loading,
    error,
    filterCategory,
    setFilterCategory,
    filterLocation,
    setFilterLocation,
    filterType,
    setFilterType,
    resetFilters,
  };
};