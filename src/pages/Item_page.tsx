import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import type { Itens } from "../interfaces/Iitens";
import ItemImage from "../components/ItemImage";
import ItemInfo from "../components/ItemInfo";
import CardVendedor from "../components/CardVendedor";
import { itensApi } from "../api/itensApi";
import Header_pages from "../components/Header_pages";
import Footer_Pages from "../components/Footer_Pages";

const Item_page: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Itens | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchItem = useCallback(async () => {
    if (!id) return;

    try {
      setLoading(true);
      setError(null);

      const itemId = parseInt(id);
      if (isNaN(itemId)) {
        throw new Error("ID inválido");
      }

      const itemData = await itensApi.getItemById(itemId);
      setItem(itemData);
    } catch (err) {
      setError("Erro ao carregar item");
      console.error("Erro na requisição:", err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  const handleContactClick = () => {
    if (item) {
      console.log("Contacting seller:", item.usuario.nome);
    }
  };

  return (
    <div className="min-h-screen bg-white font-epilogue flex flex-col">
      <Header_pages />

      <main className="container mx-auto px-4 py-8 flex-grow">
        {loading ? (
          <div className="text-center">Carregando...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : !item ? (
          <div className="text-center">Item não encontrado</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 mb-16">
            <ItemImage item={item} />
            <ItemInfo item={item} />
            <CardVendedor
              item={item}
              onContactClick={handleContactClick}
              className="lg:col-span-1 space-y-6 mt-28"
            />
          </div>
        )}
      </main>

      <Footer_Pages />
    </div>
  );
};

export default Item_page;
