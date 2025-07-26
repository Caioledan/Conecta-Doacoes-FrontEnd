import { useState } from "react";
import Header from "../components/Header_profile";
import Card_profile from "../components/Card_profile";
import Card_Items_publicados from "../components/Card_Itens_publicados";
import Footer from "../components/Footer_Profile";
import { ChevronRight } from "lucide-react";
import { tradeItemsData } from "../db/items";
import Button_cadastrar from "../components/Button_cadastrar";

export default function Profile_page() {
  const publishedItems = tradeItemsData;

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    const nextStartIndex = startIndex + itemsPerPage;

    if (nextStartIndex >= publishedItems.length) {
      setStartIndex(0);
    } else {
      setStartIndex(nextStartIndex);
    }
  };

  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = publishedItems.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white font-epilogue">
      <Header />
      <main className="px-4 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <Card_profile />
            <Button_cadastrar />
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-[20px] border border-black shadow-lg p-6 mb-8">
              <h2 className="font-epilogue text-2xl lg:text-3xl font-normal text-black mb-6">
                Itens publicados
              </h2>

              <div className="flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                  {itemsToShow.map((item, index) => (
                    <Card_Items_publicados
                      key={item.id || index}
                      image={item.imageUrl}
                      title={item.title}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronRight className="w-8 h-8 text-gray-400 transform" />
                </button>
              </div>

              <h2 className="font-epilogue text-2xl lg:text-3xl font-normal text-black mb-6 mt-10">
                Histórico de itens doados/recebidos
              </h2>

              <div className="text-center py-16">
                <p className="font-epilogue text-xl lg:text-2xl font-normal text-conecta-gray">
                  Não há itens no histórico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
