import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Items_grid from "../components/Items_grid";
import Menu_lateral from "../components/Menu_lateral";
import Header_pages from "../components/Header_pages";
import Footer_Pages from "../components/Footer_Pages";
import { useItens } from "../hooks/useItens";
import { itensApi } from "../api/itensApi";
import type { Itens } from "../interfaces/Iitens";
import Loading from "../components/Loading";

function Items_Page() {
  const ITEMS_PER_PAGE = 6;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [searchResults, setSearchResults] = useState<Itens[] | null>(null);

  const {
    itens,
    loading: loadingFiltros,
    error: errorFiltros,
    resetFilters,
    filterCategory,
    setFilterCategory,
    filterLocation,
    setFilterLocation,
    filterType,
    setFilterType,
  } = useItens({ category: searchParams.get("category") });

  const doSearch = useCallback(async () => {
    if (!searchTerm.trim()) {
      setSearchResults(null);
      return;
    }
    try {
      const res = await itensApi.searchByName(searchTerm.trim());
      setVisibleCount(ITEMS_PER_PAGE);
      setSearchResults(res);
    } catch {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (initialSearch) {
      doSearch();
    }
  }, [initialSearch, doSearch]);

  useEffect(() => {
    if (filterCategory || filterLocation || (filterType && filterType !== "TODOS")) {
      setSearchResults(null);
      setSearchTerm("");
      searchParams.delete("search");
      setSearchParams(searchParams, { replace: true });
    }
  }, [filterCategory, filterLocation, filterType]);

  useEffect(() => {
    if (searchTerm) {
      const p = new URLSearchParams(searchParams);
      p.set("search", searchTerm);
      setSearchParams(p, { replace: true });
    }
  }, [searchTerm]);

  const allItems = searchResults ?? itens;
  const visibleItems = allItems.slice(0, visibleCount);
  const hasMore = visibleCount < allItems.length;
  const noItems = !loadingFiltros && !errorFiltros && allItems.length === 0;

  return (
    <>
      <Header_pages />

      <div className="ml-30 mt-10 mb-6">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={doSearch}
        />
      </div>

      <h1 className="font-epilogue text-3xl ml-30 mb-6">
        {searchResults
          ? `Resultados para “${searchTerm}”`
          : filterCategory
          ? `Itens na categoria ${filterCategory.toLowerCase()}`
          : filterLocation
          ? `Itens na localização ${filterLocation.toLowerCase()}`
          : filterType === "DOACAO"
          ? "Itens para doação"
          : filterType === "TROCA"
          ? "Itens para troca"
          : "Itens disponíveis"}
      </h1>

      <div className="flex ml-30 gap-20 relative">
        <Menu_lateral
          onFilterTypeChange={(t) => {
            setFilterType(t);
            setVisibleCount(ITEMS_PER_PAGE);
          }}
          onCategoryChange={(c) => {
            setFilterCategory(c);
            setVisibleCount(ITEMS_PER_PAGE);
          }}
          onLocationChange={(l) => {
            setFilterLocation(l);
            setVisibleCount(ITEMS_PER_PAGE);
          }}
          currentFilterType={filterType}
          currentCategory={filterCategory}
          currentLocation={filterLocation}
        />

        {loadingFiltros || (searchTerm && !searchResults) ? (
          <Loading /> 
        ) : noItems ? (
          <div className="w-2/3 p-10 flex flex-col items-center justify-center h-64">
            <p className="text-gray-600 text-xl">Nenhum item encontrado.</p>
            <button
              onClick={() => {
                resetFilters();
                setSearchResults(null);
                setSearchTerm("");
                setVisibleCount(ITEMS_PER_PAGE);
                setSearchParams({});
              }}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Limpar tudo
            </button>
          </div>
        ) : (
          <Items_grid
            items={visibleItems}
            onLoadMore={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
            hasMore={hasMore}
          />
        )}
      </div>

      <Footer_Pages />
    </>
  );
}

export default Items_Page;
