function Menu_lateral(){
    return (
        <div className="font-epilogue w-40">
            <h2 className="font-bold mb-1">Categorias</h2>
            <ul className="space-y-1 mb-3 ml-8">
                <li><a href="">Eletrônicos</a></li>
                <li><a href="">Livros</a></li>
                <li><a href="">Móveis</a></li>
                <li><a href="">Roupas</a></li>
            </ul>
            <h2 className="font-bold mb-1">Localização</h2>
            <ul className="pace-y-1 mb-3 ml-8">
                <li><a href="">Centro</a></li>
                <li><a href="">Cidade Universitária</a></li>
                <li><a href="">Vila Matoso</a></li>
                <li><a href="">Guanabara</a></li>

            </ul>
            <h2 className="font-bold">Tipo</h2>
            <ul className="pace-y-1 mb-3 ml-8">
                <li><a href="">Troca</a></li>
                <li><a href="">Doação</a></li>
            </ul>
        </div>
    )
}

export default Menu_lateral;