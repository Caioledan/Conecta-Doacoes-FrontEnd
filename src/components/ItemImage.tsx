import React from 'react';
import type { Itens } from '../interfaces/Iitens';

interface ItemImageProps {
  item: Itens;
}

const ItemImage: React.FC<ItemImageProps> = ({ item }) => {

  const imageSrc = item.dataItem?.imagemItem 
    ? `data:${item.dataItem.tipoArquivo};base64,${item.dataItem.imagemItem}`
    : 'https://via.placeholder.com/500';

  return (
    <div className="lg:col-span-1">
      <div className="aspect-square rounded-2xl overflow-hidden">
        <img
          src={imageSrc}
          alt={item.nome}
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500';
          }}
        />
      </div>
    </div>
  );
};

export default ItemImage;