import type { Itens } from "../interfaces/Iitens";

interface ItemsCardProps {
  item: Itens;
}

function Items_card({ item }: ItemsCardProps) {

  const imageSrc = item.dataItem 
    ? `data:${item.dataItem.tipoArquivo};base64,${item.dataItem.imagemItem}`
    : '';

    function capitalizeFirstLetter(str: string) {
      if (!str) return str;
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

  return (
    <a href={`/item/${item.id}`} className="hover:scale-102 duration-200 transform">
      <div className="min-w-70 w-70 h-110 bg-white border flex flex-col justify-center items-center text-start font-epilogue rounded-xl overflow-hidden">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={item.nome}
            className="max-h-45 w-full object-cover"
          />
        )}
        
        <div className="w-full text-start p-4">
          <h3 className="text-xl font-medium text-gray-800 h-12 flex items-center">
            {item.nome}
          </h3>

          <div className="text-sm text-gray-600 mt-2 h-10">
            <p>{item.descricao}</p>
          </div>

          <div className="mt-4 text-sm">
            <span className="font-bold text-gray-800">Tipo</span>
            <p className="text-gray-600">{capitalizeFirstLetter(item.tipo)}</p>
          </div>

          <div className="mt-4 text-sm">
            <span className="font-bold text-gray-800">Categoria</span>
            <p className="text-gray-600">{capitalizeFirstLetter(item.categoria)}</p>
          </div>

          <div className="mt-2 text-sm">
            <span className="font-bold text-gray-800">Condição</span>
            <p className="text-gray-600">{capitalizeFirstLetter(item.condicao)}</p>
          </div>
        </div>
      </div>
    </a>
  );
}


export default Items_card;