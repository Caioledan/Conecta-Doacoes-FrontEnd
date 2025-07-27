import IconeUsuario from "./Icone_user";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";

export default function Card_profile() {
  const { user, loading, obterUsuario } = useUser();

  useEffect(() => {
    obterUsuario();
  }, []);

  return (
    <div className="bg-white rounded-[20px] border border-black shadow-lg p-6 h-fit">
      <div className="flex items-center mb-6">
        <IconeUsuario />
        <div>
          <h2 className="font-epilogue text-2xl lg:text-3xl font-normal text-black">
            Nome: {loading ? "Carregando..." : user?.nome}
          </h2>
          <p className="font-epilogue text-lg lg:text-xl font-normal text-conecta-gray mt-2">
            Email: {loading ? "Carregando..." : user?.email}
          </p>
          <p className="font-epilogue text-lg lg:text-xl font-normal text-conecta-gray mt-2">
            Tel: {loading ? "Carregando..." : user?.telefone}
          </p>
        </div>
      </div>
    </div>
  );
}
