import Header from "../components/Header_pages";
import Footer from "../components/Footer_Pages";
import ProductShowcase from "../components/Vitrine_Produtos";
import Estrela_Avaliacao from "../components/Estrela_Avaliacao";

export default function Item_page() {
  return (
    <div className="min-h-screen bg-white font-epilogue">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/66952cd2a29f94dc7b1ba4c8dd9b13c183e021b5?width=1000"
                alt="Livros Colleen Hoover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-normal text-black mb-4">
                Livros Colleen Hoover
              </h1>
              <div className="w-full h-px bg-gray-300 mb-6"></div>
            </div>

            <div className="space-y-4 text-2xl lg:text-3xl text-black leading-relaxed">
              <p>3 Livros da autora Colleen Hoover:</p>
              <ul className="ml-4 space-y-2">
                <li>• Verity</li>
                <li>• É assim que acaba</li>
                <li>• É assim que começa</li>
              </ul>

              <div className="pt-4">
                <p className="font-bold">Descrição:</p>
                <p>Livros semi-novos, com poucas marcas de uso</p>
              </div>

              <div className="pt-4">
                <p className="font-bold">Categoria:</p>
                <p>Livros</p>
              </div>

              <div className="pt-4">
                <p className="font-bold">Tipo:</p>
                <p>Troca</p>
              </div>

              <div className="pt-4">
                <p className="font-bold">Localização:</p>
                <p>Cidade Universitária</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6 mt-28">
            <div className="bg-gray-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-2xl font-normal text-black">
                Livros Colleen Hoover
              </h3>

              <div className="text-lg text-gray-600">
                <p>Item de:</p>
                <p className="font-bold underline">Antônio Carlos Oliveira</p>
              </div>

              <Estrela_Avaliacao rating={5} />

              <p className="text-lg text-gray-600">Item para troca</p>

              <button className="w-full bg-orange-400 hover:bg-orange-600 text-black text-xl py-6 rounded-2xl">
                Entrar em contato
              </button>
            </div>
          </div>
        </div>
      </main>

      <ProductShowcase />
      <Footer />
    </div>
  );
}
