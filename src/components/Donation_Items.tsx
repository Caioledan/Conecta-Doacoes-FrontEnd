import Items_card from './Items_card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useItens } from '../hooks/useItens';

function Donation_Items() {
  const carousel = useRef<HTMLDivElement>(null);
  const { itens, loading, error } = useItens();

  function handleLeftClick() {
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  }

  function handleRightClick() {
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  }

  const donationItems = itens.filter(
    (item) => item.tipo === 'DOACAO'
  );

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
      <section className="flex flex-col py-10 text-end bg-white w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="text-[var(--color-dark-green)] text-3xl font-semibold font-epilogue text-start mb-5">
            Itens para doação
          </h1>
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={handleLeftClick}
              className="hover:cursor-pointer hover:scale-110 duration-200 transform flex-shrink-0 z-10"
            >
              <ChevronLeft size={48} />
            </button>
            <div
              ref={carousel}
              className="flex overflow-x-auto scroll-smooth no-scrollbar gap-3 md:gap-5 lg:gap-6 flex-1 min-w-0"
            >
              {donationItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-64 md:w-72 lg:w-80"
                >
                  <Items_card item={item} />
                </div>
              ))}
            </div>
            <button
              onClick={handleRightClick}
              className="hover:cursor-pointer hover:scale-110 duration-200 transform flex-shrink-0 z-10"
            >
              <ChevronRight size={48} />
            </button>
          </div>
        </div>
        <a
          href="/items"
          className="text-blue-500 underline text-xl pt-10 self-end"
        >
          Ver todos os itens
        </a>
      </section>
  );
}

export default Donation_Items;
