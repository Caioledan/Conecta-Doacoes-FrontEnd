function Footer_main(){
    return (
        <footer className="bg-solidarity-orange h-80 flex justify-center items-center gap-40 font-epilogue text-white">
            <div>
                <img src="src\assets\images\logo_footer.png" alt="" className="h-30"/>
            </div>
 
            <div className="flex flex-col gap-10 ">
                <ul className="font-medium text-xl  flex space-x-15">
                    <a className="hover:cursor-pointer"><li>Sobre nós</li></a>
                    <a className="hover:cursor-pointer"><li>Gerenciamento</li></a>
                    <a className="hover:cursor-pointer"><li>Projeto</li></a>
                    <a className="hover:cursor-pointer"><li>FAQ's</li></a>
                </ul>
                <ul className="flex justify-around items-center">
                    <li>contato@conecta.com</li>
                    <li>(505)555-0125</li>
                </ul>
            </div>

            <div className="flex flex-col space-y-5">
                <p>Newsletter</p>
                <input type="email" placeholder="Insira seu e-mail aqui" className="focus:outline-none"/>
            </div>
        </footer>
    )
}

export default Footer_main;