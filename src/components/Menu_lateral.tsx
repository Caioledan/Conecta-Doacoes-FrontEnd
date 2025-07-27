type FilterType = 'TODOS' | 'DOACAO' | 'TROCA';

interface MenuLateralProps {

  onFilterTypeChange: (type: FilterType) => void;
  onCategoryChange: (category: string | null) => void;
  onLocationChange: (location: string | null) => void;
  
  currentFilterType: FilterType;
  currentCategory: string | null;
  currentLocation: string | null;
}

function Menu_lateral({ 
  onFilterTypeChange, 
  onCategoryChange, 
  onLocationChange,
  currentFilterType,
  currentCategory,
  currentLocation
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

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    onLocationChange(null);
    onFilterTypeChange('TODOS');
  };

  const handleLocationClick = (location: string) => {
    onLocationChange(location);
    onCategoryChange(null);
    onFilterTypeChange('TODOS');
  };

  const handleTypeClick = (type: FilterType) => {
    onFilterTypeChange(type);
    onCategoryChange(null);
    onLocationChange(null);
  };
  
  const handleTodosClick = () => {
    onCategoryChange(null);
    onLocationChange(null);
    onFilterTypeChange('TODOS');
  };

  return (
    <div className="font-epilogue w-48">
      <button
        onClick={handleTodosClick}
        className={`font-bold mb-1 w-full text-left hover:text-blue-600 ${
          currentFilterType === 'TODOS' && !currentCategory && !currentLocation 
            ? 'text-blue-700 font-medium' : ''
        }`}
      >
        Todos
      </button>

      <h2 className="font-bold mb-1">Categorias</h2>
      <ul className="space-y-1 mb-3 ml-8">
        {categories.map((category) => (
          <li key={category.value}>
            <button
              onClick={() => handleCategoryClick(category.value)}
              className={`w-full text-left hover:text-blue-600 ${
                currentCategory === category.value ? 'text-blue-700 font-medium' : ''
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
            <button
              onClick={() => handleLocationClick(location.value)}
              className={`w-full text-left hover:text-blue-600 ${
                currentLocation === location.value ? 'text-blue-700 font-medium' : ''
              }`}
            >
              {location.label}
            </button>
          </li>
        ))}
      </ul>

      <h2 className="font-bold mb-1">Tipo</h2>
      <ul className="space-y-1 mb-3 ml-8">
        <li>
          <button
            onClick={() => handleTypeClick('TROCA')}
            className={`w-full text-left hover:text-blue-600 ${
              currentFilterType === 'TROCA' && !currentCategory && !currentLocation ? 'text-blue-700 font-medium' : ''
            }`}
          >
            Troca
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTypeClick('DOACAO')}
            className={`w-full text-left hover:text-blue-600 ${
              currentFilterType === 'DOACAO' && !currentCategory && !currentLocation ? 'text-blue-700 font-medium' : ''
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