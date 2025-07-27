// components/Menu_lateral.tsx
import React from 'react';

type FilterType = 'TODOS' | 'DOACAO' | 'TROCA';

interface MenuLateralProps {
  onFilterChange: (type: FilterType) => void;
  currentFilter: FilterType;
}

function Menu_lateral({ onFilterChange, currentFilter }: MenuLateralProps) {
  return (
    <div className="font-epilogue w-40">
         <button
            onClick={() => onFilterChange('TODOS')}
            className={`w-full text-left hover:text-blue-600 ${
              currentFilter === 'TODOS' ? 'text-blue-700 font-medium' : ''
            }`}
          >
            Todos
        </button>

      <h2 className="font-bold mb-1">Categorias</h2>
      <ul className="space-y-1 mb-3 ml-8">
        <li><a href="" className="hover:text-blue-600">Eletrônicos</a></li>
        <li><a href="" className="hover:text-blue-600">Livros</a></li>
        <li><a href="" className="hover:text-blue-600">Móveis</a></li>
        <li><a href="" className="hover:text-blue-600">Roupas</a></li>
      </ul>


      <h2 className="font-bold mb-1">Localização</h2>
      <ul className="space-y-1 mb-3 ml-8">
        <li><a href="" className="hover:text-blue-600">Centro</a></li>
        <li><a href="" className="hover:text-blue-600">Cidade Universitária</a></li>
        <li><a href="" className="hover:text-blue-600">Vila Matoso</a></li>
        <li><a href="" className="hover:text-blue-600">Guanabara</a></li>
      </ul>

      <h2 className="font-bold mb-1">Tipo</h2>
      <ul className="space-y-1 mb-3 ml-8">
        <li>
          <button
            onClick={() => onFilterChange('TROCA')}
            className={`w-full text-left hover:text-blue-600 ${
              currentFilter === 'TROCA' ? 'text-blue-700 font-medium' : ''
            }`}
          >
            Troca
          </button>
        </li>
        <li>
          <button
            onClick={() => onFilterChange('DOACAO')}
            className={`w-full text-left hover:text-blue-600 ${
              currentFilter === 'DOACAO' ? 'text-blue-700 font-medium' : ''
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