import { useState } from "react";
import Items_grid from "../components/Items_grid";
import { tradeItemsData } from "../db/items";
import Menu_lateral from "../components/Menu_lateral";
import Header_pages from "../components/Header_pages";
import Footer_Pages from "../components/Footer_Pages";

function Items_Page(){
    const ITEMS_PER_PAGE = 6;

    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
    };

    const visibleItems = tradeItemsData.slice(0, visibleCount);
    const hasMoreItems = visibleCount < tradeItemsData.length;

    return (
        <div>
            <Header_pages />
            <h1 className="font-epilogue text-3xl ml-30 mt-10 mb-10">Itens disponíveis</h1>
            <div className="flex ml-30 gap-20">
                <Menu_lateral />
                <Items_grid items={visibleItems} onLoadMore={handleLoadMore} hasMore={hasMoreItems}/>
            </div>
            <Footer_Pages />

        </div>

    )
}

export default Items_Page;