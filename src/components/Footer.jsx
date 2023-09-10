import email from "../assets/Email.png";
import whatsapp from "../assets/WhatsApp.png";
import linkedin from "../assets/LinkedIn.png";
import github from "../assets/GitHub.png";
import logo from "../assets/logo.png";

function Footer (){
    return(
            <footer id="footer" className="w-screen h-80 bg-footer border-t-4 border-solid border-bd p-24 space-y-28">
                <div className="flex space-x-48 justify-center">
                    <a href=""><img src={email} alt="" /></a>
                    <a href=""><img src={whatsapp} alt="" /></a>
                    <a href="https://www.linkedin.com/in/pcasemiro/" target="_blank"><img src={linkedin} alt="" /></a>
                    <a href="https://github.com/pcasemiro" target="_blank"><img src={github} alt="" /></a>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-52">
                        <img className="w-full" src={logo} alt="" />
                    </div>
                    <p className="text-xl font-normal text-white">© Gustavo</p>
                </div>
            </footer>
        )
}

export default Footer;