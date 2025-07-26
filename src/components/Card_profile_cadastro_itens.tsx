import IconeUsuario from "./Icone_user";

export default function Card_profile_cadastro_itens() {
  return (
    <div className="bg-white rounded-[20px] border border-black shadow-lg p-6 h-fit">
      <div className="flex items-center mb-6">
        <IconeUsuario />
        <div>
          <h2 className="font-epilogue text-2xl lg:text-3xl font-normal text-black">
            Antônio Carlos Oliveira
          </h2>
          <p className="font-epilogue text-lg lg:text-xl font-normal text-conecta-gray mt-2">
            Membro desde 08/12/2020
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-epilogue text-lg lg:text-xl text-conecta-gray">
          <span className="font-bold">Localização:</span>
          <br />
          Cidade Universitária
        </p>
      </div>
    </div>
  );
}
