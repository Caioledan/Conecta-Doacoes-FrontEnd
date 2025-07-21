function Login(){
    return (
        <div className="flex ml-30 items-center font-epilogue">
            <div className="flex flex-col justify-center border h-2/3 w-150 p-6 gap-6">
                <h1 className="text-xl">Login</h1>
                <div className="flex flex-col gap-5 w-2/3">
                    <input type="text" placeholder="E-mail" className="border rounded-md px-2 py-1"/>
                    <input type="text" placeholder="Senha" className="border rounded-md px-2 py-1"/>
                </div>
                <a href="" className="border rounded-xl w-max px-4 py-1 bg-dark-green text-white"><button className="cursor-pointer">Entrar</button></a>
                <ul className="flex space-x-2">
                    <a href="" className="text-blue-500" ><li>Esqueceu sua senha?</li></a>
                    <li>|</li>
                    <a href="" className="text-blue-500" ><li>Ainda não é registrado?</li></a>
                </ul>
            </div>

        </div>
    )
}

export default Login;