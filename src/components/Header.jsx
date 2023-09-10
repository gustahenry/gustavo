import logo from "../assets/logo.png"

function Header (){
    return(
        <nav className="bg-primary w-screen lg:h-[6.25rem] flex lg:flex-row flex-col justify-between space-y-10 lg:space-y-0 lg:px-24 px-8 items-center border-b-4 border-solid border-bd">
            <div className="lg:w-52">
                <img className="w-full" src={logo} alt="" />
            </div>
            <ul className="text-white flex flex-wrap flex-row space-x-8 text-2xl font-bold">
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