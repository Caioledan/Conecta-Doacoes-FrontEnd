import type { Itens } from "../interfaces/Iitens";
import Estrela_Avaliacao from "./Estrela_Avaliacao";

interface CardVendedorProps {
  item: Itens;
  onContactClick: () => void;
  className?: string;
}

export default function CardVendedor({ 
  item, 
  onContactClick, 
  className = ""
}: CardVendedorProps) {
  return (
    <div className={className}> 
      <div className="bg-gray-200 rounded-2xl p-6 space-y-4">
        <h3 className="text-2xl font-normal text-black">
          {item.nome}
        </h3>

        <div className="text-lg text-gray-600">
          <p>Item de:</p>
          <p className="font-bold underline">{item.usuario.nome}</p>
        </div>

        <Estrela_Avaliacao rating={5} />

        <p className="text-lg text-gray-600">Item para {item.tipo.toLowerCase()}</p>

        <button 
          onClick={onContactClick}
          className="w-full bg-orange-400 hover:bg-orange-600 text-black text-xl py-6 rounded-2xl cursor-pointer"
        >
          Entrar em contato
        </button>
      </div>
    </div>
  );
}