import { MoveRight } from "lucide-react";
import Logo from "./Logo";

function CTA(){
    return (
        <div className="flex justify-center items-center gap-30 bg-soft-gray h-120">
            <Logo/>
            <div className="">
                <ul className="w-100 text-2xl space-y-4">
                    <hr />
                    <a className="block" href=""><li className="flex justify-between items-center">Como me cadastrar?<MoveRight className="flex-shrink-0"/></li></a>
                    <hr />
                    <a className="block" href=""><li className="flex justify-between items-center ">Qualquer item pode ser doado?<MoveRight className="flex-shrink-0"/></li></a>
                    <hr />
                    <a className="block" href=""><li className="flex justify-between items-center">Preciso pagar algo?<MoveRight className="flex-shrink-0"/></li></a>
                    <hr />
                    <a className="block" href=""><li className="flex justify-between items-center">É seguro para trocar informações?<MoveRight className="flex-shrink-0"/></li></a>
                    <hr />
                    <a className="block" href=""><li className="flex justify-between items-center">Em caso de não receber o item, quem pode me ajudar?<MoveRight className="flex-shrink-0"/></li></a>
                    <hr />
                </ul>
            </div>
        </div>
    ) 
}

export default CTA;