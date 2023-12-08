import email from "../assets/Email.png";
import whatsapp from "../assets/WhatsApp.png";
import linkedin from "../assets/LinkedIn.png";
import github from "../assets/GitHub.png";
import logo from "../assets/logo.svg";

function Footer (){
    return(
            <footer id="footer" className="w-screen lg:h-80 bg-footer border-t-4 border-solid border-bd lg:p-24 p-8 space-y-28">
                <div className="flex lg:space-x-48 justify-center">
                    <a className="m-3 lg:m-0" href="mailto:ghgoncalves430@gmail.com"><img src={email} alt="" /></a>
                    <a className="m-3 lg:m-0" href="https://api.whatsapp.com/send?phone=5511987652242" target="_blank"><img src={whatsapp} alt="" /></a>
                    <a className="m-3 lg:m-0" href="https://www.linkedin.com/in/pcasemiro/" target="_blank"><img src={linkedin} alt="" /></a>
                    <a className="m-3 lg:m-0" href="https://github.com/pcasemiro" target="_blank"><img src={github} alt="" /></a>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-36">
                        <img className="w-full" src={logo} alt="" />
                    </div>
                    <p className="text-xl font-normal text-white">© Gustavo</p>
                </div>
            </footer>
        )
}

export default Footer;