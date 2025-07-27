import { useState } from "react";
import Items_grid from "../components/Items_grid";
import Menu_lateral from "../components/Menu_lateral";
import Header_pages from "../components/Header_pages";
import Footer_Pages from "../components/Footer_Pages";
import { useItens } from "../hooks/useItens";

function Items_Page() {
    const ITEMS_PER_PAGE = 6;
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [filterType, setFilterType] = useState<'TODOS' | 'DOACAO' | 'TROCA'>('TODOS');
    const [filterCategory, setFilterCategory] = useState<string | null>(null);
    const { itens, loading, error, refreshItens } = useItens();

    const filteredItems = itens.filter(item => {
        const typeMatch = filterType === 'TODOS' || item.tipo === filterType;
        const categoryMatch = !filterCategory || item.categoria === filterCategory;
        return typeMatch && categoryMatch;
    });

    const visibleItems = filteredItems.slice(0, visibleCount);
    const hasMoreItems = visibleCount < filteredItems.length;
    const hasNoItems = !loading && !error && filteredItems.length === 0;

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
    };

    const handleFilterChange = (type: 'TODOS' | 'DOACAO' | 'TROCA') => {
        setFilterType(type);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const handleCategoryChange = (category: string | null) => {
        setFilterCategory(category);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const handleResetFilters = () => {
        setFilterType('TODOS');
        setFilterCategory(null);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    if (loading) {
        return (
            <div>
                <Header_pages />
                <div className="flex justify-center items-center h-130">
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

    if (hasNoItems) {
        return (
            <div>
                <Header_pages />
                <h1 className="font-epilogue text-3xl ml-30 mt-10 mb-10">
                    {filterCategory 
                        ? `Itens na categoria ${filterCategory.toLowerCase()}`
                        : "Itens disponíveis"}
                    {filterType !== 'TODOS' && ` para ${filterType.toLowerCase()}`}
                </h1>
                <div className="flex ml-30 gap-20">
                    <Menu_lateral 
                        onFilterChange={handleFilterChange}
                        currentFilter={filterType}
                        onCategoryChange={handleCategoryChange}
                        currentCategory={filterCategory}
                    />
                    <div className="w-2/3 p-10 flex flex-col items-center justify-center h-64">
                        <p className="text-gray-600 text-xl">
                            {filterCategory 
                                ? `Nenhum item encontrado na categoria ${filterCategory.toLowerCase()}`
                                : filterType !== 'TODOS'
                                    ? `Nenhum item para ${filterType.toLowerCase()} disponível`
                                    : "Nenhum item disponível no momento"}
                        </p>
                        <button 
                            onClick={handleResetFilters}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Limpar filtros
                        </button>
                    </div>
                </div>
                <Footer_Pages />
            </div>
        );
    }

    return (
        <div>
            <Header_pages />
            <h1 className="font-epilogue text-3xl ml-30 mt-10 mb-10">
                {filterCategory 
                    ? `Itens na categoria ${filterCategory.toLowerCase()}`
                    : "Itens disponíveis"}
                {filterType !== 'TODOS' && ` para ${filterType.toLowerCase()}`}
            </h1>
            <div className="flex ml-30 gap-20">
                <Menu_lateral 
                    onFilterChange={handleFilterChange}
                    currentFilter={filterType}
                    onCategoryChange={handleCategoryChange}
                    currentCategory={filterCategory}
                />
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