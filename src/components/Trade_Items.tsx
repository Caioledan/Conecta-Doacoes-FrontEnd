import Items_card from "./Items_card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useItens } from "../hooks/useItens";

function Trade_items() {
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

 
    const tradeItems = itens.filter(item => item.tipo === 'TROCA');

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <section className="flex flex-col">
            <div className="w-[75vw] text-end">
                <h1 className="text-[var(--color-dark-green)] text-3xl font-semibold font-epilogue ml-24 text-start">Itens para troca</h1>
                <div className="flex items-center gap-5" >
                    <button onClick={handleLeftClick} className="hover:cursor-pointer hover:scale-120 duration-200 transform"><ChevronLeft size={64}/></button>
                    <div className="flex overflow-x-auto scroll-smooth no-scrollbar" ref={carousel}>
                        <div className='flex justify-center items-center mb-5 gap-10 mt-6 mx-3'>
                            {tradeItems.map((item) => (
                                <Items_card key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    <button onClick={handleRightClick} className="hover:cursor-pointer hover:scale-120 duration-200 transform"><ChevronRight size={64}/></button>
                </div>
                <a href="/items" className="text-blue-500 underline text-xl mr-25">Ver todos os itens</a>
            </div>
        </section>
    )
}

export default Trade_items;