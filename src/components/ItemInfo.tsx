import React from 'react';
import type { Itens } from '../interfaces/Iitens';

interface ItemInfoProps {
  item: Itens;
}

const ItemInfo: React.FC<ItemInfoProps> = ({ item }) => {
    const capitalize = (str: string) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

  return (
    <div className="lg:col-span-1 space-y-6">
      <div>
        <h1 className="text-3xl font-normal text-black mb-4">
          {item.nome}
        </h1>
        <div className="w-full h-px bg-gray-300 mb-6"></div>
      </div>

      <div className="space-y-4 text-xl text-black leading-relaxed">
        <p>{item.descricao}</p>

        <div className="pt-4">
          <p className="font-bold">Categoria:</p>
          <p>{capitalize(item.categoria)}</p>
        </div>

        <div className="pt-4">
          <p className="font-bold">Tipo:</p>
          <p>{capitalize(item.tipo)}</p>
        </div>

        <div className="pt-4">
          <p className="font-bold">Condição:</p>
          <p>{capitalize(item.condicao)}</p>
        </div>

        <div className="pt-4">
          <p className="font-bold">Localização:</p>
          <p>{capitalize(item.localizacao)}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;