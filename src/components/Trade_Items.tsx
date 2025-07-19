import Items_card from "./Items_card";
import { tradeItemsData } from "../db/items";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

function Trade_items(){
    const carousel = useRef<HTMLDivElement>(null)

    function handleLeftClick() {
        if (carousel.current) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth ;
        }
    }

    function handleRightClick() {
        if (carousel.current) {
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
    }

    return (
        <section className="w-full h-screen flex items-center justify-center flex-col">
            <div className="w-[75vw]">
                <h1 className="text-[var(--color-dark-green)] text-3xl font-semibold font-epilogue ml-24">Itens para troca</h1>
                <div className="flex items-center gap-5" >
                    <button onClick={handleLeftClick} className="hover:cursor-pointer hover:scale-120 duration-200 transform"><ChevronLeft size={64}/></button>
                    <div className="flex overflow-x-auto scroll-smooth no-scrollbar" ref={carousel}>
                        
                        <div className='flex justify-center items-center mb-5 gap-10 mt-6 mx-3'>
                            {tradeItemsData.map((item) => (
                            <Items_card key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    <button onClick={handleRightClick} className="hover:cursor-pointer hover:scale-120 duration-200 transform"><ChevronRight size={64}/></button>
                </div>
                


            </div>
  
        </section >
    )
}

export default Trade_items;