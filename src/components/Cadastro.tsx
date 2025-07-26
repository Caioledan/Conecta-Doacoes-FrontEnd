import { useEffect } from "react";
import { useCadastro } from "../hooks/useCadastro";
// 1. Importe os hooks 'useNavigate' e 'useEffect'
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();

    const { handleChange, cadastrar, formData, cadastrado } = useCadastro();

    useEffect(() => {
        if (cadastrado) {
            navigate("/");
        }
    }, [cadastrado, navigate]); 

    return (
        <div className="flex ml-30 items-center font-epilogue">
            <form onSubmit={cadastrar} className="flex flex-col justify-center border h-115 w-150 p-6 gap-6">
                <h1 className="text-xl">Cadastro</h1>
                <div className="flex flex-col gap-5 w-2/3">
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" className="border rounded-md px-2 py-1"/>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border rounded-md px-2 py-1"/>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" className="border rounded-md px-2 py-1"/>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" className="border rounded-md px-2 py-1" required />
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirmar Senha" className="border rounded-md px-2 py-1" required />
                </div>
                <button type="submit" className="border rounded-xl w-max px-4 py-1 bg-dark-green text-white cursor-pointer">Cadastrar</button>
                <a href="/login" className="text-blue-500 w-fit" ><p>Já tem conta? Faça Login</p></a>
            </form>
        </div>
    );
}

export default Cadastro;