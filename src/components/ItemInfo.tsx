import React, { useEffect, useState } from "react";
import type { Itens } from "../interfaces/Iitens";

interface ItemInfoProps {
  item: Itens;
}

const ItemInfo: React.FC<ItemInfoProps> = ({ item }) => {
  const [, setNomeFormatado] = useState<string>("");

  const capitalize = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const formatarLocalizacao = (localizacao: string) => {
    switch (localizacao) {
      case "VILA_MATOSO":
        return "Vila Matoso";
      case "CIDADE_UNIVERSITARIA":
        return "Cidade Universitária";
      default:
        return capitalize(localizacao.replaceAll("_", " "));
    }
  };

  useEffect(() => {
    const nome = formatarLocalizacao(item.localizacao);
    setNomeFormatado(nome);
  }, [item.localizacao]);

  return (
    <div className="lg:col-span-1 space-y-6">
      <div>
        <h1 className="text-3xl font-normal text-black mb-4">{item.nome}</h1>
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
          <p>{formatarLocalizacao(item.localizacao)}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
