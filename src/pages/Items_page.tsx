import { useState } from "react";
import Items_grid from "../components/Items_grid";
import Menu_lateral from "../components/Menu_lateral";
import Header_pages from "../components/Header_pages";
import Footer_Pages from "../components/Footer_Pages";
import { useItens } from "../hooks/useItens";

function Items_Page() {
    const ITEMS_PER_PAGE = 6;
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    const { 
        itens, 
        loading, 
        error, 
        resetFilters, 
        filterCategory,
        setFilterCategory,
        filterLocation,
        setFilterLocation,
        filterType,
        setFilterType
    } = useItens();


    const visibleItems = itens.slice(0, visibleCount);
    const hasMoreItems = visibleCount < itens.length;
    const hasNoItems = !loading && !error && itens.length === 0;

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
    };
    

    const getPageTitle = () => {
        if (filterCategory) return `Itens na categoria ${filterCategory.toLowerCase().replace('_', ' ')}`;
        if (filterLocation) return `Itens na localização ${filterLocation.toLowerCase().replace('_', ' ')}`;
        if (filterType === 'DOACAO') return 'Itens para doação';
        if (filterType === 'TROCA') return 'Itens para troca';
        return 'Itens disponíveis';
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
                        onClick={resetFilters}
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
            <h1 className="font-epilogue text-3xl ml-30 mt-10 mb-10">
                {getPageTitle()}
            </h1>
            <div className="flex ml-30 gap-20">
                <Menu_lateral 
                    onFilterTypeChange={(type) => {
                        setFilterType(type);
                        setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    onCategoryChange={(category) => {
                        setFilterCategory(category);
                        setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    onLocationChange={(location) => {
                        setFilterLocation(location);
                        setVisibleCount(ITEMS_PER_PAGE);
                    }}
                    currentFilterType={filterType}
                    currentCategory={filterCategory}
                    currentLocation={filterLocation}
                />

                {hasNoItems ? (
                    <div className="w-2/3 p-10 flex flex-col items-center justify-center h-64">
                        <p className="text-gray-600 text-xl">Nenhum item encontrado com os filtros selecionados.</p>
                        <button 
                            onClick={() => {
                                resetFilters();
                                setVisibleCount(ITEMS_PER_PAGE);
                            }}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Limpar filtros
                        </button>
                    </div>
                ) : (
                    <Items_grid 
                        items={visibleItems} 
                        onLoadMore={handleLoadMore} 
                        hasMore={hasMoreItems}
                    />
                )}
            </div>
            <Footer_Pages />
        </div>
    );
}

export default Items_Page;