import type { Itens } from "../interfaces/Iitens";

interface ItemsCardProps {
  item: Itens;
}

function Items_card({ item }: ItemsCardProps) {
  // Converte a imagem Base64 para URL de dados
  const imageSrc = item.dataItem 
    ? `data:${item.dataItem.tipoArquivo};base64,${item.dataItem.imagemItem}`
    : '';

  return (
    <a href={`/item/${item.id}`} className="hover:scale-102 duration-200 transform">
      <div className="min-w-70 w-70 h-100 bg-white border flex flex-col justify-center items-center text-start font-epilogue rounded-xl overflow-hidden">
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
            <span className="font-bold text-gray-800">Categoria</span>
            <p className="text-gray-600">{item.categoria}</p>
          </div>

          <div className="mt-2 text-sm">
            <span className="font-bold text-gray-800">Condição</span>
            <p className="text-gray-600">{item.condicao}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

// Como usar para testes no App.tsx
{/*
  const [items, setItems] = useState<Itens[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando chamada à API
    const fetchItems = async () => {
      try {
        // Substitua por sua chamada real à API
        const response = await fetch('/api/itens');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div>Carregando...</div>;

  <div className='flex justify-center items-center h-screen'>
    {items.map((item) => (
      <Items_card key={item.id} item={item} />
    ))}
  </div>
*/}

export default Items_card;