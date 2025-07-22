function Cadastro(){
    return (
        <div className="flex ml-30 items-center font-epilogue">
            <div className="flex flex-col justify-center border h-4/5 w-150 p-6 gap-6">
                <h1 className="text-xl">Cadastro</h1>
                <div className="flex flex-col gap-5 w-2/3">
                    <input type="text" placeholder="Nome" className="border rounded-md px-2 py-1"/>
                    <input type="text" placeholder="Localização" className="border rounded-md px-2 py-1"/>
                    <input type="text" placeholder="E-mail" className="border rounded-md px-2 py-1"/>
                    <input type="text" placeholder="Senha" className="border rounded-md px-2 py-1"/>
                </div>
                <a href="" className="border rounded-xl w-max px-4 py-1 bg-dark-green text-white"><button className="cursor-pointer">Cadastrar</button></a>
                <a href="/login" className="text-blue-500 w-fit" ><p>Já tem conta? Faça Login</p></a>

            </div>

        </div>
    )
}

export default Cadastro;