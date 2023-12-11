import { useState } from 'react';
import logo from "../assets/logo.svg"

function Header (){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
        <nav className="bg-primary w-screen lg:h-[6.25rem] flex lg:flex-row flex-col justify-between space-y-6 lg:space-y-0 lg:px-24 px-8 items-center border-b-4 border-solid border-bd">
            <div className="lg:w-52">
                <img className="w-full pt-4 lg:pt-0" src={logo} alt="" />
            </div>
            <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                <p className="text-white text-2xl font-semibold pb-2">Menu</p>
            </div>
            <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } text-white lg:flex flex-wrap lg:flex-row flex-col transition ease-in-out delay-500 lg:space-x-8 text-xl font-bold text-center space-y-4 lg:space-y-0 pb-2 lg:pb-0`}
      >
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