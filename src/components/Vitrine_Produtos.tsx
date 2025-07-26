import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./Card_produtos";
import { useState } from "react";

const produtos = [
  {
    title: "Livros Colleen Hoover",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0c7a8097abcd8164ae8ea45d94239cedf4772203?width=444",
    condition: "3 Livros\nSemi-novos",
    type: "Troca",
  },
  {
    title: "Coleção Harry Potter",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f6cd918db1c1f64d302056ad3d44aed5a1ead238?width=500",
    condition: "3 Livros\nNovos",
    type: "Troca",
  },
  {
    title: "Chuteira preta",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/a13480162a317653a564b5c45dc0a4cae03d7976?width=322",
    condition: "1 Chuteira 42\nNovo",
    type: "Troca",
  },
  {
    title: "Tênis Esportivo",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/a13480162a317653a564b5c45dc0a4cae03d7976?width=322",
    condition: "1 Tênis 40\nSemi-novo",
    type: "Troca",
  },
  {
    title: "Livro Romance",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0c7a8097abcd8164ae8ea45d94239cedf4772203?width=444",
    condition: "1 Livro\nNovo",
    type: "Troca",
  },
];

export default function VitrineProdutos() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const nextSlide = () => {
    setStartIndex((prev) => {
      const nextIndex = prev + 1;
      // If we reach the end, loop back to the beginning
      return nextIndex > produtos.length - itemsToShow ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setStartIndex((prev) => {
      const prevIndex = prev - 1;
      // If we're at the beginning, go to the last possible position
      return prevIndex < 0 ? produtos.length - itemsToShow : prevIndex;
    });
  };

  const currentProducts = produtos.slice(startIndex, startIndex + itemsToShow);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-normal text-black mb-12 text-center">
          Veja mais produtos
        </h2>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>

          <div className="flex justify-center gap-8 overflow-hidden">
            {currentProducts.map((product, index) => (
              <div key={startIndex + index} className="flex-shrink-0">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
