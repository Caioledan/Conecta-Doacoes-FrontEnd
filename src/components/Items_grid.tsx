import Items_card from "./Items_card";
import type { Itens, ItensWithImageUrl } from "../interfaces/Iitens";

interface ItemsGridProps {
  items: Itens[];
  onLoadMore: () => void;
  hasMore: boolean;
}

function Items_grid({ items, onLoadMore, hasMore }: ItemsGridProps) {
    if (!Array.isArray(items)) {
        return (
        <div className="font-epilogue w-2/3 p-10 flex items-center justify-center">
            <div className="">Não há itens disponíveis</div>
        </div>
        );
    }

    return (
        <div className="font-epilogue w-2/3 p-10">
            <div className="grid grid-cols-3 justify-items-center space-y-10">
                {items.map((item: Itens) => {
                    const imageUrl = item.dataItem 
                        ? `data:${item.dataItem.tipoArquivo};base64,${item.dataItem.imagemItem}`
                        : '';
                    
                    const itemWithImage: ItensWithImageUrl = {
                        ...item,
                        imageUrl
                    };
                    
                    return (
                        <Items_card 
                            key={item.id} 
                            item={itemWithImage} 
                        />
                    );
                })}
            </div>
            {hasMore && (
                <div className="flex justify-center">
                    <button onClick={onLoadMore} className="hover:cursor-pointer bg-soft-gray py-2 rounded-md w-100">
                        Carregar mais
                    </button>
                </div>
            )}
            {!hasMore && (
                <div className="flex justify-center mt-4">
                    <p>Não há mais itens</p>
                </div>
            )}
        </div>
    );
}

export default Items_grid;