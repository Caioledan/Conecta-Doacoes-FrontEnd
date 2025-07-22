
import Items_card from "./Items_card";
import type { ItemForTrade } from "../db/items";

interface ItemsGridProps {
  items: ItemForTrade[];
  onLoadMore: () => void;
  hasMore: boolean;
}

function Items_grid({items, onLoadMore, hasMore}: ItemsGridProps){
    return (
        <div className="font-epilogue w-2/3 p-10">
            <div className="grid grid-cols-3 justify-items-center space-y-10">
                {items.map((item: ItemForTrade) => (
                    <Items_card key={item.id} item={item} />
                ))}
            </div>
            {hasMore && (
                <div className="flex justify-center">
                    <button onClick={onLoadMore} className="hover:cursor-pointer bg-soft-gray py-2 rounded-md w-100">Carregar mais</button>
                </div>
            )}
            {!hasMore && (
                <div className="flex justify-center mt-4">
                    <p>Não há mais items</p>
                </div>

            )}
        </div>
    )
}

export default Items_grid;