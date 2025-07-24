import IconeUsuario from "./Icone_user";

export default function CartaoUsuario() {
  return (
    <div className="w-fit bg-white border black rounded-2xl  p-6 space-y-6 shadow-md">
      <div className="flex items-center space-x-4">
        <IconeUsuario />
        <div>
          <h2 className="text-xl font-semibold text-black">
            Antônio Carlos Oliveira
          </h2>
          <p className="text-gray-500 text-base">Membro desde 08/12/2020</p>
        </div>
      </div>

      <div>
        <p className="font-bold text-gray-800 text-lg">Localização:</p>
        <p className="text-gray-600 text-lg">Cidade Universitária</p>
      </div>

      <div>
        <a
          href="#"
          className="flex justify-center text-blue-600 underline text-base hover:text-blue-800"
        >
          editar dados
        </a>
      </div>
    </div>
  );
}
