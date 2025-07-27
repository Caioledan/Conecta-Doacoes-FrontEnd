type FilterType = 'TODOS' | 'DOACAO' | 'TROCA';

interface MenuLateralProps {
  onFilterChange: (type: FilterType) => void;
  currentFilter: FilterType;
  onCategoryChange: (category: string) => void;
  currentCategory: string | null;
}

function Menu_lateral({ 
  onFilterChange, 
  currentFilter,
  onCategoryChange,
  currentCategory 
}: MenuLateralProps) {
  const categories = [
    { value: 'ELETRONICO', label: 'Eletrônicos' },
    { value: 'LIVRO', label: 'Livros' },
    { value: 'MOVEL', label: 'Móveis' },
    { value: 'ROUPA', label: 'Roupas' }
  ];

  const locations = [
    { value: 'CENTRO', label: 'Centro' },
    { value: 'CIDADE_UNIVERSITARIA', label: 'Cidade Universitária' },
    { value: 'VILA_MATOSO', label: 'Vila Matoso' },
    { value: 'GUANABARA', label: 'Guanabara' }
  ];

  return (
    <div className="font-epilogue w-40">
      <button
        onClick={() => {
          onFilterChange('TODOS');
          onCategoryChange('');
        }}
        className={`font-bold mb-1 w-full text-left hover:text-blue-600 ${
          currentFilter === 'TODOS' && !currentCategory 
            ? 'text-blue-700 font-medium' 
            : ''
        }`}
      >
        Todos
      </button>

      <h2 className="font-bold mb-1">Categorias</h2>
      <ul className="space-y-1 mb-3 ml-8">
        {categories.map((category) => (
          <li key={category.value}>
            <button
              onClick={() => {
                onCategoryChange(category.value);
                onFilterChange('TODOS');
              }}
              className={`w-full text-left hover:text-blue-600 ${
                currentCategory === category.value 
                  ? 'text-blue-700 font-medium' 
                  : ''
              }`}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>

      <h2 className="font-bold mb-1">Localização</h2>
      <ul className="space-y-1 mb-3 ml-8">
        {locations.map((location) => (
          <li key={location.value}>
            <a href="#" className="hover:text-blue-600">
              {location.label}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="font-bold mb-1">Tipo</h2>
      <ul className="space-y-1 mb-3 ml-8">
        <li>
          <button
            onClick={() => {
              onFilterChange('TROCA');
              onCategoryChange('');
            }}
            className={`w-full text-left hover:text-blue-600 ${
              currentFilter === 'TROCA' 
                ? 'text-blue-700 font-medium' 
                : ''
            }`}
          >
            Troca
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onFilterChange('DOACAO');
              onCategoryChange('');
            }}
            className={`w-full text-left hover:text-blue-600 ${
              currentFilter === 'DOACAO' 
                ? 'text-blue-700 font-medium' 
                : ''
            }`}
          >
            Doação
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Menu_lateral;