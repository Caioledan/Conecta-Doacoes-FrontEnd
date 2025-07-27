import { useState } from "react";
import Items_grid from "../components/Items_grid";
import Menu_lateral from "../components/Menu_lateral";
import Header_pages from "../components/Header_pages";
import Footer_Pages from "../components/Footer_Pages";
import { useItens } from "../hooks/useItens";

function Items_Page() {
  const ITEMS_PER_PAGE = 6;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const { itens, loading, error, refreshItens } = useItens();

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  const visibleItems = itens.slice(0, visibleCount);
  const hasMoreItems = visibleCount < itens.length;

  if (loading) {
    return (
      <div>
        <Header_pages />
        <div className="flex justify-center items-center h-64">
          <p>Carregando itens...</p>
        </div>
        <Footer_Pages />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header_pages />
        <div className="flex flex-col items-center justify-center h-64 gap-4">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={refreshItens}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Tentar novamente
          </button>
        </div>
        <Footer_Pages />
      </div>
    );
  }

  return (
    <div>
      <Header_pages />
      <h1 className="font-epilogue text-3xl ml-30 mt-10 mb-10">Itens disponíveis</h1>
      <div className="flex ml-30 gap-20">
        <Menu_lateral />
        <Items_grid 
          items={visibleItems} 
          onLoadMore={handleLoadMore} 
          hasMore={hasMoreItems}
        />
      </div>
      <Footer_Pages />
    </div>
  );
}

export default Items_Page;