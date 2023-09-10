import logo from "../assets/logo.png"

function Header (){
    return(
        <nav className="bg-primary w-screen h-[6.25rem] flex flex-row justify-between px-24 items-center border-b-4 border-solid border-bd">
            <div className="w-52">
                <img className="w-full" src={logo} alt="" />
            </div>
            <ul className="text-white flex flex-row space-x-8 text-2xl font-bold">
                <a href="#hero"><li>Inicio</li></a>
                <a href="#sobre"><li>Sobre</li></a>
                <a href="#habilidades"><li>Habilidades</li></a>
                <a href="#projetos"><li>Projetos</li></a>
                <a href="#footer"><li>Contato</li></a>
            </ul>
        </nav>
    )
}

export default Header;